import{j as n,p as H,G as J,E as u,z as d,s as w,d as K,x as D,A as O,B as Q,F as W,f as X,n as Y}from"./vue.esm-bundler-85c2ade9.js";import{m as R,g as U,p as Z,u as _}from"./useRender-22e01882.js";import{m as p,u as ee}from"./density-1bef1032.js";import{I as T}from"./tag-fd98b684.js";import{u as j}from"./locale-cdd955a4.js";import{p as h,o as le,v as te,q as E,j as oe,w as I,J as ae}from"./theme-0475544b.js";import{u as ne,b as ue}from"./color-680672dd.js";import{R as re}from"./index-91896434.js";import{V as ie}from"./VIcon-96eed797.js";import{a as ce}from"./VInput-9ba9caf6.js";const $=Symbol.for("vuetify:selection-control-group"),q=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:T,trueIcon:T,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:le},...R(),...p(),...te()},"SelectionControlGroup"),se=h({...q({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");U()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:v}=r;const l=j(e,"modelValue"),o=E(),y=n(()=>e.id||`v-selection-control-group-${o}`),c=n(()=>e.name||y.value),t=new Set;return H($,{modelValue:l,forceUpdate:()=>{t.forEach(a=>a())},onForceUpdate:a=>{t.add(a),J(()=>{t.delete(a)})}}),Z({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),_(()=>{var a;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(a=v.default)==null?void 0:a.call(v)])}),{}}});const de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...R(),...q()},"VSelectionControl");function ve(e){const r=X($,void 0),{densityClasses:v}=ee(e),l=j(e,"modelValue"),o=n(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=n(()=>e.falseValue!==void 0?e.falseValue:!1),c=n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=n({get(){const f=r?r.modelValue.value:l.value;return c.value?I(f).some(i=>e.valueComparator(i,o.value)):e.valueComparator(f,o.value)},set(f){if(e.readonly)return;const i=f?o.value:y.value;let m=i;c.value&&(m=f?[...I(l.value),i]:I(l.value).filter(C=>!e.valueComparator(C,o.value))),r?r.modelValue.value=m:l.value=m}}),{textColorClasses:a,textColorStyles:V}=ne(n(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:S}=ue(n(()=>t.value&&!e.error&&!e.disabled?e.color:void 0)),k=n(()=>t.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:v,trueValue:o,falseValue:y,model:t,textColorClasses:a,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:S,icon:k}}const he=U()({name:"VSelectionControl",directives:{Ripple:re},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:v,slots:l}=r;const{group:o,densityClasses:y,icon:c,model:t,textColorClasses:a,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:S,trueValue:k}=ve(e),f=E(),i=w(!1),m=w(!1),C=K(),g=n(()=>e.id||`input-${f}`),x=n(()=>!e.disabled&&!e.readonly);o==null||o.onForceUpdate(()=>{C.value&&(C.value.checked=t.value)});function A(s){x.value&&(i.value=!0,ae(s.target,":focus-visible")!==!1&&(m.value=!0))}function B(){i.value=!1,m.value=!1}function L(s){s.stopPropagation()}function M(s){x.value&&(e.readonly&&o&&Y(()=>o.forceUpdate()),t.value=s.target.checked)}return _(()=>{var P,G;const s=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[N,z]=oe(v),F=d("input",D({ref:C,checked:t.value,disabled:!!e.disabled,id:g.value,onBlur:B,onFocus:A,onInput:M,"aria-disabled":!!e.disabled,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},z),null);return d("div",D({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":i.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},y.value,e.class]},N,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",a.value],style:V.value},[(P=l.default)==null?void 0:P.call(l,{backgroundColorClasses:b,backgroundColorStyles:S}),O(d("div",{class:["v-selection-control__input"]},[((G=l.input)==null?void 0:G.call(l,{model:t,textColorClasses:a,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:S,inputNode:F,icon:c.value,props:{onFocus:A,onBlur:B,id:g.value}}))??d(W,null,[c.value&&d(ie,{key:"icon",icon:c.value},null),F])]),[[Q("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),s&&d(ce,{for:g.value,onClick:L},{default:()=>[s]})])}),{isFocused:i,input:C}}});export{he as V,de as m};
