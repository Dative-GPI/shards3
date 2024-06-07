import{P as r,g as h,y as L,s as g,j as J,w as I,a5 as G,n as K,m as Q,$ as U,a0 as X,J as Y,A as Z,a6 as p}from"./vue.esm-bundler-f632b118.js";import{m as W,g as F,u as A}from"./useRender-7972ae0c.js";import{m as ee,u as te}from"./dimensions-44367821.js";import{p as D,h as re,l as ae,c as ne}from"./theme-a477330d.js";import{b as le}from"./color-1b8c6bf4.js";import{m as ie,u as se}from"./rounded-ce7e598f.js";import{m as oe,M as _}from"./transition-8112e83c.js";import{I as ue}from"./index-cd1f7a70.js";function ce(e){return{aspectStyles:h(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const E=D({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...W(),...ee()},"VResponsive"),j=F()({name:"VResponsive",props:E(),setup(e,c){let{slots:o}=c;const{aspectStyles:s}=ce(e),{dimensionStyles:b}=te(e);return A(()=>{var f;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[b.value,e.style]},[r("div",{class:"v-responsive__sizer",style:s.value},null),(f=o.additional)==null?void 0:f.call(o),o.default&&r("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),de=D({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...E(),...W(),...ie(),...oe()},"VImg"),be=F()({name:"VImg",directives:{intersect:ue},props:de(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:o,slots:s}=c;const{backgroundColorClasses:b,backgroundColorStyles:f}=le(L(e,"color")),{roundedClasses:M}=se(e),S=re("VImg"),P=g(""),l=J(),n=g(e.eager?"loading":"idle"),d=g(),y=g(),i=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>i.value.aspect||d.value/y.value||0);I(()=>e.src,()=>{R(n.value!=="idle")}),I(v,(t,a)=>{!t&&a&&l.value&&m(l.value)}),G(()=>R());function R(t){if(!(e.eager&&t)&&!(ae&&!t&&!e.eager)){if(n.value="loading",i.value.lazySrc){const a=new Image;a.src=i.value.lazySrc,m(a,null)}i.value.src&&K(()=>{var a;o("loadstart",((a=l.value)==null?void 0:a.currentSrc)||i.value.src),setTimeout(()=>{var u;if(!S.isUnmounted)if((u=l.value)!=null&&u.complete){if(l.value.naturalWidth||C(),n.value==="error")return;v.value||m(l.value,null),n.value==="loading"&&V()}else v.value||m(l.value),k()})})}}function V(){var t;S.isUnmounted||(k(),m(l.value),n.value="loaded",o("load",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function C(){var t;S.isUnmounted||(n.value="error",o("error",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function k(){const t=l.value;t&&(P.value=t.currentSrc||t.src)}let z=-1;Q(()=>{clearTimeout(z)});function m(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const u=()=>{if(clearTimeout(z),S.isUnmounted)return;const{naturalHeight:B,naturalWidth:N}=t;B||N?(d.value=N,y.value=B):!t.complete&&n.value==="loading"&&a!=null?z=window.setTimeout(u,a):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,y.value=1)};u()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var u;if(!i.value.src||n.value==="idle")return null;const t=r("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:i.value.src,srcset:i.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:V,onError:C},null),a=(u=s.sources)==null?void 0:u.call(s);return r(_,{transition:e.transition,appear:!0},{default:()=>[U(a?r("picture",{class:"v-img__picture"},[a,t]):t,[[p,n.value==="loaded"]])]})},$=()=>r(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:i.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),x=()=>s.placeholder?r(_,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&r("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,H=()=>s.error?r(_,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&r("div",{class:"v-img__error"},[s.error()])]}):null,q=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=g(!1);{const t=I(v,a=>{a&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return A(()=>{const t=j.filterProps(e);return U(r(j,Z({class:["v-img",{"v-img--booting":!T.value},b.value,M.value,e.class],style:[{width:ne(e.width==="auto"?d.value:e.width)},f.value,e.style]},t,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Y,null,[r(O,null,null),r($,null,null),r(q,null,null),r(x,null,null),r(H,null,null)]),default:s.default}),[[X("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:P,image:l,state:n,naturalWidth:d,naturalHeight:y}}});export{be as V};
