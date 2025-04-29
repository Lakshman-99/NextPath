"use client";

import { useGraphStore, Node, Position } from "../../store/gridStore";
import { directions, isValidPosition } from "../util";
import { addVisitedWithDelay, addPathsWithDelay } from "../animation";

function reconstructPath(
    cameFrom: (Position | null)[][],
    start: Node,
    end: Node
): Position[] {
    const path: Position[] = [];
    let current: Position | null = { row: end.row, col: end.col };

    while (
        current &&
        !(current.row === start.row && current.col === start.col)
    ) {
        path.push(current);
        current = cameFrom[current.row][current.col];
    }

    path.push({ row: start.row, col: start.col });
    return path.reverse(); // From start to end
}

export async function applyBFSAlgorithm(): Promise<boolean> {
    const { grid, rows, cols, startNode, speed, toggleVisited, togglePath } =
        useGraphStore.getState();
    const queue: Node[] = [];
    const visitedNodesInOrder: Position[] = [];

    const visited: boolean[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );
    const parent: (Position | null)[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(null)
    );

    queue.push(grid[startNode.row][startNode.col]);
    visited[startNode.row][startNode.col] = true;

    let endReached = false;

    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        visitedNodesInOrder.push({
            row: currentNode.row,
            col: currentNode.col,
        });

        if (currentNode.isEnd) {
            endReached = true;
            break;
        }

        for (const { row: dRow, col: dCol } of directions) {
            const newRow = currentNode.row + dRow;
            const newCol = currentNode.col + dCol;

            if (
                isValidPosition(newRow, newCol, rows, cols) &&
                !visited[newRow][newCol] &&
                !grid[newRow][newCol].isWall
            ) {
                queue.push(grid[newRow][newCol]);
                visited[newRow][newCol] = true;
                parent[newRow][newCol] = {
                    row: currentNode.row,
                    col: currentNode.col,
                };
            }
        }
    }

    await addVisitedWithDelay(visitedNodesInOrder, speed, toggleVisited);
    if (endReached) {
        const shortestPath = reconstructPath(
            parent,
            grid[startNode.row][startNode.col],
            grid
                .find((row) => row.find((node) => node.isEnd))!
                .find((node) => node.isEnd)!
        );
        await addPathsWithDelay(shortestPath, speed, toggleVisited, togglePath);
    }

    return true;
}
