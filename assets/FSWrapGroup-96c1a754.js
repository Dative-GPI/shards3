import{D as m,d as i,G as s,H as n,I as u,R as c,V as f,F as g,z as y,n as S}from"./vue.esm-bundler-47273a21.js";import{u as _,C}from"./useColors-446eeb5a.js";import{u as G}from"./FSSpan-6a5d69b6.js";import"./rules-f5c4efdb.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{a as k,V}from"./VSlideGroup-f4a13555.js";import{m as v,u as F}from"./group-0f5e58b6.js";import{g as I}from"./color-38d974b0.js";const $=I()({name:"VSlideGroupItem",props:v(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:r}=a;const o=F(e,k);return()=>{var t;return(t=r.default)==null?void 0:t.call(r,{isSelected:o.isSelected.value,select:o.select,toggle:o.toggle,selectedClass:o.selectedClass.value})}}}),p=m({name:"FSWrapGroup",props:{padding:{type:[String,Number],required:!1,default:0},gap:{type:Number,required:!1,default:8}},setup(e){const{getChildren:a}=G(),r=_().getColors(C.Dark);return{style:i(()=>({"--fs-group-padding":typeof e.padding=="string"?e.padding:`${e.padding}px`,"--fs-group-gap":`${e.gap}px`,"--fs-group-color":r.light,"--fs-group-hover-color":r.dark})),getChildren:a}}});function b(e,a,r,o,t,q){return s(),n(V,y({class:"fs-wrap-group",style:e.style},e.$attrs),{default:u(()=>[(s(!0),c(g,null,f(e.getChildren(),(l,d)=>(s(),n($,{key:d},{default:u(()=>[(s(),n(S(l)))]),_:2},1024))),128))]),_:1},16,["style"])}const z=h(p,[["render",b]]);p.__docgenInfo={displayName:"FSWrapGroup",exportName:"default",description:"",tags:{},props:[{name:"padding",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"gap",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"8"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWrapGroup.vue"]};export{$ as V,z as _};
