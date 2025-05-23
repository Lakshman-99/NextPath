import { MarkerType } from "@xyflow/react";

export const getRandomStartNode = () => {
    const startNode = Math.floor(Math.random() * 10);
    return startNode.toString();
};

export const getRandomEndNode = () => {
    let endNode = Math.floor(Math.random() * 9) + 28;
    return endNode.toString();
};

export const getUSANodes = () => {
    const nodes = [
        {
            id: "0",
            type: "custom",
            position: {
                x: 148,
                y: 98,
            },
            data: {
                label: "Vancouver",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "1",
            type: "custom",
            position: {
                x: 132,
                y: 204,
            },
            data: {
                label: "Seattle",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "2",
            type: "custom",
            position: {
                x: 100,
                y: 314,
            },
            data: {
                label: "Portland",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "3",
            type: "custom",
            position: {
                x: 472,
                y: 76,
            },
            data: {
                label: "Calgary",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "4",
            type: "custom",
            position: {
                x: 1034,
                y: 88,
            },
            data: {
                label: "Winnipeg",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "5",
            type: "custom",
            position: {
                x: 1632,
                y: 180,
            },
            data: {
                label: "Sault St. Marie",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "6",
            type: "custom",
            position: {
                x: 1310,
                y: 304,
            },
            data: {
                label: "Duluth",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "7",
            type: "custom",
            position: {
                x: 1236,
                y: 468,
            },
            data: {
                label: "Omaha",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "8",
            type: "custom",
            position: {
                x: 1292,
                y: 564,
            },
            data: {
                label: "Kansas City",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "9",
            type: "custom",
            position: {
                x: 1234,
                y: 726,
            },
            data: {
                label: "Oklahoma City",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "10",
            type: "custom",
            position: {
                x: 1294,
                y: 882,
            },
            data: {
                label: "Dallas",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "11",
            type: "custom",
            position: {
                x: 1394,
                y: 960,
            },
            data: {
                label: "Houston",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "12",
            type: "custom",
            position: {
                x: 1624,
                y: 932,
            },
            data: {
                label: "New Orleans",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "13",
            type: "custom",
            position: {
                x: 1466,
                y: 734,
            },
            data: {
                label: "Little Rock",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "14",
            type: "custom",
            position: {
                x: 1504,
                y: 566,
            },
            data: {
                label: "Saint Louis",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "15",
            type: "custom",
            position: {
                x: 1618,
                y: 418,
            },
            data: {
                label: "Chicago",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
            measured: {
                width: 50,
                height: 50,
            },
        },
        {
            id: "16",
            type: "custom",
            position: {
                x: 1948,
                y: 396,
            },
            data: {
                label: "Pittsburgh",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "17",
            type: "custom",
            position: {
                x: 2172,
                y: 476,
            },
            data: {
                label: "Washington",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "18",
            type: "custom",
            position: {
                x: 2156,
                y: 312,
            },
            data: {
                label: "New York",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "19",
            type: "custom",
            position: {
                x: 2224,
                y: 174,
            },
            data: {
                label: "Boston",
                isStart: true,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "20",
            type: "custom",
            position: {
                x: 2032,
                y: 598,
            },
            data: {
                label: "Raleigh",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "21",
            type: "custom",
            position: {
                x: 2096,
                y: 718,
            },
            data: {
                label: "Charleston",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "22",
            type: "custom",
            position: {
                x: 1870,
                y: 700,
            },
            data: {
                label: "Atlanta",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "23",
            type: "custom",
            position: {
                x: 2196,
                y: 1036,
            },
            data: {
                label: "Miami",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
            measured: {
                width: 50,
                height: 50,
            },
            selected: true,
            dragging: false,
        },
        {
            id: "24",
            type: "custom",
            position: {
                x: 1740,
                y: 642,
            },
            data: {
                label: "Nashville",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "26",
            type: "custom",
            position: {
                x: 846,
                y: 764,
            },
            data: {
                label: "Santa Fe",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "27",
            type: "custom",
            position: {
                x: 542,
                y: 864,
            },
            data: {
                label: "Phoenix",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "28",
            type: "custom",
            position: {
                x: 236,
                y: 922,
            },
            data: {
                label: "Los Angeles",
                isStart: false,
                isEnd: true,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "29",
            type: "custom",
            position: {
                x: 50,
                y: 654,
            },
            data: {
                label: "San Francisco",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "30",
            type: "custom",
            position: {
                x: 538,
                y: 540,
            },
            data: {
                label: "Salt Lake City",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "31",
            type: "custom",
            position: {
                x: 406,
                y: 738,
            },
            data: {
                label: "Las Vegas",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "32",
            type: "custom",
            position: {
                x: 722,
                y: 314,
            },
            data: {
                label: "Helena",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "33",
            type: "custom",
            position: {
                x: 864,
                y: 596,
            },
            data: {
                label: "Denver",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "34",
            type: "custom",
            position: {
                x: 832,
                y: 926,
            },
            data: {
                label: "El Paso",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "35",
            type: "custom",
            position: {
                x: 1896,
                y: 220,
            },
            data: {
                label: "Toronto",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
        {
            id: "36",
            type: "custom",
            position: {
                x: 2118,
                y: 58.75,
            },
            data: {
                label: "Montreal",
                isStart: false,
                isEnd: false,
                visited: false,
                isWall: false,
                isPath: false,
            },
        },
    ];
    return nodes;
};

export const getUSALinks = () => {
    const links = [
        {
            type: "floating",
            animated: false,
            label: "1",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "1",
            target: "0",
            id: "xy-edge__1-0",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "0",
            target: "3",
            id: "xy-edge__0-3",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "1",
            target: "3",
            id: "xy-edge__1-3",
        },
        {
            type: "floating",
            animated: false,
            label: "1",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "2",
            target: "1",
            id: "xy-edge__2-1",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "2",
            target: "29",
            id: "xy-edge__2-29",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "29",
            target: "28",
            id: "xy-edge__29-28",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "29",
            target: "30",
            id: "xy-edge__29-30",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "28",
            target: "31",
            id: "xy-edge__28-31",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "31",
            target: "30",
            id: "xy-edge__31-30",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "30",
            target: "32",
            id: "xy-edge__30-32",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "32",
            target: "3",
            id: "xy-edge__32-3",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "3",
            target: "4",
            id: "xy-edge__3-4",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "4",
            target: "5",
            id: "xy-edge__4-5",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "5",
            target: "36",
            id: "xy-edge__5-36",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "35",
            target: "5",
            id: "xy-edge__35-5",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "35",
            target: "36",
            id: "xy-edge__35-36",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "36",
            target: "18",
            id: "xy-edge__36-18",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "18",
            target: "19",
            id: "xy-edge__18-19",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "19",
            target: "36",
            id: "xy-edge__19-36",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "18",
            target: "17",
            id: "xy-edge__18-17",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "17",
            target: "20",
            id: "xy-edge__17-20",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "20",
            target: "21",
            id: "xy-edge__20-21",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "21",
            target: "22",
            id: "xy-edge__21-22",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "22",
            target: "12",
            id: "xy-edge__22-12",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "12",
            target: "11",
            id: "xy-edge__12-11",
        },
        {
            type: "floating",
            animated: false,
            label: "1",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "11",
            target: "10",
            id: "xy-edge__11-10",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "10",
            target: "13",
            id: "xy-edge__10-13",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "13",
            target: "24",
            id: "xy-edge__13-24",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "24",
            target: "20",
            id: "xy-edge__24-20",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "20",
            target: "16",
            id: "xy-edge__20-16",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "16",
            target: "17",
            id: "xy-edge__16-17",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "16",
            target: "35",
            id: "xy-edge__16-35",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "35",
            target: "15",
            id: "xy-edge__35-15",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "15",
            target: "16",
            id: "xy-edge__15-16",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "15",
            target: "14",
            id: "xy-edge__15-14",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "14",
            target: "13",
            id: "xy-edge__14-13",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "14",
            target: "24",
            id: "xy-edge__14-24",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "14",
            target: "8",
            id: "xy-edge__14-8",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "8",
            target: "9",
            id: "xy-edge__8-9",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "9",
            target: "10",
            id: "xy-edge__9-10",
        },
        {
            type: "floating",
            animated: false,
            label: "1",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "8",
            target: "7",
            id: "xy-edge__8-7",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "7",
            target: "6",
            id: "xy-edge__7-6",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "6",
            target: "5",
            id: "xy-edge__6-5",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "6",
            target: "35",
            id: "xy-edge__6-35",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "6",
            target: "32",
            id: "xy-edge__6-32",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "32",
            target: "4",
            id: "xy-edge__32-4",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "4",
            target: "6",
            id: "xy-edge__4-6",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "7",
            target: "15",
            id: "xy-edge__7-15",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "7",
            target: "33",
            id: "xy-edge__7-33",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "33",
            target: "8",
            id: "xy-edge__33-8",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "33",
            target: "9",
            id: "xy-edge__33-9",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "9",
            target: "26",
            id: "xy-edge__9-26",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "9",
            target: "34",
            id: "xy-edge__9-34",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "34",
            target: "10",
            id: "xy-edge__34-10",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "34",
            target: "11",
            id: "xy-edge__34-11",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "34",
            target: "27",
            id: "xy-edge__34-27",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "28",
            target: "27",
            id: "xy-edge__28-27",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "28",
            target: "34",
            id: "xy-edge__28-34",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "26",
            target: "33",
            id: "xy-edge__26-33",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "33",
            target: "30",
            id: "xy-edge__33-30",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "1",
            target: "32",
            id: "xy-edge__1-32",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "2",
            target: "30",
            id: "xy-edge__2-30",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "32",
            target: "33",
            id: "xy-edge__32-33",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "32",
            target: "7",
            id: "xy-edge__32-7",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "27",
            target: "33",
            id: "xy-edge__27-33",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "34",
            target: "26",
            id: "xy-edge__34-26",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "6",
            target: "15",
            id: "xy-edge__6-15",
        },
        {
            type: "floating",
            animated: false,
            label: "1",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "24",
            target: "22",
            id: "xy-edge__24-22",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "18",
            target: "16",
            id: "xy-edge__18-16",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "14",
            target: "16",
            id: "xy-edge__14-16",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "16",
            target: "24",
            id: "xy-edge__16-24",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "22",
            target: "20",
            id: "xy-edge__22-20",
        },
        {
            type: "floating",
            animated: false,
            label: "2",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "13",
            target: "9",
            id: "xy-edge__13-9",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "13",
            target: "12",
            id: "xy-edge__13-12",
        },
        {
            type: "floating",
            animated: false,
            label: "6",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "12",
            target: "23",
            id: "xy-edge__12-23",
        },
        {
            type: "floating",
            animated: false,
            label: "4",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "21",
            target: "23",
            id: "xy-edge__21-23",
        },
        {
            type: "floating",
            animated: false,
            label: "5",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "22",
            target: "23",
            id: "xy-edge__22-23",
        },
        {
            type: "floating",
            animated: false,
            label: "3",
            markerEnd: { type: MarkerType.ArrowClosed },
            data: { isReversed: false },
            source: "26",
            target: "27",
            id: "xy-edge__26-27",
        },
    ];
    return links;
};
