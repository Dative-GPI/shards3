import{c as o,s as x,b as A,w as B,p as J,v as Q,i as W,K as m,u as X,a1 as Z,g as ee,o as ae,n as ne}from"./vue.esm-bundler-DeSao-KJ.js";import{u as te,a as se}from"./locale-BTkT-VzI.js";import{V as le}from"./VIcon-B0BI55vc.js";import{b as ie}from"./index-BIb3aONP.js";import{a as ue}from"./color-XZPyE2lN.js";import{m as N,g as U,u as H}from"./useRender-CIdmfI-I.js";import{m as re,M as oe}from"./transition-CTQG5_JK.js";import{p as C,E as D,g as j,w,n as L}from"./theme-RQK62Xub.js";import{m as de,u as ce}from"./density-4sjlTnVP.js";import{I as T}from"./tag-BL1d6r1f.js";import{u as F,a as K}from"./proxiedModel-B9H_VIYa.js";const Y=Symbol.for("vuetify:form"),Ae=C({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function De(e){const c=F(e,"modelValue"),v=o(()=>e.disabled),n=o(()=>e.readonly),r=x(!1),a=A([]),s=A([]);async function f(){const l=[];let t=!0;s.value=[],r.value=!0;for(const d of a.value){const i=await d.validate();if(i.length>0&&(t=!1,l.push({id:d.id,errorMessages:i})),!t&&e.fastFail)break}return s.value=l,r.value=!1,{valid:t,errors:s.value}}function I(){a.value.forEach(l=>l.reset())}function V(){a.value.forEach(l=>l.resetValidation())}return B(a,()=>{let l=0,t=0;const d=[];for(const i of a.value)i.isValid===!1?(t++,d.push({id:i.id,errorMessages:i.errorMessages})):i.isValid===!0&&l++;s.value=d,c.value=t>0?!1:l===a.value.length?!0:null},{deep:!0,flush:"post"}),J(Y,{register:l=>{let{id:t,validate:d,reset:i,resetValidation:h}=l;a.value.some(k=>k.id===t),a.value.push({id:t,validate:d,reset:i,resetValidation:h,isValid:null,errorMessages:[]})},unregister:l=>{a.value=a.value.filter(t=>t.id!==l)},update:(l,t,d)=>{const i=a.value.find(h=>h.id===l);i&&(i.isValid=t,i.errorMessages=d)},isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validateOn:Q(e,"validateOn")}),{errors:s,isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validate:f,reset:I,resetValidation:V}}function ve(){return W(Y,null)}function fe(e){const{t:c}=te();function v(n){let{name:r}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[r],s=e[`onClick:${r}`],f=s&&a?c(`$vuetify.input.${a}`,e.label??""):void 0;return m(le,{icon:e[`${r}Icon`],"aria-label":f,onClick:s},null)}return{InputIcon:v}}const ge=C({focused:Boolean,"onUpdate:focused":D()},"focus");function Fe(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();const v=F(e,"focused"),n=o(()=>({[`${c}--focused`]:v.value}));function r(){v.value=!0}function a(){v.value=!1}return{focusClasses:n,isFocused:v,focus:r,blur:a}}const me=C({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...N(),...re({transition:{component:ie,leaveAbsolute:!0,group:!0}})},"VMessages"),ye=U()({name:"VMessages",props:me(),setup(e,c){let{slots:v}=c;const n=o(()=>w(e.messages)),{textColorClasses:r,textColorStyles:a}=ue(o(()=>e.color));return H(()=>m(oe,{transition:e.transition,tag:"div",class:["v-messages",r.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((s,f)=>m("div",{class:"v-messages__message",key:`${f}-${n.value}`},[v.message?v.message({message:s}):s]))]})),{}}}),pe=C({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...ge()},"validation");function he(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j(),v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:L();const n=F(e,"modelValue"),r=o(()=>e.validationValue===void 0?n.value:e.validationValue),a=ve(),s=A([]),f=x(!0),I=o(()=>!!(w(n.value===""?null:n.value).length||w(r.value===""?null:r.value).length)),V=o(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),l=o(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),t=o(()=>{var u;return(u=e.errorMessages)!=null&&u.length?w(e.errorMessages).concat(s.value).slice(0,Math.max(0,+e.maxErrors)):s.value}),d=o(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const g=new Set((u==null?void 0:u.split(" "))??[]);return{blur:g.has("blur")||g.has("input"),input:g.has("input"),submit:g.has("submit"),lazy:g.has("lazy")}}),i=o(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?f.value?s.value.length||d.value.lazy?null:!0:!s.value.length:!0}),h=x(!1),k=o(()=>({[`${c}--error`]:i.value===!1,[`${c}--dirty`]:I.value,[`${c}--disabled`]:V.value,[`${c}--readonly`]:l.value})),M=o(()=>e.name??X(v));Z(()=>{a==null||a.register({id:M.value,validate:y,reset:$,resetValidation:S})}),ee(()=>{a==null||a.unregister(M.value)}),ae(async()=>{d.value.lazy||await y(!0),a==null||a.update(M.value,i.value,t.value)}),K(()=>d.value.input,()=>{B(r,()=>{if(r.value!=null)y();else if(e.focused){const u=B(()=>e.focused,g=>{g||y(),u()})}})}),K(()=>d.value.blur,()=>{B(()=>e.focused,u=>{u||y()})}),B([i,t],()=>{a==null||a.update(M.value,i.value,t.value)});async function $(){n.value=null,await ne(),await S()}async function S(){f.value=!0,d.value.lazy?s.value=[]:await y(!0)}async function y(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const g=[];h.value=!0;for(const b of e.rules){if(g.length>=+(e.maxErrors??1))break;const p=await(typeof b=="function"?b:()=>b)(r.value);if(p!==!0){if(p!==!1&&typeof p!="string"){console.warn(`${p} is not a valid value. Rule functions must return boolean true or a string.`);continue}g.push(p||"")}}return s.value=g,h.value=!1,f.value=u,s.value}return{errorMessages:t,isDirty:I,isDisabled:V,isReadonly:l,isPristine:f,isValid:i,isValidating:h,reset:$,resetValidation:S,validate:y,validationClasses:k}}const Ve=C({id:String,appendIcon:T,centerAffix:{type:Boolean,default:!0},prependIcon:T,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":D(),"onClick:append":D(),...N(),...de(),...pe()},"VInput"),_e=U()({name:"VInput",props:{...Ve()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:v,slots:n,emit:r}=c;const{densityClasses:a}=ce(e),{rtlClasses:s}=se(),{InputIcon:f}=fe(e),I=L(),V=o(()=>e.id||`input-${I}`),l=o(()=>`${V.value}-messages`),{errorMessages:t,isDirty:d,isDisabled:i,isReadonly:h,isPristine:k,isValid:M,isValidating:$,reset:S,resetValidation:y,validate:u,validationClasses:g}=he(e,"v-input",V),b=o(()=>({id:V,messagesId:l,isDirty:d,isDisabled:i,isReadonly:h,isPristine:k,isValid:M,isValidating:$,reset:S,resetValidation:y,validate:u})),P=o(()=>{var p;return(p=e.errorMessages)!=null&&p.length||!k.value&&t.value.length?t.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return H(()=>{var z,E,R,O;const p=!!(n.prepend||e.prependIcon),q=!!(n.append||e.appendIcon),_=P.value.length>0,G=!e.hideDetails||e.hideDetails==="auto"&&(_||!!n.details);return m("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,s.value,g.value,e.class],style:e.style},[p&&m("div",{key:"prepend",class:"v-input__prepend"},[(z=n.prepend)==null?void 0:z.call(n,b.value),e.prependIcon&&m(f,{key:"prepend-icon",name:"prepend"},null)]),n.default&&m("div",{class:"v-input__control"},[(E=n.default)==null?void 0:E.call(n,b.value)]),q&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(f,{key:"append-icon",name:"append"},null),(R=n.append)==null?void 0:R.call(n,b.value)]),G&&m("div",{class:"v-input__details"},[m(ye,{id:l.value,active:_,messages:P.value},{message:n.message}),(O=n.details)==null?void 0:O.call(n,b.value)])])}),{reset:S,resetValidation:y,validate:u,isValid:M,errorMessages:t}}});export{_e as V,Ve as a,ve as b,De as c,ge as d,fe as e,Ae as m,Fe as u};
