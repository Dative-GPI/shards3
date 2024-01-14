import{n as L,l as j,B as r,f as y,j as u,N as q,G as P,q as O,u as z,v as f,D as h,E,Z as x}from"./vue.esm-bundler-722d5586.js";import{u as G,C as Z,p as k}from"./useTimeZone-e2d91037.js";import{_ as T}from"./FSSpan-25dfede3.js";import{_ as $}from"./FSIcon-420cc903.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{m as C,g as B,a as S,c as N,u as J,I as K,e as M,p as Q,V as U}from"./VIcon-3294e246.js";import{m as W,u as X,V as Y}from"./VDefaultsProvider-ca83b848.js";import{a as ee,m as ae,b as re,u as se}from"./rounded-0d60e9e4.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const w=L({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!0}},setup(){const e=G().getColors(Z.Dark);return{style:j({"--fs-breadcrumbs-color":e.dark,"--fs-breadcrumbs-active-color":e.base,"--fs-breadcrumbs-disabled-color":e.light}),classes:n=>{const s=["fs-breadcrumbs-label"];return n.disabled&&s.push("fs-breadcrumbs-label--disabled"),s}}}});const te=k({divider:[Number,String],...C()},"VBreadcrumbsDivider"),ne=B()({name:"VBreadcrumbsDivider",props:te(),setup(e,t){let{slots:a}=t;return S(()=>{var n;return r("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=a==null?void 0:a.default)==null?void 0:n.call(a))??e.divider])}),{}}}),ie=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...C(),...W(),...N({tag:"li"})},"VBreadcrumbsItem"),de=B()({name:"VBreadcrumbsItem",props:ie(),setup(e,t){let{slots:a,attrs:n}=t;const s=X(e,n),d=y(()=>{var l;return e.active||((l=s.isActive)==null?void 0:l.value)}),c=y(()=>d.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:i}=J(c);return S(()=>r(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":d.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:d.value&&e.activeClass},g.value,e.class],style:[i.value,e.style],"aria-current":d.value?"page":void 0},{default:()=>{var l,v;return[s.isLink.value?r("a",{class:"v-breadcrumbs-item--link",href:s.href.value,"aria-current":d.value?"page":void 0,onClick:s.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((l=a.default)==null?void 0:l.call(a))??e.title]}})),{}}}),le=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:K,items:{type:Array,default:()=>[]},...C(),...ee(),...ae(),...N({tag:"ul"})},"VBreadcrumbs"),ce=B()({name:"VBreadcrumbs",props:le(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:n,backgroundColorStyles:s}=M(u(e,"bgColor")),{densityClasses:d}=re(e),{roundedClasses:c}=se(e);Q({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return S(()=>{const i=!!(a.prepend||e.icon);return r(e.tag,{class:["v-breadcrumbs",n.value,d.value,c.value,e.class],style:[s.value,e.style]},{default:()=>{var l;return[i&&r("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?r(Y,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):r(U,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((v,o,V)=>{var _;let{item:m,raw:R}=v;return r(q,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:o}))??r(de,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&r(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:R,index:o})}:void 0})])}),(l=a.default)==null?void 0:l.call(a)]}})}),{}}});function oe(e,t,a,n,s,d){return O(),z(ce,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:c})=>[r(T,{class:x(e.classes(c))},{default:f(()=>[h(E(c.title),1)]),_:2},1032,["class"])]),divider:f(()=>[r($,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const A=H(w,[["render",oe]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array<FSBreadcrumbItem>"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const Be={title:"Foundation/Shared/Breadcrumbs",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:t})=>({components:{Breadcrumbs:A},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Se=["Standard"];export{p as Standard,Se as __namedExportsOrder,Be as default};
