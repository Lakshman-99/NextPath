import { Tour } from "onborda/dist/types";
import { Wrench, FastForward, BrickWall, Scale, Proportions, Brain, Tv, Dumbbell, Construction, RouteOff, Puzzle, Plane, LandPlot, Cloudy, ChevronsLeftRightEllipsis, Map, SignpostBig, SendToBack, Network, Option } from 'lucide-react';
import React from "react";

export const getOnboardingSteps = (): Tour[] => {
    const steps: Tour[] = [
        {
            tour: "onboarding-tour",
            steps: [
                {
                    selector: "#settings",
                    icon: React.createElement(Wrench),
                    title: "Graph Settings",
                    content:
                        "Welcome! This panel helps you set up everything before visualizing your algorithm in action.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
                {
                    selector: "#rows-cols",
                    icon: React.createElement(Proportions),
                    title: "Grid Dimensions",
                    content:
                        "Define the size of your grid by adjusting the number of rows and columns.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#maze-generator",
                    icon: React.createElement(BrickWall),
                    title: "Maze Generator",
                    content:
                        "Automatically generate walls to simulate real-world obstacles for your algorithm.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#type-selector",
                    icon: React.createElement(Scale),
                    title: "Graph Type",
                    content:
                        "Choose between Unweighted (simpler) and Weighted (more strategic) graphs.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#animation-speed",
                    icon: React.createElement(FastForward),
                    title: "Animation Speed",
                    content:
                        "Control the speed at which the algorithm is visualized, from slow and clear to fast and dynamic.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#algorithm-selector",
                    icon: React.createElement(Brain),
                    title: "Choose Algorithm",
                    content:
                        "Select a pathfinding algorithm like BFS, DFS, or Dijkstra to explore how it performs.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#visualize-btn",
                    icon: React.createElement(Tv),
                    title: "Visualize",
                    content:
                        "Hit this button to begin the algorithm animation on your configured grid.",
                    side: "right-bottom",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#toggle-weights",
                    icon: React.createElement(Dumbbell),
                    title: "Toggle Weights",
                    content:
                        "Use this to show or hide edge weights—especially useful for weighted algorithms.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#clear-obstacle",
                    icon: React.createElement(Construction),
                    title: "Clear Obstacles",
                    content:
                        "Remove all maze walls and reset the grid to a clean state.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#clear-path",
                    icon: React.createElement(RouteOff),
                    title: "Clear Path Only",
                    content:
                        "Erase the previously visualized path without affecting walls or weights.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#grid-canvas",
                    icon: React.createElement(Puzzle),
                    title: "Interactive Grid",
                    content:
                        "This is your playground! Right-click on any cell to change its type — start, end, or wall.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#cell-1-1",
                    icon: React.createElement(Plane),
                    title: "Start Node",
                    content:
                        "This green cell marks the starting point of your algorithm. Set it by right-clicking any cell and choosing 'Set as Start'.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#cell-6-8",
                    icon: React.createElement(LandPlot),
                    title: "End Node",
                    content:
                        "This red cell marks the destination. You can set it using the right-click menu on any other cell.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#cell-2-4",
                    icon: React.createElement(Cloudy),
                    title: "Obstacles",
                    content:
                        "You can create obstacles by clicking or right-clicking on cells and selecting 'Mark as Obstacle'. These act as walls the algorithm must avoid.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#graphType",
                    icon: React.createElement(ChevronsLeftRightEllipsis),
                    title: "Choose Graph Type",
                    content:
                        "Switch between Grid-Based and Node-Based modes. Grid is great for pathfinding on a matrix, while Node mode gives you full control over nodes and edges.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#map-selector",
                    icon: React.createElement(Map),
                    title: "Map Selection",
                    content:
                        "‘Free Flow’ lets you build your own graph from scratch. Other templates provide pre-made maps for instant visualization.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#direction-toggle",
                    icon: React.createElement(SignpostBig),
                    title: "Directed vs Undirected",
                    content:
                        "Decide how edges behave. Directed graphs follow one-way paths; undirected edges go both ways.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#weight-toggle",
                    icon: React.createElement(Scale),
                    title: "Weighted or Unweighted",
                    content:
                        "Enable weighted mode to add cost to edges. Useful for algorithms like Dijkstra or A*.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#animation-nspeed",
                    icon: React.createElement(FastForward),
                    title: "Animation Speed",
                    content:
                        "Slide to control how fast the algorithm animates. Slower speeds help you observe each step.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#algorithm-selector",
                    icon: React.createElement(Brain),
                    title: "Choose Algorithm",
                    content:
                        "Select the algorithm to visualize — like DFS, BFS, or Dijkstra. See how they behave on different maps.",
                    side: "right",
                    showControls: true,
                    pointerPadding: 20,
                    pointerRadius: 11,
                },
                {
                    selector: "#beautify-btn",
                    icon: React.createElement(SendToBack),
                    title: "Beautify Layout",
                    content:
                        "Automatically rearranges nodes into a clean layout. Useful after building or importing complex graphs.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#toggle-weights-btn",
                    icon: React.createElement(Dumbbell),
                    title: "Show/Hide Weights",
                    content:
                        "Toggle the visibility of edge weights. Especially helpful when working with weighted graphs.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#clear-path-btn",
                    icon: React.createElement(RouteOff),
                    title: "Clear Path",
                    content:
                        "Removes only the currently visualized path. Great for re-running algorithms without resetting the graph.",
                    side: "bottom-right",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
                {
                    selector: "#node-canvas",
                    icon: React.createElement(Network),
                    title: "Interactive Graph Editor",
                    content:
                        "This canvas lets you build your own graph! Drag nodes using the move icon. Click and pull from a node to either create a new one or connect to an existing one with an edge.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
                {
                    selector: "#node-2",
                    icon: React.createElement(Option),
                    title: "Node Options",
                    content:
                        "Right-click any node to set it as the start, end, or delete it from the graph. This gives you full control over structure and flow.",
                    side: "left",
                    showControls: true,
                    pointerPadding: 10,
                    pointerRadius: 11,
                },
            ],
        },
    ];

    return steps;
};
