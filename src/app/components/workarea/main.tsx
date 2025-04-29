"use client";

import { GridBasedGraph } from "./grid-based";
import { NodeBasedGraph } from "./node-based";
import { useGraphStore } from "../../store/gridStore";

export function Main() {
    const { type } = useGraphStore();
    const isMatrix = type === "grid";

    return <>{isMatrix ? <GridBasedGraph /> : <NodeBasedGraph />}</>;
}
