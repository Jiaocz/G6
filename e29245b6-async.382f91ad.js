(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["e29245b6"],{e29245b6:function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return o;}}),d("8f96a931");let o=[{value:"createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', style: { x: 150, y: 250 } },\n        { id: 'node2', style: { x: 400, y: 250 } },\n      ],\n      edges: [{ id: 'edge1', source: 'node1', target: 'node2', style: { labelText: 'node1 \u{1F449} node2' } }],\n    },\n    node: { style: { labelText: (d) => d.id } },\n    behaviors: ['drag-canvas', 'drag-element'],\n    plugins: ['grid-line'],\n  },\n  { width: 600, height: 500 },\n  (gui, graph) => {\n    const options = {\n      lineWidth: 1,\n      opacity: 1,\n      stroke: '#99add1',\n\n      startArrow: false,\n      startArrowSize: 8,\n      startArrowType: 'triangle',\n\n      endArrow: false,\n      endArrowSize: 8,\n      endArrowType: 'triangle',\n\n      label: true,\n      labelAutoRotate: true,\n      labelMaxWidth: '80%',\n      labelOffsetX: 0,\n      labelOffsetY: 0,\n      labelPadding: 0,\n      labelPlacement: 'center',\n      labelText: 'node1 \u{1F449} node2',\n\n      labelBackground: false,\n      labelBackgroundFill: '#fff',\n      labelBackgroundStroke: '#fff',\n      labelBackgroundLineDash: 0,\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.5,\n      labelBackgroundRadius: 0,\n\n      halo: false,\n      haloLineDash: 0,\n      haloLineWidth: 12,\n      haloStrokeOpacity: 0.25,\n    };\n    const optionFolder = gui.addFolder('edge.style');\n\n    optionFolder.add(options, 'lineWidth', 0, 20);\n    optionFolder.add(options, 'opacity', 0, 1);\n    optionFolder.addColor(options, 'stroke');\n\n    // startArrow\n    optionFolder.add(options, 'startArrow').onChange((v) => {\n      startArrowSize.show(v);\n      startArrowType.show(v);\n    });\n    const startArrowSize = optionFolder.add(options, 'startArrowSize', 0, 20).hide();\n    const startArrowType = optionFolder\n      .add(options, 'startArrowType', ['triangle', 'circle', 'diamond', 'vee', 'rect', 'triangleRect', 'simple'])\n      .hide();\n\n    // endArrow\n    optionFolder.add(options, 'endArrow').onChange((v) => {\n      endArrowSize.show(v);\n      endArrowType.show(v);\n    });\n    const endArrowSize = optionFolder.add(options, 'endArrowSize', 0, 20).hide();\n    const endArrowType = optionFolder\n      .add(options, 'endArrowType', ['triangle', 'circle', 'diamond', 'vee', 'rect', 'triangleRect', 'simple'])\n      .hide();\n\n    // label\n    optionFolder.add(options, 'label').onChange((v) => {\n      [labelAutoRotate, labelMaxWidth, labelOffsetX, labelOffsetY, labelPadding, labelPlacement, labelText].forEach(\n        (i) => i.show(v),\n      );\n    });\n    const labelAutoRotate = optionFolder.add(options, 'labelAutoRotate');\n    const labelMaxWidth = optionFolder.add(options, 'labelMaxWidth', ['80%', '20px', '200%']);\n    const labelOffsetX = optionFolder.add(options, 'labelOffsetX', 0, 50);\n    const labelOffsetY = optionFolder.add(options, 'labelOffsetY', 0, 50);\n    const labelPadding = optionFolder.add(options, 'labelPadding', 0, 20);\n    const labelPlacement = optionFolder.add(options, 'labelPlacement', ['start', 'center', 'end', 0.2, 0.8]);\n    const labelText = optionFolder.add(options, 'labelText');\n\n    const labelBackground = optionFolder.add(options, 'labelBackground').onChange((v) => {\n      [\n        labelBackgroundFill,\n        labelBackgroundStroke,\n        labelBackgroundLineDash,\n        labelBackgroundLineWidth,\n        labelBackgroundOpacity,\n        labelBackgroundRadius,\n      ].forEach((i) => i.show(v));\n    });\n    const labelBackgroundFill = optionFolder.addColor(options, 'labelBackgroundFill').hide();\n    const labelBackgroundStroke = optionFolder.addColor(options, 'labelBackgroundStroke').hide();\n    const labelBackgroundLineDash = optionFolder.add(options, 'labelBackgroundLineDash', 0, 10).hide();\n    const labelBackgroundLineWidth = optionFolder.add(options, 'labelBackgroundLineWidth', 0, 10).hide();\n    const labelBackgroundOpacity = optionFolder.add(options, 'labelBackgroundOpacity', 0, 1).hide();\n    const labelBackgroundRadius = optionFolder.add(options, 'labelBackgroundRadius', 0, 30).hide();\n\n    const halo = optionFolder.add(options, 'halo').onChange((v) => {\n      [haloStrokeOpacity, haloLineDash, haloLineWidth].forEach((i) => i.show(v));\n    });\n    const haloStrokeOpacity = optionFolder.addColor(options, 'haloStrokeOpacity', 0, 1).hide();\n    const haloLineDash = optionFolder.add(options, 'haloLineDash', 0, 10).hide();\n    const haloLineWidth = optionFolder.add(options, 'haloLineWidth', 0, 10).hide();\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateEdgeData([{ id: 'edge1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"\u9664\u4E86\u4E0B\u9762\u663E\u5F0F\u5217\u51FA\u7684\u5C5E\u6027\uFF0C\u5176\u4ED6\u652F\u6301\u5C5E\u6027\u89C1\uFF1A",paraId:1},{value:"BaseStyleProps",paraId:1},{value:"boolean",paraId:2,tocIndex:0},{value:" ",paraId:2,tocIndex:0},{value:"Default:",paraId:2,tocIndex:0},{value:" ",paraId:2,tocIndex:0},{value:"true",paraId:2,tocIndex:0},{value:"\u662F\u5426\u663E\u793A\u8FB9\u7684\u5FBD\u6807",paraId:3,tocIndex:0},{value:"boolean",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"Default:",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"false",paraId:4,tocIndex:1},{value:"\u662F\u5426\u663E\u793A\u8FB9\u7684\u7ED3\u675F\u7BAD\u5934",paraId:5,tocIndex:1},{value:"number",paraId:6,tocIndex:2},{value:"\u7ED3\u675F\u7BAD\u5934\u7684\u504F\u79FB\u91CF",paraId:7,tocIndex:2},{value:"boolean",paraId:8,tocIndex:3},{value:" ",paraId:8,tocIndex:3},{value:"Default:",paraId:8,tocIndex:3},{value:" ",paraId:8,tocIndex:3},{value:"false",paraId:8,tocIndex:3},{value:"\u662F\u5426\u663E\u793A\u8FB9\u7684\u5149\u6655",paraId:9,tocIndex:3},{value:"boolean",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"Default:",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"true",paraId:10,tocIndex:4},{value:"3D \u573A\u666F\u4E2D\u751F\u6548\uFF0C\u59CB\u7EC8\u671D\u5411\u5C4F\u5E55\uFF0C\u56E0\u6B64\u7EBF\u5BBD\u4E0D\u53D7\u900F\u89C6\u6295\u5F71\u5F71\u50CF",paraId:11,tocIndex:4},{value:"boolean",paraId:12,tocIndex:5},{value:" ",paraId:12,tocIndex:5},{value:"Default:",paraId:12,tocIndex:5},{value:" ",paraId:12,tocIndex:5},{value:"true",paraId:12,tocIndex:5},{value:"\u662F\u5426\u663E\u793A\u8FB9\u7684\u6807\u7B7E",paraId:13,tocIndex:5},{value:"boolean",paraId:14,tocIndex:6},{value:" ",paraId:14,tocIndex:6},{value:"Default:",paraId:14,tocIndex:6},{value:" ",paraId:14,tocIndex:6},{value:"true",paraId:14,tocIndex:6},{value:"\u662F\u5426\u542F\u7528\u81EA\u73AF\u8FB9",paraId:15,tocIndex:6},{value:"DisplayObject",paraId:16,tocIndex:7},{value:" ",paraId:16,tocIndex:7},{value:"| null",paraId:16,tocIndex:7},{value:"\u5728 \u201C\u7EC8\u70B9\u201D \u5904\u6DFB\u52A0\u4E00\u4E2A\u6807\u8BB0\u56FE\u5F62\uFF0C\u5176\u4E2D \u201C\u7EC8\u70B9\u201D \u4E3A\u8FB9\u4E0E\u7EC8\u6B62\u8282\u70B9\u7684\u4EA4\u70B9",paraId:17,tocIndex:7},{value:"number",paraId:18,tocIndex:8},{value:" ",paraId:18,tocIndex:8},{value:"Default:",paraId:18,tocIndex:8},{value:" ",paraId:18,tocIndex:8},{value:"0",paraId:18,tocIndex:8},{value:"\u8C03\u6574 \u201C\u7EC8\u70B9\u201D \u5904\u6807\u8BB0\u56FE\u5F62\u7684\u4F4D\u7F6E\uFF0C\u6B63\u504F\u79FB\u91CF\u5411\u5185\uFF0C\u8D1F\u504F\u79FB\u91CF\u5411\u5916",paraId:19,tocIndex:8},{value:"DisplayObject",paraId:20,tocIndex:9},{value:" ",paraId:20,tocIndex:9},{value:"| null",paraId:20,tocIndex:9},{value:"\u5728\u8DEF\u5F84\u9664\u4E86 \u201C\u8D77\u70B9\u201D \u548C \u201C\u7EC8\u70B9\u201D \u4E4B\u5916\u7684\u6BCF\u4E00\u4E2A\u9876\u70B9\u4E0A\u653E\u7F6E\u6807\u8BB0\u56FE\u5F62\u3002\u5728\u5185\u90E8\u5B9E\u73B0\u4E2D\uFF0C\u7531\u4E8E\u6211\u4EEC\u4F1A\u628A\u8DEF\u5F84\u4E2D\u90E8\u5206\u547D\u4EE4\u8F6C\u6362\u6210 C \u547D\u4EE4\uFF0C\u56E0\u6B64\u8FD9\u4E9B\u9876\u70B9\u5B9E\u9645\u662F\u4E09\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF\u7684\u63A7\u5236\u70B9",paraId:21,tocIndex:9},{value:"DisplayObject",paraId:22,tocIndex:10},{value:" ",paraId:22,tocIndex:10},{value:"| null",paraId:22,tocIndex:10},{value:"\u5728 \u201C\u8D77\u70B9\u201D \u5904\u6DFB\u52A0\u4E00\u4E2A\u6807\u8BB0\u56FE\u5F62\uFF0C\u5176\u4E2D \u201C\u8D77\u59CB\u70B9\u201D \u4E3A\u8FB9\u4E0E\u8D77\u59CB\u8282\u70B9\u7684\u4EA4\u70B9",paraId:23,tocIndex:10},{value:"number",paraId:24,tocIndex:11},{value:" ",paraId:24,tocIndex:11},{value:"Default:",paraId:24,tocIndex:11},{value:" ",paraId:24,tocIndex:11},{value:"0",paraId:24,tocIndex:11},{value:"\u8C03\u6574 \u201C\u8D77\u70B9\u201D \u5904\u6807\u8BB0\u56FE\u5F62\u7684\u4F4D\u7F6E\uFF0C\u6B63\u504F\u79FB\u91CF\u5411\u5185\uFF0C\u8D1F\u504F\u79FB\u91CF\u5411\u5916",paraId:25,tocIndex:11},{value:"Required",paraId:26,tocIndex:11},{value:"string",paraId:27,tocIndex:12},{value:"\u8FB9\u7684\u8D77\u70B9 ID",paraId:28,tocIndex:12},{value:" \u8BE5\u5C5E\u6027\u6307\u5411\u7269\u7406\u610F\u4E49\u4E0A\u7684\u8D77\u70B9\uFF0C\u7531 G6 \u5185\u90E8\u7EF4\u62A4\uFF0C\u7528\u6237\u65E0\u9700\u8FC7\u591A\u5173\u6CE8\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C",paraId:29,tocIndex:12},{value:"sourceNode",paraId:29,tocIndex:12},{value:" \u4E0E\u4E0A\u4E00\u7EA7\u7684 ",paraId:29,tocIndex:12},{value:"source",paraId:29,tocIndex:12},{value:" \u5C5E\u6027\u4E00\u81F4\u3002\u4F46\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C",paraId:29,tocIndex:12},{value:"sourceNode",paraId:29,tocIndex:12},{value:" \u53EF\u80FD\u4F1A\u88AB G6 \u5185\u90E8\u8F6C\u6362\uFF0C\u4F8B\u5982\u5728 Combo \u6536\u8D77\u65F6\u5185\u90E8\u8282\u70B9\u4E0A\u7684\u8FB9\u4F1A\u81EA\u52A8\u8FDE\u63A5\u5230\u7236 Combo\uFF0C\u6B64\u65F6 ",paraId:29,tocIndex:12},{value:"sourceNode",paraId:29,tocIndex:12},{value:" \u4F1A\u53D8\u66F4\u4E3A\u7236 Combo \u7684 ID\u3002",paraId:29,tocIndex:12},{value:"string",paraId:30,tocIndex:13},{value:"\u8FB9\u8D77\u59CB\u8FDE\u63A5\u7684 port",paraId:31,tocIndex:13},{value:"boolean",paraId:32,tocIndex:14},{value:" ",paraId:32,tocIndex:14},{value:"Default:",paraId:32,tocIndex:14},{value:" ",paraId:32,tocIndex:14},{value:"false",paraId:32,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u8FB9\u7684\u8D77\u59CB\u7BAD\u5934",paraId:33,tocIndex:14},{value:"number",paraId:34,tocIndex:15},{value:"\u8D77\u59CB\u7BAD\u5934\u7684\u504F\u79FB\u91CF",paraId:35,tocIndex:15},{value:"Required",paraId:36,tocIndex:15},{value:"string",paraId:37,tocIndex:16},{value:"\u8FB9\u7684\u7EC8\u70B9 shape",paraId:38,tocIndex:16},{value:"string",paraId:39,tocIndex:17},{value:"\u8FB9\u7EC8\u70B9\u8FDE\u63A5\u7684 port",paraId:40,tocIndex:17},{value:"Prefix",paraId:41,tocIndex:17},{value:"EdgeLabelStyleProps",paraId:42,tocIndex:17},{value:"\u9664\u4E86\u4E0B\u9762\u663E\u5F0F\u5217\u51FA\u7684\u5C5E\u6027\uFF0C\u5176\u4ED6\u652F\u6301\u5C5E\u6027\u89C1\uFF1A",paraId:43},{value:"TextStyleProps",paraId:43},{value:"\u5173\u4E8E ",paraId:44},{value:"Prefix",paraId:44},{value:" \u6CDB\u578B\u7684\u4F7F\u7528\u4FE1\u606F\uFF0C\u89C1 ",paraId:44},{value:"Prefix",paraId:45},{value:"boolean",paraId:46,tocIndex:19},{value:" ",paraId:46,tocIndex:19},{value:"Default:",paraId:46,tocIndex:19},{value:" ",paraId:46,tocIndex:19},{value:"true",paraId:46,tocIndex:19},{value:"\u662F\u5426\u81EA\u52A8\u65CB\u8F6C\uFF0C\u4FDD\u6301\u4E0E\u8FB9\u7684\u65B9\u5411\u4E00\u81F4",paraId:47,tocIndex:19},{value:"string | number",paraId:48,tocIndex:20},{value:" ",paraId:48,tocIndex:20},{value:"Default:",paraId:48,tocIndex:20},{value:" ",paraId:48,tocIndex:20},{value:"'80%'",paraId:48,tocIndex:20},{value:"\u6587\u672C\u7684\u6700\u5927\u5BBD\u5EA6\uFF0C\u8D85\u51FA\u90E8\u5206\u4F1A\u7528\u7701\u7565\u53F7\u4EE3\u66FF",paraId:49,tocIndex:20},{value:"number",paraId:50,tocIndex:21},{value:" ",paraId:50,tocIndex:21},{value:"Default:",paraId:50,tocIndex:21},{value:" ",paraId:50,tocIndex:21},{value:"4",paraId:50,tocIndex:21},{value:"\u6807\u7B7E\u5E73\u884C\u4E8E\u8FB9\u7684\u6C34\u5E73\u504F\u79FB\u91CF",paraId:51,tocIndex:21},{value:"number",paraId:52,tocIndex:22},{value:" ",paraId:52,tocIndex:22},{value:"Default:",paraId:52,tocIndex:22},{value:" ",paraId:52,tocIndex:22},{value:"0",paraId:52,tocIndex:22},{value:"\u6807\u7B7E\u5782\u76F4\u4E8E\u8FB9\u7684\u5782\u76F4\u504F\u79FB\u91CF",paraId:53,tocIndex:22},{value:"'start' | 'center' | 'end' | number",paraId:54,tocIndex:23},{value:" ",paraId:54,tocIndex:23},{value:"Default:",paraId:54,tocIndex:23},{value:" ",paraId:54,tocIndex:23},{value:"'center'",paraId:54,tocIndex:23},{value:"\u6807\u7B7E\u76F8\u5BF9\u4E8E\u8FB9\u7684\u4F4D\u7F6E\u3002\u53D6\u503C\u8303\u56F4\u4E3A 'start'\u3001'center'\u3001'end' \u6216\u7279\u5B9A\u6BD4\u7387\uFF08\u6570\u5B57 0-1\uFF09",paraId:55,tocIndex:23},{value:"boolean",paraId:56,tocIndex:24},{value:"\u662F\u5426\u663E\u793A\u80CC\u666F",paraId:57,tocIndex:24},{value:"number | number[]",paraId:58,tocIndex:25},{value:" ",paraId:58,tocIndex:25},{value:"Default:",paraId:58,tocIndex:25},{value:" ",paraId:58,tocIndex:25},{value:"0",paraId:58,tocIndex:25},{value:"\u6807\u7B7E\u5185\u8FB9\u8DDD",paraId:59,tocIndex:25},{value:"Prefix",paraId:60,tocIndex:25},{value:"RectStyleProps",paraId:61},{value:"\u9664\u4E86\u4E0B\u9762\u663E\u5F0F\u5217\u51FA\u7684\u5C5E\u6027\uFF0C\u5176\u4ED6\u652F\u6301\u5C5E\u6027\u89C1\uFF1A",paraId:62},{value:"RectStyleProps",paraId:62},{value:"\u5173\u4E8E ",paraId:63},{value:"Prefix",paraId:63},{value:" \u6CDB\u578B\u7684\u4F7F\u7528\u4FE1\u606F\uFF0C\u89C1 ",paraId:63},{value:"Prefix",paraId:64},{value:"Prefix",paraId:65},{value:"PathStyleProps",paraId:61},{value:"\u9664\u4E86\u4E0B\u9762\u663E\u5F0F\u5217\u51FA\u7684\u5C5E\u6027\uFF0C\u5176\u4ED6\u652F\u6301\u5C5E\u6027\u89C1\uFF1A",paraId:66},{value:"PathStyleProps",paraId:66},{value:"\u5173\u4E8E ",paraId:67},{value:"Prefix",paraId:67},{value:" \u6CDB\u578B\u7684\u4F7F\u7528\u4FE1\u606F\uFF0C\u89C1 ",paraId:67},{value:"Prefix",paraId:68},{value:"Prefix",paraId:69},{value:"\u9664\u4E86\u4E0B\u9762\u663E\u5F0F\u5217\u51FA\u7684\u5C5E\u6027\uFF0C\u5176\u4ED6\u652F\u6301\u5C5E\u6027\u89C1\uFF1AEdgeBadgeStyleProps",paraId:70},{value:"\u5173\u4E8E ",paraId:71},{value:"Prefix",paraId:71},{value:" \u6CDB\u578B\u7684\u4F7F\u7528\u4FE1\u606F\uFF0C\u89C1 ",paraId:71},{value:"Prefix",paraId:72},{value:"Prefix",paraId:73},{value:"EdgeArrowStyleProps",paraId:74},{value:"\u9664\u4E86\u4E0B\u9762\u663E\u5F0F\u5217\u51FA\u7684\u5C5E\u6027\uFF0C\u5176\u4ED6\u652F\u6301\u5C5E\u6027\u89C1\uFF1A",paraId:75},{value:"PathStyleProps",paraId:75},{value:", ",paraId:75},{value:"ImageStyleProps",paraId:75},{value:"\uFF08\u9664\u4E86 width,height \uFF09",paraId:75},{value:"\u5173\u4E8E ",paraId:76},{value:"Prefix",paraId:76},{value:" \u6CDB\u578B\u7684\u4F7F\u7528\u4FE1\u606F\uFF0C\u89C1 ",paraId:76},{value:"Prefix",paraId:77},{value:"number | [number, number] | Float32Array | [number, number, number]",paraId:78,tocIndex:30},{value:" ",paraId:78,tocIndex:30},{value:"Default:",paraId:78,tocIndex:30},{value:" ",paraId:78,tocIndex:30},{value:"8",paraId:78,tocIndex:30},{value:"\u7BAD\u5934\u5927\u5C0F",paraId:79,tocIndex:30},{value:"'triangle' | 'circle' | 'diamond' | 'vee' | 'rect' | 'triangleRect' | 'simple' | ((width: number, height: number) =>",paraId:80,tocIndex:31},{value:" ",paraId:80,tocIndex:31},{value:"PathArray",paraId:80,tocIndex:31},{value:")",paraId:80,tocIndex:31},{value:" ",paraId:80,tocIndex:31},{value:"Default:",paraId:80,tocIndex:31},{value:" ",paraId:80,tocIndex:31},{value:"'triangle'",paraId:80,tocIndex:31},{value:"\u7BAD\u5934\u7C7B\u578B",paraId:81,tocIndex:31},{value:"Prefix",paraId:82,tocIndex:31},{value:"EdgeArrowStyleProps",paraId:83,tocIndex:31},{value:"\u9664\u4E86\u4E0B\u9762\u663E\u5F0F\u5217\u51FA\u7684\u5C5E\u6027\uFF0C\u5176\u4ED6\u652F\u6301\u5C5E\u6027\u89C1\uFF1A",paraId:84},{value:"PathStyleProps",paraId:84},{value:", ",paraId:84},{value:"ImageStyleProps",paraId:84},{value:"\uFF08\u9664\u4E86 width,height \uFF09",paraId:84},{value:"\u5173\u4E8E ",paraId:85},{value:"Prefix",paraId:85},{value:" \u6CDB\u578B\u7684\u4F7F\u7528\u4FE1\u606F\uFF0C\u89C1 ",paraId:85},{value:"Prefix",paraId:86},{value:"number | [number, number] | Float32Array | [number, number, number]",paraId:87,tocIndex:33},{value:" ",paraId:87,tocIndex:33},{value:"Default:",paraId:87,tocIndex:33},{value:" ",paraId:87,tocIndex:33},{value:"8",paraId:87,tocIndex:33},{value:"\u7BAD\u5934\u5927\u5C0F",paraId:88,tocIndex:33},{value:"'triangle' | 'circle' | 'diamond' | 'vee' | 'rect' | 'triangleRect' | 'simple' | ((width: number, height: number) =>",paraId:89,tocIndex:34},{value:" ",paraId:89,tocIndex:34},{value:"PathArray",paraId:89,tocIndex:34},{value:")",paraId:89,tocIndex:34},{value:" ",paraId:89,tocIndex:34},{value:"Default:",paraId:89,tocIndex:34},{value:" ",paraId:89,tocIndex:34},{value:"'triangle'",paraId:89,tocIndex:34},{value:"\u7BAD\u5934\u7C7B\u578B",paraId:90,tocIndex:34},{value:"Prefix",paraId:91,tocIndex:34},{value:"LoopStyleProps",paraId:92,tocIndex:34},{value:"\u5173\u4E8E ",paraId:93},{value:"Prefix",paraId:93},{value:" \u6CDB\u578B\u7684\u4F7F\u7528\u4FE1\u606F\uFF0C\u89C1 ",paraId:93},{value:"Prefix",paraId:94},{value:"boolean",paraId:95,tocIndex:36},{value:" ",paraId:95,tocIndex:36},{value:"Default:",paraId:95,tocIndex:36},{value:" ",paraId:95,tocIndex:36},{value:"true",paraId:95,tocIndex:36},{value:"\u6307\u5B9A\u662F\u5426\u987A\u65F6\u9488\u7ED8\u5236\u73AF",paraId:96,tocIndex:36},{value:"number",paraId:97,tocIndex:37},{value:"\u4ECE\u8282\u70B9 keyShape \u8FB9\u7F18\u5230\u81EA\u73AF\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C\u7528\u4E8E\u6307\u5B9A\u81EA\u73AF\u7684\u66F2\u7387\uFF0C\u9ED8\u8BA4\u4E3A\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u7684\u6700\u5927\u503C",paraId:98,tocIndex:37},{value:"'left' | 'right' | 'top' | 'bottom' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",paraId:99,tocIndex:38},{value:" ",paraId:99,tocIndex:38},{value:"Default:",paraId:99,tocIndex:38},{value:" ",paraId:99,tocIndex:38},{value:"'top'",paraId:99,tocIndex:38},{value:"\u8FB9\u7684\u4F4D\u7F6E",paraId:100,tocIndex:38}];}}]);
//# sourceMappingURL=e29245b6-async.382f91ad.js.map