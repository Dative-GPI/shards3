import{F as n}from"./FSSearchField-6baa6eb4.js";import{_ as l}from"./FSCol-39bd052c.js";import"./vue.esm-bundler-d8049c85.js";import"./FSTextField-7a5a6ce0.js";import"./FSSpan-9f00eaf4.js";import"./useSlots-bdda8306.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-b5482a77.js";import"./css-50f0aa1d.js";import"./VField-98076a13.js";import"./index-a9977cc4.js";import"./useRender-29d234e5.js";import"./theme-540b65c4.js";import"./transition-a0827c0d.js";import"./VInput-95d46afc.js";import"./locale-0b822523.js";import"./VIcon-76640d9b.js";import"./color-339b05ed.js";import"./tag-fffb6ba6.js";import"./density-de8a38cb.js";import"./loader-cb170f8e.js";import"./rounded-0d200380.js";import"./forwardRefs-e658ad70.js";import"./useColors-5c9cff43.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-e253cf80.js";import"./VTextField-bdebe004.js";import"./index-d961be33.js";import"./FSButton-819b5655.js";import"./FSIcon-4847f868.js";import"./VBtn-05fbe885.js";import"./variant-ec540a43.js";import"./elevation-ef665fc6.js";import"./group-9e62ecfa.js";import"./dimensions-c0ade26a.js";import"./router-e2bea4dd.js";import"./index-ea9d807b.js";import"./VDefaultsProvider-2b53b1ea.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";import"./useTranslations-503566cb.js";const X={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(a,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...a}},template:`
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
