"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9597],{98125:(e,t,o)=>{o.r(t),o.d(t,{main:()=>T});var n=o(28845),r=o(25362),s=o(64145),a=(o(11555),o(29486),o(65573),o(94101),o(94395),o(48808),o(18934),o(24017),o(72867),o(91532),o(20603),o(17363),o(9755),o(58169),o(76838),o(53109),o(69226),o(3727),o(22090),o(26053),o(84221),o(87967),o(79589),o(45637),o(16388),o(37609),o(49733),o(74958),o(1892)),i=o.n(a),l=o(95760),p=o.n(l),A=o(38311),c=o.n(A),u=o(58192),h=o.n(u),f=o(38060),y=o.n(f),d=o(54865),b=o.n(d),m=o(12563),x={};x.styleTagTransform=b(),x.setAttributes=h(),x.insert=c().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=y(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals,o(94453);var j=o(59988),g={};g.styleTagTransform=b(),g.setAttributes=h(),g.insert=c().bind(null,"head"),g.domAPI=p(),g.insertStyleElement=y(),i()(j.Z,g),j.Z&&j.Z.locals&&j.Z.locals;var w=o(1555),E={};E.styleTagTransform=b(),E.setAttributes=h(),E.insert=c().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=y(),i()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var v=o(94298),k={};k.styleTagTransform=b(),k.setAttributes=h(),k.insert=c().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=y(),i()(v.Z,k),v.Z&&v.Z.locals&&v.Z.locals;const C=[o.e(7485).then(o.t.bind(o,77485,23))],D=["@jupyterlab/application-extension:dirty","@jupyterlab/application-extension:info","@jupyterlab/application-extension:layout","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:mode-switch","@jupyterlab/application-extension:notfound","@jupyterlab/application-extension:paths","@jupyterlab/application-extension:property-inspector","@jupyterlab/application-extension:shell","@jupyterlab/application-extension:status","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:announcements","@jupyterlab/apputils-extension:kernel-status","@jupyterlab/apputils-extension:palette-restorer","@jupyterlab/apputils-extension:print","@jupyterlab/apputils-extension:resolver","@jupyterlab/apputils-extension:running-sessions-status","@jupyterlab/apputils-extension:splash","@jupyterlab/apputils-extension:workspaces","@jupyterlab/console-extension:kernel-status","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:opener","@jupyterlab/docmanager-extension:path-status","@jupyterlab/docmanager-extension:saving-status","@jupyterlab/documentsearch-extension:labShellWidgetListener","@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/filebrowser-extension:widget","@jupyterlab/fileeditor-extension:editor-syntax-status","@jupyterlab/fileeditor-extension:language-server","@jupyterlab/fileeditor-extension:search","@jupyterlab/help-extension:about","@jupyterlab/help-extension:open","@jupyterlab/notebook-extension:execution-indicator","@jupyterlab/notebook-extension:kernel-status","@jupyter-notebook/application-extension:logo","@jupyter-notebook/application-extension:opener","@jupyter-notebook/application-extension:path-opener","@jupyter-notebook/help-extension:about"];async function S(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}async function T(){const e=[],t=[],a=[],i=[],l=[],p=[],A=JSON.parse(s.PageConfig.getOption("federated_extensions")),c=new Set;function*u(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)s.PageConfig.Extension.isDisabled(e.id)||D.includes(e.id)||D.includes(e.id.split(":")[0])||(yield e)}A.forEach((e=>{e.liteExtension?p.push(S(e.name,e.extension)):(e.extension&&(c.add(e.name),t.push(S(e.name,e.extension))),e.mimeExtension&&(c.add(e.name),a.push(S(e.name,e.mimeExtension))),e.style&&i.push(S(e.name,e.style)))}));const h=[];if(!c.has("@jupyterlab/javascript-extension"))try{let e=o(56357);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if(!c.has("@jupyterlab/json-extension"))try{let e=o(51542);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if(!c.has("@jupyterlab/vega5-extension"))try{let e=o(67025);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if(!c.has("@jupyterlite/iframe-extension"))try{let e=o(9073);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(a)).forEach((e=>{if("fulfilled"===e.status)for(let t of u(e.value))h.push(t);else console.error(e.reason)})),!c.has("@jupyterlab/application-extension"))try{let t=o(76676);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/apputils-extension"))try{let t=o(26219);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/cell-toolbar-extension"))try{let t=o(15083);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/codemirror-extension"))try{let t=o(34900);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/completer-extension"))try{let t=o(44515);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/console-extension"))try{let t=o(12071);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/docmanager-extension"))try{let t=o(60965);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/documentsearch-extension"))try{let t=o(7146);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/filebrowser-extension"))try{let t=o(63327);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/fileeditor-extension"))try{let t=o(46926);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/help-extension"))try{let t=o(22886);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/lsp-extension"))try{let t=o(27862);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/mainmenu-extension"))try{let t=o(80053);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/mathjax-extension"))try{let t=o(77403);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/metadataform-extension"))try{let t=o(63174);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/notebook-extension"))try{let t=o(24126);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/rendermime-extension"))try{let t=o(7290);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/shortcuts-extension"))try{let t=o(7303);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/theme-dark-extension"))try{let t=o(27401);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/theme-dark-high-contrast-extension"))try{let t=o(24196);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/theme-light-extension"))try{let t=o(81223);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/toc-extension"))try{let t=o(15221);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/tooltip-extension"))try{let t=o(23792);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/translation-extension"))try{let t=o(88941);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlab/ui-components-extension"))try{let t=o(93486);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyter-notebook/application-extension"))try{let t=o(25613);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyter-notebook/docmanager-extension"))try{let t=o(46704);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyter-notebook/help-extension"))try{let t=o(37233);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlite/application-extension"))try{let t=o(19263);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!c.has("@jupyterlite/notebook-application-extension"))try{let t=o(16696);for(let o of u(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of u(t.value))e.push(o);else console.error(t.reason)})),(await Promise.all(C)).forEach((e=>{for(let t of u(e))l.push(t)})),(await Promise.allSettled(p)).forEach((e=>{if("fulfilled"===e.status)for(let t of u(e.value))l.push(t);else console.error(e.reason)})),(await Promise.allSettled(i)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const f=new r.JupyterLiteServer({});f.registerPluginModules(l),await f.start();const{serviceManager:y}=f,d=new n.NotebookApp({mimeExtensions:h,serviceManager:y});d.name=s.PageConfig.getOption("appName")||"JupyterLite",d.registerPluginModules(e),"true"===(s.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=d),await d.start(),await d.restored}},12563:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(20559),r=o.n(n),s=o(93476),a=o.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},59988:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(20559),r=o.n(n),s=o(93476),a=o.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const i=a},1555:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(20559),r=o.n(n),s=o(93476),a=o.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/notebook-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},94298:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(20559),r=o.n(n),s=o(93476),a=o.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},7413:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=9597.d798507.js.map