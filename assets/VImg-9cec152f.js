import{z as r,e as h,q as L,s as g,d as G,w as I,a3 as J,x as K,k as Q,B as U,C as X,F as Y,A as Z,$ as p}from"./vue.esm-bundler-d8049c85.js";import{m as W,g as j,u as x}from"./useRender-29d234e5.js";import{m as ee,u as te}from"./dimensions-c0ade26a.js";import{p as A,h as re,s as ae,e as ne}from"./theme-540b65c4.js";import{u as le}from"./color-339b05ed.js";import{m as ie,u as se}from"./rounded-0d200380.js";import{m as oe,M as _}from"./transition-a0827c0d.js";import{I as ue}from"./index-d961be33.js";function ce(e){return{aspectStyles:h(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const D=A({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...W(),...ee()},"VResponsive"),F=j()({name:"VResponsive",props:D(),setup(e,c){let{slots:o}=c;const{aspectStyles:s}=ce(e),{dimensionStyles:b}=te(e);return x(()=>{var f;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[b.value,e.style]},[r("div",{class:"v-responsive__sizer",style:s.value},null),(f=o.additional)==null?void 0:f.call(o),o.default&&r("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),de=A({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...D(),...W(),...ie(),...oe()},"VImg"),be=j()({name:"VImg",directives:{intersect:ue},props:de(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:o,slots:s}=c;const{backgroundColorClasses:b,backgroundColorStyles:f}=le(L(e,"color")),{roundedClasses:E}=se(e),S=re("VImg"),C=g(""),l=G(),n=g(e.eager?"loading":"idle"),d=g(),y=g(),i=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>i.value.aspect||d.value/y.value||0);I(()=>e.src,()=>{R(n.value!=="idle")}),I(v,(t,a)=>{!t&&a&&l.value&&m(l.value)}),J(()=>R());function R(t){if(!(e.eager&&t)&&!(ae&&!t&&!e.eager)){if(n.value="loading",i.value.lazySrc){const a=new Image;a.src=i.value.lazySrc,m(a,null)}i.value.src&&K(()=>{var a;o("loadstart",((a=l.value)==null?void 0:a.currentSrc)||i.value.src),setTimeout(()=>{var u;if(!S.isUnmounted)if((u=l.value)!=null&&u.complete){if(l.value.naturalWidth||V(),n.value==="error")return;v.value||m(l.value,null),n.value==="loading"&&P()}else v.value||m(l.value),k()})})}}function P(){var t;S.isUnmounted||(k(),m(l.value),n.value="loaded",o("load",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function V(){var t;S.isUnmounted||(n.value="error",o("error",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function k(){const t=l.value;t&&(C.value=t.currentSrc||t.src)}let z=-1;Q(()=>{clearTimeout(z)});function m(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const u=()=>{if(clearTimeout(z),S.isUnmounted)return;const{naturalHeight:B,naturalWidth:N}=t;B||N?(d.value=N,y.value=B):!t.complete&&n.value==="loading"&&a!=null?z=window.setTimeout(u,a):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,y.value=1)};u()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),M=()=>{var u;if(!i.value.src||n.value==="idle")return null;const t=r("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:i.value.src,srcset:i.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:P,onError:V},null),a=(u=s.sources)==null?void 0:u.call(s);return r(_,{transition:e.transition,appear:!0},{default:()=>[U(a?r("picture",{class:"v-img__picture"},[a,t]):t,[[p,n.value==="loaded"]])]})},O=()=>r(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:i.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),$=()=>s.placeholder?r(_,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&r("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,q=()=>s.error?r(_,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&r("div",{class:"v-img__error"},[s.error()])]}):null,H=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=g(!1);{const t=I(v,a=>{a&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return x(()=>{const t=F.filterProps(e);return U(r(F,Z({class:["v-img",{"v-img--booting":!T.value},b.value,E.value,e.class],style:[{width:ne(e.width==="auto"?d.value:e.width)},f.value,e.style]},t,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Y,null,[r(M,null,null),r(O,null,null),r(H,null,null),r($,null,null),r(q,null,null)]),default:s.default}),[[X("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:C,image:l,state:n,naturalWidth:d,naturalHeight:y}}});export{be as V,de as m};
