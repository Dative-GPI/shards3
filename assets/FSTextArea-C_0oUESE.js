import{c as y,b as C,s as ie,q as de,o as fe,w as $,v as ce,L as o,m as I,F as z,X as L,Y as me,a1 as ve,n as T,d as pe,y as ge,z as j,A as J,M as K,B as S,I as X,J as Y,K as Q,D as ye,N as be}from"./vue.esm-bundler-Vj2X7okO.js";import{F as he}from"./FSBaseField-Na9zArMU.js";import{_ as Z}from"./FSCol-Bk577joi.js";import{u as Ve}from"./useRules-DpnTqc7T.js";import{u as xe}from"./css-CbCR1nbl.js";import{u as we,C as P}from"./useColors-ClJ5KOuK.js";import{u as Fe}from"./useSlots-DXmhvOIb.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $e}from"./FSButton-DypSO1L1.js";import{m as Se,f as qe,V as ke,a as Be}from"./VField-C1LOclAH.js";import{m as Pe,u as Ie,V as W}from"./VInput-CifUC8kS.js";import{f as Re}from"./forwardRefs-DWGaNmQL.js";import{u as Ae}from"./proxiedModel-CZPY81Tp.js";import{I as He}from"./index-DQeMThUY.js";import{p as Ne,u as Ge,v as Me,c as ze,D as Te}from"./theme-DqOMA9k1.js";import{g as De,a as Ee}from"./color-Dk23S21P.js";const Oe=Ne({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Pe(),...Se()},"VTextarea"),Ue=De()({name:"VTextarea",directives:{Intersect:He},inheritAttrs:!1,props:Oe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:b,emit:h,slots:l}=f;const t=Ae(e,"modelValue"),{isFocused:i,focus:n,blur:p}=Ie(e),w=y(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),R=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function A(a,s){var r,d;!e.autofocus||!a||(d=(r=s[0].target)==null?void 0:r.focus)==null||d.call(r)}const u=C(),c=C(),F=ie(""),g=C(),ee=y(()=>e.persistentPlaceholder||i.value||e.active);function H(){var a;g.value!==document.activeElement&&((a=g.value)==null||a.focus()),i.value||n()}function ae(a){H(),h("click:control",a)}function te(a){h("mousedown:control",a)}function le(a){a.stopPropagation(),H(),T(()=>{t.value="",Me(e["onClick:clear"],a)})}function re(a){var r;const s=a.target;if(t.value=s.value,(r=e.modelModifiers)!=null&&r.trim){const d=[s.selectionStart,s.selectionEnd];T(()=>{s.selectionStart=d[0],s.selectionEnd=d[1]})}}const V=C(),q=C(+e.rows),N=y(()=>["plain","underlined"].includes(e.variant));de(()=>{e.autoGrow||(q.value=+e.rows)});function x(){e.autoGrow&&T(()=>{if(!V.value||!c.value)return;const a=getComputedStyle(V.value),s=getComputedStyle(c.value.$el),r=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),d=V.value.scrollHeight,k=parseFloat(a.lineHeight),G=Math.max(parseFloat(e.rows)*k+r,parseFloat(s.getPropertyValue("--v-input-control-height"))),M=parseFloat(e.maxRows)*k+r||1/0,v=Te(d??0,G,M);q.value=Math.floor((v-r)/k),F.value=ze(v)})}fe(x),$(t,x),$(()=>e.rows,x),$(()=>e.maxRows,x),$(()=>e.density,x);let m;return $(V,a=>{a?(m=new ResizeObserver(x),m.observe(V.value)):m==null||m.disconnect()}),ce(()=>{m==null||m.disconnect()}),Ee(()=>{const a=!!(l.counter||e.counter||e.counterValue),s=!!(a||l.details),[r,d]=Ge(b),{modelValue:k,...G}=W.filterProps(e),M=qe(e);return o(W,I({ref:u,modelValue:t.value,"onUpdate:modelValue":v=>t.value=v,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":N.value},e.class],style:e.style},r,G,{centerAffix:q.value===1&&!N.value,focused:i.value}),{...l,default:v=>{let{id:B,isDisabled:D,isDirty:E,isReadonly:oe,isValid:ne}=v;return o(ke,I({ref:c,style:{"--v-textarea-control-height":F.value},onClick:ae,onMousedown:te,"onClick:clear":le,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},M,{id:B.value,active:ee.value||E.value,centerAffix:q.value===1&&!N.value,dirty:E.value||e.dirty,disabled:D.value,focused:i.value,error:ne.value===!1}),{...l,default:se=>{let{props:{class:O,...U}}=se;return o(z,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),L(o("textarea",I({ref:g,class:O,value:t.value,onInput:re,autofocus:e.autofocus,readonly:oe.value,disabled:D.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:H,onBlur:p},U,d),null),[[me("intersect"),{handler:A},null,{once:!0}]]),e.autoGrow&&L(o("textarea",{class:[O,"v-textarea__sizer"],id:`${U.id}-sizer`,"onUpdate:modelValue":ue=>t.value=ue,ref:V,readonly:!0,"aria-hidden":"true"},null),[[ve,t.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:s?v=>{var B;return o(z,null,[(B=l.details)==null?void 0:B.call(l,v),a&&o(z,null,[o("span",null,null),o(Be,{active:e.persistentCounter||i.value,value:w.value,max:R.value},l.counter)])])}:void 0})}),Re({},u,c,g)}}),_=pe({name:"FSTextArea",components:{FSBaseField:he,FSCol:Z},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:f,getMessages:b}=Ve(),{isMobileSized:h}=xe(),{getColors:l}=we(),{slots:t}=Fe();delete t.label;const i=l(P.Error),n=l(P.Light),p=l(P.Dark),w=y(()=>{let u,c;if(!e.autoGrow){const F=h.value?34:38,g=h.value?14:16;e.rows>1?u=`${F+(e.rows-1)*g}px`:u=`${F}px`,c=`${e.rows*g}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":n.dark,"--fs-text-area-color":p.base,"--fs-text-area-active-border-color":p.dark,"--fs-text-area-error-border-color":i.base,"--fs-text-area-height":u,"--fs-text-area-field-height":c}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":n.base,"--fs-text-area-color":n.dark,"--fs-text-area-active-border-color":n.base,"--fs-text-area-height":u,"--fs-text-area-field-height":c}}),R=y(()=>{const u=["fs-text-area"];return e.autoGrow&&u.push("fs-text-area-auto-grow"),u}),A=y(()=>e.messages??b(e.modelValue,e.rules));return{validateOn:f,ColorEnum:P,messages:A,classes:R,style:w,slots:t}}});function Le(e,f,b,h,l,t){const i=ge("FSBaseField");return j(),J(i,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},K({default:S(()=>[o(Ue,I({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,persistentClear:!0,hideDetails:!0,noResize:!0,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":f[1]||(f[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),K({clear:S(()=>[o(Z,{align:"center-center"},{default:S(()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(j(),J($e,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:f[0]||(f[0]=n=>e.$emit("update:modelValue",null))},null,8,["color"])):ye("",!0)]),_:1})]),_:2},[be(e.slots,(n,p)=>({name:p,fn:S(w=>[X(e.$slots,p,Y(Q(w)))])}))]),1040,["style","class","rows","autoGrow","readonly","clearable","rules","validateOn","modelValue"])]),_:2},[e.$slots.label?{name:"label",fn:S(n=>[X(e.$slots,"label",Y(Q(n)))]),key:"0"}:void 0]),1032,["label","description","hideHeader","required","editable","messages"])}const sa=Ce(_,[["render",Le]]);_.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label",scoped:!0,bindings:[]},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};export{sa as F};
