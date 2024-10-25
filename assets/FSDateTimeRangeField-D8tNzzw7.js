import{d as B,b as s,c as m,w,y as V,z as L,E as U,N as r,B as O,O as E,C as u,m as H,G as M,K as F,L as P,M as N}from"./vue.esm-bundler-l-siv0w9.js";import{F as z}from"./FSDialogSubmit-Cjzjndh_.js";import{F as j}from"./FSCalendarTwin-DK2nSJyy.js";import{F as y}from"./FSTextField-CaG6gJzS.js";import{F as S}from"./FSButton-DcUuAZqz.js";import{F as G}from"./FSClock-Dj8e7hmy.js";import{F as f}from"./FSCol-BvqytbKT.js";import{_ as C}from"./FSRow-CbEgVN08.js";import{C as b}from"./useColors-Bs2u1_6J.js";import{u as I}from"./useAppTimeZone-BUrTBgYP.js";import{u as K}from"./useDateFormat-CLdrxMO6.js";import{u as Z}from"./useRules-QHk8iD4m.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=B({name:"FSDateTimeRangeField",components:{FSDialogSubmit:z,FSCalendarTwin:j,FSTextField:y,FSButton:S,FSClock:G,FSCol:f,FSRow:C},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>null},color:{type:String,required:!1,default:b.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{getUserOffset:i}=I(),{epochToShortTimeFormat:v}=K(),{validateOn:c,getMessages:g}=Z(),t=s(!1),l=s(null),n=s(0),a=s(0),d=m(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(A=>v(A)).join(" - ")),p=m(()=>l.value&&Array.isArray(l.value)&&l.value.length?l.value[0]:null),$=m(()=>l.value&&Array.isArray(l.value)&&l.value.length>1?l.value[1]:null),q=m(()=>g(e.modelValue,e.rules,!0)),T=()=>{e.editable&&(t.value=!0)},k=()=>{o("update:modelValue",null),a.value=0,n.value=0,l.value=null},D=()=>{l.value&&Array.isArray(l.value)&&l.value.length>1&&o("update:modelValue",[l.value[0]+a.value,l.value[1]+n.value]),t.value=!1},R=()=>{if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:{a.value=Math.floor((e.modelValue[0]+i(e.modelValue[0]))%(24*60*60*1e3)),l.value=[e.modelValue[0]-a.value];break}default:{a.value=Math.floor((e.modelValue[0]+i(e.modelValue[0]))%(24*60*60*1e3)),n.value=Math.floor((e.modelValue[1]+i(e.modelValue[0]))%(24*60*60*1e3)),l.value=[e.modelValue[0]-a.value,e.modelValue[1]-n.value];break}}else l.value=null,a.value=0,n.value=0};return w(()=>e.modelValue,()=>{R()},{immediate:!0}),{toShortTimeFormat:d,innerDateLeft:p,innerTimeLeft:a,innerDateRight:$,innerTimeRight:n,innerDateRange:l,validateOn:c,ColorEnum:b,messages:q,dialog:t,onSubmit:D,onClear:k,onClick:T}}});function Q(e,o,i,v,c,g){const t=V("FSCalendarTwin"),l=V("FSClock"),n=V("FSDialogSubmit");return L(),U(M,null,[r(y,H({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortTimeFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},e.$attrs),O({"prepend-inner":u(()=>[F(e.$slots,"prepend-inner",{},()=>[r(S,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[E(e.$slots,(a,d)=>({name:d,fn:u(p=>[F(e.$slots,d,P(N(p)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),r(n,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":o[3]||(o[3]=a=>e.dialog=a)},{body:u(()=>[r(f,null,{default:u(()=>[r(t,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":o[0]||(o[0]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),r(C,null,{default:u(()=>[r(f,null,{default:u(()=>[r(l,{color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":o[1]||(o[1]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"])]),_:1}),r(f,null,{default:u(()=>[r(l,{color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":o[2]||(o[2]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const ie=J(h,[["render",Q]]);h.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!0,value:"() => null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeRangeField.vue"]};export{ie as F};