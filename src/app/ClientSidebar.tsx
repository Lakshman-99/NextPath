'use client';

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './components/sidebar/sidebar-main';
import { Header } from './components/header/header-main';
import { Main } from './components/workarea/main';
import { useGraphStore } from './store/store';

export default function ClientSidebar() {
    const { sidebarOpen } = useGraphStore();
    const defaultValue = true;

    return (
        <SidebarProvider defaultOpen={defaultValue} open={sidebarOpen}>
        <AppSidebar />
        <SidebarInset>
            <Header />
            <Main />
        </SidebarInset>
        </SidebarProvider>
    );
}
