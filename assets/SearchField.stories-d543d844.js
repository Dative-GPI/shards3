import{F as n}from"./FSSearchField-c4dc2a8e.js";import{_ as l}from"./FSCol-df85c70b.js";import"./vue.esm-bundler-72feb788.js";import"./FSTextField-a3e482ba.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-ae483077.js";import"./css-a2b3c3ca.js";import"./VField-aa8d0612.js";import"./index-71844868.js";import"./useRender-c1d2bc01.js";import"./theme-1fe57d71.js";import"./transition-b3b454fb.js";import"./VInput-273bf99c.js";import"./locale-8250cc46.js";import"./VIcon-cb64ea3c.js";import"./color-564bd659.js";import"./tag-39781742.js";import"./density-9047996c.js";import"./loader-d80eacaf.js";import"./rounded-1c8889d4.js";import"./forwardRefs-e658ad70.js";import"./useColors-1fcec14a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-9ee9e868.js";import"./VTextField-4b986ab3.js";import"./index-348a046d.js";import"./FSButton-051e4a14.js";import"./vue-router-c36f9e85.js";import"./FSCard-692a57a9.js";import"./FSIcon-f69578a9.js";import"./useTranslations-3d964ba1.js";const B={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(o,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...o}},template:`
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
