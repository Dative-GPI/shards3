import e from"./FSBaseDeviceOrganisationsList-CHc_2rCf.js";import{F as l}from"./FSDataTable-NOw_AMP7.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-Dp4bO5x_.js";import"./useAppTimeZone-DLNqwrXb.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-C04ambRe.js";import"./FSIcon-vAlkpflo.js";import"./css-DVhR3h-A.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSText-BxoWgsr8.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDeviceOrganisationTileUI-DZlgEeGC.js";import"./FSStatusesCarousel-DntdXadC.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./FSCol-Bj1WIVag.js";import"./FSRow-D4JfwQlG.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSWindow-DDikhtYS.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./locale-BGMMnFfJ.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./density-Cf5q3L_6.js";import"./elevation-DH_sKWqU.js";import"./rounded-C73YOAN4.js";import"./dimensions-Cku-Ba4r.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./lazy-Bq8C33UW.js";import"./ssrBoot-QID7OAaG.js";import"./transition-BvKGRC-_.js";import"./FSStatus-54T_NWFL.js";import"./FSChip-D308mzkb.js";import"./FSColor-b-_lfIO5.js";import"./VMenu-OPxqXTkz.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./display-4460MzAg.js";import"./alertsTools-Cq53NPa_.js";import"./FSDivider-BbeeTMn-.js";import"./FSImage-D-VbLOPJ.js";import"./FSImageUI-D64m-s1x.js";import"./FSLoader-DxfJongP.js";import"./VImg-Bj7MyRJQ.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTile-CBWW7c3A.js";import"./FSCheckbox-18K-cCtB.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./FSTagGroup-BoqJeS7c.js";import"./FSWrapGroup-CRmVPaPn.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./FSTag-BRNenXXv.js";import"./FSSlideGroup-CcLnrzQE.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./useDeviceOrganisations-eVcYZlMe.js";import"./hubFactory-BKr-Plm6.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-hxDZWA7i.js";import"./vue-router-DThl0PGU.js";import"./FSSearchField-C0n2-EIx.js";import"./FSTextField-D5y-h9FL.js";import"./FSBaseField-CMqv-0AW.js";import"./VSpacer-DLFo12A6.js";import"./VField-Bf3tV3N7.js";import"./FSSelectField-DzKPXup4.js";import"./FSDialogMenu-CzbYQerh.js";import"./VDialog-B02D0PNk.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./VSelect-Q7PPqJI7.js";import"./FSOptionGroup-B1EDvnD9.js";import"./filter-C1K_d8Vd.js";import"./filter-pNTMaczj.js";const gt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
