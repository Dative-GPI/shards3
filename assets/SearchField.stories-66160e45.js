import{F as o}from"./FSSearchField-f602e1c0.js";import{_ as l}from"./FSCol-282cc158.js";import"./vue.esm-bundler-41eda46b.js";import"./FSTextField-53a1ad95.js";import"./VField-7c3f9689.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-1508d56d.js";import"./css-35e8563f.js";import"./useColors-c08b974a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./VSpacer-b889274d.js";import"./useRender-b120e115.js";import"./index-ad5199eb.js";import"./transition-87ba966b.js";import"./VLabel-674db0eb.js";import"./VInput-1f6e9963.js";import"./locale-396b54fa.js";import"./proxiedModel-ebe72836.js";import"./VIcon-7bb7bc51.js";import"./color-7b12579a.js";import"./tag-585bbcbd.js";import"./density-23ec5fb8.js";import"./dimensions-dbe989d9.js";import"./loader-912691d5.js";import"./VProgressCircular-e304a31d.js";import"./resizeObserver-ea3ec7d1.js";import"./rounded-d3e26840.js";import"./VDefaultsProvider-9f290faa.js";import"./forwardRefs-e658ad70.js";import"./FSButton-cdb730f5.js";import"./FSClickable-fa1cff73.js";import"./FSCard-dc76bdb2.js";import"./FSIcon-6dc797d3.js";import"./useRules-d33c1ab7.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./useTranslations-3bd97805.js";const W={title:"Foundation/Shared/Input fields/SearchField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(n,{argTypes:i})=>({components:{FSSearchField:o,FSCol:l},props:Object.keys(i),setup(){return{...n}},template:`
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
