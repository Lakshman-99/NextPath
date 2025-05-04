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
    StartNodeId: string;
    EndNodeId: string;

    showWeights: boolean;

    setNodeAlgorithm: (algo: Algorithm) => void;
    setNodeDirected: (isDirected: boolean) => void;
    setNodeWeighted: (isWeighted: boolean) => void;
    setNodeSpeed: (speed: number) => void;
    setNodeLoading: (isLoading: boolean) => void;
    setStart: (id: string) => void;
    setEnd: (id: string) => void;
    toggleWall: (id: string) => void;
    toggleVisited: (id: string) => void;
    setStoreNodes: (nodes: Node[]) => void;
    setStoreEdges: (edge: Edge[]) => void;
    toggleWeights: () => void;
    deleteNode: (id: string) => void;
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
    StartNodeId: "0",
    EndNodeId: "7",

    showWeights: false,

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
                if (isWeighted) {
                    state.storeEdges.forEach((edge: Edge) => {
                        edge.label = Math.floor(Math.random() * 10) + 1;
                    });
                }
                else {
                    state.storeEdges.forEach((edge: Edge) => {
                        edge.label = 1;
                    });
                }
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

    setStart: (id) =>
        set(
            produce((state) => {
                const prevNode = state.storeNodes.find((n: Node) => n.data.isStart);
                if (prevNode) {
                    prevNode.data.isStart = false;
                }
                state.StartNodeId = id;
                const node = state.storeNodes.find((n: Node) => n.id === id);
                if (node) {
                    node.data.isStart = !node.data.isStart;
                }
            })
        ),

    setEnd: (id) =>
        set(
            produce((state) => {
                const prevNode = state.storeNodes.find((n: Node) => n.data.isEnd);
                if (prevNode) {
                    prevNode.data.isEnd = false;
                }
                state.EndNodeId = id;
                const node = state.storeNodes.find((n: Node) => n.id === id);
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

    setStoreNodes: (new_nodes) =>
        set(
            produce((state) => {
                state.storeNodes = new_nodes;
            })
        ),

    setStoreEdges: (new_edges) =>
        set(
            produce((state) => {
                state.storeEdges = new_edges;
            })
        ),

    toggleWeights: () =>
        set(
            produce((state) => {
                state.showWeights = !state.showWeights;
            })
        ),

    deleteNode: (id) =>
        set(
            produce((state) => {
                state.storeNodes = state.storeNodes.filter((node: Node) => node.id !== id);
                state.storeEdges = state.storeEdges.filter((edge: Edge) => edge.source !== id && edge.target !== id);
                state.n_nodes -= 1;
            })
        ),
}));
