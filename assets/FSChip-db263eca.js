import{f as q,g as t,E as l,F as s,G as n,x as F,Q as i,K as c,L as u,I as p,R as d,S as f}from"./vue.esm-bundler-a0893183.js";import{_ as b}from"./FSIcon-9d61ed62.js";import{_ as k}from"./FSSpan-4daadeb4.js";import{_ as S}from"./FSRow-821d23a1.js";import{C as h,u as I}from"./useColors-6c375bb5.js";import{s as m}from"./css-03aed76d.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const C=q({name:"FSChip",components:{FSIcon:b,FSSpan:k,FSRow:S},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},height:{type:[Array,String,Number],required:!1,default:()=>[24,20]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:h.Primary},editable:{type:Boolean,required:!1,default:!1}},setup(e){const{getColors:r}=I(),o=t(()=>r(e.color)),a=r(h.Background),g=r(h.Dark),v=t(()=>{switch(e.variant){case"standard":return{"--fs-chip-height":m(e.height),"--fs-chip-background-color":a.base,"--fs-chip-border-color":o.value.base,"--fs-chip-color":o.value.base,"--fs-chip-hover-background-color":a.base,"--fs-chip-hover-border-color":o.value.base,"--fs-chip-hover-color":o.value.base,"--fs-chip-active-background-color":a.base,"--fs-chip-active-border-color":o.value.dark,"--fs-chip-active-color":o.value.dark};case"full":return{"--fs-chip-height":m(e.height),"--fs-chip-background-color":o.value.base,"--fs-chip-border-color":o.value.base,"--fs-chip-color":o.value.baseContrast,"--fs-chip-hover-background-color":o.value.base,"--fs-chip-hover-border-color":o.value.base,"--fs-chip-hover-color":o.value.baseContrast,"--fs-chip-active-background-color":o.value.dark,"--fs-chip-active-border-color":o.value.darkContrast,"--fs-chip-active-color":o.value.darkContrast};case"borderless":return{"--fs-chip-height":m(e.height),"--fs-chip-background-color":a.base,"--fs-chip-border-color":a.base,"--fs-chip-color":g.base,"--fs-chip-hover-background-color":o.value.light,"--fs-chip-hover-border-color":o.value.light,"--fs-chip-hover-color":o.value.base,"--fs-chip-active-background-color":o.value.light,"--fs-chip-active-border-color":o.value.light,"--fs-chip-active-color":o.value.base}}}),$=t(()=>{const y=["fs-chip"];return e.editable&&y.push("fs-chip-editable"),y});return{colors:o,style:v,classes:$}}});function w(e,r,o,a,g,v){return l(),s(S,F({width:"hug",align:"center-left",class:e.classes,style:e.style,wrap:!1},e.$attrs),{default:n(()=>[i(e.$slots,"prepend",d(f({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon?(l(),s(b,{key:0,size:"s"},{default:n(()=>[c(u(e.$props.prependIcon),1)]),_:1})):p("",!0)]),i(e.$slots,"default",d(f({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(l(),s(k,{key:0,font:"text-overline",class:"fs-chip-label"},{default:n(()=>[c(u(e.$props.label),1)]),_:1})):p("",!0)]),i(e.$slots,"append",d(f({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(l(),s(b,{key:0,size:"s"},{default:n(()=>[c(u(e.$props.appendIcon),1)]),_:1})):p("",!0)])]),_:3},16,["class","style"])}const D=V(C,[["render",w]]);C.__docgenInfo={displayName:"FSChip",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [24, 20]"}},{name:"variant",values:["standard","full","borderless"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSChip.vue"]};export{D as F};