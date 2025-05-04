"use client";

import {
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType,
    OnConnect,
    Node,
    applyNodeChanges,
    OnNodesChange,
    useReactFlow,
    OnConnectEnd,
} from "@xyflow/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ZoomSlider } from "@/components/zoom-slider";
import { NodeCell } from "./node-cell";
import FloatingConnectionLine from "./floating-connection-line";
import FloatingEdge from "./floating-edge";
import { useNodeStore } from "@/app/store/nodeStore";
import { useCallback, useEffect } from "react";
import ELK from "elkjs/lib/elk.bundled.js";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LayoutDashboard, Settings } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

const elk = new ELK();

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
    const { storeNodes, storeEdges, showWeights, addNode, setStoreNodes, setStoreEdges, toggleWeights, getID } = useNodeStore();

    const [nodes, setNodes] = useNodesState(storeNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(storeEdges);
    const { fitView, screenToFlowPosition } = useReactFlow();

    const isMobile = useMediaQuery("(max-width: 768px)");

    const onConnect: OnConnect = useCallback(
        (params) => {
            setEdges((eds) => {
                const updatedEdges = addEdge(params, eds);
                setStoreEdges(updatedEdges);
                return updatedEdges;
            });
        },
        [setEdges, setStoreEdges]
    );

    const onConnectEnd: OnConnectEnd = useCallback(
        (event, connectionState) => {
            if (!connectionState.isValid) {
                const id = getID();
                const { clientX, clientY } = 'changedTouches' in event ? event.changedTouches[0] : event;
                const newNode: Node = {
                    id: id,
                    type: "custom",
                    position: screenToFlowPosition({
                        x: clientX,
                        y: clientY,
                    }),
                    data: {
                        label: `Node ${id}`,
                        isStart: false,
                        isEnd: false,
                        visited: false,
                        isWall: false,
                        isPath: false,
                    },
                };
        
                addNode(newNode);
                setNodes((nds) => nds.concat(newNode));
                setEdges((eds) => {
                    const updatedEdges = eds.concat({
                        id: id, 
                        source: connectionState.fromNode?.id ?? "0",
                        target: id,
                    });
                    setStoreEdges(updatedEdges);
                    return updatedEdges;
                });
            }
        },
        [addNode, getID, screenToFlowPosition, setEdges, setNodes, setStoreEdges],
    );

    const handleNodesChange: OnNodesChange = useCallback(
        (changes) => {
            setNodes((nds) => {
                const updatedNodes = applyNodeChanges(changes, nds);
                setStoreNodes(updatedNodes); // Update the store with the new nodes
                return updatedNodes;
            });
        },
        [setNodes, setStoreNodes]
    );

    // Auto Layout using ELK
    const handleAutoLayout = async () => {
        const layouted = await elk.layout({
            id: "root",
            layoutOptions: {
                "elk.algorithm": "force", // or "force", "mrtree", etc.
                "elk.direction": isMobile ? "DOWN" : "RIGHT",
                "elk.spacing.nodeNode": "20",
            },
            children: nodes.map((node) => ({
                id: node.id,
                width: node.width || 150,
                height: node.height || 50,
            })),
            edges: edges.map((edge) => ({
                id: edge.id,
                sources: [edge.source],
                targets: [edge.target],
            })),
        });

        const positionedNodes: Node[] = nodes.map((node) => {
            const layoutNode = layouted.children?.find((n) => n.id === node.id);
            return {
                ...node,
                position: {
                    x: layoutNode?.x || 0,
                    y: layoutNode?.y || 0,
                },
            };
        });

        setNodes(positionedNodes);
        setStoreNodes(positionedNodes);
        fitView({ duration: 500 });
    };

    useEffect(() => {
        setNodes(storeNodes);
        setEdges(storeEdges);
    }, [storeNodes, storeEdges, setNodes, setEdges]);

    return (
        <div className="p-5 h-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Building..</h2>
                <div className="flex items-center gap-1">
                    {isMobile ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Settings className="h-5 w-5 animate-spin3x" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuItem onClick={handleAutoLayout}>
                                    <LayoutDashboard className="h-4 w-4" />
                                    Beautify
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => toggleWeights()}>
                                    {showWeights ? (
                                        <>
                                            <EyeOff className="h-4 w-4" />
                                            <span className="">
                                                Hide Weights
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <Eye className="h-4 w-4" />
                                            <span className="">
                                                Show Weights
                                            </span>
                                        </>
                                    )}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex gap-1">
                            <Button variant="outline" onClick={() => toggleWeights()} >
                                {showWeights ? (
                                    <>
                                        <EyeOff className="h-4 w-4" />
                                        <span className="">Hide Weights</span>
                                    </>
                                ) : (
                                    <>
                                        <Eye className="h-4 w-4" />
                                        <span className="">Show Weights</span>
                                    </>
                                )}
                            </Button>
                            <Button variant="outline" onClick={handleAutoLayout} >
                                <LayoutDashboard className="h-4 w-4 mr-2" />
                                Beautify
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <div className="react-flow-wrapper w-full h-full flex-col items-center justify-center overflow-auto p-0 rounded-lg outline color-ring">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={handleNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onConnectEnd={onConnectEnd}
                    fitView
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    defaultEdgeOptions={defaultEdgeOptions}
                    connectionLineComponent={FloatingConnectionLine}
                    connectionLineStyle={connectionLineStyle}
                >
                    <Background gap={16} size={1} />
                    <ZoomSlider position="bottom-right" />
                </ReactFlow>
            </div>
        </div>
    );
};
