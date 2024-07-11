import{d as U,b as v,c as n,y as b,z as w,A as R,B as p,I as S,m as _,M as y,N as q,J as h,K as $,L as T}from"./vue.esm-bundler-DC82FEWN.js";import A from"./FSNumberField-B8rj5_HR.js";import{F as I}from"./FSSelectField-CFMrI5u1.js";import{F as L}from"./FSBaseField-CKMO1RzZ.js";import{_ as k}from"./FSRow-DoCXWKDP.js";import{t as f,a as B}from"./time-xMV0WbLU.js";import{u as P}from"./useRules-DS9e5-1Q.js";import{u as j,C as V}from"./useColors-DEq6MuQy.js";import{u as z}from"./useSlots-V2mVelz6.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-B92xKcv7.js";import"./FSButton-B8CL4IYQ.js";import"./FSClickable-CNOWN-hR.js";import"./FSCard-BzleLmPd.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./VProgressCircular-C-U4HXtE.js";import"./color-DvJT0EEa.js";import"./theme-B5x8xkbY.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CwfDYIua.js";import"./FSIcon-uD_MRFdb.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./VSpacer-BjECYW1K.js";import"./FSDialogMenu-cbMj6UFV.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-Cku24mDz.js";import"./FSRadio-CkPi_Tsj.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSCheckbox-CFeLLHEx.js";import"./FSFadeOut-_RgLKyTO.js";import"./uuid-DTaye2KM.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./VImg-DgHq50DD.js";import"./VSelect-DsYsgoZM.js";import"./VMenu-Cn6sY4-s.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./useTranslations-DV-taHAL.js";const N=U({name:"FSTimeField",components:{FSNumberField:A,FSSelectField:I,FSBaseField:L,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=P(),{getColors:m}=j(),{slots:t}=z();delete t.label,delete t.description;const u=m(V.Error),i=m(V.Light),d=m(V.Dark),a=v(0),r=v(f[0]);e.modelValue&&(B(e.modelValue)!==0?(r.value=f[B(e.modelValue)],a.value=e.modelValue/r.value.id):a.value=e.modelValue);const s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":d.base,"--fs-time-field-active-border-color":d.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),C=n(()=>Object.keys(t).filter(l=>l.startsWith("number-")).reduce((l,o)=>(l[o.substring(7)]=t[o],l),{})),H=n(()=>Object.keys(t).filter(l=>l.startsWith("select-")).reduce((l,o)=>(l[o.substring(7)]=t[o],l),{})),O=n(()=>e.messages??F(e.modelValue,e.rules));return{selectedUnit:r,numberSlots:C,selectSlots:H,validateOn:g,innerTime:a,timeScale:f,messages:O,style:s,onSubmitTimeScale:l=>{r.value=f.find(o=>o.id===l),c("update:modelValue",a.value*r.value.id)},onSubmitValue:l=>{a.value=l,c("update:modelValue",a.value*r.value.id)}}}});function M(e,c,g,F,m,t){const u=b("FSNumberField"),i=b("FSSelectField"),d=b("FSBaseField");return w(),R(d,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(u,_({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),y({_:2},[q(e.numberSlots,(a,r)=>({name:r,fn:p(s=>[h(e.$slots,r,$(T(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},y({_:2},[q(e.selectSlots,(a,r)=>({name:r,fn:p(s=>[h(e.$slots,r,$(T(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const ll=E(N,[["render",M]]);N.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{ll as default};
