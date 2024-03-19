import{g as A,d as O,z as t,j as y,E as u,F as j,x as P,K as z,L as E,M as f,N as h,O as q,$ as x}from"./vue.esm-bundler-0a1af505.js";import{_ as $}from"./FSSpan-50615fe3.js";import{_ as T}from"./FSIcon-0e28cc63.js";import{u as K,C as M}from"./useColors-340c59f9.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{m as k,g as C,u as B,p as H}from"./useRender-76465e3d.js";import{p as S}from"./theme-8d83670f.js";import{u as J,b as Q}from"./color-84472fbe.js";import{m as U,u as W}from"./router-1b110d23.js";import{m as N,I as X}from"./tag-6ffe4ba6.js";import{m as Y,u as Z}from"./density-cfa18558.js";import{m as ee,u as ae}from"./rounded-caec20b0.js";import{V as re}from"./VIcon-4501998f.js";import{V as te}from"./VDefaultsProvider-76561179.js";import"./useSlots-de2ef136.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const w=A({name:"FSBreadcrumbs",components:{FSSpan:$,FSIcon:T},props:{items:{type:Array,required:!0}},setup(){const{getColors:e}=K(),r=e(M.Dark);return{style:O({"--fs-breadcrumbs-color":r.dark,"--fs-breadcrumbs-active-color":r.base,"--fs-breadcrumbs-disabled-color":r.light}),classes:n=>{const s=["fs-breadcrumbs-label"];return n.disabled&&s.push("fs-breadcrumbs-label-disabled"),s}}}});const se=S({divider:[Number,String],...k()},"VBreadcrumbsDivider"),ne=C()({name:"VBreadcrumbsDivider",props:se(),setup(e,r){let{slots:a}=r;return B(()=>{var d;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((d=a==null?void 0:a.default)==null?void 0:d.call(a))??e.divider])}),{}}}),ie=S({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...k(),...U(),...N({tag:"li"})},"VBreadcrumbsItem"),de=C()({name:"VBreadcrumbsItem",props:ie(),setup(e,r){let{slots:a,attrs:d}=r;const n=W(e,d),s=y(()=>{var o;return e.active||((o=n.isActive)==null?void 0:o.value)}),c=y(()=>s.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:i}=J(c);return B(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},g.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var o,v;return[n.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":s.value?"page":void 0,onClick:n.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((o=a.default)==null?void 0:o.call(a))??e.title]}})),{}}}),oe=S({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:X,items:{type:Array,default:()=>[]},...k(),...Y(),...ee(),...N({tag:"ul"})},"VBreadcrumbs"),ce=C()({name:"VBreadcrumbs",props:oe(),setup(e,r){let{slots:a}=r;const{backgroundColorClasses:d,backgroundColorStyles:n}=Q(u(e,"bgColor")),{densityClasses:s}=Z(e),{roundedClasses:c}=ae(e);H({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return B(()=>{const i=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",d.value,s.value,c.value,e.class],style:[n.value,e.style]},{default:()=>{var o;return[i&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(te,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(re,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((v,l,V)=>{var _;let{item:m,raw:R}=v;return t(j,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:l}))??t(de,P({key:l,disabled:l>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:l})}:void 0}),l<V.length-1&&t(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:R,index:l})}:void 0})])}),(o=a.default)==null?void 0:o.call(a)]}})}),{}}});function le(e,r,a,d,n,s){return z(),E(ce,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:c})=>[t($,{class:x(e.classes(c))},{default:f(()=>[h(q(c.title),1)]),_:2},1032,["class"])]),divider:f(()=>[t(T,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const L=G(w,[["render",le]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSBreadcrumbItem[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const De={title:"Foundation/Shared/Breadcrumbs",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:r})=>({components:{Breadcrumbs:L},props:Object.keys(r),setup(){return{...e}},template:`
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
