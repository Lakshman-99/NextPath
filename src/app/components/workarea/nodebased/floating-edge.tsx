import {
    useInternalNode,
    getBezierPath,
    useStore,
    BaseEdge,
    type EdgeProps,
    type ReactFlowState,
} from "@xyflow/react";

import { getEdgeParams } from "@/app/utils/xyflowUtils/util";

type GetSpecialPathParams = {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
};

const getSpecialPath = (
    { sourceX, sourceY, targetX, targetY }: GetSpecialPathParams,
    offset: number
) => {
    const centerX = (sourceX + targetX) / 2;
    const centerY = (sourceY + targetY) / 2;

    return `M ${sourceX} ${sourceY} Q ${centerX} ${
        centerY + offset
    } ${targetX} ${targetY}`;
};

export default function FloatingEdgeWithBidirectionalSupport({
    id,
    source,
    target,
    markerEnd,
    style,
}: EdgeProps) {
    const sourceNode = useInternalNode(source);
    const targetNode = useInternalNode(target);

    const isBiDirectionEdge = useStore((s: ReactFlowState) =>
        s.edges.some(
            (e) =>
                e.id !== id &&
                ((e.source === target && e.target === source) ||
                    (e.target === target && e.source === source))
        )
    );

    if (!sourceNode || !targetNode) return null;

    const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
        sourceNode,
        targetNode
    );

    let path: string;

    if (isBiDirectionEdge) {
        const offset = sx < tx ? 25 : -25;
        path = getSpecialPath(
            { sourceX: sx, sourceY: sy, targetX: tx, targetY: ty },
            offset
        );
    } else {
        [path] = getBezierPath({
            sourceX: sx,
            sourceY: sy,
            sourcePosition: sourcePos,
            targetX: tx,
            targetY: ty,
            targetPosition: targetPos,
        });
    }

    return <BaseEdge path={path} markerEnd={markerEnd} style={style} />;
}
