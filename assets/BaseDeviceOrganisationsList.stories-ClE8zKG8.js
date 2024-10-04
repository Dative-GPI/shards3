import e from"./FSBaseDeviceOrganisationsList-DMzO8Out.js";import{F as l}from"./FSDataTable-D7-qsLUW.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-BD1Oop2j.js";import"./useAppTimeZone-DLNqwrXb.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-C0Ilc_s3.js";import"./FSIcon-DUHP8dRZ.js";import"./css-DVhR3h-A.js";import"./useColors-3CjboYRA.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSText-CNEZo4Pd.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDeviceOrganisationTileUI-WCTMNwY4.js";import"./FSStatusesCarousel-CAyKlInB.js";import"./FSButton-CVLEcQTp.js";import"./FSClickable-DB2xZ1ce.js";import"./FSCard-CPhdbHks.js";import"./FSCol-Bj1WIVag.js";import"./FSRow-D4JfwQlG.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSWindow-DDikhtYS.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./locale-BGMMnFfJ.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./density-Cf5q3L_6.js";import"./elevation-DH_sKWqU.js";import"./rounded-C73YOAN4.js";import"./dimensions-Cku-Ba4r.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./lazy-Bq8C33UW.js";import"./ssrBoot-QID7OAaG.js";import"./transition-BvKGRC-_.js";import"./FSStatus-B8b62UoX.js";import"./FSChip-DY3DJn_Y.js";import"./FSColor-BAntcGmp.js";import"./VMenu-OPxqXTkz.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./display-4460MzAg.js";import"./alertsTools-GJa9QMZQ.js";import"./FSDivider-0W_WexQW.js";import"./FSImage-fu-NJHjv.js";import"./FSImageUI-CQtB8kyI.js";import"./FSLoader-S8abBhij.js";import"./VImg-Bj7MyRJQ.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTile-ENDmX5_M.js";import"./FSCheckbox-DZWstXnV.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./FSTagGroup-CYn3-xip.js";import"./FSWrapGroup-C-l9ybIX.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./FSTag-BRs_Wya7.js";import"./FSSlideGroup-l9gZ_81L.js";import"./FSButtonNextIcon-Byp9YOIJ.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./useDeviceOrganisations-eVcYZlMe.js";import"./hubFactory-BKr-Plm6.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-83I2QAht.js";import"./vue-router-DThl0PGU.js";import"./FSSearchField-B0yI9yuZ.js";import"./FSTextField-KbqtOOXa.js";import"./FSBaseField-CkKSPx2p.js";import"./VSpacer-DLFo12A6.js";import"./VField-Bf3tV3N7.js";import"./FSSelectField-TRkQNw1Z.js";import"./FSDialogMenu-B1YbpCEf.js";import"./VDialog-B02D0PNk.js";import"./FSToggleSet-D1nUZzQm.js";import"./FSFadeOut-BVg8JJoP.js";import"./FSRadio-CKmzEXUE.js";import"./VList-Cl6AOEM5.js";import"./VSelect-DZ_uFpFv.js";import"./FSOptionGroup-Byk9yYFA.js";import"./filter-C1K_d8Vd.js";import"./filter-pNTMaczj.js";const gt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Ot=["Default","CustomProperties"];export{t as CustomProperties,o as Default,Ot as __namedExportsOrder,gt as default};
