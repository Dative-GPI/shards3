import{g as Re}from"./_commonjsHelpers-725317a4.js";import{a as ze,b as Ue}from"./index-e7edda67.js";import{N as Ze,r as Be,f as C,d as Fe,t as Le,Y as Ge,a4 as He,l as L,e as ke,w as G,p as ee,k as Ce}from"./vue.esm-bundler-722d5586.js";const O=typeof window<"u",Ht=O&&"IntersectionObserver"in window,Wt=O&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function We(e,t,n){const r=t.length-1;if(r<0)return e===void 0?n:e;for(let s=0;s<r;s++){if(e==null)return n;e=e[t[s]]}return e==null||e[t[r]]===void 0?n:e[t[r]]}function Ve(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>Ve(e[r],t[r]))}function Vt(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),We(e,t.split("."),n))}function Ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,r)=>t+r)}function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function re(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function _t(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const Xt=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Kt=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Y(e,t){return t.every(n=>e.hasOwnProperty(n))}function qt(e,t){const n={},r=new Set(Object.keys(e));for(const s of t)r.has(s)&&(n[s]=e[s]);return n}function se(e,t,n){const r=Object.create(null),s=Object.create(null);for(const a in e)t.some(o=>o instanceof RegExp?o.test(a):o===a)&&!(n!=null&&n.some(o=>o===a))?r[a]=e[a]:s[a]=e[a];return[r,s]}function _e(e,t){const n={...e};return t.forEach(r=>delete n[r]),n}const Ae=/^on[^a-z]/,jt=e=>Ae.test(e),Xe=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function Jt(e){const[t,n]=se(e,[Ae]),r=_e(t,Xe),[s,a]=se(n,["class","style","id",/^data-/]);return Object.assign(s,t),Object.assign(a,r),[s,a]}function Qt(e){return e==null?[]:Array.isArray(e)?e:[e]}function Ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function en(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function oe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function tn(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function qe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<e.length;)n.push(e.substr(r,t)),r+=t;return n}function q(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in t){const a=e[s],o=t[s];if(re(a)&&re(o)){r[s]=q(a,o,n);continue}if(Array.isArray(a)&&Array.isArray(o)&&n){r[s]=n(a,o);continue}r[s]=o}return r}function je(e){return e.map(t=>t.type===Ze?je(t.children):t).flat()}function D(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(D.cache.has(e))return D.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return D.cache.set(e,t),t}D.cache=new Map;function _(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>_(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>_(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return _(e,t.component.subTree).flat(1)}return[]}function nn(e){const t=Be({}),n=C(e);return Fe(()=>{for(const r in n.value)t[r]=n.value[r]},{flush:"sync"}),Le(t)}function rn(e,t){return e.includes(t)}function sn(e){return e[2].toLowerCase()+e.slice(3)}const on=()=>[Function,Array];function an(e,t){return t="on"+Ge(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function cn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const s of e)s(...n);else typeof e=="function"&&e(...n)}function Je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function Qe(e,t,n){let r,s=e.indexOf(document.activeElement);const a=t==="next"?1:-1;do s+=a,r=e[s];while((!r||r.offsetParent==null||!((n==null?void 0:n(r))??!0))&&s<e.length&&s>=0);return r}function et(e,t){var r,s,a,o;const n=Je(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((r=n[0])==null||r.focus());else if(t==="first")(s=n[0])==null||s.focus();else if(t==="last")(a=n.at(-1))==null||a.focus();else if(typeof t=="number")(o=n[t])==null||o.focus();else{const i=Qe(n,t);i?i.focus():et(e,t==="next"?"first":"last")}}function un(e,t){if(!(O&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function ln(e,t){if(!O||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}const $=2.4,ae=.2126729,ie=.7151522,ce=.072175,tt=.55,nt=.58,rt=.57,st=.62,R=.03,ue=1.45,ot=5e-4,at=1.25,it=1.25,le=.078,fe=12.82051282051282,z=.06,he=.001;function de(e,t){const n=(e.r/255)**$,r=(e.g/255)**$,s=(e.b/255)**$,a=(t.r/255)**$,o=(t.g/255)**$,i=(t.b/255)**$;let c=n*ae+r*ie+s*ce,f=a*ae+o*ie+i*ce;if(c<=R&&(c+=(R-c)**ue),f<=R&&(f+=(R-f)**ue),Math.abs(f-c)<ot)return 0;let h;if(f>c){const l=(f**tt-c**nt)*at;h=l<he?0:l<le?l-l*fe*z:l-z}else{const l=(f**st-c**rt)*it;h=l>-he?0:l>-le?l-l*fe*z:l+z}return h*100}const H=.20689655172413793,ct=e=>e>H**3?Math.cbrt(e):e/(3*H**2)+4/29,ut=e=>e>H?e**3:3*H**2*(e-4/29);function Oe(e){const t=ct,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function Te(e){const t=ut,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const lt=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],ft=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,ht=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],dt=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function xe(e){const t=Array(3),n=ft,r=lt;for(let s=0;s<3;++s)t[s]=Math.round(Ke(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function te(e){let{r:t,g:n,b:r}=e;const s=[0,0,0],a=dt,o=ht;t=a(t/255),n=a(n/255),r=a(r/255);for(let i=0;i<3;++i)s[i]=o[i][0]*t+o[i][1]*n+o[i][2]*r;return s}function mt(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function fn(e){return mt(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const me=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,gt={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>ge({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>ge({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>P({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>P({h:e,s:t,v:n,a:r})};function A(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&me.test(e)){const{groups:t}=e.match(me),{fn:n,values:r}=t,s=r.split(/,\s*/).map(a=>a.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(a)/100:parseFloat(a));return gt[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),vt(t)}else if(typeof e=="object"){if(Y(e,["r","g","b"]))return e;if(Y(e,["h","s","l"]))return P($e(e));if(Y(e,["h","s","v"]))return P(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function P(e){const{h:t,s:n,v:r,a:s}=e,a=i=>{const c=(i+t/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},o=[a(5),a(3),a(1)].map(i=>Math.round(i*255));return{r:o[0],g:o[1],b:o[2],a:s}}function ge(e){return P($e(e))}function $e(e){const{h:t,s:n,l:r,a:s}=e,a=r+n*Math.min(r,1-r),o=a===0?0:2-2*r/a;return{h:t,s:o,v:a,a:s}}function U(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function pt(e){let{r:t,g:n,b:r,a:s}=e;return`#${[U(t),U(n),U(r),s!==void 0?U(Math.round(s*255)):""].join("")}`}function vt(e){e=yt(e);let[t,n,r,s]=qe(e,2).map(a=>parseInt(a,16));return s=s===void 0?s:s/255,{r:t,g:n,b:r,a:s}}function yt(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=oe(oe(e,6),8,"F")),e}function bt(e,t){const n=Oe(te(e));return n[0]=n[0]+t*10,xe(Te(n))}function wt(e,t){const n=Oe(te(e));return n[0]=n[0]-t*10,xe(Te(n))}function Ft(e){const t=A(e);return te(t)[1]}function kt(e){const t=Math.abs(de(A(0),A(e)));return Math.abs(de(A(16777215),A(e)))>Math.min(t,50)?"#fff":"#000"}function Ct(e,t){return n=>Object.keys(e).reduce((r,s)=>{const o=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,t&&!r[s].source&&(r[s].source=t),r},{})}function V(e,t){const n=He();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function hn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=V(e).type;return D((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let Me=0,B=new WeakMap;function At(){const e=V("getUid");if(B.has(e))return B.get(e);{const t=Me++;return B.set(e,t),t}}At.reset=()=>{Me=0,B=new WeakMap};const j=Symbol.for("vuetify:theme"),dn=Ct({theme:String},"theme");function pe(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function Ot(){var r,s;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pe();const t=pe();if(!e)return{...t,isDisabled:!0};const n={};for(const[a,o]of Object.entries(e.themes??{})){const i=o.dark||a==="dark"?(r=t.themes)==null?void 0:r.dark:(s=t.themes)==null?void 0:s.light;n[a]=q(i,o)}return q(t,{...e,themes:n})}function mn(e){const t=Ot(e),n=L(t.defaultTheme),r=L(t.themes),s=C(()=>{const h={};for(const[l,d]of Object.entries(r.value)){const v=h[l]={...d,colors:{...d.colors}};if(t.variations)for(const u of t.variations.colors){const F=v.colors[u];if(F)for(const S of["lighten","darken"]){const Ie=S==="lighten"?bt:wt;for(const ne of Ye(t.variations[S],1))v.colors[`${u}-${S}-${ne}`]=pt(Ie(A(F),ne))}}for(const u of Object.keys(v.colors)){if(/^on-[a-z]/.test(u)||v.colors[`on-${u}`])continue;const F=`on-${u}`,S=A(v.colors[u]);v.colors[F]=kt(S)}}return h}),a=C(()=>s.value[n.value]),o=C(()=>{const h=[];a.value.dark&&x(h,":root",["color-scheme: dark"]),x(h,":root",ve(a.value));for(const[u,F]of Object.entries(s.value))x(h,`.v-theme--${u}`,[`color-scheme: ${F.dark?"dark":"normal"}`,...ve(F)]);const l=[],d=[],v=new Set(Object.values(s.value).flatMap(u=>Object.keys(u.colors)));for(const u of v)/^on-[a-z]/.test(u)?x(d,`.${u}`,[`color: rgb(var(--v-theme-${u})) !important`]):(x(l,`.bg-${u}`,[`--v-theme-overlay-multiplier: var(--v-theme-${u}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${u})) !important`,`color: rgb(var(--v-theme-on-${u})) !important`]),x(d,`.text-${u}`,[`color: rgb(var(--v-theme-${u})) !important`]),x(d,`.border-${u}`,[`--v-border-color: var(--v-theme-${u})`]));return h.push(...l,...d),h.map((u,F)=>F===0?u:`    ${u}`).join("")});function i(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function c(h){if(t.isDisabled)return;const l=h._context.provides.usehead;if(l)if(l.push){const d=l.push(i);O&&G(o,()=>{d.patch(i)})}else O?(l.addHeadObjs(C(i)),Fe(()=>l.updateDOM())):l.addHeadObjs(i());else{let v=function(){if(typeof document<"u"&&!d){const u=document.createElement("style");u.type="text/css",u.id="vuetify-theme-stylesheet",t.cspNonce&&u.setAttribute("nonce",t.cspNonce),d=u,document.head.appendChild(d)}d&&(d.innerHTML=o.value)},d=O?document.getElementById("vuetify-theme-stylesheet"):null;O?G(o,v,{immediate:!0}):v()}}const f=C(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:t.isDisabled,name:n,themes:r,current:a,computedThemes:s,themeClasses:f,styles:o,global:{name:n,current:a}}}function gn(e){V("provideTheme");const t=ke(j,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=C(()=>e.theme??t.name.value),r=C(()=>t.themes.value[n.value]),s=C(()=>t.isDisabled?void 0:`v-theme--${n.value}`),a={...t,name:n,current:r,themeClasses:s};return ee(j,a),a}function Tt(){V("useTheme");const e=ke(j,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function x(e,t,n){e.push(`${t} {
`,...n.map(r=>`  ${r};
`),`}
`)}function ve(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[s,a]of Object.entries(e.colors)){const o=A(a);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${Ft(a)>.18?t:n}`)}for(const[s,a]of Object.entries(e.variables)){const o=typeof a=="string"&&a.startsWith("#")?A(a):void 0,i=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${i??a}`)}return r}var Ee={exports:{}},Se={exports:{}},xt=function(t){return!t||typeof t=="string"?!1:t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&t.constructor.name!=="String")},$t=xt,Mt=Array.prototype.concat,Et=Array.prototype.slice,ye=Se.exports=function(t){for(var n=[],r=0,s=t.length;r<s;r++){var a=t[r];$t(a)?n=Mt.call(n,Et.call(a)):n.push(a)}return n};ye.wrap=function(e){return function(){return e(ye(arguments))}};var St=Se.exports,N=ze,I=St,De=Object.hasOwnProperty,Ne=Object.create(null);for(var X in N)De.call(N,X)&&(Ne[N[X]]=X);var w=Ee.exports={to:{},get:{}};w.get=function(e){var t=e.substring(0,3).toLowerCase(),n,r;switch(t){case"hsl":n=w.get.hsl(e),r="hsl";break;case"hwb":n=w.get.hwb(e),r="hwb";break;default:n=w.get.rgb(e),r="rgb";break}return n?{model:r,value:n}:null};w.get.rgb=function(e){if(!e)return null;var t=/^#([a-f0-9]{3,4})$/i,n=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,r=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,s=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,a=/^(\w+)$/,o=[0,0,0,1],i,c,f;if(i=e.match(n)){for(f=i[2],i=i[1],c=0;c<3;c++){var h=c*2;o[c]=parseInt(i.slice(h,h+2),16)}f&&(o[3]=parseInt(f,16)/255)}else if(i=e.match(t)){for(i=i[1],f=i[3],c=0;c<3;c++)o[c]=parseInt(i[c]+i[c],16);f&&(o[3]=parseInt(f+f,16)/255)}else if(i=e.match(r)){for(c=0;c<3;c++)o[c]=parseInt(i[c+1],0);i[4]&&(i[5]?o[3]=parseFloat(i[4])*.01:o[3]=parseFloat(i[4]))}else if(i=e.match(s)){for(c=0;c<3;c++)o[c]=Math.round(parseFloat(i[c+1])*2.55);i[4]&&(i[5]?o[3]=parseFloat(i[4])*.01:o[3]=parseFloat(i[4]))}else return(i=e.match(a))?i[1]==="transparent"?[0,0,0,0]:De.call(N,i[1])?(o=N[i[1]],o[3]=1,o):null:null;for(c=0;c<3;c++)o[c]=T(o[c],0,255);return o[3]=T(o[3],0,1),o};w.get.hsl=function(e){if(!e)return null;var t=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=e.match(t);if(n){var r=parseFloat(n[4]),s=(parseFloat(n[1])%360+360)%360,a=T(parseFloat(n[2]),0,100),o=T(parseFloat(n[3]),0,100),i=T(isNaN(r)?1:r,0,1);return[s,a,o,i]}return null};w.get.hwb=function(e){if(!e)return null;var t=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=e.match(t);if(n){var r=parseFloat(n[4]),s=(parseFloat(n[1])%360+360)%360,a=T(parseFloat(n[2]),0,100),o=T(parseFloat(n[3]),0,100),i=T(isNaN(r)?1:r,0,1);return[s,a,o,i]}return null};w.to.hex=function(){var e=I(arguments);return"#"+Z(e[0])+Z(e[1])+Z(e[2])+(e[3]<1?Z(Math.round(e[3]*255)):"")};w.to.rgb=function(){var e=I(arguments);return e.length<4||e[3]===1?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"};w.to.rgb.percent=function(){var e=I(arguments),t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),r=Math.round(e[2]/255*100);return e.length<4||e[3]===1?"rgb("+t+"%, "+n+"%, "+r+"%)":"rgba("+t+"%, "+n+"%, "+r+"%, "+e[3]+")"};w.to.hsl=function(){var e=I(arguments);return e.length<4||e[3]===1?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"};w.to.hwb=function(){var e=I(arguments),t="";return e.length>=4&&e[3]!==1&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"};w.to.keyword=function(e){return Ne[e.slice(0,3)]};function T(e,t,n){return Math.min(Math.max(t,e),n)}function Z(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}var Dt=Ee.exports;const M=Dt,b=Ue,Pe=["keyword","gray","hex"],J={};for(const e of Object.keys(b))J[[...b[e].labels].sort().join("")]=e;const W={};function p(e,t){if(!(this instanceof p))return new p(e,t);if(t&&t in Pe&&(t=null),t&&!(t in b))throw new Error("Unknown model: "+t);let n,r;if(e==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof p)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if(typeof e=="string"){const s=M.get(e);if(s===null)throw new Error("Unable to parse color from string: "+e);this.model=s.model,r=b[this.model].channels,this.color=s.value.slice(0,r),this.valpha=typeof s.value[r]=="number"?s.value[r]:1}else if(e.length>0){this.model=t||"rgb",r=b[this.model].channels;const s=Array.prototype.slice.call(e,0,r);this.color=Q(s,r),this.valpha=typeof e[r]=="number"?e[r]:1}else if(typeof e=="number")this.model="rgb",this.color=[e>>16&255,e>>8&255,e&255],this.valpha=1;else{this.valpha=1;const s=Object.keys(e);"alpha"in e&&(s.splice(s.indexOf("alpha"),1),this.valpha=typeof e.alpha=="number"?e.alpha:0);const a=s.sort().join("");if(!(a in J))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=J[a];const{labels:o}=b[this.model],i=[];for(n=0;n<o.length;n++)i.push(e[o[n]]);this.color=Q(i)}if(W[this.model])for(r=b[this.model].channels,n=0;n<r;n++){const s=W[this.model][n];s&&(this.color[n]=s(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}p.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in M.to?this:this.rgb();t=t.round(typeof e=="number"?e:1);const n=t.valpha===1?t.color:[...t.color,this.valpha];return M.to[t.model](n)},percentString(e){const t=this.rgb().round(typeof e=="number"?e:1),n=t.valpha===1?t.color:[...t.color,this.valpha];return M.to.rgb.percent(n)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:t}=b[this.model],{labels:n}=b[this.model];for(let r=0;r<t;r++)e[n[r]]=this.color[r];return this.valpha!==1&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,this.valpha!==1&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,this.valpha!==1&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new p([...this.color.map(Pt(e)),this.valpha],this.model)},alpha(e){return e!==void 0?new p([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:m("rgb",0,g(255)),green:m("rgb",1,g(255)),blue:m("rgb",2,g(255)),hue:m(["hsl","hsv","hsl","hwb","hcg"],0,e=>(e%360+360)%360),saturationl:m("hsl",1,g(100)),lightness:m("hsl",2,g(100)),saturationv:m("hsv",1,g(100)),value:m("hsv",2,g(100)),chroma:m("hcg",1,g(100)),gray:m("hcg",2,g(100)),white:m("hwb",1,g(100)),wblack:m("hwb",2,g(100)),cyan:m("cmyk",0,g(100)),magenta:m("cmyk",1,g(100)),yellow:m("cmyk",2,g(100)),black:m("cmyk",3,g(100)),x:m("xyz",0,g(95.047)),y:m("xyz",1,g(100)),z:m("xyz",2,g(108.833)),l:m("lab",0,g(100)),a:m("lab",1),b:m("lab",2),keyword(e){return e!==void 0?new p(e):b[this.model].keyword(this.color)},hex(e){return e!==void 0?new p(e):M.to.hex(this.rgb().round().color)},hexa(e){if(e!==void 0)return new p(e);const t=this.rgb().round().color;let n=Math.round(this.valpha*255).toString(16).toUpperCase();return n.length===1&&(n="0"+n),M.to.hex(t)+n},rgbNumber(){const e=this.rgb().color;return(e[0]&255)<<16|(e[1]&255)<<8|e[2]&255},luminosity(){const e=this.rgb().color,t=[];for(const[n,r]of e.entries()){const s=r/255;t[n]=s<=.04045?s/12.92:((s+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(e[0]*2126+e[1]*7152+e[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=e[0]*.3+e[1]*.59+e[2]*.11;return p.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let n=t.color[0];return n=(n+e)%360,n=n<0?360+n:n,t.color[0]=n,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const n=e.rgb(),r=this.rgb(),s=t===void 0?.5:t,a=2*s-1,o=n.alpha()-r.alpha(),i=((a*o===-1?a:(a+o)/(1+a*o))+1)/2,c=1-i;return p.rgb(i*n.red()+c*r.red(),i*n.green()+c*r.green(),i*n.blue()+c*r.blue(),n.alpha()*s+r.alpha()*(1-s))}};for(const e of Object.keys(b)){if(Pe.includes(e))continue;const{channels:t}=b[e];p.prototype[e]=function(...n){return this.model===e?new p(this):n.length>0?new p(n,e):new p([...It(b[this.model][e].raw(this.color)),this.valpha],e)},p[e]=function(...n){let r=n[0];return typeof r=="number"&&(r=Q(n,t)),new p(r,e)}}function Nt(e,t){return Number(e.toFixed(t))}function Pt(e){return function(t){return Nt(t,e)}}function m(e,t,n){e=Array.isArray(e)?e:[e];for(const r of e)(W[r]||(W[r]=[]))[t]=n;return e=e[0],function(r){let s;return r!==void 0?(n&&(r=n(r)),s=this[e](),s.color[t]=r,s):(s=this[e]().color[t],n&&(s=n(s)),s)}}function g(e){return function(t){return Math.max(0,Math.min(e,t))}}function It(e){return Array.isArray(e)?e:[e]}function Q(e,t){for(let n=0;n<t;n++)typeof e[n]!="number"&&(e[n]=0);return e}var Rt=p;const K=Re(Rt);var E=(e=>(e.Background="background",e.Light="light",e.Dark="dark",e.Primary="primary",e.Error="error",e.Warning="warning",e.Success="success",e))(E||{});const pn={dark:!1,colors:{background:"#F9F9F9",light:"#E1E2E3",dark:"#3F4040",primary:"#0058E6",success:"#6DE038",warning:"#E6A52E",error:"#E01212"}},vn=()=>{const e=Tt().current.value,t=(a,o)=>{switch(a){case E.Light:case E.Dark:return o.value(Math.min(o.value()+10,100));default:return o.saturationv(10).value(Math.min(o.value()+10,100))}},n=a=>a.value(Math.max(a.value()-15,0)),r=a=>{const i=Object.values(E).includes(a)?new K(e.colors[a]):new K(a),c=t(a,i),f=n(i);return{light:c.hex(),base:i.hex(),dark:f.hex()}};return{getColors:r,getContrasts:a=>{switch(a){case E.Light:{const o=new K(e.colors[E.Dark]);return{light:o.hex(),base:o.hex(),dark:o.hex()}}default:return r(a)}}}},zt="timeZone",Ut="languageCode";let be=!1;const k=L("fr-FR"),yn=()=>{const e=n=>{k.value=n};return be||(ee(Ut,k),Ce(()=>{k.value})),be=!0,{ready:new Promise(n=>{k.value?n(k.value):G(k,()=>{k.value&&n(k.value)})}),languageCode:k,setLanguageCode:e}};class Zt{constructor(t){this.id=t.id,this.offset=t.offset}}let we=!1;const y=L({id:"UTC",offset:"UTC +03:00:00"}),bn=()=>{const e=o=>{y.value=o},t=()=>{var o;return((o=y==null?void 0:y.value)==null?void 0:o.offset)??"UTC +00:00:00"},n=()=>{var c;const i=(((c=y==null?void 0:y.value)==null?void 0:c.offset.slice(3))??"").match(/([+-])(\d+)(?::(\d+))?/);if(i){const[f,h,l,d]=i;return parseInt(h+"1")*((l?parseInt(l):0)*60+(d?parseInt(d):0))*60*1e3}return 0},r=()=>{var f;const i=(((f=Intl.DateTimeFormat("ia",{timeZoneName:"short",timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}).formatToParts().find(h=>h.type==="timeZoneName"))==null?void 0:f.value)??"").slice(3);if(!i)return"UTC +00:00:00";const c=i.match(/([+-])(\d+)(?::(\d+))?/);if(c){const[h,l,d,v]=c;return`UTC ${l}${d.padStart(2,"0")}:${(v??"").padStart(2,"0")}:00`}return"UTC +00:00:00"},s=()=>{var f;const i=(((f=Intl.DateTimeFormat("ia",{timeZoneName:"short",timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}).formatToParts().find(h=>h.type==="timeZoneName"))==null?void 0:f.value)??"").slice(3);if(!i)return 0;const c=i.match(/([+-])(\d+)(?::(\d+))?/);if(c){const[h,l,d,v]=c;return parseInt(l+"1")*((d?parseInt(d):0)*60+(v?parseInt(v):0))*60*1e3}return 0};return we||(ee(zt,y),Ce(()=>{y.value||e(new Zt({id:Intl.DateTimeFormat().resolvedOptions().timeZone,offset:r()}))})),we=!0,{ready:new Promise(o=>{y.value?o(y.value):G(y,()=>{y.value&&o(y.value)})}),timeZone:y,setTimeZone:e,getUserOffset:t,getMachineOffset:r,getUserOffsetMillis:n,getMachineOffsetMillis:s}};export{jt as A,qt as B,E as C,un as D,on as E,en as F,Kt as G,_e as H,O as I,nn as J,mt as K,fn as L,A as M,kt as N,je as O,sn as P,bn as Q,ln as R,Wt as S,Qe as T,et as U,yn as V,mn as W,j as X,pn as Y,Tt as Z,V as a,At as b,Ye as c,Ve as d,tn as e,_ as f,hn as g,dn as h,gn as i,Yt as j,an as k,re as l,q as m,Xt as n,Je as o,Ct as p,Ke as q,_t as r,Jt as s,cn as t,vn as u,rn as v,Qt as w,Ht as x,D as y,Vt as z};
