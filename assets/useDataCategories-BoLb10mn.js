var s=Object.defineProperty;var c=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var o=(t,e,a)=>c(t,typeof e!="symbol"?e+"":e,a);import{C as i}from"./base-Cf5ASDDk.js";import{S as l}from"./serviceFactory-Bd5jifNi.js";import{C as n}from"./composableFactory-B0937_6N.js";class d{constructor(e){o(this,"id");o(this,"modelId");o(this,"code");o(this,"label");o(this,"correlated");this.id=e.id,this.modelId=e.modelId,this.code=e.code,this.label=e.label,this.correlated=e.correlated}}class C extends d{constructor(e){super(e)}}const r=()=>`${i()}/data-categories`,g=t=>`${r()}/${encodeURIComponent(t)}`,m=new l("dataCategory",C).create(t=>t.build(t.addGet(g),t.addGetMany(r,d),t.addNotify())),A=n.getMany(m);export{A as u};
