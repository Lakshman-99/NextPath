"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { ExportGraph } from "./export-graph";
import { useGraphStore } from "@/app/store/gridStore";
import { useMediaQuery } from "usehooks-ts";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, Rocket } from "lucide-react";
import { useOnborda } from "onborda";

export function Header() {
    const { type } = useGraphStore();
    const isMatrix = type === "grid";
    const isMobile = useMediaQuery("(max-width: 768px)");

    const { startOnborda } = useOnborda();

    const handleStart = () => {
        startOnborda("onboarding-tour");
    };

    return (
        <header className="flex h-16 md:h-20 shrink-0 items-center justify-between border-b px-4 backdrop-blur-md bg-background/80">
            {/* Left: Sidebar + Heading */}
            <div className="flex items-center gap-3 overflow-hidden">
                <SidebarTrigger className="-ml-1" />

                <div className="flex flex-col overflow-hidden">
                    <h1 className="text-lg md:text-2xl font-extrabold tracking-tight truncate text-foreground max-w-[10rem] sm:max-w-[16rem] md:max-w-none">
                        {isMatrix ? "Grid-Based Graph" : "Node-Based Graph"}
                    </h1>
                    <p className="hidden sm:block text-[10px] md:text-xs font-medium text-muted-foreground truncate">
                        Build, visualize and explore algorithms interactively.
                    </p>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 ml-auto">
                    {isMobile ? (
                        <>
                            <ExportGraph />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu className="h-5 w-5 " />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-40">
                                    <DropdownMenuItem >
                                        <ModeToggle />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleStart}>
                                        <Rocket className="h-4 w-4" />
                                        Start Tour
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Button variant="outline" size="icon" onClick={handleStart}>
                                <Rocket className="h-4 w-4" />
                            </Button>
                            <ModeToggle />
                            <ExportGraph />
                        </>
                    )}
            </div>
        </header>
    );
}
