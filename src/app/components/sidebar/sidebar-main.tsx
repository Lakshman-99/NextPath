"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarGroup
} from "@/components/ui/sidebar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Grid3x3, Waypoints, Gauge, TableCellsSplit, Workflow, Columns2, Rows2, Weight, Clapperboard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button";
import loading2 from "react-useanimations/lib/loading2";
import UseAnimations from "react-useanimations";
import Image from "next/image";

import logo from "@/assets/image/logo.png";
import { useGraphStore, Maze, Algorithm } from "@/app/store/store";
import { getGridDefaults, getRowColBasedCellSize } from "../../utils/util";
import { applyRandomMage, applyRecursiveDivision } from "@/app/utils/maze";
import { applyBFSAlgorithm, applyDFSAlgorithm } from "@/app/utils/grid-algorithms";
import { useEffect, useState } from "react";


export function AppSidebar() {
    const [highlightAlgorithm, setHighlightAlgorithm] = useState(false);
    const [isSettingsDisabled, setIsSettingsDisabled] = useState(false);
    const { rows, cols, speed, maze, isLoading, algorithm, defaultRows, defaultCols, defaultCellSize, setSize, setType, setCellSize, setDefaultSize, setWeighted, setAlgorithm, setSpeed, setMaze, clearWalls, clearPaths, setLoading } = useGraphStore();

    const updateCell = (newRows: number, newCols: number) => {
        if (newRows < 2 || newCols < 2) return;
        if (newRows > 25 || newCols > 50) return;
        setSize(newRows, newCols);
        const newCellSize = getRowColBasedCellSize(defaultRows, defaultCols, newRows, newCols, defaultCellSize);
        setCellSize(newCellSize); 
    }

    const updateMaze = async (value: Maze) => {
        setMaze(value);
        setIsSettingsDisabled(true);
        setLoading(true);
        clearWalls();
        clearPaths();
        
        let isMazed;
        if(value === "none") {
            isMazed = true;
        }
        else if(value === "random") {
            isMazed = await applyRandomMage();
        }
        else if(value === "recursive") {
            isMazed = await applyRecursiveDivision("none");
        }
        else if(value === "recursive-vertical") {
            isMazed = await applyRecursiveDivision("vertical");
        }
        else if(value === "recursive-horizontal") {
            isMazed = await applyRecursiveDivision("horizontal");
        }

        setIsSettingsDisabled(!isMazed);
        setLoading(false);
    };

    const onAlgorithmChange = (value: Algorithm) => {
        setAlgorithm(value);
        setHighlightAlgorithm(false);
    };

    const handleVisualize = async () => {
        if (algorithm === undefined) {
            setHighlightAlgorithm(true);
            return;
        }
        setLoading(true);
        setIsSettingsDisabled(true);
        clearPaths();
        
        let isVisualized = false;
        if (algorithm === "bfs") {
            isVisualized = await applyBFSAlgorithm();
        } else if (algorithm === "dfs") {
            isVisualized = await applyDFSAlgorithm();
        } else if (algorithm === "dijkstra") {
            isVisualized = true; // applyDijkstraAlgorithm();
        }

        setLoading(false);
        setIsSettingsDisabled(!isVisualized);
    };

    useEffect(() => {
        const { defRows, defCols, defCellSize } = getGridDefaults();
        setDefaultSize(defRows, defCols, defCellSize);
        setSize(defRows, defCols);
        setCellSize(defCellSize);

    }, [setDefaultSize, setCellSize, setSize]);
    
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
            <SidebarContent>
                <SidebarGroup>
                    <Tabs defaultValue="grid" className="w-full p-2">
                        <TabsList className={`grid grid-cols-2 w-full ${isSettingsDisabled ? 'opacity-50 pointer-events-none' : ''}`}>
                            <TabsTrigger value="grid" onClick={() => setType("grid")}>
                                <Grid3x3 className="h-4 w-4" />
                                Grid-Based
                            </TabsTrigger>
                            <TabsTrigger value="node" onClick={() => setType("node")}>
                                <Waypoints className="h-4 w-4" />
                                Node-Based
                            </TabsTrigger>
                        </TabsList>

                        <div className="relative z-10 h-full">
                            <Card className="max-w-2xl mx-auto">
                                <CardHeader>
                                    <CardTitle>Graph Settings</CardTitle>
                                </CardHeader>
                                <CardContent>

                                <TabsContent value="grid" className={`space-y-6 ${isSettingsDisabled ? 'opacity-50 pointer-events-none' : ''}`}>
                                    <div className="grid w-full items-center gap-4 space-y-2.5">
                                    {/* Grid Size */}
                                    <div className="flex gap-4 justify-between">
                                        <div className="flex flex-col space-y-2.5">
                                            <Label>
                                                <Rows2 className="h-4 w-4"/>
                                                Rows (m)</Label>
                                            <Input
                                                type="number"
                                                placeholder="e.g., 10"
                                                defaultValue={rows}
                                                min={2}
                                                max={25}
                                                onChange={(e) => {
                                                    const value = Number(e.target.value)
                                                    if (value < 2) {
                                                        updateCell(2, cols)
                                                        e.target.value = "2"
                                                    } else if (value > 25) {
                                                        updateCell(25, cols)
                                                        e.target.value = "25"
                                                    } else {
                                                        updateCell(value, cols)
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-2.5">
                                            <Label>
                                                <Columns2 className="h-4 w-4"/>
                                                Columns (n)</Label>
                                            <Input
                                                type="number"
                                                placeholder="e.g., 15"
                                                defaultValue={cols}
                                                min={2}
                                                max={50}
                                                onChange={(e) => {
                                                    const value = Number(e.target.value)
                                                    if (value < 2) {
                                                        updateCell(rows, 2)
                                                        e.target.value = "2"
                                                    } else if (value > 50) {
                                                        updateCell(rows, 50)
                                                        e.target.value = "50"
                                                    } else {
                                                        updateCell(rows, value)
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Algorithm */}
                                    <div className="flex flex-col space-y-2.5">
                                        <Label>
                                            <Workflow className="h-4 w-4"/>
                                            Algorithm</Label>
                                        <Select onValueChange={(value) => onAlgorithmChange(value as Algorithm)} value={algorithm}>
                                            <SelectTrigger className={`
                                                    w-full transition-all duration-300
                                                    ${highlightAlgorithm ? "ring-3 ring-red-400" : ""}
                                                `}>
                                                <SelectValue placeholder="Choose an algorithm" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="bfs">
                                                    Breath First Search
                                                </SelectItem>
                                                <SelectItem value="dfs">
                                                    Depth First Search
                                                </SelectItem>
                                                <SelectItem value="dijkstra">
                                                    Dijkstra&rsquo;s Algorithm
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Maze Generator */}
                                    <div className="flex flex-col space-y-2.5">
                                        <Label>
                                            <TableCellsSplit className="h-4 w-4"/>
                                            Maze Generator</Label>
                                        <Select onValueChange={(value) => updateMaze(value as Maze)} value={maze}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Choose a maze type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">None</SelectItem>
                                                <SelectItem value="random">Random Maze</SelectItem>
                                                <SelectItem value="recursive">Recursive Division</SelectItem>
                                                <SelectItem value="recursive-vertical">Recursive Vertical Division</SelectItem>
                                                <SelectItem value="recursive-horizontal">Recursive Horizontal Division</SelectItem>
                                                
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Graph Type */}
                                    <div className="flex flex-col space-y-2.5">
                                        <Label>
                                            <Weight className="h-4 w-4"/>
                                            Type
                                        </Label>
                                        <RadioGroup defaultValue="unweighted" className="flex gap-4">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="unweighted" id="unweighted" onClick={() => setWeighted(false)} />
                                                <Label htmlFor="unweighted">Un-Weighted</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="weighted" id="weighted" onClick={() => setWeighted(true)} />
                                                <Label htmlFor="weighted">Weighted</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    {/* Speed */}
                                    <div className="flex flex-col space-y-2.5">
                                        <Label>
                                            <Gauge className="h-4 w-4"/>
                                            Animation Speed</Label>
                                        <Slider
                                            value={[speed]}
                                            min={0.6}
                                            max={1.5}
                                            step={0.1}
                                            onValueChange={(value) => setSpeed(value[0])}
                                        />
                                    </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="node" className="space-y-6">

                                </TabsContent>
                                </CardContent>

                                <CardFooter>
                                    <Button className="w-full cursor-pointer" onClick={handleVisualize}>
                                        {isLoading ?
                                            <UseAnimations 
                                                animation={loading2} 
                                                size={28}
                                                fillColor="#fff"
                                                className="dark:invert"
                                            />
                                            :
                                            <Clapperboard className="h-4 w-4" />
                                        }
                                        
                                        Visualize
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </Tabs>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
