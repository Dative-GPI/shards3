import{p as j,m,b as p,z as P,Q as R}from"./theme-a26d2375.js";import{d as w,g as k,e as g,u as o,p as O,s as I,l as V,j as x}from"./vue.esm-bundler-01006032.js";const N=j({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),v=Symbol.for("vuetify:defaults");function Q(e){return w(e)}function b(){const e=k(v);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function W(e,t){const u=b(),s=w(e),a=g(()=>{if(o(t==null?void 0:t.disabled))return u.value;const l=o(t==null?void 0:t.scoped),c=o(t==null?void 0:t.reset),r=o(t==null?void 0:t.root);if(s.value==null&&!(l||c||r))return u.value;let n=m(s.value,{prev:u.value});if(l)return n;if(c||r){const f=Number(c||1/0);for(let i=0;i<=f&&!(!n||!("prev"in n));i++)n=n.prev;return n&&typeof r=="string"&&r in n&&(n=m(m(n,{prev:n}),n[r])),n}return n.prev?m(n.prev,n):n});return O(v,a),a}function A(e,t){var u,s;return typeof((u=e.props)==null?void 0:u[t])<"u"||typeof((s=e.props)==null?void 0:s[P(t)])<"u"}function F(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b();const s=p("useDefaults");if(t=t??s.type.name??s.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const a=g(()=>{var r;return(r=u.value)==null?void 0:r[e._as??t]}),d=new Proxy(e,{get(r,n){var i,y,D,_,h,C,S;const f=Reflect.get(r,n);return n==="class"||n==="style"?[(i=a.value)==null?void 0:i[n],f].filter(E=>E!=null):typeof n=="string"&&!A(s.vnode,n)?((y=a.value)==null?void 0:y[n])!==void 0?(D=a.value)==null?void 0:D[n]:((h=(_=u.value)==null?void 0:_.global)==null?void 0:h[n])!==void 0?(S=(C=u.value)==null?void 0:C.global)==null?void 0:S[n]:f:f}}),l=I();V(()=>{if(a.value){const r=Object.entries(a.value).filter(n=>{let[f]=n;return f.startsWith(f[0].toUpperCase())});l.value=r.length?Object.fromEntries(r):void 0}else l.value=void 0});function c(){const r=U(v,s);O(v,g(()=>l.value?m((r==null?void 0:r.value)??{},l.value):r==null?void 0:r.value))}return{props:d,provideSubDefaults:c}}function K(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=j(e.props??{},e.name)();const t=Object.keys(e.props).filter(u=>u!=="class"&&u!=="style");e.filterProps=function(s){return R(s,t)},e.props._as=String,e.setup=function(s,a){const d=b();if(!d.value)return e._setup(s,a);const{props:l,provideSubDefaults:c}=F(s,s._as??e.name,d),r=e._setup(l,a);return c(),r}}return e}function $(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?K:x)(t)}function q(e,t){return t.props=e,t}function U(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:p("injectSelf");const{provides:u}=t;if(u&&e in u)return u[e]}function G(e){const t=p("useRender");t.render=e}export{v as D,q as a,Q as c,K as d,$ as g,N as m,W as p,G as u};