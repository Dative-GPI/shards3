var n=Object.defineProperty;var a=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var s=(e,t,o)=>a(e,typeof t!="symbol"?t+"":t,o);import{G as i}from"./base-CmdGny12.js";import{S as c}from"./serviceFactory-DTTRhbEw.js";import{C as h}from"./composableFactory-BC5Ev-17.js";class m{constructor(t){s(this,"blurHash");s(this,"width");s(this,"height");this.blurHash=t.blurHash,this.width=t.width,this.height=t.height}}class u extends m{constructor(t){super(t)}}const I=()=>`${i()}/images`,r=e=>`${I()}/${encodeURIComponent(e)}`,_=(e,t)=>{let o=`${r(e)}/raw`;return t&&(o+=`?access_token=${encodeURIComponent(t)}`),o},A=(e,t)=>{let o=`${r(e)}/thumbnail`;return t&&(o+=`?access_token=${encodeURIComponent(t)}`),o},l=new c("image",u).create(e=>e.build(e.addGet(r),e.addNotify())),p=h.get(l);export{A as I,_ as a,p as u};
