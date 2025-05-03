import { create } from "zustand";
import { Edge, Node } from "@xyflow/react";
import { produce } from "immer";
import { getInitialEdges, getInitialNodes } from "../utils/xyflowUtils/util";

export type Algorithm = undefined | "bfs" | "dfs" | "dijkstra";

export type Data = {
    label: string;
    isStart: boolean;
    isEnd: boolean;
    visited: boolean;
    isWall: boolean;
    isPath: boolean;
};

interface NodeStore {
    n_nodes: number;
    n_algorithm: Algorithm;
    n_isDirected: boolean;
    n_isWeighted: boolean;
    n_speed: number;
    n_isLoading: boolean;

    storeNodes: Node[];
    storeEdges: Edge[];

    setNodes: (nodes: number) => void;
    setNodeAlgorithm: (algo: Algorithm) => void;
    setNodeDirected: (isDirected: boolean) => void;
    setNodeWeighted: (isWeighted: boolean) => void;
    setNodeSpeed: (speed: number) => void;
    setNodeLoading: (isLoading: boolean) => void;
    toggleStart: (id: string) => void;
    toggleEnd: (id: string) => void;
    toggleWall: (id: string) => void;
    toggleVisited: (id: string) => void;
}

export const useNodeStore = create<NodeStore>((set) => ({
    n_nodes: 8,
    n_algorithm: undefined,
    n_isDirected: true,
    n_isWeighted: false,
    n_speed: 1,
    n_isLoading: false,

    storeNodes: getInitialNodes(),
    storeEdges: getInitialEdges(),

    setNodes: (nodes) =>
        set(
            produce((state) => {
                state.n_nodes = nodes;
            })
        ),

    setNodeAlgorithm: (algo) =>
        set(
            produce((state) => {
                state.n_algorithm = algo;
            })
        ),

    setNodeDirected: (isDirected) =>
        set(
            produce((state) => {
                state.n_isDirected = isDirected;
            })
        ),

    setNodeWeighted: (isWeighted) =>
        set(
            produce((state) => {
                state.n_isWeighted = isWeighted;
            })
        ),

    setNodeSpeed: (speed) =>
        set(
            produce((state) => {
                state.n_speed = speed;
            })
        ),

    setNodeLoading: (isLoading) =>
        set(
            produce((state) => {
                state.n_isLoading = isLoading;
            })
        ),

    toggleStart: (id) =>
        set(
            produce((state) => {
                const node = state.nodes.find((n: Node) => n.id === id);
                if (node) {
                    node.data.isStart = !node.data.isStart;
                }
            })
        ),

    toggleEnd: (id) =>
        set(
            produce((state) => {
                const node = state.nodes.find((n: Node) => n.id === id);
                if (node) {
                    node.data.isEnd = !node.data.isEnd;
                }
            })
        ),

    toggleWall: (id) =>
        set(
            produce((state) => {
                const node = state.nodes.find((n: Node) => n.id === id);
                if (node) {
                    node.data.isWall = !node.data.isWall;
                }
            })
        ),

    toggleVisited: (id) =>
        set(
            produce((state) => {
                const node = state.nodes.find((n: Node) => n.id === id);
                if (node) {
                    node.data.visited = !node.data.visited;
                }
            })
        ),
}));
