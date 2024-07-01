import{N as x,O as N,P as F,p as W,Q as b,b as R,t as z,M as Q,C as Z}from"./theme-CDGAP9oX.js";import{b as q,c as v,u as p,p as I,i as J,s as tt,j as et,d as nt,g as L}from"./vue.esm-bundler-DC82FEWN.js";const d=2.4,j=.2126729,_=.7151522,w=.072175,st=.55,rt=.58,ut=.57,at=.62,h=.03,T=1.45,lt=5e-4,ot=1.25,ft=1.25,$=.078,G=12.82051282051282,C=.06,V=.001;function P(t,e){const n=(t.r/255)**d,s=(t.g/255)**d,r=(t.b/255)**d,u=(e.r/255)**d,o=(e.g/255)**d,f=(e.b/255)**d;let a=n*j+s*_+r*w,l=u*j+o*_+f*w;if(a<=h&&(a+=(h-a)**T),l<=h&&(l+=(h-l)**T),Math.abs(l-a)<lt)return 0;let i;if(l>a){const c=(l**st-a**rt)*ot;i=c<V?0:c<$?c-c*G*C:c-C}else{const c=(l**at-a**ut)*ft;i=c>-V?0:c>-$?c-c*G*C:c+C}return i*100}const ct=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],it=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function gt(t){let{r:e,g:n,b:s}=t;const r=[0,0,0],u=it,o=ct;e=u(e/255),n=u(n/255),s=u(s/255);for(let f=0;f<3;++f)r[f]=o[f][0]*e+o[f][1]*n+o[f][2]*s;return r}function k(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function dt(t){return k(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const E=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,mt={rgb:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),rgba:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),hsl:(t,e,n,s)=>A({h:t,s:e,l:n,a:s}),hsla:(t,e,n,s)=>A({h:t,s:e,l:n,a:s}),hsv:(t,e,n,s)=>g({h:t,s:e,v:n,a:s}),hsva:(t,e,n,s)=>g({h:t,s:e,v:n,a:s})};function m(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&E.test(t)){const{groups:e}=t.match(E),{fn:n,values:s}=e,r=s.split(/,\s*/).map(u=>u.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(u)/100:parseFloat(u));return mt[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),U(e)}else if(typeof t=="object"){if(x(t,["r","g","b"]))return t;if(x(t,["h","s","l"]))return g(Y(t));if(x(t,["h","s","v"]))return g(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function g(t){const{h:e,s:n,v:s,a:r}=t,u=f=>{const a=(f+e/60)%6;return s-s*n*Math.max(Math.min(a,4-a,1),0)},o=[u(5),u(3),u(1)].map(f=>Math.round(f*255));return{r:o[0],g:o[1],b:o[2],a:r}}function A(t){return g(Y(t))}function bt(t){if(!t)return{h:0,s:1,v:1,a:1};const e=t.r/255,n=t.g/255,s=t.b/255,r=Math.max(e,n,s),u=Math.min(e,n,s);let o=0;r!==u&&(r===e?o=60*(0+(n-s)/(r-u)):r===n?o=60*(2+(s-e)/(r-u)):r===s&&(o=60*(4+(e-n)/(r-u)))),o<0&&(o=o+360);const f=r===0?0:(r-u)/r,a=[o,f,r];return{h:a[0],s:a[1],v:a[2],a:t.a}}function Mt(t){const{h:e,s:n,v:s,a:r}=t,u=s-s*n/2,o=u===1||u===0?0:(s-u)/Math.min(u,1-u);return{h:e,s:o,l:u,a:r}}function Y(t){const{h:e,s:n,l:s,a:r}=t,u=s+n*Math.min(s,1-s),o=u===0?0:2-2*s/u;return{h:e,s:o,v:u,a:r}}function vt(t){let{r:e,g:n,b:s,a:r}=t;return r===void 0?`rgb(${e}, ${n}, ${s})`:`rgba(${e}, ${n}, ${s}, ${r})`}function Bt(t){return vt(g(t))}function y(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function pt(t){let{r:e,g:n,b:s,a:r}=t;return`#${[y(e),y(n),y(s),r!==void 0?y(Math.round(r*255)):""].join("")}`}function U(t){t=ht(t);let[e,n,s,r]=N(t,2).map(u=>parseInt(u,16));return r=r===void 0?r:r/255,{r:e,g:n,b:s,a:r}}function Dt(t){const e=U(t);return bt(e)}function Ft(t){return pt(g(t))}function ht(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=F(F(t,6),8,"F")),t}function O(t){const e=m(t);return gt(e)[1]}function jt(t,e){const n=O(t),s=O(e),r=Math.max(n,s),u=Math.min(n,s);return(r+.05)/(u+.05)}function Ct(t){const e=Math.abs(P(m(0),m(t)));return Math.abs(P(m(16777215),m(t)))>Math.min(e,50)?"#fff":"#000"}const _t=W({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),S=Symbol.for("vuetify:defaults");function H(){const t=J(S);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function wt(t,e){const n=H(),s=q(t),r=v(()=>{if(p(e==null?void 0:e.disabled))return n.value;const o=p(e==null?void 0:e.scoped),f=p(e==null?void 0:e.reset),a=p(e==null?void 0:e.root);if(s.value==null&&!(o||f||a))return n.value;let l=b(s.value,{prev:n.value});if(o)return l;if(f||a){const i=Number(f||1/0);for(let c=0;c<=i&&!(!l||!("prev"in l));c++)l=l.prev;return l&&typeof a=="string"&&a in l&&(l=b(b(l,{prev:l}),l[a])),l}return l.prev?b(l.prev,l):l});return I(S,r),r}function yt(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[z(e)])<"u"}function St(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:H();const s=R("useDefaults");if(e=e??s.type.name??s.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=v(()=>{var a;return(a=n.value)==null?void 0:a[t._as??e]}),u=new Proxy(t,{get(a,l){var c,M,B,D;const i=Reflect.get(a,l);return l==="class"||l==="style"?[(c=r.value)==null?void 0:c[l],i].filter(K=>K!=null):typeof l=="string"&&!yt(s.vnode,l)?((M=r.value)==null?void 0:M[l])??((D=(B=n.value)==null?void 0:B.global)==null?void 0:D[l])??i:i}}),o=tt();et(()=>{if(r.value){const a=Object.entries(r.value).filter(l=>{let[i]=l;return i.startsWith(i[0].toUpperCase())});o.value=a.length?Object.fromEntries(a):void 0}else o.value=void 0});function f(){const a=kt(S,s);I(S,v(()=>o.value?b((a==null?void 0:a.value)??{},o.value):a==null?void 0:a.value))}return{props:u,provideSubDefaults:f}}function xt(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=W(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(s){return Q(s,e)},t.props._as=String,t.setup=function(s,r){const u=H();if(!u.value)return t._setup(s,r);const{props:o,provideSubDefaults:f}=St(s,s._as??t.name,u),a=t._setup(o,r);return f(),a}}return t}function Tt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?xt:nt)(e)}function $t(t,e){return e.props=t,e}function kt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function Gt(t){const e=R("useRender");e.render=t}function X(t){return Z(()=>{const e=[],n={};if(t.value.background)if(k(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&dt(t.value.background)){const s=m(t.value.background);if(s.a==null||s.a===1){const r=Ct(s);n.color=r,n.caretColor=r}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(k(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Vt(t,e){const n=v(()=>({text:L(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:r}=X(n);return{textColorClasses:s,textColorStyles:r}}function Pt(t,e){const n=v(()=>({background:L(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:r}=X(n);return{backgroundColorClasses:s,backgroundColorStyles:r}}export{Ft as H,bt as R,X as a,Vt as b,Pt as c,xt as d,g as e,Mt as f,Tt as g,Y as h,Dt as i,Bt as j,m as k,vt as l,_t as m,jt as n,$t as o,wt as p,Gt as u};
