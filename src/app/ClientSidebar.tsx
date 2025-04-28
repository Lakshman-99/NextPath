'use client';

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './components/sidebar/sidebar-main';
import { Header } from './components/header/header-main';
import { Main } from './components/workarea/main';
import { useGraphStore } from './store/store';

export default function ClientSidebar({ defaultOpen }: { defaultOpen: boolean }) {
    const { sidebarOpen } = useGraphStore((state) => ({
        sidebarOpen: state.sidebarOpen ?? defaultOpen,
    }));

    return (
        <SidebarProvider open={sidebarOpen}>
        <AppSidebar />
        <SidebarInset>
            <Header />
            <Main />
        </SidebarInset>
        </SidebarProvider>
    );
}
