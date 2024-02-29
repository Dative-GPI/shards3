import{E as w,e as y,d as k,w as B,Z as T,H as b,I as h,J as n,z as o,K as U,R as S,M as c,N as g}from"./vue.esm-bundler-a27e881e.js";import{F as v}from"./FSTextField-9e0cc675.js";import{F as D}from"./FSSlider-501a76cc.js";import{_ as f}from"./FSCol-5941d279.js";import{_ as M}from"./FSRow-e0b07355.js";import{C as m,u as E}from"./useColors-64c3c523.js";import{u as L}from"./useTimeZone-035f95ae.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as F}from"./FSSpan-23926a6a.js";import{V as C}from"./VTextField-9d0c72c8.js";const $=w({name:"FSClock",components:{FSTextField:v,FSSlider:D,FSCol:f,FSRow:M},props:{modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:m.Primary},date:{type:Number,required:!1,default:null},reminder:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{epochToLongDateFormat:p}=L(),{getColors:t}=E(),s=y(()=>t(e.color)),V=t(m.Background),r=t(m.Light),u=t(m.Dark),d=k(e.modelValue?Math.floor(e.modelValue/(60*60*1e3)):0),i=k(e.modelValue?Math.floor(e.modelValue%(60*60*1e3)/(60*1e3)):0),q=y(()=>e.editable?{"--fs-clock-field-cursor":"text","--fs-clock-field-background-color":s.value.light,"--fs-clock-field-border-color":s.value.base,"--fs-clock-field-color":u.base,"--fs-clock-field-active-border-color":s.value.dark}:{"--fs-clock-field-cursor":"default","--fs-clock-field-background-color":V.base,"--fs-clock-field-border-color":r.base,"--fs-clock-field-color":r.dark,"--fs-clock-field-active-border-color":r.base}),H=l=>{l=Math.min(23,Math.max(0,l)),d.value=l},N=l=>{l=Math.min(59,Math.max(0,l)),i.value=l};return B([d,i],()=>{a("update:modelValue",d.value*60*60*1e3+i.value*60*1e3)}),{style:q,innerHours:d,innerMinutes:i,onChangeHours:H,onChangeMinutes:N,epochToLongDateFormat:p}}});function _(e,a,p,t,s,V){const r=T("FSSlider");return b(),h(f,{width:"fill",gap:"16px"},{default:n(()=>[o(M,{align:"center-center"},{default:n(()=>[e.$props.reminder?(b(),h(v,{key:0,readonly:!0,hideHeader:!0,modelValue:e.epochToLongDateFormat(e.$props.date)},null,8,["modelValue"])):U("",!0),o(C,{class:"fs-clock-field",variant:"outlined",type:"number","hide-details":"",style:S(e.style),readonly:!e.$props.editable,modelValue:e.innerHours.toString().padStart(2,"0"),"onUpdate:modelValue":e.onChangeHours},null,8,["style","readonly","modelValue","onUpdate:modelValue"]),c(" : "),o(C,{class:"fs-clock-field",variant:"outlined",type:"number","hide-details":"",style:S(e.style),readonly:!e.$props.editable,modelValue:e.innerMinutes.toString().padStart(2,"0"),"onUpdate:modelValue":e.onChangeMinutes},null,8,["style","readonly","modelValue","onUpdate:modelValue"])]),_:1}),o(f,null,{default:n(()=>[o(F,{font:"text-overline"},{default:n(()=>[c(g(e.$tr("ui.clock.hours","Hours")),1)]),_:1}),o(r,{readonly:!e.$props.editable,color:e.$props.color,step:1,max:23,min:0,modelValue:e.innerHours,"onUpdate:modelValue":a[0]||(a[0]=u=>e.innerHours=u)},null,8,["readonly","color","modelValue"])]),_:1}),o(f,null,{default:n(()=>[o(F,{font:"text-overline"},{default:n(()=>[c(g(e.$tr("ui.clock.minutes","Minutes")),1)]),_:1}),o(r,{readonly:!e.$props.editable,color:e.$props.color,step:1,max:59,min:0,modelValue:e.innerMinutes,"onUpdate:modelValue":a[1]||(a[1]=u=>e.innerMinutes=u)},null,8,["readonly","color","modelValue"])]),_:1})]),_:1})}const Q=R($,[["render",_]]);$.__docgenInfo={displayName:"FSClock",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"date",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"reminder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSClock.vue"]};export{Q as F};
