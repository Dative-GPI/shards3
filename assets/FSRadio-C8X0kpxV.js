import{d as O,c as t,N as i,m as C,z as f,A as m,C as l,M as v,P as r,D as c,E as p,J as S,K as B,L as _,H as q}from"./vue.esm-bundler-D3ngFwGY.js";import{F as $}from"./FSIcon-C0akNC9K.js";import{_ as y}from"./FSSpan-BETzK1-3.js";import{F as h}from"./FSCol-CVj0zcU5.js";import{_ as k}from"./FSRow-CYD73_tT.js";import{u as z}from"./useRules-BmSxRe3B.js";import{u as E,C as n}from"./useColors-B-331F-F.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as T,m as A}from"./VSelectionControl-BGnnbZZk.js";import{g as D,u as M}from"./color-D4nM6Ihv.js";import{p as j}from"./theme-DFFIkVWm.js";const F=O({name:"FSRadio",components:{FSIcon:$,FSSpan:y,FSCol:h,FSRow:k},props:{item:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:n.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:s,getMessages:g}=z(),{getColors:o}=E(),u=t(()=>o(e.color)),R=o(n.Error),b=o(n.Light),d=o(n.Dark),P=t(()=>e.editable?V.value.length?{"--fs-radio-cursor":"pointer","--fs-radio-radio-color":R.base,"--fs-radio-color":d.base}:{"--fs-radio-cursor":e.selected?"default":"pointer","--fs-radio-radio-color":e.selected?u.value.base:d.base,"--fs-radio-color":d.base}:{"--fs-radio-cursor":"default","--fs-radio-radio-color":e.selected?u.value.light:b.base,"--fs-radio-color":b.dark}),w=t(()=>e.selected?"mdi-radiobox-marked":"mdi-radiobox-blank"),N=t(()=>e.selected?"text-button":"text-body"),V=t(()=>e.messages??g(e.modelValue,e.rules));return{validateOn:s,messages:V,style:P,icon:w,font:N,onToggle:()=>{e.editable&&(e.selected||a("update:modelValue",e.modelValue))}}}}),L=j({...A({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),H=D()({name:"VRadio",props:L(),setup(e,a){let{slots:s}=a;return M(()=>i(T,C(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});function J(e,a,s,g,o,u){return f(),m(h,{width:"hug"},{default:l(()=>[i(H,C({"hide-details":"",ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.selected,onClick:a[0]||(a[0]=v(()=>{},["prevent","stop"]))},e.$attrs),{input:l(()=>[i(k,{class:"fs-radio-label",align:"center-left",width:"hug",style:r(e.style),onClick:v(e.onToggle,["prevent","stop"])},{default:l(()=>[i($,{class:"fs-radio",size:"l",style:r(e.style)},{default:l(()=>[c(p(e.icon),1)]),_:1},8,["style"]),S(e.$slots,"label",B(_({item:e.$props.item,font:e.font})),()=>[e.$props.label?(f(),m(y,{key:0,style:r(e.style),font:e.font},{default:l(()=>[c(p(e.$props.label),1)]),_:1},8,["style","font"])):q("",!0)])]),_:3},8,["style","onClick"])]),_:3},16,["rules","validateOn","modelValue"]),S(e.$slots,"description",{},()=>[e.$props.description?(f(),m(y,{key:0,class:"fs-radio-description",font:"text-overline",style:r(e.style)},{default:l(()=>[c(p(e.$props.description),1)]),_:1},8,["style"])):q("",!0)])]),_:3})}const oe=I(F,[["render",J]]);F.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"item",type:{name:"object | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"font",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};export{oe as _};