import{g,t as k,n as h,o as y,j as _,k as x,q as C,u as F,m as S}from"./vue.esm-bundler-4539b11d.js";import{u as T,_ as $}from"./VIcon-4dfa5dd0.js";import{F as j}from"./FSIcon-c38da8de.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const f=g({name:"FSCheckbox",components:{FSIcon:j},props:{value:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:l,editable:o}=k(e),t=T().getDark(),c={"--cu":o.value?"pointer":"default","--lc":t.light,"--bc":t.base};return{value:l,editable:o,style:c,emit:a}}});function q(e,a,l,o,t,c){const v=h("FSIcon");return y(),_(v,S({class:"fs-checkbox",size:"checkbox",style:e.style,onClick:a[0]||(a[0]=E=>e.editable?e.emit("update:value",!e.value):null)},e.$attrs),{default:x(()=>[C(F(e.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),1)]),_:1},16,["style"])}const r=$(f,[["render",q],["__scopeId","data-v-cda1e37c"]]);f.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/foundation-shared-ui-components/components/FSCheckbox.vue"]};const w={title:"Foundation/Checkbox",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:r},props:Object.keys(a),setup(){return{...e}},template:`
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
//# sourceMappingURL=Checkbox.stories-69fc1a35.js.map
