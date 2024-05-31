import{f as Z,g as r,j as ee,M as a,A as P,J as ae,E as $,F as q,G as w,R,W as x,S as te,K as N,L as T,I as M}from"./vue.esm-bundler-838daa40.js";import{_ as B}from"./FSSpan-3df08200.js";import{_ as O}from"./FSCol-44fe82a9.js";import{_ as U}from"./FSRow-753b58e5.js";import{C as c,u as le}from"./useColors-8c9c4d1e.js";import{u as se}from"./useRules-cda8e231.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{a as re}from"./index-6fa9bdc1.js";import{V as ne}from"./VDefaultsProvider-a165414e.js";import{m as ue,u as ie,V as D}from"./VInput-5523e371.js";import{m as de,V as E}from"./VSelectionControl-b5e8c167.js";import{u as ce,L as fe}from"./loader-62f4df25.js";import{u as L}from"./proxiedModel-3239cc3c.js";import{V as me}from"./VIcon-281b119b.js";import{V as he}from"./VProgressCircular-95e816d7.js";import{p as pe,I as ve,o as ge,K as Ve}from"./theme-f9f3e2d4.js";import{g as ye,u as we}from"./useRender-f6a4770d.js";const z=Z({name:"FSSwitch",components:{FSSpan:B,FSCol:O,FSRow:U},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:c.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:f}){const{validateOn:m,blurred:t,getMessages:o}=se(),{getColors:l}=le(),h=r(()=>l(e.color)),n=l(c.Background),b=l(c.Error),u=l(c.Light),i=l(c.Dark),p=r(()=>e.editable?v.value.length?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":b.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":i.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?h.value.base:u.dark,"--fs-switch-thumb-color":n.base,"--fs-switch-color":i.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":e.modelValue?h.value.light:u.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":u.dark}),k=r(()=>e.modelValue?"text-button":"text-body"),v=r(()=>e.messages??o(e.modelValue,e.rules));return{validateOn:m,messages:v,blurred:t,style:p,font:k,onToggle:()=>{e.editable&&f("update:modelValue",!e.modelValue)}}}});const be=pe({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ue(),...de()},"VSwitch"),ke=ye()({name:"VSwitch",inheritAttrs:!1,props:be(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,f){let{attrs:m,slots:t}=f;const o=L(e,"indeterminate"),l=L(e,"modelValue"),{loaderClasses:h}=ce(e),{isFocused:n,focus:b,blur:u}=ie(e),i=ee(),p=ve&&window.matchMedia("(forced-colors: active)").matches,k=r(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),v=ge(),I=r(()=>e.id||`switch-${v}`);function K(){o.value&&(o.value=!1)}function W(g){var V,y;g.stopPropagation(),g.preventDefault(),(y=(V=i.value)==null?void 0:V.input)==null||y.click()}return we(()=>{const[g,V]=Ve(m),y=D.filterProps(e),j=E.filterProps(e);return a(D,P({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},h.value,e.class]},g,y,{modelValue:l.value,"onUpdate:modelValue":S=>l.value=S,id:I.value,focused:n.value,style:e.style}),{...t,default:S=>{let{id:G,messagesId:J,isDisabled:H,isReadonly:Q,isValid:A}=S;const C={model:l,isValid:A};return a(E,P({ref:i},j,{modelValue:l.value,"onUpdate:modelValue":[d=>l.value=d,K],id:G.value,"aria-describedby":J.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:H.value,readonly:Q.value,onFocus:b,onBlur:u},V),{...t,default:d=>{let{backgroundColorClasses:F,backgroundColorStyles:s}=d;return a("div",{class:["v-switch__track",p?void 0:F.value],style:s.value,onClick:W},[t["track-true"]&&a("div",{key:"prepend",class:"v-switch__track-true"},[t["track-true"](C)]),t["track-false"]&&a("div",{key:"append",class:"v-switch__track-false"},[t["track-false"](C)])])},input:d=>{let{inputNode:F,icon:s,backgroundColorClasses:X,backgroundColorStyles:Y}=d;return a(ae,null,[F,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading},e.inset||p?void 0:X.value],style:e.inset?void 0:Y.value},[t.thumb?a(ne,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[t.thumb({...C,icon:s})]}):a(re,null,{default:()=>[e.loading?a(fe,{name:"v-switch",active:!0,color:A.value===!1?void 0:k.value},{default:_=>t.loader?t.loader(_):a(he,{active:_.isActive,color:_.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&a(me,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}});function Se(e,f,m,t,o,l){return $(),q(O,{width:"hug"},{default:w(()=>[a(U,{width:"hug",align:"center-left"},{default:w(()=>[a(ke,P({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","rules","validateOn","modelValue","onUpdate:modelValue"]),R(e.$slots,"default",{},()=>[e.$props.label?($(),q(B,{key:0,class:"fs-switch-label",style:x(e.style),font:e.font,onClick:te(e.onToggle,["stop"])},{default:w(()=>[N(T(e.$props.label),1)]),_:1},8,["style","font","onClick"])):M("",!0)])]),_:3}),R(e.$slots,"description",{},()=>[e.$props.description?($(),q(B,{key:0,class:"fs-switch-description",font:"text-underline",style:x(e.style)},{default:w(()=>[N(T(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const Oe=oe(z,[["render",Se]]);z.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};export{Oe as F};
