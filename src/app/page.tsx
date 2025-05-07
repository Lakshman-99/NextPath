"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/sidebar/sidebar-main"
import { Header } from "./components/header/header-main"
import { Main } from "./components/workarea/main"
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <Main />
      </SidebarInset>
    </SidebarProvider>
  )
}
