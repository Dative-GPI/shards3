import{p as h,m,l as v,x as j,Q as E}from"./theme-c90fedb5.js";import{d as C,g as O,e as p,u as o,p as S,s as P,l as R,j as k}from"./vue.esm-bundler-96d0a5cc.js";const U=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),g=Symbol.for("vuetify:defaults");function B(e){return C(e)}function y(){const e=O(g);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function N(e,t){const u=y(),s=C(e),a=p(()=>{if(o(t==null?void 0:t.disabled))return u.value;const l=o(t==null?void 0:t.scoped),c=o(t==null?void 0:t.reset),r=o(t==null?void 0:t.root);if(s.value==null&&!(l||c||r))return u.value;let n=m(s.value,{prev:u.value});if(l)return n;if(c||r){const f=Number(c||1/0);for(let i=0;i<=f&&!(!n||!("prev"in n));i++)n=n.prev;return n&&typeof r=="string"&&r in n&&(n=m(m(n,{prev:n}),n[r])),n}return n.prev?m(n.prev,n):n});return S(g,a),a}function x(e,t){var u,s;return typeof((u=e.props)==null?void 0:u[t])<"u"||typeof((s=e.props)==null?void 0:s[j(t)])<"u"}function I(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y();const s=v("useDefaults");if(t=t??s.type.name??s.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const a=p(()=>{var r;return(r=u.value)==null?void 0:r[e._as??t]}),d=new Proxy(e,{get(r,n){var i,b,D,_;const f=Reflect.get(r,n);return n==="class"||n==="style"?[(i=a.value)==null?void 0:i[n],f].filter(w=>w!=null):typeof n=="string"&&!x(s.vnode,n)?((b=a.value)==null?void 0:b[n])??((_=(D=u.value)==null?void 0:D.global)==null?void 0:_[n])??f:f}}),l=P();R(()=>{if(a.value){const r=Object.entries(a.value).filter(n=>{let[f]=n;return f.startsWith(f[0].toUpperCase())});l.value=r.length?Object.fromEntries(r):void 0}else l.value=void 0});function c(){const r=A(g,s);S(g,p(()=>l.value?m((r==null?void 0:r.value)??{},l.value):r==null?void 0:r.value))}return{props:d,provideSubDefaults:c}}function V(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=h(e.props??{},e.name)();const t=Object.keys(e.props).filter(u=>u!=="class"&&u!=="style");e.filterProps=function(s){return E(s,t)},e.props._as=String,e.setup=function(s,a){const d=y();if(!d.value)return e._setup(s,a);const{props:l,provideSubDefaults:c}=I(s,s._as??e.name,d),r=e._setup(l,a);return c(),r}}return e}function Q(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?V:k)(t)}function W(e,t){return t.props=e,t}function A(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v("injectSelf");const{provides:u}=t;if(u&&e in u)return u[e]}function $(e){const t=v("useRender");t.render=e}export{g as D,W as a,B as c,V as d,Q as g,U as m,N as p,$ as u};
