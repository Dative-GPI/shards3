import{F as o}from"./FSSearchField-ffd8e882.js";import{_ as l}from"./FSCol-282cc158.js";import"./vue.esm-bundler-41eda46b.js";import"./FSTextField-77636cac.js";import"./VField-c52f5557.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-1508d56d.js";import"./css-35e8563f.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./VSpacer-63a59a9e.js";import"./useRender-dd35ddd1.js";import"./index-dc0570e5.js";import"./transition-695cd20f.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./tag-64b4b0e7.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./loader-e17cf3b4.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./FSIcon-713345eb.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./useTranslations-3bd97805.js";const W={title:"Foundation/Shared/Input fields/SearchField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(n,{argTypes:i})=>({components:{FSSearchField:o,FSCol:l},props:Object.keys(i),setup(){return{...n}},template:`
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const X=["Variations"];export{e as Variations,X as __namedExportsOrder,W as default};
