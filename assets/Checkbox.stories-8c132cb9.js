import{g,t as k,l as h,o as y,m as _,n as x,p as C,q as S,v as F}from"./vue.esm-bundler-735ffdc4.js";import{u as T,_ as $}from"./VIcon-69a4d912.js";import{F as q}from"./FSIcon-cfab466a.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const v=g({name:"FSCheckbox",components:{FSIcon:q},props:{value:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:l,editable:o}=k(e),t=T().getDark(),c={"--cu":o.value?"pointer":"default","--lc":t.light,"--bc":t.base};return{value:l,editable:o,style:c,emit:a}}});function E(e,a,l,o,t,c){const f=h("FSIcon");return y(),_(f,F({class:"fs-checkbox",size:"checkbox",style:e.style,onClick:a[0]||(a[0]=I=>e.editable?e.emit("update:value",!e.value):null)},e.$attrs),{default:x(()=>[C(S(e.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),1)]),_:1},16,["style"])}const r=$(v,[["render",E],["__scopeId","data-v-ca08e991"]]);v.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};const w={title:"Foundation/Shared/Checkbox",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:r},props:Object.keys(a),setup(){return{...e}},template:`
      <Checkbox v-bind="args" v-model:value="args.value" />
    `})},s={args:{args:{editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:r},props:Object.keys(a),setup(){return{...e}},template:`
      <Checkbox v-bind="args" v-model:value="args.value" />
    `})};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    args: {
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Checkbox v-bind="args" v-model:value="args.value" />
    \`
  })
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,b;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      editable: false,
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Checkbox v-bind="args" v-model:value="args.value" />
    \`
  })
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const D=["Editable","NotEditable"];export{n as Editable,s as NotEditable,D as __namedExportsOrder,w as default};
