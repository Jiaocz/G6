(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["fbdca170"],{fbdca170:function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return o;}}),d("61024975");let o=[{value:"\u793A\u4F8B",paraId:0},{value:"// Assign layout options when initialization. const layout = new GridLayout(",paraId:1},{value:"{ rows: 10 }",paraId:1},{value:"); const positions = await layout.execute(graph); // { nodes: [], edges: [] }",paraId:1},{value:"// Or use different options later. const layout = new GridLayout(",paraId:2},{value:"{ rows: 10 }",paraId:2},{value:"); const positions = await layout.execute(graph, { rows: 20 }",paraId:2},{value:"); // { nodes: [], edges: [] }",paraId:2},{value:"// If you want to assign the positions directly to the nodes, use assign method. await layout.assign(graph, { rows: 20 }",paraId:3},{value:");",paraId:3},{value:"PointTuple",paraId:4,tocIndex:1},{value:"\u7F51\u683C\u5F00\u59CB\u4F4D\u7F6E\uFF08\u5DE6\u4E0A\u89D2\uFF09",paraId:5,tocIndex:1},{value:"number",paraId:6,tocIndex:2},{value:"\u7F51\u683C\u7684\u5217\u6570\uFF0C\u4E3A undefined \u65F6\u7B97\u6CD5\u6839\u636E\u8282\u70B9\u6570\u91CF\u3001\u5E03\u5C40\u7A7A\u95F4\u3001rows\uFF08\u82E5\u6307\u5B9A\uFF09\u81EA\u52A8\u8BA1\u7B97",paraId:7,tocIndex:2},{value:"boolean",paraId:8,tocIndex:3},{value:"\u4E3A false \u65F6\u8868\u793A\u5229\u7528\u6240\u6709\u53EF\u7528\u753B\u5E03\u7A7A\u95F4\uFF0C\u4E3A true \u65F6\u8868\u793A\u5229\u7528\u6700\u5C0F\u7684\u753B\u5E03\u7A7A\u95F4",paraId:9,tocIndex:3},{value:"number",paraId:10,tocIndex:4},{value:"\u7F51\u683C\u5E03\u5C40\u7684\u603B\u9AD8\u5EA6",paraId:11,tocIndex:4},{value:" \u5728 G6 \u4E2D\u4F7F\u7528\u5F53\u524D\u5BB9\u5668\u7684\u9AD8\u5EA6\u4F5C\u4E3A grid \u5E03\u5C40 height \u7684\u9ED8\u8BA4\u503C\u3002\u5355\u72EC\u4F7F\u7528\u6B64\u5E03\u5C40\u65F6\u9ED8\u8BA4\u503C\u4E3A 300",paraId:12,tocIndex:4},{value:"number | number[] | ((nodeData:",paraId:13,tocIndex:5},{value:" ",paraId:13,tocIndex:5},{value:"Node",paraId:13,tocIndex:5},{value:") => number)",paraId:13,tocIndex:5},{value:"\u8282\u70B9\u5927\u5C0F\uFF08\u76F4\u5F84\uFF09\u3002\u7528\u4E8E\u9632\u6B62\u8282\u70B9\u91CD\u53E0\u65F6\u7684\u78B0\u649E\u68C0\u6D4B",paraId:14,tocIndex:5},{value:"((node?:",paraId:15,tocIndex:6},{value:" ",paraId:15,tocIndex:6},{value:"Node",paraId:15,tocIndex:6},{value:") => number) | number",paraId:15,tocIndex:6},{value:"\u73AF\u4E0E\u73AF\u4E4B\u95F4\u6700\u5C0F\u95F4\u8DDD\uFF0C\u7528\u4E8E\u8C03\u6574\u534A\u5F84",paraId:16,tocIndex:6},{value:"(node?:",paraId:17,tocIndex:7},{value:" ",paraId:17,tocIndex:7},{value:"Node",paraId:17,tocIndex:7},{value:") => { row?: number; col?: number; }",paraId:17,tocIndex:7},{value:"\u6307\u5B9A\u6BCF\u4E2A\u8282\u70B9\u6240\u5728\u7684\u884C\u548C\u5217",paraId:18,tocIndex:7},{value:"boolean",paraId:19,tocIndex:8},{value:"\u662F\u5426\u9632\u6B62\u91CD\u53E0",paraId:20,tocIndex:8},{value:" \u5FC5\u987B\u914D\u5408\u4E0B\u9762\u5C5E\u6027 nodeSize \u6216\u8282\u70B9\u6570\u636E\u4E2D\u7684 data.size \u5C5E\u6027\uFF0C\u53EA\u6709\u5728\u6570\u636E\u4E2D\u8BBE\u7F6E\u4E86 data.size \u6216\u5728\u8BE5\u5E03\u5C40\u4E2D\u914D\u7F6E\u4E86\u4E0E\u5F53\u524D\u56FE\u8282\u70B9\u5927\u5C0F\u76F8\u540C\u7684 nodeSize \u503C\uFF0C\u624D\u80FD\u591F\u8FDB\u884C\u8282\u70B9\u91CD\u53E0\u7684\u78B0\u649E\u68C0\u6D4B",paraId:21,tocIndex:8},{value:"number",paraId:22,tocIndex:9},{value:"\u907F\u514D\u91CD\u53E0\u65F6\u8282\u70B9\u7684\u95F4\u8DDD padding\u3002preventOverlap \u4E3A true \u65F6\u751F\u6548",paraId:23,tocIndex:9},{value:"number",paraId:24,tocIndex:10},{value:"\u7F51\u683C\u7684\u884C\u6570\uFF0C\u4E3A undefined \u65F6\u7B97\u6CD5\u6839\u636E\u8282\u70B9\u6570\u91CF\u3001\u5E03\u5C40\u7A7A\u95F4\u3001cols\uFF08\u82E5\u6307\u5B9A\uFF09\u81EA\u52A8\u8BA1\u7B97",paraId:25,tocIndex:10},{value:"string",paraId:26,tocIndex:11},{value:"\u6307\u5B9A\u6392\u5E8F\u7684\u4F9D\u636E\uFF08\u8282\u70B9\u5C5E\u6027\u540D\uFF09\uFF0C\u6570\u503C\u8D8A\u9AD8\u5219\u8BE5\u8282\u70B9\u88AB\u653E\u7F6E\u5F97\u8D8A\u4E2D\u5FC3\u3002\u82E5\u4E3A undefined\uFF0C\u5219\u4F1A\u8BA1\u7B97\u8282\u70B9\u7684\u5EA6\u6570\uFF0C\u5EA6\u6570\u8D8A\u9AD8\uFF0C\u8282\u70B9\u5C06\u88AB\u653E\u7F6E\u5F97\u8D8A\u4E2D\u5FC3",paraId:27,tocIndex:11},{value:"number",paraId:28,tocIndex:12},{value:"\u7F51\u683C\u5E03\u5C40\u7684\u603B\u5BBD\u5EA6",paraId:29,tocIndex:12},{value:" \u5728 G6 \u4E2D\u4F7F\u7528\u5F53\u524D\u5BB9\u5668\u7684\u5BBD\u5EA6\u4F5C\u4E3A grid \u5E03\u5C40 width \u7684\u9ED8\u8BA4\u503C\u3002\u5355\u72EC\u4F7F\u7528\u6B64\u5E03\u5C40\u65F6\u9ED8\u8BA4\u503C\u4E3A 300",paraId:30,tocIndex:12},{value:"To directly assign the positions to the nodes.",paraId:31,tocIndex:14},{value:"assign(graph: Graph, options?: GridLayoutOptions): Promise<void>;\n",paraId:32,tocIndex:14},{value:"\u76F8\u5173\u53C2\u6570",paraId:33},{value:"\u53C2\u6570",paraId:34,tocIndex:14},{value:"\u7C7B\u578B",paraId:35,tocIndex:14},{value:"\u63CF\u8FF0",paraId:36,tocIndex:14},{value:"graph",paraId:37,tocIndex:14},{value:"Graph",paraId:38,tocIndex:14},{value:"options",paraId:39,tocIndex:14},{value:"GridLayoutOptions",paraId:40,tocIndex:14},{value:"\u8FD4\u56DE\u503C",paraId:41,tocIndex:14},{value:"\uFF1A",paraId:41,tocIndex:14},{value:"\u7C7B\u578B\uFF1A",paraId:42,tocIndex:14},{value:"Promise<void>",paraId:42,tocIndex:14},{value:"Return the positions of nodes and edges(if needed).",paraId:43,tocIndex:15},{value:"execute(graph: Graph, options?: GridLayoutOptions): Promise<LayoutMapping>;\n",paraId:44,tocIndex:15},{value:"\u76F8\u5173\u53C2\u6570",paraId:33},{value:"\u53C2\u6570",paraId:45,tocIndex:15},{value:"\u7C7B\u578B",paraId:46,tocIndex:15},{value:"\u63CF\u8FF0",paraId:47,tocIndex:15},{value:"graph",paraId:48,tocIndex:15},{value:"Graph",paraId:49,tocIndex:15},{value:"options",paraId:50,tocIndex:15},{value:"GridLayoutOptions",paraId:51,tocIndex:15},{value:"\u8FD4\u56DE\u503C",paraId:52,tocIndex:15},{value:"\uFF1A",paraId:52,tocIndex:15},{value:"\u7C7B\u578B\uFF1A",paraId:53,tocIndex:15},{value:"Promise<LayoutMapping>",paraId:53,tocIndex:15}];}}]);
//# sourceMappingURL=fbdca170-async.3d4fd630.js.map