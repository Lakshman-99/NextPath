import { Position } from "../store/store";
import { useGraphStore } from "../store/store";

export async function applyRandomMage(): Promise<boolean> {
    const { rows, cols, startNode, endNode, speed, addWall } = useGraphStore.getState();

    const wallDensity = 0.3; // Adjust this value to control the density of walls (0 to 1)
    const newWalls: Position[] = [];

    const curSpeed = 1000 * (1 - speed);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Skip the start and end nodes
            if ((row === startNode.row && col === startNode.col) || (row === endNode.row && col === endNode.col)) {
                continue;
            }

            // Randomly decide whether to place a wall based on the density
            if (Math.random() < wallDensity) {
                newWalls.push({ row, col });
            }
        }
    }

    await addWallsWithDelay(shuffleArray(newWalls), curSpeed, addWall);
    return true;
}

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function addWallsWithDelay(positions: Position[], speed: number, addWall: (row: number, col: number) => void) {
    for (let i = 0; i < positions.length; i++) {
        const { row, col } = positions[i];
        addWall(row, col);
    
        await new Promise((resolve) => setTimeout(resolve, speed));
    }
}
