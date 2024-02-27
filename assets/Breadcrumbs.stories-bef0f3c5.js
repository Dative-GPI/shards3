import{D as L,j as O,y as r,d as y,m as u,F as j,z as P,G as z,H as q,I as f,N as h,O as E,X as x}from"./vue.esm-bundler-47273a21.js";import{u as G,C as H}from"./useColors-446eeb5a.js";import"./rules-f5c4efdb.js";import{_ as T}from"./FSSpan-6a5d69b6.js";import{_ as $}from"./FSIcon-be851c75.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{m as k,g as C,u as B,c as J,d as K,p as M}from"./color-38d974b0.js";import{p as S}from"./theme-7e191b90.js";import{m as Q,u as U}from"./router-843ca95a.js";import{a as N,I as W,V as Y}from"./VIcon-f933c800.js";import{m as Z,u as ee}from"./density-52b016fa.js";import{m as ae,u as re}from"./rounded-8d3cef66.js";import{V as te}from"./VDefaultsProvider-6a122c68.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";const w=L({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!0}},setup(){const e=G().getColors(H.Dark);return{style:O({"--fs-breadcrumbs-color":e.dark,"--fs-breadcrumbs-active-color":e.base,"--fs-breadcrumbs-disabled-color":e.light}),classes:n=>{const t=["fs-breadcrumbs-label"];return n.disabled&&t.push("fs-breadcrumbs-label--disabled"),t}}}});const se=S({divider:[Number,String],...k()},"VBreadcrumbsDivider"),ne=C()({name:"VBreadcrumbsDivider",props:se(),setup(e,s){let{slots:a}=s;return B(()=>{var n;return r("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=a==null?void 0:a.default)==null?void 0:n.call(a))??e.divider])}),{}}}),ie=S({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...k(),...Q(),...N({tag:"li"})},"VBreadcrumbsItem"),de=C()({name:"VBreadcrumbsItem",props:ie(),setup(e,s){let{slots:a,attrs:n}=s;const t=U(e,n),d=y(()=>{var c;return e.active||((c=t.isActive)==null?void 0:c.value)}),l=y(()=>d.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:i}=J(l);return B(()=>r(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":d.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:d.value&&e.activeClass},g.value,e.class],style:[i.value,e.style],"aria-current":d.value?"page":void 0},{default:()=>{var c,v;return[t.isLink.value?r("a",{class:"v-breadcrumbs-item--link",href:t.href.value,"aria-current":d.value?"page":void 0,onClick:t.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((c=a.default)==null?void 0:c.call(a))??e.title]}})),{}}}),ce=S({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:W,items:{type:Array,default:()=>[]},...k(),...Z(),...ae(),...N({tag:"ul"})},"VBreadcrumbs"),le=C()({name:"VBreadcrumbs",props:ce(),setup(e,s){let{slots:a}=s;const{backgroundColorClasses:n,backgroundColorStyles:t}=K(u(e,"bgColor")),{densityClasses:d}=ee(e),{roundedClasses:l}=re(e);M({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return B(()=>{const i=!!(a.prepend||e.icon);return r(e.tag,{class:["v-breadcrumbs",n.value,d.value,l.value,e.class],style:[t.value,e.style]},{default:()=>{var c;return[i&&r("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?r(te,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):r(Y,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((v,o,V)=>{var _;let{item:m,raw:A}=v;return r(j,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:o}))??r(de,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&r(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:A,index:o})}:void 0})])}),(c=a.default)==null?void 0:c.call(a)]}})}),{}}});function oe(e,s,a,n,t,d){return z(),q(le,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:l})=>[r(T,{class:x(e.classes(l))},{default:f(()=>[h(E(l.title),1)]),_:2},1032,["class"])]),divider:f(()=>[r($,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const R=X(w,[["render",oe]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSBreadcrumbItem[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const De={title:"Foundation/Shared/Breadcrumbs",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:s})=>({components:{Breadcrumbs:R},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Pe=["Standard"];export{p as Standard,Pe as __namedExportsOrder,De as default};
