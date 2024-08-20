import{d as X,b as y,c as h,o as x,z as P,A as U,B as i,L as s,E as T,G as L,D as ee,S as B,O as C,W as b}from"./vue.esm-bundler-gWFTcvUr.js";import{F as M}from"./FSButton-C0cjY78b.js";import{_ as w}from"./FSSpan-BlywDO8Z.js";import{_ as D}from"./FSCol-DX423FHf.js";import{_ as k}from"./FSRow-Bpa2jjpJ.js";import{C as p,u as le}from"./useColors-4hVwr1YC.js";import{u as ae}from"./useAppTimeZone-De3FTl5J.js";import{u as ne}from"./useAppLanguageCode-CiYDnnfJ.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as E,a as _}from"./VLocaleProvider-BtnlZ9sO.js";const z=X({name:"FSCalendarTwin",components:{FSButton:M,FSSpan:w,FSCol:D,FSRow:k},props:{label:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:p.Dark},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:f}){var q;const{epochToPicker:N,epochToPickerHeader:c,pickerToEpoch:V,todayToEpoch:F}=ae(),{languageCode:v}=ne(),{getColors:S}=le(),n=y(new Date().getMonth()),r=y(new Date().getFullYear()),u=y(new Date().getMonth()),d=y(new Date().getFullYear()),m=y((((q=e.modelValue)==null?void 0:q.length)??0)%2),g=h(()=>S(e.color)),A=S(p.Background),R=S(p.Dark),I=h(()=>({"--fs-calendar-background-color":A.base,"--fs-calendar-hover-background-color":g.value.light,"--fs-calendar-active-background-color":g.value.base,"--fs-calendar-border-color":R.base,"--fs-calendar-hover-border-color":g.value.base,"--fs-calendar-active-border-color":g.value.base,"--fs-calendar-color":R.base,"--fs-calendar-hover-color":g.value.base,"--fs-calendar-active-color":g.value.light})),$=h(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","left",c(a))||o("before","left",c(a)))),Y=h(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","right",c(a))||o("after","right",c(a)))),G=h(()=>{const a=new Date(0);return a.setMonth(n.value),a.setFullYear(r.value),new Intl.DateTimeFormat(v.value,{month:"long",year:"numeric"}).format(a)}),H=h(()=>{const a=new Date(0);return a.setMonth(u.value),a.setFullYear(d.value),new Intl.DateTimeFormat(v.value,{month:"long",year:"numeric"}).format(a)}),O=h(()=>{const a=["fs-calendar-half","fs-calendar-left"];if(e.modelValue&&e.modelValue.length>1){const t=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","left",t)&&o("after","left",l)?a.push("fs-calendar-full"):o("during","left",t)&&o("during","left",l)?t.d!==l.d&&a.push("fs-calendar-part"):o("during","left",t)?a.push("fs-calendar-start"):o("during","left",l)&&a.push("fs-calendar-end")}return a}),W=h(()=>{const a=["fs-calendar-half","fs-calendar-right"];if(e.modelValue&&e.modelValue.length>1){const t=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","right",t)&&o("after","right",l)?a.push("fs-calendar-full"):o("during","right",t)&&o("during","right",l)?t.d!==l.d&&a.push("fs-calendar-part"):o("during","right",t)?a.push("fs-calendar-start"):o("during","right",l)&&a.push("fs-calendar-end")}return a}),o=(a,t,l)=>{switch(a){case"before":switch(t){case"left":return r.value>l.y||r.value===l.y&&n.value>l.m;default:return d.value>l.y||d.value===l.y&&u.value>l.m}case"during":switch(t){case"left":return r.value===l.y&&n.value===l.m;default:return d.value===l.y&&u.value===l.m}case"after":switch(t){case"left":return r.value<l.y||r.value===l.y&&n.value<l.m;default:return d.value<l.y||d.value===l.y&&u.value<l.m}}},Z=()=>{n.value===11?(n.value--,u.value=11,d.value--):n.value===0?(r.value--,n.value=11,u.value--):(n.value--,u.value--)},j=()=>{u.value===11?(u.value=0,d.value++,n.value++):u.value===0?(u.value++,n.value=0,r.value++):(u.value++,n.value++)},J=a=>{const t=a,l=V(t[t.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):$.value.length===0?f("update:modelValue",[l,e.modelValue[1]]):(f("update:modelValue",[l,e.modelValue[m.value]].sort()),m.value=++m.value%2)},K=a=>{const t=a,l=V(t[t.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):Y.value.length===0?f("update:modelValue",[e.modelValue[0],l]):(f("update:modelValue",[l,e.modelValue[m.value]].sort()),m.value=++m.value%2),m.value=++m.value%2},Q=a=>{if(!(a instanceof Date))return!1;switch(e.limit){case"past":return V(a)<=F();case"future":return V(a)>=F();default:return!0}};return x(()=>{!e.modelValue||!e.modelValue.length?(n.value=new Date().getMonth(),r.value=new Date().getFullYear(),n.value<11?(u.value=n.value+1,d.value=r.value):(u.value=0,d.value=r.value+1)):(n.value=c(e.modelValue[0]).m,r.value=c(e.modelValue[0]).y,n.value<11?(u.value=n.value+1,d.value=r.value):(u.value=0,d.value=r.value+1))}),{ColorEnum:p,languageCode:v,style:I,leftClasses:O,leftText:G,innerLeftMonth:n,innerLeftYear:r,innerLeftValue:$,rightClasses:W,rightText:H,innerRightMonth:u,innerRightYear:d,innerRightValue:Y,epochToPicker:N,onClickPrevious:Z,onClickNext:j,onClickLeft:J,onClickRight:K,allowedDates:Q}}}),ue=b("div",null,null,-1),oe=b("div",null,null,-1);function re(e,f,N,c,V,F){return P(),U(D,{width:"hug"},{default:i(()=>[e.$props.label?(P(),U(k,{key:0},{default:i(()=>[s(w,{class:"fs-calendar-label",font:"text-overline"},{default:i(()=>[T(L(e.$props.label),1)]),_:1})]),_:1})):ee("",!0),s(k,{class:"fs-calendar-twin",align:"top-center",width:"hug",height:["380px","375px"],style:C(e.style)},{default:i(()=>[s(D,{align:"top-center",width:"hug",class:B(e.leftClasses),style:C(e.style)},{default:i(()=>[s(k,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[s(M,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),s(w,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[T(L(e.leftText),1)]),_:1}),ue]),_:1}),b("div",{class:"fs-calendar-divider",style:C(e.style)},null,4),s(E,{locale:e.languageCode},{default:i(()=>[s(_,{month:e.innerLeftMonth,year:e.innerLeftYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerLeftValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickLeft,"onUpdate:month":v=>null,"onUpdate:year":v=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"]),s(D,{align:"top-center",width:"hug",class:B(e.rightClasses),style:C(e.style)},{default:i(()=>[s(k,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[oe,s(w,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[T(L(e.rightText),1)]),_:1}),s(M,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),b("div",{class:"fs-calendar-divider",style:C(e.style)},null,4),s(E,{locale:e.languageCode},{default:i(()=>[s(_,{month:e.innerRightMonth,year:e.innerRightYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerRightValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickRight,"onUpdate:month":v=>null,"onUpdate:year":v=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"])]),_:1},8,["style"])]),_:1})}const ye=te(z,[["render",re]]);z.__docgenInfo={displayName:"FSCalendarTwin",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendarTwin.vue"]};export{ye as F};
