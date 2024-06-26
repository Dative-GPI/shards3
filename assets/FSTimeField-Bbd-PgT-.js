import{d as U,b as v,c as n,y as b,z as w,A as P,B as p,K as S,m as R,O as y,P as q,L as h,M as $,N as T}from"./vue.esm-bundler-DeSao-KJ.js";import _ from"./FSNumberField-BkKu69Kh.js";import{F as A}from"./FSSelectField-4wuiwfb-.js";import{F as L}from"./VField-CyhQQ7TX.js";import{_ as k}from"./FSRow-JJutUvlP.js";import{t as f,a as B}from"./time-Ba2sHI9J.js";import{u as j}from"./useRules-DQ31e--d.js";import{u as z,C as V}from"./useColors-CSspNZdS.js";import{u as E}from"./useSlots-DPxV8yUU.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-CeZ-GSQu.js";import"./FSButton-CX8bjLcP.js";import"./FSClickable-D0rN91iS.js";import"./FSCard-DS_imcN3.js";import"./FSCol-CA6NzDpV.js";import"./css-BnhLLynS.js";import"./VProgressCircular-DA_NN_fl.js";import"./color-XZPyE2lN.js";import"./theme-RQK62Xub.js";import"./useRender-CIdmfI-I.js";import"./resizeObserver-euslJwVY.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./FSSpan-t6bMdSRn.js";import"./FSIcon-29MaMkU3.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./density-4sjlTnVP.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CrTEBV4I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./VSpacer-CFNx9InD.js";import"./VLabel-CWiDHCZM.js";import"./loader-CnGjHJ-m.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./FSDialogMenu-Bqb9kp8T.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-GkfAduCn.js";import"./FSRadio-BSRa54Po.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSCheckbox-BFjs92EI.js";import"./FSFadeOut-CcdymBS5.js";import"./uuid-DTaye2KM.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./elevation-BBJMtRPf.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VSelect-D0BktkQY.js";import"./VMenu-CbRbHjmn.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./useTranslations-DAApg7Ob.js";const N=U({name:"FSTimeField",components:{FSNumberField:_,FSSelectField:A,FSBaseField:L,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=j(),{getColors:m}=z(),{slots:a}=E();delete a.label,delete a.description;const u=m(V.Error),i=m(V.Light),d=m(V.Dark),t=v(0),r=v(f[0]);e.modelValue&&(B(e.modelValue)!==0?(r.value=f[B(e.modelValue)],t.value=e.modelValue/r.value.id):t.value=e.modelValue);const s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":d.base,"--fs-time-field-active-border-color":d.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),C=n(()=>Object.keys(a).filter(l=>l.startsWith("number-")).reduce((l,o)=>(l[o.substring(7)]=a[o],l),{})),H=n(()=>Object.keys(a).filter(l=>l.startsWith("select-")).reduce((l,o)=>(l[o.substring(7)]=a[o],l),{})),O=n(()=>e.messages??F(e.modelValue,e.rules));return{selectedUnit:r,numberSlots:C,selectSlots:H,validateOn:g,innerTime:t,timeScale:f,messages:O,style:s,onSubmitTimeScale:l=>{r.value=f.find(o=>o.id===l),c("update:modelValue",t.value*r.value.id)},onSubmitValue:l=>{t.value=l,c("update:modelValue",t.value*r.value.id)}}}});function M(e,c,g,F,m,a){const u=b("FSNumberField"),i=b("FSSelectField"),d=b("FSBaseField");return w(),P(d,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(u,R({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),y({_:2},[q(e.numberSlots,(t,r)=>({name:r,fn:p(s=>[h(e.$slots,r,$(T(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},y({_:2},[q(e.selectSlots,(t,r)=>({name:r,fn:p(s=>[h(e.$slots,r,$(T(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const al=I(N,[["render",M]]);N.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{al as default};