import{z as m,j as o,s as A,d as D,w as B,p as J,E as Q,f as W,u as X,a3 as Z,m as ee,o as ae,n as ne}from"./vue.esm-bundler-a6679ce1.js";import{u as te,a as se}from"./locale-06782a67.js";import{V as le}from"./VIcon-8b39f3af.js";import{b as ie}from"./index-3965c569.js";import{u as ue}from"./color-3a7410fc.js";import{m as U,g as j,u as H}from"./useRender-af29532b.js";import{m as re,M as oe}from"./transition-8ea299cd.js";import{p as $,w as P,G as w,g as K,s as G}from"./theme-8c0eb56d.js";import{m as de,u as ce}from"./density-5c9f41ad.js";import{I as T}from"./tag-c6e00dba.js";import{u as z,a as N}from"./proxiedModel-8c3bd5c0.js";function ve(e){const{t:c}=te();function v(n){let{name:r}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[r],s=e[`onClick:${r}`],f=s&&a?c(`$vuetify.input.${a}`,e.label??""):void 0;return m(le,{icon:e[`${r}Icon`],"aria-label":f,onClick:s},null)}return{InputIcon:v}}const fe=$({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...U(),...re({transition:{component:ie,leaveAbsolute:!0,group:!0}})},"VMessages"),ge=j()({name:"VMessages",props:fe(),setup(e,c){let{slots:v}=c;const n=o(()=>P(e.messages)),{textColorClasses:r,textColorStyles:a}=ue(o(()=>e.color));return H(()=>m(oe,{transition:e.transition,tag:"div",class:["v-messages",r.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((s,f)=>m("div",{class:"v-messages__message",key:`${f}-${n.value}`},[v.message?v.message({message:s}):s]))]})),{}}}),me=$({focused:Boolean,"onUpdate:focused":w()},"focus");function De(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const v=z(e,"focused"),n=o(()=>({[`${c}--focused`]:v.value}));function r(){v.value=!0}function a(){v.value=!1}return{focusClasses:n,isFocused:v,focus:r,blur:a}}const L=Symbol.for("vuetify:form"),we=$({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function ze(e){const c=z(e,"modelValue"),v=o(()=>e.disabled),n=o(()=>e.readonly),r=A(!1),a=D([]),s=D([]);async function f(){const l=[];let t=!0;s.value=[],r.value=!0;for(const d of a.value){const i=await d.validate();if(i.length>0&&(t=!1,l.push({id:d.id,errorMessages:i})),!t&&e.fastFail)break}return s.value=l,r.value=!1,{valid:t,errors:s.value}}function I(){a.value.forEach(l=>l.reset())}function V(){a.value.forEach(l=>l.resetValidation())}return B(a,()=>{let l=0,t=0;const d=[];for(const i of a.value)i.isValid===!1?(t++,d.push({id:i.id,errorMessages:i.errorMessages})):i.isValid===!0&&l++;s.value=d,c.value=t>0?!1:l===a.value.length?!0:null},{deep:!0,flush:"post"}),J(L,{register:l=>{let{id:t,validate:d,reset:i,resetValidation:h}=l;a.value.some(k=>k.id===t),a.value.push({id:t,validate:d,reset:i,resetValidation:h,isValid:null,errorMessages:[]})},unregister:l=>{a.value=a.value.filter(t=>t.id!==l)},update:(l,t,d)=>{const i=a.value.find(h=>h.id===l);i&&(i.isValid=t,i.errorMessages=d)},isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validateOn:Q(e,"validateOn")}),{errors:s,isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validate:f,reset:I,resetValidation:V}}function pe(){return W(L,null)}const ye=$({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...me()},"validation");function he(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:G();const n=z(e,"modelValue"),r=o(()=>e.validationValue===void 0?n.value:e.validationValue),a=pe(),s=D([]),f=A(!0),I=o(()=>!!(P(n.value===""?null:n.value).length||P(r.value===""?null:r.value).length)),V=o(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),l=o(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),t=o(()=>{var u;return(u=e.errorMessages)!=null&&u.length?P(e.errorMessages).concat(s.value).slice(0,Math.max(0,+e.maxErrors)):s.value}),d=o(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const g=new Set((u==null?void 0:u.split(" "))??[]);return{blur:g.has("blur")||g.has("input"),input:g.has("input"),submit:g.has("submit"),lazy:g.has("lazy")}}),i=o(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?f.value?s.value.length||d.value.lazy?null:!0:!s.value.length:!0}),h=A(!1),k=o(()=>({[`${c}--error`]:i.value===!1,[`${c}--dirty`]:I.value,[`${c}--disabled`]:V.value,[`${c}--readonly`]:l.value})),M=o(()=>e.name??X(v));Z(()=>{a==null||a.register({id:M.value,validate:p,reset:C,resetValidation:S})}),ee(()=>{a==null||a.unregister(M.value)}),ae(async()=>{d.value.lazy||await p(!0),a==null||a.update(M.value,i.value,t.value)}),N(()=>d.value.input,()=>{B(r,()=>{if(r.value!=null)p();else if(e.focused){const u=B(()=>e.focused,g=>{g||p(),u()})}})}),N(()=>d.value.blur,()=>{B(()=>e.focused,u=>{u||p()})}),B([i,t],()=>{a==null||a.update(M.value,i.value,t.value)});function C(){n.value=null,ne(S)}function S(){f.value=!0,d.value.lazy?s.value=[]:p(!0)}async function p(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const g=[];h.value=!0;for(const b of e.rules){if(g.length>=+(e.maxErrors??1))break;const y=await(typeof b=="function"?b:()=>b)(r.value);if(y!==!0){if(y!==!1&&typeof y!="string"){console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`);continue}g.push(y||"")}}return s.value=g,h.value=!1,f.value=u,s.value}return{errorMessages:t,isDirty:I,isDisabled:V,isReadonly:l,isPristine:f,isValid:i,isValidating:h,reset:C,resetValidation:S,validate:p,validationClasses:k}}const Ve=$({id:String,appendIcon:T,centerAffix:{type:Boolean,default:!0},prependIcon:T,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":w(),"onClick:append":w(),...U(),...de(),...ye()},"VInput"),Fe=j()({name:"VInput",props:{...Ve()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:v,slots:n,emit:r}=c;const{densityClasses:a}=ce(e),{rtlClasses:s}=se(),{InputIcon:f}=ve(e),I=G(),V=o(()=>e.id||`input-${I}`),l=o(()=>`${V.value}-messages`),{errorMessages:t,isDirty:d,isDisabled:i,isReadonly:h,isPristine:k,isValid:M,isValidating:C,reset:S,resetValidation:p,validate:u,validationClasses:g}=he(e,"v-input",V),b=o(()=>({id:V,messagesId:l,isDirty:d,isDisabled:i,isReadonly:h,isPristine:k,isValid:M,isValidating:C,reset:S,resetValidation:p,validate:u})),x=o(()=>{var y;return(y=e.errorMessages)!=null&&y.length||!k.value&&t.value.length?t.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return H(()=>{var _,E,R,O;const y=!!(n.prepend||e.prependIcon),Y=!!(n.append||e.appendIcon),F=x.value.length>0,q=!e.hideDetails||e.hideDetails==="auto"&&(F||!!n.details);return m("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,s.value,g.value,e.class],style:e.style},[y&&m("div",{key:"prepend",class:"v-input__prepend"},[(_=n.prepend)==null?void 0:_.call(n,b.value),e.prependIcon&&m(f,{key:"prepend-icon",name:"prepend"},null)]),n.default&&m("div",{class:"v-input__control"},[(E=n.default)==null?void 0:E.call(n,b.value)]),Y&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(f,{key:"append-icon",name:"append"},null),(R=n.append)==null?void 0:R.call(n,b.value)]),q&&m("div",{class:"v-input__details"},[m(ge,{id:l.value,active:F,messages:x.value},{message:n.message}),(O=n.details)==null?void 0:O.call(n,b.value)])])}),{reset:S,resetValidation:p,validate:u,isValid:M,errorMessages:t}}});export{Fe as V,we as a,pe as b,ze as c,me as d,ve as e,Ve as m,De as u};
