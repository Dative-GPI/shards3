import{g as q,t as E,f as F,o as p,j as d,k as r,q as m,l as c,m as f,p as N,u as V,x as B}from"./vue.esm-bundler-c3efb794.js";import{C as w,u as j}from"./VIcon-c46aeaeb.js";import{_ as h}from"./FSIcon-c64176f8.js";import{S as T}from"./FSSpan-d98aa7bb.js";import{R as _}from"./FSRow-531aa6d1.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as O}from"./VBtn-34cdb178.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./rounded-c9feffd5.js";import"./loader-5b2fe5c8.js";import"./VDefaultsProvider-48f77b38.js";import"./index-03576ef1.js";const C=q({name:"FSTag",components:{FSIcon:h,FSSpan:T,FSRow:_},props:{label:{type:String,required:!0},full:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:w.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["remove"],setup(e){const{full:a,color:l,editable:i}=E(e),t=j().getVariants(l.value),u=F(()=>({"--fs-tag-light-color":a.value?t.base:t.light,"--fs-tag-base-color":t.base,"--fs-tag-dark-color":t.dark,"--fs-tag-light-text":a.value?t.light:t.base,"--fs-tag-base-text":t.light,"--fs-tag-dark-text":t.light}));return{editable:i,style:u}}});function R(e,a,l,i,t,u){return p(),d(_,B({class:"fs-tag",width:"hug",align:"center-left",style:e.style},e.$attrs),{default:r(()=>[m(e.$slots,"default",{},()=>[c(T,{class:"fs-tag-label"},{default:r(()=>[f(N(e.$props.label),1)]),_:1})]),m(e.$slots,"button",{},()=>[e.editable?(p(),d(O,{key:0,class:"fs-tag-button",ripple:!1,onClick:a[0]||(a[0]=I=>e.$emit("remove"))},{default:r(()=>[c(h,{size:"s"},{default:r(()=>[f(" mdi-close ")]),_:1})]),_:1})):V("",!0)])]),_:3},16,["style"])}const n=x(C,[["render",R]]);C.__docgenInfo={displayName:"FSTag",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"full",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"},{name:"button"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTag.vue"]};const X={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},$=`
<div style="display: flex;">
  <Tag v-bind="args" />
</div>
`,s={args:{args:{label:"Editable",full:!1,color:"primary",editable:!0}},render:(e,{argTypes:a})=>({components:{Tag:n},props:Object.keys(a),setup(){return{...e}},template:$})},o={args:{args:{label:"Not Editable",full:!0,color:"warning",editable:!1}},render:(e,{argTypes:a})=>({components:{Tag:n},props:Object.keys(a),setup(){return{...e}},template:$})};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Editable",
      full: false,
      color: "primary",
      editable: true
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tag
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,k,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Not Editable",
      full: true,
      color: "warning",
      editable: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tag
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const Y=["Editable","NotEditable"];export{s as Editable,o as NotEditable,Y as __namedExportsOrder,X as default};
