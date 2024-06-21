import{d as Z,c as v,b as V,o as j,z as q,A as E,B as i,K as s,E as T,G as R,D as J,R as U,Q as y,V as b}from"./vue.esm-bundler-DUki7rNA.js";import{F as L}from"./FSButton-GE9LRUiN.js";import{_ as p}from"./FSSpan-DUTdSgpN.js";import{_ as D}from"./FSCol-BBaW1DrL.js";import{_ as C}from"./FSRow-CHgEOZQb.js";import{C as w,u as O}from"./useColors-HWn2iBmk.js";import{u as W,a as X}from"./useAppTimeZone-BvKhOiUD.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as B,a as _}from"./VLocaleProvider--t6nfiaG.js";const z=Z({name:"FSCalendarTwin",components:{FSButton:L,FSSpan:p,FSCol:D,FSRow:C},props:{label:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:w.Dark},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:f}){var Y;const{epochToPicker:M,epochToPickerHeader:c,pickerToEpoch:k,todayToEpoch:F}=W(),{languageCode:h}=X(),{getColors:S}=O(),g=v(()=>S(e.color)),A=S(w.Background),N=S(w.Dark),n=V(new Date().getMonth()),r=V(new Date().getFullYear()),u=V(new Date().getMonth()),d=V(new Date().getFullYear()),m=V((((Y=e.modelValue)==null?void 0:Y.length)??0)%2);j(()=>{!e.modelValue||!e.modelValue.length?(n.value=new Date().getMonth(),r.value=new Date().getFullYear(),n.value<11?(u.value=n.value+1,d.value=r.value):(u.value=0,d.value=r.value+1)):(n.value=c(e.modelValue[0]).m,r.value=c(e.modelValue[0]).y,n.value<11?(u.value=n.value+1,d.value=r.value):(u.value=0,d.value=r.value+1))});const o=(a,t,l)=>{switch(a){case"before":switch(t){case"left":return r.value>l.y||r.value===l.y&&n.value>l.m;default:return d.value>l.y||d.value===l.y&&u.value>l.m}case"during":switch(t){case"left":return r.value===l.y&&n.value===l.m;default:return d.value===l.y&&u.value===l.m}case"after":switch(t){case"left":return r.value<l.y||r.value===l.y&&n.value<l.m;default:return d.value<l.y||d.value===l.y&&u.value<l.m}}},I=v(()=>({"--fs-calendar-background-color":A.base,"--fs-calendar-hover-background-color":g.value.light,"--fs-calendar-active-background-color":g.value.base,"--fs-calendar-border-color":N.base,"--fs-calendar-hover-border-color":g.value.base,"--fs-calendar-active-border-color":g.value.base,"--fs-calendar-color":N.base,"--fs-calendar-hover-color":g.value.base,"--fs-calendar-active-color":g.value.light})),$=v(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","left",c(a))||o("before","left",c(a)))),P=v(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>o("during","right",c(a))||o("after","right",c(a)))),G=v(()=>{const a=new Date(0);return a.setMonth(n.value),a.setFullYear(r.value),new Intl.DateTimeFormat(h.value,{month:"long",year:"numeric"}).format(a)}),H=v(()=>{const a=new Date(0);return a.setMonth(u.value),a.setFullYear(d.value),new Intl.DateTimeFormat(h.value,{month:"long",year:"numeric"}).format(a)}),K=v(()=>{const a=["fs-calendar-half","fs-calendar-left"];if(e.modelValue&&e.modelValue.length>1){const t=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","left",t)&&o("after","left",l)?a.push("fs-calendar-full"):o("during","left",t)&&o("during","left",l)?t.d!==l.d&&a.push("fs-calendar-part"):o("during","left",t)?a.push("fs-calendar-start"):o("during","left",l)&&a.push("fs-calendar-end")}return a}),Q=v(()=>{const a=["fs-calendar-half","fs-calendar-right"];if(e.modelValue&&e.modelValue.length>1){const t=c(e.modelValue[0]),l=c(e.modelValue[1]);o("before","right",t)&&o("after","right",l)?a.push("fs-calendar-full"):o("during","right",t)&&o("during","right",l)?t.d!==l.d&&a.push("fs-calendar-part"):o("during","right",t)?a.push("fs-calendar-start"):o("during","right",l)&&a.push("fs-calendar-end")}return a});return{ColorEnum:w,languageCode:h,style:I,leftClasses:K,leftText:G,innerLeftMonth:n,innerLeftYear:r,innerLeftValue:$,rightClasses:Q,rightText:H,innerRightMonth:u,innerRightYear:d,innerRightValue:P,epochToPicker:M,onClickPrevious:()=>{n.value===11?(n.value--,u.value=11,d.value--):n.value===0?(r.value--,n.value=11,u.value--):(n.value--,u.value--)},onClickNext:()=>{u.value===11?(u.value=0,d.value++,n.value++):u.value===0?(u.value++,n.value=0,r.value++):(u.value++,n.value++)},onClickLeft:a=>{const t=a,l=k(t[t.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):$.value.length===0?f("update:modelValue",[l,e.modelValue[1]]):(f("update:modelValue",[l,e.modelValue[m.value]].sort()),m.value=++m.value%2)},onClickRight:a=>{const t=a,l=k(t[t.length-1]);!e.modelValue||!e.modelValue.length?f("update:modelValue",[l,l]):e.modelValue.length===1?f("update:modelValue",[e.modelValue[0],l].sort()):P.value.length===0?f("update:modelValue",[e.modelValue[0],l]):(f("update:modelValue",[l,e.modelValue[m.value]].sort()),m.value=++m.value%2),m.value=++m.value%2},allowedDates:a=>{const l=k(a);switch(e.limit){case"past":return l<=F(!0);case"future":return l>=F(!0);default:return!0}}}}}),ee=b("div",null,null,-1),le=b("div",null,null,-1);function ae(e,f,M,c,k,F){return q(),E(D,{width:"hug"},{default:i(()=>[e.$props.label?(q(),E(C,{key:0},{default:i(()=>[s(p,{class:"fs-calendar-label",font:"text-overline"},{default:i(()=>[T(R(e.$props.label),1)]),_:1})]),_:1})):J("",!0),s(C,{class:"fs-calendar-twin",align:"center-center",width:"hug",style:y(e.style)},{default:i(()=>[s(D,{align:"top-center",width:"hug",class:U(e.leftClasses),style:y(e.style)},{default:i(()=>[s(C,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[s(L,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),s(p,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[T(R(e.leftText),1)]),_:1}),ee]),_:1}),b("div",{class:"fs-calendar-divider",style:y(e.style)},null,4),s(B,{locale:e.languageCode},{default:i(()=>[s(_,{month:e.innerLeftMonth,year:e.innerLeftYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerLeftValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickLeft,"onUpdate:month":h=>null,"onUpdate:year":h=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"]),s(D,{align:"top-center",width:"hug",class:U(e.rightClasses),style:y(e.style)},{default:i(()=>[s(C,{class:"fs-calendar-header",align:"center-center"},{default:i(()=>[le,s(p,{class:"fs-calendar-text",font:"text-h3"},{default:i(()=>[T(R(e.rightText),1)]),_:1}),s(L,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),b("div",{class:"fs-calendar-divider",style:y(e.style)},null,4),s(B,{locale:e.languageCode},{default:i(()=>[s(_,{month:e.innerRightMonth,year:e.innerRightYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerRightValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickRight,"onUpdate:month":h=>null,"onUpdate:year":h=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"])]),_:1},8,["style"])]),_:1})}const Ve=x(z,[["render",ae]]);z.__docgenInfo={displayName:"FSCalendarTwin",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendarTwin.vue"]};export{Ve as F};
