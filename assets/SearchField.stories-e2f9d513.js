import{F as n}from"./FSSearchField-ab936633.js";import{_ as l}from"./FSCol-8dc0322a.js";import"./vue.esm-bundler-7bc65811.js";import"./useColors-6dff70d5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-041f2544.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./theme-0a9d2dbd.js";import"./FSTextField-28e527db.js";import"./FSSpan-7f9d89a0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-ae4caba9.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./VSpacer-fb0a701e.js";import"./color-3023c34d.js";import"./VTextField-cc6b25a7.js";import"./VField-cd628e22.js";import"./index-76211fed.js";import"./transition-188ceb13.js";import"./VInput-06509b07.js";import"./locale-6f1bd0c0.js";import"./VIcon-866a2873.js";import"./density-54967683.js";import"./loader-04f0a6eb.js";import"./rounded-2bba334c.js";import"./forwardRefs-e658ad70.js";import"./index-77a5f257.js";import"./FSButton-f8d3e800.js";import"./FSIcon-149b00a8.js";import"./VBtn-5c223d6a.js";import"./variant-9510412f.js";import"./elevation-8ccaa6df.js";import"./group-71a10606.js";import"./dimensions-d0734457.js";import"./router-7d0819d1.js";import"./index-97233025.js";import"./VDefaultsProvider-04b34a8e.js";import"./VProgressCircular-ab3499a8.js";import"./resizeObserver-c41c61f0.js";const W={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(i,{argTypes:a})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(a),setup(){return{...i}},template:`
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
