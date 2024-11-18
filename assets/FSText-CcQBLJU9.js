import{d as f,c as t,z as i,G as d,J as p,D as m,E as c,m as y}from"./vue.esm-bundler-D3ngFwGY.js";import{u as g}from"./useBreakpoints-DbdoA89o.js";import{u as h,C as v}from"./useColors-B-331F-F.js";import{u as x}from"./useSlots-BM37IFiq.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=f({name:"FSText",props:{label:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:v.Dark},variant:{type:String,required:!1,default:"base"}},setup(e){const{fontStyles:s}=g(),{getColors:l}=h(),{slots:n}=x(),r=t(()=>l(e.color)),o=t(()=>({"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-text-color":r.value[e.variant],...s.value}));return{classes:t(()=>{const a=["fs-text",e.font];return n.default||a.push("fs-span-pre-wrap"),e.lineClamp>1?a.push("fs-span-line-clamp"):e.ellipsis&&a.push("fs-span-ellipsis"),a}),style:o}}});function b(e,s,l,n,r,o){return i(),d("span",y({class:e.classes,style:e.style},e.$attrs),[p(e.$slots,"default",{},()=>[m(c(e.$props.label),1)])],16)}const _=C(u,[["render",b]]);u.__docgenInfo={displayName:"FSText",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-h4","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"variant",values:["base","baseContrast","light","lightContrast","dark","darkContrast","soft","softContrast"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"base"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSText.vue"]};export{_ as F};