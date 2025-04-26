import { memo } from "react";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Plane, LandPlot, Cloudy, CloudOff } from "lucide-react";
import { useGraphStore, Node } from "../../store/store";

interface GridCellProps {
    node: Node;
}

export const GridCell = memo(function GridCell({ node } : GridCellProps) {
    const { row, col, isStart, isEnd, isWall, weight } = node;
    const { cellSize, isWeighted, setStartNode, setEndNode, toggleWall } = useGraphStore.getState();
    const updateCellType = (type: "start" | "end" | "wall") => {
        if (type === "start") {
            setStartNode(row, col);
        } else if (type === "end") {
            setEndNode(row, col);
        } else {
            toggleWall(row, col);
        }
    };

    const cellTypeIcon = isStart ? (
        <Plane className="h-4 w-4" />
    ) : isEnd ? (
        <LandPlot className="h-4 w-4" />
    ) : isWall ? (
        <Cloudy className="h-4 w-4" />
    ) : null;

    const toggleWallOnClick = () => {
        if (!isStart && !isEnd) {
            toggleWall(row, col);
        }
    };

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
                    `}
                    style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        fontSize: `${Math.max(8, cellSize / 2)}px`,
                    }}
                    title={`Cell (${row}, ${col})`}
                    onClick={toggleWallOnClick}
                >
                    {isWeighted && weight > 1 ? weight : cellTypeIcon}
                </div>
            </ContextMenuTrigger>
        <ContextMenuContent>
            <ContextMenuItem onClick={() => updateCellType("start")}>
                <Plane className="h-4 w-4 mr-2" />
                Set as Start
            </ContextMenuItem>
            <ContextMenuItem onClick={() => updateCellType("end")}>
                <LandPlot className="h-4 w-4 mr-2" />
                Set as End
            </ContextMenuItem>
            <ContextMenuItem onClick={() => updateCellType("wall")}>
                {isWall ? (
                    <>
                        <CloudOff className="h-4 w-4 mr-2" />
                        Remove Obstacle
                    </>
                ) : (
                    <>
                        <Cloudy className="h-4 w-4 mr-2" />
                        Mark as Obstacle
                    </>
                )}
            </ContextMenuItem>
        </ContextMenuContent>
    </ContextMenu>
    );
});