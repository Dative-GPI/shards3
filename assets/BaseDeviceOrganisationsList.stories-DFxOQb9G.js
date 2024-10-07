import e from"./FSBaseDeviceOrganisationsList-B4j5A_5k.js";import{F as l}from"./FSDataTable-D-Vw4zo7.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-CK5uQ-7d.js";import"./useAppTimeZone-DLNqwrXb.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-DxWsRqdF.js";import"./FSIcon-CF3g_zZI.js";import"./useBreakpoints-DVmyWqF2.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./css-rhgMLwoH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSSpan-WKxYfmnu.js";import"./useSlots-zwOl0abH.js";import"./FSText-BvtpuDSr.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDeviceOrganisationTileUI-DKJ6sqne.js";import"./FSStatusesCarousel-4ZrdU6tu.js";import"./FSButton-BpyUfJIg.js";import"./FSClickable-CWKuMNrW.js";import"./FSCard-CN9NbS7f.js";import"./FSCol-DyDZsJ9U.js";import"./FSRow-D9oM1Ufa.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSWindow-DlacLTla.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./locale-BGMMnFfJ.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./density-Cf5q3L_6.js";import"./elevation-DH_sKWqU.js";import"./rounded-C73YOAN4.js";import"./dimensions-Cku-Ba4r.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./lazy-Bq8C33UW.js";import"./ssrBoot-QID7OAaG.js";import"./transition-BvKGRC-_.js";import"./FSStatus-ZA_89Ny_.js";import"./FSChip-lauGnn4d.js";import"./FSColor-WTKpWCLm.js";import"./VMenu-OPxqXTkz.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./display-4460MzAg.js";import"./alertsTools-Cq53NPa_.js";import"./FSDivider-Dkj5LzZl.js";import"./FSImage-DYrQmZ2M.js";import"./FSImageUI-DRh0C2Kt.js";import"./FSLoader-BuPx1Vmx.js";import"./VImg-Bj7MyRJQ.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTile-T7YcP5W6.js";import"./FSCheckbox-CaqPs9O0.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./FSTagGroup-DIVU5VWH.js";import"./FSWrapGroup-L0hGNovc.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./FSTag-BWcm_tL1.js";import"./FSSlideGroup-gtoPHKCV.js";import"./FSButtonNextIcon-Czmt2YBZ.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./useDeviceOrganisations-eVcYZlMe.js";import"./hubFactory-BKr-Plm6.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-vuXcrYWK.js";import"./vue-router-DThl0PGU.js";import"./FSSearchField-DhTJXKam.js";import"./FSTextField-DiTX7r-c.js";import"./FSBaseField-CVTPeQEI.js";import"./VSpacer-DLFo12A6.js";import"./VField-Bf3tV3N7.js";import"./FSSelectField-BxqOi3HU.js";import"./FSDialogMenu-B5BSmELO.js";import"./VDialog-B02D0PNk.js";import"./FSToggleSet-C0KkFsPn.js";import"./FSFadeOut-BkMq8VeO.js";import"./FSRadio-vBBbKX-y.js";import"./VList-Cl6AOEM5.js";import"./VSelect-7B3TLkE6.js";import"./FSOptionGroup-BMa6Hpmw.js";import"./filter-C1K_d8Vd.js";import"./filter-pNTMaczj.js";const Ot={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const vt=["Default","CustomProperties"];export{t as CustomProperties,o as Default,vt as __namedExportsOrder,Ot as default};
