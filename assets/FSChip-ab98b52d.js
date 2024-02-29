import{E as q,e as l,H as s,I as n,J as t,A as F,L as i,M as u,N as p,K as d,O as f,P as m}from"./vue.esm-bundler-a27e881e.js";import{_ as h}from"./FSIcon-98d9a930.js";import{_ as y}from"./FSSpan-23926a6a.js";import{_ as S}from"./FSRow-e0b07355.js";import{C as g,u as I}from"./useColors-64c3c523.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const k=q({name:"FSChip",components:{FSIcon:h,FSSpan:y,FSRow:S},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:g.Primary},editable:{type:Boolean,required:!1,default:!1}},setup(e){const{getColors:c,getContrasts:b}=I(),o=l(()=>c(e.color)),r=c(g.Background),a=l(()=>{switch(e.variant){case"standard":return o.value;case"full":return b(e.color)}}),$=l(()=>{switch(e.variant){case"standard":return{"--fs-chip-background-color":r.base,"--fs-chip-border-color":o.value.base,"--fs-chip-color":a.value.base,"--fs-chip-hover-background-color":r.base,"--fs-chip-hover-border-color":o.value.base,"--fs-chip-hover-color":a.value.base,"--fs-chip-active-background-color":r.base,"--fs-chip-active-border-color":o.value.dark,"--fs-chip-active-color":a.value.dark};case"full":return{"--fs-chip-background-color":o.value.base,"--fs-chip-border-color":o.value.base,"--fs-chip-color":a.value.light,"--fs-chip-hover-background-color":o.value.base,"--fs-chip-hover-border-color":o.value.base,"--fs-chip-hover-color":a.value.light,"--fs-chip-active-background-color":o.value.dark,"--fs-chip-active-border-color":o.value.dark,"--fs-chip-active-color":a.value.light}}}),C=l(()=>{const v=["fs-chip"];return e.editable&&v.push("fs-chip-editable"),v});return{colors:o,style:$,classes:C}}});function V(e,c,b,o,r,a){return s(),n(S,F({width:"hug",align:"center-left",class:e.classes,style:e.style,wrap:!1},e.$attrs),{default:t(()=>[i(e.$slots,"prepend",f(m({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon?(s(),n(h,{key:0,size:"s"},{default:t(()=>[u(p(e.$props.prependIcon),1)]),_:1})):d("",!0)]),i(e.$slots,"default",f(m({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(s(),n(y,{key:0,font:"text-overline",class:"fs-chip-label"},{default:t(()=>[u(p(e.$props.label),1)]),_:1})):d("",!0)]),i(e.$slots,"append",f(m({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(s(),n(h,{key:0,size:"s"},{default:t(()=>[u(p(e.$props.appendIcon),1)]),_:1})):d("",!0)])]),_:3},16,["class","style"])}const R=w(k,[["render",V]]);k.__docgenInfo={displayName:"FSChip",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSChip.vue"]};export{R as F};
