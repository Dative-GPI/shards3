import e from"./FSBaseDeviceOrganisationsList-D63cAMOD.js";import{F as l}from"./FSDataTable-DlAq2OX7.js";import"./vue.esm-bundler-Zcuj-zyO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-H4bhGcPx.js";import"./useAppTimeZone-F2KFQp0H.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-DUTkCF55.js";import"./FSIcon-CKEWDmaC.js";import"./useBreakpoints-IB1lZo1P.js";import"./useColors-Cz5tOQmp.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./css-YWErTUWV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DsLd3bsf.js";import"./color-mm3JSYKM.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSText-DqK2dTtm.js";import"./useDateFormat-D7zk4317.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DjpqeQYI.js";import"./useTranslations-DN7QCs30.js";import"./FSDeviceOrganisationTileUI-TilaZ_xb.js";import"./FSStatusesCarousel-DNVvgiQM.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./FSCol-DLyNVOXQ.js";import"./FSRow-4Qz6Bbpg.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./FSWindow-Cnn6JjJi.js";import"./group-ATTNrdHt.js";import"./proxiedModel-Xz4IZg0a.js";import"./locale-Beavd5eP.js";import"./VBtn-CKg6JYm3.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./dimensions-BWgpWc0X.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./router-DnAkll3L.js";import"./index-CMMTOWvF.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./scopeId-CPcZlDEY.js";import"./ssrBoot-B8tyBOTn.js";import"./transition-shOmLEJh.js";import"./FSStatus-FnKfZ3sp.js";import"./FSChip-DMpdcIDo.js";import"./FSColor-B8iHsn2b.js";import"./VMenu-C3kJxa_y.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./display-Db__yhk9.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DpPwu707.js";import"./FSDivider-DOHnDXxM.js";import"./FSImage-BYLHEFm3.js";import"./FSImageUI-Q0M2a9Ft.js";import"./FSLoader-CRmsosiO.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./useImages-B4PSfnOs.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./uuid-DTaye2KM.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSTile-dJi94q2j.js";import"./FSCheckbox-CunxM6rm.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./index-D14OnwAh.js";import"./form-ChxmsGl9.js";import"./FSTagGroup-CWOOUSdp.js";import"./FSWrapGroup-DSD82cKU.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./FSTag-CHJ-tL1L.js";import"./FSSlideGroup-CtBhRuPR.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./useDeviceOrganisations-Cu9g9TgR.js";import"./hubFactory-Z_MriFu2.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-Cipm8N-2.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./VField-BtCsV974.js";import"./FSSelectField-ChNtQfMF.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./FSOptionGroup-DJl0hUWz.js";import"./filter-C1K_d8Vd.js";import"./filter-DiySb8XN.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
