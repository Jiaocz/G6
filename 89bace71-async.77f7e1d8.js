(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["89bace71"],{"89bace71":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"texts",{enumerable:!0,get:function(){return a;}}),t("ec92403e");let a=[{value:"createGraph(\n  {\n    data: { nodes: [{ id: 'node1', style: { x: 300, y: 110, size: 40 } }] },\n    node: { type: 'circle' },\n    plugins: ['grid-line'],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'circle' }, 'type').disable();\n\n    const options = { size: 40 };\n    const optionFolder = gui.addFolder('circle.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"If the element has its specific properties, we will list them below. For all generic style attributes, see ",paraId:1},{value:"BaseNode",paraId:2}];}}]);
//# sourceMappingURL=89bace71-async.77f7e1d8.js.map