"use strict";(self.webpackChunk_jupyterlite_pyodide_kernel_extension=self.webpackChunk_jupyterlite_pyodide_kernel_extension||[]).push([[154],{260:(e,n,t)=>{t.r(n),t.d(n,{KERNEL_SETTINGS_SCHEMA:()=>a,default:()=>p});var l=t(568),i=t(432),s=t(880),o=t(944);const r=t.p+"schema/kernel.v0.schema.json";var a=t.t(r);const d=`data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?>\n<svg width="182" height="182" data-name="Layer 1" version="1.1" viewBox="0 0 182 182" xmlns="http://www.w3.org/2000/svg">\n <defs>\n  <style>.cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: #654ff0;\n      }</style>\n </defs>\n <rect width="182" height="182" fill="#fff" stop-color="#000000" style="paint-order:stroke fill markers"/>\n <rect class="cls-1" x="107" y="125" width="50" height="32"/>\n <path class="cls-2" d="m135.18 97c0-0.13-0.01-7.24-0.02-7.37h27.51v71.33h-71.34v-71.33h27.51c0 0.13-0.02 7.24-0.02 7.37m32.59 56.33h4.9l-7.43-25.25h-7.45l-6.12 25.25h4.75l1.24-5.62h8.49l1.61 5.62zm-26.03 0h4.69l6.02-25.25h-4.63l-3.69 17.4h-0.06l-3.5-17.4h-4.42l-3.9 17.19h-0.06l-3.23-17.19h-4.72l5.44 25.25h4.78l3.75-17.19h0.06zm18.89-19.03h1.99l2.37 9.27h-6.42z"/>\n <path d="m89 49.66c0 10.6-8.8 20-20 20h-40v20h-10v-70h50c10.7 0 19.7 8.9 20 20zm-10-10c0-5.5-4.5-10-10-10h-40v30h40c5.5 0 10-4.5 10-10z"/>\n <path d="m132 67.66v22h-10v-22l-30-33v-15h10v10.9l25 27.5 25-27.5v-10.9h10v15z"/>\n</svg>\n')}`,h="@jupyterlite/pyodide-kernel-extension:kernel",p=[{id:h,autoStart:!0,requires:[s.IKernelSpecs],optional:[i.IServiceWorkerManager,o.IBroadcastChannelWrapper],activate:(e,n,i,s)=>{const o=e.serviceManager.contents,r=JSON.parse(l.PageConfig.getOption("litePluginSettings")||"{}")[h]||{},a=l.PageConfig.getBaseUrl(),p=r.pyodideUrl||"https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js",c=l.URLExt.parse(p).href,y=r.pipliteWheelUrl?l.URLExt.parse(r.pipliteWheelUrl).href:void 0,v=(r.pipliteUrls||[]).map((e=>l.URLExt.parse(e).href)),g=!!r.disablePyPIFallback,f=r.loadPyodideOptions||{};for(const[e,n]of Object.entries(f))e.endsWith("URL")&&"string"==typeof n&&(f[e]=new URL(n,a).href);n.register({spec:{name:"python",display_name:"Python (Pyodide)",language:"python",argv:[],resources:{"logo-32x32":d,"logo-64x64":d}},create:async e=>{const{PyodideKernel:n}=await t.e(796).then(t.t.bind(t,796,23)),l=!!((null==i?void 0:i.enabled)&&(null==s?void 0:s.enabled)||crossOriginIsolated);return l?console.info("Pyodide contents will be synced with Jupyter Contents"):console.warn("Pyodide contents will NOT be synced with Jupyter Contents"),new n({...e,pyodideUrl:c,pipliteWheelUrl:y,pipliteUrls:v,disablePyPIFallback:g,mountDrive:l,loadPyodideOptions:f,contentsManager:o})}})}}]}}]);
//# sourceMappingURL=154.6525caf78954a406fed0.js.map?v=6525caf78954a406fed0