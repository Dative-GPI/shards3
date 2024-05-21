import{F as a}from"./FSSearchField-be33ceb2.js";import{_ as l}from"./FSCol-76ddd6d9.js";import"./vue.esm-bundler-7c237656.js";import"./FSTextField-1126ba2f.js";import"./VField-1b5a23ea.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-0e15f868.js";import"./css-aa928277.js";import"./useColors-8171fc39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6b978bcd.js";import"./VSpacer-5d7851f1.js";import"./useRender-e696dd75.js";import"./index-bed3da0c.js";import"./transition-99224378.js";import"./VLabel-25f2a1ef.js";import"./VInput-cb53917c.js";import"./locale-842c83ae.js";import"./proxiedModel-255ed77f.js";import"./VIcon-ea625dc1.js";import"./color-8b3e8a76.js";import"./tag-d0e3859f.js";import"./density-ba2627df.js";import"./dimensions-506d0d5f.js";import"./loader-1ca0c22d.js";import"./VProgressCircular-84d930cf.js";import"./resizeObserver-78a25be2.js";import"./anchor-4da81316.js";import"./rounded-5c48e6dc.js";import"./VDefaultsProvider-8ad05cd7.js";import"./forwardRefs-e658ad70.js";import"./FSButton-f0f5de23.js";import"./FSClickable-b2b2bac7.js";import"./FSCard-be090350.js";import"./FSIcon-84236a8c.js";import"./useRules-30f7bcaa.js";import"./VTextField-4e99c7f1.js";import"./index-8f8aa2a2.js";import"./useTranslations-5148abf7.js";const X={title:"Foundation/Shared/Input fields/SearchField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(n,{argTypes:i})=>({components:{FSSearchField:a,FSCol:l},props:Object.keys(i),setup(){return{...n}},template:`
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Y=["Variations"];export{e as Variations,Y as __namedExportsOrder,X as default};
