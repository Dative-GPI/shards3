import{i as f,a as u,c as p}from"./vue.esm-bundler-D3ngFwGY.js";const l=()=>{const c=f("validateOn",u("input")),r=f("submitted",u(!1)),a=p(()=>{switch(c.value){case"submit":return r.value?"input":"submit";case"input":return"input"}});return{validateOn:a,getMessages:(n,i,g=!1)=>{if(!i||!i.length)return[];switch(a.value){case"submit":if(!r.value)return[];break}const t=[];if(g)if(n&&Array.isArray(n))for(const s of n)for(const e of i){const o=e(s);typeof o=="string"&&t.push(o)}else for(const s of i){const e=s(n??"");typeof e=="string"&&t.push(e)}else for(const s of i){const e=s(n??"");typeof e=="string"&&t.push(e)}for(let s=1;s<t.length;s++)t[s]=t[s].toLowerCase();return[...new Set(t)]}}};export{l as u};
