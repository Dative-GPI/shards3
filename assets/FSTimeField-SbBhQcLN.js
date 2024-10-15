import{d as _,b as v,c as n,w as A,y as b,z as L,A as P,C as p,N as S,m as j,B as y,O as h,K as q,L as $,M as B}from"./vue.esm-bundler-DTB_q9xr.js";import z from"./FSNumberField-bM89nrxw.js";import{F as E}from"./FSSelectField-DkqD7weE.js";import{F as I}from"./FSBaseField-BJvLi7Av.js";import{_ as k}from"./FSRow-CFFgZ74C.js";import{t as f,a as T}from"./time-IoQ6C2aa.js";import{u as M}from"./useRules-D0gcbU57.js";import{u as W,C as V}from"./useColors-Du1QHlOW.js";import{u as D}from"./useSlots-BnylMYIF.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-DpQImVLP.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./FSCard-GtkwWKOo.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./VProgressCircular-cHoQoKlr.js";import"./color-DBJfw4cY.js";import"./theme-BKYtCmay.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSSpan-DGSHCe_l.js";import"./FSIcon-CJgnsR4e.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./VSpacer-y-n940VK.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./useTranslations-BehwFxDb.js";const C=_({name:"FSTimeField",components:{FSNumberField:z,FSSelectField:E,FSBaseField:I,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=M(),{getColors:m}=W(),{slots:a}=D();delete a.label,delete a.description;const d=m(V.Error),i=m(V.Light),u=m(V.Dark),t=v(0),l=v(f[0]),s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":u.base,"--fs-time-field-active-border-color":u.dark,"--fs-time-field-error-color":d.base,"--fs-time-field-error-border-color":d.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),N=n(()=>Object.keys(a).filter(r=>r.startsWith("number-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),H=n(()=>Object.keys(a).filter(r=>r.startsWith("select-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),O=n(()=>e.messages??F(e.modelValue,e.rules)),w=r=>{t.value=r,c("update:modelValue",t.value*l.value.id)},U=r=>{l.value=f.find(o=>o.id===r),c("update:modelValue",t.value*l.value.id)},R=()=>{e.modelValue&&(T(e.modelValue)!==0?(l.value=f[T(e.modelValue)],t.value=e.modelValue/l.value.id):t.value=e.modelValue)};return A(()=>e.modelValue,()=>{R()},{immediate:!0}),{selectedUnit:l,numberSlots:N,selectSlots:H,validateOn:g,innerTime:t,timeScale:f,messages:O,style:s,onSubmitTimeScale:U,onSubmitValue:w}}});function G(e,c,g,F,m,a){const d=b("FSNumberField"),i=b("FSSelectField"),u=b("FSBaseField");return L(),P(u,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(d,j({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),y({_:2},[h(e.numberSlots,(t,l)=>({name:l,fn:p(s=>[q(e.$slots,l,$(B(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},y({_:2},[h(e.selectSlots,(t,l)=>({name:l,fn:p(s=>[q(e.$slots,l,$(B(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const ur=K(C,[["render",G]]);C.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{ur as default};