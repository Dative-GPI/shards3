import{d as Y,c as r,b as Z,I as t,m as $,F as ee,z as F,A as q,B as y,J as I,O as x,H as te,E as T,G as D,D as N}from"./vue.esm-bundler-DC82FEWN.js";import{_ as P}from"./FSSpan-CwfDYIua.js";import{_ as U}from"./FSCol-B7HQy3FB.js";import{_ as E}from"./FSRow-DoCXWKDP.js";import{C as d,u as ae}from"./useColors-WxHDk9aB.js";import{u as le}from"./useRules-DS9e5-1Q.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as oe}from"./index-DWl9tX7E.js";import{V as re}from"./VDefaultsProvider-CTE9NJfn.js";import{a as ne,u as ue,V as z}from"./VInput-BvcCh06W.js";import{m as ie,V as O}from"./VSelectionControl-DLPOArCM.js";import{u as de,L as ce}from"./loader-CTRePS7y.js";import{u as R}from"./proxiedModel-CYw7-KgF.js";import{V as fe}from"./VIcon-uFUcYN4x.js";import{V as me}from"./VProgressCircular-D8KFt_en.js";import{p as pe,e as he,u as ve}from"./theme-CDGAP9oX.js";import{g as ge,u as Ve}from"./color-BhlhQtQT.js";import"./useSlots-V2mVelz6.js";import"./css-DYOPUjjE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./locale-BC9z6YbT.js";import"./transition-CJbyFvkq.js";import"./density-XYshZx8z.js";import"./index-ySUbTvsm.js";import"./VLabel-Cp9LN_v7.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";const L=Y({name:"FSSwitch",components:{FSSpan:P,FSCol:U,FSRow:E},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:d.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:f,getMessages:a}=le(),{getColors:l}=ae(),s=r(()=>l(e.color)),n=l(d.Background),w=l(d.Error),u=l(d.Light),m=l(d.Dark),p=r(()=>e.editable?h.value.length?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":w.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":m.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?s.value.base:u.dark,"--fs-switch-thumb-color":n.base,"--fs-switch-color":m.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":e.modelValue?s.value.light:u.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":u.dark}),b=r(()=>e.modelValue?"text-button":"text-body"),h=r(()=>e.messages??a(e.modelValue,e.rules));return{validateOn:f,messages:h,style:p,font:b,onToggle:()=>{e.editable&&c("update:modelValue",!e.modelValue)}}}}),ye=pe({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ne(),...ie()},"VSwitch"),we=ge()({name:"VSwitch",inheritAttrs:!1,props:ye(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,c){let{attrs:f,slots:a}=c;const l=R(e,"indeterminate"),s=R(e,"modelValue"),{loaderClasses:n}=de(e),{isFocused:w,focus:u,blur:m}=ue(e),p=Z(),b=r(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),h=he(),B=r(()=>e.id||`switch-${h}`);function M(){l.value&&(l.value=!1)}function G(v){var g,V;v.stopPropagation(),v.preventDefault(),(V=(g=p.value)==null?void 0:g.input)==null||V.click()}return Ve(()=>{const[v,g]=ve(f),V=z.filterProps(e),H=O.filterProps(e);return t(z,$({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},n.value,e.class]},v,V,{modelValue:s.value,"onUpdate:modelValue":k=>s.value=k,id:B.value,focused:w.value,style:e.style}),{...a,default:k=>{let{id:J,messagesId:j,isDisabled:K,isReadonly:Q,isValid:A}=k;const S={model:s,isValid:A};return t(O,$({ref:p},H,{modelValue:s.value,"onUpdate:modelValue":[i=>s.value=i,M],id:J.value,"aria-describedby":j.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:K.value,readonly:Q.value,onFocus:u,onBlur:m},g),{...a,default:i=>{let{backgroundColorClasses:C,backgroundColorStyles:o}=i;return t("div",{class:["v-switch__track",...C.value],style:o.value,onClick:G},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](S)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](S)])])},input:i=>{let{inputNode:C,icon:o,backgroundColorClasses:W,backgroundColorStyles:X}=i;return t(ee,null,[C,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":o||e.loading},e.inset?void 0:W.value],style:e.inset?void 0:X.value},[a.thumb?t(re,{defaults:{VIcon:{icon:o,size:"x-small"}}},{default:()=>[a.thumb({...S,icon:o})]}):t(oe,null,{default:()=>[e.loading?t(ce,{name:"v-switch",active:!0,color:A.value===!1?void 0:b.value},{default:_=>a.loader?a.loader(_):t(me,{active:_.isActive,color:_.color,indeterminate:!0,size:"16",width:"2"},null)}):o&&t(fe,{key:String(o),icon:o,size:"x-small"},null)]})])])}})}})}),{}}});function be(e,c,f,a,l,s){return F(),q(U,{width:"hug"},{default:y(()=>[t(E,{width:"hug",align:"center-left"},{default:y(()=>[t(we,$({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","rules","validateOn","modelValue","onUpdate:modelValue"]),I(e.$slots,"default",{},()=>[e.$props.label?(F(),q(P,{key:0,class:"fs-switch-label",style:x(e.style),font:e.font,onClick:te(e.onToggle,["stop"])},{default:y(()=>[T(D(e.$props.label),1)]),_:1},8,["style","font","onClick"])):N("",!0)])]),_:3}),I(e.$slots,"description",{},()=>[e.$props.description?(F(),q(P,{key:0,class:"fs-switch-description",font:"text-underline",style:x(e.style)},{default:y(()=>[T(D(e.$props.description),1)]),_:1},8,["style"])):N("",!0)])]),_:3})}const We=se(L,[["render",be]]);L.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};export{We as default};
