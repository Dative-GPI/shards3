import{G as L,d as O,z as t,e as y,m as u,F as z,A as P,I as j,J as q,K as f,N as h,O as E,Y as x}from"./vue.esm-bundler-588e96c7.js";import{_ as T}from"./FSSpan-3793c562.js";import{_ as $}from"./FSIcon-2736b3f2.js";import{u as G,C as J}from"./useColors-0a17cef8.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{m as k,g as C,u as B,c as Y,d as H,p as M}from"./color-56e2ae46.js";import{p as S}from"./theme-6917f69d.js";import{m as Q,u as U}from"./router-cfd7314c.js";import{a as N,I as W,V as X}from"./VIcon-56fbcc42.js";import{m as Z,u as ee}from"./density-79e1d57e.js";import{m as ae,u as re}from"./rounded-ef9fdb42.js";import{V as te}from"./VDefaultsProvider-3b96cb3b.js";import"./useSlots-553f4fbf.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const w=L({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!0}},setup(){const{getColors:e}=G(),r=e(J.Dark);return{style:O({"--fs-breadcrumbs-color":r.dark,"--fs-breadcrumbs-active-color":r.base,"--fs-breadcrumbs-disabled-color":r.light}),classes:n=>{const s=["fs-breadcrumbs-label"];return n.disabled&&s.push("fs-breadcrumbs-label--disabled"),s}}}});const se=S({divider:[Number,String],...k()},"VBreadcrumbsDivider"),ne=C()({name:"VBreadcrumbsDivider",props:se(),setup(e,r){let{slots:a}=r;return B(()=>{var d;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((d=a==null?void 0:a.default)==null?void 0:d.call(a))??e.divider])}),{}}}),ie=S({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...k(),...Q(),...N({tag:"li"})},"VBreadcrumbsItem"),de=C()({name:"VBreadcrumbsItem",props:ie(),setup(e,r){let{slots:a,attrs:d}=r;const n=U(e,d),s=y(()=>{var c;return e.active||((c=n.isActive)==null?void 0:c.value)}),l=y(()=>s.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:i}=Y(l);return B(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},g.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var c,v;return[n.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":s.value?"page":void 0,onClick:n.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((c=a.default)==null?void 0:c.call(a))??e.title]}})),{}}}),ce=S({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:W,items:{type:Array,default:()=>[]},...k(),...Z(),...ae(),...N({tag:"ul"})},"VBreadcrumbs"),le=C()({name:"VBreadcrumbs",props:ce(),setup(e,r){let{slots:a}=r;const{backgroundColorClasses:d,backgroundColorStyles:n}=H(u(e,"bgColor")),{densityClasses:s}=ee(e),{roundedClasses:l}=re(e);M({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return B(()=>{const i=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",d.value,s.value,l.value,e.class],style:[n.value,e.style]},{default:()=>{var c;return[i&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(te,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(X,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((v,o,V)=>{var _;let{item:m,raw:R}=v;return t(z,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:o}))??t(de,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&t(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:R,index:o})}:void 0})])}),(c=a.default)==null?void 0:c.call(a)]}})}),{}}});function oe(e,r,a,d,n,s){return j(),q(le,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:l})=>[t(T,{class:x(e.classes(l))},{default:f(()=>[h(E(l.title),1)]),_:2},1032,["class"])]),divider:f(()=>[t($,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const A=K(w,[["render",oe]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSBreadcrumbItem[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const Fe={title:"Foundation/Shared/Breadcrumbs",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:r})=>({components:{Breadcrumbs:A},props:Object.keys(r),setup(){return{...e}},template:`
        <Breadcrumbs v-bind="args" />
    `})};var F,I,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        title: "First (clickable)",
        disabled: false,
        active: false
      }, {
        title: "Second (disabled)",
        disabled: true,
        active: false
      }, {
        title: "Third (clickable)",
        disabled: false,
        active: false
      }, {
        title: "Last (active)",
        disabled: true,
        active: true
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Breadcrumbs
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <Breadcrumbs v-bind="args" />
    \`
  })
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Ie=["Standard"];export{p as Standard,Ie as __namedExportsOrder,Fe as default};
