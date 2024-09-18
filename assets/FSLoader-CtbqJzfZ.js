import{d as b,c as l,t as y,L as f,z as k,A as S,O as w}from"./vue.esm-bundler-BSyvBTC9.js";import{u as _,s as r}from"./css-DLfrm0pR.js";import{u as C,C as V}from"./useColors-DlnF7i6T.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as q,c as B,a as A}from"./color-BygXFKwQ.js";import{m as F,u as N}from"./dimensions-DyYT4L19.js";import{m as T,u as $}from"./elevation-Ben4zuE4.js";import{u as R}from"./locale-C-s_GJlL.js";import{p as z,s as P,x as E,w as D}from"./theme-D4rXHj3O.js";const g=b({name:"FSLoader",props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},padding:{type:[Array,String,Number],required:!1,default:"0"},variant:{type:String,required:!1,default:"standard"},borderRadius:{type:[String,Number],required:!1,default:"4px"}},setup(e){const{isMobileSized:t}=_(),{getColors:a}=C(),n=a(V.Background),i=l(()=>({"--fs-loader-background-color":n.base,"--fs-loader-border-radius":["chip"].includes(e.variant)?"50px":r(e.borderRadius),"--fs-loader-padding":r(e.padding),"--fs-loader-height":r(s.value),"--fs-loader-width":r(u.value)})),s=l(()=>{switch(e.variant){case"standard":return r(e.height);case"button":case"input":case"field":return t.value?"36px":"40px";case"chip":return t.value?"20px":"24px";case"text-h1":return t.value?"32px":"40px";case"text-h2":return t.value?"24px":"32px";case"text-h3":return t.value?"20px":"24px";case"text-h4":return t.value?"16px":"20px";case"text-body":case"text-button":return t.value?"14px":"16px";case"text-overline":return"16px"}}),u=l(()=>{switch(e.variant){case"standard":return r(e.width);case"button":return t?"36px":"40px";case"input":return t?"calc(50% - 124px)":"calc(50% - 132px)";case"field":return"100%";case"chip":return"8vw";case"text-h1":return"calc(50% - 32px)";case"text-h2":return"calc(60% - 32px)";case"text-h3":return"calc(65% - 32px)";default:return"calc(75% - 32px)"}});return{style:i}}}),I={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function j(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return f("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function p(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>o(t))}function o(e){let t=[];if(!e)return t;const a=I[e];if(e!==a){if(e.includes(","))return m(e);if(e.includes("@"))return p(e);a.includes(",")?t=m(a):a.includes("@")?t=p(a):a&&t.push(o(a))}return[j(e,t)]}function m(e){return e.replace(/\s/g,"").split(",").map(o)}const H=z({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...F(),...T(),...P()},"VSkeletonLoader"),M=q()({name:"VSkeletonLoader",props:H(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:n,backgroundColorStyles:i}=B(y(e,"color")),{dimensionStyles:s}=N(e),{elevationClasses:u}=$(e),{themeClasses:h}=E(e),{t:v}=R(),x=l(()=>o(D(e.type).join(",")));return A(()=>{var c;const d=!a.default||e.loading;return f("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},h.value,n.value,u.value],style:[i.value,d?s.value:{}],"aria-busy":e.boilerplate?void 0:d,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:v(e.loadingText),role:e.boilerplate?void 0:"alert"},[d?x.value:(c=a.default)==null?void 0:c.call(a)])}),{}}});function O(e,t,a,n,i,s){return k(),S(M,{class:"fs-loader",type:"image",style:w(e.style)},null,8,["style"])}const ee=L(g,[["render",O]]);g.__docgenInfo={displayName:"FSLoader",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"variant",values:["standard","button","input","field","chip","text-h1","text-h2","text-h3","text-h4","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLoader.vue"]};export{ee as F,M as V};
