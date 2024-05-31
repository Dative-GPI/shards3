import{f as z,g as m,D as _,E as T,F as P,G as s,A as x,M as o,R as D,j as B,o as ee,K as I,L,I as le,Y as E,W as w,_ as F}from"./vue.esm-bundler-838daa40.js";import{F as j}from"./FSFadeOut-ce6cecc6.js";import{F as S}from"./FSButton-b3e7898e.js";import{F as ae}from"./FSDialog-010bb2de.js";import{_ as g}from"./FSRow-753b58e5.js";import{C as y,u as te}from"./useColors-8c9c4d1e.js";import{u as ne}from"./css-67cfec15.js";import{u as ue}from"./useTranslations-419c1021.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as $}from"./FSSpan-3df08200.js";import{_ as q}from"./FSCol-44fe82a9.js";import{u as oe,a as re}from"./useAppTimeZone-a305acc7.js";import{V as Y,a as U}from"./VLocaleProvider-31d8514e.js";const H=z({name:"FSDialogSubmit",components:{FSFadeOut:j,FSButton:S,FSDialog:ae,FSRow:g},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:y.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:y.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:submitButton"],setup(e){const{isMobileSized:t}=ne(),{$tr:b}=ue(),f=m(()=>`calc(100vh - 40px - ${48+(t.value?24:32)+24+(e.subtitle?(t.value?14:16)+8:0)+(t.value?36:40)+24}px)`),h=m(()=>e.cancelButtonLabel??b("ui.button.cancel","Cancel")),C=m(()=>e.submitButtonLabel??b("ui.button.validate","Validate"));return{cancelLabel:h,submitLabel:C,ColorEnum:y,height:f}}});function se(e,t,b,f,h,C){const p=_("FSDialog");return T(),P(p,x({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[2]||(t[2]=V=>e.$emit("update:modelValue",V))},e.$attrs),{body:s(()=>[o(j,{height:e.height,padding:"0 8px 0 0"},{default:s(()=>[D(e.$slots,"body")]),_:3},8,["height"])]),footer:s(()=>[D(e.$slots,"footer",{},()=>[o(g,{padding:"0 16px 0 0"},{default:s(()=>[D(e.$slots,"left-footer"),o(g,{align:"top-right",wrap:!1},{default:s(()=>[o(S,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:t[0]||(t[0]=V=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","appendIcon","variant","color","label"]),o(S,{prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load,onClick:t[1]||(t[1]=V=>e.$emit("click:submitButton"))},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])]),_:1})]),_:3})])]),_:3},16,["subtitle","title","width","modelValue"])}const Ie=G(H,[["render",se]]);H.__docgenInfo={displayName:"FSDialogSubmit",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"body"},{name:"footer"},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogSubmit.vue"]};const K=z({name:"FSCalendarTwin",components:{FSButton:S,FSSpan:$,FSCol:q,FSRow:g},props:{label:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:y.Dark},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:t}){var A;const{epochToPicker:b,epochToPickerHeader:f,pickerToEpoch:h,todayToEpoch:C}=oe(),{languageCode:p}=re(),{getColors:V}=te(),k=m(()=>V(e.color)),O=V(y.Background),N=V(y.Dark),u=B(new Date().getMonth()),d=B(new Date().getFullYear()),r=B(new Date().getMonth()),c=B(new Date().getFullYear()),v=B((((A=e.modelValue)==null?void 0:A.length)??0)%2);ee(()=>{!e.modelValue||!e.modelValue.length?(u.value=new Date().getMonth(),d.value=new Date().getFullYear(),u.value<11?(r.value=u.value+1,c.value=d.value):(r.value=0,c.value=d.value+1)):(u.value=f(e.modelValue[0]).m,d.value=f(e.modelValue[0]).y,u.value<11?(r.value=u.value+1,c.value=d.value):(r.value=0,c.value=d.value+1))});const i=(a,n,l)=>{switch(a){case"before":switch(n){case"left":return d.value>l.y||d.value===l.y&&u.value>l.m;default:return c.value>l.y||c.value===l.y&&r.value>l.m}case"during":switch(n){case"left":return d.value===l.y&&u.value===l.m;default:return c.value===l.y&&r.value===l.m}case"after":switch(n){case"left":return d.value<l.y||d.value===l.y&&u.value<l.m;default:return c.value<l.y||c.value===l.y&&r.value<l.m}}},W=m(()=>({"--fs-calendar-background-color":O.base,"--fs-calendar-hover-background-color":k.value.light,"--fs-calendar-active-background-color":k.value.base,"--fs-calendar-border-color":N.base,"--fs-calendar-hover-border-color":k.value.base,"--fs-calendar-active-border-color":k.value.base,"--fs-calendar-color":N.base,"--fs-calendar-hover-color":k.value.base,"--fs-calendar-active-color":k.value.light})),M=m(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>i("during","left",f(a))||i("before","left",f(a)))),R=m(()=>!e.modelValue||!e.modelValue.length?[]:e.modelValue.filter(a=>i("during","right",f(a))||i("after","right",f(a)))),Z=m(()=>{const a=new Date(0);return a.setMonth(u.value),a.setFullYear(d.value),new Intl.DateTimeFormat(p.value,{month:"long",year:"numeric"}).format(a)}),J=m(()=>{const a=new Date(0);return a.setMonth(r.value),a.setFullYear(c.value),new Intl.DateTimeFormat(p.value,{month:"long",year:"numeric"}).format(a)}),Q=m(()=>{const a=["fs-calendar-half","fs-calendar-left"];if(e.modelValue&&e.modelValue.length>1){const n=f(e.modelValue[0]),l=f(e.modelValue[1]);i("before","left",n)&&i("after","left",l)?a.push("fs-calendar-full"):i("during","left",n)&&i("during","left",l)?n.d!==l.d&&a.push("fs-calendar-part"):i("during","left",n)?a.push("fs-calendar-start"):i("during","left",l)&&a.push("fs-calendar-end")}return a}),X=m(()=>{const a=["fs-calendar-half","fs-calendar-right"];if(e.modelValue&&e.modelValue.length>1){const n=f(e.modelValue[0]),l=f(e.modelValue[1]);i("before","right",n)&&i("after","right",l)?a.push("fs-calendar-full"):i("during","right",n)&&i("during","right",l)?n.d!==l.d&&a.push("fs-calendar-part"):i("during","right",n)?a.push("fs-calendar-start"):i("during","right",l)&&a.push("fs-calendar-end")}return a});return{ColorEnum:y,languageCode:p,style:W,leftClasses:Q,leftText:Z,innerLeftMonth:u,innerLeftYear:d,innerLeftValue:M,rightClasses:X,rightText:J,innerRightMonth:r,innerRightYear:c,innerRightValue:R,epochToPicker:b,onClickPrevious:()=>{u.value===11?(u.value--,r.value=11,c.value--):u.value===0?(d.value--,u.value=11,r.value--):(u.value--,r.value--)},onClickNext:()=>{r.value===11?(r.value=0,c.value++,u.value++):r.value===0?(r.value++,u.value=0,d.value++):(r.value++,u.value++)},onClickLeft:a=>{const n=a,l=h(n[n.length-1]);!e.modelValue||!e.modelValue.length?t("update:modelValue",[l,l]):e.modelValue.length===1?t("update:modelValue",[e.modelValue[0],l].sort()):M.value.length===0?t("update:modelValue",[l,e.modelValue[1]]):(t("update:modelValue",[l,e.modelValue[v.value]].sort()),v.value=++v.value%2)},onClickRight:a=>{const n=a,l=h(n[n.length-1]);!e.modelValue||!e.modelValue.length?t("update:modelValue",[l,l]):e.modelValue.length===1?t("update:modelValue",[e.modelValue[0],l].sort()):R.value.length===0?t("update:modelValue",[e.modelValue[0],l]):(t("update:modelValue",[l,e.modelValue[v.value]].sort()),v.value=++v.value%2),v.value=++v.value%2},allowedDates:a=>{const l=h(a);switch(e.limit){case"past":return l<=C(!0);case"future":return l>=C(!0);default:return!0}}}}}),ie=F("div",null,null,-1),de=F("div",null,null,-1);function fe(e,t,b,f,h,C){return T(),P(q,{width:"hug"},{default:s(()=>[e.$props.label?(T(),P(g,{key:0},{default:s(()=>[o($,{class:"fs-calendar-label",font:"text-overline"},{default:s(()=>[I(L(e.$props.label),1)]),_:1})]),_:1})):le("",!0),o(g,{class:"fs-calendar-twin",align:"center-center",width:"hug",style:w(e.style)},{default:s(()=>[o(q,{align:"top-center",width:"hug",class:E(e.leftClasses),style:w(e.style)},{default:s(()=>[o(g,{class:"fs-calendar-header",align:"center-center"},{default:s(()=>[o(S,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),o($,{class:"fs-calendar-text",font:"text-h3"},{default:s(()=>[I(L(e.leftText),1)]),_:1}),ie]),_:1}),F("div",{class:"fs-calendar-divider",style:w(e.style)},null,4),o(Y,{locale:e.languageCode},{default:s(()=>[o(U,{month:e.innerLeftMonth,year:e.innerLeftYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerLeftValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickLeft,"onUpdate:month":p=>null,"onUpdate:year":p=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"]),o(q,{align:"top-center",width:"hug",class:E(e.rightClasses),style:w(e.style)},{default:s(()=>[o(g,{class:"fs-calendar-header",align:"center-center"},{default:s(()=>[de,o($,{class:"fs-calendar-text",font:"text-h3"},{default:s(()=>[I(L(e.rightText),1)]),_:1}),o(S,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),F("div",{class:"fs-calendar-divider",style:w(e.style)},null,4),o(Y,{locale:e.languageCode},{default:s(()=>[o(U,{month:e.innerRightMonth,year:e.innerRightYear,multiple:!0,allowedDates:e.allowedDates,modelValue:e.innerRightValue.map(e.epochToPicker),"onUpdate:modelValue":e.onClickRight,"onUpdate:month":p=>null,"onUpdate:year":p=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["class","style"])]),_:1},8,["style"])]),_:1})}const Le=G(K,[["render",fe]]);K.__docgenInfo={displayName:"FSCalendarTwin",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendarTwin.vue"]};export{Ie as F,Le as a};
