import{g as q,t as E,f as N,j as d,o as m,k as f,l as r,m as g,p as b,q as V,u as w,y as B}from"./vue.esm-bundler-66d46254.js";import{C as x,u as $}from"./useColors-c3e7013c.js";import{F as j}from"./FSIcon-a97ae0a7.js";import{_ as T,F as O,b as I}from"./FSRow-c0589bf9.js";import{V as R}from"./VBtn-4b6c71c6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rounded-249030ea.js";import"./loader-72eca065.js";import"./router-f5bee237.js";import"./index-26618c09.js";const h=q({name:"FSTag",components:{FSIcon:j,FSSpan:T,FSRow:O},props:{label:{type:String,required:!0},full:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:x.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["remove"],setup(e,{emit:t}){const{label:p,full:n,color:u,editable:c}=E(e),a=$().getVariants(u.value),l=N(()=>({"--fs-tag-light-color":n.value?a.base:a.light,"--fs-tag-base-color":a.base,"--fs-tag-dark-color":a.dark,"--fs-tag-light-text":n.value?a.light:a.base,"--fs-tag-base-text":a.light,"--fs-tag-dark-text":a.light}));return{label:p,editable:c,style:l,emit:t}}});function P(e,t,p,n,u,c){const a=d("FSIcon"),l=d("FSRow");return m(),f(l,B({class:"fs-tag",width:"hug",style:e.style},e.$attrs),{default:r(()=>[g(T,null,{default:r(()=>[b(V(e.label),1)]),_:1}),e.editable?(m(),f(R,{key:0,class:"fs-tag-button",ripple:!1,onClick:t[0]||(t[0]=z=>e.emit("remove"))},{default:r(()=>[g(a,{size:"s"},{default:r(()=>[b(" mdi-close ")]),_:1})]),_:1})):w("",!0)]),_:1},16,["style"])}const i=I(h,[["render",P]]);h.__docgenInfo={displayName:"FSTag",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"full",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTag.vue"]};const X={title:"Foundation/Tag",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},C=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Tag v-bind="args" />
</v-container>
`,o={args:{args:{label:"Editable",full:!1,color:"primary",editable:!0}},render:(e,{argTypes:t})=>({components:{Tag:i},props:Object.keys(t),setup(){return{...e}},template:C})},s={args:{args:{label:"Not Editable",full:!0,color:"warning",editable:!1}},render:(e,{argTypes:t})=>({components:{Tag:i},props:Object.keys(t),setup(){return{...e}},template:C})};var y,S,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var _,k,F;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(k=s.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const Y=["Editable","NotEditable"];export{o as Editable,s as NotEditable,Y as __namedExportsOrder,X as default};
