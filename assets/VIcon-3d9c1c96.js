import{j as h,g as C,A as I,a2 as k,P as V}from"./vue.esm-bundler-a0893183.js";import{a as b}from"./color-d0fba9db.js";import{m as x,g as y,u as S}from"./useRender-13ac3742.js";import{I as P,m as T,u as B}from"./tag-c957791e.js";import{p as f,g as N,d as $,s as w,c as s,G as F,H as R,L as j}from"./theme-41eca2c8.js";const A=["x-small","small","default","large","x-large"],D=f({size:{type:[String,Number],default:"default"}},"size");function G(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return $(()=>{let a,t;return w(A,e.size)?a=`${i}--size-${e.size}`:e.size&&(t={width:s(e.size),height:s(e.size)}),{sizeClasses:a,sizeStyles:t}})}const H=f({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:P,...x(),...D(),...T({tag:"i"}),...F()},"VIcon"),J=y()({name:"VIcon",props:H(),setup(e,i){let{attrs:a,slots:t}=i;const c=h(),{themeClasses:g}=R(e),{iconData:r}=B(C(()=>c.value||e.icon)),{sizeClasses:u}=G(e),{textColorClasses:z,textColorStyles:v}=b(I(e,"color"));return S(()=>{var d,m;const o=(d=t.default)==null?void 0:d.call(t);o&&(c.value=(m=j(o).filter(l=>l.type===k&&l.children&&typeof l.children=="string")[0])==null?void 0:m.children);const n=!!(a.onClick||a.onClickOnce);return V(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",g.value,u.value,z.value,{"v-icon--clickable":n,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:s(e.size),height:s(e.size),width:s(e.size)},v.value,e.style],role:n?"button":void 0,"aria-hidden":!n,tabindex:n?e.disabled?-1:0:void 0},{default:()=>[o]})}),{}}});export{J as V,D as m,G as u};