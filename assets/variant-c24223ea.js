import{e as o,m,B as s,F as g,n as u}from"./vue.esm-bundler-cada065a.js";import{p as i,g as c}from"./theme-077d21c3.js";import{a as f}from"./color-cac3f8b2.js";const C=i({border:[Boolean,Number,String]},"border");function $(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();return{borderClasses:o(()=>{const r=m(e)?e.value:e.border,t=[];if(r===!0||r==="")t.push(`${a}--border`);else if(typeof r=="string"||r===0)for(const n of String(r).split(" "))t.push(`border-${n}`);return t})}}const v=["elevated","flat","tonal","outlined","text","plain"];function k(e,a){return s(g,null,[e&&s("span",{key:"overlay",class:`${a}__overlay`},null),s("span",{key:"underlay",class:`${a}__underlay`},null)])}const S=i({color:String,variant:{type:String,default:"elevated",validator:e=>v.includes(e)}},"variant");function h(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();const l=o(()=>{const{variant:n}=u(e);return`${a}--variant-${n}`}),{colorClasses:r,colorStyles:t}=f(o(()=>{const{variant:n,color:d}=u(e);return{[["elevated","flat"].includes(n)?"background":"text"]:d}}));return{colorClasses:r,colorStyles:t,variantClasses:l}}export{S as a,h as b,k as g,C as m,$ as u};
