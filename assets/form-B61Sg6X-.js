import{u as y}from"./proxiedModel-Bq4wip6p.js";import{c,s as F,b as v,w as M,p as b,t as w,i as B}from"./vue.esm-bundler-BSyvBTC9.js";import{p as E}from"./theme-D4rXHj3O.js";const m=Symbol.for("vuetify:form"),x=E({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function P(r){const n=y(r,"modelValue"),d=c(()=>r.disabled),f=c(()=>r.readonly),o=F(!1),a=v([]),i=v([]);async function g(){const e=[];let s=!0;i.value=[],o.value=!0;for(const t of a.value){const l=await t.validate();if(l.length>0&&(s=!1,e.push({id:t.id,errorMessages:l})),!s&&r.fastFail)break}return i.value=e,o.value=!1,{valid:s,errors:i.value}}function p(){a.value.forEach(e=>e.reset())}function V(){a.value.forEach(e=>e.resetValidation())}return M(a,()=>{let e=0,s=0;const t=[];for(const l of a.value)l.isValid===!1?(s++,t.push({id:l.id,errorMessages:l.errorMessages})):l.isValid===!0&&e++;i.value=t,n.value=s>0?!1:e===a.value.length?!0:null},{deep:!0,flush:"post"}),b(m,{register:e=>{let{id:s,validate:t,reset:l,resetValidation:u}=e;a.value.some(h=>h.id===s),a.value.push({id:s,validate:t,reset:l,resetValidation:u,isValid:null,errorMessages:[]})},unregister:e=>{a.value=a.value.filter(s=>s.id!==e)},update:(e,s,t)=>{const l=a.value.find(u=>u.id===e);l&&(l.isValid=s,l.errorMessages=t)},isDisabled:d,isReadonly:f,isValidating:o,isValid:n,items:a,validateOn:w(r,"validateOn")}),{errors:i,isDisabled:d,isReadonly:f,isValidating:o,isValid:n,items:a,validate:g,reset:p,resetValidation:V}}function S(){return B(m,null)}export{P as c,x as m,S as u};