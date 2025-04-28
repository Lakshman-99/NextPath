export const directions = [
    { row: 0, col: 1 }, // Right
    { row: 1, col: 0 }, // Down
    { row: 0, col: -1 }, // Left
    { row: -1, col: 0 }, // Up
];

export function isValidPosition(row: number, col: number, rows: number, cols: number): boolean {
    return row >= 0 && row < rows && col >= 0 && col < cols;
};

// Utility to calculate grid defaults based on screen size
export const calculateCellSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const widthScalingFactor = screenWidth / 1536;
    const heightScalingFactor = screenHeight / 731;

    // Calculate the average scaling factor
    const averageScalingFactor = (widthScalingFactor + heightScalingFactor) / 2;

    // Calculate and round off the new cell size
    const newCellSize = 55 * averageScalingFactor;

    // Round off to the specified decimal places
    return Math.round(newCellSize);
};

export const getRowColBasedCellSize = (defaultRows: number, defaultCols: number, newRows: number, newColumns: number, originalCellSize: number) => {
    const originalRowCells = defaultRows;
    const originalColCells = defaultCols;

    // Scale the cell size based on the ratio of total cells
    const newCellSize1 = originalCellSize * (originalRowCells / newRows);
    const newCellSize2 = originalCellSize * (originalColCells / newColumns);
    const newCellSize = Math.min(newCellSize1, newCellSize2, 150);

    return Math.round(newCellSize);
};

export const getGridDefaults = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
        return { defRows: 8, defCols: 8, defCellSize: 35 };
    }

    return { defRows: 10, defCols: 20, defCellSize: 50 };
};
