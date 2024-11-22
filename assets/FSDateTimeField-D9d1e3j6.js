import{d as H,b as p,c as P,w as q,A as V,B as $,C as k,E as r,G as N,P as o,D as T,Q as D,M as v,N as h,O as w,I as L,j as A}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as I}from"./VList-nN2lrumh.js";import{F}from"./FSTextField-BcsUOOXo.js";import{F as R}from"./FSCalendar-BcYhQiAU.js";import{F as g}from"./FSWindow-CJWM8-SG.js";import{F as t}from"./FSButton-BzTwanlk.js";import{F as j}from"./FSClock-JqOYgj7G.js";import{F as z}from"./FSCard-4bilSlvW.js";import{F as m}from"./FSCol-DLyNVOXQ.js";import{C as O}from"./useColors-Cz5tOQmp.js";import{u as G}from"./useAppTimeZone-F2KFQp0H.js";import{u as Q}from"./useDateFormat-CYsDMoti.js";import{u as W}from"./useRules-CvuqAlPS.js";import{u as Z}from"./useBreakpoints-IB1lZo1P.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as K}from"./VMenu-C3kJxa_y.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./color-mm3JSYKM.js";import"./theme-DppimMvq.js";import"./proxiedModel-Xz4IZg0a.js";import"./anchor-BS5WaiJh.js";import"./dimensions-BWgpWc0X.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./locale-Beavd5eP.js";import"./router-DnAkll3L.js";import"./transition-shOmLEJh.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./index-D14OnwAh.js";import"./VIcon-DsLd3bsf.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./VField-BtCsV974.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./FSSelectField-ChNtQfMF.js";import"./FSSlideGroup-CtBhRuPR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./FSCheckbox-CunxM6rm.js";import"./FSIcon-CKEWDmaC.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./useAppLanguageCode-DjpqeQYI.js";import"./VLocaleProvider-BOBWKwQe.js";import"./VBtn-CKg6JYm3.js";import"./FSText-DqK2dTtm.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSSlider-BqRP0F7G.js";import"./VSlider-B_AKVe6L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-DN7QCs30.js";const U=H({name:"FSDateTimeField",components:{FSDialogMenu:I,FSTextField:F,FSCalendar:R,FSWindow:g,FSButton:t,FSClock:j,FSCard:z,FSCol:m},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:O.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{getUserOffset:C}=G(),{epochToLongTimeFormat:c}=Q(),{validateOn:S,getMessages:y}=W(),{isExtraSmall:f}=Z(),n=p(!1),u=p(!1),s=p(0),l=p(null),i=p(0),d=P(()=>y(e.modelValue,e.rules)),b=()=>{e.editable&&(n.value=!0)},B=()=>{a("update:modelValue",null),l.value=null,i.value=0},M=()=>{a("update:modelValue",(l.value??0)+i.value),n.value=!1,u.value=!1},E=()=>{e.modelValue?(i.value=Math.floor((e.modelValue+C(e.modelValue))%(24*60*60*1e3)),l.value=e.modelValue-i.value):(l.value=null,i.value=0)};return q(()=>e.modelValue,()=>{E()},{immediate:!0}),q([u,n],()=>{!u.value&&!n.value&&setTimeout(()=>s.value=0,290)}),{isExtraSmall:f,validateOn:S,ColorEnum:O,innerDate:l,innerTime:i,messages:d,dialog:n,menu:u,tabs:s,epochToLongTimeFormat:c,openMobileOverlay:b,onSubmit:M,onClear:B}}});function X(e,a,C,c,S,y){const f=V("FSCalendar"),n=V("FSClock"),u=V("FSDialogMenu"),s=V("FSCard");return $(),k(m,null,{default:r(()=>[e.isExtraSmall?($(),N(L,{key:0},[o(F,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(t,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[D(e.$slots,(l,i)=>({name:i,fn:r(d=>[v(e.$slots,i,h(w(d)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),o(u,{modelValue:e.dialog,"onUpdate:modelValue":a[3]||(a[3]=l=>e.dialog=l)},{body:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(m,{width:"hug",value:0},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[1]||(a[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1}),o(m,{width:"hug",value:1},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[2]||(a[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)):($(),k(K,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[7]||(a[7]=l=>e.menu=l)},{activator:r(({props:l})=>[o(F,A({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},l),T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(t,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[D(e.$slots,(i,d)=>({name:d,fn:r(b=>[v(e.$slots,d,h(w(b)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(s,{padding:"8px",elevation:!0,border:!1,value:0},{default:r(()=>[o(m,{width:"fill"},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[4]||(a[4]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[5]||(a[5]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(s,{padding:"8px",elevation:!0,border:!1,value:1},{default:r(()=>[o(m,{width:"hug"},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[6]||(a[6]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(t,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"]))]),_:3})}const kl=J(U,[["render",X]]);U.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};export{kl as default};
