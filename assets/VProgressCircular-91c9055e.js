import{j as N,m as g,d as r,f as V,z as a}from"./vue.esm-bundler-6746129d.js";import{m as R,g as _,b as f,u as T}from"./color-28636d86.js";import{u as I}from"./loader-ad3b4aa2.js";import{u as M}from"./resizeObserver-2d06e994.js";import{m as E,a as O,u as $}from"./VIcon-bfd3bf26.js";import{p as A,s as F,t as U,c as B}from"./theme-dcffbbe6.js";const D=A({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...R(),...E(),...O({tag:"div"}),...F()},"VProgressCircular"),K=_()({name:"VProgressCircular",props:D(),setup(e,C){let{slots:n}=C;const s=20,t=2*Math.PI*s,l=N(),{themeClasses:h}=U(e),{sizeClasses:y,sizeStyles:c}=$(e),{textColorClasses:b,textColorStyles:k}=f(g(e,"color")),{textColorClasses:S,textColorStyles:w}=f(g(e,"bgColor")),{intersectionRef:x,isIntersecting:p}=I(),{resizeRef:P,contentRect:v}=M(),o=r(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),u=r(()=>Number(e.width)),m=r(()=>c.value?Number(e.size):v.value?v.value.width:Math.max(u.value,32)),i=r(()=>s/(1-u.value/m.value)*2),d=r(()=>u.value/m.value*i.value),z=r(()=>B((100-o.value)/100*t));return V(()=>{x.value=l.value,P.value=l.value}),T(()=>a(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},h.value,y.value,b.value,e.class],style:[c.value,k.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:o.value},{default:()=>[a("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${i.value} ${i.value}`},[a("circle",{class:["v-progress-circular__underlay",S.value],style:w.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":d.value,"stroke-dasharray":t,"stroke-dashoffset":0},null),a("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":d.value,"stroke-dasharray":t,"stroke-dashoffset":z.value},null)]),n.default&&a("div",{class:"v-progress-circular__content"},[n.default({value:o.value})])]})),{}}});export{K as V};
