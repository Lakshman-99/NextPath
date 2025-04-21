import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";
import Image from "next/image";

import logo from "@/assets/image/logo.png"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="flex shrink-0 items-center justify-center px-4">
                <Image
                    className="dark:invert"
                    src={logo}
                    alt="Next.js logo"
                    width={200}
                    height={40}
                    priority
                />
            </SidebarHeader>
            <SidebarContent />
        </Sidebar>
    );
}
