import{d as Z,b as y,c as v,o as x,A as q,B as U,C as i,v as s,G as S,H as M,E as ee,P as B,O as C,a1 as b}from"./vue.esm-bundler-BwDfg4wG.js";import{F as L}from"./FSButton-jJkg4qCi.js";import{_ as p}from"./FSSpan-H3zJ0Cfa.js";import{F as D}from"./FSCol-BEvj3we4.js";import{F as k}from"./FSRow-k5pgBhR1.js";import{C as w,u as le}from"./useColors-tmPxRJAs.js";import{u as ae}from"./useDateFormat-B3lPS72n.js";import{u as te}from"./useAppLanguageCode--ssgoHQ3.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as E,a as z}from"./VLocaleProvider-aObatoJn.js";const A=Z({name:"FSCalendarTwin",components:{FSButton:L,FSSpan:p,FSCol:D,FSRow:k},props:{label:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:w.Dark},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:f}){var Y;const{epochToPicker:N,epochToPickerHeader:c,pickerToEpoch:V,todayToEpoch:F}=ae(),{languageCode:h}=te(),{getColors:T}=le(),t=y(new Date().getMonth()),r=y(new Date().getFullYear()),u=y(new Date().getMonth()),d=y(new Date().getFullYear()),m=y((((Y=e.modelValue)==null?void 0:Y.length)??0)%2),g=v(()=>T(e.color)),I=T(w.Background),$=T(w.Dark),H=v(()=>({"--fs-calendar-background-color":I.base,"--fs-calendar-hover-background-color":g.value.light,"--fs-calendar-active-background-color":g.value.base,"--fs-calendar-border-color":$.base,"--fs-calendar-hover-border-color":g.value.base,"--fs-calendar-active-border-color":g.value.base,"--fs-calendar-color":$.base,"--fs-calendar-hover-color":g.value.base,"--fs-calendar-active-color":g.value.light})),P=v(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","left",c(a))||o("before","left",c(a)))),R=v(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","right",c(a))||o("after","right",c(a)))),G=v(()=>{const a=new Date(0);return a.setMonth(t.value),a.setFullYear(r.value),new Intl.DateTimeFormat(h.value,{month:"long",year:"numeric"}).format(a)}),O=v(()=>{const a=new Date(0);return a.setMonth(u.value),a.setFullYear(d.value),new Intl.DateTimeFormat(h.value,{month:"long",year:"numeric"}).format(a)}),_=v(()=>{const a=["fs-calendar-half","fs-calendar-left"];if(e.modelValue&&e.modelValue.length>1){const n=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","left",n)&&o("after","left",l)?a.push("fs-calendar-full"):o("during","left",n)&&o("during","left",l)?n.d!==l.d&&a.push("fs-calendar-part"):o("during","left",n)?a.push("fs-calendar-start"):o("during","left",l)&&a.push("fs-calendar-end")}return a}),j=v(()=>{const a=["fs-calendar-half","fs-calendar-right"];if(e.modelValue&&e.modelValue.length>1){const n=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","right",n)&&o("after","right",l)?a.push("fs-calendar-full"):o("during","right",n)&&o("during","right",l)?n.d!==l.d&&a.push("fs-calendar-part"):o("during","right",n)?a.push("fs-calendar-start"):o("during","right",l)&&a.push("fs-calendar-end")}return a}),o=(a,n,l)=>{switch(a){case"before":switch(n){case"left":return r.value>l.y||r.value===l.y&&t.value>l.m;default:return d.value>l.y||d.value===l.y&&u.value>l.m}case"during":switch(n){case"left":return r.value===l.y&&t.value===l.m;default:return d.value===l.y&&u.value===l.m}case"after":switch(n){case"left":return r.value<l.y||r.value===l.y&&t.value<l.m;default:return d.value<l.y||d.value===l.y&&u.value<l.m}}},J=()=>{t.value===11?(t.value--,u.value=11,d.value--):t.value===0?(r.value--,t.value=11,u.value--):(t.value--,u.value--)},K=()=>{u.value===11?(u.value=0,d.value++,t.value++):u.value===0?(u.value++,t.value=0,r.value++):(u.value++,t.value++)},Q=a=>{const n=a,l=V(n[n.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):P.value.length===0?f("update:modelValue",[l,e.modelValue[1]]):(f("update:modelValue",[l,e.modelValue[m.value]].sort()),m.value=++m.value%2)},W=a=>{const n=a,l=V(n[n.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):R.value.length===0?f("update:modelValue",[e.modelValue[0],l]):(f("update:modelValue",[l,e.modelValue[m.value]].sort()),m.value=++m.value%2),m.value=++m.value%2},X=a=>{if(!(a instanceof Date))return!1;switch(e.limit){case"past":return V(a)<=F();case"future":return V(a)>=F();default:return!0}};return x(()=>{!e.modelValue||!e.modelValue.length?(t.value=new Date().getMonth(),r.value=new Date().getFullYear(),t.value<11?(u.value=t.value+1,d.value=r.value):(u.value=0,d.value=r.value+1)):(t.value=c(e.modelValue[0]).m,r.value=c(e.modelValue[0]).y,t.value<11?(u.value=t.value+1,d.value=r.value):(u.value=0,d.value=r.value+1))}),{ColorEnum:w,languageCode:h,style:H,leftClasses:_,leftText:G,innerLeftMonth:t,innerLeftYear:r,innerLeftValue:P,rightClasses:j,rightText:O,innerRightMonth:u,innerRightYear:d,innerRightValue:R,epochToPicker:N,onClickPrevious:J,onClickNext:K,onClickLeft:Q,onClickRight:W,allowedDates:X}}}),ue=b("div",null,null,-1),oe=b("div",null,null,-1);function re(e,f,N,c,V,F){return q(),U(D,{width:"hug"},{default:i(()=>[e.$props.label?(q(),U(k,{key:0},{default:i(()=>[s(p,{class:"fs-calendar-label",font:"text-overline"},{default:i(()=>[S(M(e.$props.label),1)]),_:1})]),_:1})):ee("",!0),s(k,{class:"fs-calendar-twin",align:"top-center",width:"hug",height:["380px","375px"],style:C(e.style)},{default:i(()=>[s(D,{align:"top-center",width:"hug",class:B(e.leftClasses),style:C(e.style)},{default:i(()=>[s(k,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[s(L,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),s(p,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[S(M(e.leftText),1)]),_:1}),ue]),_:1}),b("div",{class:"fs-calendar-divider",style:C(e.style)},null,4),s(E,{locale:e.languageCode},{default:i(()=>[s(z,{month:e.innerLeftMonth,year:e.innerLeftYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerLeftValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickLeft,"onUpdate:month":h=>null,"onUpdate:year":h=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"]),s(D,{align:"top-center",width:"hug",class:B(e.rightClasses),style:C(e.style)},{default:i(()=>[s(k,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[oe,s(p,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[S(M(e.rightText),1)]),_:1}),s(L,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),b("div",{class:"fs-calendar-divider",style:C(e.style)},null,4),s(E,{locale:e.languageCode},{default:i(()=>[s(z,{month:e.innerRightMonth,year:e.innerRightYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerRightValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickRight,"onUpdate:month":h=>null,"onUpdate:year":h=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"])]),_:1},8,["style"])]),_:1})}const ye=ne(A,[["render",re]]);A.__docgenInfo={displayName:"FSCalendarTwin",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendarTwin.vue"]};export{ye as F};
