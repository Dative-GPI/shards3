import{z as R,y as W,T as le,j as V,w as B,v as D,d as C,q as ee,f as ve,a4 as Le,g as Be,s as U,o as ze,r as Fe,p as Ye,e as Xe,a5 as Ge,m as Ue,k as Ke,a8 as Ze,A as Je,Y as Qe,B as et,F as tt}from"./vue.esm-bundler-17cb12ce.js";import{a as G,d as nt,s as ce,b as ot,g as Me,n as Re,B as oe,c as he}from"./forwardRefs-e658ad70.js";import{g as Ne,m as at,c as rt,u as it}from"./color-d421c344.js";import{R as _e,W as He,p as j,I as q,H as st,c as N,A as we,X as lt,a as de,r as be,C as ct,s as ut,t as ft}from"./theme-c4ac2200.js";import{c as me,u as vt,b as dt}from"./locale-2e51016c.js";import{p as Ee,f as ae,d as re,e as xe,g as pe}from"./loader-8675b45d.js";import{m as mt,u as yt}from"./dimensions-10b1de84.js";import{u as gt}from"./display-4fe57557.js";import{m as ht,u as wt}from"./lazy-04b58018.js";import{a as bt,b as Et}from"./router-021df22c.js";import{m as xt,M as pt}from"./transition-4d995a4a.js";const K=new WeakMap;function St(e,n){Object.keys(n).forEach(t=>{if(_e(t)){const o=He(t),a=K.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),K.has(e)||K.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ot(e,n){Object.keys(n).forEach(t=>{if(_e(t)){const o=He(t),a=K.get(e);a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function Ve(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function kt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Pt(e):ye(e))return e;e=e.parentElement}return document.scrollingElement}function J(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ye(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ye(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Pt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function At(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Ct=j({target:[Object,Array]},"v-dialog-transition"),mn=Ne()({name:"VDialogTransition",props:Ct(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var h;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:s,y:r,sx:u,sy:c,speed:f}=Oe(e.target,a),y=G(a,[{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:nt});(h=Se(a))==null||h.forEach(g=>{G(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),y.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var h;await new Promise(g=>requestAnimationFrame(g));const{x:s,y:r,sx:u,sy:c,speed:f}=Oe(e.target,a);G(a,[{},{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:ot}).finished.then(()=>i()),(h=Se(a))==null||h.forEach(g=>{G(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?R(le,W({name:"dialog-transition"},o,{css:!1}),t):R(le,{name:"dialog-transition"},t)}});function Se(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Oe(e,n){const t=Me(e),o=Re(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(P=>parseFloat(P)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||r==="left"?u-=t.width/2:(s==="right"||r==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||r==="top"?c-=t.height/2:(s==="bottom"||r==="bottom")&&(c+=t.height/2);const f=t.width/o.width,y=t.height/o.height,h=Math.max(1,f,y),g=f/h||0,d=y/h||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),k=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:c-(i+o.top),sx:g,sy:d,speed:k}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Tt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function ke(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const De={static:Ft,connected:Rt},Lt=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in De},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Bt(e,n){const t=V({}),o=V();q&&me(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;B(()=>e.locationStrategy,i),D(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(r=De[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Ft(){}function Mt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Re(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Rt(e,n,t){(Array.isArray(e.target.value)||At(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=st(()=>{const d=Ee(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?ae(d):Ee(n.origin,e.isRtl.value);return d.side===v.side&&d.align===re(v).align?{preferredAnchor:xe(d),preferredOrigin:xe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>C(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&g()});B([e.target,e.contentEl],(d,v)=>{let[k,P]=d,[x,b]=v;x&&!Array.isArray(x)&&h.unobserve(x),k&&!Array.isArray(k)&&h.observe(k),b&&h.unobserve(b),P&&h.observe(P)},{immediate:!0}),D(()=>{h.disconnect()});function g(){if(y=!1,requestAnimationFrame(()=>y=!0),!e.target.value||!e.contentEl.value)return;const d=Me(e.target.value),v=Mt(e.contentEl.value,e.isRtl.value),k=J(e.contentEl.value),P=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=k.reduce((S,E)=>{const m=E.getBoundingClientRect(),w=new oe({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return S?new oe({x:Math.max(S.left,w.left),y:Math.max(S.top,w.top),width:Math.min(S.right,w.right)-Math.max(S.left,w.left),height:Math.min(S.bottom,w.bottom)-Math.max(S.top,w.top)}):w},void 0);x.x+=P,x.y+=P,x.width-=P*2,x.height-=P*2;let b={anchor:a.value,origin:i.value};function I(S){const E=new oe(v),m=ke(S.anchor,d),w=ke(S.origin,E);let{x:L,y:M}=Tt(m,w);switch(S.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":L-=f.value[0];break;case"right":L+=f.value[0];break}switch(S.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":L-=f.value[1];break;case"right":L+=f.value[1];break}return E.x+=L,E.y+=M,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,c.value),{overflows:he(E,x),x:L,y:M}}let F=0,A=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:S,y:E,overflows:m}=I(b);F+=S,A+=E,v.x+=S,v.y+=E;{const w=pe(b.anchor),L=m.x.before||m.x.after,M=m.y.before||m.y.after;let z=!1;if(["x","y"].forEach(O=>{if(O==="x"&&L&&!T.x||O==="y"&&M&&!T.y){const $={anchor:{...b.anchor},origin:{...b.origin}},Y=O==="x"?w==="y"?re:ae:w==="y"?ae:re;$.anchor=Y($.anchor),$.origin=Y($.origin);const{overflows:_}=I($);(_[O].before<=m[O].before&&_[O].after<=m[O].after||_[O].before+_[O].after<(m[O].before+m[O].after)/2)&&(b=$,z=T[O]=!0)}}),z)continue}m.x.before&&(F+=m.x.before,v.x+=m.x.before),m.x.after&&(F-=m.x.after,v.x-=m.x.after),m.y.before&&(A+=m.y.before,v.y+=m.y.before),m.y.after&&(A-=m.y.after,v.y-=m.y.after);{const w=he(v,x);l.x=x.width-w.x.before-w.x.after,l.y=x.height-w.y.before-w.y.after,F+=w.x.before,v.x+=w.x.before,A+=w.y.before,v.y+=w.y.before}break}const ne=pe(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:N(se(A)),left:e.isRtl.value?void 0:N(se(F)),right:e.isRtl.value?N(se(-F)):void 0,minWidth:N(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:N(Pe(we(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:N(Pe(we(l.y,r.value===1/0?0:r.value,c.value)))}),{available:l,contentBox:v}}return B(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),ee(()=>{const d=g();if(!d)return;const{available:v,contentBox:k}=d;k.height>v.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Pe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const Q=[];function Nt(e){!ue||Q.length?(Q.push(e),fe()):(ue=!1,e(),fe())}let Ae=-1;function fe(){cancelAnimationFrame(Ae),Ae=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?fe():ue=!0})}const Z={none:null,close:Vt,block:Dt,reposition:It},_t=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Z}},"VOverlay-scroll-strategies");function Ht(e,n){if(!q)return;let t;ve(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Le(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=Z[e.scrollStrategy])==null||o.call(Z,n,e,t)}))}),D(()=>{t==null||t.stop()})}function Vt(e){function n(t){e.isActive.value=!1}Ie(e.targetEl.value??e.contentEl.value,n)}function Dt(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...J(e.targetEl.value,n.contained?t:void 0),...J(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>ye(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",N(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",N(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",N(a)),r.classList.add("v-overlay-scroll-blocked")}),D(()=>{o.forEach((r,u)=>{const c=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),y=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-c,r.scrollTop=-f,r.style.scrollBehavior=y}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function It(e,n,t){let o=!1,a=-1,i=-1;function s(r){Nt(()=>{var f,y;const u=performance.now();(y=(f=e.updateLocation).value)==null||y.call(f,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{Ie(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),D(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Ie(e,n){const t=[document,...J(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),D(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const $t=Symbol.for("vuetify:v-menu"),Wt=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function qt(e,n){let t=()=>{};function o(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(u=>{t=lt(r,()=>{n==null||n(s),u(s)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const jt=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Wt()},"VOverlay-activator");function zt(e,n){let{isActive:t,isTop:o}=n;const a=de("useActivator"),i=V();let s=!1,r=!1,u=!0;const c=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:y,runCloseDelay:h}=qt(e,l=>{l===(e.openOnHover&&s||c.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),g=V(),d={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(g.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,i.value=l.currentTarget||l.target,y())},onMouseleave:l=>{s=!1,h()},onFocus:l=>{ct(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,y())},onBlur:l=>{r=!1,l.stopPropagation(),h()}},v=C(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),c.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),k=C(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,y()},l.onMouseleave=()=>{s=!1,h()}),c.value&&(l.onFocusin=()=>{r=!0,y()},l.onFocusout=()=>{r=!1,h()}),e.closeOnContentClick){const T=Be($t,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),P=C(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,y())},l.onMouseleave=()=>{s=!1,h()}),l});B(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)}),B(t,l=>{l||setTimeout(()=>{g.value=void 0})},{flush:"post"});const x=V();ve(()=>{x.value&&ee(()=>{i.value=be(x.value)})});const b=V(),I=C(()=>e.target==="cursor"&&g.value?g.value:b.value?be(b.value):$e(e.target,a)||i.value),F=C(()=>Array.isArray(I.value)?void 0:I.value);let A;return B(()=>!!e.activator,l=>{l&&q?(A=Le(),A.run(()=>{Yt(e,a,{activatorEl:i,activatorEvents:v})})):A&&A.stop()},{flush:"post",immediate:!0}),D(()=>{A==null||A.stop()}),{activatorEl:i,activatorRef:x,target:I,targetEl:F,targetRef:b,activatorEvents:v,contentEvents:k,scrimEvents:P}}function Yt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;B(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=r(c);f&&s(f)}u&&ee(()=>i())},{immediate:!0}),B(()=>e.activatorProps,()=>{i()}),D(()=>{s()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&St(u,W(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ot(u,W(a.value,c))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=$e(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function $e(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Xt(){if(!q)return U(!1);const{ssr:e}=gt();if(e){const n=U(!1);return ze(()=>{n.value=!0}),n}else return U(!0)}function Gt(){const n=de("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ce=Symbol.for("vuetify:stack"),X=Fe([]);function Ut(e,n,t){const o=de("useStack"),a=!t,i=Be(Ce,void 0),s=Fe({activeChildren:new Set});Ye(Ce,s);const r=U(+n.value);me(e,()=>{var y;const f=(y=X.at(-1))==null?void 0:y[1];r.value=f?f+10:+n.value,a&&X.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),D(()=>{if(a){const h=Ge(X).findIndex(g=>g[0]===o.uid);X.splice(h,1)}i==null||i.activeChildren.delete(o.uid)})});const u=U(!0);a&&ve(()=>{var y;const f=((y=X.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=f)});const c=C(()=>!s.activeChildren.size);return{globalTop:Xe(u),localTop:c,stackStyles:C(()=>({zIndex:r.value}))}}function Kt(e){return{teleportTarget:C(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Zt(){return!0}function We(e,n,t){if(!e||qe(e,t)===!1)return!1;const o=Ve(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function qe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Zt)(e)}function Jt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&We(e,n,t)&&setTimeout(()=>{qe(e,t)&&o&&o(e)},0)}function Te(e,n){const t=Ve(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Qt={mounted(e,n){const t=a=>Jt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=We(a,e,n)};Te(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Te(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function en(e){const{modelValue:n,color:t,...o}=e;return R(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&R("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const tn=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...jt(),...at(),...mt(),...ht(),...Lt(),..._t(),...ut(),...xt()},"VOverlay"),yn=Ne()({name:"VOverlay",directives:{ClickOutside:Qt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...tn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=vt(e,"modelValue"),s=C({get:()=>i.value,set:p=>{p&&e.disabled||(i.value=p)}}),{teleportTarget:r}=Kt(C(()=>e.attach||e.contained)),{themeClasses:u}=ft(e),{rtlClasses:c,isRtl:f}=dt(),{hasContent:y,onAfterLeave:h}=wt(e,s),g=rt(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:k}=Ut(s,Ue(e,"zIndex"),e._disableGlobalStack),{activatorEl:P,activatorRef:x,target:b,targetEl:I,targetRef:F,activatorEvents:A,contentEvents:l,scrimEvents:T}=zt(e,{isActive:s,isTop:v}),{dimensionStyles:te}=yt(e),ne=Xt(),{scopeId:S}=Gt();B(()=>e.disabled,p=>{p&&(s.value=!1)});const E=V(),m=V(),{contentStyles:w,updateLocation:L}=Bt(e,{isRtl:f,contentEl:m,target:b,isActive:s});Ht(e,{root:E,contentEl:m,targetEl:I,isActive:s,updateLocation:L});function M(p){a("click:outside",p),e.persistent?_():s.value=!1}function z(){return s.value&&d.value}q&&B(s,p=>{p?window.addEventListener("keydown",O):window.removeEventListener("keydown",O)},{immediate:!0}),Ke(()=>{q&&window.removeEventListener("keydown",O)});function O(p){var H,ge;p.key==="Escape"&&d.value&&(e.persistent?_():(s.value=!1,(H=m.value)!=null&&H.contains(document.activeElement)&&((ge=P.value)==null||ge.focus())))}const $=bt();me(()=>e.closeOnBack,()=>{Et($,p=>{d.value&&s.value?(p(!1),e.persistent?_():s.value=!1):p()})});const Y=V();B(()=>s.value&&(e.absolute||e.contained)&&r.value==null,p=>{if(p){const H=kt(E.value);H&&H!==document.scrollingElement&&(Y.value=H.scrollTop)}});function _(){e.noClickAnimation||m.value&&G(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function je(){h(),a("afterLeave")}return it(()=>{var p;return R(tt,null,[(p=t.activator)==null?void 0:p.call(t,{isActive:s.value,props:W({ref:x,targetRef:F},A.value,e.activatorProps)}),ne.value&&y.value&&R(Ze,{disabled:!r.value,to:r.value},{default:()=>[R("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[k.value,{"--v-overlay-opacity":e.opacity,top:N(Y.value)},e.style],ref:E},S,o),[R(en,W({color:g,modelValue:s.value&&!!e.scrim},T.value),null),R(pt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:je},{default:()=>{var H;return[Je(R("div",W({ref:m,class:["v-overlay__content",e.contentClass],style:[te.value,w.value]},l.value,e.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:s})]),[[Qe,s.value],[et("click-outside"),{handler:M,closeConditional:z,include:()=>[P.value]}]])]}})])]})])}),{activatorEl:P,target:b,animateClick:_,contentEl:m,globalTop:d,localTop:v,updateLocation:L}}});export{mn as V,$t as a,yn as b,kt as g,tn as m,Gt as u};
