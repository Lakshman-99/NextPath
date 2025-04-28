"use client";

import { useGraphStore, Node, Position } from "../../store/store";
import { directions, isValidPosition } from "../util";
import { addVisitedWithDelay, addPathsWithDelay } from "../animation";

function reconstructPath(cameFrom: (Position | null)[][], start: Node, end: Node): Position[] {
    const path: Position[] = [];
    let current: Position | null = { row: end.row, col: end.col };

    while (current && !(current.row === start.row && current.col === start.col)) {
        path.push(current);
        current = cameFrom[current.row][current.col];
    }

    path.push({ row: start.row, col: start.col });
    return path.reverse(); // From start to end
}

export async function applyDijkstraAlgorithm(): Promise<boolean> {
    const { grid, rows, cols, startNode, speed, toggleVisited, togglePath } = useGraphStore.getState();
    const visitedNodesInOrder: Position[] = [];

    const distances: number[][] = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    const parent: (Position | null)[][] = Array.from({ length: rows }, () => Array(cols).fill(null));
    const queue: Node[] = [];

    distances[startNode.row][startNode.col] = 0;
    queue.push(grid[startNode.row][startNode.col]);

    let endReached = false;

    while (queue.length > 0) {
        queue.sort((a, b) => distances[a.row][a.col] - distances[b.row][b.col]);
        const currentNode = queue.shift()!;
        visitedNodesInOrder.push({ row: currentNode.row, col: currentNode.col });

        if (currentNode.isEnd) {
            endReached = true;
            break;
        }

        for (const { row: dRow, col: dCol } of directions) {
            const newRow = currentNode.row + dRow;
            const newCol = currentNode.col + dCol;

            if (isValidPosition(newRow, newCol, rows, cols) && !grid[newRow][newCol].isWall) {
                const newDistance = distances[currentNode.row][currentNode.col] + grid[newRow][newCol].weight;

                if (newDistance < distances[newRow][newCol]) {
                    distances[newRow][newCol] = newDistance;
                    parent[newRow][newCol] = { row: currentNode.row, col: currentNode.col };
                    queue.push(grid[newRow][newCol]);
                }
            }
        }
    }

    await addVisitedWithDelay(visitedNodesInOrder, speed, toggleVisited);
    if (endReached) {
        const endNode = grid.find((row) => row.find((node) => node.isEnd))!.find((node) => node.isEnd)!;
        const shortestPath = reconstructPath(parent, grid[startNode.row][startNode.col], endNode);        
        await addPathsWithDelay(shortestPath, speed, toggleVisited, togglePath);
    }

    return true;
};