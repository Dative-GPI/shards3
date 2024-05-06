import{A as g,e as d,s as D,d as F,w,p as Q,a8 as X,x as Z,g as ee,u as ae,a5 as ne,m as te,o as se,n as le}from"./vue.esm-bundler-3416a090.js";import{a as ie,u as ue}from"./locale-be130c16.js";import{V as re}from"./VIcon-c583a5e4.js";import{b as oe}from"./index-46378e0b.js";import{a as de}from"./color-5c733e3b.js";import{m as K,g as W,u as j}from"./useRender-fb717f1b.js";import{m as ce,M as ve}from"./transition-6086c96b.js";import{p as P,w as A,F as R,g as G,s as L,b as fe,V as me,G as ge,H as ye}from"./theme-2c100cd8.js";import{m as pe,u as he}from"./density-174ddef7.js";import{m as Ve,u as be}from"./dimensions-97f2f62c.js";import{I as N}from"./tag-a6c90b0c.js";import{u as _,a as U}from"./proxiedModel-868611da.js";function Ie(e){const{t:c}=ie();function v(n){let{name:r}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[r],l=e[`onClick:${r}`],m=l&&a?c(`$vuetify.input.${a}`,e.label??""):void 0;return g(re,{icon:e[`${r}Icon`],"aria-label":m,onClick:l},null)}return{InputIcon:v}}const Me=P({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...K(),...ce({transition:{component:oe,leaveAbsolute:!0,group:!0}})},"VMessages"),ke=W()({name:"VMessages",props:Me(),setup(e,c){let{slots:v}=c;const n=d(()=>A(e.messages)),{textColorClasses:r,textColorStyles:a}=de(d(()=>e.color));return j(()=>g(ve,{transition:e.transition,tag:"div",class:["v-messages",r.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((l,m)=>g("div",{class:"v-messages__message",key:`${m}-${n.value}`},[v.message?v.message({message:l}):l]))]})),{}}}),Se=P({focused:Boolean,"onUpdate:focused":R()},"focus");function Ne(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();const v=_(e,"focused"),n=d(()=>({[`${c}--focused`]:v.value}));function r(){v.value=!0}function a(){v.value=!1}return{focusClasses:n,isFocused:v,focus:r,blur:a}}const Y=Symbol.for("vuetify:form"),Ue=P({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Ke(e){const c=_(e,"modelValue"),v=d(()=>e.disabled),n=d(()=>e.readonly),r=D(!1),a=F([]),l=F([]);async function m(){const i=[];let s=!0;l.value=[],r.value=!0;for(const o of a.value){const t=await o.validate();if(t.length>0&&(s=!1,i.push({id:o.id,errorMessages:t})),!s&&e.fastFail)break}return l.value=i,r.value=!1,{valid:s,errors:l.value}}function I(){a.value.forEach(i=>i.reset())}function V(){a.value.forEach(i=>i.resetValidation())}return w(a,()=>{let i=0,s=0;const o=[];for(const t of a.value)t.isValid===!1?(s++,o.push({id:t.id,errorMessages:t.errorMessages})):t.isValid===!0&&i++;l.value=o,c.value=s>0?!1:i===a.value.length?!0:null},{deep:!0,flush:"post"}),Q(Y,{register:i=>{let{id:s,vm:o,validate:t,reset:p,resetValidation:M}=i;a.value.some(k=>k.id===s),a.value.push({id:s,validate:t,reset:p,resetValidation:M,vm:X(o),isValid:null,errorMessages:[]})},unregister:i=>{a.value=a.value.filter(s=>s.id!==i)},update:(i,s,o)=>{const t=a.value.find(p=>p.id===i);t&&(t.isValid=s,t.errorMessages=o)},isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validateOn:Z(e,"validateOn")}),{errors:l,isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validate:m,reset:I,resetValidation:V}}function Ce(){return ee(Y,null)}const Be=P({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Se()},"validation");function $e(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G(),v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:L();const n=_(e,"modelValue"),r=d(()=>e.validationValue===void 0?n.value:e.validationValue),a=Ce(),l=F([]),m=D(!0),I=d(()=>!!(A(n.value===""?null:n.value).length||A(r.value===""?null:r.value).length)),V=d(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),i=d(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),s=d(()=>{var u;return(u=e.errorMessages)!=null&&u.length?A(e.errorMessages).concat(l.value).slice(0,Math.max(0,+e.maxErrors)):l.value}),o=d(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const f=new Set((u==null?void 0:u.split(" "))??[]);return{blur:f.has("blur")||f.has("input"),input:f.has("input"),submit:f.has("submit"),lazy:f.has("lazy")}}),t=d(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?m.value?l.value.length||o.value.lazy?null:!0:!l.value.length:!0}),p=D(!1),M=d(()=>({[`${c}--error`]:t.value===!1,[`${c}--dirty`]:I.value,[`${c}--disabled`]:V.value,[`${c}--readonly`]:i.value})),k=fe("validation"),b=d(()=>e.name??ae(v));ne(()=>{a==null||a.register({id:b.value,vm:k,validate:y,reset:S,resetValidation:C})}),te(()=>{a==null||a.unregister(b.value)}),se(async()=>{o.value.lazy||await y(!0),a==null||a.update(b.value,t.value,s.value)}),U(()=>o.value.input,()=>{w(r,()=>{if(r.value!=null)y();else if(e.focused){const u=w(()=>e.focused,f=>{f||y(),u()})}})}),U(()=>o.value.blur,()=>{w(()=>e.focused,u=>{u||y()})}),w([t,s],()=>{a==null||a.update(b.value,t.value,s.value)});async function S(){n.value=null,await le(),await C()}async function C(){m.value=!0,o.value.lazy?l.value=[]:await y(!0)}async function y(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const f=[];p.value=!0;for(const B of e.rules){if(f.length>=+(e.maxErrors??1))break;const h=await(typeof B=="function"?B:()=>B)(r.value);if(h!==!0){if(h!==!1&&typeof h!="string"){console.warn(`${h} is not a valid value. Rule functions must return boolean true or a string.`);continue}f.push(h||"")}}return l.value=f,p.value=!1,m.value=u,l.value}return{errorMessages:s,isDirty:I,isDisabled:V,isReadonly:i,isPristine:m,isValid:t,isValidating:p,reset:S,resetValidation:C,validate:y,validationClasses:M}}const we=P({id:String,appendIcon:N,centerAffix:{type:Boolean,default:!0},prependIcon:N,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":R(),"onClick:append":R(),...K(),...pe(),...me(Ve(),["maxWidth","minWidth","width"]),...ge(),...Be()},"VInput"),We=W()({name:"VInput",props:{...we()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:v,slots:n,emit:r}=c;const{densityClasses:a}=he(e),{dimensionStyles:l}=be(e),{themeClasses:m}=ye(e),{rtlClasses:I}=ue(),{InputIcon:V}=Ie(e),i=L(),s=d(()=>e.id||`input-${i}`),o=d(()=>`${s.value}-messages`),{errorMessages:t,isDirty:p,isDisabled:M,isReadonly:k,isPristine:b,isValid:S,isValidating:C,reset:y,resetValidation:u,validate:f,validationClasses:B}=$e(e,"v-input",s),$=d(()=>({id:s,messagesId:o,isDirty:p,isDisabled:M,isReadonly:k,isPristine:b,isValid:S,isValidating:C,reset:y,resetValidation:u,validate:f})),h=d(()=>{var x;return(x=e.errorMessages)!=null&&x.length||!b.value&&t.value.length?t.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return j(()=>{var E,T,O,H;const x=!!(n.prepend||e.prependIcon),q=!!(n.append||e.appendIcon),z=h.value.length>0,J=!e.hideDetails||e.hideDetails==="auto"&&(z||!!n.details);return g("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,m.value,I.value,B.value,e.class],style:[l.value,e.style]},[x&&g("div",{key:"prepend",class:"v-input__prepend"},[(E=n.prepend)==null?void 0:E.call(n,$.value),e.prependIcon&&g(V,{key:"prepend-icon",name:"prepend"},null)]),n.default&&g("div",{class:"v-input__control"},[(T=n.default)==null?void 0:T.call(n,$.value)]),q&&g("div",{key:"append",class:"v-input__append"},[e.appendIcon&&g(V,{key:"append-icon",name:"append"},null),(O=n.append)==null?void 0:O.call(n,$.value)]),J&&g("div",{class:"v-input__details"},[g(ke,{id:o.value,active:z,messages:h.value},{message:n.message}),(H=n.details)==null?void 0:H.call(n,$.value)])])}),{reset:y,resetValidation:u,validate:f,isValid:S,errorMessages:t}}});export{We as V,Ue as a,Ce as b,Ke as c,Se as d,Ie as e,we as m,Ne as u};
