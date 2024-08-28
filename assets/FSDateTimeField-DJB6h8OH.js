import{d as E,b as p,c as L,w as q,y as V,z as $,A as k,B as r,C as N,L as o,M as T,N as h,I as v,J as D,K as w,F as P,m as A}from"./vue.esm-bundler--l9E1zCM.js";import{F as z}from"./FSDialogMenu-gDsviTkt.js";import{F}from"./FSTextField-COs2079Q.js";import{F as I}from"./FSCalendar-DioZp26A.js";import{F as g}from"./FSWindow-SAzokL0I.js";import{F as u}from"./FSButton-B-GBc2hj.js";import{F as R}from"./FSClock-CQ7jC5JX.js";import{F as J}from"./FSCard-CJMrkqFE.js";import{_ as s}from"./FSCol-BA_LQqMv.js";import{C as O}from"./useColors-Bv0V9Qz7.js";import{u as K}from"./useAppTimeZone-D5nI5Dd_.js";import{u as W}from"./useDateFormat-BeXuLiFb.js";import{u as Z}from"./useRules-eaGGgTH2.js";import{u as j}from"./css-CqyMbT8T.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Q}from"./VMenu-DGJWui2w.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DkN3uAGq.js";import"./theme-uJWLcFzd.js";import"./proxiedModel-DBJRU-Dx.js";import"./anchor-CJDpEDtq.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./locale-DRqPrS0N.js";import"./router-B0OmHOdA.js";import"./transition-CYrBIr8o.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./FSBaseField-W8_0_iOs.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSRow-DW_Nd3uI.js";import"./VSpacer-CY3ZXRlU.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./VIcon-CRzxwZ_P.js";import"./density-BES7uE0q.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./VProgressCircular-DiflYTWZ.js";import"./rounded-B2xBfeOT.js";import"./index-CDY7nOpr.js";import"./useAppLanguageCode-0juUkaeD.js";import"./VLocaleProvider-D_HuLimP.js";import"./VBtn-Drw7FOOP.js";import"./border-CWknNQjA.js";import"./elevation-Cf1uc8UZ.js";import"./group-DYO-GdsM.js";import"./index-mEzhRiE5.js";import"./ssrBoot-De1byr4N.js";import"./FSClickable-wwot-1GZ.js";import"./FSIcon-DBiV-GrJ.js";import"./FSSlider-YjxHgKLs.js";import"./VSlider-D85pQrEK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./useTranslations-ByKtt_-5.js";const U=E({name:"FSDateTimeField",components:{FSDialogMenu:z,FSTextField:F,FSCalendar:I,FSWindow:g,FSButton:u,FSClock:R,FSCard:J,FSCol:s},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:O.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{getUserOffset:C}=K(),{epochToLongTimeFormat:c}=W(),{validateOn:S,getMessages:y}=Z(),{isExtraSmall:f}=j(),n=p(!1),d=p(!1),m=p(0),l=p(null),i=p(0),t=L(()=>y(e.modelValue,e.rules)),b=()=>{e.editable&&(n.value=!0)},B=()=>{a("update:modelValue",null),l.value=null,i.value=0},M=()=>{a("update:modelValue",(l.value??0)+i.value),n.value=!1,d.value=!1},H=()=>{e.modelValue?(i.value=Math.floor((e.modelValue+C())%(24*60*60*1e3)),l.value=e.modelValue-i.value):(l.value=null,i.value=0)};return q(()=>e.modelValue,()=>{H()},{immediate:!0}),q([d,n],()=>{!d.value&&!n.value&&setTimeout(()=>m.value=0,290)}),{isExtraSmall:f,validateOn:S,ColorEnum:O,innerDate:l,innerTime:i,messages:t,dialog:n,menu:d,tabs:m,epochToLongTimeFormat:c,openMobileOverlay:b,onSubmit:M,onClear:B}}});function X(e,a,C,c,S,y){const f=V("FSCalendar"),n=V("FSClock"),d=V("FSDialogMenu"),m=V("FSCard");return $(),k(s,null,{default:r(()=>[e.isExtraSmall?($(),N(P,{key:0},[o(F,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[h(e.$slots,(l,i)=>({name:i,fn:r(t=>[v(e.$slots,i,D(w(t)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),o(d,{modelValue:e.dialog,"onUpdate:modelValue":a[3]||(a[3]=l=>e.dialog=l)},{body:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(s,{width:"hug",value:0},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[1]||(a[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1}),o(s,{width:"hug",value:1},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[2]||(a[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)):($(),k(Q,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[7]||(a[7]=l=>e.menu=l)},{activator:r(({props:l})=>[o(F,A({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},l),T({"prepend-inner":r(()=>[v(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[h(e.$slots,(i,t)=>({name:t,fn:r(b=>[v(e.$slots,t,D(w(b)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:r(()=>[o(g,{modelValue:e.tabs},{default:r(()=>[o(m,{padding:"8px",elevation:!0,border:!1,value:0},{default:r(()=>[o(s,{width:"fill"},{default:r(()=>[o(f,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[4]||(a[4]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:a[5]||(a[5]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(m,{padding:"8px",elevation:!0,border:!1,value:1},{default:r(()=>[o(s,{width:"hug"},{default:r(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":a[6]||(a[6]=l=>e.innerTime=l)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"]))]),_:3})}const rl=G(U,[["render",X]]);U.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};export{rl as default};