import m from"./FSBaseDashboardsList-B_qUWRKJ.js";import{F as s}from"./FSDataTable-B_yS3Aa3.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSIcon-8gYhOFD7.js";import"./css-BkQhD285.js";import"./useColors-DQIAXgK6.js";import"./index-_Z9wfsFC.js";import"./theme-v7reDO7s.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./tag-DT601Ssr.js";import"./FSDashboardShallowTileUI-BfaF5kZe.js";import"./FSSimpleTileUI-D-IkkkWw.js";import"./FSIconCard-tavJNE6X.js";import"./FSCard-C5xnaBLp.js";import"./FSCol-TPWSQPHs.js";import"./FSRow-CpogXLW8.js";import"./FSImage-CVDbXXAf.js";import"./FSImageUI-CoAqXOd_.js";import"./FSLoader-BqeDhDy7.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./locale-Dn84bpGK.js";import"./VImg-IVf3xxVd.js";import"./rounded-Cely44IK.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CfONFoOj.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-D0eCIUsD.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSTile-FoHTNOpG.js";import"./FSClickable-Cug_zuK9.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./FSCheckbox-Ca6QR3YB.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./form-B7NlTRtd.js";import"./FSDashboardOrganisationTileUI--sR5w11a.js";import"./FSDashboardOrganisationTypeTileUI-DdNv0Rwk.js";import"./useDashboardOrganisationTypes-DjSccxnz.js";import"./dashboardTranslation-B3HYPjZl.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./useDashboardOrganisations-MqxkUBbg.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-C0yDStMF.js";import"./useUserOrganisations-BPpZ3OaV.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-DOKCdqjG.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-CrqXaTz-.js";import"./FSDataTableUI-DkDpmNVy.js";import"./vue-router-C7inxZoN.js";import"./uuid-DTaye2KM.js";import"./FSText-BrySk5Rp.js";import"./FSSearchField-oTNKRE3Q.js";import"./FSTextField-BNsdmcCY.js";import"./FSBaseField-BHQtSJ11.js";import"./FSButton-CzHpksPi.js";import"./VField-BnYbwRuc.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-f9CWAvtI.js";import"./FSSelectField-DzBCMqD7.js";import"./FSDialogMenu-9Cx_8jGa.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DKSfq5sV.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-DaQ29VSB.js";import"./FSWrapGroup-COIyjdtd.js";import"./FSFadeOut-DhwE_hD-.js";import"./FSRadio-DX2n8Ejy.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VSelect-BSIuZf-h.js";import"./VMenu-BkqMtGEU.js";import"./FSDivider-CmxfSM_J.js";import"./FSChip-BA2dIUZg.js";import"./FSOptionGroup-DUoqaSos.js";import"./filter-C1K_d8Vd.js";import"./VBtn-el1a73sG.js";import"./filter-BS4_e9hb.js";const pr={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
