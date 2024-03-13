import{F as n}from"./FSSearchField-d86ece0a.js";import{_ as l}from"./FSCol-df85c70b.js";import"./vue.esm-bundler-72feb788.js";import"./FSTextField-a3210dbc.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-ae483077.js";import"./css-a2b3c3ca.js";import"./VField-127bd01f.js";import"./index-1ae89502.js";import"./useRender-dfda60e7.js";import"./theme-dfac1c87.js";import"./transition-2c0bfa39.js";import"./VInput-d8a8ef30.js";import"./locale-6e33b40c.js";import"./VIcon-7b60b4e1.js";import"./color-20078b56.js";import"./tag-4c4a02ef.js";import"./density-849fb56f.js";import"./loader-dcf07c4a.js";import"./rounded-98e7d656.js";import"./forwardRefs-e658ad70.js";import"./useColors-6caee65d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-3481543d.js";import"./VTextField-6c3de945.js";import"./index-2f035a23.js";import"./FSButton-ead951eb.js";import"./vue-router-c36f9e85.js";import"./FSCard-619e60a0.js";import"./FSIcon-072b4761.js";import"./useTranslations-3d964ba1.js";const B={title:"Foundation/Shared/Input fields/SearchField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(o,{argTypes:i})=>({components:{FSSearchField:n,FSCol:l},props:Object.keys(i),setup(){return{...o}},template:`
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
