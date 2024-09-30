import{d as _,b as v,c as n,w as A,y as b,z as I,A as L,B as p,L as S,m as P,M as y,N as h,I as q,J as $,K as B}from"./vue.esm-bundler-CxS4_7kK.js";import j from"./FSNumberField-DZMYz5PP.js";import{F as z}from"./FSSelectField-DujFH32C.js";import{F as E}from"./FSBaseField-lEL5efap.js";import{_ as k}from"./FSRow-D546kqFt.js";import{t as f,a as T}from"./time-CRGs9nYY.js";import{u as M}from"./useRules-o706rtr1.js";import{u as W,C as V}from"./useColors-CVdO3CcM.js";import{u as D}from"./useSlots-BHms3Yb6.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-DxJVxYys.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./FSCard-uGx4g-q0.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./VProgressCircular-BpEvERgl.js";import"./color-DpQhyQC8.js";import"./theme-BEfrBPRQ.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./FSIcon-DKHuRfPI.js";import"./VIcon-C65wMs2G.js";import"./VField-Cs2kmeSz.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./form-lyoENh9E.js";import"./loader-BoG0AaGl.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./VSpacer-DaRxrr8q.js";import"./FSDialogMenu-1exdynOQ.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-Cseplt4t.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./FSCheckbox-BJ0zq37S.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-D40FnrcD.js";import"./FSLoader-BMQDJgx0.js";import"./elevation-8SXivnh1.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./useTranslations-ZMyFjr19.js";const N=_({name:"FSTimeField",components:{FSNumberField:j,FSSelectField:z,FSBaseField:E,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=M(),{getColors:m}=W(),{slots:a}=D();delete a.label,delete a.description;const d=m(V.Error),i=m(V.Light),u=m(V.Dark),t=v(0),l=v(f[0]),s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":u.base,"--fs-time-field-active-border-color":u.dark,"--fs-time-field-error-color":d.base,"--fs-time-field-error-border-color":d.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),C=n(()=>Object.keys(a).filter(r=>r.startsWith("number-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),H=n(()=>Object.keys(a).filter(r=>r.startsWith("select-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),w=n(()=>e.messages??F(e.modelValue,e.rules)),O=r=>{t.value=r,c("update:modelValue",t.value*l.value.id)},U=r=>{l.value=f.find(o=>o.id===r),c("update:modelValue",t.value*l.value.id)},R=()=>{e.modelValue&&(T(e.modelValue)!==0?(l.value=f[T(e.modelValue)],t.value=e.modelValue/l.value.id):t.value=e.modelValue)};return A(()=>e.modelValue,()=>{R()},{immediate:!0}),{selectedUnit:l,numberSlots:C,selectSlots:H,validateOn:g,innerTime:t,timeScale:f,messages:w,style:s,onSubmitTimeScale:U,onSubmitValue:O}}});function K(e,c,g,F,m,a){const d=b("FSNumberField"),i=b("FSSelectField"),u=b("FSBaseField");return I(),L(u,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(d,P({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),y({_:2},[h(e.numberSlots,(t,l)=>({name:l,fn:p(s=>[q(e.$slots,l,$(B(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},y({_:2},[h(e.selectSlots,(t,l)=>({name:l,fn:p(s=>[q(e.$slots,l,$(B(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const ur=J(N,[["render",K]]);N.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{ur as default};
