import e from"./FSBaseDeviceOrganisationsList-C4D67tOH.js";import{F as l}from"./FSDataTable-BShPL8J4.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-B8x4LUMj.js";import"./useAppTimeZone-DLNqwrXb.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-BwY5yrgA.js";import"./FSIcon-kERq0rd3.js";import"./useBreakpoints-INFVV7da.js";import"./useColors-3CjboYRA.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./css-BWDYXGFo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./FSText-BprvNhQU.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDeviceOrganisationTileUI-qJNIo0sA.js";import"./FSStatusesCarousel-M7-XDlYt.js";import"./FSButton-C0E8ILJw.js";import"./FSClickable-DTqk3LMl.js";import"./FSCard-BOEac87c.js";import"./FSCol-CvoATp5Q.js";import"./FSRow-BnsweOMX.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSWindow-u9yijpRq.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./locale-BGMMnFfJ.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./density-Cf5q3L_6.js";import"./elevation-DH_sKWqU.js";import"./rounded-C73YOAN4.js";import"./dimensions-Cku-Ba4r.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./lazy-Bq8C33UW.js";import"./ssrBoot-QID7OAaG.js";import"./transition-BvKGRC-_.js";import"./FSStatus-BO4XJ0tD.js";import"./FSChip-pd_qYx-T.js";import"./FSColor-DkYRdZUM.js";import"./VMenu-OPxqXTkz.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./display-4460MzAg.js";import"./alertsTools-GJa9QMZQ.js";import"./FSDivider-DZHImm1x.js";import"./FSImage-B-39KzjK.js";import"./FSImageUI-D_hk6NSn.js";import"./FSLoader-DzvXQnnL.js";import"./VImg-Bj7MyRJQ.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTile-uPMPyLYL.js";import"./FSCheckbox-BnhjVDBp.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./FSTagGroup-BepNBgT9.js";import"./FSWrapGroup-Cj-lYBpD.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./FSTag-BbhTDhhC.js";import"./FSSlideGroup-CDRvV-qZ.js";import"./FSButtonNextIcon-BAVwN0SI.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./useDeviceOrganisations-eVcYZlMe.js";import"./hubFactory-BKr-Plm6.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-BCalqJ6e.js";import"./vue-router-DThl0PGU.js";import"./FSSearchField-OYD9-eLG.js";import"./FSTextField-JGjjGRZ0.js";import"./FSBaseField-D0m8YJR6.js";import"./VSpacer-DLFo12A6.js";import"./VField-Bf3tV3N7.js";import"./FSSelectField-j-0AWxHb.js";import"./FSDialogMenu-pzU7lUOk.js";import"./VDialog-B02D0PNk.js";import"./FSToggleSet-XllH3ja9.js";import"./FSFadeOut-DxMiSoxL.js";import"./FSRadio-vYSNhBy9.js";import"./VList-Cl6AOEM5.js";import"./VSelect-B1CQJS6i.js";import"./FSOptionGroup-D5fsukip.js";import"./filter-C1K_d8Vd.js";import"./filter-pNTMaczj.js";const Ot={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
