import{d as E,b as y,c as m,g as T,z as V,A as b,C as n,N as o,H as F,I as D,F as A,W as Y,P as S}from"./vue.esm-bundler-CWdIlc2r.js";import{F as p}from"./FSButton-Bc8wnoJs.js";import{_ as v}from"./FSSpan-Bnbdrku6.js";import{F as h}from"./FSCol-CvoATp5Q.js";import{_ as g}from"./FSRow-BnsweOMX.js";import{C as c,u as z}from"./useColors-CrLBSafx.js";import{u as U}from"./useDateFormat-zHupOjLO.js";import{u as I}from"./useAppLanguageCode-j4W_rwpi.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as R,a as j}from"./VLocaleProvider-DsgXQQ9Y.js";const w=E({name:"FSCalendar",components:{FSButton:p,FSSpan:v,FSCol:h,FSRow:g},props:{label:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:c.Primary},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:C}){const{epochToPicker:d,pickerToEpoch:t,todayToEpoch:i}=U(),{languageCode:f}=I(),{getColors:s}=z(),l=y(new Date().getMonth()),u=y(new Date().getFullYear()),r=m(()=>s(e.color)),N=s(c.Background),k=s(c.Dark),P=m(()=>({"--fs-calendar-background-color":N.base,"--fs-calendar-hover-background-color":r.value.light,"--fs-calendar-active-background-color":r.value.base,"--fs-calendar-border-color":k.base,"--fs-calendar-hover-border-color":r.value.base,"--fs-calendar-active-border-color":r.value.base,"--fs-calendar-color":k.base,"--fs-calendar-hover-color":r.value.base,"--fs-calendar-active-color":r.value.light})),$=m(()=>{const a=new Date(0);return a.setMonth(l.value),a.setFullYear(u.value),new Intl.DateTimeFormat(f.value,{month:"long",year:"numeric"}).format(a)}),q=()=>{l.value>0?l.value--:(u.value--,l.value=11)},M=()=>{l.value<11?l.value++:(u.value++,l.value=0)},_=a=>{!Array.isArray(a)||!(a[0]instanceof Date)||C("update:modelValue",t(a[0]))},B=a=>{if(!(a instanceof Date))return!1;switch(e.limit){case"past":return t(a)<=i();case"future":return t(a)>=i();default:return!0}};return T(()=>{e.modelValue&&(l.value=d(e.modelValue).getMonth(),u.value=d(e.modelValue).getFullYear())}),{ColorEnum:c,languageCode:f,style:P,text:$,innerMonth:l,innerYear:u,epochToPicker:d,pickerToEpoch:t,onClickPrevious:q,onClickNext:M,onClickDate:_,allowedDates:B}}});function H(e,C,d,t,i,f){return V(),b(h,{width:"hug"},{default:n(()=>[o(g,null,{default:n(()=>[e.$props.label?(V(),b(v,{key:0,class:"fs-calendar-label",font:"text-overline"},{default:n(()=>[F(D(e.$props.label),1)]),_:1})):A("",!0)]),_:1}),o(h,{class:"fs-calendar",height:["380px","375px"],style:S(e.style)},{default:n(()=>[o(g,{class:"fs-calendar-header",align:"center-center"},{default:n(()=>[o(p,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),o(v,{class:"fs-calendar-text",font:"text-h3"},{default:n(()=>[F(D(e.text),1)]),_:1}),o(p,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),Y("div",{class:"fs-calendar-divider",style:S(e.style)},null,4),o(R,{locale:e.languageCode},{default:n(()=>[o(j,{month:e.innerMonth,year:e.innerYear,multiple:!1,showAdjacentMonths:!0,allowedDates:e.allowedDates,modelValue:[e.epochToPicker(e.$props.modelValue)],"onUpdate:modelValue":e.onClickDate,"onUpdate:month":s=>null,"onUpdate:year":s=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["style"])]),_:1})}const ae=L(w,[["render",H]]);w.__docgenInfo={displayName:"FSCalendar",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendar.vue"]};export{ae as F};