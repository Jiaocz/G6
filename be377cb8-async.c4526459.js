(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["be377cb8"],{be377cb8:function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return d;}}),n("2b33306a");let d=[{value:"createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', style: { x: 150, y: 150 } },\n        { id: 'node2', style: { x: 350, y: 150 } },\n      ],\n      edges: [{ id: 'edge1', source: 'node1', target: 'node2' }],\n    },\n    edge: { type: 'cubic' },\n    behaviors: ['drag-canvas', 'drag-element'],\n    plugins: ['grid-line'],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    gui.add({ type: 'cubic' }, 'type').disable();\n\n    const options = {\n      curveOffset: 20,\n      curvePosition: 0.5,\n    };\n    const optionFolder = gui.addFolder('cubic.style');\n    optionFolder.add(options, 'curveOffset', 0, 100, 1);\n    optionFolder.add(options, 'curvePosition', 0, 1, 0.1);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateEdgeData([{ id: 'edge1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"\u5982\u679C\u5143\u7D20\u6709\u5176\u7279\u5B9A\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u5C06\u5728\u4E0B\u9762\u5217\u51FA\u3002\u5BF9\u4E8E\u6240\u6709\u7684\u901A\u7528\u6837\u5F0F\u5C5E\u6027\uFF0C\u89C1 ",paraId:1},{value:"BaseEdge",paraId:2},{value:"[",paraId:3,tocIndex:0},{value:"[number, number] | [number, number, number] | Float32Array",paraId:3,tocIndex:0},{value:",",paraId:3,tocIndex:0},{value:" ",paraId:3,tocIndex:0},{value:"[number, number] | [number, number, number] | Float32Array",paraId:3,tocIndex:0},{value:"]",paraId:3,tocIndex:0},{value:"\u63A7\u5236\u70B9\u6570\u7EC4\uFF0C\u7528\u4E8E\u5B9A\u4E49\u66F2\u7EBF\u7684\u5F62\u72B6\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5C06\u4F1A\u901A\u8FC7 ",paraId:4,tocIndex:0},{value:"curveOffset",paraId:4,tocIndex:0},{value:" \u548C ",paraId:4,tocIndex:0},{value:"curvePosition",paraId:4,tocIndex:0},{value:" \u6765\u8BA1\u7B97\u63A7\u5236\u70B9",paraId:4,tocIndex:0},{value:"number | [number, number]",paraId:5,tocIndex:1},{value:" ",paraId:5,tocIndex:1},{value:"Default:",paraId:5,tocIndex:1},{value:" ",paraId:5,tocIndex:1},{value:"20",paraId:5,tocIndex:1},{value:"\u63A7\u5236\u70B9\u8DDD\u79BB\u4E24\u7AEF\u70B9\u8FDE\u7EBF\u7684\u8DDD\u79BB\uFF0C\u53EF\u7406\u89E3\u4E3A\u63A7\u5236\u8FB9\u7684\u5F2F\u66F2\u7A0B\u5EA6",paraId:6,tocIndex:1},{value:"number | [number, number]",paraId:7,tocIndex:2},{value:" ",paraId:7,tocIndex:2},{value:"Default:",paraId:7,tocIndex:2},{value:" ",paraId:7,tocIndex:2},{value:"0.5",paraId:7,tocIndex:2},{value:"\u63A7\u5236\u70B9\u5728\u4E24\u7AEF\u70B9\u8FDE\u7EBF\u4E0A\u7684\u76F8\u5BF9\u4F4D\u7F6E\uFF0C\u8303\u56F4\u4E3A",paraId:8,tocIndex:2},{value:"0-1",paraId:8,tocIndex:2}];}}]);
//# sourceMappingURL=be377cb8-async.c4526459.js.map