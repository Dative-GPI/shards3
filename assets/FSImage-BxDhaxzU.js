import{b as i,c as t,d,y as c,z as f,A as g,m as I}from"./vue.esm-bundler-BSyvBTC9.js";import{F as p}from"./FSImageUI-C0XOuHIu.js";import{u as h,I as _,a as F}from"./useImages-BaeRdzQ-.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r=i(void 0),A=()=>{const e=n=>{r.value=n},a=t(()=>r.value!==null);return{authToken:r,ready:a,setAppAuthToken:e}},s=d({name:"FSImage",components:{FSImageUI:p},props:{imageId:{type:String,required:!1,default:null},thumbnail:{type:Boolean,required:!1,default:!1}},setup(e){const{get:a,entity:n}=h(),{authToken:o}=A();return{source:t(()=>e.thumbnail?e.imageId?_(e.imageId,o.value):null:e.imageId?F(e.imageId,o.value):null),image:n,onError:()=>{e.imageId&&a(e.imageId)}}}});function y(e,a,n,o,u,m){const l=c("FSImageUI");return f(),g(l,I({blurHash:e.image,source:e.source,onError:e.onError},e.$attrs),null,16,["blurHash","source","onError"])}const U=v(s,[["render",y]]);s.__docgenInfo={displayName:"FSImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"thumbnail",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImage.vue"]};export{U as F};
