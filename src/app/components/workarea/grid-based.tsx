"use client";

import { useState, useMemo, useEffect } from "react";
import { useGraphStore, createGridMatrix } from "../../store/store";
import { GridCell } from "./grid-cell";
import { calculateCellSize, getRowColBasedCellSize } from "../../util";

export function GridBasedGraph() {
    const [showWeight, setShowWeight] = useState(false);
    const { rows, cols, defaultRows, defaultCols, setCellSize } = useGraphStore();
    const matrix = useMemo(() => createGridMatrix(rows, cols), [rows, cols]);

    useEffect(() => {
        const handleResize = () => {
            const newCellSize = calculateCellSize();
            const cellSize = getRowColBasedCellSize(defaultRows, defaultCols, rows, cols, newCellSize);
            setCellSize(cellSize);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [cols, defaultCols, defaultRows, rows, setCellSize]);

    return (
        <div className="p-5 h-full flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
                Your Title or Message Here
            </h2>

            <div className="flex h-full w-full flex-col items-center justify-center overflow-auto p-0">
                <div className="outline-none" tabIndex={0}>
                    {matrix.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex">
                            {row.map((node) => (
                                <GridCell
                                    key={`${node.row}-${node.col}`}
                                    node={node}
                                    isSelected={false} // Replace with actual selection logic
                                    showWeight={showWeight} // Replace with actual weight visibility logic
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
