(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["fa31adaf"],{fa31adaf:function(a,e,n){"use strict";n.d(e,"__esModule",{value:!0}),n.d(e,"texts",{enumerable:!0,get:function(){return d;}}),n("43968fbe");let d=[{value:" \u901A\u8FC7\u53CC\u51FB Combo \u8FDB\u884C\u5C55\u5F00\u6216\u6536\u8D77 Combo\u3002",paraId:0},{value:"createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      edges: [],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    behaviors: [\n      {\n        type: 'collapse-expand',\n        key: 'collapse-expand',\n      },\n    ],\n    plugins: ['grid-line'],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'collapse-expand',\n      type: 'collapse-expand',\n      animation: true,\n      enable: true,\n    };\n    const optionFolder = gui.addFolder('CollapseExpand Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'collapse-expand',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:1},{value:"string",paraId:2,tocIndex:1},{value:"\u4EA4\u4E92 key\uFF0C\u5373\u552F\u4E00\u6807\u8BC6",paraId:3,tocIndex:1},{value:" \u7528\u4E8E\u6807\u8BC6\u4EA4\u4E92\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u64CD\u4F5C\u6B64\u4EA4\u4E92",paraId:4,tocIndex:1},{value:"// Update behavior options\r\ngraph.updateBehavior({key: 'key', ...});\n",paraId:5,tocIndex:1},{value:"Required",paraId:6,tocIndex:1},{value:"string",paraId:7,tocIndex:2},{value:"\u4EA4\u4E92\u7C7B\u578B",paraId:8,tocIndex:2},{value:"boolean",paraId:9,tocIndex:3},{value:" ",paraId:9,tocIndex:3},{value:"Default:",paraId:9,tocIndex:3},{value:" ",paraId:9,tocIndex:3},{value:"true",paraId:9,tocIndex:3},{value:"\u662F\u5426\u542F\u7528\u52A8\u753B",paraId:10,tocIndex:3},{value:"boolean | ((event:",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"IPointerEvent",paraId:12,tocIndex:4},{value:") => boolean)",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"Default:",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"true",paraId:11,tocIndex:4},{value:"\u662F\u5426\u542F\u7528\u5C55\u5F00/\u6536\u8D77\u529F\u80FD",paraId:13,tocIndex:4},{value:"(id:",paraId:14,tocIndex:5},{value:" ",paraId:14,tocIndex:5},{value:"string",paraId:14,tocIndex:5},{value:") => void",paraId:14,tocIndex:5},{value:"\u5B8C\u6210\u6536\u8D77\u65F6\u7684\u56DE\u8C03",paraId:15,tocIndex:5},{value:"(id:",paraId:16,tocIndex:6},{value:" ",paraId:16,tocIndex:6},{value:"string",paraId:16,tocIndex:6},{value:") => void",paraId:16,tocIndex:6},{value:"\u5B8C\u6210\u5C55\u5F00\u65F6\u7684\u56DE\u8C03",paraId:17,tocIndex:6},{value:"CommonEvent.CLICK",paraId:18,tocIndex:7},{value:" ",paraId:19,tocIndex:7},{value:"|",paraId:19,tocIndex:7},{value:" ",paraId:19,tocIndex:7},{value:"CommonEvent.DBLCLICK",paraId:20,tocIndex:7},{value:" ",paraId:19,tocIndex:7},{value:"Default:",paraId:19,tocIndex:7},{value:" ",paraId:19,tocIndex:7},{value:"'dblclick'",paraId:19,tocIndex:7},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:21,tocIndex:7},{value:"destroy(): void;\n",paraId:22,tocIndex:9},{value:"update(options: Partial<CollapseExpandOptions>): void;\n",paraId:23,tocIndex:10},{value:"\u76F8\u5173\u53C2\u6570",paraId:24},{value:"\u53C2\u6570",paraId:25,tocIndex:10},{value:"\u7C7B\u578B",paraId:26,tocIndex:10},{value:"\u63CF\u8FF0",paraId:27,tocIndex:10},{value:"options",paraId:28,tocIndex:10},{value:"Partial<",paraId:29,tocIndex:10},{value:"CollapseExpandOptions",paraId:30,tocIndex:10},{value:">",paraId:29,tocIndex:10},{value:"\u8FD4\u56DE\u503C",paraId:31,tocIndex:10},{value:"\uFF1A",paraId:31,tocIndex:10},{value:"\u7C7B\u578B\uFF1A",paraId:32,tocIndex:10},{value:"void",paraId:32,tocIndex:10}];}}]);
//# sourceMappingURL=fa31adaf-async.aee258eb.js.map