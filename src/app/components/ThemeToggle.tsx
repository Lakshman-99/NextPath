"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="mb-4 rounded bg-blue-600 text-white px-3 py-1"
        >
            Toggle {dark ? "Light" : "Dark"} Mode
        </button>
    );
}
