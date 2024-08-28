import{d as B,b as V,c as M,w,y as b,z as v,A as y,B as r,C as E,L as a,M as S,N as q,I as m,J as k,K as D,F as H,m as U}from"./vue.esm-bundler--l9E1zCM.js";import{_ as L}from"./lodash-BiW_TGGX.js";import{F as N}from"./FSDialogMenu-gDsviTkt.js";import{F as c}from"./FSTextField-COs2079Q.js";import{F as P}from"./FSCalendar-DioZp26A.js";import{F as i}from"./FSButton-B-GBc2hj.js";import{F as T}from"./FSCard-CJMrkqFE.js";import{_ as p}from"./FSCol-BA_LQqMv.js";import{C as h}from"./useColors-Bv0V9Qz7.js";import{u as z}from"./useDateFormat-BeXuLiFb.js";import{u as A}from"./useRules-eaGGgTH2.js";import{u as I}from"./css-CqyMbT8T.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as J}from"./VMenu-DGJWui2w.js";const O=B({name:"FSDateField",components:{FSDialogMenu:N,FSTextField:c,FSCalendar:P,FSButton:i,FSCard:T,FSCol:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:h.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToLongDateFormat:$}=z(),{validateOn:F,getMessages:g}=A(),{isExtraSmall:C}=I(),d=V(!1),t=V(!1),n=V(e.modelValue),l=M(()=>g(e.modelValue,e.rules)),u=()=>{e.editable&&(d.value=!0)},s=()=>{o("update:modelValue",null),n.value=null},f=()=>{o("update:modelValue",n.value),d.value=!1,t.value=!1};return w(()=>e.modelValue,()=>{L.isEqual(n.value,e.modelValue)||(n.value=e.modelValue)}),{isExtraSmall:C,validateOn:F,ColorEnum:h,innerDate:n,messages:l,dialog:d,menu:t,epochToLongDateFormat:$,openMobileOverlay:u,onSubmit:f,onClear:s}}});function K(e,o,$,F,g,C){const d=b("FSCalendar"),t=b("FSDialogMenu"),n=b("FSCard");return v(),y(p,null,{default:r(()=>[e.isExtraSmall?(v(),E(H,{key:0},[a(c,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},S({"prepend-inner":r(()=>[m(e.$slots,"prepend-inner",{},()=>[a(i,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[q(e.$slots,(l,u)=>({name:u,fn:r(s=>[m(e.$slots,u,k(D(s)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),a(t,{modelValue:e.dialog,"onUpdate:modelValue":o[1]||(o[1]=l=>e.dialog=l)},{body:r(()=>[a(p,{width:"hug"},{default:r(()=>[a(d,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":o[0]||(o[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(i,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])],64)):(v(),y(J,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":o[3]||(o[3]=l=>e.menu=l)},{activator:r(({props:l})=>[a(c,U({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},l),S({"prepend-inner":r(()=>[m(e.$slots,"prepend-inner",{},()=>[a(i,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[q(e.$slots,(u,s)=>({name:s,fn:r(f=>[m(e.$slots,s,k(D(f)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:r(()=>[a(n,{padding:"8px",elevation:!0,border:!1},{default:r(()=>[a(p,{width:"hug"},{default:r(()=>[a(d,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":o[2]||(o[2]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(i,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"]))]),_:3})}const ne=R(O,[["render",K]]);O.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};export{ne as F};
