(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["840db329"],{"840db329":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"texts",{enumerable:!0,get:function(){return i;}}),t("868aa083");let i=[{value:"createGraph(\n  {\n    data: { nodes: [{ id: 'node1', style: { x: 300, y: 110 } }] },\n    node: { type: 'ellipse' },\n    plugins: ['grid-line'],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'ellipse' }, 'type').disable();\n\n    const options = { 'size[0]': 80, 'size[1]': 40 };\n\n    const optionFolder = gui.addFolder('ellipse.style');\n    optionFolder.add(options, 'size[0]', 0, 100, 1);\n    optionFolder.add(options, 'size[1]', 0, 100, 1);\n\n    optionFolder.onChange(({ object }) => {\n      graph.updateNodeData([{ id: 'node1', style: { size: [object['size[0]'], object['size[1]']] } }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"If the element has its specific properties, we will list them below. For all generic style attributes, see ",paraId:1},{value:"BaseNode",paraId:2}];}}]);
//# sourceMappingURL=840db329-async.edb7f8bc.js.map