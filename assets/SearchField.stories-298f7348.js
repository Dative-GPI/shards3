import{F as n}from"./FSSearchField-2251f6e2.js";import{_ as l}from"./FSCol-5941d279.js";import"./vue.esm-bundler-a27e881e.js";import"./FSTextField-a84650e0.js";import"./FSSpan-23926a6a.js";import"./useSlots-f8c8bb5a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-e0b07355.js";import"./css-fb381997.js";import"./useColors-64c3c523.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-40a9efa2.js";import"./VSpacer-a8d4114f.js";import"./color-2740292e.js";import"./VTextField-4d7d73e0.js";import"./VField-1b55a660.js";import"./index-a4e785fb.js";import"./transition-91aa1796.js";import"./VInput-97b04c8f.js";import"./locale-d8beded1.js";import"./VIcon-2e68f29b.js";import"./density-9e64face.js";import"./loader-d45e9b6f.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./FSButton-32c11b56.js";import"./FSIcon-695f5195.js";import"./VBtn-36b0c9e9.js";import"./variant-cf13121d.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-6b0a994a.js";import"./VProgressCircular-21a2049c.js";import"./resizeObserver-f6ddbc93.js";const N={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(i,{argTypes:a})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(a),setup(){return{...i}},template:`
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Q=["Variations"];export{e as Variations,Q as __namedExportsOrder,N as default};
