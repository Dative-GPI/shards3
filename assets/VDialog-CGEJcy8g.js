import{b as P,w as m,n as y,c as D,m as d,N as v}from"./vue.esm-bundler-Ddr6MgcY.js";import{m as h,V as S,u as w,b as g}from"./VOverlay-C5IcMf4o.js";import{f as x}from"./forwardRefs-DWGaNmQL.js";import{u as I}from"./proxiedModel-BYnu2EOK.js";import{V as B}from"./VDefaultsProvider-B6zOjuu3.js";import{p as F,I as R,m as T}from"./theme-D55tBrU4.js";import{g as L,a as N}from"./color-DdAXPAA0.js";const O=F({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...h({origin:"center center",scrollStrategy:"block",transition:{component:S},zIndex:2400})},"VDialog"),j=L()({name:"VDialog",props:O(),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,p){let{slots:c}=p;const n=I(e,"modelValue"),{scopeId:V}=w(),o=P();function i(r){var l,s;const a=r.relatedTarget,t=r.target;if(a!==t&&((l=o.value)!=null&&l.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const u=T(o.value.contentEl);if(!u.length)return;const f=u[0],b=u[u.length-1];a===f?b.focus():f.focus()}}R&&m(()=>n.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),m(n,async r=>{var a,t;await y(),r?(a=o.value.contentEl)==null||a.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const E=D(()=>d({"aria-haspopup":"dialog","aria-expanded":String(n.value)},e.activatorProps));return N(()=>{const r=g.filterProps(e);return v(g,d({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var a=arguments.length,t=new Array(a),l=0;l<a;l++)t[l]=arguments[l];return v(B,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),x({},o)}});export{j as V};
