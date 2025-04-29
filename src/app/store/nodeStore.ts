import { create } from "zustand";

export type Algorithm = undefined | "bfs" | "dfs" | "dijkstra";

interface NodeStore {
    n_nodes: number;
    n_algorithm: Algorithm;
    n_isDirected: boolean;
    n_isWeighted: boolean;
    n_speed: number;
    n_isLoading: boolean;

    setNodes: (nodes: number) => void;
    setNodeAlgorithm: (algo: Algorithm) => void;
    setNodeDirected: (isDirected: boolean) => void;
    setNodeWeighted: (isWeighted: boolean) => void;
    setNodeSpeed: (speed: number) => void;
    setNodeLoading: (isLoading: boolean) => void;
};

export const useNodeStore = create<NodeStore>((set) => ({
    n_nodes: 10,
    n_algorithm: undefined,
    n_isDirected: false,
    n_isWeighted: false,
    n_speed: 1,
    n_isLoading: false,

    setNodes: (nodes) => set({ n_nodes: nodes }),
    setNodeAlgorithm: (algo) => set({ n_algorithm: algo }),
    setNodeDirected: (isDirected) => set({ n_isDirected: isDirected }),
    setNodeWeighted: (isWeighted) => set({ n_isWeighted: isWeighted }),
    setNodeSpeed: (speed) => set({ n_speed: speed }),
    setNodeLoading: (isLoading) => set({ n_isLoading: isLoading }),
}));