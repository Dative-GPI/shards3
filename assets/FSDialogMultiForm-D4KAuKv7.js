import{d as $,b,c as m,y as B,z as f,A as v,B as n,C as w,N as q,L as o,I as y,F as L,m as V,M as P,J as D,K as M}from"./vue.esm-bundler--l9E1zCM.js";import{F as h}from"./FSFadeOut-BPZTes3y.js";import{F as S}from"./FSButton-B-GBc2hj.js";import{F as N}from"./FSForm-RyJxgkZj.js";import{_ as F}from"./FSRow-DW_Nd3uI.js";import{C as g}from"./useColors-Bv0V9Qz7.js";import{u as A}from"./css-CqyMbT8T.js";import{u as E}from"./useTranslations-ByKtt_-5.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as H}from"./FSCol-BA_LQqMv.js";import{F as z}from"./FSWindow-SAzokL0I.js";import{F as R}from"./FSDialog-DamMrw75.js";const I=$({name:"FSDialogMultiFormBody",components:{FSFadeOut:h,FSButton:S,FSForm:N,FSRow:F},props:{subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},steps:{type:Number,required:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:g.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:g.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton"],setup(e,{emit:t}){const{isMobileSized:s}=A(),{$tr:r}=E(),a=b(1),p=b(!1),i=b(Array.from({length:e.steps},()=>!1)),d=m(()=>`calc(100vh - 40px - ${48+(s.value?24:32)+24+(e.subtitle?(s.value?14:16)+8:0)+(s.value?36:40)+24}px)`),l=m(()=>a.value==1?e.cancelButtonLabel??r("ui.button.cancel","Cancel"):r("ui.button.back","Back")),u=m(()=>a.value==e.steps?e.submitButtonLabel??r("ui.button.validate","Validate"):r("ui.button.next","Next")),c=m(()=>a.value==e.steps?e.submitButtonVariant??"full":"standard");return{previousButtonLabel:l,nextButtonVariant:c,nextButtonLabel:u,currentStep:a,ColorEnum:g,maxHeight:d,valids:i,valid:p,onPrevious:()=>{a.value>1?a.value--:t("click:cancelButton")},onSubmit:()=>{if(p.value)switch(a.value){case e.steps:t("click:submitButton");break;default:a.value++;break}}}}});function U(e,t,s,r,a,p){const i=B("FSForm");return f(),v(z,{width:"100%",modelValue:e.currentStep-1},{default:n(()=>[(f(!0),w(L,null,q(e.$props.steps,(d,l)=>(f(),v(i,{variant:e.$props.variant,key:l,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":t[1]||(t[1]=u=>e.valid=u)},{default:n(()=>[o(H,{gap:"24px"},{default:n(()=>[o(h,{padding:"0 8px 0 0",maxHeight:e.maxHeight},{default:n(()=>[y(e.$slots,`step-${d}`)]),_:2},1032,["maxHeight"]),o(F,{padding:"0 16px 0 0"},{default:n(()=>[y(e.$slots,"left-footer"),o(F,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:n(()=>[o(S,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.previousButtonLabel,onClick:t[0]||(t[0]=u=>e.onPrevious())},null,8,["prependIcon","appendIcon","variant","color","label"]),o(S,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,color:e.$props.submitButtonColor,variant:e.nextButtonVariant,editable:e.$props.editable,label:e.nextButtonLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","color","variant","editable","label","load"])]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])}const J=k(I,[["render",U]]);I.__docgenInfo={displayName:"FSDialogMultiFormBody",exportName:"default",description:"",tags:{},props:[{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"steps",type:{name:"number"},required:!0},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"}],slots:[{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiFormBody.vue"]};const C=$({name:"FSDialogMultiForm",components:{FSDialogMultiFormBody:J,FSDialog:R},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0}},emits:["update:modelValue","click:submitButton"],setup(){return{}}});function K(e,t,s,r,a,p){const i=B("FSDialogMultiFormBody"),d=B("FSDialog");return f(),v(d,V({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[2]||(t[2]=l=>e.$emit("update:modelValue",l))},e.$attrs),{body:n(()=>[o(i,V({subtitle:e.$props.subtitle,steps:e.$props.steps,"onClick:submitButton":t[0]||(t[0]=l=>e.$emit("click:submitButton")),"onClick:cancelButton":t[1]||(t[1]=l=>e.$emit("update:modelValue",!1))},e.$attrs),P({_:2},[q(e.$slots,(l,u)=>({name:u,fn:n(c=>[y(e.$slots,u,D(M(c)))])}))]),1040,["subtitle","steps"])]),_:3},16,["subtitle","title","width","modelValue"])}const ne=k(C,[["render",K]]);C.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};export{ne as F};