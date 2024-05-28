import{f as k,j as y,g as T,I as m,J as r,K as n,L as a,B as F,N as g,A as v,M as N,Y as B,v as b,F as V}from"./vue.esm-bundler-cd768bc3.js";import{F as I,a as q}from"./FSButtonNextIcon-c5a49a0d.js";import{F as t}from"./FSButton-ecc11eb7.js";import{u as x}from"./useSlots-2af30a3d.js";import{u as G,C as S}from"./useColors-91ab292c.js";import{s as h}from"./css-c2ea3b68.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as P}from"./VSlideGroup-61bc8bc9.js";import{V as $}from"./FSWrapGroup-8dc071a4.js";const C=k({name:"FSSlideGroup",components:{FSButtonPreviousIcon:I,FSButtonNextIcon:q,FSButton:t},props:{padding:{type:[Array,String,Number],required:!1,default:"0"},gap:{type:[Array,String,Number],required:!1,default:"8px"},dash:{type:Boolean,required:!1,default:!1},speed:{type:Number,required:!1,default:250}},setup(e){const{getChildren:l}=x(),{getColors:u}=G(),s=u(S.Dark),o=y(null),i=T(()=>({"--fs-group-arrows-width":e.dash?"52px":"32px","--fs-group-padding":h(e.padding),"--fs-group-gap":h(e.gap),"--fs-group-color":s.light,"--fs-group-hover-color":s.dark}));return{slideGroupRef:o,ColorEnum:S,style:i,getChildren:l,goToStart:()=>{o.value&&(o.value.scrollTo("prev"),o.value.scrollTo("prev"))},goToPrev:()=>{o.value&&o.value.scrollTo("prev")},goToNext:()=>{o.value&&o.value.scrollTo("next")},goToEnd:()=>{o.value&&(o.value.scrollTo("next"),o.value.scrollTo("next"))}}}});function w(e,l,u,s,o,i){const p=m("FSButtonPreviousIcon"),d=m("FSButtonNextIcon");return r(),n(P,F({class:"fs-slide-group",ref:"slideGroupRef",showArrows:!0,style:e.style},e.$attrs),{prev:a(()=>[e.$props.dash?(r(),n(t,{key:0,icon:"mdi-chevron-double-left",variant:"icon",onClick:e.goToStart},null,8,["onClick"])):g("",!0),v(p,{color:e.ColorEnum.Dark,onClick:e.goToPrev},null,8,["color","onClick"])]),default:a(()=>[(r(!0),N(V,null,B(e.getChildren(),(c,f)=>(r(),n($,{key:f},{default:a(()=>[(r(),n(b(c)))]),_:2},1024))),128))]),next:a(()=>[v(d,{color:e.ColorEnum.Dark,onClick:e.goToNext},null,8,["color","onClick"]),e.$props.dash?(r(),n(t,{key:0,icon:"mdi-chevron-double-right",variant:"icon",onClick:e.goToEnd},null,8,["onClick"])):g("",!0)]),_:1},16,["style"])}const M=E(C,[["render",w]]);C.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"dash",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"speed",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"250"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};export{M as F};
