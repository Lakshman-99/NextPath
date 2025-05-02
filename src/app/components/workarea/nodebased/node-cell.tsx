import { Handle, Position, useConnection } from "@xyflow/react";
import { memo } from "react";
import { Move } from "lucide-react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const NodeCell = memo(function NodeCell({ id }: { id: string }) {
    const connection = useConnection();
    const isTarget = connection.inProgress && connection.fromNode.id !== id;

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div className="customNode">
                    <div className="customNodeIcon">
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
                    <p className="text-xs text-gray-500">Node ID: {id}</p>
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Delete Node</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuItem>Team</ContextMenuItem>
                <ContextMenuItem>Subscription</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
});
