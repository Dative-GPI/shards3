import{I as r,c as h,l as X,s as m,b as Y,w as I,a0 as $,n as G,v as J,X as U,Y as K,F as Q,m as Z,a1 as p}from"./vue.esm-bundler-DC82FEWN.js";import{m as W,g as j,u as D,c as ee}from"./color-BhlhQtQT.js";import{m as te,u as re}from"./dimensions-fR777bfb.js";import{p as E,b as ae,S as ne,c as le}from"./theme-CDGAP9oX.js";import{m as ie,u as se}from"./rounded-TFXDyxjJ.js";import{m as oe,M as _}from"./transition-CJbyFvkq.js";import{I as ue}from"./index-yKNzK_fJ.js";function ce(e){return{aspectStyles:h(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const M=E({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...W(),...te()},"VResponsive"),F=j()({name:"VResponsive",props:M(),setup(e,c){let{slots:o}=c;const{aspectStyles:s}=ce(e),{dimensionStyles:b}=re(e);return D(()=>{var f;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[b.value,e.style]},[r("div",{class:"v-responsive__sizer",style:s.value},null),(f=o.additional)==null?void 0:f.call(o),o.default&&r("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),de=E({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...M(),...W(),...ie(),...oe()},"VImg"),he=j()({name:"VImg",directives:{intersect:ue},props:de(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:o,slots:s}=c;const{backgroundColorClasses:b,backgroundColorStyles:f}=ee(X(e,"color")),{roundedClasses:O}=se(e),S=ae("VImg"),P=m(""),l=Y(),n=m(e.eager?"loading":"idle"),d=m(),y=m(),i=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>i.value.aspect||d.value/y.value||0);I(()=>e.src,()=>{R(n.value!=="idle")}),I(v,(t,a)=>{!t&&a&&l.value&&g(l.value)}),$(()=>R());function R(t){if(!(e.eager&&t)&&!(ne&&!t&&!e.eager)){if(n.value="loading",i.value.lazySrc){const a=new Image;a.src=i.value.lazySrc,g(a,null)}i.value.src&&G(()=>{var a;o("loadstart",((a=l.value)==null?void 0:a.currentSrc)||i.value.src),setTimeout(()=>{var u;if(!S.isUnmounted)if((u=l.value)!=null&&u.complete){if(l.value.naturalWidth||k(),n.value==="error")return;v.value||g(l.value,null),n.value==="loading"&&C()}else v.value||g(l.value),w()})})}}function C(){var t;S.isUnmounted||(w(),g(l.value),n.value="loaded",o("load",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function k(){var t;S.isUnmounted||(n.value="error",o("error",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function w(){const t=l.value;t&&(P.value=t.currentSrc||t.src)}let z=-1;J(()=>{clearTimeout(z)});function g(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const u=()=>{if(clearTimeout(z),S.isUnmounted)return;const{naturalHeight:B,naturalWidth:N}=t;B||N?(d.value=N,y.value=B):!t.complete&&n.value==="loading"&&a!=null?z=window.setTimeout(u,a):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,y.value=1)};u()}const T=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var u;if(!i.value.src||n.value==="idle")return null;const t=r("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:i.value.src,srcset:i.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:C,onError:k},null),a=(u=s.sources)==null?void 0:u.call(s);return r(_,{transition:e.transition,appear:!0},{default:()=>[U(a?r("picture",{class:"v-img__picture"},[a,t]):t,[[p,n.value==="loaded"]])]})},A=()=>r(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:i.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>s.placeholder?r(_,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&r("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,q=()=>s.error?r(_,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&r("div",{class:"v-img__error"},[s.error()])]}):null,L=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=m(!1);{const t=I(v,a=>{a&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),t())})}return D(()=>{const t=F.filterProps(e);return U(r(F,Z({class:["v-img",{"v-img--booting":!V.value},b.value,O.value,e.class],style:[{width:le(e.width==="auto"?d.value:e.width)},f.value,e.style]},t,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Q,null,[r(x,null,null),r(A,null,null),r(L,null,null),r(H,null,null),r(q,null,null)]),default:s.default}),[[K("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:P,image:l,state:n,naturalWidth:d,naturalHeight:y}}});export{he as V};
