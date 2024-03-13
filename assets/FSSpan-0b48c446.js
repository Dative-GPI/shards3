import{g as o,j as l,I as u,O as p,P as f,x as i,L as d,M as m}from"./vue.esm-bundler-72feb788.js";import{u as c}from"./useSlots-a83038d8.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const r=o({name:"FSSpan",props:{label:{type:[String,null,void 0],required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0}},setup(e){const{slots:s}=c(),t=l(()=>{const a=["fs-span",e.font];return s.default||a.push("fs-span-pre-wrap"),e.lineClamp>1?a.push("fs-span-line-clamp"):e.ellipsis&&a.push("fs-span-ellipsis"),a}),n=l(()=>({"--fs-span-line-clamp":e.lineClamp.toString()}));return{classes:t,style:n}}});function S(e,s,t,n,a,h){return u(),p("span",i({class:e.classes,style:e.style},e.$attrs),[f(e.$slots,"default",{},()=>[d(m(e.$props.label),1)])],16)}const _=y(r,[["render",S]]);r.__docgenInfo={displayName:"FSSpan",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string|null|undefined"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSpan.vue"]};export{_};
