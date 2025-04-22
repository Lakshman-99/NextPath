import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { ExportGraph } from "./export-graph";

export function Header() {
    return (
        <header className="flex h-20 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="font-semibold text-foreground ml-2">Dashboard</h1>
            <div className="flex items-center gap-2 ml-auto">
                <ExportGraph />
                <ModeToggle />
            </div>
        </header>
    );
}
