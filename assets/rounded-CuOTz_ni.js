import{c as r,k as u}from"./vue.esm-bundler-DUki7rNA.js";import{p as a,g as l}from"./theme-BdipdDNo.js";const c=a({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function g(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l();return{roundedClasses:r(()=>{const n=u(e)?e.value:e.rounded,o=u(e)?e.value:e.tile,t=[];if(n===!0||n==="")t.push(`${s}--rounded`);else if(typeof n=="string"||n===0)for(const d of String(n).split(" "))t.push(`rounded-${d}`);else o&&t.push("rounded-0");return t})}}export{c as m,g as u};
