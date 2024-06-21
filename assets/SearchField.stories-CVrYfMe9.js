import{F as o}from"./FSSearchField-CdKhC7Ro.js";import{_ as l}from"./FSCol-BBaW1DrL.js";import"./vue.esm-bundler-DUki7rNA.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./FSSpan-DUTdSgpN.js";import"./useSlots-BZu_lZyn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CHgEOZQb.js";import"./css-BPLLlL3Y.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./VSpacer-CujVv6t6.js";import"./useRender-pAH_6Aah.js";import"./index-zNldQLkd.js";import"./transition-CAmaHrck.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./VIcon-BfI5ony8.js";import"./color-B6JLWHIR.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./anchor-32zVg6UX.js";import"./rounded-CuOTz_ni.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./FSCard-CqpJmiEC.js";import"./FSIcon-CSwom3lG.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./useTranslations-LhdkJQ98.js";const Q={title:"Foundation/Shared/Input fields/SearchField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(n,{argTypes:i})=>({components:{FSSearchField:o,FSCol:l},props:Object.keys(i),setup(){return{...n}},template:`
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const W=["Variations"];export{e as Variations,W as __namedExportsOrder,Q as default};
