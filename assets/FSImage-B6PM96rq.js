import{d as m,c as l,y as i,z as d,A as f,m as c}from"./vue.esm-bundler-l-siv0w9.js";import{F as g}from"./FSImageUI-DrOfkU7V.js";import{u as I,I as p,a as h}from"./imageDetails-CCk4N_4r.js";import{u as _}from"./useAppAuthToken-CwPnmj0J.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r=m({name:"FSImage",components:{FSImageUI:g},props:{imageId:{type:String,required:!1,default:null},thumbnail:{type:Boolean,required:!1,default:!1}},setup(e){const{get:o,entity:n}=I(),{authToken:a}=_();return{source:l(()=>e.thumbnail?e.imageId?p(e.imageId,a.value):null:e.imageId?h(e.imageId,a.value):null),image:n,onError:()=>{e.imageId&&o(e.imageId)}}}});function S(e,o,n,a,s,t){const u=i("FSImageUI");return d(),f(u,c({blurHash:e.image,source:e.source,onError:e.onError},e.$attrs),null,16,["blurHash","source","onError"])}const U=F(r,[["render",S]]);r.__docgenInfo={displayName:"FSImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"thumbnail",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImage.vue"]};export{U as F};
