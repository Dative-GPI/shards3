import{F as n}from"./FSSearchField-4492c538.js";import{_ as l}from"./FSCol-0a1a151b.js";import"./vue.esm-bundler-0a1af505.js";import"./FSTextField-579f05ad.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-f7e9ea33.js";import"./css-403c87e6.js";import"./VField-96becc41.js";import"./index-9b6ba610.js";import"./useRender-76465e3d.js";import"./theme-8d83670f.js";import"./transition-afc70ddd.js";import"./VInput-4e45c526.js";import"./locale-d3181d48.js";import"./proxiedModel-350eff8d.js";import"./VIcon-4501998f.js";import"./color-84472fbe.js";import"./tag-6ffe4ba6.js";import"./density-cfa18558.js";import"./loader-780645af.js";import"./rounded-caec20b0.js";import"./forwardRefs-e658ad70.js";import"./useColors-1745df70.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-638ccd4e.js";import"./VTextField-4fd69d43.js";import"./index-411e5c5c.js";import"./FSButton-5b06f77e.js";import"./vue-router-f60daad6.js";import"./FSCard-2d7fb699.js";import"./FSIcon-61d2f8ac.js";import"./useTranslations-c047d5be.js";const G={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(o,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...o}},template:`
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const J=["Variations"];export{e as Variations,J as __namedExportsOrder,G as default};
