import{d as f,c as t,z as i,C as d,I as p,m,E as c,G as y}from"./vue.esm-bundler-BSyvBTC9.js";import{C,u as g}from"./useColors-Ccf8xVyg.js";import{u as h}from"./useSlots-P12pG1X5.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const o=f({name:"FSText",props:{label:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:C.Dark},variant:{type:String,required:!1,default:"base"}},setup(e){const{getColors:s}=g(),{slots:l}=h(),n=t(()=>s(e.color)),r=t(()=>({"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-text-color":n.value[e.variant]}));return{classes:t(()=>{const a=["fs-text",e.font];return l.default||a.push("fs-span-pre-wrap"),e.lineClamp>1?a.push("fs-span-line-clamp"):e.ellipsis&&a.push("fs-span-ellipsis"),a}),style:r}}});function b(e,s,l,n,r,u){return i(),d("span",m({class:e.classes,style:e.style},e.$attrs),[p(e.$slots,"default",{},()=>[c(y(e.$props.label),1)])],16)}const V=x(o,[["render",b]]);o.__docgenInfo={displayName:"FSText",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-h4","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"variant",values:["base","baseContrast","light","lightContrast","dark","darkContrast","soft","softContrast"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"base"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSText.vue"]};export{V as F};