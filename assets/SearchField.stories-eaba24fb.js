import{F as o}from"./FSSearchField-6f5a4233.js";import{_ as l}from"./FSCol-439c812a.js";import"./vue.esm-bundler-857e5af7.js";import"./FSTextField-4b6701c3.js";import"./VField-05970d63.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-e30f1dcc.js";import"./css-ab2bdb81.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./VSpacer-2ef0dee2.js";import"./useRender-1606c976.js";import"./index-900eb6c5.js";import"./transition-8ae71e6c.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./VIcon-77d6c341.js";import"./color-3025502c.js";import"./tag-41ce785e.js";import"./density-9a54c498.js";import"./dimensions-946cb0c4.js";import"./loader-c881e63b.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./rounded-751db039.js";import"./VDefaultsProvider-e6a6e57a.js";import"./forwardRefs-e658ad70.js";import"./FSButton-0aa1c2d4.js";import"./FSClickable-450f52d6.js";import"./FSCard-e175fef9.js";import"./FSIcon-d0ab000b.js";import"./useRules-b3d475c7.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./useTranslations-4ae50e1a.js";const W={title:"Foundation/Shared/Input fields/SearchField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(n,{argTypes:i})=>({components:{FSSearchField:o,FSCol:l},props:Object.keys(i),setup(){return{...n}},template:`
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
        :hideHeader="false"
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
        :hideHeader="false"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        variant="standard"
        :editable="false"
        :hideHeader="false"
        v-model="args.value4"
      />
    </FSCol>`})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        :hideHeader="false"
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
        :hideHeader="false"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        variant="standard"
        :editable="false"
        :hideHeader="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const X=["Variations"];export{e as Variations,X as __namedExportsOrder,W as default};
