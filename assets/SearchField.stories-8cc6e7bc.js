import{F as n}from"./FSSearchField-003f42d6.js";import{_ as l}from"./FSCol-00f12d9b.js";import"./vue.esm-bundler-47273a21.js";import"./useColors-446eeb5a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-f5c4efdb.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./theme-7e191b90.js";import"./FSTextField-045eeec4.js";import"./FSSpan-6a5d69b6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-89f60060.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./VSpacer-6746e4d1.js";import"./color-38d974b0.js";import"./VTextField-9b65e315.js";import"./VField-5a3e40b0.js";import"./index-c4c93672.js";import"./transition-6c7cc79f.js";import"./VInput-fdcb6e75.js";import"./locale-5c4d4b03.js";import"./VIcon-f933c800.js";import"./density-52b016fa.js";import"./loader-c1abc016.js";import"./rounded-8d3cef66.js";import"./forwardRefs-e658ad70.js";import"./index-1e6cce54.js";import"./FSButton-95139452.js";import"./FSIcon-be851c75.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./elevation-522a2612.js";import"./group-0f5e58b6.js";import"./dimensions-699818e3.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VDefaultsProvider-6a122c68.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";const W={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(i,{argTypes:a})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(a),setup(){return{...i}},template:`
    <FSCol>
      <FSSearchField
        label="Instant search"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Search, primary button color, button label"
        buttonLabel="Search"
        :instant="false"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Required search, warning button color, button label & icon"
        description="Description for this field"
        buttonLabel="I'm feeling lucky"
        buttonPrependIcon="mdi-clover"
        buttonColor="warning"
        :instant="false"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        :instant="false"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Search, primary button color, button label"
        buttonLabel="Search"
        :instant="false"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Required search, warning button color, button label & icon"
        description="Description for this field"
        buttonLabel="I'm feeling lucky"
        buttonPrependIcon="mdi-clover"
        buttonColor="warning"
        :instant="false"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        :instant="false"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const X=["Variations"];export{e as Variations,X as __namedExportsOrder,W as default};
