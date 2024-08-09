import{L as t,c as g,l as u,F as R,m as P,d as z,z as E,A as O,B as f,E as h,G as j,S as q}from"./vue.esm-bundler-gWFTcvUr.js";import{_ as T}from"./FSSpan-DK2fprHX.js";import{_ as $}from"./FSIcon-C7-l9IT-.js";import{u as x,C as G}from"./useColors-4hVwr1YC.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as k,g as C,u as B,b as J,c as K,p as M}from"./color-CI1OEbFE.js";import{p as S}from"./theme-DA9ermhM.js";import{m as Q,u as U}from"./router-B2tkk-4w.js";import{m as N,I as W,V as X}from"./VIcon-BiBYr0XY.js";import{m as Y,u as Z}from"./density-cGginCT8.js";import{m as ee,u as ae}from"./rounded-DlJ8CYNz.js";import{V as re}from"./VDefaultsProvider-CYAySfh3.js";import"./useSlots-qbJuQIJ1.js";import"./css-Bc8dJONt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const te=S({divider:[Number,String],...k()},"VBreadcrumbsDivider"),se=C()({name:"VBreadcrumbsDivider",props:te(),setup(e,r){let{slots:a}=r;return B(()=>{var d;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((d=a==null?void 0:a.default)==null?void 0:d.call(a))??e.divider])}),{}}}),ne=S({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...k(),...Q(),...N({tag:"li"})},"VBreadcrumbsItem"),ie=C()({name:"VBreadcrumbsItem",props:ne(),setup(e,r){let{slots:a,attrs:d}=r;const n=U(e,d),s=g(()=>{var l;return e.active||((l=n.isActive)==null?void 0:l.value)}),c=g(()=>s.value?e.activeColor:e.color),{textColorClasses:y,textColorStyles:i}=J(c);return B(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},y.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var l,v;return[n.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":s.value?"page":void 0,onClick:n.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((l=a.default)==null?void 0:l.call(a))??e.title]}})),{}}}),de=S({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:W,items:{type:Array,default:()=>[]},...k(),...Y(),...ee(),...N({tag:"ul"})},"VBreadcrumbs"),le=C()({name:"VBreadcrumbs",props:de(),setup(e,r){let{slots:a}=r;const{backgroundColorClasses:d,backgroundColorStyles:n}=K(u(e,"bgColor")),{densityClasses:s}=Z(e),{roundedClasses:c}=ae(e);M({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const y=g(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return B(()=>{const i=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",d.value,s.value,c.value,e.class],style:[n.value,e.style]},{default:()=>{var l;return[i&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(re,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(X,{key:"prepend-icon",start:!0,icon:e.icon},null)]),y.value.map((v,o,V)=>{var _;let{item:m,raw:L}=v;return t(R,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:o}))??t(ie,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&t(se,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:L,index:o})}:void 0})])}),(l=a.default)==null?void 0:l.call(a)]}})}),{}}}),w=z({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!1,default:()=>[]}},setup(){const{getColors:e}=x(),r=e(G.Dark);return{style:g(()=>({"--fs-breadcrumbs-color":r.dark,"--fs-breadcrumbs-active-color":r.base,"--fs-breadcrumbs-disabled-color":r.soft})),classes:n=>{const s=["fs-breadcrumbs-label"];return n.disabled&&s.push("fs-breadcrumbs-label-disabled"),s}}}});function ce(e,r,a,d,n,s){return E(),O(le,P({items:e.$props.items,style:e.style},e.$attrs),{title:f(({item:c})=>[t(T,{class:q(e.classes(c))},{default:f(()=>[h(j(c.title),1)]),_:2},1032,["class"])]),divider:f(()=>[t($,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["items","style"])}const A=H(w,[["render",ce]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const Fe={title:"Foundation/Shared/Breadcrumbs",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:r})=>({components:{Breadcrumbs:A},props:Object.keys(r),setup(){return{...e}},template:`
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