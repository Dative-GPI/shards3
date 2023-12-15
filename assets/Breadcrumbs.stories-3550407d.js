import{g as x,l as r,f as p,z as u,F as A,x as I,o as N,j,k as F,m as z,p as L,L as O}from"./vue.esm-bundler-3a71544d.js";import{u as q}from"./useColors-f8bf713a.js";import{_ as P,b as E,p as y,j as C,g as k,u as B,k as T,v as G,i as H,z as J,d as K,V as M,c as Q}from"./FSRow-c6493f26.js";import{F as U}from"./FSIcon-7efa0d30.js";import{m as W,u as X,V as Y}from"./router-e438556e.js";import{m as Z,a as ee,u as ae,b as re}from"./rounded-81fca583.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const $=x({name:"FSBreadcrumbs",components:{FSSpan:P,FSIcon:U,FSRow:E},props:{items:{type:Array,required:!0}},setup(){const e=q().getDark();return{style:{"--fs-breadcrumbs-light-text":e.light,"--fs-breadcrumbs-base-text":e.base,"--fs-breadcrumbs-dark-text":e.dark},getClass:s=>s.disabled?"fs-breadcrumbs-label--disabled":"fs-breadcrumbs-label"}}});const te=y({divider:[Number,String],...C()},"VBreadcrumbsDivider"),se=k()({name:"VBreadcrumbsDivider",props:te(),setup(e,t){let{slots:a}=t;return B(()=>{var s;return r("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((s=a==null?void 0:a.default)==null?void 0:s.call(a))??e.divider])}),{}}}),ne=y({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...C(),...W(),...T({tag:"li"})},"VBreadcrumbsItem"),ie=k()({name:"VBreadcrumbsItem",props:ne(),setup(e,t){let{slots:a,attrs:s}=t;const l=X(e,s),i=p(()=>{var d;return e.active||((d=l.isActive)==null?void 0:d.value)}),c=p(()=>i.value?e.activeColor:e.color),{textColorClasses:g,textColorStyles:n}=G(c);return B(()=>r(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},g.value,e.class],style:[n.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>{var d,v;return[l.isLink.value?r("a",{class:"v-breadcrumbs-item--link",href:l.href.value,"aria-current":i.value?"page":void 0,onClick:l.navigate},[((v=a.default)==null?void 0:v.call(a))??e.title]):((d=a.default)==null?void 0:d.call(a))??e.title]}})),{}}}),de=y({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:H,items:{type:Array,default:()=>[]},...C(),...Z(),...ee(),...T({tag:"ul"})},"VBreadcrumbs"),le=k()({name:"VBreadcrumbs",props:de(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:l}=J(u(e,"bgColor")),{densityClasses:i}=ae(e),{roundedClasses:c}=re(e);K({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const g=p(()=>e.items.map(n=>typeof n=="string"?{item:{title:n},raw:n}:{item:n,raw:n}));return B(()=>{const n=!!(a.prepend||e.icon);return r(e.tag,{class:["v-breadcrumbs",s.value,i.value,c.value,e.class],style:[l.value,e.style]},{default:()=>{var d;return[n&&r("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?r(Y,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):r(M,{key:"prepend-icon",start:!0,icon:e.icon},null)]),g.value.map((v,o,S)=>{var V;let{item:m,raw:R}=v;return r(A,null,[((V=a.item)==null?void 0:V.call(a,{item:m,index:o}))??r(ie,I({key:o,disabled:o>=S.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:m,index:o})}:void 0}),o<S.length-1&&r(se,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:R,index:o})}:void 0})])}),(d=a.default)==null?void 0:d.call(a)]}})}),{}}});function ce(e,t,a,s,l,i){return N(),j(le,I(e.$attrs,{style:e.style,items:e.$props.items}),{title:F(({item:c})=>[r(P,{class:O(e.getClass(c))},{default:F(()=>[z(L(c.title),1)]),_:2},1032,["class"])]),_:1},16,["style","items"])}const w=Q($,[["render",ce]]);$.__docgenInfo={displayName:"FSBreadcrumbs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array<FSBreadcrumbItem>"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBreadcrumbs.vue"]};const ye={title:"Foundation/Breadcrumbs",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{items:[{title:"First",disabled:!1,active:!1},{title:"Second",disabled:!1,active:!1},{title:"Third",disabled:!0,active:!0}]}},render:(e,{argTypes:t})=>({components:{Breadcrumbs:w},props:Object.keys(t),setup(){return{...e}},template:`
        <Breadcrumbs v-bind="args" />
    `})};var _,h,D;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        title: "First",
        disabled: false,
        active: false
      }, {
        title: "Second",
        disabled: false,
        active: false
      }, {
        title: "Third",
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
}`,...(D=(h=f.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const Ce=["Standard"];export{f as Standard,Ce as __namedExportsOrder,ye as default};
