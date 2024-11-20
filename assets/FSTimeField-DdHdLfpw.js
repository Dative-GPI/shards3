import{d as R,b as v,c as n,w as _,A as b,B as j,C as A,E as p,P as S,j as E,D as h,Q as q,M as y,N as $,O as B}from"./vue.esm-bundler-Zcuj-zyO.js";import D from"./FSNumberField-DwEYYhZY.js";import{F as I}from"./FSSelectField-ChNtQfMF.js";import{F as L}from"./FSBaseField-DHv7mzhZ.js";import{_ as k}from"./FSRow-4Qz6Bbpg.js";import{t as f,a as T}from"./time-D2iTm1EC.js";import{u as M}from"./useRules-CvuqAlPS.js";import{u as W,C as V}from"./useColors-Cz5tOQmp.js";import{u as z}from"./useSlots-DzOFTavN.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-BcsUOOXo.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./FSCol-DLyNVOXQ.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./theme-DppimMvq.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSSpan-Bb6VK1Ws.js";import"./FSIcon-CKEWDmaC.js";import"./VField-BtCsV974.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./density-DMrbDfgW.js";import"./dimensions-BWgpWc0X.js";import"./proxiedModel-Xz4IZg0a.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-CtBhRuPR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./FSCheckbox-CunxM6rm.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./useTranslations-DN7QCs30.js";const C=R({name:"FSTimeField",components:{FSNumberField:D,FSSelectField:I,FSBaseField:L,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=M(),{getColors:m}=W(),{slots:a}=z();delete a.label,delete a.description;const d=m(V.Error),i=m(V.Light),u=m(V.Dark),t=v(0),l=v(f[0]),s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":u.base,"--fs-time-field-active-border-color":u.dark,"--fs-time-field-error-color":d.base,"--fs-time-field-error-border-color":d.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),N=n(()=>Object.keys(a).filter(r=>r.startsWith("number-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),H=n(()=>Object.keys(a).filter(r=>r.startsWith("select-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),O=n(()=>e.messages??F(e.modelValue,e.rules)),w=r=>{t.value=r,c("update:modelValue",t.value*l.value.id)},U=r=>{l.value=f.find(o=>o.id===r),c("update:modelValue",t.value*l.value.id)},P=()=>{e.modelValue&&(T(e.modelValue)!==0?(l.value=f[T(e.modelValue)],t.value=e.modelValue/l.value.id):t.value=e.modelValue)};return _(()=>e.modelValue,()=>{P()},{immediate:!0}),{selectedUnit:l,numberSlots:N,selectSlots:H,validateOn:g,innerTime:t,timeScale:f,messages:O,style:s,onSubmitTimeScale:U,onSubmitValue:w}}});function G(e,c,g,F,m,a){const d=b("FSNumberField"),i=b("FSSelectField"),u=b("FSBaseField");return j(),A(u,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(d,E({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),h({_:2},[q(e.numberSlots,(t,l)=>({name:l,fn:p(s=>[y(e.$slots,l,$(B(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},h({_:2},[q(e.selectSlots,(t,l)=>({name:l,fn:p(s=>[y(e.$slots,l,$(B(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const ur=Q(C,[["render",G]]);C.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{ur as default};
