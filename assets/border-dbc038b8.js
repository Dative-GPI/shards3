import{z as s,F as m,j as o,u,v as g}from"./vue.esm-bundler-85c2ade9.js";import{a as f}from"./color-680672dd.js";import{p as i,g as c}from"./theme-0475544b.js";const v=["elevated","flat","tonal","outlined","text","plain"];function C(e,a){return s(m,null,[e&&s("span",{key:"overlay",class:`${a}__overlay`},null),s("span",{key:"underlay",class:`${a}__underlay`},null)])}const $=i({color:String,variant:{type:String,default:"elevated",validator:e=>v.includes(e)}},"variant");function k(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();const l=o(()=>{const{variant:n}=u(e);return`${a}--variant-${n}`}),{colorClasses:r,colorStyles:t}=f(o(()=>{const{variant:n,color:d}=u(e);return{[["elevated","flat"].includes(n)?"background":"text"]:d}}));return{colorClasses:r,colorStyles:t,variantClasses:l}}const S=i({border:[Boolean,Number,String]},"border");function h(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();return{borderClasses:o(()=>{const r=g(e)?e.value:e.border,t=[];if(r===!0||r==="")t.push(`${a}--border`);else if(typeof r=="string"||r===0)for(const n of String(r).split(" "))t.push(`border-${n}`);return t})}}export{$ as a,k as b,C as g,S as m,h as u};
