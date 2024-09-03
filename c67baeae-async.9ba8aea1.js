(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["c67baeae"],{c67baeae:function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return I;}}),d("1c35cbf2");let I=[{value:"\u793A\u4F8B",paraId:0},{value:"// Assign layout options when initialization. const layout = new CircularLayout(",paraId:1},{value:"{ radius: 10 }",paraId:1},{value:"); const positions = await layout.execute(graph); // { nodes: [], edges: [] }",paraId:1},{value:"// Or use different options later. const layout = new CircularLayout(",paraId:2},{value:"{ radius: 10 }",paraId:2},{value:"); const positions = await layout.execute(graph, { radius: 20 }",paraId:2},{value:"); // { nodes: [], edges: [] }",paraId:2},{value:"// If you want to assign the positions directly to the nodes, use assign method. await layout.assign(graph, { radius: 20 }",paraId:3},{value:");",paraId:3},{value:"DagreAlign",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"Default:",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"'UL'",paraId:4,tocIndex:1},{value:"\u8282\u70B9\u5BF9\u9F50\u65B9\u5F0F U\uFF1Aupper\uFF08\u4E0A\uFF09\uFF1BD\uFF1Adown\uFF08\u4E0B\uFF09\uFF1BL\uFF1Aleft\uFF08\u5DE6\uFF09\uFF1BR\uFF1Aright\uFF08\u53F3\uFF09",paraId:5,tocIndex:1},{value:"'UL':\u5BF9\u9F50\u5230\u5DE6\u4E0A\u89D2",paraId:6,tocIndex:1},{value:"'UR':\u5BF9\u9F50\u5230\u53F3\u4E0A\u89D2",paraId:7,tocIndex:1},{value:"'DL':\u5BF9\u9F50\u5230\u5DE6\u4E0B\u89D2",paraId:8,tocIndex:1},{value:"'DR':\u5BF9\u9F50\u5230\u53F3\u4E0B\u89D2",paraId:9,tocIndex:1},{value:"undefined:\u9ED8\u8BA4\uFF0C\u4E2D\u95F4\u5BF9\u9F50 ",paraId:10,tocIndex:1},{value:" The alignment of the nodes U: upper; D: down; L: left; R: right",paraId:10,tocIndex:1},{value:"'UL':align to left top",paraId:11,tocIndex:1},{value:"'UR':align to right top",paraId:12,tocIndex:1},{value:"'DL':align to left bottom",paraId:13,tocIndex:1},{value:"'DR':align to right bottom",paraId:14,tocIndex:1},{value:"undefined:default, align to center",paraId:15,tocIndex:1},{value:"PointTuple",paraId:16,tocIndex:2},{value:" ",paraId:16,tocIndex:2},{value:"Default:",paraId:16,tocIndex:2},{value:" ",paraId:16,tocIndex:2},{value:"undefined",paraId:16,tocIndex:2},{value:"\u5E03\u5C40\u7684\u5DE6\u4E0A\u89D2\u5BF9\u9F50\u4F4D\u7F6E",paraId:17,tocIndex:2},{value:"boolean",paraId:18,tocIndex:3},{value:" ",paraId:18,tocIndex:3},{value:"Default:",paraId:18,tocIndex:3},{value:" ",paraId:18,tocIndex:3},{value:"false",paraId:18,tocIndex:3},{value:"\u662F\u5426\u540C\u65F6\u8BA1\u7B97\u8FB9\u4E0A\u7684\u7684\u63A7\u5236\u70B9\u4F4D\u7F6E",paraId:19,tocIndex:3},{value:" \u4EC5\u5728\u8FB9\u914D\u7F6E\u4E2D\u4F7F\u7528\u4E86\u5185\u7F6E\u6298\u7EBF\uFF08type: 'polyline-edge'\uFF09 \u65F6\uFF0C\u6216\u4EFB\u4F55\u5C06\u81EA\u5B9A\u4E49\u6D88\u8D39\u4E86 data.controlPoints \u5B57\u6BB5\u4F5C\u4E3A\u63A7\u5236\u70B9\u4F4D\u7F6E\u7684\u8FB9\u65F6\u751F\u6548\u3002\u672C\u8D28\u4E0A\u5C31\u662F\u7ED9\u8FB9\u6570\u636E\u589E\u52A0\u4E86 data.controlPoints",paraId:20,tocIndex:3},{value:"boolean",paraId:21,tocIndex:4},{value:" ",paraId:21,tocIndex:4},{value:"Default:",paraId:21,tocIndex:4},{value:" ",paraId:21,tocIndex:4},{value:"true",paraId:21,tocIndex:4},{value:"\u662F\u5426\u4E3A\u8FB9\u7684label\u7559\u4F4D\u7F6E",paraId:22,tocIndex:4},{value:" \u8FD9\u4F1A\u5F71\u54CD\u662F\u5426\u5728\u8FB9\u4E2D\u95F4\u6DFB\u52A0dummy node",paraId:23,tocIndex:4},{value:"ID",paraId:24,tocIndex:5},{value:" ",paraId:24,tocIndex:5},{value:"|",paraId:24,tocIndex:5},{value:" ",paraId:24,tocIndex:5},{value:"Node",paraId:24,tocIndex:5},{value:" ",paraId:24,tocIndex:5},{value:"| null",paraId:24,tocIndex:5},{value:"\u5173\u6CE8\u7684\u8282\u70B9",paraId:25,tocIndex:5},{value:"ID: \u8282\u70B9 id",paraId:26,tocIndex:5},{value:"Node: \u8282\u70B9\u5B9E\u4F8B",paraId:27,tocIndex:5},{value:"null: \u53D6\u6D88\u5173\u6CE8",paraId:28,tocIndex:5},{value:" radial \u4E3A true \u65F6\u751F\u6548",paraId:29,tocIndex:5},{value:"string[]",paraId:30,tocIndex:6},{value:" ",paraId:30,tocIndex:6},{value:"Default:",paraId:30,tocIndex:6},{value:" ",paraId:30,tocIndex:6},{value:"false",paraId:30,tocIndex:6},{value:"\u540C\u5C42\u8282\u70B9\u987A\u5E8F\u7684\u53C2\u8003\u6570\u7EC4\uFF0C\u5B58\u653E\u8282\u70B9 id \u503C",paraId:31,tocIndex:6},{value:" \u82E5\u672A\u6307\u5B9A\uFF0C\u5219\u5C06\u6309\u7167 dagre \u672C\u8EAB\u673A\u5236\u6392\u5217\u540C\u5C42\u8282\u70B9\u987A\u5E8F",paraId:32,tocIndex:6},{value:"number",paraId:33,tocIndex:7},{value:" ",paraId:33,tocIndex:7},{value:"Default:",paraId:33,tocIndex:7},{value:" ",paraId:33,tocIndex:7},{value:"50",paraId:33,tocIndex:7},{value:"\u8282\u70B9\u95F4\u8DDD\uFF08px\uFF09",paraId:34,tocIndex:7},{value:" \u5728 rankdir \u4E3A 'TB' \u6216 'BT' \u65F6\u662F\u8282\u70B9\u7684\u6C34\u5E73\u95F4\u8DDD\uFF1B\u5728 rankdir \u4E3A 'LR' \u6216 'RL' \u65F6\u4EE3\u8868\u8282\u70B9\u7684\u7AD6\u76F4\u65B9\u5411\u95F4\u8DDD\u3002nodesepFunc \u62E5\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7",paraId:35,tocIndex:7},{value:"(d?:",paraId:36,tocIndex:8},{value:" ",paraId:36,tocIndex:8},{value:"Node",paraId:36,tocIndex:8},{value:") => number",paraId:36,tocIndex:8},{value:"\u8282\u70B9\u95F4\u8DDD\uFF08px\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u901A\u8FC7\u8BE5\u53C2\u6570\u53EF\u4EE5\u5BF9\u4E0D\u540C\u8282\u70B9\u8BBE\u7F6E\u4E0D\u540C\u7684\u8282\u70B9\u95F4\u8DDD",paraId:37,tocIndex:8},{value:" \u5728 rankdir \u4E3A 'TB' \u6216 'BT' \u65F6\u662F\u8282\u70B9\u7684\u6C34\u5E73\u95F4\u8DDD\uFF1B\u5728 rankdir \u4E3A 'LR' \u6216 'RL' \u65F6\u4EE3\u8868\u8282\u70B9\u7684\u7AD6\u76F4\u65B9\u5411\u95F4\u8DDD\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E nodesep\uFF0C\u5373\u82E5\u8BBE\u7F6E\u4E86 nodesepFunc\uFF0C\u5219 nodesep \u4E0D\u751F\u6548",paraId:38,tocIndex:8},{value:"number | number[] | ((nodeData:",paraId:39,tocIndex:9},{value:" ",paraId:39,tocIndex:9},{value:"Node",paraId:39,tocIndex:9},{value:") => number)",paraId:39,tocIndex:9},{value:" ",paraId:39,tocIndex:9},{value:"Default:",paraId:39,tocIndex:9},{value:" ",paraId:39,tocIndex:9},{value:"undefined",paraId:39,tocIndex:9},{value:"\u8282\u70B9\u5927\u5C0F\uFF08\u76F4\u5F84\uFF09\u3002",paraId:40,tocIndex:9},{value:" \u7528\u4E8E\u9632\u6B62\u8282\u70B9\u91CD\u53E0\u65F6\u7684\u78B0\u649E\u68C0\u6D4B",paraId:41,tocIndex:9},{value:"OutNode",paraId:42,tocIndex:10},{value:"[]",paraId:42,tocIndex:10},{value:" ",paraId:42,tocIndex:10},{value:"Default:",paraId:42,tocIndex:10},{value:" ",paraId:42,tocIndex:10},{value:"undefined",paraId:42,tocIndex:10},{value:"\u5E03\u5C40\u8BA1\u7B97\u65F6\u53C2\u8003\u7684\u8282\u70B9\u4F4D\u7F6E",paraId:43,tocIndex:10},{value:" \u4E00\u822C\u7528\u4E8E\u5207\u6362\u6570\u636E\u65F6\u4FDD\u8BC1\u91CD\u65B0\u5E03\u5C40\u7684\u8FDE\u7EED\u6027\u3002\u5728 G6 \u4E2D\uFF0C\u82E5\u662F\u66F4\u65B0\u6570\u636E\uFF0C\u5219\u5C06\u81EA\u52A8\u4F7F\u7528\u5DF2\u5B58\u5728\u7684\u5E03\u5C40\u7ED3\u679C\u6570\u636E\u4F5C\u4E3A\u8F93\u5165",paraId:44,tocIndex:10},{value:"boolean",paraId:45,tocIndex:11},{value:"\u662F\u5426\u57FA\u4E8E dagre \u8FDB\u884C\u8F90\u5C04\u5E03\u5C40",paraId:46,tocIndex:11},{value:"DagreRankdir",paraId:47,tocIndex:12},{value:" ",paraId:47,tocIndex:12},{value:"Default:",paraId:47,tocIndex:12},{value:" ",paraId:47,tocIndex:12},{value:"'TB'",paraId:47,tocIndex:12},{value:"\u5E03\u5C40\u7684\u65B9\u5411\u3002T\uFF1Atop\uFF08\u4E0A\uFF09\uFF1BB\uFF1Abottom\uFF08\u4E0B\uFF09\uFF1BL\uFF1Aleft\uFF08\u5DE6\uFF09\uFF1BR\uFF1Aright\uFF08\u53F3\uFF09",paraId:48,tocIndex:12},{value:"'TB':\u4ECE\u4E0A\u81F3\u4E0B\u5E03\u5C40",paraId:49,tocIndex:12},{value:"'BT':\u4ECE\u4E0B\u81F3\u4E0A\u5E03\u5C40",paraId:50,tocIndex:12},{value:"'LR':\u4ECE\u5DE6\u81F3\u53F3\u5E03\u5C40",paraId:51,tocIndex:12},{value:"'RL':\u4ECE\u53F3\u81F3\u5DE6\u5E03\u5C40 ",paraId:52,tocIndex:12},{value:" The direction of the layout. T: top; B: bottom; L: left; R: right",paraId:52,tocIndex:12},{value:"'TB':from top to bottom",paraId:53,tocIndex:12},{value:"'BT':from bottom to top",paraId:54,tocIndex:12},{value:"'LR':from left to right",paraId:55,tocIndex:12},{value:"'RL':from right to left",paraId:56,tocIndex:12},{value:"'network-simplex' | 'tight-tree' | 'longest-path'",paraId:57,tocIndex:13},{value:"\u5E03\u5C40\u7684\u6A21\u5F0F",paraId:58,tocIndex:13},{value:"number",paraId:59,tocIndex:14},{value:" ",paraId:59,tocIndex:14},{value:"Default:",paraId:59,tocIndex:14},{value:" ",paraId:59,tocIndex:14},{value:"50",paraId:59,tocIndex:14},{value:"\u5C42\u95F4\u8DDD\uFF08px\uFF09",paraId:60,tocIndex:14},{value:" \u5728 rankdir \u4E3A 'TB' \u6216 'BT' \u65F6\u662F\u7AD6\u76F4\u65B9\u5411\u76F8\u90BB\u5C42\u95F4\u8DDD\uFF1B\u5728 rankdir \u4E3A 'LR' \u6216 'RL' \u65F6\u4EE3\u8868\u6C34\u5E73\u65B9\u5411\u76F8\u90BB\u5C42\u95F4\u8DDD\u3002ranksepFunc \u62E5\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7",paraId:61,tocIndex:14},{value:"(d?:",paraId:62,tocIndex:15},{value:" ",paraId:62,tocIndex:15},{value:"Node",paraId:62,tocIndex:15},{value:") => number",paraId:62,tocIndex:15},{value:"\u5C42\u95F4\u8DDD\uFF08px\uFF09\u7684\u56DE\u8C03\u51FD\u6570",paraId:63,tocIndex:15},{value:" \u5728 rankdir \u4E3A 'TB' \u6216 'BT' \u65F6\u662F\u7AD6\u76F4\u65B9\u5411\u76F8\u90BB\u5C42\u95F4\u8DDD\uFF1B\u5728 rankdir \u4E3A 'LR' \u6216 'RL' \u65F6\u4EE3\u8868\u6C34\u5E73\u65B9\u5411\u76F8\u90BB\u5C42\u95F4\u8DDD\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E nodesep\uFF0C\u5373\u82E5\u8BBE\u7F6E\u4E86 nodesepFunc\uFF0C\u5219 nodesep \u4E0D\u751F\u6548",paraId:64,tocIndex:15},{value:"boolean",paraId:65,tocIndex:16},{value:" ",paraId:65,tocIndex:16},{value:"Default:",paraId:65,tocIndex:16},{value:" ",paraId:65,tocIndex:16},{value:"false",paraId:65,tocIndex:16},{value:"\u540C\u4E00\u5C42\u8282\u70B9\u662F\u5426\u6839\u636E\u6BCF\u4E2A\u8282\u70B9\u6570\u636E\u4E2D\u7684 parentId \u8FDB\u884C\u6392\u5E8F\uFF0C\u4EE5\u9632\u6B62 Combo \u91CD\u53E0",paraId:66,tocIndex:16},{value:" \u5EFA\u8BAE\u5728\u6709 Combo \u7684\u60C5\u51B5\u4E0B\u914D\u7F6E",paraId:67,tocIndex:16},{value:"To directly assign the positions to the nodes.",paraId:68,tocIndex:18},{value:"assign(graph: IGraph, options?: AntVDagreLayoutOptions): Promise<void>;\n",paraId:69,tocIndex:18},{value:"\u76F8\u5173\u53C2\u6570",paraId:70},{value:"\u53C2\u6570",paraId:71,tocIndex:18},{value:"\u7C7B\u578B",paraId:72,tocIndex:18},{value:"\u63CF\u8FF0",paraId:73,tocIndex:18},{value:"graph",paraId:74,tocIndex:18},{value:"IGraph",paraId:75,tocIndex:18},{value:"options",paraId:76,tocIndex:18},{value:"AntVDagreLayoutOptions",paraId:77,tocIndex:18},{value:"\u8FD4\u56DE\u503C",paraId:78,tocIndex:18},{value:"\uFF1A",paraId:78,tocIndex:18},{value:"\u7C7B\u578B\uFF1A",paraId:79,tocIndex:18},{value:"Promise<void>",paraId:79,tocIndex:18},{value:"Return the positions of nodes and edges(if needed).",paraId:80,tocIndex:19},{value:"execute(graph: IGraph, options?: AntVDagreLayoutOptions): Promise<LayoutMapping>;\n",paraId:81,tocIndex:19},{value:"\u76F8\u5173\u53C2\u6570",paraId:70},{value:"\u53C2\u6570",paraId:82,tocIndex:19},{value:"\u7C7B\u578B",paraId:83,tocIndex:19},{value:"\u63CF\u8FF0",paraId:84,tocIndex:19},{value:"graph",paraId:85,tocIndex:19},{value:"IGraph",paraId:86,tocIndex:19},{value:"options",paraId:87,tocIndex:19},{value:"AntVDagreLayoutOptions",paraId:88,tocIndex:19},{value:"\u8FD4\u56DE\u503C",paraId:89,tocIndex:19},{value:"\uFF1A",paraId:89,tocIndex:19},{value:"\u7C7B\u578B\uFF1A",paraId:90,tocIndex:19},{value:"Promise<LayoutMapping>",paraId:90,tocIndex:19}];}}]);
//# sourceMappingURL=c67baeae-async.9ba8aea1.js.map