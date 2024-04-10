import{j as E,e as t,z as d,x as S,K as g,L as v,M as s,V as p,X as q,N as C,O as x,R as $,P}from"./vue.esm-bundler-8d1b7c9b.js";import{_ as I}from"./FSIcon-f1833eba.js";import{_ as F}from"./FSSpan-54104d2b.js";import{_}from"./FSCol-53c64bd8.js";import{_ as A}from"./FSRow-a391dd26.js";import{u as U}from"./useRules-c9867f7f.js";import{C as b,u as j}from"./useColors-fe8562a0.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{m as K,V as B}from"./VCheckboxBtn-7de51bc9.js";import{m as X,u as G,V as w}from"./VInput-e3eb2fdb.js";import{u as H}from"./proxiedModel-5e90dbf3.js";import{p as J,o as Q,s as W,j as Y}from"./theme-82ddebf2.js";import{g as Z,u as ee}from"./useRender-7d329101.js";const N=E({name:"FSCheckbox",components:{FSIcon:I,FSSpan:F,FSCol:_,FSRow:A},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},indeterminate:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:b.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{validateOn:i,blurred:r,getMessages:a}=U(),{getColors:l}=j(),n=t(()=>l(e.color)),k=l(b.Error),c=l(b.Light),u=l(b.Dark),y=t(()=>e.editable?f.value.length?{"--fs-checkbox-cursor":"pointer","--fs-checkbox-checkbox-color":k.base,"--fs-checkbox-color":u.base}:{"--fs-checkbox-cursor":"pointer","--fs-checkbox-checkbox-color":e.modelValue||e.indeterminate?n.value.base:u.base,"--fs-checkbox-color":u.base}:{"--fs-checkbox-cursor":"default","--fs-checkbox-checkbox-color":e.modelValue||e.indeterminate?n.value.light:c.base,"--fs-checkbox-color":c.dark}),h=t(()=>e.modelValue?"mdi-checkbox-marked":e.indeterminate?"mdi-minus-box":"mdi-checkbox-blank-outline"),V=t(()=>e.modelValue?"text-button":"text-body"),f=t(()=>e.messages??a(e.modelValue,e.rules));return{validateOn:i,messages:f,blurred:r,style:y,icon:h,font:V,onToggle:()=>{e.editable&&o("update:modelValue",!e.modelValue)}}}});const oe=J({...X(),...Q(K(),["inline"])},"VCheckbox"),ae=Z()({name:"VCheckbox",inheritAttrs:!1,props:oe(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,o){let{attrs:i,slots:r}=o;const a=H(e,"modelValue"),{isFocused:l,focus:n,blur:k}=G(e),c=W(),u=t(()=>e.id||`checkbox-${c}`);return ee(()=>{const[y,h]=Y(i),V=w.filterProps(e),f=B.filterProps(e);return d(w,S({class:["v-checkbox",e.class]},y,V,{modelValue:a.value,"onUpdate:modelValue":m=>a.value=m,id:u.value,focused:l.value,style:e.style}),{...r,default:m=>{let{id:R,messagesId:O,isDisabled:M,isReadonly:T,isValid:z}=m;return d(B,S(f,{id:R.value,"aria-describedby":O.value,disabled:M.value,readonly:T.value},h,{error:z.value===!1,modelValue:a.value,"onUpdate:modelValue":D=>a.value=D,onFocus:n,onBlur:k}),r)}})}),{}}});function le(e,o,i,r,a,l){return g(),v(_,{width:"hug"},{default:s(()=>[d(ae,S({"hide-details":"",ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,onClick:o[0]||(o[0]=q(()=>{},["prevent"])),onBlur:o[1]||(o[1]=n=>e.blurred=!0)},e.$attrs),{input:s(()=>[d(A,{align:"center-left",width:"hug",style:p(e.style),onClick:q(e.onToggle,["stop"])},{default:s(()=>[d(I,{class:"fs-checkbox",size:"l",style:p(e.style)},{default:s(()=>[C(x(e.icon),1)]),_:1},8,["style"]),$(e.$slots,"default",{},()=>[e.$props.label?(g(),v(F,{key:0,class:"fs-checkbox-label",style:p(e.style),font:e.font},{default:s(()=>[C(x(e.$props.label),1)]),_:1},8,["style","font"])):P("",!0)])]),_:3},8,["style","onClick"])]),_:3},16,["rules","validateOn","modelValue"]),$(e.$slots,"description",{},()=>[e.$props.description?(g(),v(F,{key:0,class:"fs-checkbox-description",font:"text-underline",style:p(e.style)},{default:s(()=>[C(x(e.$props.description),1)]),_:1},8,["style"])):P("",!0)])]),_:3})}const ye=L(N,[["render",le]]);N.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"indeterminate",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};export{ye as F};
