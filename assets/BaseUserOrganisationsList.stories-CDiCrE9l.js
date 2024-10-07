import e from"./FSBaseUserOrganisationsList-B0MPotQn.js";import{F as l}from"./FSDataTable-D-Vw4zo7.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSpan-WKxYfmnu.js";import"./useBreakpoints-DVmyWqF2.js";import"./useSlots-zwOl0abH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-DYrQmZ2M.js";import"./FSImageUI-DRh0C2Kt.js";import"./FSLoader-BuPx1Vmx.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./css-rhgMLwoH.js";import"./color-B0htL_ZM.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./VImg-Bj7MyRJQ.js";import"./rounded-C73YOAN4.js";import"./transition-BvKGRC-_.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTagGroup-DIVU5VWH.js";import"./FSWrapGroup-L0hGNovc.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./index-D2mfwXxT.js";import"./display-4460MzAg.js";import"./VIcon-Bo7R9vIQ.js";import"./resizeObserver-CTZzan_-.js";import"./FSTag-BWcm_tL1.js";import"./FSIcon-CF3g_zZI.js";import"./FSRow-D9oM1Ufa.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./density-Cf5q3L_6.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./anchor-CiFPvmMB.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-gtoPHKCV.js";import"./FSButtonNextIcon-Czmt2YBZ.js";import"./FSButton-BpyUfJIg.js";import"./FSClickable-CWKuMNrW.js";import"./FSCard-CN9NbS7f.js";import"./FSCol-DyDZsJ9U.js";import"./FSIconCheck-DxWsRqdF.js";import"./FSUserOrganisationTileUI-CcR2ImIl.js";import"./FSTile-T7YcP5W6.js";import"./FSCheckbox-CaqPs9O0.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./form-D-VMHmUh.js";import"./useTranslations-CEnu7PZQ.js";import"./useUserOrganisations-t1LTn7L9.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./users-Dlz9JeAv.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-vuXcrYWK.js";import"./vue-router-DThl0PGU.js";import"./FSText-BvtpuDSr.js";import"./FSSearchField-DhTJXKam.js";import"./FSTextField-DiTX7r-c.js";import"./FSBaseField-CVTPeQEI.js";import"./VField-Bf3tV3N7.js";import"./forwardRefs-DWGaNmQL.js";import"./FSSelectField-BxqOi3HU.js";import"./FSDialogMenu-B5BSmELO.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./lazy-Bq8C33UW.js";import"./FSToggleSet-C0KkFsPn.js";import"./FSFadeOut-BkMq8VeO.js";import"./FSRadio-vBBbKX-y.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./VSelect-7B3TLkE6.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-Dkj5LzZl.js";import"./FSChip-lauGnn4d.js";import"./FSOptionGroup-BMa6Hpmw.js";import"./filter-C1K_d8Vd.js";import"./filter-pNTMaczj.js";const tt={title:"Foundation/Core/Lists/Base Lists/BaseUserOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["users1","users2"]}}},r={render:o=>({components:{FSBaseUserOrganisationsList:e},setup(){return{args:o}},template:`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{modelValue:[],tableCode:"users1"}},t={render:o=>({components:{FSBaseUserOrganisationsList:e},setup(){return{args:o}},template:`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{modelValue:[],tableCode:"users2"}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    modelValue: [],
    tableCode: 'users1'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    modelValue: [],
    tableCode: 'users2'
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const ot=["Default","Variant1"];export{r as Default,t as Variant1,ot as __namedExportsOrder,tt as default};
