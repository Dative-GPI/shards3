import{m as L,k as N,x as r,f as y,g as u,L as j,C as P,n as q,q as z,v as f,z as _,A as O,R as E}from"./vue.esm-bundler-d10a8528.js";import{u as G,C as H,p as k,j as C,c as B,l as S,k as T,x as J,i as K,E as M,e as Q,V as U}from"./VIcon-57787e8c.js";import{F as $}from"./FSSpan-abccc23b.js";import{_ as A}from"./FSIcon-27c19cbf.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{m as X,u as Y,V as Z}from"./VDefaultsProvider-1a074de6.js";import{a as ee,m as ae,b as re,u as te}from"./rounded-6f26bd38.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const R=L({name:"FSBreadcrumbs",components:{FSSpan:$,FSIcon:A},props:{items:{type:Array,required:!0}},setup(){const e=G().getVariants(H.Dark);return{style:N({"--fs-breadcrumbs-light-text":e.light,"--fs-breadcrumbs-base-text":e.base}),classes:n=>{const t=["fs-breadcrumbs-label"];return n.disabled&&t.push("fs-breadcrumbs-label--disabled"),t}}}});const se=k({divider:[Number,String],...C()},"VBreadcrumbsDivider"),ne=B()({name:"VBreadcrumbsDivider",props:se(),setup(e,s){let{slots:a}=s;return S(()=>{var n;return r("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=a==null?void 0:a.default)==null?void 0:n.call(a))??e.divider])}),{}}}),ie=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...C(),...X(),...T({tag:"li"})},"VBreadcrumbsItem"),de=B()({name:"VBreadcrumbsItem",props:ie(),setup(e,s){let{slots:a,attrs:n}=s;const t=Y(e,n),d=y(()=>{var l;return e.active||((l=t.isActive)==null?void 0:l.value)}),c=y(()=>d.value?e.activeColor:e.color),{textColorClasses:p,textColorStyles:i}=J(c);return S(()=>r(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":d.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:d.value&&e.activeClass},p.value,e.class],style:[i.value,e.style],"aria-current":d.value?"page":void 0},{default:()=>{var l,v;return[t.isLink.value?r("a",{class:"v-breadcrumbs-item--link",href:t.href.value,"aria-current":d.value?"page":void 0,onClick:t.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((l=a.default)==null?void 0:l.call(a))??e.title]}})),{}}}),le=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:K,items:{type:Array,default:()=>[]},...C(),...ee(),...ae(),...T({tag:"ul"})},"VBreadcrumbs"),ce=B()({name:"VBreadcrumbs",props:le(),setup(e,s){let{slots:a}=s;const{backgroundColorClasses:n,backgroundColorStyles:t}=M(u(e,"bgColor")),{densityClasses:d}=re(e),{roundedClasses:c}=te(e);Q({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const p=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return S(()=>{const i=!!(a.prepend||e.icon);return r(e.tag,{class:["v-breadcrumbs",n.value,d.value,c.value,e.class],style:[t.value,e.style]},{default:()=>{var l;return[i&&r("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?r(Z,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):r(U,{key:"prepend-icon",start:!0,icon:e.icon},null)]),p.value.map((v,o,V)=>{var h;let{item:m,raw:x}=v;return r(j,null,[((h=a.item)==null?void 0:h.call(a,{item:m,index:o}))??r(de,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&r(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:x,index:o})}:void 0})])}),(l=a.default)==null?void 0:l.call(a)]}})}),{}}});function oe(e,s,a,n,t,d){return q(),z(ce,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:c})=>[r($,{class:E(e.classes(c))},{default:f(()=>[_(O(c.title),1)]),_:2},1032,["class"])]),divider:f(()=>[r(A,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[_(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const w=W(R,[["render",oe]]);R.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array<FSBreadcrumbItem>"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const Ce={title:"Foundation/Shared/Breadcrumbs",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:s})=>({components:{Breadcrumbs:w},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(D=(I=g.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Be=["Standard"];export{g as Standard,Be as __namedExportsOrder,Ce as default};
