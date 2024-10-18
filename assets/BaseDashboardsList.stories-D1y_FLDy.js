import m from"./FSBaseDashboardsList-DhITCPNS.js";import{F as s}from"./FSDataTable-sc90KZ7U.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSIcon-CtLYuQJX.js";import"./useBreakpoints-BGn0bPYv.js";import"./useColors-Du1QHlOW.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./css-i8JhJBs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BCDp5TRU.js";import"./color-DBJfw4cY.js";import"./FSDashboardShallowTileUI-Ch3Px-Lq.js";import"./FSSimpleTileUI-D-rGukEU.js";import"./FSIconCard--akuJ__C.js";import"./FSCard-DrQswI-1.js";import"./FSCol-B-Vfvg0L.js";import"./FSRow-BkWeXIi_.js";import"./FSImage-n23S65yP.js";import"./FSImageUI-Ck5osTsj.js";import"./FSLoader-DQSvmWsx.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./VImg-I7jXrjsW.js";import"./rounded-DM_o2hWD.js";import"./transition-B83BVatf.js";import"./index-C31q_73Z.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSSpan-CHspDDbd.js";import"./useSlots-BnylMYIF.js";import"./FSTile-BSOUNQQx.js";import"./FSClickable-Dnlrfn2W.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./FSCheckbox-BLdBQVgd.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./form-D8F-RrsG.js";import"./FSDashboardOrganisationTileUI-CAYDZuva.js";import"./FSDashboardOrganisationTypeTileUI-CdDJRvWE.js";import"./useDashboardOrganisationTypes-BWGZtHDq.js";import"./dashboardTranslation-CCi8mM_Y.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./useDashboardOrganisations-kbzoA4Hp.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-akWuCUc3.js";import"./useUserOrganisations-B4HIo215.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-DNff4qVK.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-y-n940VK.js";import"./FSDataTableUI-BRY3zdZK.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSText-tLTPrprs.js";import"./FSSearchField-DJ1HQDjY.js";import"./FSTextField-DPsTjA6v.js";import"./FSBaseField-DL008ZG5.js";import"./FSButton-BQje8JZk.js";import"./VField-2PlKy0GK.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-Ce6swNpA.js";import"./FSDialogMenu-DQd6lGHm.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-CuNxa7LX.js";import"./FSButtonNextIcon-Df26-_J5.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-Bu237MSN.js";import"./FSWrapGroup-B9QcRiHf.js";import"./FSFadeOut-CzSmEb-b.js";import"./FSRadio-CN98aZYT.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VSelect-DXUxnIIu.js";import"./VMenu-9eL7kyJm.js";import"./FSDivider-Cz76pz8q.js";import"./FSChip-BRPLsjag.js";import"./FSOptionGroup-DuOVIRp2.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CCHUxMdD.js";import"./filter-iZr2_yz2.js";const ir={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
