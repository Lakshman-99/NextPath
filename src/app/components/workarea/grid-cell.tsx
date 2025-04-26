import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Node } from "../../store/store"
import { useGraphStore } from "../../store/store";
import { Plane, LandPlot, Cloudy, CloudOff } from "lucide-react";

interface GridCellProps {
    node: Node
    isSelected: boolean
    showWeight: boolean
}

export function GridCell({ node, isSelected, showWeight }: GridCellProps) {
    const { row, col, weight, isStart, isEnd, isWall } = node;
    const { isWeighted, cellSize, setStartNode, setEndNode, addWall, removeWall } = useGraphStore();

    let cellTypeIcon = null;
    if (isStart) {
        cellTypeIcon = <Plane className="h-6 w-6" />;
    } else if (isEnd) {
        cellTypeIcon = <LandPlot className="h-6 w-6" />;
    } else if (isWall) {
        cellTypeIcon = <Cloudy className="h-6 w-6" />;
    }

    const updateCellType = (newType: string) => {
        if (newType === "start") {
            if (isWall) {
                removeWall(row, col);
            }
            setStartNode(row, col);
        } else if (newType === "end") {
            if (isWall) {
                removeWall(row, col);
            }
            setEndNode(row, col);
        } else if (newType === "wall") {
            if (isWall) {
                removeWall(row, col);
            } else {
                addWall(row, col);
            }
        }
    }

    const setCloudOnClick = () => {
        if(isStart || isEnd) {
            return;
        }

        if (isWall) {
            removeWall(row, col);
        } else {
            addWall(row, col);
        }
    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div
                    className={`
                        flex items-center justify-center 
                        border border-[var(--border)] 
                        transition-all duration-300 ease-in-out 
                        hover:bg-[var(--accent)]/100 hover:scale-110 hover:shadow-lg 
                        dark:border-[var(--border)] 
                        dark:hover:bg-[var(--accent)]/100 dark:hover:scale-110 dark:hover:shadow-lg 
                        ${isSelected ? "ring-2 ring-[var(--primary)] ring-offset-1" : ""}
                    `}
                    style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        fontSize: `${Math.max(8, cellSize / 2)}px`,
                    }}
                    title={`Cell (${row}, ${col})`}
                    onClick={setCloudOnClick}
                >
                    {showWeight && isWeighted ? weight : cellTypeIcon}
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem onClick={() => updateCellType("start")}>
                    <Plane className="h-4 w-4" />
                    Set as Start
                </ContextMenuItem>
                <ContextMenuItem onClick={() => updateCellType("end")}>
                    <LandPlot className="h-4 w-4" />
                    Set as End
                </ContextMenuItem>
                <ContextMenuItem onClick={() => updateCellType("wall")}>
                    {isWall ? ( 
                        <>
                            <CloudOff className="h-4 w-4" />
                            Remove Obstacle
                        </>
                    ) : (
                        <>
                            <Cloudy className="h-4 w-4" />
                            Mark as Obstacle
                        </>
                    )}
                    
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}
