import{d as f,g as S,j as l,E as L,z as b,K as R,L as k,V,o as N,w as B,J as H,M as A,x as C}from"./vue.esm-bundler-0a1af505.js";import{u as E,s as o}from"./css-72b65878.js";import{u as U,C as M}from"./useColors-1745df70.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{b as G}from"./color-84472fbe.js";import{m as T,u as W}from"./dimensions-41d36b25.js";import{m as P,u as z}from"./elevation-68e8c545.js";import{u as j}from"./locale-d3181d48.js";import{p as D,x as J,y as K,w as Y}from"./theme-8d83670f.js";import{g as O,u as Q}from"./useRender-76465e3d.js";import{G as X,S as v}from"./base-3cbdc314.js";import{V as Z}from"./VImg-1b868636.js";class y{constructor(t){this.blurHash=t.blurHash,this.width=t.width,this.height=t.height}}const F=()=>`${X()}/images`,ee=()=>`${F()}/raw`,te=e=>`${ee()}/${encodeURIComponent(e)}`,ae=()=>`${F()}/blurHash`,re=e=>`${ae()}/${encodeURIComponent(e)}`,I=new v("image",y).create(e=>e.build(e.addNotify(()=>({getRaw:async t=>(await v.http.get(te(t))).data,getBlurHash:async t=>{const a=await v.http.get(re(t));return new y(a.data)}})))),ne=()=>{const e=I(),t=f(!1),a=f(null);return{getting:t,get:async n=>{t.value=!0;try{a.value=await e.getRaw(n)}finally{t.value=!1}return a},entity:a}},ie=()=>{const e=I(),t=f(!1),a=f(null);return{getting:t,get:async n=>{t.value=!0;try{a.value=await e.getBlurHash(n)}finally{t.value=!1}return a},entity:a}},$=S({name:"FSLoader",props:{width:{type:[Array,String,Number],required:!1,default:null},height:{type:[Array,String,Number],required:!1,default:null},padding:{type:[String,Number],required:!1,default:"0"},borderRadius:{type:[String,Number],required:!1,default:"4px"},variant:{type:String,required:!1,default:"standard"}},setup(e){const{isMobileSized:t}=E(),{getColors:a}=U(),r=a(M.Background),n=l(()=>({"--fs-loader-background-color":r.base,"--fs-loader-border-radius":["chip"].includes(e.variant)?"50px":o(e.borderRadius),"--fs-loader-padding":o(e.padding),"--fs-loader-height":o(u.value),"--fs-loader-width":o(s.value)})),u=l(()=>{switch(e.variant){case"standard":return o(e.height);case"button":case"input":case"field":return t.value?"36px":"40px";case"chip":return t.value?"20px":"24px";case"text-h1":return t.value?"32px":"40px";case"text-h2":return t.value?"24px":"32px";case"text-h3":return t.value?"20px":"24px";case"text-h4":return t.value?"16px":"20px";case"text-body":case"text-button":return t.value?"14px":"16px";case"text-overline":case"text-underline":return"16px"}}),s=l(()=>{switch(e.variant){case"standard":return o(e.width);case"button":return t?"36px":"40px";case"input":return t?"calc(50% - 124px)":"calc(50% - 132px)";case"field":return"100%";case"chip":return"8vw";case"text-h1":return"calc(50% - 32px)";case"text-h2":return"calc(60% - 32px)";case"text-h3":return"calc(65% - 32px)";default:return"calc(75% - 32px)"}});return{style:n}}});const se={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return b("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function x(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>g(t))}function g(e){let t=[];if(!e)return t;const a=se[e];if(e!==a){if(e.includes(","))return w(e);if(e.includes("@"))return x(e);a.includes(",")?t=w(a):a.includes("@")?t=x(a):a&&t.push(g(a))}return[le(e,t)]}function w(e){return e.replace(/\s/g,"").split(",").map(g)}const ue=D({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...T(),...P(),...J()},"VSkeletonLoader"),oe=O()({name:"VSkeletonLoader",props:ue(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:n}=G(L(e,"color")),{dimensionStyles:u}=W(e),{elevationClasses:s}=z(e),{themeClasses:m}=K(e),{t:h}=j(),p=l(()=>g(Y(e.type).join(",")));return Q(()=>{var c;const d=!a.default||e.loading;return b("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},m.value,r.value,s.value],style:[n.value,d?u.value:{}],"aria-busy":e.boilerplate?void 0:d,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:h(e.loadingText),role:e.boilerplate?void 0:"alert"},[d?p.value:(c=a.default)==null?void 0:c.call(a)])}),{}}});function de(e,t,a,r,n,u){return R(),k(oe,{class:"fs-loader",type:"image",style:V(e.style)},null,8,["style"])}const ce=_($,[["render",de]]);$.__docgenInfo={displayName:"FSLoader",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string[] | number[] | string | number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"variant",values:["standard","button","input","field","chip","text-h1","text-h2","text-h3","text-h4","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLoader.vue"]};const q=S({name:"FSImage",components:{FSLoader:ce},props:{imageId:{type:[String,null,void 0],required:!1,default:null},cover:{type:Boolean,required:!1,default:!0},width:{type:[String,Number],required:!1,default:null},height:{type:[String,Number],required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"}},setup(e){const{getting:t,get:a,entity:r}=ne(),{getting:n,get:u,entity:s}=ie(),m=l(()=>({"--fs-image-border-radius":o(e.borderRadius)})),h=l(()=>{if(e.height)return e.height;if(e.width){if(typeof e.width=="string")return;if(e.aspectRatio){const i=e.aspectRatio.split("/");if(i.length===2&&!isNaN(parseFloat(i[0]))&&!isNaN(parseFloat(i[1])))return e.width*(parseFloat(i[1])/parseFloat(i[0]))}return e.width}}),p=l(()=>{if(e.width)return e.width;if(e.height){if(typeof e.height=="string")return;if(e.aspectRatio){const i=e.aspectRatio.split("/");if(i.length===2&&!isNaN(parseFloat(i[0]))&&!isNaN(parseFloat(i[1])))return e.height*(parseFloat(i[0])/parseFloat(i[1]))}return e.height}}),d=l(()=>t.value?null:r.value?r.value:n.value?null:s.value?s.value.blurHash:null);N(()=>{c()}),B(()=>e.imageId,()=>{c()});const c=async()=>{e.imageId&&(await a(e.imageId),r.value||await u(e.imageId))};return{computedHeight:h,computedWidth:p,source:d,style:m}}});function fe(e,t,a,r,n,u){const s=H("FSLoader");return R(),k(Z,C({class:"fs-image",height:e.computedHeight,width:e.computedWidth,cover:e.$props.cover,style:e.style,src:e.source},e.$attrs),{placeholder:A(()=>[b(s,{class:"fs-load-image",height:"100%",width:"100%",borderRadius:e.$props.borderRadius},null,8,["borderRadius"])]),_:1},16,["height","width","cover","style","src"])}const _e=_(q,[["render",fe]]);q.__docgenInfo={displayName:"FSImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string|null|undefined"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImage.vue"]};export{_e as F,oe as V,ce as a};
