// app/page.tsx
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4">
        <ThemeToggle />
        <LeftPanel />
      </div>
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
        <RightPanel />
      </div>
    </div>
  )
}
