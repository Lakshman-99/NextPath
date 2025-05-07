"use client";

import { useGraphStore, Node, Position } from "../../store/gridStore";
import { constructAdjacencyList, directions, getEdgesForNodes, isValidPosition } from "../util";
import { addVisitedWithDelay, addPathsWithDelay, addVisitedWithDelayForNodes, addPathsWithDelayForNodes, addAnimationForEdges } from "../animation";
import { Edge } from "@xyflow/react";
import { useNodeStore } from "@/app/store/nodeStore";

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

export async function applyDijkstraAlgorithm(): Promise<boolean> {
    const { grid, rows, cols, startNode, speed, toggleVisited, togglePath } =
        useGraphStore.getState();
    const visitedNodesInOrder: Position[] = [];

    const distances: number[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(Infinity)
    );
    const parent: (Position | null)[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(null)
    );
    const queue: Node[] = [];

    distances[startNode.row][startNode.col] = 0;
    queue.push(grid[startNode.row][startNode.col]);

    let endReached = false;

    while (queue.length > 0) {
        queue.sort((a, b) => distances[a.row][a.col] - distances[b.row][b.col]);
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
                !grid[newRow][newCol].isWall
            ) {
                const newDistance =
                    distances[currentNode.row][currentNode.col] +
                    grid[newRow][newCol].weight;

                if (newDistance < distances[newRow][newCol]) {
                    distances[newRow][newCol] = newDistance;
                    parent[newRow][newCol] = {
                        row: currentNode.row,
                        col: currentNode.col,
                    };
                    queue.push(grid[newRow][newCol]);
                }
            }
        }
    }

    await addVisitedWithDelay(visitedNodesInOrder, speed, toggleVisited);
    if (endReached) {
        const endNode = grid
            .find((row) => row.find((node) => node.isEnd))!
            .find((node) => node.isEnd)!;
        const shortestPath = reconstructPath(
            parent,
            grid[startNode.row][startNode.col],
            endNode
        );
        await addPathsWithDelay(shortestPath, speed, toggleVisited, togglePath);
    }

    return true;
};

export async function applyDijkstraAlgorithmForNodes(): Promise<boolean> {
    const { storeNodes, storeEdges, n_isDirected, StartNodeId, EndNodeId, n_speed, toggleVisited, togglePath, toggleAnimatedEdge, toggleEdgeReverse } = useNodeStore.getState();
    
    const adjacencyList: { [key: string]: string[] } = constructAdjacencyList(storeNodes, storeEdges, n_isDirected);

    const distances: { [key: string]: number } = { [StartNodeId]: 0 };
    const parent: { [key: string]: string | null } = { [StartNodeId]: null };
    const queue: string[] = [StartNodeId];
    const visited: { [key: string]: boolean } = { [StartNodeId]: true };
    const visitedNodesInOrder: string[] = [];

    let endReached = false;

    while (queue.length > 0) {
        queue.sort((a, b) => (distances[a] || Infinity) - (distances[b] || Infinity));
        const currentNode = queue.shift()!;
        visitedNodesInOrder.push(currentNode);

        if (currentNode === EndNodeId) {
            endReached = true;
            break;
        }

        for (const neighbor of adjacencyList[currentNode]) {
            if (!visited[neighbor]) {
                const weight = storeEdges.find((edge: Edge) => edge.source === currentNode && edge.target === neighbor)?.label ?? 1;
                const newDistance = distances[currentNode] + Number(weight);

                if (newDistance < (distances[neighbor] || Infinity)) {
                    distances[neighbor] = newDistance;
                    parent[neighbor] = currentNode;
                    queue.push(neighbor);
                }
            }
        }
    }

    await addVisitedWithDelayForNodes(visitedNodesInOrder, n_speed, toggleVisited);
    if (endReached) {
        const path: string[] = [];

        let currentNode: string | null = EndNodeId;
        while (currentNode !== null) {
            path.push(currentNode);
            currentNode = parent[currentNode];
        }
        path.reverse();
        await addPathsWithDelayForNodes(path, n_speed, toggleVisited, togglePath);

        const PathEdges: string[] = getEdgesForNodes(path, storeEdges, toggleEdgeReverse);
        addAnimationForEdges(PathEdges, n_speed, toggleAnimatedEdge);
    }

    return true;
}