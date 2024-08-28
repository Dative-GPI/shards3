import{d as _,b as v,c as n,w as A,y as b,z as I,A as L,B as p,L as S,m as P,M as y,N as h,I as q,J as $,K as B}from"./vue.esm-bundler--l9E1zCM.js";import j from"./FSNumberField-hnh7ATaX.js";import{F as z}from"./FSSelectField-CU-yoWET.js";import{F as E}from"./FSBaseField-W8_0_iOs.js";import{_ as k}from"./FSRow-DW_Nd3uI.js";import{t as f,a as T}from"./time-BdfI25e1.js";import{u as M}from"./useRules-eaGGgTH2.js";import{u as W,C as V}from"./useColors-Bv0V9Qz7.js";import{u as D}from"./useSlots-sbMHjG0F.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-COs2079Q.js";import"./FSButton-B-GBc2hj.js";import"./FSClickable-wwot-1GZ.js";import"./FSCard-CJMrkqFE.js";import"./FSCol-BA_LQqMv.js";import"./css-CqyMbT8T.js";import"./VProgressCircular-DiflYTWZ.js";import"./color-DkN3uAGq.js";import"./theme-uJWLcFzd.js";import"./VIcon-CRzxwZ_P.js";import"./FSSpan-Drxl5cqQ.js";import"./FSIcon-DBiV-GrJ.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./VSpacer-CY3ZXRlU.js";import"./FSDialogMenu-gDsviTkt.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-CAagL5n1.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BHClSvbm.js";import"./FSWrapGroup-JiPztc6W.js";import"./FSCheckbox-BImK2siP.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-BPZTes3y.js";import"./VImg-B1oUXGM1.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-B30FjWD_.js";import"./VList-f6c9GJFN.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-SBcHh8Lg.js";import"./VMenu-DGJWui2w.js";import"./useTranslations-ByKtt_-5.js";const N=_({name:"FSTimeField",components:{FSNumberField:j,FSSelectField:z,FSBaseField:E,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=M(),{getColors:m}=W(),{slots:a}=D();delete a.label,delete a.description;const d=m(V.Error),i=m(V.Light),u=m(V.Dark),t=v(0),r=v(f[0]),s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":u.base,"--fs-time-field-active-border-color":u.dark,"--fs-time-field-error-color":d.base,"--fs-time-field-error-border-color":d.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),C=n(()=>Object.keys(a).filter(l=>l.startsWith("number-")).reduce((l,o)=>(l[o.substring(7)]=a[o],l),{})),H=n(()=>Object.keys(a).filter(l=>l.startsWith("select-")).reduce((l,o)=>(l[o.substring(7)]=a[o],l),{})),w=n(()=>e.messages??F(e.modelValue,e.rules)),O=l=>{t.value=l,c("update:modelValue",t.value*r.value.id)},U=l=>{r.value=f.find(o=>o.id===l),c("update:modelValue",t.value*r.value.id)},R=()=>{e.modelValue&&(T(e.modelValue)!==0?(r.value=f[T(e.modelValue)],t.value=e.modelValue/r.value.id):t.value=e.modelValue)};return A(()=>e.modelValue,()=>{R()},{immediate:!0}),{selectedUnit:r,numberSlots:C,selectSlots:H,validateOn:g,innerTime:t,timeScale:f,messages:w,style:s,onSubmitTimeScale:U,onSubmitValue:O}}});function K(e,c,g,F,m,a){const d=b("FSNumberField"),i=b("FSSelectField"),u=b("FSBaseField");return I(),L(u,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(d,P({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),y({_:2},[h(e.numberSlots,(t,r)=>({name:r,fn:p(s=>[q(e.$slots,r,$(B(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},y({_:2},[h(e.selectSlots,(t,r)=>({name:r,fn:p(s=>[q(e.$slots,r,$(B(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const ol=J(N,[["render",K]]);N.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{ol as default};