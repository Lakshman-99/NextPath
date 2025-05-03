import { Handle, Position, useConnection } from "@xyflow/react";
import { memo } from "react";
import { Car, MapPinHouse, Move, Trash2 } from "lucide-react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Data } from "@/app/store/nodeStore";

export const NodeCell = memo(function NodeCell({ id, data }: { id: string, data: Data }) {
    const connection = useConnection();
    const isTarget = connection.inProgress && connection.fromNode.id !== id;

    const baseColor = "bg-[#FF7477] dark:bg-[#F25757]";

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div className={`customNode ${baseColor}`}>
                    <div className={`customNodeIcon ${baseColor}`}>
                        <Move size={12} strokeWidth={2.5} />
                    </div>
                    {!connection.inProgress && (
                        <Handle
                            className="targetHandle"
                            type="source"
                            position={Position.Right}
                            style={{
                                right: -6,
                                top: "50%",
                                transform: "translateY(-50%)",
                            }}
                        />
                    )}
                    {(!connection.inProgress || isTarget) && (
                        <Handle
                            className="targetHandle"
                            type="target"
                            position={Position.Left}
                            isConnectableStart={false}
                            style={{
                                left: -6,
                                top: "50%",
                                transform: "translateY(-50%)",
                            }}
                        />
                    )}
                    {/* Label */}
                    <div className="text-xs font-semibold text-white">{data.label}</div>
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>
                    <Car className="h-4 w-4 mr-2" />
                    Set as Start
                </ContextMenuItem>
                <ContextMenuItem>
                    <MapPinHouse className="h-4 w-4 mr-2" />
                    Set as End
                </ContextMenuItem>
                <ContextMenuItem>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Node
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
});
