import{e as n,A as r,G as Y}from"./vue.esm-bundler-3416a090.js";import{a as H,b as S}from"./color-5c733e3b.js";import{m as J,g as U,u as j}from"./useRender-fb717f1b.js";import{u as q}from"./VProgressCircular-22b061ae.js";import{u as N}from"./locale-be130c16.js";import{J as k,p as _,G as D,H as E,a as P,c as i,g as K}from"./theme-2c100cd8.js";import{u as Q}from"./proxiedModel-868611da.js";import{m as W,u as Z}from"./rounded-e101edac.js";import{m as ee}from"./tag-a6c90b0c.js";const F=["top","bottom"],te=["start","end","left","right"];function ae(e,t){let[a,l]=e.split(" ");return l||(l=k(F,a)?"start":k(te,a)?"top":"center"),{side:V(a,t),align:V(l,t)}}function V(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function be(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function he(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Ce(e){return{side:e.align,align:e.side}}function ye(e){return k(F,e.side)?"y":"x"}const L={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},le=_({location:String},"location");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:l}=N();return{locationStyles:n(()=>{if(!e.location)return{};const{side:s,align:u}=ae(e.location.split(" ").length>1?e.location:`${e.location} center`,l.value);function g(m){return a?a(m):0}const o={};return s!=="center"&&(t?o[L[s]]=`calc(100% - ${g(s)}px)`:o[s]=0),u!=="center"?t?o[L[u]]=`calc(100% - ${g(u)}px)`:o[u]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const re=_({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...J(),...le({location:"top"}),...W(),...ee(),...D()},"VProgressLinear"),ne=U()({name:"VProgressLinear",props:re(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const l=Q(e,"modelValue"),{isRtl:x,rtlClasses:s}=N(),{themeClasses:u}=E(e),{locationStyles:g}=oe(e),{textColorClasses:o,textColorStyles:m}=H(e,"color"),{backgroundColorClasses:$,backgroundColorStyles:O}=S(n(()=>e.bgColor||e.color)),{backgroundColorClasses:R,backgroundColorStyles:T}=S(n(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:p,backgroundColorStyles:B}=S(e,"color"),{roundedClasses:w}=Z(e),{intersectionRef:v,isIntersecting:A}=q(),b=n(()=>parseFloat(e.max)),c=n(()=>parseFloat(e.height)),h=n(()=>P(parseFloat(e.bufferValue)/b.value*100,0,100)),C=n(()=>P(parseFloat(l.value)/b.value*100,0,100)),f=n(()=>x.value!==e.reverse),X=n(()=>e.indeterminate?"fade-transition":"slide-x-transition");function I(d){if(!v.value)return;const{left:M,right:z,width:y}=v.value.getBoundingClientRect(),G=f.value?y-d.clientX+(z-y):d.clientX-M;l.value=Math.round(G/y*b.value)}return j(()=>r(e.tag,{ref:v,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&A.value,"v-progress-linear--reverse":f.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},w.value,u.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?i(c.value):0,"--v-progress-linear-height":i(c.value),...e.absolute?g.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:C.value,onClick:e.clickable&&I},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...m.value,[f.value?"left":"right"]:i(-c.value),borderTop:`${i(c.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${i(c.value/4)})`,width:i(100-h.value,"%"),"--v-progress-linear-stream-to":i(c.value*(f.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",$.value],style:[O.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),r("div",{class:["v-progress-linear__buffer",R.value],style:[T.value,{opacity:parseFloat(e.bufferOpacity),width:i(h.value,"%")}]},null),r(Y,{name:X.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(d=>r("div",{key:d,class:["v-progress-linear__indeterminate",d,p.value],style:B.value},null))]):r("div",{class:["v-progress-linear__determinate",p.value],style:[B.value,{width:i(C.value,"%")}]},null)]}),a.default&&r("div",{class:"v-progress-linear__content"},[a.default({value:C.value,buffer:h.value})])]})),{}}}),Se=_({loading:[Boolean,String]},"loader");function ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();return{loaderClasses:n(()=>({[`${t}--loading`]:e.loading}))}}function _e(e,t){var l;let{slots:a}=t;return r("div",{class:`${e.name}__loader`},[((l=a.default)==null?void 0:l.call(a,{color:e.color,isActive:e.active}))||r(ne,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}export{_e as L,ne as V,le as a,oe as b,he as c,Ce as d,be as f,ye as g,Se as m,ae as p,ke as u};
