import{d as g,b as d,c as v,o as y,V as h,z as s,A as u,B as i,m as S,C as b,N as C,k,F as _}from"./vue.esm-bundler--l9E1zCM.js";import{u as w}from"./uuid-DTaye2KM.js";import{u as F}from"./useSlots-sbMHjG0F.js";import{u as G,C as $}from"./useColors-CcOmb8TW.js";import{s as m}from"./css-CqyMbT8T.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q,a as N}from"./FSSlideGroup-DeeIs7LB.js";const f=g({name:"FSWrapGroup",props:{padding:{type:[Array,String,Number],required:!1,default:"0"},gap:{type:[Array,String,Number],required:!1,default:"8px"}},setup(e){const{getChildren:l}=F(),{getColors:p}=G(),a=p($.Dark),n=d(null),r=d(null),o=`id${w()}`,t=v(()=>({"--fs-group-padding":m(e.padding),"--fs-group-gap":m(e.gap),"--fs-group-color":a.soft,"--fs-group-hover-color":a.dark}));return y(()=>{r.value=new ResizeObserver(c=>{c.forEach(()=>{n.value.scrollTo("prev")})}),document.querySelector(`#${o}`)&&r.value.observe(document.querySelector(`#${o}`))}),h(()=>{r.value&&r.value.disconnect()}),{wrapGroupRef:n,elementId:o,style:t,getChildren:l}}});function z(e,l,p,a,n,r){return s(),u(q,S({class:"fs-wrap-group",ref:"wrapGroupRef",showArrows:!1,id:e.elementId,style:e.style},e.$attrs),{default:i(()=>[(s(!0),b(_,null,C(e.getChildren(),(o,t)=>(s(),u(N,{key:t},{default:i(()=>[(s(),u(k(o)))]),_:2},1024))),128))]),_:1},16,["id","style"])}const D=V(f,[["render",z]]);f.__docgenInfo={displayName:"FSWrapGroup",exportName:"default",description:"",tags:{},props:[{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWrapGroup.vue"]};export{D as F};
