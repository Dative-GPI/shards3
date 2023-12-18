import{T as a}from"./FSTextField-390daac0.js";import"./vue.esm-bundler-c3efb794.js";import"./VIcon-c46aeaeb.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-d98aa7bb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-6013107c.js";import"./index-f39a8f63.js";import"./VInput-53fffe8c.js";import"./loader-5b2fe5c8.js";import"./rounded-c9feffd5.js";import"./easing-9998643d.js";const O={title:"Foundation/Shared/TextField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <TextField v-bind="args" v-model:value="args.value" />
</v-container>
`,e={args:{args:{label:"Editable",value:"Enter text here",color:"primary",editable:!0}},render:(t,{argTypes:n})=>({components:{TextField:a},props:Object.keys(n),setup(){return{...t}},template:d})},r={args:{args:{label:"Not editable",value:"Enter text here",color:"warning",editable:!1}},render:(t,{argTypes:n})=>({components:{TextField:a},props:Object.keys(n),setup(){return{...t}},template:d})};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Editable",
      value: "Enter text here",
      color: "primary",
      editable: true
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      TextField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,i,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Not editable",
      value: "Enter text here",
      color: "warning",
      editable: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      TextField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const j=["Editable","NotEditable"];export{e as Editable,r as NotEditable,j as __namedExportsOrder,O as default};
