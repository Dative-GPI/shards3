import{b as f,c as r,d as h,y as g,z as c,A as I,m as p}from"./vue.esm-bundler-BSyvBTC9.js";import{F as v,u as y,I as b,a as w}from"./FSImageUI-bFp2ltzX.js";import{s as t,v as d}from"./css-DLfrm0pR.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const o=f(void 0),A=()=>{const e=n=>{o.value=n},a=r(()=>o.value!==null);return{authToken:o,ready:a,setAppAuthToken:e}},m=h({name:"FSImage",components:{FSImageUI:v},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:Number,required:!1,default:1},thumbnail:{type:Boolean,required:!1,default:!1}},setup(e){const{get:a,entity:n}=y(),{authToken:u}=A(),l=r(()=>e.thumbnail?e.imageId?b(e.imageId,u.value):null:e.imageId?w(e.imageId,u.value):null),s=r(()=>{if(e.height)return t(e.height);if(e.width)return typeof e.width=="string"?void 0:e.aspectRatio?t(d(e.width)/e.aspectRatio):t(e.width)}),i=r(()=>{if(e.width)return t(e.width);if(e.height)return typeof e.height=="string"?void 0:e.aspectRatio?t(d(e.height)*e.aspectRatio):t(e.height)});return{computedHeight:s,computedWidth:i,source:l,image:n,onError:()=>{e.imageId&&a(e.imageId)}}}});function S(e,a,n,u,l,s){const i=g("FSImageUI");return c(),I(i,p({height:e.$props.height||e.computedHeight,width:e.$props.width||e.computedWidth,aspectRatio:e.$props.aspectRatio,blurHash:e.image,source:e.source,onError:e.onError},e.$attrs),null,16,["height","width","aspectRatio","blurHash","source","onError"])}const E=R(m,[["render",S]]);m.__docgenInfo={displayName:"FSImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"thumbnail",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImage.vue"]};export{E as F};
