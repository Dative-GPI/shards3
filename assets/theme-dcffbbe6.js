import{F as Q,r as fe,d as p,f as ee,t as le,i as me,a6 as de,_ as he,u as ge,a7 as pe,j as D,g as te,w as I,p as ye}from"./vue.esm-bundler-6746129d.js";const b=typeof window<"u",nt=b&&"IntersectionObserver"in window,rt=b&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function ne(e,t,n){const r=t.length-1;if(r<0)return e===void 0?n:e;for(let s=0;s<r;s++){if(e==null)return n;e=e[t[s]]}return e==null||e[t[r]]===void 0?n:e[t[r]]}function be(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>be(e[r],t[r]))}function ve(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),ne(e,t.split("."),n))}function st(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const s=t(e,n);return typeof s>"u"?n:s}if(typeof t=="string")return ve(e,t,n);if(Array.isArray(t))return ne(e,t,n);if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}function Fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,r)=>t+r)}function ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function N(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function at(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const it=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),ut=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function ct(e){return Object.keys(e)}function M(e,t){return t.every(n=>e.hasOwnProperty(n))}function ft(e,t){const n={},r=new Set(Object.keys(e));for(const s of t)r.has(s)&&(n[s]=e[s]);return n}function H(e,t,n){const r=Object.create(null),s=Object.create(null);for(const o in e)t.some(a=>a instanceof RegExp?a.test(o):a===o)&&!(n!=null&&n.some(a=>a===o))?r[o]=e[o]:s[o]=e[o];return[r,s]}function Ce(e,t){const n={...e};return t.forEach(r=>delete n[r]),n}const re=/^on[^a-z]/,lt=e=>re.test(e),we=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function mt(e){const[t,n]=H(e,[re]),r=Ce(t,we),[s,o]=H(n,["class","style","id",/^data-/]);return Object.assign(s,t),Object.assign(o,r),[s,o]}function dt(e){return e==null?[]:Array.isArray(e)?e:[e]}function ht(e,t){let n=0;const r=function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];clearTimeout(n),n=setTimeout(()=>e(...o),ge(t))};return r.clear=()=>{clearTimeout(n)},r.immediate=e,r}function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function gt(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function V(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function pt(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<e.length;)n.push(e.substr(r,t)),r+=t;return n}function x(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in t){const o=e[s],a=t[s];if(N(o)&&N(a)){r[s]=x(o,a,n);continue}if(Array.isArray(o)&&Array.isArray(a)&&n){r[s]=n(o,a);continue}r[s]=a}return r}function Ae(e){return e.map(t=>t.type===Q?Ae(t.children):t).flat()}function w(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(w.cache.has(e))return w.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return w.cache.set(e,t),t}w.cache=new Map;function P(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>P(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>P(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return P(e,t.component.subTree).flat(1)}return[]}function yt(e){const t=fe({}),n=p(e);return ee(()=>{for(const r in n.value)t[r]=n.value[r]},{flush:"sync"}),le(t)}function bt(e,t){return e.includes(t)}function vt(e){return e[2].toLowerCase()+e.slice(3)}const Ft=()=>[Function,Array];function Ct(e,t){return t="on"+he(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const s of e)s(...n);else typeof e=="function"&&e(...n)}function Oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function Ee(e,t,n){let r,s=e.indexOf(document.activeElement);const o=t==="next"?1:-1;do s+=o,r=e[s];while((!r||r.offsetParent==null||!((n==null?void 0:n(r))??!0))&&s<e.length&&s>=0);return r}function ke(e,t){var r,s,o,a;const n=Oe(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((r=n[0])==null||r.focus());else if(t==="first")(s=n[0])==null||s.focus();else if(t==="last")(o=n.at(-1))==null||o.focus();else if(typeof t=="number")(a=n[t])==null||a.focus();else{const u=Ee(n,t);u?u.focus():ke(e,t==="next"?"first":"last")}}function Tt(e){return e==null||typeof e=="string"&&e.trim()===""}function $t(){}function At(e,t){if(!(b&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function Se(e){return e.some(t=>me(t)?t.type===de?!1:t.type!==Q||Se(t.children):!0)?e:null}function Ot(e,t){if(!b||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}const F=2.4,G=.2126729,W=.7151522,L=.072175,Me=.55,Pe=.58,xe=.57,Be=.62,$=.03,U=1.45,Re=5e-4,je=1.25,De=1.25,Y=.078,X=12.82051282051282,A=.06,z=.001;function Z(e,t){const n=(e.r/255)**F,r=(e.g/255)**F,s=(e.b/255)**F,o=(t.r/255)**F,a=(t.g/255)**F,u=(t.b/255)**F;let m=n*G+r*W+s*L,h=o*G+a*W+u*L;if(m<=$&&(m+=($-m)**U),h<=$&&(h+=($-h)**U),Math.abs(h-m)<Re)return 0;let l;if(h>m){const c=(h**Me-m**Pe)*je;l=c<z?0:c<Y?c-c*X*A:c-A}else{const c=(h**Be-m**xe)*De;l=c>-z?0:c>-Y?c-c*X*A:c+A}return l*100}const k=.20689655172413793,Ie=e=>e>k**3?Math.cbrt(e):e/(3*k**2)+4/29,Ne=e=>e>k?e**3:3*k**2*(e-4/29);function se(e){const t=Ie,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function oe(e){const t=Ne,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const He=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Ve=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Ge=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],We=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ae(e){const t=Array(3),n=Ve,r=He;for(let s=0;s<3;++s)t[s]=Math.round(Te(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function R(e){let{r:t,g:n,b:r}=e;const s=[0,0,0],o=We,a=Ge;t=o(t/255),n=o(n/255),r=o(r/255);for(let u=0;u<3;++u)s[u]=a[u][0]*t+a[u][1]*n+a[u][2]*r;return s}function Le(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function Et(e){return Le(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const K=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Ue={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>q({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>q({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>T({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>T({h:e,s:t,v:n,a:r})};function y(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&K.test(e)){const{groups:t}=e.match(K),{fn:n,values:r}=t,s=r.split(/,\s*/).map(o=>o.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(o)/100:parseFloat(o));return Ue[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),Xe(t)}else if(typeof e=="object"){if(M(e,["r","g","b"]))return e;if(M(e,["h","s","l"]))return T(ie(e));if(M(e,["h","s","v"]))return T(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function T(e){const{h:t,s:n,v:r,a:s}=e,o=u=>{const m=(u+t/60)%6;return r-r*n*Math.max(Math.min(m,4-m,1),0)},a=[o(5),o(3),o(1)].map(u=>Math.round(u*255));return{r:a[0],g:a[1],b:a[2],a:s}}function q(e){return T(ie(e))}function ie(e){const{h:t,s:n,l:r,a:s}=e,o=r+n*Math.min(r,1-r),a=o===0?0:2-2*r/o;return{h:t,s:a,v:o,a:s}}function O(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function Ye(e){let{r:t,g:n,b:r,a:s}=e;return`#${[O(t),O(n),O(r),s!==void 0?O(Math.round(s*255)):""].join("")}`}function Xe(e){e=ze(e);let[t,n,r,s]=$e(e,2).map(o=>parseInt(o,16));return s=s===void 0?s:s/255,{r:t,g:n,b:r,a:s}}function ze(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=V(V(e,6),8,"F")),e}function Ze(e,t){const n=se(R(e));return n[0]=n[0]+t*10,ae(oe(n))}function Ke(e,t){const n=se(R(e));return n[0]=n[0]-t*10,ae(oe(n))}function qe(e){const t=y(e);return R(t)[1]}function _e(e){const t=Math.abs(Z(y(0),y(e)));return Math.abs(Z(y(16777215),y(e)))>Math.min(t,50)?"#fff":"#000"}function Je(e,t){return n=>Object.keys(e).reduce((r,s)=>{const a=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?r[s]={...a,default:n[s]}:r[s]=a,t&&!r[s].source&&(r[s].source=t),r},{})}function S(e,t){const n=pe();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function kt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=S(e).type;return w((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let ue=0,E=new WeakMap;function Qe(){const e=S("getUid");if(E.has(e))return E.get(e);{const t=ue++;return E.set(e,t),t}}Qe.reset=()=>{ue=0,E=new WeakMap};const B=Symbol.for("vuetify:theme"),St=Je({theme:String},"theme");function _(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function et(){var r,s;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_();const t=_();if(!e)return{...t,isDisabled:!0};const n={};for(const[o,a]of Object.entries(e.themes??{})){const u=a.dark||o==="dark"?(r=t.themes)==null?void 0:r.dark:(s=t.themes)==null?void 0:s.light;n[o]=x(u,a)}return x(t,{...e,themes:n})}function Mt(e){const t=et(e),n=D(t.defaultTheme),r=D(t.themes),s=p(()=>{const l={};for(const[c,f]of Object.entries(r.value)){const d=l[c]={...f,colors:{...f.colors}};if(t.variations)for(const i of t.variations.colors){const g=d.colors[i];if(g)for(const C of["lighten","darken"]){const ce=C==="lighten"?Ze:Ke;for(const j of Fe(t.variations[C],1))d.colors[`${i}-${C}-${j}`]=Ye(ce(y(g),j))}}for(const i of Object.keys(d.colors)){if(/^on-[a-z]/.test(i)||d.colors[`on-${i}`])continue;const g=`on-${i}`,C=y(d.colors[i]);d.colors[g]=_e(C)}}return l}),o=p(()=>s.value[n.value]),a=p(()=>{const l=[];o.value.dark&&v(l,":root",["color-scheme: dark"]),v(l,":root",J(o.value));for(const[i,g]of Object.entries(s.value))v(l,`.v-theme--${i}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...J(g)]);const c=[],f=[],d=new Set(Object.values(s.value).flatMap(i=>Object.keys(i.colors)));for(const i of d)/^on-[a-z]/.test(i)?v(f,`.${i}`,[`color: rgb(var(--v-theme-${i})) !important`]):(v(c,`.bg-${i}`,[`--v-theme-overlay-multiplier: var(--v-theme-${i}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${i})) !important`,`color: rgb(var(--v-theme-on-${i})) !important`]),v(f,`.text-${i}`,[`color: rgb(var(--v-theme-${i})) !important`]),v(f,`.border-${i}`,[`--v-border-color: var(--v-theme-${i})`]));return l.push(...c,...f),l.map((i,g)=>g===0?i:`    ${i}`).join("")});function u(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function m(l){if(t.isDisabled)return;const c=l._context.provides.usehead;if(c)if(c.push){const f=c.push(u);b&&I(a,()=>{f.patch(u)})}else b?(c.addHeadObjs(p(u)),ee(()=>c.updateDOM())):c.addHeadObjs(u());else{let d=function(){if(typeof document<"u"&&!f){const i=document.createElement("style");i.type="text/css",i.id="vuetify-theme-stylesheet",t.cspNonce&&i.setAttribute("nonce",t.cspNonce),f=i,document.head.appendChild(f)}f&&(f.innerHTML=a.value)},f=b?document.getElementById("vuetify-theme-stylesheet"):null;b?I(a,d,{immediate:!0}):d()}}const h=p(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:m,isDisabled:t.isDisabled,name:n,themes:r,current:o,computedThemes:s,themeClasses:h,styles:a,global:{name:n,current:o}}}function Pt(e){S("provideTheme");const t=te(B,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=p(()=>e.theme??t.name.value),r=p(()=>t.themes.value[n.value]),s=p(()=>t.isDisabled?void 0:`v-theme--${n.value}`),o={...t,name:n,current:r,themeClasses:s};return ye(B,o),o}function xt(){S("useTheme");const e=te(B,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function v(e,t,n){e.push(`${t} {
`,...n.map(r=>`  ${r};
`),`}
`)}function J(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[s,o]of Object.entries(e.colors)){const a=y(o);r.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${qe(o)>.18?t:n}`)}for(const[s,o]of Object.entries(e.variables)){const a=typeof o=="string"&&o.startsWith("#")?y(o):void 0,u=a?`${a.r}, ${a.g}, ${a.b}`:void 0;r.push(`--v-${s}: ${u??o}`)}return r}export{B as $,ct as A,At as B,Se as C,$t as D,w as E,ft as F,yt as G,Le as H,b as I,Et as J,y as K,_e as L,bt as M,Ae as N,ve as O,Ft as P,lt as Q,xt as R,rt as S,gt as T,ut as U,vt as V,Ot as W,ht as X,H as Y,Tt as Z,Mt as _,S as a,Qe as b,ot as c,be as d,nt as e,P as f,kt as g,Ct as h,mt as i,wt as j,st as k,Fe as l,x as m,pt as n,N as o,Je as p,it as q,at as r,St as s,Pt as t,Ce as u,Oe as v,dt as w,Ee as x,ke as y,Te as z};
