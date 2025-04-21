import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/sidebar"
import { Header } from "./components/sidebar-header"
import { cookies } from "next/headers"

export default async function Home() {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <Header />
      </SidebarInset>
    </SidebarProvider>
  )
}
