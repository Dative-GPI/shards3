import{F as a}from"./FSSearchField-Co9Aacuk.js";import{F as i}from"./FSCol-D35grUmj.js";import{F as n}from"./FSTextField-B8oyUUoT.js";import"./vue.esm-bundler-0BaZj8Cy.js";import"./useTranslations-DJOHKWsD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./useSlots-16D6Zf08.js";import"./FSRow-CAJM3FZ0.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./FSButton-BDSx2V0J.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSCard-Dlw97Dqr.js";import"./VProgressCircular-NnNXhC5D.js";import"./color-v9Utm2wX.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSIcon-BwW5Hq8i.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";const Z={title:"Foundation/Shared/Input fields/SearchField",component:a,subcomponents:{FSTextField:n},tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},e={args:{modelValue:"",placeholder:"Type here...",label:"Search",clearable:!0,hideHeader:!1,editable:!0},render:(p,{argTypes:m})=>({components:{FSSearchField:a,FSCol:i},props:Object.keys(m),setup(){return{args:p}},template:`
    <FSCol>
      <FSSearchField
        v-model="args.modelValue"
        v-bind="args"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Type here...',
    label: 'Search',
    clearable: true,
    hideHeader: false,
    editable: true
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
        args
      };
    },
    template: \`
    <FSCol>
      <FSSearchField
        v-model="args.modelValue"
        v-bind="args"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const $=["Variations"];export{e as Variations,$ as __namedExportsOrder,Z as default};
