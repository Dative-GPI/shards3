import{d as h,e as C,E as I,a2 as k,z as y}from"./vue.esm-bundler-37de1696.js";import{u as V}from"./color-efc02365.js";import{m as b,g as x,u as S}from"./useRender-ccb83440.js";import{I as T,m as P,u as B}from"./tag-9d688242.js";import{p as f,g as N,d as $,H as w,e as n,y as F,z as R,J as D}from"./theme-07d11e72.js";const E=["x-small","small","default","large","x-large"],H=f({size:{type:[String,Number],default:"default"}},"size");function J(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return $(()=>{let a,t;return w(E,e.size)?a=`${i}--size-${e.size}`:e.size&&(t={width:n(e.size),height:n(e.size)}),{sizeClasses:a,sizeStyles:t}})}const O=f({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:T,...b(),...H(),...P({tag:"i"}),...F()},"VIcon"),K=x()({name:"VIcon",props:O(),setup(e,i){let{attrs:a,slots:t}=i;const c=h(),{themeClasses:g}=R(e),{iconData:r}=B(C(()=>c.value||e.icon)),{sizeClasses:u}=J(e),{textColorClasses:z,textColorStyles:v}=V(I(e,"color"));return S(()=>{var d,m;const o=(d=t.default)==null?void 0:d.call(t);o&&(c.value=(m=D(o).filter(l=>l.type===k&&l.children&&typeof l.children=="string")[0])==null?void 0:m.children);const s=!!(a.onClick||a.onClickOnce);return y(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",g.value,u.value,z.value,{"v-icon--clickable":s,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:n(e.size),height:n(e.size),width:n(e.size)},v.value,e.style],role:s?"button":void 0,"aria-hidden":!s,tabindex:s?e.disabled?-1:0:void 0},{default:()=>[o]})}),{}}});export{K as V,H as m,J as u};
