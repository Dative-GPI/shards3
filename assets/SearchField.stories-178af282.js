import{F as n}from"./FSSearchField-72eba748.js";import{_ as l}from"./FSCol-03fc1f3a.js";import"./vue.esm-bundler-17cb12ce.js";import"./useColors-04b7b26f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-8f4289e2.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";import"./theme-c4ac2200.js";import"./FSTextField-867bbd59.js";import"./FSSpan-2051def6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-9ce6aace.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./VSpacer-bacd1ff2.js";import"./color-d421c344.js";import"./VTextField-99deef4a.js";import"./VField-d3cacb6a.js";import"./index-c6c13bcc.js";import"./transition-4d995a4a.js";import"./VInput-9e5eb041.js";import"./locale-2e51016c.js";import"./VIcon-343130ca.js";import"./density-cdecea01.js";import"./loader-8675b45d.js";import"./rounded-d330abbe.js";import"./forwardRefs-e658ad70.js";import"./index-c7efe106.js";import"./FSButton-8130144f.js";import"./FSIcon-16c55386.js";import"./VBtn-7cd9fe35.js";import"./variant-1223b1b3.js";import"./elevation-cb67bcb5.js";import"./group-a63c5543.js";import"./dimensions-10b1de84.js";import"./router-021df22c.js";import"./index-acf26303.js";import"./VDefaultsProvider-1bba8b3c.js";import"./VProgressCircular-132e7099.js";import"./resizeObserver-e7ce026e.js";const W={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(i,{argTypes:a})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(a),setup(){return{...i}},template:`
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
