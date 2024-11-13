import e from"./FSBaseDeviceOrganisationsList-B33GRugw.js";import{F as l}from"./FSDataTable-CGLmPZwM.js";import"./vue.esm-bundler-l-siv0w9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-CYwWcXiz.js";import"./useAppTimeZone-BUrTBgYP.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-C8AOFwNk.js";import"./FSIcon-CxSeYbPm.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-_VkINegi.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSText-DZ8qsh3h.js";import"./useDateFormat-BROYdARO.js";import"./useAppLanguageCode-BzH56rSm.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-CJK8D24x.js";import"./FSDeviceOrganisationTileUI-Czkoc2YJ.js";import"./FSStatusesCarousel-BTJ5YfzA.js";import"./FSButton-CTjpHGCH.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DMSoEBu-.js";import"./FSCard-CZcF3hjs.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./FSWindow-tyjsnE42.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./locale-CTwwbPAi.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";import"./transition-AZsQzdUZ.js";import"./FSStatus-CoMnXZ0q.js";import"./FSChip-BFgV4ZSA.js";import"./FSColor-BRIZeGMR.js";import"./VMenu-DQq2E1HW.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BWzbFTnS.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-dS76cJK6.js";import"./FSDivider-C3j1LEO0.js";import"./FSImage-B0cnyxMj.js";import"./FSImageUI-BlKs_vZE.js";import"./FSLoader-ylzW_XnC.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./imageDetails-D_m1_Geu.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./uuid-DTaye2KM.js";import"./composableFactory-03a1Iisa.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTile-C8Nuf3UQ.js";import"./FSCheckbox--v2KMIeD.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./form-CLJq5y5w.js";import"./FSTagGroup-maNMHqy6.js";import"./FSWrapGroup-D1OyNKn_.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./FSTag-CpeIH9kv.js";import"./FSSlideGroup-7mPn_F6a.js";import"./FSButtonNextIcon-BhVekJEg.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./useDeviceOrganisations-Dk3tXe6y.js";import"./hubFactory-sHCY8yvr.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-Bm-AvR4B.js";import"./FSSearchField-SdnmrqYS.js";import"./FSTextField-xeLxZAxc.js";import"./FSBaseField-Bt-M24lA.js";import"./VField-DaI8sxeG.js";import"./FSSelectField-u0SLXmfT.js";import"./VList-tnBIxltW.js";import"./VDialog-BXBtUIC2.js";import"./FSToggleSet-BtOljEfB.js";import"./FSFadeOut-9Mm6vijG.js";import"./FSRadio-CqpA7Dwr.js";import"./VSelect-D2Q6-t0S.js";import"./FSOptionGroup-CSus1HeV.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
