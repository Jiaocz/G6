(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["a07bc23d"],{a07bc23d:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"texts",{enumerable:!0,get:function(){return o;}}),a("ed88d748");let o=[{value:"createGraph(\n  {\n    data: { nodes: [{ id: 'node1', style: { x: 300, y: 110, size: 40 } }] },\n    node: { type: 'hexagon' },\n    plugins: ['grid-line'],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'hexagon' }, 'type').disable();\n\n    const options = {\n      size: 40,\n      outerR: 0,\n    };\n    const optionFolder = gui.addFolder('hexagon.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n    optionFolder.add(options, 'outerR', 0, 100);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"\u5982\u679C\u5143\u7D20\u6709\u5176\u7279\u5B9A\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u5C06\u5728\u4E0B\u9762\u5217\u51FA\u3002\u5BF9\u4E8E\u6240\u6709\u7684\u901A\u7528\u6837\u5F0F\u5C5E\u6027\uFF0C\u89C1 ",paraId:1},{value:"BaseNode",paraId:2},{value:"number",paraId:3,tocIndex:0},{value:"\u5916\u534A\u5F84\uFF0C\u9ED8\u8BA4\u4E3A\u5BBD\u9AD8\u7684\u6700\u5C0F\u503C\u7684\u4E00\u534A",paraId:4,tocIndex:0}];}}]);
//# sourceMappingURL=a07bc23d-async.04666012.js.map