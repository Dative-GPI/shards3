import{j as p,e as f,K as a,L as t,M as u,x as c,Q as w,Y as h,D as _,F as y}from"./vue.esm-bundler-37de1696.js";import{u as g}from"./useSlots-df9def22.js";import{s as v}from"./css-cb27a64f.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{V as S,a as W}from"./VWindowItem-239829bc.js";const i=p({name:"FSWindow",props:{width:{type:[Array,String,Number],required:!1,default:null}},setup(e){const{getChildren:n}=g();return{style:f(()=>({"--fs-window-width":v(e.width)})),getChildren:n,value:(r,o)=>{var s;return((s=r==null?void 0:r.props)==null?void 0:s.value)??o}}}});function C(e,n,l,d,r,o){return a(),t(S,c({class:"fs-window",style:e.style},e.$attrs),{default:u(()=>[(a(!0),w(y,null,h(e.getChildren(),(s,m)=>(a(),t(W,{value:e.value(s,m)},{default:u(()=>[(a(),t(_(s)))]),_:2},1032,["value"]))),256))]),_:1},16,["style"])}const N=F(i,[["render",C]]);i.__docgenInfo={displayName:"FSWindow",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWindow.vue"]};export{N as _};
