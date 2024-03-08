import{F as n}from"./FSSearchField-7b4b90a3.js";import{_ as l}from"./FSCol-07ad80b8.js";import"./vue.esm-bundler-588e96c7.js";import"./FSTextField-11217dd5.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-e442cab6.js";import"./css-50f0aa1d.js";import"./VField-98fe1be9.js";import"./index-5292658a.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./transition-28907f24.js";import"./VInput-4a9e0385.js";import"./locale-56b7257e.js";import"./VIcon-56fbcc42.js";import"./density-79e1d57e.js";import"./loader-b5f87c49.js";import"./rounded-ef9fdb42.js";import"./forwardRefs-e658ad70.js";import"./useColors-0a17cef8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-18a01036.js";import"./VTextField-9257e797.js";import"./index-c8d171e2.js";import"./FSButton-03b2e657.js";import"./FSIcon-2736b3f2.js";import"./VBtn-b4a2fb00.js";import"./variant-5570e4c2.js";import"./elevation-1ac0f37f.js";import"./group-6ed4811d.js";import"./dimensions-e6c6eed7.js";import"./router-cfd7314c.js";import"./index-50a29978.js";import"./VDefaultsProvider-3b96cb3b.js";import"./VProgressCircular-33868664.js";import"./resizeObserver-54460412.js";import"./useTranslations-d310d0e5.js";const Q={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(a,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...a}},template:`
    <FSCol>
      <FSSearchField
        label="Instant search"
        variant="instant"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Search, primary button color, button label"
        buttonLabel="Search"
        variant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Required search, warning button color, button label & icon"
        description="Description for this field"
        buttonLabel="I'm feeling lucky"
        buttonPrependIcon="mdi-clover"
        buttonColor="warning"
        variant="standard"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        variant="standard"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})};var e,r,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Search",
      value3: null,
      value4: "Search"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSearchField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSSearchField
        label="Instant search"
        variant="instant"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Search, primary button color, button label"
        buttonLabel="Search"
        variant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Required search, warning button color, button label & icon"
        description="Description for this field"
        buttonLabel="I'm feeling lucky"
        buttonPrependIcon="mdi-clover"
        buttonColor="warning"
        variant="standard"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        variant="standard"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const W=["Variations"];export{t as Variations,W as __namedExportsOrder,Q as default};
