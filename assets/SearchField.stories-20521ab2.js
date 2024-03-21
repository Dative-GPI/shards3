import{F as n}from"./FSSearchField-ec880733.js";import{_ as l}from"./FSCol-5b91b447.js";import"./vue.esm-bundler-0a1af505.js";import"./FSTextField-78ab428e.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-852c6353.js";import"./css-415780ec.js";import"./VField-66cf1d8d.js";import"./index-d90e6acb.js";import"./useRender-cc726afb.js";import"./theme-2d24b19c.js";import"./transition-c9646b8b.js";import"./VInput-32e7bd1c.js";import"./locale-767f04a5.js";import"./proxiedModel-7a45f3f8.js";import"./VIcon-a19d44fc.js";import"./color-68d45c69.js";import"./tag-e48f136a.js";import"./density-99d9a31c.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./rounded-94c7156f.js";import"./forwardRefs-e658ad70.js";import"./useColors-128f3c4d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-a7d8920b.js";import"./VTextField-bc89db2e.js";import"./index-80f01c5b.js";import"./FSButton-87a8d4ab.js";import"./vue-router-f60daad6.js";import"./FSCard-985d3fa3.js";import"./VProgressCircular-1c311cd8.js";import"./resizeObserver-86c9045a.js";import"./FSIcon-8481a0c6.js";import"./useTranslations-c047d5be.js";const M={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(o,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...o}},template:`
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const N=["Variations"];export{e as Variations,N as __namedExportsOrder,M as default};
