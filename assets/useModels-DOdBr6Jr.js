var s=Object.defineProperty;var i=(t,e,c)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[e]=c;var o=(t,e,c)=>i(t,typeof e!="symbol"?e+"":e,c);import{C as r}from"./base-LOOo-Z1R.js";import{S as u}from"./serviceFactory-DAEdCiSt.js";import{C as d}from"./composableFactory-CNptecSH.js";class a{constructor(e){o(this,"id");o(this,"manufacturerId");o(this,"manufacturerLabel");o(this,"imageId");o(this,"code");o(this,"label");o(this,"connectable");this.id=e.id,this.manufacturerId=e.manufacturerId,this.manufacturerLabel=e.manufacturerLabel,this.imageId=e.imageId,this.code=e.code,this.label=e.label,this.connectable=e.connectable}}class m extends a{constructor(e){super(e)}}const n=()=>`${r()}/models`,b=t=>`${n()}/${encodeURIComponent(t)}`,l=new u("model",m).create(t=>t.build(t.addGet(b),t.addGetMany(n,a),t.addNotify()));d.get(l);const h=d.getMany(l);export{h as u};
