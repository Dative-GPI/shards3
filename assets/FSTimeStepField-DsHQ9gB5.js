import{d as h,c as i,y as n,z as w,A as B,B as s,L as p,m as U,M as S,N as F,I as g,J as c,K as $}from"./vue.esm-bundler-B8zP9crO.js";import H from"./FSNumberField-RrmqGNIV.js";import{F as N}from"./FSSelectField-DBZZmkoP.js";import{F as O}from"./FSBaseField-NTkLVYiV.js";import{_ as q}from"./FSRow-D-NDNvrc.js";import{b as y}from"./time-CFdfjaGn.js";import{u as T}from"./useRules-8tDFqsxq.js";import{u as A}from"./useSlots-D_RceZ7l.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-RqWidZvM.js";import"./FSButton-CSLtAyqZ.js";import"./FSClickable-CRLy4U08.js";import"./FSCard-BQ4UALgc.js";import"./FSCol-DXkP6ARl.js";import"./css-B1GBcH8c.js";import"./useColors-CHFZqh9D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./VProgressCircular-DxDQ8azE.js";import"./color-DErt19fL.js";import"./VIcon-FsSVL6vQ.js";import"./FSSpan-CVrAqAZB.js";import"./FSIcon-DoasTXhc.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./VSpacer-qnIi_Uu8.js";import"./FSDialogMenu-DKdGQhSx.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./FSSlideGroup-B6I8kdKO.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-BlitZcd6.js";import"./FSWrapGroup-iC8XkZDM.js";import"./FSCheckbox-CeNyMIyO.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CJxs5U7i.js";import"./VImg-nkm3QF3p.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-BildyJ8g.js";import"./VList-DrakP2K3.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-BmtbTONd.js";import"./VMenu-B8mF_lnI.js";import"./useTranslations-Dy1kwog1.js";const v=h({name:"FSTimeStepField",components:{FSNumberField:H,FSSelectField:N,FSBaseField:O,FSRow:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0},allowedUnits:{type:Array,required:!1,default:()=>[]},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:a,getMessages:f}=T(),{slots:t}=A();delete t.label,delete t.description;const b=i(()=>Object.keys(t).filter(l=>l.startsWith("number-")).reduce((l,r)=>(l[r.substring(7)]=t[r],l),{})),V=i(()=>Object.keys(t).filter(l=>l.startsWith("select-")).reduce((l,r)=>(l[r.substring(7)]=t[r],l),{})),u=i(()=>e.messages??f(e.modelValue,e.rules)),m=i(()=>e.allowedUnits&&e.allowedUnits.length?y.filter(l=>e.allowedUnits.includes(l.id)):y);return{numberSlots:b,selectSlots:V,validateOn:a,messages:u,units:m}}});function j(e,a,f,t,b,V){const u=n("FSNumberField"),m=n("FSSelectField"),l=n("FSBaseField");return w(),B(l,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:s(()=>[p(q,null,{default:s(()=>[p(u,U({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.$props.modelValue&&e.$props.modelValue.value||0,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",{value:r,unit:e.$props.modelValue&&e.$props.modelValue.unit||e.units[0].id}))},e.$attrs),S({_:2},[F(e.numberSlots,(r,o)=>({name:o,fn:s(d=>[g(e.$slots,o,c($(d)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue"]),p(m,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.units,modelValue:e.$props.modelValue&&e.$props.modelValue.unit||e.units[0].id,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",{value:e.$props.modelValue&&e.$props.modelValue.value||0,unit:r}))},S({_:2},[F(e.selectSlots,(r,o)=>({name:o,fn:s(d=>[g(e.$slots,o,c($(d)))])}))]),1032,["editable","items","modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const De=R(v,[["render",j]]);v.__docgenInfo={displayName:"FSTimeStepField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"{ value: number, unit: TimeUnit } | null"},required:!0},{name:"allowedUnits",type:{name:"TimeUnit[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeStepField.vue"]};export{De as default};
