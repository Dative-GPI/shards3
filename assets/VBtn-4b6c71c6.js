import{f as m,B as F,m as r,F as fe,S as H,A as x,N as M,e as ge,K as U,w as j,r as be,V as ye,y as he,R as ke,P as Ce,Q as Se}from"./vue.esm-bundler-66d46254.js";import{p as C,a as $,M as Ie,i as q,j as J,o as K,g as _,q as Q,c as Ve,u as L,e as X,A as xe,d as Be,C as Pe,N as we,v as V,f as O,n as Ne,s as Ge,V as N}from"./FSRow-c0589bf9.js";import{m as Y,a as Z,u as p,b as ee}from"./rounded-249030ea.js";import{b as $e,m as _e,f as Le,c as Te,g as Ae}from"./loader-72eca065.js";import{m as De,u as Re,V as G}from"./router-f5bee237.js";import{R as Ee,V as We}from"./index-26618c09.js";const ne=C({border:[Boolean,Number,String]},"border");function te(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{borderClasses:m(()=>{const n=F(e)?e.value:e.border,t=[];if(n===!0||n==="")t.push(`${a}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))t.push(`border-${l}`);return t})}}const ae=C({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function se(e){return{elevationClasses:m(()=>{const s=F(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const He=["elevated","flat","tonal","outlined","text","plain"];function Oe(e,a){return r(fe,null,[e&&r("span",{key:"overlay",class:`${a}__overlay`},null),r("span",{key:"underlay",class:`${a}__underlay`},null)])}const le=C({color:String,variant:{type:String,default:"elevated",validator:e=>He.includes(e)}},"variant");function ze(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();const s=m(()=>{const{variant:l}=H(e);return`${a}--variant-${l}`}),{colorClasses:n,colorStyles:t}=Ie(m(()=>{const{variant:l,color:c}=H(e);return{[["elevated","flat"].includes(l)?"background":"text"]:c}}));return{colorClasses:n,colorStyles:t,variantClasses:s}}const ie=C({divided:Boolean,...ne(),...q(),...Y(),...ae(),...Z(),...J(),...K(),...le()},"VBtnGroup"),z=_()({name:"VBtnGroup",props:ie(),setup(e,a){let{slots:s}=a;const{themeClasses:n}=Q(e),{densityClasses:t}=p(e),{borderClasses:l}=te(e),{elevationClasses:c}=se(e),{roundedClasses:h}=ee(e);Ve({VBtn:{height:"auto",color:x(e,"color"),density:x(e,"density"),flat:!0,variant:x(e,"variant")}}),L(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,t.value,c.value,h.value,e.class],style:e.style},s))}}),Fe=C({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Me=C({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ue(e,a){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=X("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=xe();M(Symbol.for(`${a.description}:id`),t);const l=ge(a,null);if(!l){if(!s)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const c=x(e,"value"),h=m(()=>!!(l.disabled.value||e.disabled));l.register({id:t,value:c,disabled:h},n),U(()=>{l.unregister(t)});const g=m(()=>l.isSelected(t)),S=m(()=>g.value&&[l.selectedClass.value,e.selectedClass]);return j(g,I=>{n.emit("group:selected",{value:I})}),{id:t,isSelected:g,toggle:()=>l.select(t,!g.value),select:I=>l.select(t,I),selectedClass:S,value:c,disabled:h,group:l}}function je(e,a){let s=!1;const n=be([]),t=$e(e,"modelValue",[],i=>i==null?[]:oe(n,Pe(i)),i=>{const o=Je(n,i);return e.multiple?o:o[0]}),l=X("useGroup");function c(i,o){const v=i,u=Symbol.for(`${a.description}:id`),k=we(u,l==null?void 0:l.vnode).indexOf(o);k>-1?n.splice(k,0,v):n.push(v)}function h(i){if(s)return;g();const o=n.findIndex(v=>v.id===i);n.splice(o,1)}function g(){const i=n.find(o=>!o.disabled);i&&e.mandatory==="force"&&!t.value.length&&(t.value=[i.id])}ye(()=>{g()}),U(()=>{s=!0});function S(i,o){const v=n.find(u=>u.id===i);if(!(o&&(v!=null&&v.disabled)))if(e.multiple){const u=t.value.slice(),b=u.findIndex(d=>d===i),k=~b;if(o=o??!k,k&&e.mandatory&&u.length<=1||!k&&e.max!=null&&u.length+1>e.max)return;b<0&&o?u.push(i):b>=0&&!o&&u.splice(b,1),t.value=u}else{const u=t.value.includes(i);if(e.mandatory&&u)return;t.value=o??!u?[i]:[]}}function I(i){if(e.multiple,t.value.length){const o=t.value[0],v=n.findIndex(k=>k.id===o);let u=(v+i)%n.length,b=n[u];for(;b.disabled&&u!==v;)u=(u+i)%n.length,b=n[u];if(b.disabled)return;t.value=[n[u].id]}else{const o=n.find(v=>!v.disabled);o&&(t.value=[o.id])}}const B={register:c,unregister:h,selected:t,select:S,disabled:x(e,"disabled"),prev:()=>I(n.length-1),next:()=>I(1),isSelected:i=>t.value.includes(i),selectedClass:m(()=>e.selectedClass),items:m(()=>n),getItemIndex:i=>qe(n,i)};return M(a,B),B}function qe(e,a){const s=oe(e,[a]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function oe(e,a){const s=[];return a.forEach(n=>{const t=e.find(c=>Be(n,c.value)),l=e[n];(t==null?void 0:t.value)!=null?s.push(t.id):l!=null&&s.push(l.id)}),s}function Je(e,a){const s=[];return a.forEach(n=>{const t=e.findIndex(l=>l.id===n);if(~t){const l=e[t];s.push(l.value!=null?l.value:t)}}),s}const ue=Symbol.for("vuetify:v-btn-toggle"),Ke=C({...ie(),...Fe()},"VBtnToggle");_()({name:"VBtnToggle",props:Ke(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:s}=a;const{isSelected:n,next:t,prev:l,select:c,selected:h}=je(e,ue);return L(()=>{const g=z.filterProps(e);return r(z,he({class:["v-btn-toggle",e.class]},g,{style:e.style}),{default:()=>{var S;return[(S=s.default)==null?void 0:S.call(s,{isSelected:n,next:t,prev:l,select:c,selected:h})]}})}),{next:t,prev:l,select:c}}});const Qe=C({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Xe(e){return{dimensionStyles:m(()=>({height:V(e.height),maxHeight:V(e.maxHeight),maxWidth:V(e.maxWidth),minHeight:V(e.minHeight),minWidth:V(e.minWidth),width:V(e.width)}))}}const Ye=["static","relative","fixed","absolute","sticky"],Ze=C({position:{type:String,validator:e=>Ye.includes(e)}},"position");function pe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{positionClasses:m(()=>e.position?`${a}--${e.position}`:void 0)}}function en(e,a){j(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&a&&ke(()=>{a(!0)})},{immediate:!0})}const nn=C({active:{type:Boolean,default:void 0},symbol:{type:null,default:ue},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:O,appendIcon:O,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...ne(),...q(),...Y(),...Qe(),...ae(),...Me(),..._e(),...Le(),...Ze(),...Z(),...De(),...Ne(),...J({tag:"button"}),...K(),...le({variant:"elevated"})},"VBtn"),dn=_()({name:"VBtn",directives:{Ripple:Ee},props:nn(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:s,slots:n}=a;const{themeClasses:t}=Q(e),{borderClasses:l}=te(e),{colorClasses:c,colorStyles:h,variantClasses:g}=ze(e),{densityClasses:S}=p(e),{dimensionStyles:I}=Xe(e),{elevationClasses:B}=se(e),{loaderClasses:i}=Te(e),{locationStyles:o}=Ae(e),{positionClasses:v}=pe(e),{roundedClasses:u}=ee(e),{sizeClasses:b,sizeStyles:k}=Ge(e),d=Ue(e,e.symbol,!1),f=Re(e,s),de=m(()=>{var y;return e.active!==void 0?e.active:f.isLink.value?(y=f.isActive)==null?void 0:y.value:d==null?void 0:d.isSelected.value}),P=m(()=>(d==null?void 0:d.disabled.value)||e.disabled),re=m(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),ce=m(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function ve(y){var w;P.value||f.isLink.value&&(y.metaKey||y.ctrlKey||y.shiftKey||y.button!==0||s.target==="_blank")||((w=f.navigate)==null||w.call(f,y),d==null||d.toggle())}return en(f,d==null?void 0:d.select),L(()=>{var D,R;const y=f.isLink.value?"a":e.tag,w=!!(e.prependIcon||n.prepend),me=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),A=(d==null?void 0:d.isSelected.value)&&(!f.isLink.value||((D=f.isActive)==null?void 0:D.value))||!d||((R=f.isActive)==null?void 0:R.value);return Ce(r(y,{type:y==="a"?void 0:"button",class:["v-btn",d==null?void 0:d.selectedClass.value,{"v-btn--active":de.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":re.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},t.value,l.value,A?c.value:void 0,S.value,B.value,i.value,v.value,u.value,b.value,g.value,e.class],style:[A?h.value:void 0,I.value,o.value,k.value,e.style],disabled:P.value||void 0,href:f.href.value,onClick:ve,value:ce.value},{default:()=>{var E;return[Oe(!0,"v-btn"),!e.icon&&w&&r("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?r(G,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):r(N,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?r(N,{key:"content-icon",icon:e.icon},null):r(G,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var W;return[((W=n.default)==null?void 0:W.call(n))??e.text]}})]),!e.icon&&me&&r("span",{key:"append",class:"v-btn__append"},[n.append?r(G,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):r(N,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((E=n.loader)==null?void 0:E.call(n))??r(We,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Se("ripple"),!P.value&&e.ripple,null]])}),{}}});export{dn as V,Fe as a,je as b,nn as c,Me as m,Ue as u};
