import {
    ReactFlow,
    Controls,
    Background,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType,
    OnConnect,
    Node,
    Edge,
} from "@xyflow/react";
import { NodeCell } from "./node-cell";
import { useCallback } from "react";

import FloatingConnectionLine from "./floating-connection-line";
import FloatingEdge from "./floating-edge";

const initialNodes: Node[] = [
    {
        id: "1",
        type: "custom",
        position: { x: 0, y: 0 },
        data: { label: "Node 1" },
    },
    {
        id: "2",
        type: "custom",
        position: { x: 250, y: 320 },
        data: { label: "Node 2" },
    },
    {
        id: "3",
        type: "custom",
        position: { x: 40, y: 300 },
        data: { label: "Node 3" },
    },
    {
        id: "4",
        type: "custom",
        position: { x: 300, y: 0 },
        data: { label: "Node 4" },
    },
];

const initialEdges: Edge[] = [];

const connectionLineStyle = {
    stroke: "#b1b1b7",
};

const nodeTypes = {
    custom: NodeCell,
};

const edgeTypes = {
    floating: FloatingEdge,
};

const defaultEdgeOptions = {
    type: "floating",
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#b1b1b7",
    },
};

export function NodeBasedGraph() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect: OnConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div className="p-5 h-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Building..</h2>
                <div className="flex items-center gap-1"></div>
            </div>

            <div
                className={`foreact-flow-wrapper w-full h-full flex-col items-center justify-center overflow-auto p-0 rounded-lg outline color-ring`}
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    defaultEdgeOptions={defaultEdgeOptions}
                    connectionLineComponent={FloatingConnectionLine}
                    connectionLineStyle={connectionLineStyle}
                >
                    <Background gap={16} size={1} />
                    <Controls />
                    <MiniMap
                        nodeColor="#3b82f6"
                        nodeStrokeWidth={3}
                        className="bg-gray-200 dark:bg-gray-800 rounded-lg"
                    />
                </ReactFlow>
            </div>
        </div>
    );
}
