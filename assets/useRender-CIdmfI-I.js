import{p as h,m,j as g,u as j,P}from"./theme-RQK62Xub.js";import{b as C,c as v,u as o,p as S,i as E,s as O,f as R,d as k}from"./vue.esm-bundler-DeSao-KJ.js";const U=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),p=Symbol.for("vuetify:defaults");function B(e){return C(e)}function y(){const e=E(p);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function N(e,t){const u=y(),s=C(e),a=v(()=>{if(o(t==null?void 0:t.disabled))return u.value;const f=o(t==null?void 0:t.scoped),c=o(t==null?void 0:t.reset),r=o(t==null?void 0:t.root);if(s.value==null&&!(f||c||r))return u.value;let n=m(s.value,{prev:u.value});if(f)return n;if(c||r){const l=Number(c||1/0);for(let i=0;i<=l&&!(!n||!("prev"in n));i++)n=n.prev;return n&&typeof r=="string"&&r in n&&(n=m(m(n,{prev:n}),n[r])),n}return n.prev?m(n.prev,n):n});return S(p,a),a}function I(e,t){var u,s;return typeof((u=e.props)==null?void 0:u[t])<"u"||typeof((s=e.props)==null?void 0:s[j(t)])<"u"}function V(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y();const s=g("useDefaults");if(t=t??s.type.name??s.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const a=v(()=>{var r;return(r=u.value)==null?void 0:r[e._as??t]}),d=new Proxy(e,{get(r,n){var i,b,D,_;const l=Reflect.get(r,n);return n==="class"||n==="style"?[(i=a.value)==null?void 0:i[n],l].filter(w=>w!=null):typeof n=="string"&&!I(s.vnode,n)?((b=a.value)==null?void 0:b[n])??((_=(D=u.value)==null?void 0:D.global)==null?void 0:_[n])??l:l}}),f=O();R(()=>{if(a.value){const r=Object.entries(a.value).filter(n=>{let[l]=n;return l.startsWith(l[0].toUpperCase())});f.value=r.length?Object.fromEntries(r):void 0}else f.value=void 0});function c(){const r=A(p,s);S(p,v(()=>f.value?m((r==null?void 0:r.value)??{},f.value):r==null?void 0:r.value))}return{props:d,provideSubDefaults:c}}function x(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=h(e.props??{},e.name)();const t=Object.keys(e.props).filter(u=>u!=="class"&&u!=="style");e.filterProps=function(s){return P(s,t)},e.props._as=String,e.setup=function(s,a){const d=y();if(!d.value)return e._setup(s,a);const{props:f,provideSubDefaults:c}=V(s,s._as??e.name,d),r=e._setup(f,a);return c(),r}}return e}function W(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?x:k)(t)}function $(e,t){return t.props=e,t}function A(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g("injectSelf");const{provides:u}=t;if(u&&e in u)return u[e]}function q(e){const t=g("useRender");t.render=e}export{p as D,$ as a,B as c,x as d,W as g,U as m,N as p,q as u};
