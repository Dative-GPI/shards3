import{F as o}from"./FSMagicConfigField-BZuvsrUV.js";import{_ as n}from"./FSCol-CkM6DP-d.js";import"./vue.esm-bundler-DC82FEWN.js";import"./useMagicFieldProvider-DKOU8cvY.js";import"./iframe-CI6BRGYT.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-I88pn-xf.js";import"./FSButton-Dt6DpUVX.js";import"./FSClickable-D1l62sMQ.js";import"./FSCard-CQ3lfryo.js";import"./FSRow-BPJXOzs-.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CXl0hRe0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./VProgressCircular-D8KFt_en.js";import"./color-BhlhQtQT.js";import"./VIcon-uFUcYN4x.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-BZTGzEA5.js";import"./FSTranslateField-ClLb9gsF.js";import"./FSDialogSubmit-34Nto5EV.js";import"./FSFadeOut-DJfcYfqT.js";import"./uuid-DTaye2KM.js";import"./FSDialog-BUB0hUT_.js";import"./FSText-BKbsNqc2.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-CYw7-KgF.js";import"./anchor-CLTIcUx3.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./locale-BC9z6YbT.js";import"./router-CRaPYJ7n.js";import"./transition-CJbyFvkq.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./VSpacer-CMZ7Jymr.js";import"./useTranslations-DV-taHAL.js";import"./FSTextField-BHg2KNCG.js";import"./VField-C3DtoroY.js";import"./index-DWl9tX7E.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./density-XYshZx8z.js";import"./loader-CTRePS7y.js";import"./rounded-TFXDyxjJ.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useLanguages-CGyTN8dQ.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./rules-7irbuYYZ.js";import"./useAppTimeZone-DYaMfp9l.js";import"./time-xMV0WbLU.js";const bl={title:"Foundation/Shared/Input fields/MagicConfigField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:""}},render:(i,{argTypes:r})=>({components:{FSMagicConfigField:o,FSCol:n},props:Object.keys(r),setup(){return{...i}},template:`
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
}`,...(a=(t=l.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const fl=["Variations"];export{l as Variations,fl as __namedExportsOrder,bl as default};
