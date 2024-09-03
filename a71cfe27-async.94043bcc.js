(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["a71cfe27"],{a71cfe27:function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return n;}}),d("485daa21");let n=[{value:" \u652F\u6301\u4F7F\u7528\u6587\u672C\u548C\u56FE\u7247\u4F5C\u4E3A\u6C34\u5370\uFF0C\u5B9E\u73B0\u539F\u7406\u662F\u5728 Graph \u5BB9\u5668\u7684 div \u4E0A\u52A0\u4E0A ",paraId:0},{value:"background-image",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7 css \u6765\u63A7\u5236\u6C34\u5370\u7684\u4F4D\u7F6E\u548C\u6837\u5F0F\u3002\u5BF9\u4E8E\u6587\u672C\uFF0C\u4F1A\u4F7F\u7528\u9690\u85CF canvas \u8F6C\u6210\u56FE\u7247\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0",paraId:0},{value:"createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    layout: { type: 'force' },\n    behaviors: ['drag-canvas'],\n    plugins: [{ type: 'watermark', key: 'watermark', text: 'G6: Graph Visualization' }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      type: 'watermark',\n      width: 200,\n      height: 100,\n      opacity: 0.2,\n      rotate: Math.PI / 12,\n      text: 'G6: Graph Visualization',\n    };\n    const optionFolder = gui.addFolder('Watermark Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'width', 1, 1280, 1);\n    optionFolder.add(options, 'height', 1, 800, 1);\n    optionFolder.add(options, 'opacity', 0, 1, 0.1);\n    optionFolder.add(options, 'rotate', 0, 2 * Math.PI, Math.PI / 12);\n    optionFolder.add(options, 'text');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'watermark',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:1},{value:"string",paraId:2,tocIndex:1},{value:"\u63D2\u4EF6 key\uFF0C\u5373\u552F\u4E00\u6807\u8BC6",paraId:3,tocIndex:1},{value:" \u7528\u4E8E\u6807\u8BC6\u63D2\u4EF6\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u64CD\u4F5C\u6B64\u63D2\u4EF6",paraId:4,tocIndex:1},{value:"// Get plugin instance\r\nconst plugin = graph.getPluginInstance('key');\r\n// Update plugin options\r\ngraph.updatePlugin({key: 'key', ...});\n",paraId:5,tocIndex:1},{value:"Required",paraId:6,tocIndex:1},{value:"string",paraId:7,tocIndex:2},{value:"\u63D2\u4EF6\u7C7B\u578B",paraId:8,tocIndex:2},{value:"string",paraId:9,tocIndex:3},{value:"\u6C34\u5370\u7684\u80CC\u666F\u5B9A\u4F4D\u884C\u4E3A",paraId:10,tocIndex:3},{value:"string",paraId:11,tocIndex:4},{value:"\u6C34\u5370\u7684\u80CC\u666F\u6DF7\u5408",paraId:12,tocIndex:4},{value:"string",paraId:13,tocIndex:5},{value:"\u6C34\u5370\u7684\u80CC\u666F\u88C1\u526A",paraId:14,tocIndex:5},{value:"string",paraId:15,tocIndex:6},{value:"\u6C34\u5370\u7684\u80CC\u666F\u989C\u8272",paraId:16,tocIndex:6},{value:"string",paraId:17,tocIndex:7},{value:"\u6C34\u5370\u7684\u80CC\u666F\u56FE\u7247",paraId:18,tocIndex:7},{value:"string",paraId:19,tocIndex:8},{value:"\u6C34\u5370\u7684\u80CC\u666F\u539F\u70B9",paraId:20,tocIndex:8},{value:"string",paraId:21,tocIndex:9},{value:"\u6C34\u5370\u7684\u80CC\u666F\u4F4D\u7F6E",paraId:22,tocIndex:9},{value:"string",paraId:23,tocIndex:10},{value:"\u6C34\u5370\u7684\u80CC\u666F\u4F4D\u7F6E-x",paraId:24,tocIndex:10},{value:"string",paraId:25,tocIndex:11},{value:"\u6C34\u5370\u7684\u80CC\u666F\u4F4D\u7F6E-y",paraId:26,tocIndex:11},{value:"string",paraId:27,tocIndex:12},{value:" ",paraId:27,tocIndex:12},{value:"Default:",paraId:27,tocIndex:12},{value:" ",paraId:27,tocIndex:12},{value:"'repeat'",paraId:27,tocIndex:12},{value:"\u6C34\u5370\u7684\u80CC\u666F\u91CD\u590D",paraId:28,tocIndex:12},{value:"string",paraId:29,tocIndex:13},{value:"\u6C34\u5370\u7684\u80CC\u666F\u5927\u5C0F",paraId:30,tocIndex:13},{value:"number",paraId:31,tocIndex:14},{value:" ",paraId:31,tocIndex:14},{value:"Default:",paraId:31,tocIndex:14},{value:" ",paraId:31,tocIndex:14},{value:"100",paraId:31,tocIndex:14},{value:"\u6C34\u5370\u7684\u9AD8\u5EA6\uFF08\u5355\u4E2A\uFF09",paraId:32,tocIndex:14},{value:"string",paraId:33,tocIndex:15},{value:"\u56FE\u7247\u5730\u5740\uFF0C\u5982\u679C\u6709\u503C\uFF0C\u5219\u4F7F\u7528\uFF0C\u5426\u5219\u4F7F\u7528\u6587\u672C",paraId:34,tocIndex:15},{value:"number",paraId:35,tocIndex:16},{value:" ",paraId:35,tocIndex:16},{value:"Default:",paraId:35,tocIndex:16},{value:" ",paraId:35,tocIndex:16},{value:"0.2",paraId:35,tocIndex:16},{value:"\u6C34\u5370\u7684\u900F\u660E\u5EA6",paraId:36,tocIndex:16},{value:"number",paraId:37,tocIndex:17},{value:" ",paraId:37,tocIndex:17},{value:"Default:",paraId:37,tocIndex:17},{value:" ",paraId:37,tocIndex:17},{value:"Math.PI / 12",paraId:37,tocIndex:17},{value:"\u6C34\u5370\u7684\u65CB\u8F6C\u89D2\u5EA6",paraId:38,tocIndex:17},{value:"string",paraId:39,tocIndex:18},{value:"\u6C34\u5370\u6587\u672C",paraId:40,tocIndex:18},{value:"'center' | 'end' | 'left' | 'right' | 'start'",paraId:41,tocIndex:19},{value:" ",paraId:41,tocIndex:19},{value:"Default:",paraId:41,tocIndex:19},{value:" ",paraId:41,tocIndex:19},{value:"'center'",paraId:41,tocIndex:19},{value:"\u6587\u672C\u6C34\u5370\u7684\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F",paraId:42,tocIndex:19},{value:"'alphabetic' | 'bottom' | 'hanging' | 'ideographic' | 'middle' | 'top'",paraId:43,tocIndex:20},{value:" ",paraId:43,tocIndex:20},{value:"Default:",paraId:43,tocIndex:20},{value:" ",paraId:43,tocIndex:20},{value:"'middle'",paraId:43,tocIndex:20},{value:"\u6587\u672C\u6C34\u5370\u7684\u6587\u672C\u5BF9\u9F50\u57FA\u7EBF",paraId:44,tocIndex:20},{value:"string",paraId:45,tocIndex:21},{value:" ",paraId:45,tocIndex:21},{value:"Default:",paraId:45,tocIndex:21},{value:" ",paraId:45,tocIndex:21},{value:"'#000'",paraId:45,tocIndex:21},{value:"\u6587\u672C\u6C34\u5370\u7684\u6587\u5B57\u989C\u8272",paraId:46,tocIndex:21},{value:"string",paraId:47,tocIndex:22},{value:"\u6587\u672C\u6C34\u5370\u7684\u6587\u672C\u5B57\u4F53",paraId:48,tocIndex:22},{value:"number",paraId:49,tocIndex:23},{value:" ",paraId:49,tocIndex:23},{value:"Default:",paraId:49,tocIndex:23},{value:" ",paraId:49,tocIndex:23},{value:"16",paraId:49,tocIndex:23},{value:"\u6587\u672C\u6C34\u5370\u7684\u6587\u672C\u5927\u5C0F",paraId:50,tocIndex:23},{value:"string",paraId:51,tocIndex:24},{value:"\u6587\u672C\u6C34\u5370\u7684\u6587\u672C\u5B57\u4F53\u53D8\u4F53",paraId:52,tocIndex:24},{value:"string",paraId:53,tocIndex:25},{value:"\u6587\u672C\u6C34\u5370\u7684\u6587\u672C\u5B57\u4F53\u7C97\u7EC6",paraId:54,tocIndex:25},{value:"number",paraId:55,tocIndex:26},{value:" ",paraId:55,tocIndex:26},{value:"Default:",paraId:55,tocIndex:26},{value:" ",paraId:55,tocIndex:26},{value:"200",paraId:55,tocIndex:26},{value:"\u6C34\u5370\u7684\u5BBD\u5EA6\uFF08\u5355\u4E2A\uFF09",paraId:56,tocIndex:26},{value:" \u9500\u6BC1\u6C34\u5370",paraId:57,tocIndex:28},{value:"destroy(): void;\n",paraId:58,tocIndex:28}];}}]);
//# sourceMappingURL=a71cfe27-async.94043bcc.js.map