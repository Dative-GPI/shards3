import{b as u,v as R,w as S,x as _,s as O,t as C,c as n,q as E,L as i}from"./vue.esm-bundler-BSyvBTC9.js";import{m as M,g as B,b,a as U}from"./color--o2QfpAv.js";import{I as V,z as y,S as A,p as F,s as $,x as D,c as W}from"./theme-D4rXHj3O.js";import{m as q,a as G,u as L}from"./tag-DB5D_XjQ.js";function j(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const o=u(),s=u();if(V){const r=new ResizeObserver(t=>{e==null||e(t,r),t.length&&(l==="content"?s.value=t[0].contentRect:s.value=t[0].target.getBoundingClientRect())});R(()=>{r.disconnect()}),S(o,(t,a)=>{a&&(r.unobserve(y(a)),s.value=void 0),t&&r.observe(y(t))},{flush:"post"})}return{resizeRef:o,contentRect:_(s)}}function H(e,l){const o=u(),s=O(!1);if(A){const r=new IntersectionObserver(t=>{s.value=!!t.find(a=>a.isIntersecting)},l);R(()=>{r.disconnect()}),S(o,(t,a)=>{a&&(r.unobserve(a),s.value=!1),t&&r.observe(t)},{flush:"post"})}return{intersectionRef:o,isIntersecting:s}}const J=F({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...M(),...q(),...G({tag:"div"}),...$()},"VProgressCircular"),Z=B()({name:"VProgressCircular",props:J(),setup(e,l){let{slots:o}=l;const s=20,r=2*Math.PI*s,t=u(),{themeClasses:a}=D(e),{sizeClasses:w,sizeStyles:m}=L(e),{textColorClasses:x,textColorStyles:I}=b(C(e,"color")),{textColorClasses:N,textColorStyles:k}=b(C(e,"bgColor")),{intersectionRef:z,isIntersecting:P}=H(),{resizeRef:p,contentRect:d}=j(),c=n(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),v=n(()=>Number(e.width)),g=n(()=>m.value?Number(e.size):d.value?d.value.width:Math.max(v.value,32)),f=n(()=>s/(1-v.value/g.value)*2),h=n(()=>v.value/g.value*f.value),T=n(()=>W((100-c.value)/100*r));return E(()=>{z.value=t.value,p.value=t.value}),U(()=>i(e.tag,{ref:t,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":P.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},a.value,w.value,x.value,e.class],style:[m.value,I.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:c.value},{default:()=>[i("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${f.value} ${f.value}`},[i("circle",{class:["v-progress-circular__underlay",N.value],style:k.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":h.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),i("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":h.value,"stroke-dasharray":r,"stroke-dashoffset":T.value},null)]),o.default&&i("div",{class:"v-progress-circular__content"},[o.default({value:c.value})])]})),{}}});export{Z as V,j as a,H as u};
