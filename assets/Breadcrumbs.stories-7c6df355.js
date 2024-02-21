import{D as L,j,z as r,d as y,m as u,F as z,y as P,G as O,H as q,I as f,M as h,N as E,V as x}from"./vue.esm-bundler-6746129d.js";import{u as G,C as H}from"./useColors-af9c4499.js";import"./rules-1d0b59d0.js";import{_ as T}from"./FSSpan-636f18e6.js";import{_ as $}from"./FSIcon-e171104f.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{m as k,g as C,u as B,b as J,c as K,p as Q}from"./color-28636d86.js";import{p as S}from"./theme-dcffbbe6.js";import{m as U,u as W}from"./router-6af7a2c9.js";import{a as N,I as X,V as Y}from"./VIcon-bfd3bf26.js";import{m as Z,u as ee}from"./density-0267c9a3.js";import{m as ae,u as re}from"./rounded-4ccd8171.js";import{V as te}from"./VDefaultsProvider-4443303c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";const w=L({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!0}},setup(){const e=G().getColors(H.Dark);return{style:j({"--fs-breadcrumbs-color":e.dark,"--fs-breadcrumbs-active-color":e.base,"--fs-breadcrumbs-disabled-color":e.light}),classes:n=>{const t=["fs-breadcrumbs-label"];return n.disabled&&t.push("fs-breadcrumbs-label--disabled"),t}}}});const se=S({divider:[Number,String],...k()},"VBreadcrumbsDivider"),ne=C()({name:"VBreadcrumbsDivider",props:se(),setup(e,s){let{slots:a}=s;return B(()=>{var n;return r("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=a==null?void 0:a.default)==null?void 0:n.call(a))??e.divider])}),{}}}),ie=S({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...k(),...U(),...N({tag:"li"})},"VBreadcrumbsItem"),de=C()({name:"VBreadcrumbsItem",props:ie(),setup(e,s){let{slots:a,attrs:n}=s;const t=W(e,n),d=y(()=>{var c;return e.active||((c=t.isActive)==null?void 0:c.value)}),l=y(()=>d.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:i}=J(l);return B(()=>r(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":d.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:d.value&&e.activeClass},g.value,e.class],style:[i.value,e.style],"aria-current":d.value?"page":void 0},{default:()=>{var c,v;return[t.isLink.value?r("a",{class:"v-breadcrumbs-item--link",href:t.href.value,"aria-current":d.value?"page":void 0,onClick:t.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((c=a.default)==null?void 0:c.call(a))??e.title]}})),{}}}),ce=S({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:X,items:{type:Array,default:()=>[]},...k(),...Z(),...ae(),...N({tag:"ul"})},"VBreadcrumbs"),le=C()({name:"VBreadcrumbs",props:ce(),setup(e,s){let{slots:a}=s;const{backgroundColorClasses:n,backgroundColorStyles:t}=K(u(e,"bgColor")),{densityClasses:d}=ee(e),{roundedClasses:l}=re(e);Q({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return B(()=>{const i=!!(a.prepend||e.icon);return r(e.tag,{class:["v-breadcrumbs",n.value,d.value,l.value,e.class],style:[t.value,e.style]},{default:()=>{var c;return[i&&r("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?r(te,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):r(Y,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((v,o,V)=>{var _;let{item:m,raw:A}=v;return r(z,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:o}))??r(de,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&r(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:A,index:o})}:void 0})])}),(c=a.default)==null?void 0:c.call(a)]}})}),{}}});function oe(e,s,a,n,t,d){return O(),q(le,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:l})=>[r(T,{class:x(e.classes(l))},{default:f(()=>[h(E(l.title),1)]),_:2},1032,["class"])]),divider:f(()=>[r($,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const R=M(w,[["render",oe]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSBreadcrumbItem[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const De={title:"Foundation/Shared/Breadcrumbs",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:s})=>({components:{Breadcrumbs:R},props:Object.keys(s),setup(){return{...e}},template:`
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
