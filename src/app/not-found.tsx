"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGraphStore } from "./store/gridStore";

export default function CatchAllRedirect() {
    const router = useRouter();
    const { setType } = useGraphStore();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const typeParam = urlParams.get("type");

        if (typeParam) {
            if (typeParam === "node") {
                setType("node");
            }
        }
        
        router.push("/");
    }, [router, setType]);

    return null;
}
