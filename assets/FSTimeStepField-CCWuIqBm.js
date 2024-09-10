import{d as h,c as i,y as n,z as w,A as B,B as s,L as p,m as U,M as S,N as F,I as g,J as c,K as $}from"./vue.esm-bundler-Vj2X7okO.js";import H from"./FSNumberField-Dq21Eqy1.js";import{F as N}from"./FSSelectField-D30uP2ew.js";import{F as O}from"./FSBaseField-Bip4KV2X.js";import{_ as q}from"./FSRow-BuYwVvwM.js";import{b as y}from"./time-BOZ1S5aJ.js";import{u as T}from"./useRules-DpnTqc7T.js";import{u as A}from"./useSlots-DXmhvOIb.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-xplhuXw_.js";import"./FSButton-9Jyc5oF6.js";import"./FSClickable-B4ZW0Yow.js";import"./FSCard-U7GdUEkx.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./VProgressCircular-DnrgPZB3.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSSpan-etgUZXmX.js";import"./FSIcon-uPx7S--r.js";import"./VIcon-DptP6m9n.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./VSpacer-YT0o3rZT.js";import"./FSDialogMenu-7NQLw-fe.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-BrsH_RdA.js";import"./uuid-DTaye2KM.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-DeUMSMgz.js";import"./FSWrapGroup-Bqec5oyw.js";import"./FSCheckbox-Bsnpn4tO.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-BAo4zk1P.js";import"./VImg-BUrdc1ij.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-B1FN7cQo.js";import"./VList-DzB42uLT.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-Dca9hLjt.js";import"./VMenu-DOKVMVxb.js";import"./useTranslations-DyPMaPr_.js";const v=h({name:"FSTimeStepField",components:{FSNumberField:H,FSSelectField:N,FSBaseField:O,FSRow:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0},allowedUnits:{type:Array,required:!1,default:()=>[]},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:a,getMessages:f}=T(),{slots:t}=A();delete t.label,delete t.description;const b=i(()=>Object.keys(t).filter(r=>r.startsWith("number-")).reduce((r,l)=>(r[l.substring(7)]=t[l],r),{})),V=i(()=>Object.keys(t).filter(r=>r.startsWith("select-")).reduce((r,l)=>(r[l.substring(7)]=t[l],r),{})),u=i(()=>e.messages??f(e.modelValue,e.rules)),m=i(()=>e.allowedUnits&&e.allowedUnits.length?y.filter(r=>e.allowedUnits.includes(r.id)):y);return{numberSlots:b,selectSlots:V,validateOn:a,messages:u,units:m}}});function j(e,a,f,t,b,V){const u=n("FSNumberField"),m=n("FSSelectField"),r=n("FSBaseField");return w(),B(r,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:s(()=>[p(q,null,{default:s(()=>[p(u,U({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.$props.modelValue&&e.$props.modelValue.value||0,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:modelValue",{value:l,unit:e.$props.modelValue&&e.$props.modelValue.unit||e.units[0].id}))},e.$attrs),S({_:2},[F(e.numberSlots,(l,o)=>({name:o,fn:s(d=>[g(e.$slots,o,c($(d)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue"]),p(m,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.units,modelValue:e.$props.modelValue&&e.$props.modelValue.unit||e.units[0].id,"onUpdate:modelValue":a[1]||(a[1]=l=>e.$emit("update:modelValue",{value:e.$props.modelValue&&e.$props.modelValue.value||0,unit:l}))},S({_:2},[F(e.selectSlots,(l,o)=>({name:o,fn:s(d=>[g(e.$slots,o,c($(d)))])}))]),1032,["editable","items","modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const Ge=R(v,[["render",j]]);v.__docgenInfo={displayName:"FSTimeStepField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"{ value: number, unit: TimeUnit } | null"},required:!0},{name:"allowedUnits",type:{name:"TimeUnit[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeStepField.vue"]};export{Ge as default};
