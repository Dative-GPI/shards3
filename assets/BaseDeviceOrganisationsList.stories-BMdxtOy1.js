import e from"./FSBaseDeviceOrganisationsList-C2eiWzy4.js";import{F as l}from"./FSDataTable-B4g4_hhi.js";import"./vue.esm-bundler-Zcuj-zyO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-Qp0sJ7ha.js";import"./useAppTimeZone-F2KFQp0H.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-Dz-yqRzH.js";import"./FSIcon-CgyPNi2H.js";import"./useBreakpoints-IB1lZo1P.js";import"./useColors-ix1ChreS.js";import"./index-_Z9wfsFC.js";import"./theme-DppimMvq.js";import"./css-YWErTUWV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DsLd3bsf.js";import"./color-mm3JSYKM.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSText-9xksqDv3.js";import"./useDateFormat-D_agI3IZ.js";import"./useAppLanguageCode-DjpqeQYI.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-DN7QCs30.js";import"./FSDeviceOrganisationTileUI-B8fxQO2A.js";import"./FSStatusesCarousel-BlAGywnP.js";import"./FSButton-BoIGeCYX.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-BAZBeMCh.js";import"./FSCard-Bzfi7uVq.js";import"./FSCol-DLyNVOXQ.js";import"./FSRow-4Qz6Bbpg.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./FSWindow-Cnn6JjJi.js";import"./group-ATTNrdHt.js";import"./proxiedModel-Xz4IZg0a.js";import"./locale-Beavd5eP.js";import"./VBtn-CKg6JYm3.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./dimensions-BWgpWc0X.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./router-DnAkll3L.js";import"./index-CMMTOWvF.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./scopeId-CPcZlDEY.js";import"./ssrBoot-B8tyBOTn.js";import"./transition-shOmLEJh.js";import"./FSStatus-BJGQWYXQ.js";import"./FSChip-K0lp3IZK.js";import"./FSColor-D9-ntwRh.js";import"./VMenu-C3kJxa_y.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./display-Db__yhk9.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DYlD6MdT.js";import"./FSDivider-CwLA_atT.js";import"./FSImage-BP-XnLOC.js";import"./FSImageUI-DoJ4g_Bl.js";import"./FSLoader-_xEserk_.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./uuid-DTaye2KM.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSTile-Doy-G9OU.js";import"./FSCheckbox-CjWE83-y.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./index-D14OnwAh.js";import"./form-ChxmsGl9.js";import"./FSTagGroup-EdvMzC6O.js";import"./FSWrapGroup-BqZeUad0.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./FSTag-_qv0UlqG.js";import"./FSSlideGroup-DU-bqEGV.js";import"./FSButtonNextIcon-DjZD8NlX.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./useDeviceOrganisations-Cu9g9TgR.js";import"./hubFactory-Z_MriFu2.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-AEqpN8xh.js";import"./FSSearchField-B8DisBza.js";import"./FSTextField-CrTD4dZ4.js";import"./FSBaseField-D6coCLKM.js";import"./VField-BtCsV974.js";import"./FSSelectField-ChVaysRs.js";import"./VList-XQT_dn4P.js";import"./VDialog-TaqcJ_9B.js";import"./FSToggleSet-fGAubtCV.js";import"./FSFadeOut-Bg0MxJuT.js";import"./FSRadio-Bi0gm8Uf.js";import"./VSelect-Dm4vxNUu.js";import"./FSOptionGroup-BjPm1a_Q.js";import"./filter-C1K_d8Vd.js";import"./filter-DiySb8XN.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
