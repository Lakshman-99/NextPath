import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Node } from "../../store/store"
import { Edit } from "lucide-react";
import { useGraphStore } from "../../store/store";

interface GridCellProps {
    node: Node
    isSelected: boolean
    showWeight: boolean
}

export function GridCell({ node, isSelected, showWeight }: GridCellProps) {
    const { row, col, weight, isWall } = node;
    const { cellSize } = useGraphStore();

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div
                    className={`flex items-center justify-center border border-border transition-colors hover:bg-accent/30 ${
                        isSelected ? "ring-2 ring-primary ring-offset-1" : ""
                    }`}
                    style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        fontSize: `${Math.max(8, cellSize / 2)}px`,
                    }}
                    title={`Cell (${row}, ${col})`}
                >
                    {showWeight && weight > 1 ? weight : ""}
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem onClick={() => {}}>
                    <Edit className="mr-2 size-4" />
                    Edit
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}
