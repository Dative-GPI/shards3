import{j as N,e as S,d as g,w as T,J as h,K as u,L as d,M as r,z as n,N as F,O as B,P as p,V as C}from"./vue.esm-bundler-37de1696.js";import{F as H}from"./FSSlider-18347ffd.js";import{F as U}from"./FSText-3a386b21.js";import{_ as y}from"./FSCol-4074aa47.js";import{_ as V}from"./FSRow-fc81033b.js";import{C as c,u as D}from"./useColors-ba22af06.js";import{u as L}from"./useAppTimeZone-ef2c4017.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z}from"./VSpacer-63748a98.js";import{V as $}from"./VTextField-deb08e50.js";const v=N({name:"FSClock",components:{FSSlider:H,FSText:U,FSCol:y,FSRow:V},props:{modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:c.Primary},date:{type:Number,required:!1,default:null},reminder:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},slider:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{epochToLongDateFormat:k}=L(),{getColors:t}=D(),i=S(()=>t(e.color)),b=t(c.Background),s=t(c.Light),m=t(c.Dark),o=g(e.modelValue?Math.floor(e.modelValue/(60*60*1e3)):0),f=g(e.modelValue?Math.floor(e.modelValue%(60*60*1e3)/(60*1e3)):0),M=S(()=>e.editable?{"--fs-clock-field-cursor":"text","--fs-clock-field-background-color":i.value.light,"--fs-clock-field-border-color":i.value.base,"--fs-clock-field-color":m.base,"--fs-clock-field-active-border-color":i.value.dark}:{"--fs-clock-field-cursor":"default","--fs-clock-field-background-color":b.base,"--fs-clock-field-border-color":s.base,"--fs-clock-field-color":s.dark,"--fs-clock-field-active-border-color":s.base}),q=l=>{l=Math.min(23,Math.max(0,l)),o.value=l},w=l=>{l=Math.min(59,Math.max(0,l)),f.value=l};return T([o,f],()=>{a("update:modelValue",o.value*60*60*1e3+f.value*60*1e3)}),{style:M,innerHours:o,innerMinutes:f,onChangeHours:q,onChangeMinutes:w,epochToLongDateFormat:k}}});function E(e,a,k,t,i,b){const s=h("FSText"),m=h("FSSlider");return u(),d(y,{width:"fill",gap:"16px"},{default:r(()=>[n(V,{align:"center-center",wrap:!1},{default:r(()=>[e.$props.reminder?(u(),d(s,{key:0},{default:r(()=>[F(B(e.epochToLongDateFormat(e.$props.date)),1)]),_:1})):p("",!0),e.$props.reminder?(u(),d(z,{key:1})):p("",!0),n(V,{align:"center-center",wrap:!1},{default:r(()=>[n($,{class:"fs-clock-field",variant:"outlined",type:"number","hide-details":"",style:C(e.style),readonly:!e.$props.editable,modelValue:e.innerHours.toString().padStart(2,"0"),"onUpdate:modelValue":e.onChangeHours},null,8,["style","readonly","modelValue","onUpdate:modelValue"]),F(" : "),n($,{class:"fs-clock-field",variant:"outlined",type:"number","hide-details":"",style:C(e.style),readonly:!e.$props.editable,modelValue:e.innerMinutes.toString().padStart(2,"0"),"onUpdate:modelValue":e.onChangeMinutes},null,8,["style","readonly","modelValue","onUpdate:modelValue"])]),_:1})]),_:1}),e.$props.slider?(u(),d(y,{key:0},{default:r(()=>[n(m,{label:e.$tr("ui.clock.hours","Hours"),readonly:!e.$props.editable,color:e.$props.color,step:1,max:23,min:0,modelValue:e.innerHours,"onUpdate:modelValue":a[0]||(a[0]=o=>e.innerHours=o)},null,8,["label","readonly","color","modelValue"])]),_:1})):p("",!0),e.$props.slider?(u(),d(y,{key:1},{default:r(()=>[n(m,{label:e.$tr("ui.clock.minutes","Minutes"),readonly:!e.$props.editable,color:e.$props.color,step:1,max:59,min:0,modelValue:e.innerMinutes,"onUpdate:modelValue":a[1]||(a[1]=o=>e.innerMinutes=o)},null,8,["label","readonly","color","modelValue"])]),_:1})):p("",!0)]),_:1})}const W=P(v,[["render",E]]);v.__docgenInfo={displayName:"FSClock",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"date",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"reminder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"slider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSClock.vue"]};export{W as F};
