import{F as o}from"./FSTextField-cf637ab1.js";import"./vue.esm-bundler-d10a8528.js";import"./VIcon-57787e8c.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-abccc23b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-b1484c92.js";import"./index-a10acb8c.js";import"./VInput-45446a90.js";import"./locale-5c0ffb6b.js";import"./rounded-6f26bd38.js";import"./loader-d94ba622.js";import"./easing-9998643d.js";const T={title:"Foundation/Shared/Input fields/TextField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:null,value4:"General Kenobi"}},render:(i,{argTypes:a})=>({components:{FSTextField:o},props:Object.keys(a),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTextField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>`})};var t,r,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: null,
      value4: "General Kenobi"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTextField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>\`
  })
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const f=["Variations"];export{e as Variations,f as __namedExportsOrder,T as default};
