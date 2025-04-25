import { create } from "zustand";

type GraphType = "grid" | "node";
type Algorithm = "bfs" | "dfs" | "dijkstra";
type Maze = "none" | "random" | "recursive-division" | "prim" | "kruskal";

interface GraphStore {
    type: GraphType;
    rows: number;
    cols: number;
    cellSize: number;
    algorithm: Algorithm;
    maze: Maze;
    speed: number;

    defaultRows: number;
    defaultCols: number;
    defaultCellSize: number;

    setType: (type: GraphType) => void;
    setSize: (rows: number, cols: number) => void;
    setAlgorithm: (algo: Algorithm) => void;
    setMaze: (maze: Maze) => void;
    setSpeed: (speed: number) => void;
    setCellSize: (size: number) => void;
    setDefaultSize: (rows: number, cols: number, cellSize: number) => void;
}

export type Node = {
    row: number;
    col: number;
    visited: boolean;
    isWall: boolean;
    weight: number;
};

export const useGraphStore = create<GraphStore>((set) => ({
    type: "grid",
    rows: 10,
    cols: 20,
    cellSize: 55,
    algorithm: "bfs",
    maze: "none",
    speed: 80,

    defaultRows: 10,
    defaultCols: 20,
    defaultCellSize: 55,

    setType: (type) => set({ type }),
    setSize: (rows, cols) => set({ rows, cols }),
    setAlgorithm: (algorithm) => set({ algorithm }),
    setMaze: (maze) => set({ maze }),
    setSpeed: (speed) => set({ speed }),
    setCellSize: (cellSize) => set({ cellSize }),
    setDefaultSize: (defaultRows, defaultCols, defaultCellSize) => set({ defaultRows, defaultCols, defaultCellSize }),
}));

export const createGridMatrix = (rows: number, cols: number): Node[][] => {
    const matrix: Node[][] = [];

    for (let row = 0; row < rows; row++) {
        const currentRow: Node[] = [];
        for (let col = 0; col < cols; col++) {
            currentRow.push({
                row,
                col,
                visited: false,
                isWall: false,
                weight: 1,
            });
        }
        matrix.push(currentRow);
    }

    return matrix;
};
