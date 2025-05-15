import { Tour } from "onborda/dist/types";
import {
    Wrench,
    FastForward,
    BrickWall,
    Scale,
    Proportions,
    Brain,
    Tv,
    Dumbbell,
    Construction,
    RouteOff,
    Puzzle,
    Plane,
    LandPlot,
    Cloudy,
    ChevronsLeftRightEllipsis,
    Map,
    SignpostBig,
    SendToBack,
    Network,
    Option,
    Link,
    SunMoon,
    Repeat,
    BadgeHelp,
} from "lucide-react";
import React from "react";

export const getOnboardingSteps = (): Tour[] => {
    const steps: Tour[] = [
        {
            tour: "onboarding-tour",
            steps: [
                {
                    selector: "#settings",
                    icon: React.createElement(Wrench),
                    title: "Let’s Set Things Up!",
                    content:
                        "Welcome aboard! This settings panel is your control center — prep everything here before diving into the visual magic of algorithms.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
                {
                    selector: "#rows-cols",
                    icon: React.createElement(Proportions),
                    title: "Shape Your Playground",
                    content:
                        "Customize your grid by tweaking the number of rows and columns. Bigger grid, more room to explore!",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#maze-generator",
                    icon: React.createElement(BrickWall),
                    title: "Auto-Build Mazes",
                    content:
                        "Generate complex obstacle patterns with one click — perfect for testing algorithms in realistic scenarios.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#type-selector",
                    icon: React.createElement(Scale),
                    title: "Pick a Graph Style",
                    content:
                        "Choose your graph’s logic: Unweighted for simplicity or Weighted for advanced strategic thinking.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#animation-speed",
                    icon: React.createElement(FastForward),
                    title: "Speed It Up (or Down)",
                    content:
                        "Control how fast your algorithm animates — slow to analyze, or fast to zoom through!",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#algorithm-selector",
                    icon: React.createElement(Brain),
                    title: "Choose Your Algorithm",
                    content:
                        "Select how you want to solve the maze: BFS, DFS, Dijkstra? Each one sees the world differently!",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#visualize-btn",
                    icon: React.createElement(Tv),
                    title: "It’s Showtime!",
                    content:
                        "All set? Hit this to bring your algorithm to life and watch it solve the puzzle step by step.",
                    side: "right-bottom",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#legends-btn",
                    icon: React.createElement(BadgeHelp),
                    title: "Understand the Colors",
                    content:
                        "Not sure what each color means? Click here to see the legend of start, end, visited nodes, and more.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#toggle-weights",
                    icon: React.createElement(Dumbbell),
                    title: "Weights On or Off?",
                    content:
                        "Toggle edge weights as needed — especially useful when testing weighted algorithms like Dijkstra.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#clear-obstacle",
                    icon: React.createElement(Construction),
                    title: "Wipe the Walls",
                    content:
                        "Want a clean slate? Clear all walls and start fresh with your layout.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#clear-path",
                    icon: React.createElement(RouteOff),
                    title: "Clear the Trail",
                    content:
                        "Remove just the visualized path — perfect for trying a new algorithm without rebuilding the whole grid.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#grid-canvas",
                    icon: React.createElement(Puzzle),
                    title: "Your Interactive Grid",
                    content:
                        "Click, right-click, and play! This is where the algorithm will run. Set walls, start, and end points here.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#cell-2-2",
                    icon: React.createElement(Plane),
                    title: "Set the Starting Point",
                    content:
                        "The journey begins here. Right-click any cell and mark it as the starting node (green).",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#cell-7-17",
                    icon: React.createElement(LandPlot),
                    title: "Mark the Destination",
                    content:
                        "Where should your algorithm end? Right-click and select 'Set as End' to define the target (red).",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#cell-2-4",
                    icon: React.createElement(Cloudy),
                    title: "Build the Barriers",
                    content:
                        "Click to add obstacles! These act like walls your algorithm must find a way around.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#graphType",
                    icon: React.createElement(ChevronsLeftRightEllipsis),
                    title: "Choose a View Mode",
                    content:
                        "Switch between grid-based and node-based visualizations — both offer powerful ways to explore paths.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#map-selector",
                    icon: React.createElement(Map),
                    title: "Pick a Map",
                    content:
                        "Free Flow lets you design from scratch. Or choose a ready-made map to start exploring faster.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#direction-toggle",
                    icon: React.createElement(SignpostBig),
                    title: "One-Way or Two-Way?",
                    content:
                        "Make your edges directed or undirected — change how the algorithm flows across the graph.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#weight-toggle",
                    icon: React.createElement(Scale),
                    title: "Add Weight to Edges",
                    content:
                        "Enable or disable edge weights. Ideal for exploring cost-based pathfinding strategies.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#animation-nspeed",
                    icon: React.createElement(FastForward),
                    title: "Tune Animation Speed",
                    content:
                        "Slide to adjust how fast the steps animate — perfect for deep dives or quick tests.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#algorithm-selector",
                    icon: React.createElement(Brain),
                    title: "Select Algorithm Again",
                    content:
                        "Revisit your algorithm choice anytime to test different strategies on the same map.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#beautify-btn",
                    icon: React.createElement(SendToBack),
                    title: "Auto-Tidy Your Graph",
                    content:
                        "Click this to instantly beautify and align nodes. Handy after manual edits or imports.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#toggle-weights-btn",
                    icon: React.createElement(Dumbbell),
                    title: "Show or Hide Edge Weights",
                    content:
                        "Toggle edge labels to either declutter or dive into the details of your weighted graphs.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#clear-path-btn",
                    icon: React.createElement(RouteOff),
                    title: "Reset Just the Path",
                    content:
                        "Clear the visual path while keeping your graph structure intact. Perfect for multiple test runs.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#node-canvas",
                    icon: React.createElement(Network),
                    title: "Build with Full Control",
                    content:
                        "Welcome to the Node Editor! Drag, drop, connect — create your own graph from the ground up.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
                {
                    selector: "#node-2",
                    icon: React.createElement(Option),
                    title: "Node Tools",
                    content:
                        "Right-click a node to set as start/end or delete it. This gives you full customization power.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#export-graph",
                    icon: React.createElement(Link),
                    title: "Share with a Click",
                    content:
                        "Generate a unique link to your current graph setup. Share your masterpiece or revisit it anytime!",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#theme-toggle-btn",
                    icon: React.createElement(SunMoon),
                    title: "Switch the Vibe",
                    content:
                        "Dark or light mode? Toggle between themes based on your comfort or style preference.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#start-tour-btn",
                    icon: React.createElement(Repeat),
                    title: "Replay This Tour Anytime",
                    content:
                        "Need a refresher or want to explore again later? Restart this guided tour anytime with this button.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
            ],
        },
    ];
    
    return steps;
};
