(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["a3285831"],{a3285831:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}});var o=t("29285da3"),r=t("78b3ac91"),a=t("d1b651fe"),s=function(){var e=(0,o.useParams)().id,n=(0,o.useDemo)(e),t=(0,a.useRenderer)({id:e,component:n.component,renderOpts:n.renderOpts}).canvasRef,s=n||{},u=s.component,i=s.renderOpts,d=(0,o.useLiveDemo)(e),l=d.node,f=d.setSource,c=d.error,m=d.loading,v=l||(null!=i&&i.renderer?(0,r.createElement)("div",{ref:t}):u&&(0,r.createElement)(u));return(0,r.useEffect)(function(){var e=function(e){"dumi.liveDemo.setSource"===e.data.type&&f(e.data.value);};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e);};},[f]),(0,r.useEffect)(function(){!m&&(c||l)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:c}});},[c,l,m]),v;};}}]);
//# sourceMappingURL=a3285831-async.c8a108c9.js.map