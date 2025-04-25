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
import { Grid3x3, Waypoints, Gauge, TableCellsSplit, Workflow, Columns2, Rows2, Weight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button";
import loading2 from "react-useanimations/lib/loading2";
import UseAnimations from "react-useanimations";
import Image from "next/image";

import logo from "@/assets/image/logo.png";

export function AppSidebar() {
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
                        <TabsList className="grid grid-cols-2 w-full">
                            <TabsTrigger value="grid">
                                <Grid3x3 className="h-4 w-4" />
                                Grid-Based
                            </TabsTrigger>
                            <TabsTrigger value="node">
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

                                <TabsContent value="grid" className="space-y-6">
                                    <div className="grid w-full items-center gap-4">
                                    {/* Grid Size */}
                                    <div className="flex gap-4">
                                        <div className="flex flex-col space-y-2.5">
                                            <Label>
                                                <Rows2 className="h-4 w-4"/>
                                                Rows (m)</Label>
                                            <Input
                                                type="number"
                                                placeholder="e.g., 10"
                                                defaultValue={10}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-2.5">
                                            <Label>
                                                <Columns2 className="h-4 w-4"/>
                                                Columns (n)</Label>
                                            <Input
                                                type="number"
                                                placeholder="e.g., 15"
                                                defaultValue={15}
                                            />
                                        </div>
                                    </div>

                                    {/* Algorithm */}
                                    <div className="flex flex-col space-y-3">
                                        <Label>
                                            <Workflow className="h-4 w-4"/>
                                            Algorithm</Label>
                                        <Select>
                                            <SelectTrigger className="w-full">
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
                                        <Select>
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
                                                <RadioGroupItem value="unweighted" id="unweighted" />
                                                <Label htmlFor="unweighted">Un-Weighted</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="weighted" id="weighted" />
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
                                            defaultValue={[8]}
                                            max={10}
                                            step={1}
                                        />
                                    </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="node" className="space-y-6">

                                </TabsContent>
                                </CardContent>

                                <CardFooter>
                                    <Button className="w-full cursor-pointer">
                                        <UseAnimations 
                                            animation={loading2} 
                                            size={28}
                                            fillColor="#fff"
                                            className="dark:invert"
                                        />
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
