(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["8db1ac45"],{"8db1ac45":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return n;}}),t("71bbb1f1");let n=[{value:" Select a group of elements with an irregular polygon.",paraId:0},{value:"createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: {\n      state: {\n        custom: {\n          fill: '#D580FF',\n          halo: true,\n        },\n      },\n    },\n    edge: {\n      state: {\n        custom: {\n          stroke: '#D580FF',\n          halo: true,\n        },\n      },\n    },\n    behaviors: [\n      {\n        type: 'lasso-select',\n        key: 'lasso-select',\n      },\n    ],\n    plugins: ['grid-line'],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'lasso-select',\n      type: 'lasso-select',\n      animation: false,\n      enable: true,\n      enableElements: ['node', 'edge', 'combo'],\n      immediately: false,\n      mode: 'default',\n      state: 'selected',\n      trigger: 'shift+drag',\n    };\n    const optionFolder = gui.addFolder('LassoSelect Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'enableElements', [\n      ['node', 'edge', 'combo'],\n      ['node', 'edge'],\n      ['node', 'combo'],\n      ['combo', 'edge'],\n      ['node'],\n      ['edge'],\n      ['combo'],\n    ]);\n    optionFolder.add(options, 'trigger', {\n      'shift+drag': ['shift'],\n      drag: [],\n    });\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'mode', ['union', 'intersect', 'diff', 'default']).onChange((e) => {\n      immediately.show(e === 'default');\n    });\n    const immediately = optionFolder.add(options, 'immediately');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'lasso-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:1},{value:"boolean",paraId:2,tocIndex:0},{value:" ",paraId:2,tocIndex:0},{value:"Default:",paraId:2,tocIndex:0},{value:" ",paraId:2,tocIndex:0},{value:"false",paraId:2,tocIndex:0},{value:"Whether to enable animation.",paraId:3,tocIndex:0},{value:"boolean | ((event:",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"IPointerEvent",paraId:5,tocIndex:1},{value:") => boolean)",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"Default:",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"true",paraId:4,tocIndex:1},{value:"Whether to enable Brush select element function.",paraId:6,tocIndex:1},{value:"'node' | 'edge' | 'combo'",paraId:7,tocIndex:2},{value:"[]",paraId:7,tocIndex:2},{value:" ",paraId:7,tocIndex:2},{value:"Default:",paraId:7,tocIndex:2},{value:" ",paraId:7,tocIndex:2},{value:"['node', 'combo', 'edge']",paraId:7,tocIndex:2},{value:"Enable Elements type.",paraId:8,tocIndex:2},{value:"boolean",paraId:9,tocIndex:3},{value:" ",paraId:9,tocIndex:3},{value:"Default:",paraId:9,tocIndex:3},{value:" ",paraId:9,tocIndex:3},{value:"false",paraId:9,tocIndex:3},{value:"Whether to brush select immediately, only valid when the brush select mode is ",paraId:10,tocIndex:3},{value:"default",paraId:10,tocIndex:3},{value:"'union' | 'intersect' | 'diff' | 'default'",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"Default:",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"'default'",paraId:11,tocIndex:4},{value:"Brush select mode",paraId:12,tocIndex:4},{value:"'union'",paraId:13,tocIndex:4},{value:": Keep the current state of the selected elements and add the specified state.",paraId:13,tocIndex:4},{value:"'intersect'",paraId:14,tocIndex:4},{value:": If the selected elements already have the specified state, keep it; otherwise, clearBrush it.",paraId:14,tocIndex:4},{value:"'diff'",paraId:15,tocIndex:4},{value:": Perform a negation operation on the specified state of the selected elements.",paraId:15,tocIndex:4},{value:"'default'",paraId:16,tocIndex:4},{value:": Clear the current state of the selected elements and add the specified state.",paraId:16,tocIndex:4},{value:"(states:",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"Record",paraId:17,tocIndex:5},{value:"<",paraId:17,tocIndex:5},{value:"string",paraId:17,tocIndex:5},{value:",",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"string",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"|",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"string",paraId:17,tocIndex:5},{value:"[]>) =>",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"Record",paraId:17,tocIndex:5},{value:"<",paraId:17,tocIndex:5},{value:"string",paraId:17,tocIndex:5},{value:",",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"string",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"|",paraId:17,tocIndex:5},{value:" ",paraId:17,tocIndex:5},{value:"string",paraId:17,tocIndex:5},{value:"[]>",paraId:17,tocIndex:5},{value:"Callback when brush select elements.",paraId:18,tocIndex:5},{value:"string",paraId:19,tocIndex:6},{value:" ",paraId:19,tocIndex:6},{value:"Default:",paraId:19,tocIndex:6},{value:" ",paraId:19,tocIndex:6},{value:"'selected'",paraId:19,tocIndex:6},{value:"The state to switch to when selected.",paraId:20,tocIndex:6},{value:"RectStyleProps",paraId:21,tocIndex:7},{value:"Timely screening.",paraId:22,tocIndex:7},{value:"string[]",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"Default:",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"['shift']",paraId:23,tocIndex:8},{value:"Press this shortcut key to apply brush select with mouse click.",paraId:24,tocIndex:8},{value:" Note that setting ",paraId:25,tocIndex:8},{value:"trigger",paraId:25,tocIndex:8},{value:" to ",paraId:25,tocIndex:8},{value:"['drag']",paraId:25,tocIndex:8},{value:" will cause the ",paraId:25,tocIndex:8},{value:"drag-canvas",paraId:25,tocIndex:8},{value:" behavior to fail. The two cannot be configured at the same time.",paraId:25,tocIndex:8},{value:"string",paraId:26,tocIndex:9},{value:"Behavior key, that is, the unique identifier",paraId:27,tocIndex:9},{value:" Used to identify the behavior for further operations",paraId:28,tocIndex:9},{value:"// Update behavior options\r\ngraph.updateBehavior({key: 'key', ...});\n",paraId:29,tocIndex:9},{value:"Required",paraId:30,tocIndex:9},{value:"string",paraId:31,tocIndex:10},{value:"Behavior type",paraId:32,tocIndex:10}];}}]);
//# sourceMappingURL=8db1ac45-async.69264b42.js.map