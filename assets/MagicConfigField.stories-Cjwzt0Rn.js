import{F as o}from"./FSMagicConfigField-B0t35kXZ.js";import{_ as r}from"./FSCol-B2fYQH2g.js";import"./vue.esm-bundler-BSwA4uJo.js";import"./useMagicFieldProvider-CJxVRWFg.js";import"./iframe-Drfa7gQE.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-XI7jaCxc.js";import"./FSButton-BsHdwUXb.js";import"./FSClickable-DxIbWXqH.js";import"./FSCard-Dku7tZ0W.js";import"./FSRow-C55kyKDN.js";import"./css-DuQjrBfn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./VProgressCircular-Dac4kH3U.js";import"./color-D9V7QeIP.js";import"./tag-VYeYJ1FC.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSIcon-BnX9YboA.js";import"./VIcon-5UD9vI9m.js";import"./FSTranslateField-BZEUoMD0.js";import"./FSDialogSubmit-BiCGTrRF.js";import"./FSFadeOut-uPE_tDk4.js";import"./uuid-DTaye2KM.js";import"./FSDialog-CR4nFGhy.js";import"./FSText-Bql3IFAZ.js";import"./VSpacer-Bggt-xuP.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DL-L2p1V.js";import"./anchor-CkzTvcVP.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./locale-CpxwvVE1.js";import"./router-Cl1v_ijq.js";import"./transition-_APBsTwD.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./useTranslations-9ULn9k53.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./density-DkgHqMu0.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./rounded-CO2AQG9_.js";import"./index-BhqZCjBr.js";import"./useAppLanguages-DEvopncb.js";import"./rules-DdihKcr3.js";import"./useDateFormat-9LaNcSHJ.js";import"./useAppLanguageCode-DTo4I1JE.js";import"./useAppTimeZone-DGCoteSQ.js";import"./time-BLpKSpNP.js";const fl={title:"Foundation/Shared/Input fields/MagicConfigField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:"",labelDefault7:"TimeStepField",translations7:[],value7:""}},render:(i,{argTypes:n})=>({components:{FSMagicConfigField:o,FSCol:r},props:Object.keys(n),setup(){return{...i}},template:`
    <FSCol>
      <FSMagicConfigField
        label="Number field"
        :type="1"
        v-model:translations="args.translations1"
        v-model:labelDefault="args.labelDefault1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time step field"
        :type="7"
        v-model:translations="args.translations7"
        v-model:labelDefault="args.labelDefault7"
        v-model="args.value7"
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
      value6: "",
      labelDefault7: "TimeStepField",
      translations7: [],
      value7: ""
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
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time step field"
        :type="7"
        v-model:translations="args.translations7"
        v-model:labelDefault="args.labelDefault7"
        v-model="args.value7"
      />
    </FSCol>\`
  })
}`,...(a=(t=l.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const Fl=["Variations"];export{l as Variations,Fl as __namedExportsOrder,fl as default};
