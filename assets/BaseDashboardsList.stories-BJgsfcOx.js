import m from"./FSBaseDashboardsList-CxQni76S.js";import{F as s}from"./FSDataTable-YI4c87ab.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSIcon-CaaGuK6D.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-BWKJNLz8.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./css-B7hQ34V-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DzZvThha.js";import"./color-Du5JXqac.js";import"./FSDashboardShallowTileUI-EXoHLrDF.js";import"./FSSimpleTileUI-BRC0YSeV.js";import"./FSIconCard-DaZBidMJ.js";import"./FSCard-C6D9gNrD.js";import"./FSCol-CYWCfIBP.js";import"./FSRow-CFFgZ74C.js";import"./FSImage-vG2AQfVz.js";import"./FSImageUI-DUeC9pFd.js";import"./FSLoader-BFHjXl9p.js";import"./dimensions-CqoZOW6j.js";import"./elevation-JfXKLVfD.js";import"./locale-BJQwrXJ7.js";import"./VImg-C1aVTsth.js";import"./rounded-ErtzAGHK.js";import"./transition-DhTIerNz.js";import"./index-DS9MhfY5.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSTile-dxsyidoQ.js";import"./FSClickable-BWJokye8.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./FSCheckbox-Bdwx0Alv.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-DMxVfgfA.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./index-UH0ZuYvc.js";import"./form-_oo3cshG.js";import"./FSDashboardOrganisationTileUI-DxE295gq.js";import"./FSDashboardOrganisationTypeTileUI-BpUugMJO.js";import"./useDashboardOrganisationTypes-BWGZtHDq.js";import"./dashboardTranslation-CCi8mM_Y.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./useDashboardOrganisations-kbzoA4Hp.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-akWuCUc3.js";import"./useUserOrganisations-B4HIo215.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-DNff4qVK.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-Di7g3RCw.js";import"./FSDataTableUI-DuvLHxib.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSText-7jyalPrS.js";import"./FSSearchField-C6mzpd6B.js";import"./FSTextField-COQ4CiKa.js";import"./FSBaseField-D2wwYX9r.js";import"./FSButton-tjzQSrUn.js";import"./VField-Do2gtyNA.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-l1EjbmSi.js";import"./FSDialogMenu-BA4IKkHH.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./router-DxFny788.js";import"./FSSlideGroup-q5vQbkmI.js";import"./FSButtonNextIcon-DkRtY_o-.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./FSToggleSet-DdGuNy3E.js";import"./FSWrapGroup-Dplk4rjv.js";import"./FSFadeOut-DevRILST.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VSelect-j9cBSzLL.js";import"./VMenu-CuKNZEBs.js";import"./FSDivider-BNA1ohhL.js";import"./FSChip-D8HPW226.js";import"./FSOptionGroup-4iCPB8hj.js";import"./filter-C1K_d8Vd.js";import"./VBtn-BUwP05fv.js";import"./filter-COIlslko.js";const ir={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
