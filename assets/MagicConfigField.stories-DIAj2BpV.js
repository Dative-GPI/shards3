import{F as o}from"./FSMagicConfigField-B6x9QM5F.js";import{_ as n}from"./FSCol-BeN4b608.js";import"./vue.esm-bundler-ClF7U4Dq.js";import"./useMagicFieldProvider-aXHqhYk2.js";import"./iframe-BRFX5ZZa.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-CgQpLNEF.js";import"./FSButton-Cqu01o0F.js";import"./FSClickable-heovQq91.js";import"./FSCard-BkPZ_hGw.js";import"./FSRow-a7Q-CB2x.js";import"./css-CBTOQ7jk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./VProgressCircular-BkN7ESng.js";import"./color-BdD0bzys.js";import"./useRender-BYKEQvkC.js";import"./resizeObserver-CVlMOAbf.js";import"./VIcon-MLStchlj.js";import"./tag--UF77zYE.js";import"./FSSpan-CFY7ptgg.js";import"./useSlots-CFCV5ffn.js";import"./FSIcon-CcDweDXn.js";import"./FSTranslateField-BE1pYesR.js";import"./FSDialogSubmit-CsGufHwC.js";import"./FSFadeOut-DGTrMc-E.js";import"./uuid-DTaye2KM.js";import"./FSDialog-CHTAgYMh.js";import"./FSText-BSNRUZzw.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-D-52zHw6.js";import"./anchor-BesKSPix.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./locale-B_wzRa96.js";import"./router-kbZLzbN_.js";import"./transition-C9cC5SGI.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./VSpacer-DYfuYgng.js";import"./useTranslations-iL6K_UJW.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./index-CZ5BSoIs.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./rounded-DApWaG-P.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./useLanguages-BD-VwSKk.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C-hWj-Am.js";import"./rules-DKZYNaes.js";import"./useAppTimeZone-UYdwQzNi.js";import"./time-BrgXc39x.js";const cl={title:"Foundation/Shared/Input fields/MagicConfigField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:""}},render:(i,{argTypes:r})=>({components:{FSMagicConfigField:o,FSCol:n},props:Object.keys(r),setup(){return{...i}},template:`
    <FSCol>
      <FSMagicConfigField
        label="Number field"
        :type="1"
        v-model:translations="args.translations1"
        v-model:labelDefault="args.labelDefault1"
        v-model:value="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model:value="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model:value="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model:value="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model:value="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model:value="args.value6"
      />
    </FSCol>`})};var e,t,a;l.parameters={...l.parameters,docs:{...(e=l.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      labelDefault1: "NumberField",
      translations1: [],
      value1: "",
      labelDefault2: "Switch",
      translations2: [],
      value2: "",
      labelDefault3: "TextField",
      translations3: [],
      value3: "",
      labelDefault4: "DateTimeField",
      translations4: [],
      value4: "",
      labelDefault5: "IconField",
      translations5: [],
      value5: "",
      labelDefault6: "TimeField",
      translations6: [],
      value6: ""
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMagicConfigField,
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
      <FSMagicConfigField
        label="Number field"
        :type="1"
        v-model:translations="args.translations1"
        v-model:labelDefault="args.labelDefault1"
        v-model:value="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model:value="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model:value="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model:value="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model:value="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model:value="args.value6"
      />
    </FSCol>\`
  })
}`,...(a=(t=l.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const Dl=["Variations"];export{l as Variations,Dl as __namedExportsOrder,cl as default};
