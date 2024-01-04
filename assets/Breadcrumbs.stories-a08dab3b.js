import{m as R,k as q,B as r,f as y,g as u,L as O,F as P,n as j,q as z,u as f,C as h,D as x,S as E}from"./vue.esm-bundler-bf312605.js";import{u as G,C as H,p as k}from"./useColors-9da280d0.js";import{_ as T}from"./FSSpan-f8d57311.js";import{_ as $}from"./FSIcon-91e509a2.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{m as C,g as B,u as S,a as w,d as K,I as M,e as Q,p as U,V as W}from"./VIcon-0f430520.js";import{m as X,u as Y,V as Z}from"./VDefaultsProvider-98093e44.js";import{a as ee,m as ae,b as re,u as se}from"./rounded-66ea04d8.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const A=R({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!0}},setup(){const e=G().getColors(H.Dark);return{style:q({"--fs-breadcrumbs-color":e.dark,"--fs-breadcrumbs-active-color":e.base,"--fs-breadcrumbs-disabled-color":e.light}),classes:n=>{const s=["fs-breadcrumbs-label"];return n.disabled&&s.push("fs-breadcrumbs-label--disabled"),s}}}});const te=k({divider:[Number,String],...C()},"VBreadcrumbsDivider"),ne=B()({name:"VBreadcrumbsDivider",props:te(),setup(e,t){let{slots:a}=t;return S(()=>{var n;return r("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=a==null?void 0:a.default)==null?void 0:n.call(a))??e.divider])}),{}}}),ie=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...C(),...X(),...w({tag:"li"})},"VBreadcrumbsItem"),de=B()({name:"VBreadcrumbsItem",props:ie(),setup(e,t){let{slots:a,attrs:n}=t;const s=Y(e,n),d=y(()=>{var l;return e.active||((l=s.isActive)==null?void 0:l.value)}),c=y(()=>d.value?e.activeColor:e.color),{textColorClasses:p,textColorStyles:i}=K(c);return S(()=>r(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":d.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:d.value&&e.activeClass},p.value,e.class],style:[i.value,e.style],"aria-current":d.value?"page":void 0},{default:()=>{var l,v;return[s.isLink.value?r("a",{class:"v-breadcrumbs-item--link",href:s.href.value,"aria-current":d.value?"page":void 0,onClick:s.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((l=a.default)==null?void 0:l.call(a))??e.title]}})),{}}}),le=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:M,items:{type:Array,default:()=>[]},...C(),...ee(),...ae(),...w({tag:"ul"})},"VBreadcrumbs"),ce=B()({name:"VBreadcrumbs",props:le(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:n,backgroundColorStyles:s}=Q(u(e,"bgColor")),{densityClasses:d}=re(e),{roundedClasses:c}=se(e);U({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const p=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return S(()=>{const i=!!(a.prepend||e.icon);return r(e.tag,{class:["v-breadcrumbs",n.value,d.value,c.value,e.class],style:[s.value,e.style]},{default:()=>{var l;return[i&&r("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?r(Z,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):r(W,{key:"prepend-icon",start:!0,icon:e.icon},null)]),p.value.map((v,o,V)=>{var _;let{item:m,raw:N}=v;return r(O,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:o}))??r(de,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&r(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:N,index:o})}:void 0})])}),(l=a.default)==null?void 0:l.call(a)]}})}),{}}});function oe(e,t,a,n,s,d){return j(),z(ce,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:c})=>[r(T,{class:E(e.classes(c))},{default:f(()=>[h(x(c.title),1)]),_:2},1032,["class"])]),divider:f(()=>[r($,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const L=J(A,[["render",oe]]);A.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array<FSBreadcrumbItem>"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const Be={title:"Foundation/Shared/Breadcrumbs",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:t})=>({components:{Breadcrumbs:L},props:Object.keys(t),setup(){return{...e}},template:`
        <Breadcrumbs v-bind="args" />
    `})};var F,I,D;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(I=g.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Se=["Standard"];export{g as Standard,Se as __namedExportsOrder,Be as default};
