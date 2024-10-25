import{d as Z,b as y,c as m,g as x,z as q,A as U,C as i,N as s,H as T,I as M,F as ee,D as B,P as C,V as F}from"./vue.esm-bundler-l-siv0w9.js";import{F as N}from"./FSButton-DcUuAZqz.js";import{_ as D}from"./FSSpan-Di50moR2.js";import{F as b}from"./FSCol-BvqytbKT.js";import{_ as k}from"./FSRow-CbEgVN08.js";import{C as w,u as le}from"./useColors-Bs2u1_6J.js";import{u as ae}from"./useDateFormat-CLdrxMO6.js";import{u as te}from"./useAppLanguageCode-BzH56rSm.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as E,a as z}from"./VLocaleProvider-DMII1C8e.js";const I=Z({name:"FSCalendarTwin",components:{FSButton:N,FSSpan:D,FSCol:b,FSRow:k},props:{label:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:w.Dark},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:f}){var Y;const{epochToPicker:L,epochToPickerHeader:c,pickerToEpoch:V,todayToEpoch:p}=ae(),{languageCode:h}=te(),{getColors:S}=le(),n=y(new Date().getMonth()),r=y(new Date().getFullYear()),u=y(new Date().getMonth()),d=y(new Date().getFullYear()),v=y((((Y=e.modelValue)==null?void 0:Y.length)??0)%2),g=m(()=>S(e.color)),_=S(w.Background),R=S(w.Dark),A=m(()=>({"--fs-calendar-background-color":_.base,"--fs-calendar-hover-background-color":g.value.light,"--fs-calendar-active-background-color":g.value.base,"--fs-calendar-border-color":R.base,"--fs-calendar-hover-border-color":g.value.base,"--fs-calendar-active-border-color":g.value.base,"--fs-calendar-color":R.base,"--fs-calendar-hover-color":g.value.base,"--fs-calendar-active-color":g.value.light})),$=m(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","left",c(a))||o("before","left",c(a)))),P=m(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","right",c(a))||o("after","right",c(a)))),H=m(()=>{const a=new Date(0);return a.setMonth(n.value),a.setFullYear(r.value),new Intl.DateTimeFormat(h.value,{month:"long",year:"numeric"}).format(a)}),j=m(()=>{const a=new Date(0);return a.setMonth(u.value),a.setFullYear(d.value),new Intl.DateTimeFormat(h.value,{month:"long",year:"numeric"}).format(a)}),G=m(()=>{const a=["fs-calendar-half","fs-calendar-left"];if(e.modelValue&&e.modelValue.length>1){const t=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","left",t)&&o("after","left",l)?a.push("fs-calendar-full"):o("during","left",t)&&o("during","left",l)?t.d!==l.d&&a.push("fs-calendar-part"):o("during","left",t)?a.push("fs-calendar-start"):o("during","left",l)&&a.push("fs-calendar-end")}return a}),J=m(()=>{const a=["fs-calendar-half","fs-calendar-right"];if(e.modelValue&&e.modelValue.length>1){const t=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","right",t)&&o("after","right",l)?a.push("fs-calendar-full"):o("during","right",t)&&o("during","right",l)?t.d!==l.d&&a.push("fs-calendar-part"):o("during","right",t)?a.push("fs-calendar-start"):o("during","right",l)&&a.push("fs-calendar-end")}return a}),o=(a,t,l)=>{switch(a){case"before":switch(t){case"left":return r.value>l.y||r.value===l.y&&n.value>l.m;default:return d.value>l.y||d.value===l.y&&u.value>l.m}case"during":switch(t){case"left":return r.value===l.y&&n.value===l.m;default:return d.value===l.y&&u.value===l.m}case"after":switch(t){case"left":return r.value<l.y||r.value===l.y&&n.value<l.m;default:return d.value<l.y||d.value===l.y&&u.value<l.m}}},K=()=>{n.value===11?(n.value--,u.value=11,d.value--):n.value===0?(r.value--,n.value=11,u.value--):(n.value--,u.value--)},O=()=>{u.value===11?(u.value=0,d.value++,n.value++):u.value===0?(u.value++,n.value=0,r.value++):(u.value++,n.value++)},Q=a=>{const t=a;if(t.length===0){e.modelValue&&e.modelValue.length>0&&f("update:modelValue",[e.modelValue[0],e.modelValue[0]]);return}const l=V(t[t.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):$.value.length===0?f("update:modelValue",[l,e.modelValue[1]]):(f("update:modelValue",[l,e.modelValue[v.value]].sort()),v.value=(v.value+1)%2)},W=a=>{const t=a;if(t.length===0){e.modelValue&&e.modelValue.length>1&&f("update:modelValue",[e.modelValue[1],e.modelValue[1]]);return}const l=V(t[t.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):P.value.length===0?f("update:modelValue",[e.modelValue[0],l]):(f("update:modelValue",[l,e.modelValue[v.value]].sort()),v.value=(v.value+1)%2)},X=a=>{if(!(a instanceof Date))return!1;switch(e.limit){case"past":return V(a)<=p();case"future":return V(a)>=p();default:return!0}};return x(()=>{!e.modelValue||!e.modelValue.length?(n.value=new Date().getMonth(),r.value=new Date().getFullYear(),n.value<11?(u.value=n.value+1,d.value=r.value):(u.value=0,d.value=r.value+1)):(n.value=c(e.modelValue[0]).m,r.value=c(e.modelValue[0]).y,n.value<11?(u.value=n.value+1,d.value=r.value):(u.value=0,d.value=r.value+1))}),{ColorEnum:w,languageCode:h,style:A,leftClasses:G,leftText:H,innerLeftMonth:n,innerLeftYear:r,innerLeftValue:$,rightClasses:J,rightText:j,innerRightMonth:u,innerRightYear:d,innerRightValue:P,epochToPicker:L,onClickPrevious:K,onClickNext:O,onClickLeft:Q,onClickRight:W,allowedDates:X}}}),ue=F("div",null,null,-1),oe=F("div",null,null,-1);function re(e,f,L,c,V,p){return q(),U(b,{width:"hug"},{default:i(()=>[e.$props.label?(q(),U(k,{key:0},{default:i(()=>[s(D,{class:"fs-calendar-label",font:"text-overline"},{default:i(()=>[T(M(e.$props.label),1)]),_:1})]),_:1})):ee("",!0),s(k,{class:"fs-calendar-twin",align:"top-center",width:"hug",height:["380px","375px"],style:C(e.style)},{default:i(()=>[s(b,{align:"top-center",width:"hug",class:B(e.leftClasses),style:C(e.style)},{default:i(()=>[s(k,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[s(N,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),s(D,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[T(M(e.leftText),1)]),_:1}),ue]),_:1}),F("div",{class:"fs-calendar-divider",style:C(e.style)},null,4),s(E,{locale:e.languageCode},{default:i(()=>[s(z,{month:e.innerLeftMonth,year:e.innerLeftYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerLeftValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickLeft,"onUpdate:month":h=>null,"onUpdate:year":h=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"]),s(b,{align:"top-center",width:"hug",class:B(e.rightClasses),style:C(e.style)},{default:i(()=>[s(k,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[oe,s(D,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[T(M(e.rightText),1)]),_:1}),s(N,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),F("div",{class:"fs-calendar-divider",style:C(e.style)},null,4),s(E,{locale:e.languageCode},{default:i(()=>[s(z,{month:e.innerRightMonth,year:e.innerRightYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerRightValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickRight,"onUpdate:month":h=>null,"onUpdate:year":h=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"])]),_:1},8,["style"])]),_:1})}const ye=ne(I,[["render",re]]);I.__docgenInfo={displayName:"FSCalendarTwin",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendarTwin.vue"]};export{ye as F};
