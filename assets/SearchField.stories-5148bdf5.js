import{F as n}from"./FSSearchField-90af9c69.js";import{_ as l}from"./FSCol-630168ee.js";import"./vue.esm-bundler-cada065a.js";import"./FSTextField-530e6f2e.js";import"./FSSpan-898e6277.js";import"./useSlots-e34db436.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-4ed4317e.js";import"./css-50f0aa1d.js";import"./VField-8506902a.js";import"./index-127b1a3d.js";import"./useRender-aebc0214.js";import"./theme-077d21c3.js";import"./transition-96405fc3.js";import"./VInput-0190379f.js";import"./locale-793e4951.js";import"./VIcon-f531f31f.js";import"./color-cac3f8b2.js";import"./tag-84fe69a6.js";import"./density-a3d9cfab.js";import"./loader-c6765802.js";import"./rounded-c91c5538.js";import"./forwardRefs-e658ad70.js";import"./useColors-d76e62c3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-417f2da8.js";import"./VTextField-9f779e5f.js";import"./index-1890f982.js";import"./FSButton-184a6980.js";import"./FSIcon-de67d9ac.js";import"./VBtn-1fd3c917.js";import"./variant-c24223ea.js";import"./elevation-a65147a7.js";import"./group-52996811.js";import"./dimensions-bd9ae89e.js";import"./router-44442b4b.js";import"./index-79d9264f.js";import"./VDefaultsProvider-1e56270a.js";import"./VProgressCircular-de76cad3.js";import"./resizeObserver-1a024aa2.js";import"./useTranslations-d1fccfae.js";const X={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(a,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...a}},template:`
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
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        variant="standard"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})};var e,r,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable search, with description"
        description="Uneditable description"
        variant="standard"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Y=["Variations"];export{t as Variations,Y as __namedExportsOrder,X as default};
