import{F as o}from"./FSSearchField-fd4da165.js";import{_ as l}from"./FSCol-5731c3c4.js";import"./vue.esm-bundler-3416a090.js";import"./FSTextField-bb895cdf.js";import"./VField-d3f61dc4.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-5edf997c.js";import"./css-69ed11d9.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./VSpacer-819449a6.js";import"./useRender-fb717f1b.js";import"./index-46378e0b.js";import"./transition-6086c96b.js";import"./VLabel-793ed17d.js";import"./VInput-77c4eaa4.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./VIcon-c583a5e4.js";import"./color-5c733e3b.js";import"./tag-a6c90b0c.js";import"./density-174ddef7.js";import"./dimensions-97f2f62c.js";import"./loader-b2c56b78.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./FSIcon-f518d728.js";import"./useRules-5e1988ee.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./useTranslations-ff263049.js";const W={title:"Foundation/Shared/Input fields/SearchField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(n,{argTypes:i})=>({components:{FSSearchField:o,FSCol:l},props:Object.keys(i),setup(){return{...n}},template:`
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
