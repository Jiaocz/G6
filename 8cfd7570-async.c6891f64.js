(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["8cfd7570"],{"8cfd7570":function(a,e,o){"use strict";o.d(e,"__esModule",{value:!0}),o.d(e,"texts",{enumerable:!0,get:function(){return n;}}),o("6ae6dc5b");let n=[{value:"\u793A\u4F8B",paraId:0},{value:"// Assign layout options when initialization. const layout = new ComboCombinedLayout(",paraId:1},{value:"{",paraId:1},{value:"}",paraId:1},{value:"); const positions = await layout.execute(graph); // { nodes: [], edges: [] }",paraId:1},{value:"// Or use different options later. const layout = new ComboCombinedLayout(",paraId:2},{value:"{ radius: 10 }",paraId:2},{value:"); const positions = await layout.execute(graph, { radius: 20 }",paraId:2},{value:"); // { nodes: [], edges: [] }",paraId:2},{value:"// If you want to assign the positions directly to the nodes, use assign method. await layout.assign(graph, { radius: 20 }",paraId:3},{value:");",paraId:3},{value:"PointTuple",paraId:4,tocIndex:1},{value:"\u5E03\u5C40\u7684\u4E2D\u5FC3\u3001\u9ED8\u8BA4\u4E3A\u56FE\u7684\u4E2D\u5FC3",paraId:5,tocIndex:1},{value:"((d?: unknown) => number) | number | number[] | undefined",paraId:6,tocIndex:2},{value:"Combo \u5185\u90E8\u7684 padding \u503C\uFF0C\u4E0D\u7528\u4E8E\u6E32\u67D3\uFF0C\u4EC5\u7528\u4E8E\u8BA1\u7B97\u529B\u3002\u63A8\u8350\u8BBE\u7F6E\u4E3A\u4E0E\u89C6\u56FE\u4E0A combo \u5185\u90E8 padding \u503C\u76F8\u540C\u7684\u503C",paraId:7,tocIndex:2},{value:"Layout",paraId:8,tocIndex:3},{value:"<any>",paraId:8,tocIndex:3},{value:"combo \u5185\u90E8\u7684\u5E03\u5C40\u7B97\u6CD5\uFF0C\u9700\u8981\u4F7F\u7528\u540C\u6B65\u7684\u5E03\u5C40\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A concentric",paraId:9,tocIndex:3},{value:"\u793A\u4F8B",paraId:10,tocIndex:3},{value:'import { ConcentricLayout } from "@antv/layout";\r\n\r\ninnerLayout: new ConcentricLayout({\r\n  sortBy: "id",\r\n});\n',paraId:11,tocIndex:3},{value:"ConcentricLayout",paraId:12,tocIndex:3},{value:"number | number[] | ((d?:",paraId:13,tocIndex:4},{value:" ",paraId:13,tocIndex:4},{value:"Node",paraId:13,tocIndex:4},{value:") => number)",paraId:13,tocIndex:4},{value:"\u8282\u70B9\u5927\u5C0F\uFF08\u76F4\u5F84\uFF09\u3002\u7528\u4E8E\u78B0\u649E\u68C0\u6D4B",paraId:14,tocIndex:4},{value:" \u82E5\u4E0D\u6307\u5B9A\uFF0C\u5219\u6839\u636E\u4F20\u5165\u7684\u8282\u70B9\u7684 size \u5C5E\u6027\u8BA1\u7B97\u3002\u82E5\u5373\u4E0D\u6307\u5B9A\uFF0C\u8282\u70B9\u4E2D\u4E5F\u6CA1\u6709 size\uFF0C\u5219\u9ED8\u8BA4\u5927\u5C0F\u4E3A 10",paraId:15,tocIndex:4},{value:"Layout",paraId:16,tocIndex:5},{value:"<any>",paraId:16,tocIndex:5},{value:"\u6700\u5916\u5C42\u7684\u5E03\u5C40\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A force",paraId:17,tocIndex:5},{value:"\u793A\u4F8B",paraId:18,tocIndex:5},{value:'import { ForceLayout } from "@antv/layout";\r\n\r\nouterLayout: new ForceLayout({\r\n  gravity: 1,\r\n  factor: 2,\r\n  linkDistance: (edge: any, source: any, target: any) => {\r\n    const nodeSize = ((source.size?.[0] || 30) + (target.size?.[0] || 30)) / 2;\r\n    return Math.min(nodeSize * 1.5, 700);\r\n  },\r\n});\n',paraId:19,tocIndex:5},{value:"ForceLayout",paraId:20,tocIndex:5},{value:"number | ((d?:",paraId:21,tocIndex:6},{value:" ",paraId:21,tocIndex:6},{value:"Node",paraId:21,tocIndex:6},{value:") => number)",paraId:21,tocIndex:6},{value:"preventNodeOverlap \u6216 preventOverlap \u4E3A true \u65F6\u751F\u6548, \u9632\u6B62\u91CD\u53E0\u65F6\u8282\u70B9/ combo \u8FB9\u7F18\u95F4\u8DDD\u7684\u6700\u5C0F\u503C\u3002\u53EF\u4EE5\u662F\u56DE\u8C03\u51FD\u6570, \u4E3A\u4E0D\u540C\u8282\u70B9\u8BBE\u7F6E\u4E0D\u540C\u7684\u6700\u5C0F\u95F4\u8DDD",paraId:22,tocIndex:6},{value:"string",paraId:23,tocIndex:7},{value:"treeKey",paraId:24,tocIndex:7},{value:"To directly assign the positions to the nodes.",paraId:25,tocIndex:9},{value:"assign(graph: Graph, options?: ComboCombinedLayoutOptions): Promise<void>;\n",paraId:26,tocIndex:9},{value:"\u76F8\u5173\u53C2\u6570",paraId:27},{value:"\u53C2\u6570",paraId:28,tocIndex:9},{value:"\u7C7B\u578B",paraId:29,tocIndex:9},{value:"\u63CF\u8FF0",paraId:30,tocIndex:9},{value:"graph",paraId:31,tocIndex:9},{value:"Graph",paraId:32,tocIndex:9},{value:"options",paraId:33,tocIndex:9},{value:"ComboCombinedLayoutOptions",paraId:34,tocIndex:9},{value:"\u8FD4\u56DE\u503C",paraId:35,tocIndex:9},{value:"\uFF1A",paraId:35,tocIndex:9},{value:"\u7C7B\u578B\uFF1A",paraId:36,tocIndex:9},{value:"Promise<void>",paraId:36,tocIndex:9},{value:"Return the positions of nodes and edges(if needed).",paraId:37,tocIndex:10},{value:"execute(graph: Graph, options?: ComboCombinedLayoutOptions): Promise<LayoutMapping>;\n",paraId:38,tocIndex:10},{value:"\u76F8\u5173\u53C2\u6570",paraId:27},{value:"\u53C2\u6570",paraId:39,tocIndex:10},{value:"\u7C7B\u578B",paraId:40,tocIndex:10},{value:"\u63CF\u8FF0",paraId:41,tocIndex:10},{value:"graph",paraId:42,tocIndex:10},{value:"Graph",paraId:43,tocIndex:10},{value:"options",paraId:44,tocIndex:10},{value:"ComboCombinedLayoutOptions",paraId:45,tocIndex:10},{value:"\u8FD4\u56DE\u503C",paraId:46,tocIndex:10},{value:"\uFF1A",paraId:46,tocIndex:10},{value:"\u7C7B\u578B\uFF1A",paraId:47,tocIndex:10},{value:"Promise<LayoutMapping>",paraId:47,tocIndex:10}];}}]);
//# sourceMappingURL=8cfd7570-async.c6891f64.js.map