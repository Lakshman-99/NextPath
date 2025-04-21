import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Share } from 'lucide-react';

export function Header() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="font-semibold text-foreground ml-2">Dashboard</h1>
            <div className="flex items-center gap-2 ml-auto">
                <Button variant="outline" size="sm" className="cursor-pointer">
                    <Share className="mr-2 h-4 w-4" />
                    Export
                </Button>
                <ModeToggle />
            </div>
        </header>
    );
}
