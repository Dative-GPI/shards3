import e from"./FSBaseDeviceOrganisationsList-c_MtrkE_.js";import{F as l}from"./FSDataTable-E0xXV6Cm.js";import"./vue.esm-bundler-l-siv0w9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-D0znkHcO.js";import"./useAppTimeZone-gpO-zv_9.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-Cr5lcwf4.js";import"./FSIcon-uIr9VdFq.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSText-BwKgSTLP.js";import"./useDateFormat-BNPZ7oj9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useTranslations-CJK8D24x.js";import"./FSDeviceOrganisationTileUI-Dhht-azg.js";import"./FSStatusesCarousel-CSm6SYdV.js";import"./FSButton-DcUuAZqz.js";import"./FSClickable-Up0p3Vk8.js";import"./FSCard-DL4SLpmS.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./FSWindow-tyjsnE42.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./locale-CTwwbPAi.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";import"./transition-AZsQzdUZ.js";import"./FSStatus-C2HgDXBx.js";import"./FSChip-CH8gQQD0.js";import"./FSColor-DXUGLDNs.js";import"./VMenu-DQq2E1HW.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BWzbFTnS.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-BVSrupj-.js";import"./FSDivider-BGQcKLUS.js";import"./FSImage-ffhN4Yyt.js";import"./FSImageUI-DrOfkU7V.js";import"./FSLoader-kY4Od3NB.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTile-DX4IdlJV.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./form-CLJq5y5w.js";import"./FSTagGroup-B8vm8ffE.js";import"./FSWrapGroup-cmIYWMlH.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./FSTag-ErOwxBbY.js";import"./FSSlideGroup-CBieAKh7.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./useDeviceOrganisations-CornMTT5.js";import"./hubFactory-sHCY8yvr.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-Dq7PbXlx.js";import"./vue-router-C4bv40Tb.js";import"./FSSearchField-C1NE5kA-.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./VField-DaI8sxeG.js";import"./FSSelectField-BkUcFimZ.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSFadeOut-BUOQ-fRr.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./VSelect-CELx6cWV.js";import"./FSOptionGroup-fC8L6A7v.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
