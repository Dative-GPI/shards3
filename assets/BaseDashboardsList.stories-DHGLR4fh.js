import m from"./FSBaseDashboardsList-Bd2NXnFo.js";import{F as s}from"./FSDataTable-DXf1FN0y.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-Ddr6MgcY.js";import"./FSIcon-dnXFGGQr.js";import"./useBreakpoints-BMg9gIvD.js";import"./useColors-C3GOyDHx.js";import"./index-_Z9wfsFC.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-zho7mIKV.js";import"./color-DdAXPAA0.js";import"./FSDashboardShallowTileUI-B2jc-q0b.js";import"./FSSimpleTileUI-DR0R1VAf.js";import"./FSIconCard-W1r3Y7v3.js";import"./FSCard-CxH8ejsx.js";import"./FSCol-D8gLxM2E.js";import"./FSRow-CSQtiyAx.js";import"./FSImage-lrCPZ-ea.js";import"./FSImageUI-pQoOi5zt.js";import"./FSLoader-Bw_zeuUP.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./VImg-Bi-pKvLj.js";import"./rounded-BoPqla0T.js";import"./transition-BtBp4lzQ.js";import"./index-lTYthPHq.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./uuid-DTaye2KM.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSTile-C1tNDeEp.js";import"./FSClickable-Dz5j9aqP.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./FSCheckbox-oOjjSOAG.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./index-BF2Ge4Ib.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./index-B-qTxNvr.js";import"./form-vji0TmoR.js";import"./FSDashboardOrganisationTileUI-amGt83wD.js";import"./FSDashboardOrganisationTypeTileUI-CMw33BL8.js";import"./useDashboardOrganisationTypes-DAOOKznG.js";import"./dashboardTranslation-C6soLE7g.js";import"./useAppLanguageCode-C2XicOK_.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./useDashboardOrganisations-SYuIiyjn.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-CIMorXGl.js";import"./useUserOrganisations-nGQjkFjx.js";import"./permissionInfos-BPDgTHQl.js";import"./organisationDetails-Bs58eQFy.js";import"./dashboards-JSNI7pIu.js";import"./FSDataTableUI-CoLcxmQc.js";import"./FSText-CV92BjRj.js";import"./FSSearchField-Bx6G4eFd.js";import"./FSTextField-B9Yl6IUE.js";import"./FSBaseField-CPhXHC60.js";import"./FSButton-44O228oj.js";import"./VField-DrieYqTb.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DgvmBCqU.js";import"./FSSelectField-DjWNy4pM.js";import"./VList-Ms7LY5Qs.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./FSSlideGroup-bnXYYW-T.js";import"./FSButtonNextIcon-D7F-G6Uh.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-Chnxajrx.js";import"./FSWrapGroup-mhpasbJF.js";import"./FSFadeOut-ClVU4caD.js";import"./FSRadio-CBwjt_Sc.js";import"./VSelect-BLps1uzN.js";import"./VMenu-CkU-g4Hp.js";import"./FSDivider-B4PiXHJl.js";import"./FSChip-CAvKfeh3.js";import"./FSOptionGroup-DN2iYHeu.js";import"./filter-C1K_d8Vd.js";import"./VBtn-GP0Uljy4.js";import"./filter-MqAtiUjL.js";const mr={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
