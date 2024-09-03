(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["0dde6096"],{"0dde6096":function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return d;}}),n("64ad0b8f");let d=[{value:"createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      edges: [],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    behaviors: [\n      {\n        type: 'drag-element',\n        key: 'drag-element',\n      },\n    ],\n    plugins: ['grid-line'],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'drag-element',\n      type: 'drag-element',\n      animation: true,\n      enable: 'node,combo',\n      dropEffect: 'move',\n      state: 'selected',\n      hideEdge: 'none',\n      shadow: false,\n    };\n    const optionFolder = gui.addFolder('DragElement Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable', {\n      'node,combo': (event) => ['node', 'combo'].includes(event.targetType),\n      node: (event) => ['node'].includes(event.targetType),\n      combo: (event) => ['combo'].includes(event.targetType),\n      none: false,\n    });\n    optionFolder.add(options, 'dropEffect', ['link', 'move', 'none']);\n    optionFolder.add(options, 'hideEdge', ['none', 'all', 'in', 'out', 'both']);\n    optionFolder.add(options, 'shadow');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'drag-element',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"string",paraId:1,tocIndex:1},{value:"Behavior key, that is, the unique identifier",paraId:2,tocIndex:1},{value:" Used to identify the behavior for further operations",paraId:3,tocIndex:1},{value:"// Update behavior options\r\ngraph.updateBehavior({key: 'key', ...});\n",paraId:4,tocIndex:1},{value:"Required",paraId:5,tocIndex:1},{value:"string",paraId:6,tocIndex:2},{value:"Behavior type",paraId:7,tocIndex:2},{value:"boolean",paraId:8,tocIndex:3},{value:" ",paraId:8,tocIndex:3},{value:"Default:",paraId:8,tocIndex:3},{value:" ",paraId:8,tocIndex:3},{value:"true",paraId:8,tocIndex:3},{value:"Whether to enable drag animation",paraId:9,tocIndex:3},{value:"{ default?:",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"Cursor",paraId:10,tocIndex:4},{value:"; grab:",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"Cursor",paraId:10,tocIndex:4},{value:"; grabbing:",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"Cursor",paraId:10,tocIndex:4},{value:"; }",paraId:10,tocIndex:4},{value:"Cursor style",paraId:11,tocIndex:4},{value:"'link' | 'move' | 'none'",paraId:12,tocIndex:5},{value:" ",paraId:12,tocIndex:5},{value:"Default:",paraId:12,tocIndex:5},{value:" ",paraId:12,tocIndex:5},{value:"'move'",paraId:12,tocIndex:5},{value:"Drag operation effect",paraId:13,tocIndex:5},{value:"'link'",paraId:14,tocIndex:5},{value:": Place the drag element as a child element of the target element",paraId:14,tocIndex:5},{value:"'move'",paraId:15,tocIndex:5},{value:": Move the element and update the parent element size",paraId:15,tocIndex:5},{value:"'none'",paraId:16,tocIndex:5},{value:": Only update the drag target position, no additional operations",paraId:16,tocIndex:5},{value:" The combo element can be placed as an element container into the node or combo element",paraId:17,tocIndex:5},{value:"boolean | ((event:",paraId:18,tocIndex:6},{value:" ",paraId:18,tocIndex:6},{value:"IElementDragEvent",paraId:19,tocIndex:6},{value:") => boolean)",paraId:18,tocIndex:6},{value:" ",paraId:18,tocIndex:6},{value:"Default:",paraId:18,tocIndex:6},{value:" ",paraId:18,tocIndex:6},{value:"['node', 'combo'].includes(event.targetType)",paraId:18,tocIndex:6},{value:"Whether to enable the function of dragging the node\uFF0Cdefault can drag node and combo",paraId:20,tocIndex:6},{value:"'none' | 'all' |",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"'in' | 'out' | 'both'",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"Default:",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"'none'",paraId:21,tocIndex:7},{value:"Edges hidden during dragging",paraId:22,tocIndex:7},{value:"'none'",paraId:23,tocIndex:7},{value:": do not hide",paraId:23,tocIndex:7},{value:"'out'",paraId:24,tocIndex:7},{value:": hide the edges with the node as the source node",paraId:24,tocIndex:7},{value:"'in'",paraId:25,tocIndex:7},{value:": hide the edges with the node as the target node",paraId:25,tocIndex:7},{value:"'both'",paraId:26,tocIndex:7},{value:": hide all edges related to the node",paraId:26,tocIndex:7},{value:"'all'",paraId:27,tocIndex:7},{value:": hide all edges in the graph",paraId:27,tocIndex:7},{value:" Edges will not be hidden when using the drag shadow",paraId:28,tocIndex:7},{value:"(ids:",paraId:29,tocIndex:8},{value:" ",paraId:29,tocIndex:8},{value:"string",paraId:29,tocIndex:8},{value:"[]) => void",paraId:29,tocIndex:8},{value:"Callback when dragging is completed",paraId:30,tocIndex:8},{value:"boolean",paraId:31,tocIndex:9},{value:"Whether to enable the drag shadow, that is, use a shape to replace the node to follow the mouse movement",paraId:32,tocIndex:9},{value:"string",paraId:33,tocIndex:10},{value:" ",paraId:33,tocIndex:10},{value:"Default:",paraId:33,tocIndex:10},{value:" ",paraId:33,tocIndex:10},{value:"'selected'",paraId:33,tocIndex:10},{value:"The state name of the selected node, when multi-selection is enabled, the selected nodes will be found based on this state",paraId:34,tocIndex:10},{value:"Prefix",paraId:35,tocIndex:10},{value:"BaseStyleProps",paraId:36},{value:"Except for the properties explicitly listed below, other supported properties are seen: ",paraId:37},{value:"BaseStyleProps",paraId:37},{value:"More about ",paraId:38},{value:"Prefix",paraId:38},{value:" generic usage, see ",paraId:38},{value:"Prefix",paraId:39},{value:"destroy(): void;\n",paraId:40,tocIndex:13}];}}]);
//# sourceMappingURL=0dde6096-async.ad5683fd.js.map