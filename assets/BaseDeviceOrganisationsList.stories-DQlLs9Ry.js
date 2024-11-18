import e from"./FSBaseDeviceOrganisationsList-DzJT7lOZ.js";import{F as l}from"./FSDataTable-DlxIKonB.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-bw7HoJ2a.js";import"./customProperties-DqkON8hk.js";import"./useAppTimeZone-Cp_499X8.js";import"./FSIconCheck-DjQiIoX0.js";import"./FSIcon-C0akNC9K.js";import"./useBreakpoints-DbdoA89o.js";import"./useColors-B-331F-F.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DBlUULm8.js";import"./color-D4nM6Ihv.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSText-CcQBLJU9.js";import"./useDateFormat-C9QY5oFQ.js";import"./useAppLanguageCode-CbHleqYG.js";import"./startOfWeek-uXTpkxA4.js";import"./datesTools-jb_azIFs.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-Dmqoe3Kp.js";import"./FSDeviceOrganisationTileUI-DyYH9f2T.js";import"./FSStatusesCarousel-h-CAaSdy.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSCard-BZyb3dNk.js";import"./FSCol-CVj0zcU5.js";import"./FSRow-CYD73_tT.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./FSWindow-DqyIK3y_.js";import"./group-BJiCY4dd.js";import"./proxiedModel-BmbZrdih.js";import"./lazy-BmZjQX7F.js";import"./ssrBoot-Cn3QeRqO.js";import"./transition-DtcXiLpW.js";import"./locale-R8GaLlvb.js";import"./VBtn-DIpB4JrY.js";import"./border-DWowyKy3.js";import"./density-CRkSANTr.js";import"./elevation-C84Wb_jC.js";import"./rounded-CG6jOZvY.js";import"./dimensions-D-jSeqs8.js";import"./loader-BvdvxiyE.js";import"./anchor-BMg_Hu1U.js";import"./router-BPv_tYld.js";import"./index-CZbNBjVV.js";import"./VDefaultsProvider-EJiha1S2.js";import"./FSStatus-LfASusfJ.js";import"./FSChip-CyfHnFR3.js";import"./FSColor-CoDQIbAu.js";import"./VMenu-DPuNMseR.js";import"./VOverlay-CsDtmGQB.js";import"./forwardRefs-DWGaNmQL.js";import"./display-1bSD02Hb.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-BS2bJTaH.js";import"./FSDivider-jFrTxQOo.js";import"./FSImage-BwiE9qIQ.js";import"./FSImageUI-DPxZyIow.js";import"./FSLoader-BdvsvlI6.js";import"./VImg-vN6S5DJZ.js";import"./index-BuamrmjQ.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./FSTile-Bl0RN2m-.js";import"./FSCheckbox-BdK031Hz.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./form-thVqu4eJ.js";import"./FSTagGroup-DXeygGL2.js";import"./FSWrapGroup-scy4OXYc.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./FSTag-t0YobQoW.js";import"./FSSlideGroup-BpHGQHKq.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";import"./useDeviceOrganisations-CII15Wc-.js";import"./hubFactory-BFjCdo5p.js";import"./deviceConnectivityDetails-d_lSsQP-.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-DPRubWn9.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./VField-Ddzu1ph-.js";import"./FSSelectField-BKxSDF0S.js";import"./VList-_wRy0k6Y.js";import"./VDialog-BD5hoh70.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./FSOptionGroup-6zwPUnvh.js";import"./filter-C1K_d8Vd.js";import"./filter-CS3Mhwo2.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
