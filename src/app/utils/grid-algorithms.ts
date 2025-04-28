import { useGraphStore, Node, Position } from "../store/store";

export const directions = [
    { row: 0, col: 1 }, // Right
    { row: 1, col: 0 }, // Down
    { row: 0, col: -1 }, // Left
    { row: -1, col: 0 }, // Up
];

function isValidPosition(row: number, col: number, rows: number, cols: number): boolean {
    return row >= 0 && row < rows && col >= 0 && col < cols;
};

function reconstructPath(cameFrom: (Position | null)[][], start: Node, end: Node): Position[] {
    const path: Position[] = [];
    let current: Position | null = { row: end.row, col: end.col };

    while (current && !(current.row === start.row && current.col === start.col)) {
        path.push(current);
        current = cameFrom[current.row][current.col];
    }

    path.push({ row: start.row, col: start.col }); // Include start node
    return path.reverse(); // From start to end
}

export async function applyBFSAlgorithm(): Promise<boolean> {
    const { grid, rows, cols, startNode, speed, toggleVisited, togglePath } = useGraphStore.getState();
    const queue: Node[] = [];
    const visitedNodesInOrder: Position[] = [];
    // const shortestPath: Node[] = [];

    const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
    const parent: (Position | null)[][] = Array.from({ length: rows }, () => Array(cols).fill(null));

    queue.push(grid[startNode.row][startNode.col]);
    visited[startNode.row][startNode.col] = true;

    let endReached = false;

    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        visitedNodesInOrder.push({row: currentNode.row, col: currentNode.col});

        if (currentNode.isEnd) {
            endReached = true;
            break;
        }

        for (const { row: dRow, col: dCol } of directions) {
            const newRow = currentNode.row + dRow;
            const newCol = currentNode.col + dCol;

            if (isValidPosition(newRow, newCol, rows, cols) && !visited[newRow][newCol] && !grid[newRow][newCol].isWall) {
                queue.push(grid[newRow][newCol]);
                visited[newRow][newCol] = true;
                parent[newRow][newCol] = { row: currentNode.row, col: currentNode.col };
            }
        }
    }

    await addVisitedWithDelay(visitedNodesInOrder, speed, toggleVisited);
    if (endReached) {
        const shortestPath = reconstructPath(parent, grid[startNode.row][startNode.col], grid.find((row) => row.find((node) => node.isEnd))!.find((node) => node.isEnd)!);        
        await addPathsWithDelay(shortestPath, speed, toggleVisited, togglePath);
    }

    return true;
}

function dfsHelper(row: number, col: number, grid: Node[][], visited: boolean[][], visitedNodesInOrder: Position[], path: Position[]): boolean {
    if (!isValidPosition(row, col, grid.length, grid[0].length) || visited[row][col] || grid[row][col].isWall) {
        return false;
    }

    visited[row][col] = true;
    visitedNodesInOrder.push({ row: row, col: col });
    path.push({ row: row, col: col });

    if (grid[row][col].isEnd) {
        return true;
    }

    if (
        dfsHelper(row, col + 1, grid, visited, visitedNodesInOrder, path) || // Right
        dfsHelper(row + 1, col, grid, visited, visitedNodesInOrder, path) || // Down
        dfsHelper(row, col - 1, grid, visited, visitedNodesInOrder, path) || // Left
        dfsHelper(row - 1, col, grid, visited, visitedNodesInOrder, path)    // Up
    ) {
        return true;
    }

    path.pop();
    return false;
}

export async function applyDFSAlgorithm(): Promise<boolean> {
    const { grid, rows, cols, startNode, speed, toggleVisited, togglePath } = useGraphStore.getState();

    const visitedNodesInOrder: Position[] = [];
    const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
    const path: Position[] = [];
    let isEndReached = false;

    visited[startNode.row][startNode.col] = true;
    for (const { row, col } of directions) {
        const newRow = startNode.row + row;
        const newCol = startNode.col + col;

        if (dfsHelper(newRow, newCol, grid, visited, visitedNodesInOrder, path)) {
            isEndReached = true;
            break;
        }
        path.length = 0; // Clear path for next iteration
    }
    console.log("DFS Path: ", path);
    console.log("DFS Visited: ", visitedNodesInOrder);
    
    await addVisitedWithDelay(visitedNodesInOrder, speed, toggleVisited);
    if (isEndReached) {
        await addPathsWithDelay(path, speed, toggleVisited, togglePath);
    }

    return true;
};

async function addPathsWithDelay(path: Position[], speed: number, toggleVisited: (row: number, col: number) => void, togglePath: (row: number, col: number) => void) {
    const curSpeed = 1000 * (1 - speed);
    const adjustedSpeed = speed - 1;

    let batch = 1;
    if(adjustedSpeed > 0) {
        batch += Math.floor(adjustedSpeed * 10);
    }

    for (let i = 0; i < path.length; i += batch) {
        for (let j = i; j < Math.min(i + batch, path.length); j++) {
            const { row, col } = path[j];
            toggleVisited(row, col);
            togglePath(row, col);
        }
        await delay(curSpeed);
    }
}

async function addVisitedWithDelay(walls: Position[], speed: number, toggleVisited: (row: number, col: number) => void) {
    const curSpeed = 1000 * (1 - speed);
    const adjustedSpeed = speed - 1;

    let batch = 1;
    if(adjustedSpeed > 0) {
        batch += Math.floor(adjustedSpeed * 10);
    }

    for (let i = 0; i < walls.length; i += batch) {
        for (let j = i; j < Math.min(i + batch, walls.length); j++) {
            const { row, col } = walls[j];
            toggleVisited(row, col);
        }
        await delay(curSpeed);
    }
}

async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}