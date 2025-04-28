"use client";

import { Position, useGraphStore, Node } from "@/app/store/store";
import { addPathsWithDelay, addVisitedWithDelay } from "../animation";
import { directions, isValidPosition } from "../util";


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
    
    await addVisitedWithDelay(visitedNodesInOrder, speed, toggleVisited);
    if (isEndReached) {
        await addPathsWithDelay(path, speed, toggleVisited, togglePath);
    }

    return true;
};