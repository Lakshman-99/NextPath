"use client";

import { useState, useMemo, useEffect } from "react";
import { useGraphStore, createGridMatrix } from "../../store/store";
import { GridCell } from "./grid-cell";
import { calculateCellSize, getRowColBasedCellSize } from "../../utils/util";
import { useMediaQuery } from "usehooks-ts"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Settings,Eye,EyeOff, Route, CloudOff } from "lucide-react"

export function GridBasedGraph() {
    const [showWeight, setShowWeight] = useState(false);
    const { rows, cols, isWeighted, defaultRows, defaultCols, startNode, endNode, walls, setCellSize, setStartNode, setEndNode, clearWalls, setMaze } = useGraphStore();
    const matrix = useMemo(() => createGridMatrix(rows, cols, startNode, endNode, walls), [rows, cols, startNode, endNode, walls]);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const clearGrid = () => {
        setStartNode(-1, -1);
        setEndNode(-1, -1);
        setMaze("none");
        clearWalls();
    }

    const clearObstacle = () => {
        setMaze("none");
        clearWalls();
    }


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
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold"></h2>
                <div className="flex items-center gap-1">
                    {isMobile ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Settings className="h-5 w-5 animate-spin3x" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuItem onClick={clearGrid}>
                                    <Route className="h-4 w-4" />
                                    Clear Grid
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={clearObstacle}>
                                    <CloudOff className="h-4 w-4" />
                                    Clear Obstacle
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setShowWeight(!showWeight)} disabled={!isWeighted}>
                                    {showWeight ? 
                                        <>
                                            <EyeOff className="h-4 w-4" />
                                            <span className="">Hide Weights</span>
                                        </>
                                    : 
                                    <>
                                        <Eye className="h-4 w-4" />
                                        <span className="">Show Weights</span>
                                    </>                                   
                                    }
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex gap-1">
                            <Button variant="outline" onClick={clearGrid}>
                                <Route className="h-4 w-4" />
                                Clear Grid
                            </Button>
                            <Button variant="outline" onClick={clearObstacle}>
                                <CloudOff className="h-4 w-4" />
                                Clear Obstacle
                            </Button>
                            <Button variant="outline" onClick={() => setShowWeight(!showWeight)} disabled={!isWeighted}>
                                {showWeight ? 
                                    <>
                                        <EyeOff className="h-4 w-4" />
                                        <span className="">Hide Weights</span>
                                    </>
                                : 
                                <>
                                    <Eye className="h-4 w-4" />
                                    <span className="">Show Weights</span>
                                </>                                   
                                }
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <div className={`flex ${ !isMobile ? "h-full" : "" } w-full flex-col items-center justify-center overflow-auto p-0`}>
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
