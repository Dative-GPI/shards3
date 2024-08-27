import{d as E,b as p,c as L,w as q,y as V,z as $,A as k,B as r,C as N,L as o,M as T,N as h,I as v,J as D,K as w,F as P,m as A}from"./vue.esm-bundler-B8zP9crO.js";import{F as z}from"./FSDialogMenu-DKdGQhSx.js";import{F}from"./FSTextField-RqWidZvM.js";import{F as I}from"./FSCalendar-I5OdNpXD.js";import{F as g}from"./FSWindow-BiROX96o.js";import{F as u}from"./FSButton-CSLtAyqZ.js";import{F as R}from"./FSClock-CRaVT9Hp.js";import{F as J}from"./FSCard-BQ4UALgc.js";import{_ as s}from"./FSCol-DXkP6ARl.js";import{C as O}from"./useColors-CHFZqh9D.js";import{u as K}from"./useAppTimeZone-YFQ3g-8z.js";import{u as W}from"./useRules-8tDFqsxq.js";import{u as Z}from"./css-B1GBcH8c.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as G}from"./VMenu-B8mF_lnI.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DErt19fL.js";import"./theme-DtZVHDBt.js";import"./proxiedModel-odqKlXbh.js";import"./anchor-OrAzIpfB.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./locale-FYv4GhYY.js";import"./router-BFpFBb4L.js";import"./transition-CsS1sKoI.js";import"./VDefaultsProvider-NbOoODyK.js";import"./FSBaseField-NTkLVYiV.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSRow-D-NDNvrc.js";import"./VSpacer-qnIi_Uu8.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./VIcon-FsSVL6vQ.js";import"./density-DkfqnNyD.js";import"./loader-B8FgLuVw.js";import"./VProgressCircular-DxDQ8azE.js";import"./rounded-Bso5Gdmg.js";import"./index-vockUB0G.js";import"./useAppLanguageCode-DDLio0r9.js";import"./VLocaleProvider-Dd-inrNj.js";import"./VBtn-CeVXW7Ts.js";import"./border-BWgmXatz.js";import"./elevation-B_HXnKlm.js";import"./group-C3Zad-0v.js";import"./index-D-9FNlZD.js";import"./ssrBoot-DcIjCPDT.js";import"./FSClickable-CRLy4U08.js";import"./FSIcon-DoasTXhc.js";import"./FSSlider-BKvANmoR.js";import"./VSlider-5f3iIbpt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./useTranslations-Dy1kwog1.js";const U=E({name:"FSDateTimeField",components:{FSDialogMenu:z,FSTextField:F,FSCalendar:I,FSWindow:g,FSButton:u,FSClock:R,FSCard:J,FSCol:s},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:O.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{epochToLongTimeFormat:C,getOffsetUser:c}=K(),{validateOn:S,getMessages:y}=W(),{isExtraSmall:f}=Z(),n=p(!1),d=p(!1),m=p(0),l=p(null),i=p(0),t=L(()=>y(e.modelValue,e.rules)),b=()=>{e.editable&&(n.value=!0)},B=()=>{a("update:modelValue",null),l.value=null,i.value=0},M=()=>{a("update:modelValue",(l.value??0)+i.value),n.value=!1,d.value=!1},H=()=>{e.modelValue?(i.value=Math.floor((e.modelValue+c())%(24*60*60*1e3)),l.value=e.modelValue-i.value):(l.value=null,i.value=0)};return q(()=>e.modelValue,()=>{H()},{immediate:!0}),q([d,n],()=>{!d.value&&!n.value&&setTimeout(()=>m.value=0,290)}),{isExtraSmall:f,validateOn:S,ColorEnum:O,innerDate:l,innerTime:i,messages:t,dialog:n,menu:d,tabs:m,epochToLongTimeFormat:C,openMobileOverlay:b,onSubmit:M,onClear:B}}});function Q(e,a,C,c,S,y){const f=V("FSCalendar"),n=V("FSClock"),d=V("FSDialogMenu"),m=V("FSCard");return $(),k(s,null,{default:r(()=>[e.isExtraSmall?($(),N(P,{key:0},[o(F,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[h(e.$slots,(l,i)=>({name:i,fn:r(t=>[v(e.$slots,i,D(w(t)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),o(d,{modelValue:e.dialog,"onUpdate:modelValue":a[3]||(a[3]=l=>e.dialog=l)},{body:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(s,{width:"hug",value:0},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[1]||(a[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1}),o(s,{width:"hug",value:1},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[2]||(a[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)):($(),k(G,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[7]||(a[7]=l=>e.menu=l)},{activator:r(({props:l})=>[o(F,A({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},l),T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[h(e.$slots,(i,t)=>({name:t,fn:r(b=>[v(e.$slots,t,D(w(b)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(m,{padding:"8px",elevation:!0,border:!1,value:0},{default:r(()=>[o(s,{width:"fill"},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[4]||(a[4]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[5]||(a[5]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(m,{padding:"8px",elevation:!0,border:!1,value:1},{default:r(()=>[o(s,{width:"hug"},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[6]||(a[6]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"]))]),_:3})}const ll=j(U,[["render",Q]]);U.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};export{ll as default};
