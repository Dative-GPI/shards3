import{j as M,e as p,d as b,K as S,L as F,M as n,z as l,N as D,O as w,P as B,W as E,V as _}from"./vue.esm-bundler-a79f6a7e.js";import{_ as v}from"./FSButton-01495d76.js";import{_ as h}from"./FSSpan-6870f5d7.js";import{_ as C}from"./FSCol-bf5a0ca3.js";import{_ as k}from"./FSRow-997087e7.js";import{C as i,u as T}from"./useColors-060213ee.js";import{u as Y,a as z}from"./useAppTimeZone-230000f5.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{V as A,a as L}from"./VLocaleProvider-29c90575.js";const N=M({name:"FSCalendar",components:{FSButton:v,FSSpan:h,FSCol:C,FSRow:k},props:{label:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:g}){const{epochToPicker:s,pickerToEpoch:u,todayToEpoch:m}=Y(),{languageCode:f}=z(),{getColors:t}=T(),r=p(()=>t(e.color)),P=t(i.Background),V=t(i.Dark),a=b(e.modelValue?s(e.modelValue).getMonth():new Date().getMonth()),c=b(e.modelValue?s(e.modelValue).getFullYear():new Date().getFullYear()),$=p(()=>({"--fs-calendar-background-color":P.base,"--fs-calendar-hover-background-color":r.value.light,"--fs-calendar-active-background-color":r.value.base,"--fs-calendar-border-color":V.base,"--fs-calendar-hover-border-color":r.value.base,"--fs-calendar-active-border-color":r.value.base,"--fs-calendar-color":V.base,"--fs-calendar-hover-color":r.value.base,"--fs-calendar-active-color":r.value.light})),q=p(()=>{const o=new Date(0);return o.setMonth(a.value),o.setFullYear(c.value),new Intl.DateTimeFormat(f.value,{month:"long",year:"numeric"}).format(o)});return{ColorEnum:i,languageCode:f,style:$,text:q,innerMonth:a,innerYear:c,epochToPicker:s,pickerToEpoch:u,onClickPrevious:()=>{a.value>0?a.value--:(c.value--,a.value=11)},onClickNext:()=>{a.value<11?a.value++:(c.value++,a.value=0)},onClickDate:o=>{const y=o[0],d=u(y);g("update:modelValue",d)},allowedDates:o=>{const d=u(o);switch(e.limit){case"past":return d<=m(!0);case"future":return d>=m(!0);default:return!0}}}}});function j(e,g,s,u,m,f){return S(),F(C,null,{default:n(()=>[l(k,null,{default:n(()=>[e.$props.label?(S(),F(h,{key:0,class:"fs-calendar-label",font:"text-overline"},{default:n(()=>[D(w(e.$props.label),1)]),_:1})):B("",!0)]),_:1}),l(C,{class:"fs-calendar",style:_(e.style)},{default:n(()=>[l(k,{class:"fs-calendar-header",align:"center-center"},{default:n(()=>[l(v,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),l(h,{class:"fs-calendar-text",font:"text-h3"},{default:n(()=>[D(w(e.text),1)]),_:1}),l(v,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),E("div",{class:"fs-calendar-divider",style:_(e.style)},null,4),l(A,{locale:e.languageCode},{default:n(()=>[l(L,{month:e.innerMonth,year:e.innerYear,multiple:!1,showAdjacentMonths:!0,allowedDates:e.allowedDates,modelValue:[e.epochToPicker(e.$props.modelValue)],"onUpdate:modelValue":e.onClickDate,"onUpdate:month":t=>null,"onUpdate:year":t=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["style"])]),_:1})}const ae=U(N,[["render",j]]);N.__docgenInfo={displayName:"FSCalendar",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendar.vue"]};export{ae as F};