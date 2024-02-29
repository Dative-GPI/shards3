import{m as f,e as p,z as s}from"./vue.esm-bundler-a27e881e.js";import{g as h,d as k,u as x}from"./color-17bc18af.js";import{m as y,u as S}from"./dimensions-59e3b80b.js";import{m as w,u as C}from"./elevation-c3b2bd24.js";import{a as L}from"./locale-d8beded1.js";import{p as V,s as B,t as T,w as P}from"./theme-40a9efa2.js";const _={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function A(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[a])}function r(e){const[a,t]=e.split("@");return Array.from({length:t}).map(()=>i(a))}function i(e){let a=[];if(!e)return a;const t=_[e];if(e!==t){if(e.includes(","))return l(e);if(e.includes("@"))return r(e);t.includes(",")?a=l(t):t.includes("@")?a=r(t):t&&a.push(i(t))}return[A(e,a)]}function l(e){return e.replace(/\s/g,"").split(",").map(i)}const $=V({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...y(),...w(),...B()},"VSkeletonLoader"),I=h()({name:"VSkeletonLoader",props:$(),setup(e,a){let{slots:t}=a;const{backgroundColorClasses:d,backgroundColorStyles:u}=k(f(e,"color")),{dimensionStyles:c}=S(e),{elevationClasses:m}=C(e),{themeClasses:g}=T(e),{t:v}=L(),b=p(()=>i(P(e.type).join(",")));return x(()=>{var o;const n=!t.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},g.value,d.value,m.value],style:[u.value,n?c.value:{}],"aria-busy":e.boilerplate?void 0:n,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:v(e.loadingText),role:e.boilerplate?void 0:"alert"},[n?b.value:(o=t.default)==null?void 0:o.call(t)])}),{}}});export{I as V};
