import{d as B,b as s,c as m,w,y as v,z as L,C as U,L as r,M as H,N as M,B as u,m as O,F as P,I as F,J as E,K as N}from"./vue.esm-bundler-CxS4_7kK.js";import{F as z}from"./FSDialogSubmit-CDA1TuTR.js";import{F as I}from"./FSCalendarTwin-B3_NagsG.js";import{F as y}from"./FSTextField-DxJVxYys.js";import{F as S}from"./FSButton-D4qgd2ja.js";import{F as j}from"./FSClock-kIzA0zlG.js";import{F as f}from"./FSCol-Co9r7Klj.js";import{_ as C}from"./FSRow-D546kqFt.js";import{C as b}from"./useColors-CVdO3CcM.js";import{u as J}from"./useAppTimeZone-CIW33DGM.js";import{u as K}from"./useDateFormat-3O5RagjD.js";import{u as Z}from"./useRules-o706rtr1.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=B({name:"FSDateTimeRangeField",components:{FSDialogSubmit:z,FSCalendarTwin:I,FSTextField:y,FSButton:S,FSClock:j,FSCol:f,FSRow:C},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>null},color:{type:String,required:!1,default:b.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{getUserOffset:i}=J(),{epochToShortTimeFormat:V}=K(),{validateOn:c,getMessages:g}=Z(),t=s(!1),l=s(null),n=s(0),a=s(0),d=m(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(A=>V(A)).join(" - ")),p=m(()=>l.value&&Array.isArray(l.value)&&l.value.length?l.value[0]:null),$=m(()=>l.value&&Array.isArray(l.value)&&l.value.length>1?l.value[1]:null),q=m(()=>g(e.modelValue,e.rules,!0)),T=()=>{e.editable&&(t.value=!0)},k=()=>{o("update:modelValue",null),a.value=0,n.value=0,l.value=null},D=()=>{l.value&&Array.isArray(l.value)&&l.value.length>1&&o("update:modelValue",[l.value[0]+a.value,l.value[1]+n.value]),t.value=!1},R=()=>{if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:{a.value=Math.floor((e.modelValue[0]+i())%(24*60*60*1e3)),l.value=[e.modelValue[0]-a.value];break}default:{a.value=Math.floor((e.modelValue[0]+i())%(24*60*60*1e3)),n.value=Math.floor((e.modelValue[1]+i())%(24*60*60*1e3)),l.value=[e.modelValue[0]-a.value,e.modelValue[1]-n.value];break}}else l.value=null,a.value=0,n.value=0};return w(()=>e.modelValue,()=>{R()},{immediate:!0}),{toShortTimeFormat:d,innerDateLeft:p,innerTimeLeft:a,innerDateRight:$,innerTimeRight:n,innerDateRange:l,validateOn:c,ColorEnum:b,messages:q,dialog:t,onSubmit:D,onClear:k,onClick:T}}});function Q(e,o,i,V,c,g){const t=v("FSCalendarTwin"),l=v("FSClock"),n=v("FSDialogSubmit");return L(),U(P,null,[r(y,O({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortTimeFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},e.$attrs),H({"prepend-inner":u(()=>[F(e.$slots,"prepend-inner",{},()=>[r(S,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[M(e.$slots,(a,d)=>({name:d,fn:u(p=>[F(e.$slots,d,E(N(p)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),r(n,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":o[3]||(o[3]=a=>e.dialog=a)},{body:u(()=>[r(f,null,{default:u(()=>[r(t,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":o[0]||(o[0]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),r(C,null,{default:u(()=>[r(f,null,{default:u(()=>[r(l,{color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":o[1]||(o[1]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"])]),_:1}),r(f,null,{default:u(()=>[r(l,{color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":o[2]||(o[2]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const ie=G(h,[["render",Q]]);h.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!0,value:"() => null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeRangeField.vue"]};export{ie as F};
