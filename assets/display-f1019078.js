import{s as x,r as S,d as C,t as U,e as O,f as v}from"./vue.esm-bundler-29da8e49.js";import{I as g,m as R,S as j,p as E,g as H}from"./useColors-ad83dc40.js";const P=Symbol.for("vuetify:display"),b={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},W=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b;return R(b,n)};function w(n){return g&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function y(n){return g&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function D(n){const s=g&&!n?window.navigator.userAgent:"ssr";function e(c){return!!s.match(c)}const l=e(/android/i),m=e(/iphone|ipad|ipod/i),d=e(/cordova/i),t=e(/electron/i),i=e(/chrome/i),f=e(/edge/i),h=e(/firefox/i),o=e(/opera/i),a=e(/win/i),r=e(/mac/i),u=e(/linux/i);return{android:l,ios:m,cordova:d,electron:t,chrome:i,edge:f,firefox:h,opera:o,win:a,mac:r,linux:u,touch:j,ssr:s==="ssr"}}function V(n,s){const{thresholds:e,mobileBreakpoint:l}=W(n),m=x(y(s)),d=x(D(s)),t=S({}),i=x(w(s));function f(){m.value=y(),i.value=w()}function h(){f(),d.value=D()}return C(()=>{const o=i.value<e.sm,a=i.value<e.md&&!o,r=i.value<e.lg&&!(a||o),u=i.value<e.xl&&!(r||a||o),c=i.value<e.xxl&&!(u||r||a||o),p=i.value>=e.xxl,k=o?"xs":a?"sm":r?"md":u?"lg":c?"xl":"xxl",A=typeof l=="number"?l:e[l],B=i.value<A;t.xs=o,t.sm=a,t.md=r,t.lg=u,t.xl=c,t.xxl=p,t.smAndUp=!o,t.mdAndUp=!(o||a),t.lgAndUp=!(o||a||r),t.xlAndUp=!(o||a||r||u),t.smAndDown=!(r||u||c||p),t.mdAndDown=!(u||c||p),t.lgAndDown=!(c||p),t.xlAndDown=!p,t.name=k,t.height=m.value,t.width=i.value,t.mobile=B,t.mobileBreakpoint=l,t.platform=d.value,t.thresholds=e}),g&&window.addEventListener("resize",f,{passive:!0}),{...U(t),update:h,ssr:!!s}}const z=E({mobileBreakpoint:[Number,String]},"display");function T(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();const e=O(P);if(!e)throw new Error("Could not find Vuetify display injection");const l=v(()=>{if(!n.mobileBreakpoint)return e.mobile.value;const d=typeof n.mobileBreakpoint=="number"?n.mobileBreakpoint:e.thresholds.value[n.mobileBreakpoint];return e.width.value<d}),m=v(()=>s?{[`${s}--mobile`]:l.value}:{});return{...e,displayClasses:m,mobile:l}}export{P as D,V as c,z as m,T as u};
