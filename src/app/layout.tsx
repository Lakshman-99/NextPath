import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from './components/theme-provider';
import { AppWrapper } from "./app-wrapper";

import "@xyflow/react/dist/style.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextPath - Interactive Graph Algorithm Visualizer",
  description: "Visualize and explore graph algorithms like A*, Dijkstra, BFS, and DFS through interactive simulations built with Next.js, React Flow, and Tailwind CSS.",
  keywords: [
    "Graph Algorithm Visualizer",
    "Pathfinding Algorithms",
    "A* Algorithm Visualization",
    "Dijkstra Algorithm",
    "BFS DFS Visualizer",
    "Graph Theory Learning Tool",
    "Next.js Algorithm Project",
    "React Flow Visualizer",
    "Data Structures Simulator",
    "Grid Graph Visualizer",
    "Algorithm Animation",
    "Graph Traversal Simulator",
    "Build Graphs",
    "Interactive Graph Traversal",
    "Graph Algorithms Next.js",
    "Shortest Path Algorithm",
    "Algorithms for Interviews",
    "Graph Data Structure",
    "Leetcode Visualizer",
    "JavaScript Algorithms",
    "Visual Learning Algorithms",
    "Tailwind CSS UI Graph",
  ],
  openGraph: {
    title: "NextPath - Interactive Graph Algorithm Playground",
    description: "Learn and experiment with graph traversal algorithms through intuitive, animated simulations.",
    url: "https://nextpath-algo.vercel.app",
    siteName: "NextPath",
    images: [
      {
        url: "https://github.com/Lakshman-99/NextPath/blob/main/src/assets/image/screenshot.png", // create a nice preview image
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextPath - Interactive Graph Algorithm Playground",
    description: "Visualize graph algorithms like A*, Dijkstra, and BFS in real-time.",
    images: ["https://nextpath-algo.vercel.app/og-preview.png"],
  },
};

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppWrapper>
              {children}
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
