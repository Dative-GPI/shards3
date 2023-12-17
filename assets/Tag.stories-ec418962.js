import{g as E,t as N,f as V,o as d,j as c,k as r,l as m,m as f,p as B,q as w,x}from"./vue.esm-bundler-df2b59eb.js";import{C as $,u as j}from"./useColors-91d774bf.js";import{F as T}from"./FSIcon-f96262eb.js";import{_,b as h,c as O}from"./FSRow-a4346a5f.js";import{V as P}from"./VBtn-28fa37b4.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rounded-801f8536.js";import"./loader-f4b8bce6.js";import"./router-e08994c5.js";import"./index-eb1e0225.js";const F=E({name:"FSTag",components:{FSIcon:T,FSSpan:_,FSRow:h},props:{label:{type:String,required:!0},full:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:$.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["remove"],setup(e,{emit:t}){const{label:i,full:n,color:p,editable:u}=N(e),a=j().getVariants(p.value),q=V(()=>({"--fs-tag-light-color":n.value?a.base:a.light,"--fs-tag-base-color":a.base,"--fs-tag-dark-color":a.dark,"--fs-tag-light-text":n.value?a.light:a.base,"--fs-tag-base-text":a.light,"--fs-tag-dark-text":a.light}));return{label:i,editable:u,style:q,emit:t}}});function R(e,t,i,n,p,u){return d(),c(h,x({class:"fs-tag",width:"hug",style:e.style},e.$attrs),{default:r(()=>[m(_,null,{default:r(()=>[f(B(e.label),1)]),_:1}),e.editable?(d(),c(P,{key:0,class:"fs-tag-button",ripple:!1,onClick:t[0]||(t[0]=a=>e.emit("remove"))},{default:r(()=>[m(T,{size:"s"},{default:r(()=>[f(" mdi-close ")]),_:1})]),_:1})):w("",!0)]),_:1},16,["style"])}const l=O(F,[["render",R]]);F.__docgenInfo={displayName:"FSTag",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"full",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTag.vue"]};const U={title:"Foundation/Tag",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},C=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Tag v-bind="args" />
</v-container>
`,s={args:{args:{label:"Editable",full:!1,color:"primary",editable:!0}},render:(e,{argTypes:t})=>({components:{Tag:l},props:Object.keys(t),setup(){return{...e}},template:C})},o={args:{args:{label:"Not Editable",full:!0,color:"warning",editable:!1}},render:(e,{argTypes:t})=>({components:{Tag:l},props:Object.keys(t),setup(){return{...e}},template:C})};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,v,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const W=["Editable","NotEditable"];export{s as Editable,o as NotEditable,W as __namedExportsOrder,U as default};
