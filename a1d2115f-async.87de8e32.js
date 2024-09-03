(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["a1d2115f"],{a1d2115f:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"texts",{enumerable:!0,get:function(){return t;}}),a("00432266");let t=[{value:"createGraph(\n  {\n    data: {\n      nodes: [\n        {\n          id: 'node1',\n          style: {\n            x: 300,\n            y: 110,\n            size: [120, 40],\n            innerHTML: `\n<div style=\"width: 100%; height: 100%; background: #7863FF; display: flex; justify-content: center; align-items: center;\">\n  <span style=\"color: #fff; font-size: 12px;\">\n    HTML Node\n  </span>\n</div>`,\n          },\n        },\n      ],\n    },\n    node: { type: 'html' },\n    plugins: ['grid-line'],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'html' }, 'type').disable();\n\n    const options = {\n      size: 50,\n      innerHTML: `\n<div style=\"width: 100%; height: 100%; background: #7863FF; display: flex; justify-content: center; align-items: center;\">\n  <span style=\"color: #fff; font-size: 20px;\">\n    'HTML Node'\n  </span>\n</div>`,\n    };\n    const optionFolder = gui.addFolder('html.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n    optionFolder.add(options, 'innerHTML');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"If the element has its specific properties, we will list them below. For all generic style attributes, see ",paraId:1},{value:"BaseNode",paraId:2},{value:"number",paraId:3,tocIndex:0},{value:" ",paraId:3,tocIndex:0},{value:"Default:",paraId:3,tocIndex:0},{value:" ",paraId:3,tocIndex:0},{value:"0",paraId:3,tocIndex:0},{value:"Horizontal offset. The HTML container defaults to the upper left corner as the origin, and the horizontal offset is performed through dx",paraId:4,tocIndex:0},{value:"number",paraId:5,tocIndex:1},{value:" ",paraId:5,tocIndex:1},{value:"Default:",paraId:5,tocIndex:1},{value:" ",paraId:5,tocIndex:1},{value:"0",paraId:5,tocIndex:1},{value:"Vertical offset. The HTML container defaults to the upper left corner as the origin, and the vertical offset is performed through dy",paraId:6,tocIndex:1},{value:"Required",paraId:7,tocIndex:1},{value:"string |",paraId:8,tocIndex:2},{value:" ",paraId:8,tocIndex:2},{value:"HTMLElement",paraId:8,tocIndex:2},{value:"HTML content, can be a string or ",paraId:9,tocIndex:2},{value:"HTMLElement",paraId:9,tocIndex:2}];}}]);
//# sourceMappingURL=a1d2115f-async.87de8e32.js.map