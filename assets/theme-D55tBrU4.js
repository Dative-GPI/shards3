import{G as p,r as C,c as a,x as S,l as P,a2 as v,a3 as x,a4 as b,u as R,a5 as I,i as w,p as $}from"./vue.esm-bundler-Ddr6MgcY.js";const l=typeof window<"u",L=l&&"IntersectionObserver"in window,j=l&&"EyeDropper"in window;function A(e,n,t){const r=n.length-1;if(r<0)return e===void 0?t:e;for(let s=0;s<r;s++){if(e==null)return t;e=e[n[s]]}return e==null||e[n[r]]===void 0?t:e[n[r]]}function D(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date&&e.getTime()!==n.getTime()||e!==Object(e)||n!==Object(n))return!1;const t=Object.keys(e);return t.length!==Object.keys(n).length?!1:t.every(r=>D(e[r],n[r]))}function N(e,n,t){return e==null||!n||typeof n!="string"?t:e[n]!==void 0?e[n]:(n=n.replace(/\[(\w+)\]/g,".$1"),n=n.replace(/^\./,""),A(e,n.split("."),t))}function K(e,n,t){if(n===!0)return e===void 0?t:e;if(n==null||typeof n=="boolean")return t;if(e!==Object(e)){if(typeof n!="function")return t;const s=n(e,t);return typeof s>"u"?t:s}if(typeof n=="string")return N(e,n,t);if(Array.isArray(n))return A(e,n,t);if(typeof n!="function")return t;const r=n(e,t);return typeof r>"u"?t:r}function q(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(t,r)=>n+r)}function H(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${n}`:void 0}function h(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Z(e){if(e&&"$el"in e){const n=e.$el;return(n==null?void 0:n.nodeType)===Node.TEXT_NODE?n.nextElementSibling:n}return e}const J=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Q=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function _(e){return Object.keys(e)}function ee(e,n){return n.every(t=>e.hasOwnProperty(t))}function ne(e,n){const t={},r=new Set(Object.keys(e));for(const s of n)r.has(s)&&(t[s]=e[s]);return t}function y(e,n,t){const r=Object.create(null),s=Object.create(null);for(const u in e)n.some(o=>o instanceof RegExp?o.test(u):o===u)&&!(t!=null&&t.some(o=>o===u))?r[u]=e[u]:s[u]=e[u];return[r,s]}function M(e,n){const t={...e};return n.forEach(r=>delete t[r]),t}const E=/^on[^a-z]/,te=e=>E.test(e),F=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function re(e){const[n,t]=y(e,[E]),r=M(n,F),[s,u]=y(t,["class","style","id",/^data-/]);return Object.assign(s,n),Object.assign(u,r),[s,u]}function se(e){return e==null?[]:Array.isArray(e)?e:[e]}function ue(e,n){let t=0;const r=function(){for(var s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];clearTimeout(t),t=setTimeout(()=>e(...u),R(n))};return r.clear=()=>{clearTimeout(t)},r.immediate=e,r}function oe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(n,Math.min(t,e))}function ie(e){const n=e.toString().trim();return n.includes(".")?n.length-n.indexOf(".")-1:0}function ce(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+t.repeat(Math.max(0,n-e.length))}function ae(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let r=0;for(;r<e.length;)t.push(e.substr(r,n)),r+=n;return t}function B(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in n){const u=e[s],o=n[s];if(h(u)&&h(o)){r[s]=B(u,o,t);continue}if(Array.isArray(u)&&Array.isArray(o)&&t){r[s]=t(u,o);continue}r[s]=o}return r}function V(e){return e.map(n=>n.type===p?V(n.children):n).flat()}function i(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(i.cache.has(e))return i.cache.get(e);const n=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return i.cache.set(e,n),n}i.cache=new Map;function d(e,n){if(!n||typeof n!="object")return[];if(Array.isArray(n))return n.map(t=>d(e,t)).flat(1);if(Array.isArray(n.children))return n.children.map(t=>d(e,t)).flat(1);if(n.component){if(Object.getOwnPropertySymbols(n.component.provides).includes(e))return[n.component];if(n.component.subTree)return d(e,n.component.subTree).flat(1)}return[]}function fe(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function le(e){const n=C({}),t=a(e);return S(()=>{for(const r in t.value)n[r]=t.value[r]},{flush:"sync"}),P(n)}function me(e,n){return e.includes(n)}function de(e){return e[2].toLowerCase()+e.slice(3)}const ge=()=>[Function,Array];function he(e,n){return n="on"+b(n),!!(e[n]||e[`${n}Once`]||e[`${n}Capture`]||e[`${n}OnceCapture`]||e[`${n}CaptureOnce`])}function ye(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];if(Array.isArray(e))for(const s of e)s(...t);else typeof e=="function"&&e(...t)}function U(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${n?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(t)]}function X(e,n,t){let r,s=e.indexOf(document.activeElement);const u=n==="next"?1:-1;do s+=u,r=e[s];while((!r||r.offsetParent==null||!((t==null?void 0:t(r))??!0))&&s<e.length&&s>=0);return r}function Y(e,n){var r,s,u,o;const t=U(e);if(!n)(e===document.activeElement||!e.contains(document.activeElement))&&((r=t[0])==null||r.focus());else if(n==="first")(s=t[0])==null||s.focus();else if(n==="last")(u=t.at(-1))==null||u.focus();else if(typeof n=="number")(o=t[n])==null||o.focus();else{const c=X(t,n);c?c.focus():Y(e,n==="next"?"first":"last")}}function pe(e){return e==null||typeof e=="string"&&e.trim()===""}function we(){}function Ae(e,n){if(!(l&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${n})`)))return null;try{return!!e&&e.matches(n)}catch{return null}}function k(e){return e.some(n=>v(n)?n.type===x?!1:n.type!==p||k(n.children):!0)?e:null}function Ee(e,n){if(!l||e===0)return n(),()=>{};const t=window.setTimeout(n,e);return()=>window.clearTimeout(t)}function Te(e,n){const t=e.clientX,r=e.clientY,s=n.getBoundingClientRect(),u=s.left,o=s.top,c=s.right,O=s.bottom;return t>=u&&t<=c&&r>=o&&r<=O}function z(e,n){return t=>Object.keys(e).reduce((r,s)=>{const o=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return t&&s in t?r[s]={...o,default:t[s]}:r[s]=o,n&&!r[s].source&&(r[s].source=n),r},{})}function m(e,n){const t=I();if(!t)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return t}function Oe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const n=m(e).type;return i((n==null?void 0:n.aliasName)||(n==null?void 0:n.name))}let T=0,f=new WeakMap;function W(){const e=m("getUid");if(f.has(e))return f.get(e);{const n=T++;return f.set(e,n),n}}W.reset=()=>{T=0,f=new WeakMap};const g=Symbol.for("vuetify:theme"),Ce=z({theme:String},"theme");function Se(e){m("provideTheme");const n=w(g,null);if(!n)throw new Error("Could not find Vuetify theme injection");const t=a(()=>e.theme??n.name.value),r=a(()=>n.themes.value[t.value]),s=a(()=>n.isDisabled?void 0:`v-theme--${t.value}`),u={...n,name:t,current:r,themeClasses:s};return $(g,u),u}function Pe(){m("useTheme");const e=w(g,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}export{Ae as A,oe as B,le as C,V as D,ge as E,te as F,ne as G,_ as H,l as I,ie as J,q as K,Q as L,Pe as M,ee as N,ae as O,ce as P,B as Q,ue as R,L as S,y as T,fe as U,j as V,de as W,Ee as X,N as Y,pe as Z,m as a,K as b,H as c,D as d,W as e,d as f,Oe as g,he as h,me as i,h as j,J as k,Te as l,U as m,X as n,M as o,z as p,Y as q,Z as r,Ce as s,i as t,re as u,ye as v,se as w,Se as x,k as y,we as z};
