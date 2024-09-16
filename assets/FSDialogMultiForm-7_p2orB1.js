import{d as q,b as g,c as f,y as b,z as c,A as v,B as n,L as l,C as w,N as h,I as y,F as L,m as $,M as D,J as M,K as N}from"./vue.esm-bundler-BSyvBTC9.js";import{F as A}from"./FSPagination-DAqLpa--.js";import{F as k}from"./FSFadeOut-D96pvLZm.js";import{F}from"./FSButton-CyN0itWL.js";import{F as E}from"./FSForm-CVvlYXog.js";import{F as S}from"./FSCol-DZA6pxA1.js";import{F as V}from"./FSRow-CA1vgNXx.js";import{C as B}from"./useColors-DlnF7i6T.js";import{u as H}from"./css-DLfrm0pR.js";import{u as z}from"./useTranslations-CdSqQFV3.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as R}from"./FSWindow-BMzav7Sc.js";import{F as U}from"./FSDialog-DybB7Adl.js";const C=q({name:"FSDialogMultiFormBody",components:{FSPagination:A,FSFadeOut:k,FSButton:F,FSForm:E,FSCol:S,FSRow:V},props:{subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},steps:{type:Number,required:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:B.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:B.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton"],setup(e,{emit:t}){const{isMobileSized:i}=H(),{$tr:o}=z(),a=g(1),m=g(!1),d=g(Array.from({length:e.steps},()=>!1)),p=f(()=>`calc(100vh - 40px - ${48+(i.value?24:32)+24+(e.subtitle?(i.value?14:16)+8:0)+(i.value?36:40)+24}px)`),u=f(()=>a.value==1?e.cancelButtonLabel??o("ui.button.cancel","Cancel"):o("ui.button.back","Back")),r=f(()=>a.value==e.steps?e.submitButtonLabel??o("ui.button.validate","Validate"):o("ui.button.next","Next")),s=f(()=>a.value==e.steps?e.submitButtonVariant??"full":"standard");return{previousButtonLabel:u,nextButtonVariant:s,nextButtonLabel:r,currentStep:a,ColorEnum:B,maxHeight:p,valids:d,valid:m,onPrevious:()=>{a.value>1?a.value--:t("click:cancelButton")},onSubmit:()=>{if(m.value)switch(a.value){case e.steps:t("click:submitButton");break;default:a.value++;break}}}}});function J(e,t,i,o,a,m){const d=b("FSPagination"),p=b("FSForm");return c(),v(S,{gap:"24px"},{default:n(()=>[l(d,{width:"calc(100% - 16px)",pages:e.$props.steps,modelValue:e.currentStep-1},null,8,["pages","modelValue"]),l(R,{width:"100%",modelValue:e.currentStep-1},{default:n(()=>[(c(!0),w(L,null,h(e.$props.steps,(u,r)=>(c(),v(p,{variant:e.$props.variant,key:r,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":t[1]||(t[1]=s=>e.valid=s)},{default:n(()=>[l(S,{gap:"24px"},{default:n(()=>[l(k,{padding:"0 8px 0 0",maxHeight:e.maxHeight},{default:n(()=>[y(e.$slots,`step-${u}`)]),_:2},1032,["maxHeight"]),l(V,{padding:"0 16px 0 0"},{default:n(()=>[y(e.$slots,"left-footer"),l(V,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:n(()=>[l(F,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.previousButtonLabel,onClick:t[0]||(t[0]=s=>e.onPrevious())},null,8,["prependIcon","appendIcon","variant","color","label"]),l(F,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,color:e.$props.submitButtonColor,variant:e.nextButtonVariant,editable:e.$props.editable,label:e.nextButtonLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","color","variant","editable","label","load"])]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])]),_:3})}const K=I(C,[["render",J]]);C.__docgenInfo={displayName:"FSDialogMultiFormBody",exportName:"default",description:"",tags:{},props:[{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"steps",type:{name:"number"},required:!0},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"}],slots:[{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiFormBody.vue"]};const P=q({name:"FSDialogMultiForm",components:{FSDialogMultiFormBody:K,FSDialog:U},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0}},emits:["update:modelValue","click:submitButton"],setup(){return{}}});function O(e,t,i,o,a,m){const d=b("FSDialogMultiFormBody"),p=b("FSDialog");return c(),v(p,$({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[2]||(t[2]=u=>e.$emit("update:modelValue",u))},e.$attrs),{body:n(()=>[l(d,$({subtitle:e.$props.subtitle,steps:e.$props.steps,"onClick:submitButton":t[0]||(t[0]=u=>e.$emit("click:submitButton")),"onClick:cancelButton":t[1]||(t[1]=u=>e.$emit("update:modelValue",!1))},e.$attrs),D({_:2},[h(e.$slots,(u,r)=>({name:r,fn:n(s=>[y(e.$slots,r,M(N(s)))])}))]),1040,["subtitle","steps"])]),_:3},16,["subtitle","title","width","modelValue"])}const oe=I(P,[["render",O]]);P.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};export{oe as F};
