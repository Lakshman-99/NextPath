"use client";

import { GridBasedGraph } from "./grid-based";
import { NodeBasedGraph } from "./node-based";

export function Main() {
    const isMatrix = true; // This should be determined based on your application logic

    return (
        <>
            {isMatrix ? (
                <GridBasedGraph />
            ) : (
                <NodeBasedGraph />
            )}
        </>
    );
}
