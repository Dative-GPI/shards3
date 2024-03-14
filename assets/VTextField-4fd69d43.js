import{j as v,d as x,z as n,x as V,A as J,B as K,F as g,C as L,n as p}from"./vue.esm-bundler-0a1af505.js";import{m as Q,f as W,V as X,a as Y}from"./VField-96becc41.js";import{m as Z,u as $,V as b}from"./VInput-4e45c526.js";import{f as ee}from"./forwardRefs-e658ad70.js";import{u as te}from"./proxiedModel-350eff8d.js";import{I as ne}from"./index-411e5c5c.js";import{p as le,j as ae,k as ue}from"./theme-8d83670f.js";import{g as oe,u as ie}from"./useRender-76465e3d.js";const re=["color","file","time","date","datetime-local","week","month"],se=le({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Z(),...Q()},"VTextField"),Ce=oe()({name:"VTextField",directives:{Intersect:ne},inheritAttrs:!1,props:se(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,S){let{attrs:m,emit:y,slots:l}=S;const o=te(e,"modelValue"),{isFocused:r,focus:w,blur:A}=$(e),B=v(()=>typeof e.counterValue=="function"?e.counterValue(o.value):typeof e.counterValue=="number"?e.counterValue:(o.value??"").toString().length),D=v(()=>{if(m.maxlength)return m.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),C=v(()=>["plain","underlined"].includes(e.variant));function R(t,a){var u,i;!e.autofocus||!t||(i=(u=a[0].target)==null?void 0:u.focus)==null||i.call(u)}const k=x(),F=x(),s=x(),T=v(()=>re.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function d(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),r.value||w()}function M(t){y("mousedown:control",t),t.target!==s.value&&(d(),t.preventDefault())}function N(t){d(),y("click:control",t)}function E(t){t.stopPropagation(),d(),p(()=>{o.value=null,ue(e["onClick:clear"],t)})}function j(t){var u;const a=t.target;if(o.value=a.value,(u=e.modelModifiers)!=null&&u.trim&&["text","search","password","tel","url"].includes(e.type)){const i=[a.selectionStart,a.selectionEnd];p(()=>{a.selectionStart=i[0],a.selectionEnd=i[1]})}}return ie(()=>{const t=!!(l.counter||e.counter!==!1&&e.counter!=null),a=!!(t||l.details),[u,i]=ae(m),{modelValue:ce,...z}=b.filterProps(e),O=W(e);return n(b,V({ref:k,modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":C.value},e.class],style:e.style},u,z,{centerAffix:!C.value,focused:r.value}),{...l,default:c=>{let{id:f,isDisabled:h,isDirty:P,isReadonly:U,isValid:q}=c;return n(X,V({ref:F,onMousedown:M,onClick:N,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},O,{id:f.value,active:T.value||P.value,dirty:P.value||e.dirty,disabled:h.value,focused:r.value,error:q.value===!1}),{...l,default:G=>{let{props:{class:I,...H}}=G;const _=J(n("input",V({ref:s,value:o.value,onInput:j,autofocus:e.autofocus,readonly:U.value,disabled:h.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:A},H,i),null),[[K("intersect"),{handler:R},null,{once:!0}]]);return n(g,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?n("div",{class:I,"data-no-activator":""},[l.default(),_]):L(_,{class:I}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:a?c=>{var f;return n(g,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(g,null,[n("span",null,null),n(Y,{active:e.persistentCounter||r.value,value:B.value,max:D.value},l.counter)])])}:void 0})}),ee({},k,F,s)}});export{Ce as V,se as m};
