import{d as h,b as B,c as b,y as g,z as i,A as f,C as n,N as u,E as L,O as k,K as v,F as $,G as D,m as q,B as M,L as N,M as A}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as E}from"./FSPagination-DuEO3ucz.js";import{_ as C}from"./FSFadeOut-B5r2PNGg.js";import{F as S}from"./FSButton-DZMcpMR1.js";import{F as H}from"./FSForm-DYbVl9Fq.js";import{F}from"./FSCol-D8gLxM2E.js";import{_ as V}from"./FSRow-CSQtiyAx.js";import{C as y}from"./useColors-DnoeDx-P.js";import{u as z}from"./useBreakpoints-BMg9gIvD.js";import{u as O}from"./useTranslations-DgvmBCqU.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as R}from"./FSWindow-ed6WJT5P.js";import{F as U}from"./FSDialog-CcyZGVNr.js";const I=h({name:"FSDialogMultiFormBody",components:{FSPagination:E,FSFadeOut:C,FSButton:S,FSForm:H,FSCol:F,FSRow:V},props:{subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},steps:{type:Number,required:!0},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:y.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:y.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton"],setup(e,{emit:t}){const{isMobileSized:d}=z(),{$tr:o}=O(),a=B(1),c=B(!1),p=B(Array.from({length:e.steps},()=>!1)),m=b(()=>`calc(100vh - 42px - ${48+(d.value?24:32)+24+(e.subtitle?(d.value?16:20)+8:0)+(e.steps>1?28:0)+(d.value?36:40)+24}px)`),l=b(()=>a.value==1?e.cancelButtonLabel??o("button.cancel","Cancel"):o("button.back","Back")),r=b(()=>a.value==e.steps?e.submitButtonLabel??o("button.validate","Validate"):o("button.next","Next")),s=b(()=>a.value==e.steps?e.submitButtonVariant??"full":"standard");return{previousButtonLabel:l,nextButtonVariant:s,nextButtonLabel:r,currentStep:a,ColorEnum:y,maxHeight:m,valids:p,valid:c,onPrevious:()=>{a.value>1?a.value--:t("click:cancelButton")},onSubmit:()=>{if(c.value)switch(a.value){case e.steps:t("click:submitButton");break;default:a.value++;break}}}}});function G(e,t,d,o,a,c){const p=g("FSPagination"),m=g("FSForm");return i(),f(F,{gap:"24px"},{default:n(()=>[u(p,{width:"calc(100% - 16px)",pages:e.$props.steps,modelValue:e.currentStep-1},null,8,["pages","modelValue"]),u(R,{width:"100%",modelValue:e.currentStep-1},{default:n(()=>[(i(!0),L(D,null,k(e.$props.steps,(l,r)=>(i(),f(m,{variant:e.$props.variant,key:r,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":t[1]||(t[1]=s=>e.valid=s)},{default:n(()=>[u(F,{gap:"24px"},{default:n(()=>[u(C,{maxHeight:e.maxHeight},{default:n(()=>[v(e.$slots,`step-${l}`)]),_:2},1032,["maxHeight"]),u(V,null,{default:n(()=>[v(e.$slots,"left-footer"),u(V,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:n(()=>[e.$props.showCancelButton||e.currentStep>1?(i(),f(S,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.previousButtonLabel,onClick:t[0]||(t[0]=s=>e.onPrevious())},null,8,["prependIcon","appendIcon","variant","color","label"])):$("",!0),e.$props.showSubmitButton||e.currentStep<e.$props.steps?(i(),f(S,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,color:e.$props.submitButtonColor,variant:e.nextButtonVariant,editable:e.$props.editable,label:e.nextButtonLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","color","variant","editable","label","load"])):$("",!0)]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])]),_:3})}const K=w(I,[["render",G]]);I.__docgenInfo={displayName:"FSDialogMultiFormBody",exportName:"default",description:"",tags:{},props:[{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"steps",type:{name:"number"},required:!0},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"}],slots:[{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiFormBody.vue"]};const P=h({name:"FSDialogMultiForm",components:{FSDialogMultiFormBody:K,FSDialog:U},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0}},emits:["update:modelValue","click:submitButton"],setup(){return{}}});function T(e,t,d,o,a,c){const p=g("FSDialogMultiFormBody"),m=g("FSDialog");return i(),f(m,q({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[2]||(t[2]=l=>e.$emit("update:modelValue",l))},e.$attrs),{body:n(()=>[u(p,q({subtitle:e.$props.subtitle,steps:e.$props.steps,"onClick:submitButton":t[0]||(t[0]=l=>e.$emit("click:submitButton")),"onClick:cancelButton":t[1]||(t[1]=l=>e.$emit("update:modelValue",!1))},e.$attrs),M({_:2},[k(e.$slots,(l,r)=>({name:r,fn:n(s=>[v(e.$slots,r,N(A(s)))])}))]),1040,["subtitle","steps"])]),_:3},16,["subtitle","title","width","modelValue"])}const re=w(P,[["render",T]]);P.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};export{re as F};
