import m from"./FSBaseDashboardsList-Czc0Rt_S.js";import{F as s}from"./FSDataTable-BY5WmpCF.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSIcon-bZBIO--g.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-DTi99Ybi.js";import"./index-_Z9wfsFC.js";import"./theme-CX_N7n5F.js";import"./css-B7hQ34V-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DzZvThha.js";import"./color-Du5JXqac.js";import"./FSDashboardShallowTileUI-BJlWa3xa.js";import"./FSSimpleTileUI-DQ8LqfPE.js";import"./FSIconCard-6_K-dXQh.js";import"./FSCard-BJoqsHyz.js";import"./FSCol-CYWCfIBP.js";import"./FSRow-CFFgZ74C.js";import"./FSImage-DB1_nYcI.js";import"./FSImageUI-BYV8o_w6.js";import"./FSLoader-Cs0-Y7mC.js";import"./dimensions-CqoZOW6j.js";import"./elevation-JfXKLVfD.js";import"./locale-BJQwrXJ7.js";import"./VImg-C1aVTsth.js";import"./rounded-ErtzAGHK.js";import"./transition-DhTIerNz.js";import"./index-DS9MhfY5.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSTile-D7fHK197.js";import"./FSClickable-BcMPomoE.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./FSCheckbox-OT0jrbQK.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-DMxVfgfA.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./index-UH0ZuYvc.js";import"./form-_oo3cshG.js";import"./FSDashboardOrganisationTileUI-DO1OSiVz.js";import"./FSDashboardOrganisationTypeTileUI-Cz3d1hUH.js";import"./useDashboardOrganisationTypes-BWGZtHDq.js";import"./dashboardTranslation-CCi8mM_Y.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./useDashboardOrganisations-kbzoA4Hp.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-akWuCUc3.js";import"./useUserOrganisations-B4HIo215.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-DNff4qVK.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-Di7g3RCw.js";import"./FSDataTableUI-D3D4LPqf.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSText-CAG3hIfn.js";import"./FSSearchField-Ci7y9TgU.js";import"./FSTextField-vq59KMNW.js";import"./FSBaseField-Dg_2QPSd.js";import"./FSButton-GcNiTEst.js";import"./VField-Do2gtyNA.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-Cyhl6VW6.js";import"./FSDialogMenu-SygzX68j.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./router-DxFny788.js";import"./FSSlideGroup-B4vdbHxq.js";import"./FSButtonNextIcon-Ck0BnSuJ.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./FSToggleSet-DiyE3dER.js";import"./FSWrapGroup-ContUtLx.js";import"./FSFadeOut-ukctYbpt.js";import"./FSRadio-yKt84OXT.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VSelect-CiMz2vvk.js";import"./VMenu-CuKNZEBs.js";import"./FSDivider-BDCUXCUT.js";import"./FSChip-ByCr1RER.js";import"./FSOptionGroup-0Leqq8qw.js";import"./filter-C1K_d8Vd.js";import"./VBtn-BUwP05fv.js";import"./filter-COIlslko.js";const ir={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
