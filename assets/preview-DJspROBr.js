import{_ as a}from"./iframe-DnrePjw7.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-CRYTJv6W.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-CRYTJv6W.js","./iframe-DnrePjw7.js","./_commonjsHelpers-BosuxZz1.js","./index-DfSX31J9.js","./index-DxbMkmK7.js","./index-S2vhOGJc.js","./tiny-invariant-CCoILDQG.js","./index-CKJfshIT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
