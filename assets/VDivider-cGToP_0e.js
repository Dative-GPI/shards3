import{c as u,l as C,t as g,P as o}from"./vue.esm-bundler-Zcuj-zyO.js";import{d as h,i as s,a as m,p as f,g as b,b as x,m as k,c as y,e as S,f as _,u as V,h as n}from"./theme-_1Jj2Z8J.js";function P(e){return h(()=>{const i=[],t={};if(e.value.background)if(s(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&m(e.value.background)){const r=f(e.value.background);if(r.a==null||r.a===1){const l=b(r);t.color=l,t.caretColor=l}}}else i.push(`bg-${e.value.background}`);return e.value.text&&(s(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):i.push(`text-${e.value.text}`)),{colorClasses:i,colorStyles:t}})}function T(e,i){const t=u(()=>({text:C(e)?e.value:null})),{colorClasses:r,colorStyles:l}=P(t);return{textColorClasses:r,textColorStyles:l}}const w=x({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...k(),...y()},"VDivider"),R=S()({name:"VDivider",props:w(),setup(e,i){let{attrs:t,slots:r}=i;const{themeClasses:l}=_(e),{textColorClasses:c,textColorStyles:v}=T(g(e,"color")),d=u(()=>{const a={};return e.length&&(a[e.vertical?"height":"width"]=n(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=n(e.thickness)),a});return V(()=>{const a=o("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,c.value,e.class],style:[d.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return r.default?o("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[a,o("div",{class:"v-divider__content"},[r.default()]),a]):a}),{}}});export{R as V};
