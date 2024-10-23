import e from"./FSBaseDeviceOrganisationsList-Bsxxz208.js";import{F as l}from"./FSDataTable-BL1Qy4HU.js";import"./vue.esm-bundler-l-siv0w9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-77Cl3ly9.js";import"./useAppTimeZone-gpO-zv_9.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-BXgFN8kO.js";import"./FSIcon-sBizf6C-.js";import"./useBreakpoints-mbnqo5a1.js";import"./useColors-_VkINegi.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./css-C_oz6kYw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./FSText-Cnymv_XE.js";import"./useDateFormat-BNPZ7oj9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useTranslations-CJK8D24x.js";import"./FSDeviceOrganisationTileUI-zMJLfK4h.js";import"./FSStatusesCarousel-CZxK5suq.js";import"./FSButton-BJI5MpMt.js";import"./FSClickable-V0Na2XEk.js";import"./FSCard-DID5L9tx.js";import"./FSCol-DD5MeAoT.js";import"./FSRow-BjeBkMPV.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./FSWindow-RglzuROT.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./locale-CTwwbPAi.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";import"./transition-AZsQzdUZ.js";import"./FSStatus-BjIGizAo.js";import"./FSChip-4qFi6EX1.js";import"./FSColor-C5BPeIKQ.js";import"./VMenu-DQq2E1HW.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BWzbFTnS.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-COnMFUur.js";import"./FSDivider-BINwzO58.js";import"./FSImage-ihV3tsSh.js";import"./FSImageUI-D_PUGA5p.js";import"./FSLoader-N5M2d1wd.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTile-j5yKVznv.js";import"./FSCheckbox-CdzKHZh_.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./form-CLJq5y5w.js";import"./FSTagGroup-D0nwk4_R.js";import"./FSWrapGroup-B8fxO46S.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./FSTag-S4ABqczi.js";import"./FSSlideGroup-CHXCfQIs.js";import"./FSButtonNextIcon-Oq-oGe9E.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./useDeviceOrganisations-CornMTT5.js";import"./hubFactory-sHCY8yvr.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-CC3lwkB9.js";import"./vue-router-C4bv40Tb.js";import"./FSSearchField-BEe0Y2QL.js";import"./FSTextField-DvwDf1ul.js";import"./FSBaseField-lAwl7qG_.js";import"./VField-DaI8sxeG.js";import"./FSSelectField-CRgA8U3n.js";import"./FSDialogMenu-DNAKgtJ7.js";import"./VDialog-BXBtUIC2.js";import"./FSToggleSet-C8ezMOJj.js";import"./FSFadeOut-BSloJqBX.js";import"./FSRadio-BGfCIA4z.js";import"./VList-Bzb582fb.js";import"./VSelect-CoeNB1mG.js";import"./FSOptionGroup-Ca1i4hGB.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})},t={args:{modelValue:[],tableCode:"devices2",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices1',
    connectedOnly: false
  },
  render: args => ({
    components: {
      FSBaseDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices2',
    connectedOnly: false
  },
  render: args => ({
    components: {
      FSBaseDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Ct=["Default","CustomProperties"];export{t as CustomProperties,o as Default,Ct as __namedExportsOrder,vt as default};
