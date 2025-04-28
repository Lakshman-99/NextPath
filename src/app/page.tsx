import { cookies } from 'next/headers';
import ClientSidebar from './ClientSidebar';

export default async function Home() {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return <ClientSidebar defaultOpen={defaultOpen} />;
}
