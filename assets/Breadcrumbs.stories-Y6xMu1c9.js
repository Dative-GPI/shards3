import{I as t,c as y,l as u,F as L,m as P,d as z,b as E,z as O,A as j,B as v,E as h,G as q,S as x}from"./vue.esm-bundler-DC82FEWN.js";import{_ as T}from"./FSSpan-CpNfN-10.js";import{_ as $}from"./FSIcon-DbwPn2D8.js";import{u as G,C as H}from"./useColors-C3kIW-yW.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as k,g as C,u as B,b as K,c as M,p as Q}from"./color-DvJT0EEa.js";import{p as S}from"./theme-B5x8xkbY.js";import{m as U,u as W}from"./router-DFGAHh1d.js";import{m as N,I as X,V as Y}from"./VIcon-Dc-dFojD.js";import{m as Z,u as ee}from"./density-CFGlRMM_.js";import{m as ae,u as re}from"./rounded-YB6K8mOp.js";import{V as te}from"./VDefaultsProvider-4deG1Ppv.js";import"./useSlots-DN9F4SV8.js";import"./css-DYOPUjjE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";const se=S({divider:[Number,String],...k()},"VBreadcrumbsDivider"),ne=C()({name:"VBreadcrumbsDivider",props:se(),setup(e,r){let{slots:a}=r;return B(()=>{var d;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((d=a==null?void 0:a.default)==null?void 0:d.call(a))??e.divider])}),{}}}),ie=S({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...k(),...U(),...N({tag:"li"})},"VBreadcrumbsItem"),de=C()({name:"VBreadcrumbsItem",props:ie(),setup(e,r){let{slots:a,attrs:d}=r;const n=W(e,d),s=y(()=>{var l;return e.active||((l=n.isActive)==null?void 0:l.value)}),c=y(()=>s.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:i}=K(c);return B(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},g.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var l,f;return[n.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":s.value?"page":void 0,onClick:n.navigate},[((f=a.default)==null?void 0:f.call(a))??e.title]):((l=a.default)==null?void 0:l.call(a))??e.title]}})),{}}}),le=S({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:X,items:{type:Array,default:()=>[]},...k(),...Z(),...ae(),...N({tag:"ul"})},"VBreadcrumbs"),ce=C()({name:"VBreadcrumbs",props:le(),setup(e,r){let{slots:a}=r;const{backgroundColorClasses:d,backgroundColorStyles:n}=M(u(e,"bgColor")),{densityClasses:s}=ee(e),{roundedClasses:c}=re(e);Q({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=y(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return B(()=>{const i=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",d.value,s.value,c.value,e.class],style:[n.value,e.style]},{default:()=>{var l;return[i&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(te,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(Y,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((f,o,V)=>{var _;let{item:m,raw:R}=f;return t(L,null,[((_=a.item)==null?void 0:_.call(a,{item:m,index:o}))??t(de,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&t(ne,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:R,index:o})}:void 0})])}),(l=a.default)==null?void 0:l.call(a)]}})}),{}}}),w=z({name:"FSBreadcrumbs",components:{FSSpan:T,FSIcon:$},props:{items:{type:Array,required:!1,default:()=>[]}},setup(){const{getColors:e}=G(),r=e(H.Dark);return{style:E({"--fs-breadcrumbs-color":r.dark,"--fs-breadcrumbs-active-color":r.base,"--fs-breadcrumbs-disabled-color":r.soft}),classes:n=>{const s=["fs-breadcrumbs-label"];return n.disabled&&s.push("fs-breadcrumbs-label-disabled"),s}}}});function oe(e,r,a,d,n,s){return O(),j(ce,P({style:e.style,items:e.$props.items},e.$attrs),{title:v(({item:c})=>[t(T,{class:x(e.classes(c))},{default:v(()=>[h(q(c.title),1)]),_:2},1032,["class"])]),divider:v(()=>[t($,{class:"fs-breadcrumbs-divider",size:"m"},{default:v(()=>[h(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const A=J(w,[["render",oe]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const Ie={title:"Foundation/Shared/Breadcrumbs",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(e,{argTypes:r})=>({components:{Breadcrumbs:A},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const De=["Standard"];export{p as Standard,De as __namedExportsOrder,Ie as default};
