import m from"./FSBaseDashboardsList-BHPb9Kf8.js";import{F as s}from"./FSDataTable-B7PhBYll.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSIcon-DCIvejCK.js";import"./css-BkQhD285.js";import"./useColors-C-2usiDI.js";import"./index-3zl-tJp_.js";import"./theme-v7reDO7s.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./tag-DT601Ssr.js";import"./FSDashboardShallowTileUI-DWv3tdhf.js";import"./FSSimpleTileUI-BhVUedLJ.js";import"./FSIconCard-BUo6aEzr.js";import"./FSCard-BraeKnTa.js";import"./FSCol-TPWSQPHs.js";import"./FSRow-CmD7j8Pv.js";import"./FSImage-B4TBRb6G.js";import"./FSImageUI-DV07oa_w.js";import"./FSLoader-EdeUV0_k.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./locale-Dn84bpGK.js";import"./VImg-IVf3xxVd.js";import"./rounded-Cely44IK.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CNptecSH.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSTile-BKHvzTk9.js";import"./FSClickable-CbCMktDA.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./FSCheckbox-Dz1GIEd_.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./form-B7NlTRtd.js";import"./FSDashboardOrganisationTileUI-BjEWJ3tI.js";import"./FSDashboardOrganisationTypeTileUI-BuAniHVe.js";import"./useDashboardOrganisationTypes-Ccvd6sMJ.js";import"./dashboardTranslation-B3HYPjZl.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./useDashboardOrganisations-CqbceVhC.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-CiCLn8nP.js";import"./useUserOrganisations-DXfax0xa.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-DHUiV6BG.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-CrqXaTz-.js";import"./FSDataTableUI-6Q20GUJW.js";import"./vue-router-C7inxZoN.js";import"./uuid-DTaye2KM.js";import"./FSText-CV-cArvf.js";import"./FSSearchField-BOGDN3XM.js";import"./FSTextField-DYD-Iv_E.js";import"./FSBaseField-MQGmXxR2.js";import"./FSButton-B49VW4HX.js";import"./VField-BnYbwRuc.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-f9CWAvtI.js";import"./FSSelectField-BDJbX3Ee.js";import"./FSDialogMenu-B03F1rLC.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DpMQsfGo.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-CqR-o65z.js";import"./FSWrapGroup-B1tkF8GY.js";import"./FSFadeOut-QsEpWU03.js";import"./FSRadio-C3R2p5jP.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VSelect-BK9ljo9C.js";import"./VMenu-BkqMtGEU.js";import"./FSDivider-CWQZdq5p.js";import"./FSChip-Cf74VseB.js";import"./FSOptionGroup-D2qHzHzR.js";import"./filter-C1K_d8Vd.js";import"./VBtn-el1a73sG.js";import"./filter-BS4_e9hb.js";const pr={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const mr=["Default"];export{t as Default,mr as __namedExportsOrder,pr as default};
