import{F as o}from"./FSSearchField-eb757599.js";import{_ as l}from"./FSCol-417d1c42.js";import"./vue.esm-bundler-9b0e8103.js";import"./FSTextField-55593349.js";import"./FSButton-4f53dca1.js";import"./FSClickable-1ebcabee.js";import"./FSCard-bd4b7ce0.js";import"./FSRow-efd9bf42.js";import"./css-a20776b9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-c8cdc69f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./VProgressCircular-49cc274e.js";import"./color-8a9bca19.js";import"./useRender-7c6c7a38.js";import"./resizeObserver-d1864ccd.js";import"./VIcon-dbd6f8e0.js";import"./tag-6bef4934.js";import"./FSSpan-66c77817.js";import"./useSlots-bfff66e3.js";import"./FSIcon-42763d21.js";import"./useRules-1f7652b9.js";import"./VSpacer-fd2fc595.js";import"./VTextField-ed34766d.js";import"./VField-719bff6c.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./proxiedModel-bfd89816.js";import"./density-104762f9.js";import"./loader-e562d735.js";import"./rounded-f08b035c.js";import"./VDefaultsProvider-b110751b.js";import"./forwardRefs-e658ad70.js";import"./index-d737aecc.js";import"./useTranslations-8945c1d2.js";const Q={title:"Foundation/Shared/Input fields/SearchField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(n,{argTypes:i})=>({components:{FSSearchField:o,FSCol:l},props:Object.keys(i),setup(){return{...n}},template:`
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const W=["Variations"];export{e as Variations,W as __namedExportsOrder,Q as default};
