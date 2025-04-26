import { create } from "zustand";

export type GraphType = "grid" | "node";
export type Algorithm = "bfs" | "dfs" | "dijkstra";
export type Maze = "none" | "random" | "recursive" | "recursive-vertical" | "recursive-horizontal";
export type Position = { row: number; col: number };

interface GraphStore {
    type: GraphType;
    rows: number;
    cols: number;
    cellSize: number;
    algorithm: Algorithm;
    maze: Maze;
    speed: number;
    isWeighted: boolean;
    startNode: Position;
    endNode: Position;
    walls: Position[];

    defaultRows: number;
    defaultCols: number;
    defaultCellSize: number;

    setType: (type: GraphType) => void;
    setSize: (rows: number, cols: number) => void;
    setAlgorithm: (algo: Algorithm) => void;
    setMaze: (maze: Maze) => void;
    setSpeed: (speed: number) => void;
    setCellSize: (size: number) => void;
    setWeighted: (isWeighted: boolean) => void;
    setDefaultSize: (rows: number, cols: number, cellSize: number) => void;
    setStartNode: (row: number, col: number) => void;
    setEndNode: (row: number, col: number) => void;
    addWall: (row: number, col: number) => void;
    removeWall: (row: number, col: number) => void;
    clearWalls: () => void;
}

export type Node = {
    row: number;
    col: number;
    isStart?: boolean;
    isEnd?: boolean;
    visited: boolean;
    isWall: boolean;
    weight: number;
    color: string;
};

export const useGraphStore = create<GraphStore>((set) => ({
    type: "grid",
    rows: 10,
    cols: 20,
    cellSize: 55,
    algorithm: "bfs",
    maze: "none",
    speed: 80,
    isWeighted: false,
    startNode: { row: 2, col: 2 }, // Top-left corner
    endNode: { row: 7, col: 17 }, // Bottom-right corner
    walls: [],

    defaultRows: 10,
    defaultCols: 20,
    defaultCellSize: 55,

    setType: (type) => set({ type }),
    setSize: (rows, cols) => set({ rows, cols }),
    setAlgorithm: (algorithm) => set({ algorithm }),
    setMaze: (maze) => set({ maze }),
    setSpeed: (speed) => set({ speed }),
    setCellSize: (cellSize) => set({ cellSize }),
    setWeighted: (isWeighted) => set({ isWeighted }),
    setDefaultSize: (defaultRows, defaultCols, defaultCellSize) => set({ defaultRows, defaultCols, defaultCellSize }),
    setStartNode: (row, col) => set({ startNode: { row, col } }),
    setEndNode: (row, col) => set({ endNode: { row, col } }),
    addWall: (row, col) => set((state) => ({ walls: [...state.walls, { row, col }] })),
    removeWall: (row, col) => set((state) => ({ walls: state.walls.filter((wall) => wall.row !== row || wall.col !== col) })),
    clearWalls: () => set({ walls: [] }),
}));

export const createGridMatrix = (rows: number, cols: number, startNode: Position, endNode: Position, walls: Position[]): Node[][] => {
    const matrix: Node[][] = [];

    for (let row = 0; row < rows; row++) {
        const currentRow: Node[] = [];
        for (let col = 0; col < cols; col++) {
            const isStart = row === startNode.row && col === startNode.col; // Top-left corner
            const isEnd = row === endNode.row && col === endNode.col; // Bottom-right corner
            const isWall = walls.some((wall) => wall.row === row && wall.col === col); // Check if the cell is a wall

            currentRow.push({
                row,
                col,
                isStart: isStart,
                isEnd: isEnd,
                isWall: isWall,
                color: "none",
                visited: false,
                weight: 1,
            });
        }
        matrix.push(currentRow);
    }

    return matrix;
};
