import{g as A,d as j,z as t,j as y,E as u,F as z,x as P,I as E,J as O,K as f,L as h,M as q,Z as x}from"./vue.esm-bundler-85c2ade9.js";import{_ as T}from"./FSSpan-abd71399.js";import{_ as $}from"./FSIcon-d4b06799.js";import{u as J,C as K}from"./useColors-4bd4e66b.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{m as k,g as C,u as B,p as Z}from"./useRender-22e01882.js";import{p as S}from"./theme-0475544b.js";import{u as G,b as H}from"./color-680672dd.js";import{m as Q,u as U}from"./router-dfa38ec1.js";import{m as N,I as W}from"./tag-fd98b684.js";import{m as X,u as Y}from"./density-1bef1032.js";import{m as ee,u as ae}from"./rounded-7d023c25.js";import{V as re}from"./VIcon-96eed797.js";import{V as te}from"./VDefaultsProvider-5f610042.js";import"./useSlots-58887162.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const w=A({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!0}},setup(){const{getColors:e}=J(),r=e(K.Dark);return{style:j({"--fs-breadcrumbs-color":r.dark,"--fs-breadcrumbs-active-color":r.base,"--fs-breadcrumbs-disabled-color":r.light}),classes:n=>{const s=["fs-breadcrumbs-label"];return n.disabled&&s.push("fs-breadcrumbs-label--disabled"),s}}}});const se=S({divider:[Number,String],...k()},"VBreadcrumbsDivider"),ne=C()({name:"VBreadcrumbsDivider",props:se(),setup(e,r){let{slots:a}=r;return B(()=>{var d;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((d=a==null?void 0:a.default)==null?void 0:d.call(a))??e.divider])}),{}}}),ie=S({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...k(),...Q(),...N({tag:"li"})},"VBreadcrumbsItem"),de=C()({name:"VBreadcrumbsItem",props:ie(),setup(e,r){let{slots:a,attrs:d}=r;const n=U(e,d),s=y(()=>{var o;return e.active||((o=n.isActive)==null?void 0:o.value)}),c=y(()=>s.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:i}=G(c);return B(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},g.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var o,v;return[n.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":s.value?"page":void 0,onClick:n.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((o=a.default)==null?void 0:o.call(a))??e.title]}})),{}}}),oe=S({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:W,items:{type:Array,default:()=>[]},...k(),...X(),...ee(),...N({tag:"ul"})},"VBreadcrumbs"),ce=C()({name:"VBreadcrumbs",props:oe(),setup(e,r){let{slots:a}=r;const{backgroundColorClasses:d,backgroundColorStyles:n}=H(u(e,"bgColor")),{densityClasses:s}=Y(e),{roundedClasses:c}=ae(e);Z({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return B(()=>{const i=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",d.value,s.value,c.value,e.class],style:[n.value,e.style]},{default:()=>{var o;return[i&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(te,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(re,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((v,l,V)=>{var _;let{item:m,raw:R}=v;return t(z,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:l}))??t(de,P({key:l,disabled:l>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:l})}:void 0}),l<V.length-1&&t(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:R,index:l})}:void 0})])}),(o=a.default)==null?void 0:o.call(a)]}})}),{}}});function le(e,r,a,d,n,s){return E(),O(ce,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:c})=>[t(T,{class:x(e.classes(c))},{default:f(()=>[h(q(c.title),1)]),_:2},1032,["class"])]),divider:f(()=>[t($,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const L=M(w,[["render",le]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSBreadcrumbItem[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const De={title:"Foundation/Shared/Breadcrumbs",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:r})=>({components:{Breadcrumbs:L},props:Object.keys(r),setup(){return{...e}},template:`
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
