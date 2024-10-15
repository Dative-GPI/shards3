import{F as o}from"./FSMagicConfigField-C9MEDkap.js";import{F as n}from"./FSCol-CYWCfIBP.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./useMagicFieldProvider-CTwQ5BuZ.js";import"./iframe-D1wTwsj0.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-DsoSkASx.js";import"./FSButton-D5EwxixH.js";import"./FSClickable-BhVwKM7P.js";import"./FSCard-B1dz5tzT.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CeHYzu6a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CX_N7n5F.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-8KdV556C.js";import"./FSButtonAddIcon-Dv0rxXzz.js";import"./FSTranslateField-lWu0LVBI.js";import"./FSDialogSubmit-CaTMfeFK.js";import"./FSFadeOut-BcBUJmEE.js";import"./uuid-DTaye2KM.js";import"./FSDialog-DzfqE8cE.js";import"./FSText-GEqj0Yf_.js";import"./VSpacer-Di7g3RCw.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Atn7Z0Ko.js";import"./anchor-0mwNUa2-.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./locale-BJQwrXJ7.js";import"./router-DxFny788.js";import"./transition-DhTIerNz.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./useTranslations-BehwFxDb.js";import"./FSTextField-CB_VZ4XI.js";import"./FSBaseField-CMNvz_3q.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./rounded-ErtzAGHK.js";import"./index-DS9MhfY5.js";import"./useAppLanguages-D2v8pp4o.js";import"./rules-C-NbTnZJ.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useAppTimeZone-ByDiY2xy.js";import"./time-IoQ6C2aa.js";const Sl={title:"Foundation/Shared/Input fields/MagicConfigField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:"",labelDefault7:"TimeStepField",translations7:[],value7:""}},render:(i,{argTypes:r})=>({components:{FSMagicConfigField:o,FSCol:n},props:Object.keys(r),setup(){return{...i}},template:`
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
    </FSCol>`})};var t,e,a;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(e=l.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const hl=["Variations"];export{l as Variations,hl as __namedExportsOrder,Sl as default};
