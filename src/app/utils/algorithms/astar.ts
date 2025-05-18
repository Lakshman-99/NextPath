import { useGraphStore, Node, Position } from "../../store/gridStore";
import { addPathsWithDelay, addVisitedWithDelay } from "../animation";
import { directions, isValidPosition } from "../util";

function heuristic(a: Position, b: Position): number {
    return Math.abs(a.row - b.row) + Math.abs(a.col - b.col); // Manhattan distance
}

function getNeighbors(node: Position, grid: Node[][], rows: number, cols: number): Position[] {
    const { row, col } = node;

    const neighbors: Position[] = [];
    for (const dir of directions) {
        const newRow = row + dir.row;
        const newCol = col + dir.col;
        if (isValidPosition(newRow, newCol, rows, cols) && !grid[newRow][newCol].isWall) {
            neighbors.push(grid[newRow][newCol]);
        }
    }
    return neighbors;
}

export async function applyAStarAlgorithm(): Promise<boolean> {
    const { grid, rows, cols, startNode, endNode, speed, toggleVisited, togglePath } =
        useGraphStore.getState();

    if (!startNode || !endNode) return false;

    const key = (pos: Position) => `${pos.row},${pos.col}`;

    const openSet: Position[] = [startNode];
    const cameFrom = new Map<string, Position>();
    const gScore = new Map<string, number>();
    const fScore = new Map<string, number>();
    const visitedNodesInOrder: Position[] = [];
    let isEndReached = false;

    gScore.set(key(startNode), 0);
    fScore.set(key(startNode), heuristic(startNode, endNode));

    while (openSet.length > 0) {
        openSet.sort((a, b) => (fScore.get(key(a)) ?? Infinity) - (fScore.get(key(b)) ?? Infinity));
        const current = openSet.shift()!;
        visitedNodesInOrder.push({ row: current.row, col: current.col });

        if (current.row === endNode.row && current.col === endNode.col) {
            isEndReached = true;
            break;
        }

        for (const neighbor of getNeighbors(current, grid, rows, cols)) {
            const neighborKey = key(neighbor);
            const tentativeG = (gScore.get(key(current)) ?? Infinity) + grid[neighbor.row][neighbor.col].weight;

            if (tentativeG < (gScore.get(neighborKey) ?? Infinity)) {
                cameFrom.set(neighborKey, current);
                gScore.set(neighborKey, tentativeG);
                fScore.set(neighborKey, tentativeG + heuristic(neighbor, endNode));

                if (!openSet.find(n => n.row === neighbor.row && n.col === neighbor.col)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    await addVisitedWithDelay(visitedNodesInOrder, speed, toggleVisited);

    if (isEndReached) {
        const shortestPath: Position[] = [];
        let tempKey = key(endNode);
        shortestPath.push({ row: endNode.row, col: endNode.col });

        while (cameFrom.has(tempKey)) {
            const prev = cameFrom.get(tempKey)!;
            shortestPath.unshift({ row: prev.row, col: prev.col });
            tempKey = key(prev);
        }
        await addPathsWithDelay(shortestPath, speed, toggleVisited, togglePath);
    }

    return true;
}