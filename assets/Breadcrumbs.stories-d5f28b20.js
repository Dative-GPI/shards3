import{g as j,l as r,f as y,z as u,I as x,x as P,o as L,j as z,k as f,m as _,p as O,N as q}from"./vue.esm-bundler-c3efb794.js";import{u as E,C as G,p as C,f as B,g as k,j as S,i as T,t as H,e as J,y as K,c as M,V as Q}from"./VIcon-c46aeaeb.js";import{S as $}from"./FSSpan-d98aa7bb.js";import{_ as N}from"./FSIcon-c64176f8.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{m as W,u as X,V as Y}from"./VDefaultsProvider-48f77b38.js";import{m as Z,a as ee,u as ae,b as re}from"./rounded-c9feffd5.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const w=j({name:"FSBreadcrumbs",components:{FSSpan:$,FSIcon:N},props:{items:{type:Array,required:!0}},setup(){const e=E().getVariants(G.Dark);return{style:{"--fs-breadcrumbs-light-text":e.light,"--fs-breadcrumbs-base-text":e.base},getClass:s=>s.disabled?"fs-breadcrumbs-label fs-breadcrumbs-label--disabled":"fs-breadcrumbs-label"}}});const te=C({divider:[Number,String],...B()},"VBreadcrumbsDivider"),se=k()({name:"VBreadcrumbsDivider",props:te(),setup(e,t){let{slots:a}=t;return S(()=>{var s;return r("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((s=a==null?void 0:a.default)==null?void 0:s.call(a))??e.divider])}),{}}}),ne=C({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...W(),...T({tag:"li"})},"VBreadcrumbsItem"),ie=k()({name:"VBreadcrumbsItem",props:ne(),setup(e,t){let{slots:a,attrs:s}=t;const l=X(e,s),i=y(()=>{var d;return e.active||((d=l.isActive)==null?void 0:d.value)}),c=y(()=>i.value?e.activeColor:e.color),{textColorClasses:p,textColorStyles:n}=H(c);return S(()=>r(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},p.value,e.class],style:[n.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>{var d,v;return[l.isLink.value?r("a",{class:"v-breadcrumbs-item--link",href:l.href.value,"aria-current":i.value?"page":void 0,onClick:l.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((d=a.default)==null?void 0:d.call(a))??e.title]}})),{}}}),de=C({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:J,items:{type:Array,default:()=>[]},...B(),...Z(),...ee(),...T({tag:"ul"})},"VBreadcrumbs"),le=k()({name:"VBreadcrumbs",props:de(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:l}=K(u(e,"bgColor")),{densityClasses:i}=ae(e),{roundedClasses:c}=re(e);M({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const p=y(()=>e.items.map(n=>typeof n=="string"?{item:{title:n},raw:n}:{item:n,raw:n}));return S(()=>{const n=!!(a.prepend||e.icon);return r(e.tag,{class:["v-breadcrumbs",s.value,i.value,c.value,e.class],style:[l.value,e.style]},{default:()=>{var d;return[n&&r("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?r(Y,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):r(Q,{key:"prepend-icon",start:!0,icon:e.icon},null)]),p.value.map((v,o,V)=>{var h;let{item:m,raw:R}=v;return r(x,null,[((h=a.item)==null?void 0:h.call(a,{item:m,index:o}))??r(ie,P({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&r(se,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:R,index:o})}:void 0})])}),(d=a.default)==null?void 0:d.call(a)]}})}),{}}});function ce(e,t,a,s,l,i){return L(),z(le,P(e.$attrs,{style:e.style,items:e.$props.items}),{title:f(({item:c})=>[r($,{class:q(e.getClass(c))},{default:f(()=>[_(O(c.title),1)]),_:2},1032,["class"])]),divider:f(()=>[r(N,{class:"fs-breadcrumbs-divider",size:"m"},{default:f(()=>[_(" mdi-chevron-right ")]),_:1})]),_:1},16,["style","items"])}const A=U(w,[["render",ce]]);w.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array<FSBreadcrumbItem>"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const Ce={title:"Foundation/Shared/Breadcrumbs",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{items:[{title:"First",disabled:!1,active:!1},{title:"Second",disabled:!0,active:!1},{title:"Third",disabled:!1,active:!1},{title:"Last",disabled:!0,active:!0}]}},render:(e,{argTypes:t})=>({components:{Breadcrumbs:A},props:Object.keys(t),setup(){return{...e}},template:`
        <Breadcrumbs v-bind="args" />
    `})};var F,I,D;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        title: "First",
        disabled: false,
        active: false
      }, {
        title: "Second",
        disabled: true,
        active: false
      }, {
        title: "Third",
        disabled: false,
        active: false
      }, {
        title: "Last",
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
