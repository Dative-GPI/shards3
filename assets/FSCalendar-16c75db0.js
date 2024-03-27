import{j as $,e as f,d as y,K as V,L as b,M as n,z as o,N as S,O as F,P as q,W as E,V as w}from"./vue.esm-bundler-37de1696.js";import{_ as p}from"./FSButton-a83f398c.js";import{_ as v}from"./FSSpan-9700c9e2.js";import{_ as h}from"./FSCol-4074aa47.js";import{_ as C}from"./FSRow-fc81033b.js";import{C as d,u as M}from"./useColors-ba22af06.js";import{u as T,a as B}from"./useAppTimeZone-ef2c4017.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z,a as A}from"./VLocaleProvider-20b4cb95.js";const D=$({name:"FSCalendar",components:{FSButton:p,FSSpan:v,FSCol:h,FSRow:C},props:{label:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:d.Primary},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e){const{epochToPicker:r,pickerToEpoch:c,todayToEpoch:i}=T(),{languageCode:m}=B(),{getColors:s}=M(),a=f(()=>s(e.color)),N=s(d.Background),g=s(d.Dark),l=y(e.modelValue?r(e.modelValue).getMonth():new Date().getMonth()),u=y(e.modelValue?r(e.modelValue).getFullYear():new Date().getFullYear()),_=f(()=>({"--fs-calendar-background-color":N.base,"--fs-calendar-hover-background-color":a.value.light,"--fs-calendar-active-background-color":a.value.base,"--fs-calendar-border-color":g.base,"--fs-calendar-hover-border-color":a.value.base,"--fs-calendar-active-border-color":a.value.base,"--fs-calendar-color":g.base,"--fs-calendar-hover-color":a.value.base,"--fs-calendar-active-color":a.value.light})),P=f(()=>{const t=new Date(0);return t.setMonth(l.value),t.setFullYear(u.value),new Intl.DateTimeFormat(m.value,{month:"long",year:"numeric"}).format(t)});return{ColorEnum:d,languageCode:m,style:_,text:P,innerMonth:l,innerYear:u,epochToPicker:r,pickerToEpoch:c,onClickPrevious:()=>{l.value>0?l.value--:(u.value--,l.value=11)},onClickNext:()=>{l.value<11?l.value++:(u.value++,l.value=0)},allowedDates:t=>{const k=c(t);switch(e.limit){case"past":return k<=i(!0);case"future":return k>=i(!0);default:return!0}}}}});function L(e,r,c,i,m,s){return V(),b(h,null,{default:n(()=>[o(C,null,{default:n(()=>[e.$props.label?(V(),b(v,{key:0,class:"fs-calendar-label",font:"text-overline"},{default:n(()=>[S(F(e.$props.label),1)]),_:1})):q("",!0)]),_:1}),o(h,{class:"fs-calendar",style:w(e.style)},{default:n(()=>[o(C,{class:"fs-calendar-header",align:"center-center"},{default:n(()=>[o(p,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),o(v,{class:"fs-calendar-text",font:"text-h3"},{default:n(()=>[S(F(e.text),1)]),_:1}),o(p,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),E("div",{class:"fs-calendar-divider",style:w(e.style)},null,4),o(z,{locale:e.languageCode},{default:n(()=>[o(A,{month:e.innerMonth,year:e.innerYear,multiple:!1,showAdjacentMonths:!0,allowedDates:e.allowedDates,modelValue:e.epochToPicker(e.$props.modelValue),"onUpdate:modelValue":r[0]||(r[0]=a=>e.$emit("update:modelValue",e.pickerToEpoch(a[0]))),"onUpdate:month":a=>null,"onUpdate:year":a=>null},null,8,["month","year","allowedDates","modelValue"])]),_:1},8,["locale"])]),_:1},8,["style"])]),_:1})}const X=Y(D,[["render",L]]);D.__docgenInfo={displayName:"FSCalendar",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendar.vue"]};export{X as F};
