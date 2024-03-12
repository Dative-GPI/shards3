import{F as n}from"./FSSearchField-9c0936db.js";import{_ as l}from"./FSCol-caf5d8c8.js";import"./vue.esm-bundler-85c2ade9.js";import"./FSTextField-5649ea31.js";import"./FSSpan-abd71399.js";import"./useSlots-58887162.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-120b21e0.js";import"./css-b4ee648a.js";import"./VField-3df13f61.js";import"./index-0b62f442.js";import"./useRender-22e01882.js";import"./theme-0475544b.js";import"./transition-0e35e3a5.js";import"./VInput-9ba9caf6.js";import"./locale-cdd955a4.js";import"./VIcon-96eed797.js";import"./color-680672dd.js";import"./tag-fd98b684.js";import"./density-1bef1032.js";import"./loader-c17713e4.js";import"./rounded-7d023c25.js";import"./forwardRefs-e658ad70.js";import"./useColors-4bd4e66b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-fb9707dd.js";import"./VTextField-b1504f7b.js";import"./index-160e8c08.js";import"./FSButton-571eabbd.js";import"./vue-router-d81a5c9d.js";import"./FSCard-18b81b74.js";import"./FSIcon-d4b06799.js";import"./useTranslations-93c8b8c9.js";const B={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(o,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...o}},template:`
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const G=["Variations"];export{e as Variations,G as __namedExportsOrder,B as default};
