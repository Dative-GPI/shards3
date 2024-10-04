import m from"./FSBaseDashboardsList-Ca9vuiVy.js";import{F as s}from"./FSDataTable-D7-qsLUW.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSIcon-DUHP8dRZ.js";import"./css-DVhR3h-A.js";import"./useColors-3CjboYRA.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSDashboardShallowTileUI-CwIUrtdz.js";import"./FSSimpleTileUI-BHnhCTjp.js";import"./FSIconCard-BQHJxY0n.js";import"./FSCard-CPhdbHks.js";import"./FSCol-Bj1WIVag.js";import"./FSRow-D4JfwQlG.js";import"./FSImage-fu-NJHjv.js";import"./FSImageUI-CQtB8kyI.js";import"./FSLoader-S8abBhij.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./VImg-Bj7MyRJQ.js";import"./rounded-C73YOAN4.js";import"./transition-BvKGRC-_.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSTile-ENDmX5_M.js";import"./FSClickable-DB2xZ1ce.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSCheckbox-DZWstXnV.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./FSDashboardOrganisationTileUI-DDdN3sOJ.js";import"./FSDashboardOrganisationTypeTileUI-CWrv1ek_.js";import"./useDashboardOrganisationTypes-BvzdPd0m.js";import"./dashboardTranslation-DrunH9d2.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./useDashboardOrganisations-BPwICFB4.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-CDfWwfZ-.js";import"./useUserOrganisations-t1LTn7L9.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-DicskG1O.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-83I2QAht.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSText-CNEZo4Pd.js";import"./FSSearchField-B0yI9yuZ.js";import"./FSTextField-KbqtOOXa.js";import"./FSBaseField-CkKSPx2p.js";import"./FSButton-CVLEcQTp.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-TRkQNw1Z.js";import"./FSDialogMenu-B1YbpCEf.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-l9gZ_81L.js";import"./FSButtonNextIcon-Byp9YOIJ.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-D1nUZzQm.js";import"./FSWrapGroup-C-l9ybIX.js";import"./FSFadeOut-BVg8JJoP.js";import"./FSRadio-CKmzEXUE.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VSelect-DZ_uFpFv.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-0W_WexQW.js";import"./FSChip-DY3DJn_Y.js";import"./FSOptionGroup-Byk9yYFA.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";const mr={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
      <FSBaseDashboardsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dashboards1"}};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDashboardsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDashboardsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dashboards1'
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const ir=["Default"];export{t as Default,ir as __namedExportsOrder,mr as default};
