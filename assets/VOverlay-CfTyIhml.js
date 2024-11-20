import{P as N,j as I,k as ce,b as $,w as M,c as T,n as de,x as H,y as me,U as Re,i as Ne,s as K,g as Ge,r as _e,p as Ke,e as Je,V as Qe,t as et,o as tt,a9 as nt,Z as ot,a2 as at,_ as rt,I as it}from"./vue.esm-bundler-Zcuj-zyO.js";import{a as G,d as st,s as ue,b as lt,g as He,n as Ve,B as ae,c as xe}from"./forwardRefs-DWGaNmQL.js";import{g as De,m as ct,c as ut,a as ft}from"./color-mm3JSYKM.js";import{H as Ie,Y as $e,p as Y,I as W,C as vt,c as _,B as Se,Z as dt,a as ye,t as pe,A as mt,s as yt,x as gt}from"./theme-DppimMvq.js";import{a as ge,u as ht}from"./proxiedModel-Xz4IZg0a.js";import{p as Oe,f as re,a as ie,b as ke,g as Pe}from"./anchor-BS5WaiJh.js";import{m as wt,u as bt}from"./dimensions-BWgpWc0X.js";import{u as Et}from"./display-Db__yhk9.js";import{m as xt,a as St,u as pt}from"./scopeId-CPcZlDEY.js";import{a as Ot}from"./locale-Beavd5eP.js";import{a as kt,b as Pt}from"./router-DnAkll3L.js";import{m as At,M as Ct}from"./transition-shOmLEJh.js";const Q=new WeakMap;function Tt(e,n){Object.keys(n).forEach(t=>{if(Ie(t)){const o=$e(t),r=Q.get(e);if(n[t]==null)r==null||r.forEach(i=>{const[l,a]=i;l===o&&(e.removeEventListener(o,a),r.delete(i))});else if(!r||![...r].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=r||new Set;i.add([o,n[t]]),Q.has(e)||Q.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Lt(e,n){Object.keys(n).forEach(t=>{if(Ie(t)){const o=$e(t),r=Q.get(e);r==null||r.forEach(i=>{const[l,a]=i;l===o&&(e.removeEventListener(o,a),r.delete(i))})}else e.removeAttribute(t)})}function We(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Bt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Mt(e):he(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(he(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function he(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Mt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ft(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Rt=Y({target:[Object,Array]},"v-dialog-transition"),En=De()({name:"VDialogTransition",props:Rt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(r){r.style.pointerEvents="none",r.style.visibility="hidden"},async onEnter(r,i){var b;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),r.style.visibility="";const{x:l,y:a,sx:u,sy:c,speed:f}=Ce(e.target,r),y=G(r,[{transform:`translate(${l}px, ${a}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:st});(b=Ae(r))==null||b.forEach(g=>{G(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ue})}),y.finished.then(()=>i())},onAfterEnter(r){r.style.removeProperty("pointer-events")},onBeforeLeave(r){r.style.pointerEvents="none"},async onLeave(r,i){var b;await new Promise(g=>requestAnimationFrame(g));const{x:l,y:a,sx:u,sy:c,speed:f}=Ce(e.target,r);G(r,[{},{transform:`translate(${l}px, ${a}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:lt}).finished.then(()=>i()),(b=Ae(r))==null||b.forEach(g=>{G(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ue})})},onAfterLeave(r){r.style.removeProperty("pointer-events")}};return()=>e.target?N(ce,I({name:"dialog-transition"},o,{css:!1}),t):N(ce,{name:"dialog-transition"},t)}});function Ae(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ce(e,n){const t=He(e),o=Ve(n),[r,i]=getComputedStyle(n).transformOrigin.split(" ").map(S=>parseFloat(S)),[l,a]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;l==="left"||a==="left"?u-=t.width/2:(l==="right"||a==="right")&&(u+=t.width/2);let c=t.top+t.height/2;l==="top"||a==="top"?c-=t.height/2:(l==="bottom"||a==="bottom")&&(c+=t.height/2);const f=t.width/o.width,y=t.height/o.height,b=Math.max(1,f,y),g=f/b||0,d=y/b||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),P=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(r+o.left),y:c-(i+o.top),sx:g,sy:d,speed:P}}function se(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Nt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Te(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,r=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return se({x:r,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,r=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return se({x:r,y:i},n)}return se({x:n.width/2,y:n.height/2},n)}const qe={static:Vt,connected:It},_t=Y({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in qe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Ht(e,n){const t=$({}),o=$();W&&ge(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,a;M(()=>e.locationStrategy,i),H(()=>{window.removeEventListener("resize",r),o.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(a=qe[e.locationStrategy](n,e,t))==null?void 0:a.updateLocation});function r(i){var l;(l=o.value)==null||l.call(o,i)}return{contentStyles:t,updateLocation:o}}function Vt(){}function Dt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ve(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function It(e,n,t){(Array.isArray(e.target.value)||Ft(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:i}=vt(()=>{const d=Oe(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?re(d):Oe(n.origin,e.isRtl.value);return d.side===v.side&&d.align===ie(v).align?{preferredAnchor:ke(d),preferredOrigin:ke(v)}:{preferredAnchor:d,preferredOrigin:v}}),[l,a,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>T(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=T(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let y=!1;const b=new ResizeObserver(()=>{y&&g()});M([e.target,e.contentEl],(d,v)=>{let[P,S]=d,[p,E]=v;p&&!Array.isArray(p)&&b.unobserve(p),P&&!Array.isArray(P)&&b.observe(P),E&&b.unobserve(E),S&&b.observe(S)},{immediate:!0}),H(()=>{b.disconnect()});function g(){if(y=!1,requestAnimationFrame(()=>y=!0),!e.target.value||!e.contentEl.value)return;const d=He(e.target.value),v=Dt(e.contentEl.value,e.isRtl.value),P=te(e.contentEl.value),S=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=P.reduce((O,x)=>{const m=x.getBoundingClientRect(),h=new ae({x:x===document.documentElement?0:m.x,y:x===document.documentElement?0:m.y,width:x.clientWidth,height:x.clientHeight});return O?new ae({x:Math.max(O.left,h.left),y:Math.max(O.top,h.top),width:Math.min(O.right,h.right)-Math.max(O.left,h.left),height:Math.min(O.bottom,h.bottom)-Math.max(O.top,h.top)}):h},void 0);p.x+=S,p.y+=S,p.width-=S*2,p.height-=S*2;let E={anchor:r.value,origin:i.value};function V(O){const x=new ae(v),m=Te(O.anchor,d),h=Te(O.origin,x);let{x:k,y:R}=Nt(m,h);switch(O.anchor.side){case"top":R-=f.value[0];break;case"bottom":R+=f.value[0];break;case"left":k-=f.value[0];break;case"right":k+=f.value[0];break}switch(O.anchor.align){case"top":R-=f.value[1];break;case"bottom":R+=f.value[1];break;case"left":k-=f.value[1];break;case"right":k+=f.value[1];break}return x.x+=k,x.y+=R,x.width=Math.min(x.width,u.value),x.height=Math.min(x.height,c.value),{overflows:xe(x,p),x:k,y:R}}let F=0,A=0;const s={x:0,y:0},L={x:!1,y:!1};let U=-1;for(;!(U++>10);){const{x:O,y:x,overflows:m}=V(E);F+=O,A+=x,v.x+=O,v.y+=x;{const h=Pe(E.anchor),k=m.x.before||m.x.after,R=m.y.before||m.y.after;let q=!1;if(["x","y"].forEach(C=>{if(C==="x"&&k&&!L.x||C==="y"&&R&&!L.y){const D={anchor:{...E.anchor},origin:{...E.origin}},j=C==="x"?h==="y"?ie:re:h==="y"?re:ie;D.anchor=j(D.anchor),D.origin=j(D.origin);const{overflows:z}=V(D);(z[C].before<=m[C].before&&z[C].after<=m[C].after||z[C].before+z[C].after<(m[C].before+m[C].after)/2)&&(E=D,q=L[C]=!0)}}),q)continue}m.x.before&&(F+=m.x.before,v.x+=m.x.before),m.x.after&&(F-=m.x.after,v.x-=m.x.after),m.y.before&&(A+=m.y.before,v.y+=m.y.before),m.y.after&&(A-=m.y.after,v.y-=m.y.after);{const h=xe(v,p);s.x=p.width-h.x.before-h.x.after,s.y=p.height-h.y.before-h.y.after,F+=h.x.before,v.x+=h.x.before,A+=h.y.before,v.y+=h.y.before}break}const oe=Pe(E.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${E.anchor.side} ${E.anchor.align}`,transformOrigin:`${E.origin.side} ${E.origin.align}`,top:_(le(A)),left:e.isRtl.value?void 0:_(le(F)),right:e.isRtl.value?_(le(-F)):void 0,minWidth:_(oe==="y"?Math.min(l.value,d.width):l.value),maxWidth:_(Le(Se(s.x,l.value===1/0?0:l.value,u.value))),maxHeight:_(Le(Se(s.y,a.value===1/0?0:a.value,c.value)))}),{available:s,contentBox:v}}return M(()=>[r.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),de(()=>{const d=g();if(!d)return;const{available:v,contentBox:P}=d;P.height>v.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Le(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let fe=!0;const ne=[];function $t(e){!fe||ne.length?(ne.push(e),ve()):(fe=!1,e(),ve())}let Be=-1;function ve(){cancelAnimationFrame(Be),Be=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?ve():fe=!0})}const ee={none:null,close:jt,block:zt,reposition:Yt},Wt=Y({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ee}},"VOverlay-scroll-strategies");function qt(e,n){if(!W)return;let t;me(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Re(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ee[e.scrollStrategy])==null||o.call(ee,n,e,t)}))}),H(()=>{t==null||t.stop()})}function jt(e){function n(t){e.isActive.value=!1}je(e.targetEl.value??e.contentEl.value,n)}function zt(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...te(e.targetEl.value,n.contained?t:void 0),...te(e.contentEl.value,n.contained?t:void 0)])].filter(a=>!a.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,i=(a=>he(a)&&a)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((a,u)=>{a.style.setProperty("--v-body-scroll-x",_(-a.scrollLeft)),a.style.setProperty("--v-body-scroll-y",_(-a.scrollTop)),a!==document.documentElement&&a.style.setProperty("--v-scrollbar-offset",_(r)),a.classList.add("v-overlay-scroll-blocked")}),H(()=>{o.forEach((a,u)=>{const c=parseFloat(a.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(a.style.getPropertyValue("--v-body-scroll-y")),y=a.style.scrollBehavior;a.style.scrollBehavior="auto",a.style.removeProperty("--v-body-scroll-x"),a.style.removeProperty("--v-body-scroll-y"),a.style.removeProperty("--v-scrollbar-offset"),a.classList.remove("v-overlay-scroll-blocked"),a.scrollLeft=-c,a.scrollTop=-f,a.style.scrollBehavior=y}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Yt(e,n,t){let o=!1,r=-1,i=-1;function l(a){$t(()=>{var f,y;const u=performance.now();(y=(f=e.updateLocation).value)==null||y.call(f,a),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?a=>a():requestIdleCallback)(()=>{t.run(()=>{je(e.targetEl.value??e.contentEl.value,a=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{l(a)})})):l(a)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(r)})}function je(e,n){const t=[document,...te(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),H(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Ut=Symbol.for("vuetify:v-menu"),Xt=Y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Zt(e,n){let t=()=>{};function o(l){t==null||t();const a=Number(l?e.openDelay:e.closeDelay);return new Promise(u=>{t=dt(a,()=>{n==null||n(l),u(l)})})}function r(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:r,runCloseDelay:i}}const Gt=Y({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Xt()},"VOverlay-activator");function Kt(e,n){let{isActive:t,isTop:o}=n;const r=ye("useActivator"),i=$();let l=!1,a=!1,u=!0;const c=T(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=T(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:y,runCloseDelay:b}=Zt(e,s=>{s===(e.openOnHover&&l||c.value&&a)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==s&&(u=!0),t.value=s)}),g=$(),d={onClick:s=>{s.stopPropagation(),i.value=s.currentTarget||s.target,t.value||(g.value=[s.clientX,s.clientY]),t.value=!t.value},onMouseenter:s=>{var L;(L=s.sourceCapabilities)!=null&&L.firesTouchEvents||(l=!0,i.value=s.currentTarget||s.target,y())},onMouseleave:s=>{l=!1,b()},onFocus:s=>{mt(s.target,":focus-visible")!==!1&&(a=!0,s.stopPropagation(),i.value=s.currentTarget||s.target,y())},onBlur:s=>{a=!1,s.stopPropagation(),b()}},v=T(()=>{const s={};return f.value&&(s.onClick=d.onClick),e.openOnHover&&(s.onMouseenter=d.onMouseenter,s.onMouseleave=d.onMouseleave),c.value&&(s.onFocus=d.onFocus,s.onBlur=d.onBlur),s}),P=T(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,y()},s.onMouseleave=()=>{l=!1,b()}),c.value&&(s.onFocusin=()=>{a=!0,y()},s.onFocusout=()=>{a=!1,b()}),e.closeOnContentClick){const L=Ne(Ut,null);s.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return s}),S=T(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{u&&(l=!0,u=!1,y())},s.onMouseleave=()=>{l=!1,b()}),s});M(o,s=>{s&&(e.openOnHover&&!l&&(!c.value||!a)||c.value&&!a&&(!e.openOnHover||!l))&&(t.value=!1)}),M(t,s=>{s||setTimeout(()=>{g.value=void 0})},{flush:"post"});const p=pe();me(()=>{p.value&&de(()=>{i.value=p.el})});const E=pe(),V=T(()=>e.target==="cursor"&&g.value?g.value:E.value?E.el:ze(e.target,r)||i.value),F=T(()=>Array.isArray(V.value)?void 0:V.value);let A;return M(()=>!!e.activator,s=>{s&&W?(A=Re(),A.run(()=>{Jt(e,r,{activatorEl:i,activatorEvents:v})})):A&&A.stop()},{flush:"post",immediate:!0}),H(()=>{A==null||A.stop()}),{activatorEl:i,activatorRef:p,target:V,targetEl:F,targetRef:E,activatorEvents:v,contentEvents:P,scrimEvents:S}}function Jt(e,n,t){let{activatorEl:o,activatorEvents:r}=t;M(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=a(c);f&&l(f)}u&&de(()=>i())},{immediate:!0}),M(()=>e.activatorProps,()=>{i()}),H(()=>{l()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Tt(u,I(r.value,c))}function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Lt(u,I(r.value,c))}function a(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=ze(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function ze(e,n){var o,r;if(!e)return;let t;if(e==="parent"){let i=(r=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:r.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Qt(){if(!W)return K(!1);const{ssr:e}=Et();if(e){const n=K(!1);return Ge(()=>{n.value=!0}),n}else return K(!0)}const Me=Symbol.for("vuetify:stack"),Z=_e([]);function en(e,n,t){const o=ye("useStack"),r=!t,i=Ne(Me,void 0),l=_e({activeChildren:new Set});Ke(Me,l);const a=K(+n.value);ge(e,()=>{var y;const f=(y=Z.at(-1))==null?void 0:y[1];a.value=f?f+10:+n.value,r&&Z.push([o.uid,a.value]),i==null||i.activeChildren.add(o.uid),H(()=>{if(r){const b=Qe(Z).findIndex(g=>g[0]===o.uid);Z.splice(b,1)}i==null||i.activeChildren.delete(o.uid)})});const u=K(!0);r&&me(()=>{var y;const f=((y=Z.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=f)});const c=T(()=>!l.activeChildren.size);return{globalTop:Je(u),localTop:c,stackStyles:T(()=>({zIndex:a.value}))}}function tn(e){return{teleportTarget:T(()=>{const t=e();if(t===!0||!W)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let r=[...o.children].find(i=>i.matches(".v-overlay-container"));return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function nn(){return!0}function Ye(e,n,t){if(!e||Ue(e,t)===!1)return!1;const o=We(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof t.value=="object"&&t.value.include||(()=>[]))();return r.push(n),!r.some(i=>i==null?void 0:i.contains(e.target))}function Ue(e,n){return(typeof n.value=="object"&&n.value.closeConditional||nn)(e)}function on(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Ye(e,n,t)&&setTimeout(()=>{Ue(e,t)&&o&&o(e)},0)}function Fe(e,n){const t=We(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const an={mounted(e,n){const t=r=>on(r,e,n),o=r=>{e._clickOutside.lastMousedownWasOutside=Ye(r,e,n)};Fe(e,r=>{r.addEventListener("click",t,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(Fe(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[n.instance.$.uid])}};function rn(e){const{modelValue:n,color:t,...o}=e;return N(ce,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&N("div",I({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const sn=Y({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Gt(),...ct(),...wt(),...xt(),..._t(),...Wt(),...yt(),...At()},"VOverlay"),xn=De()({name:"VOverlay",directives:{ClickOutside:an},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...sn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:r}=n;const i=ye("VOverlay"),l=ht(e,"modelValue"),a=T({get:()=>l.value,set:w=>{w&&e.disabled||(l.value=w)}}),{themeClasses:u}=gt(e),{rtlClasses:c,isRtl:f}=Ot(),{hasContent:y,onAfterLeave:b}=St(e,a),g=ut(T(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:P}=en(a,et(e,"zIndex"),e._disableGlobalStack),{activatorEl:S,activatorRef:p,target:E,targetEl:V,targetRef:F,activatorEvents:A,contentEvents:s,scrimEvents:L}=Kt(e,{isActive:a,isTop:v}),{teleportTarget:U}=tn(()=>{var X,be,Ee;const w=e.attach||e.contained;if(w)return w;const B=((X=S==null?void 0:S.value)==null?void 0:X.getRootNode())||((Ee=(be=i.proxy)==null?void 0:be.$el)==null?void 0:Ee.getRootNode());return B instanceof ShadowRoot?B:!1}),{dimensionStyles:oe}=bt(e),O=Qt(),{scopeId:x}=pt();M(()=>e.disabled,w=>{w&&(a.value=!1)});const m=$(),h=$(),k=$(),{contentStyles:R,updateLocation:q}=Ht(e,{isRtl:f,contentEl:k,target:E,isActive:a});qt(e,{root:m,contentEl:k,targetEl:V,isActive:a,updateLocation:q});function C(w){r("click:outside",w),e.persistent?J():a.value=!1}function D(w){return a.value&&d.value&&(!e.scrim||w.target===h.value||w instanceof MouseEvent&&w.shadowTarget===h.value)}W&&M(a,w=>{w?window.addEventListener("keydown",j):window.removeEventListener("keydown",j)},{immediate:!0}),tt(()=>{W&&window.removeEventListener("keydown",j)});function j(w){var B,X;w.key==="Escape"&&d.value&&(e.persistent?J():(a.value=!1,(B=k.value)!=null&&B.contains(document.activeElement)&&((X=S.value)==null||X.focus())))}const z=kt();ge(()=>e.closeOnBack,()=>{Pt(z,w=>{d.value&&a.value?(w(!1),e.persistent?J():a.value=!1):w()})});const we=$();M(()=>a.value&&(e.absolute||e.contained)&&U.value==null,w=>{if(w){const B=Bt(m.value);B&&B!==document.scrollingElement&&(we.value=B.scrollTop)}});function J(){e.noClickAnimation||k.value&&G(k.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ue})}function Xe(){r("afterEnter")}function Ze(){b(),r("afterLeave")}return ft(()=>{var w;return N(it,null,[(w=t.activator)==null?void 0:w.call(t,{isActive:a.value,targetRef:F,props:I({ref:p},A.value,e.activatorProps)}),O.value&&y.value&&N(nt,{disabled:!U.value,to:U.value},{default:()=>[N("div",I({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":a.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[P.value,{"--v-overlay-opacity":e.opacity,top:_(we.value)},e.style],ref:m},x,o),[N(rn,I({color:g,modelValue:a.value&&!!e.scrim,ref:h},L.value),null),N(Ct,{appear:!0,persisted:!0,transition:e.transition,target:E.value,onAfterEnter:Xe,onAfterLeave:Ze},{default:()=>{var B;return[ot(N("div",I({ref:k,class:["v-overlay__content",e.contentClass],style:[oe.value,R.value]},s.value,e.contentProps),[(B=t.default)==null?void 0:B.call(t,{isActive:a})]),[[at,a.value],[rt("click-outside"),{handler:C,closeConditional:D,include:()=>[S.value]}]])]}})])]})])}),{activatorEl:S,scrimEl:h,target:E,animateClick:J,contentEl:k,globalTop:d,localTop:v,updateLocation:q}}});export{En as V,Ut as a,xn as b,Bt as g,sn as m};
