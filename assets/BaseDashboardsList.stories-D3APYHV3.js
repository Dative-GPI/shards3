import m from"./FSBaseDashboardsList-a82jA0w2.js";import{F as s}from"./FSDataTable-BZMYfHL-.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSIcon-D2mo_-bk.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-B16sP4OM.js";import"./index-_Z9wfsFC.js";import"./theme-BKYtCmay.js";import"./css-B7hQ34V-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BCDp5TRU.js";import"./color-DBJfw4cY.js";import"./FSDashboardShallowTileUI-Dak-A5j1.js";import"./FSSimpleTileUI-BO4rtoJc.js";import"./FSIconCard-Bpip9pSu.js";import"./FSCard-DwYAEOV7.js";import"./FSCol-CYWCfIBP.js";import"./FSRow-CFFgZ74C.js";import"./FSImage-DX4PKeqX.js";import"./FSImageUI-DfvkwKR7.js";import"./FSLoader-CpOtM_ow.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./VImg-I7jXrjsW.js";import"./rounded-DM_o2hWD.js";import"./transition-B83BVatf.js";import"./index-C31q_73Z.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSTile-HyyFIrRk.js";import"./FSClickable-BQ3H9eJY.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./FSCheckbox-aOsAP6ny.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./form-D8F-RrsG.js";import"./FSDashboardOrganisationTileUI-Bly34Cue.js";import"./FSDashboardOrganisationTypeTileUI-DsORCyWo.js";import"./useDashboardOrganisationTypes-BWGZtHDq.js";import"./dashboardTranslation-CCi8mM_Y.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./useDashboardOrganisations-kbzoA4Hp.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-akWuCUc3.js";import"./useUserOrganisations-B4HIo215.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-DNff4qVK.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-y-n940VK.js";import"./FSDataTableUI-CCEhRjN0.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSText-WawUBmHY.js";import"./FSSearchField-BBC3eCHt.js";import"./FSTextField-qQes8uOA.js";import"./FSBaseField-Dpf8Uwfy.js";import"./FSButton-C_Cm7MkX.js";import"./VField-2PlKy0GK.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-DaFgGsRR.js";import"./FSDialogMenu-Z-9pqcp8.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-ee8qfy-K.js";import"./FSButtonNextIcon-DPw1w2WV.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-Boww2xu7.js";import"./FSWrapGroup-WVEwtX4p.js";import"./FSFadeOut-DmK3zGT8.js";import"./FSRadio-BtiKvWUf.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VSelect-YuJ29I4v.js";import"./VMenu-9eL7kyJm.js";import"./FSDivider-DL4bwqVT.js";import"./FSChip-DqlV7bRv.js";import"./FSOptionGroup-DKaYapQu.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CCHUxMdD.js";import"./filter-iZr2_yz2.js";const ir={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const sr=["Default"];export{t as Default,sr as __namedExportsOrder,ir as default};
