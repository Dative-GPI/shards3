import{d as B,c as o,y,z as V,A as q,B as l,m as v,L as t,I as r}from"./vue.esm-bundler-gWFTcvUr.js";import{F as b}from"./FSFadeOut-CLF884DQ.js";import{F as i}from"./FSButton-CDk00Rln.js";import{F as S}from"./FSDialog-oZKAE6lE.js";import{_ as d}from"./FSRow-Bpa2jjpJ.js";import{C as s}from"./useColors-vfWFlOSD.js";import{u as $}from"./css-Bc8dJONt.js";import{u as I}from"./useTranslations-DebMVrXy.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g=B({name:"FSDialogSubmit",components:{FSFadeOut:b,FSButton:i,FSDialog:S,FSRow:d},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:s.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:s.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:submitButton"],setup(e){const{isMobileSized:a}=$(),{$tr:n}=I(),p=o(()=>`calc(100vh - 40px - ${48+(a.value?24:32)+24+(e.subtitle?(a.value?14:16)+8:0)+(a.value?36:40)+24}px)`),f=o(()=>e.cancelButtonLabel??n("ui.button.cancel","Cancel")),m=o(()=>e.submitButtonLabel??n("ui.button.validate","Validate"));return{cancelLabel:f,submitLabel:m,ColorEnum:s,maxHeight:p}}});function h(e,a,n,p,f,m){const c=y("FSDialog");return V(),q(c,v({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=u=>e.$emit("update:modelValue",u))},e.$attrs),{body:l(()=>[t(b,{padding:"0 8px 0 0",maxHeight:e.maxHeight},{default:l(()=>[r(e.$slots,"body")]),_:3},8,["maxHeight"])]),footer:l(()=>[r(e.$slots,"footer",{},()=>[t(d,{padding:"0 16px 0 0"},{default:l(()=>[r(e.$slots,"left-footer"),t(d,{align:"top-right",wrap:!1},{default:l(()=>[t(i,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=u=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","appendIcon","variant","color","label"]),t(i,{prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load,onClick:a[1]||(a[1]=u=>e.$emit("click:submitButton"))},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])]),_:1})]),_:3})])]),_:3},16,["subtitle","title","width","modelValue"])}const E=C(g,[["render",h]]);g.__docgenInfo={displayName:"FSDialogSubmit",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"body"},{name:"footer"},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogSubmit.vue"]};export{E as F};
