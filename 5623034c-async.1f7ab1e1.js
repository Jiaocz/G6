(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["5623034c"],{"5623034c":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return d;}}),t("79969e87");let d=[{value:"Example",paraId:0},{value:"// Assign layout options when initialization. const layout = new CircularLayout(",paraId:1},{value:"{ radius: 10 }",paraId:1},{value:"); const positions = await layout.execute(graph); // { nodes: [], edges: [] }",paraId:1},{value:"// Or use different options later. const layout = new CircularLayout(",paraId:2},{value:"{ radius: 10 }",paraId:2},{value:"); const positions = await layout.execute(graph, { radius: 20 }",paraId:2},{value:"); // { nodes: [], edges: [] }",paraId:2},{value:"// If you want to assign the positions directly to the nodes, use assign method. await layout.assign(graph, { radius: 20 }",paraId:3},{value:");",paraId:3},{value:"DagreAlign",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"Default:",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"'UL'",paraId:4,tocIndex:1},{value:"\u8282\u70B9\u5BF9\u9F50\u65B9\u5F0F U\uFF1Aupper\uFF08\u4E0A\uFF09\uFF1BD\uFF1Adown\uFF08\u4E0B\uFF09\uFF1BL\uFF1Aleft\uFF08\u5DE6\uFF09\uFF1BR\uFF1Aright\uFF08\u53F3\uFF09",paraId:5,tocIndex:1},{value:"'UL':\u5BF9\u9F50\u5230\u5DE6\u4E0A\u89D2",paraId:6,tocIndex:1},{value:"'UR':\u5BF9\u9F50\u5230\u53F3\u4E0A\u89D2",paraId:7,tocIndex:1},{value:"'DL':\u5BF9\u9F50\u5230\u5DE6\u4E0B\u89D2",paraId:8,tocIndex:1},{value:"'DR':\u5BF9\u9F50\u5230\u53F3\u4E0B\u89D2",paraId:9,tocIndex:1},{value:"undefined:\u9ED8\u8BA4\uFF0C\u4E2D\u95F4\u5BF9\u9F50 ",paraId:10,tocIndex:1},{value:" The alignment of the nodes U: upper; D: down; L: left; R: right",paraId:10,tocIndex:1},{value:"'UL':align to left top",paraId:11,tocIndex:1},{value:"'UR':align to right top",paraId:12,tocIndex:1},{value:"'DL':align to left bottom",paraId:13,tocIndex:1},{value:"'DR':align to right bottom",paraId:14,tocIndex:1},{value:"undefined:default, align to center",paraId:15,tocIndex:1},{value:"PointTuple",paraId:16,tocIndex:2},{value:" ",paraId:16,tocIndex:2},{value:"Default:",paraId:16,tocIndex:2},{value:" ",paraId:16,tocIndex:2},{value:"undefined",paraId:16,tocIndex:2},{value:"The position of the layout's top-left corner",paraId:17,tocIndex:2},{value:"boolean",paraId:18,tocIndex:3},{value:" ",paraId:18,tocIndex:3},{value:"Default:",paraId:18,tocIndex:3},{value:" ",paraId:18,tocIndex:3},{value:"false",paraId:18,tocIndex:3},{value:"Whether to calculate the control point position of the edge at the same time",paraId:19,tocIndex:3},{value:" It only takes effect when the built-in polyline edge (type: 'polyline-edge') is used in the edge configuration, or any edge that consumes data.controlPoints as the control point position. In essence, it adds data.controlPoints to the edge data",paraId:20,tocIndex:3},{value:"boolean",paraId:21,tocIndex:4},{value:" ",paraId:21,tocIndex:4},{value:"Default:",paraId:21,tocIndex:4},{value:" ",paraId:21,tocIndex:4},{value:"true",paraId:21,tocIndex:4},{value:"Whether to leave space for the label of the edge",paraId:22,tocIndex:4},{value:" It will affect whether to add a dummy node in the middle of the edge",paraId:23,tocIndex:4},{value:"ID",paraId:24,tocIndex:5},{value:" ",paraId:24,tocIndex:5},{value:"|",paraId:24,tocIndex:5},{value:" ",paraId:24,tocIndex:5},{value:"Node",paraId:24,tocIndex:5},{value:" ",paraId:24,tocIndex:5},{value:"| null",paraId:24,tocIndex:5},{value:"The focused node",paraId:25,tocIndex:5},{value:"ID: node id",paraId:26,tocIndex:5},{value:"Node: node instance",paraId:27,tocIndex:5},{value:"null: cancel focus",paraId:28,tocIndex:5},{value:" It takes effect when radial is true",paraId:29,tocIndex:5},{value:"string[]",paraId:30,tocIndex:6},{value:" ",paraId:30,tocIndex:6},{value:"Default:",paraId:30,tocIndex:6},{value:" ",paraId:30,tocIndex:6},{value:"false",paraId:30,tocIndex:6},{value:"The reference array of the order of the nodes in the same layer, storing the node id value",paraId:31,tocIndex:6},{value:" If not specified, the same layer node order will be arranged according to the mechanism of dagre itself",paraId:32,tocIndex:6},{value:"number",paraId:33,tocIndex:7},{value:" ",paraId:33,tocIndex:7},{value:"Default:",paraId:33,tocIndex:7},{value:" ",paraId:33,tocIndex:7},{value:"50",paraId:33,tocIndex:7},{value:"The horizontal gap between nodes (px)",paraId:34,tocIndex:7},{value:" The horizontal gap between nodes (px) in the case of rankdir is 'TB' or 'BT'. The vertical gap between nodes (px) in the case of rankdir is 'LR' or 'RL'. nodesepFunc has a higher priority",paraId:35,tocIndex:7},{value:"(d?:",paraId:36,tocIndex:8},{value:" ",paraId:36,tocIndex:8},{value:"Node",paraId:36,tocIndex:8},{value:") => number",paraId:36,tocIndex:8},{value:"The callback function of the node spacing (px), which can be used to set different node spacing for different nodes",paraId:37,tocIndex:8},{value:" The horizontal spacing of the node in the case of rankdir is 'TB' or 'BT', and the vertical spacing of the node in the case of rankdir is 'LR' or 'RL'. The priority is higher than nodesep, that is, if nodesepFunc is set, nodesep does not take effect",paraId:38,tocIndex:8},{value:"number | number[] | ((nodeData:",paraId:39,tocIndex:9},{value:" ",paraId:39,tocIndex:9},{value:"Node",paraId:39,tocIndex:9},{value:") => number)",paraId:39,tocIndex:9},{value:" ",paraId:39,tocIndex:9},{value:"Default:",paraId:39,tocIndex:9},{value:" ",paraId:39,tocIndex:9},{value:"undefined",paraId:39,tocIndex:9},{value:"The diameter of the node",paraId:40,tocIndex:9},{value:" Used for collision detection when nodes overlap",paraId:41,tocIndex:9},{value:"OutNode",paraId:42,tocIndex:10},{value:"[]",paraId:42,tocIndex:10},{value:" ",paraId:42,tocIndex:10},{value:"Default:",paraId:42,tocIndex:10},{value:" ",paraId:42,tocIndex:10},{value:"undefined",paraId:42,tocIndex:10},{value:"The reference node position when calculating the layout",paraId:43,tocIndex:10},{value:" It is generally used to ensure the continuity of the layout when switching data. In G6, if you update the data, the existing layout result data will be used as input automatically",paraId:44,tocIndex:10},{value:"boolean",paraId:45,tocIndex:11},{value:"Whether to use dagre for radial layout",paraId:46,tocIndex:11},{value:"DagreRankdir",paraId:47,tocIndex:12},{value:" ",paraId:47,tocIndex:12},{value:"Default:",paraId:47,tocIndex:12},{value:" ",paraId:47,tocIndex:12},{value:"'TB'",paraId:47,tocIndex:12},{value:"\u5E03\u5C40\u7684\u65B9\u5411\u3002T\uFF1Atop\uFF08\u4E0A\uFF09\uFF1BB\uFF1Abottom\uFF08\u4E0B\uFF09\uFF1BL\uFF1Aleft\uFF08\u5DE6\uFF09\uFF1BR\uFF1Aright\uFF08\u53F3\uFF09",paraId:48,tocIndex:12},{value:"'TB':\u4ECE\u4E0A\u81F3\u4E0B\u5E03\u5C40",paraId:49,tocIndex:12},{value:"'BT':\u4ECE\u4E0B\u81F3\u4E0A\u5E03\u5C40",paraId:50,tocIndex:12},{value:"'LR':\u4ECE\u5DE6\u81F3\u53F3\u5E03\u5C40",paraId:51,tocIndex:12},{value:"'RL':\u4ECE\u53F3\u81F3\u5DE6\u5E03\u5C40 ",paraId:52,tocIndex:12},{value:" The direction of the layout. T: top; B: bottom; L: left; R: right",paraId:52,tocIndex:12},{value:"'TB':from top to bottom",paraId:53,tocIndex:12},{value:"'BT':from bottom to top",paraId:54,tocIndex:12},{value:"'LR':from left to right",paraId:55,tocIndex:12},{value:"'RL':from right to left",paraId:56,tocIndex:12},{value:"'network-simplex' | 'tight-tree' | 'longest-path'",paraId:57,tocIndex:13},{value:"The mode of the layout",paraId:58,tocIndex:13},{value:"number",paraId:59,tocIndex:14},{value:" ",paraId:59,tocIndex:14},{value:"Default:",paraId:59,tocIndex:14},{value:" ",paraId:59,tocIndex:14},{value:"50",paraId:59,tocIndex:14},{value:"The vertical gap between levels (px)",paraId:60,tocIndex:14},{value:" The vertical gap between levels (px) in the case of rankdir is 'TB' or 'BT'. The horizontal gap between levels (px) in the case of rankdir is 'LR' or 'RL'. ranksepFunc has a higher priority",paraId:61,tocIndex:14},{value:"(d?:",paraId:62,tocIndex:15},{value:" ",paraId:62,tocIndex:15},{value:"Node",paraId:62,tocIndex:15},{value:") => number",paraId:62,tocIndex:15},{value:"The callback function of the layer spacing (px)",paraId:63,tocIndex:15},{value:" The vertical spacing of adjacent layers in the case of rankdir is 'TB' or 'BT', and the horizontal spacing of adjacent layers in the case of rankdir is 'LR' or 'RL'. The priority is higher than nodesep, that is, if nodesepFunc is set, nodesep does not take effect",paraId:64,tocIndex:15},{value:"boolean",paraId:65,tocIndex:16},{value:" ",paraId:65,tocIndex:16},{value:"Default:",paraId:65,tocIndex:16},{value:" ",paraId:65,tocIndex:16},{value:"false",paraId:65,tocIndex:16},{value:"Whether to sort nodes in the same layer according to the parentId in each node data to prevent Combo overlapping",paraId:66,tocIndex:16},{value:" It is recommended to configure when there is a Combo",paraId:67,tocIndex:16},{value:"To directly assign the positions to the nodes.",paraId:68,tocIndex:18},{value:"assign(graph: IGraph, options?: AntVDagreLayoutOptions): Promise<void>;\n",paraId:69,tocIndex:18},{value:"View Parameters",paraId:70},{value:"Parameter",paraId:71,tocIndex:18},{value:"Type",paraId:72,tocIndex:18},{value:"Description",paraId:73,tocIndex:18},{value:"graph",paraId:74,tocIndex:18},{value:"IGraph",paraId:75,tocIndex:18},{value:"options",paraId:76,tocIndex:18},{value:"AntVDagreLayoutOptions",paraId:77,tocIndex:18},{value:"Returns",paraId:78,tocIndex:18},{value:":",paraId:78,tocIndex:18},{value:"Type:",paraId:79,tocIndex:18},{value:" Promise<void>",paraId:79,tocIndex:18},{value:"Return the positions of nodes and edges(if needed).",paraId:80,tocIndex:19},{value:"execute(graph: IGraph, options?: AntVDagreLayoutOptions): Promise<LayoutMapping>;\n",paraId:81,tocIndex:19},{value:"View Parameters",paraId:70},{value:"Parameter",paraId:82,tocIndex:19},{value:"Type",paraId:83,tocIndex:19},{value:"Description",paraId:84,tocIndex:19},{value:"graph",paraId:85,tocIndex:19},{value:"IGraph",paraId:86,tocIndex:19},{value:"options",paraId:87,tocIndex:19},{value:"AntVDagreLayoutOptions",paraId:88,tocIndex:19},{value:"Returns",paraId:89,tocIndex:19},{value:":",paraId:89,tocIndex:19},{value:"Type:",paraId:90,tocIndex:19},{value:" Promise<LayoutMapping>",paraId:90,tocIndex:19}];}}]);
//# sourceMappingURL=5623034c-async.1f7ab1e1.js.map