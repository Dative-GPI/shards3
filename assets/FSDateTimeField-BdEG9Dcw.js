import{d as H,b as p,c as L,w as q,y as V,z as $,A as k,C as r,E as N,N as o,B as T,O as h,K as v,L as D,M as w,G as P,m as A}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as z}from"./VList-BsRjN0ZI.js";import{F}from"./FSTextField-ECMlyBTY.js";import{F as R}from"./FSCalendar-DyuR8JTx.js";import{F as g}from"./FSWindow-ed6WJT5P.js";import{F as t}from"./FSButton-DZMcpMR1.js";import{F as G}from"./FSClock-Dkr4hzr5.js";import{F as I}from"./FSCard-Bfo4Z0Zf.js";import{F as m}from"./FSCol-D8gLxM2E.js";import{C as O}from"./useColors-DnoeDx-P.js";import{u as K}from"./useAppTimeZone-Bno6Crzp.js";import{u as W}from"./useDateFormat-DxxoI3Q6.js";import{u as Z}from"./useRules-BfiZMl38.js";import{u as j}from"./useBreakpoints-BMg9gIvD.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Q}from"./VMenu-CkU-g4Hp.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DdAXPAA0.js";import"./theme-D55tBrU4.js";import"./proxiedModel-BYnu2EOK.js";import"./anchor-BdD5yCeG.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./locale-CA7yUTVs.js";import"./router-C4YP2PAT.js";import"./transition-BtBp4lzQ.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./index-B-qTxNvr.js";import"./VIcon-zho7mIKV.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./density-B5LNz2JK.js";import"./elevation-BNOJtsSY.js";import"./rounded-BoPqla0T.js";import"./index-BF2Ge4Ib.js";import"./VImg-Bi-pKvLj.js";import"./index-lTYthPHq.js";import"./FSBaseField-BXJBXTur.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSRow-CSQtiyAx.js";import"./css-CxoeZkpP.js";import"./VField-DrieYqTb.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./FSSelectField-WQNi82Nz.js";import"./FSSlideGroup-8udoapu6.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-CjZBl77R.js";import"./FSWrapGroup-DCzWuvHX.js";import"./FSCheckbox-3iIuKfLX.js";import"./FSIcon-DfjSexyz.js";import"./VSelectionControl-DbX2q5FD.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSLoader-PksHGtEK.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./useAppLanguageCode-C2XicOK_.js";import"./VLocaleProvider-BeLlKx4R.js";import"./VBtn-GP0Uljy4.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./FSSlider-CjZEqTOh.js";import"./VSlider-yf_hyjT_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-DgvmBCqU.js";const U=H({name:"FSDateTimeField",components:{FSDialogMenu:z,FSTextField:F,FSCalendar:R,FSWindow:g,FSButton:t,FSClock:G,FSCard:I,FSCol:m},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:O.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{getUserOffset:C}=K(),{epochToLongTimeFormat:c}=W(),{validateOn:y,getMessages:S}=Z(),{isExtraSmall:f}=j(),n=p(!1),u=p(!1),s=p(0),l=p(null),i=p(0),d=L(()=>S(e.modelValue,e.rules)),b=()=>{e.editable&&(n.value=!0)},B=()=>{a("update:modelValue",null),l.value=null,i.value=0},M=()=>{a("update:modelValue",(l.value??0)+i.value),n.value=!1,u.value=!1},E=()=>{e.modelValue?(i.value=Math.floor((e.modelValue+C(e.modelValue))%(24*60*60*1e3)),l.value=e.modelValue-i.value):(l.value=null,i.value=0)};return q(()=>e.modelValue,()=>{E()},{immediate:!0}),q([u,n],()=>{!u.value&&!n.value&&setTimeout(()=>s.value=0,290)}),{isExtraSmall:f,validateOn:y,ColorEnum:O,innerDate:l,innerTime:i,messages:d,dialog:n,menu:u,tabs:s,epochToLongTimeFormat:c,openMobileOverlay:b,onSubmit:M,onClear:B}}});function X(e,a,C,c,y,S){const f=V("FSCalendar"),n=V("FSClock"),u=V("FSDialogMenu"),s=V("FSCard");return $(),k(m,null,{default:r(()=>[e.isExtraSmall?($(),N(P,{key:0},[o(F,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(t,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[h(e.$slots,(l,i)=>({name:i,fn:r(d=>[v(e.$slots,i,D(w(d)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),o(u,{modelValue:e.dialog,"onUpdate:modelValue":a[3]||(a[3]=l=>e.dialog=l)},{body:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(m,{width:"hug",value:0},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[1]||(a[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1}),o(m,{width:"hug",value:1},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[2]||(a[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)):($(),k(Q,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[7]||(a[7]=l=>e.menu=l)},{activator:r(({props:l})=>[o(F,A({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},l),T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(t,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[h(e.$slots,(i,d)=>({name:d,fn:r(b=>[v(e.$slots,d,D(w(b)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(s,{padding:"8px",elevation:!0,border:!1,value:0},{default:r(()=>[o(m,{width:"fill"},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[4]||(a[4]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[5]||(a[5]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(s,{padding:"8px",elevation:!0,border:!1,value:1},{default:r(()=>[o(m,{width:"hug"},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[6]||(a[6]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"]))]),_:3})}const ql=J(U,[["render",X]]);U.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};export{ql as default};
