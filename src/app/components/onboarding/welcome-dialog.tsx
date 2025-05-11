"use client";

import * as React from "react";
import { useOnborda } from "onborda";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function WelcomeDialog() {
    const [open, setOpen] = React.useState(true);
    const { startOnborda } = useOnborda();

    const handleStart = () => {
        startOnborda("onboarding-tour");
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md p-6 rounded-2xl shadow-lg border bg-background">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex items-center gap-2">
                        👋 Welcome to{" "}
                        <span className="text-violet-600">NextPath</span>
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-muted-foreground">
                        Visualize graph algorithms like <strong>BFS</strong>,{" "}
                        <strong>DFS</strong>, <strong>Dijkstra</strong>, and
                        more — interactively and beautifully.
                    </DialogDescription>
                </DialogHeader>

                <div className="my-4 text-sm text-foreground leading-relaxed">
                    ✨ Build and animate your own graphs
                    <br />
                    🧠 Watch BFS, DFS, and Dijkstra in action  
                    <br />
                    📈 Switch between grid and node-based visual styles
                </div>

                <DialogFooter>
                    <Button
                        onClick={handleStart}
                        className="bg-violet-600 hover:bg-violet-500 text-white w-full"
                    >
                        🚀 Start Tour
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
