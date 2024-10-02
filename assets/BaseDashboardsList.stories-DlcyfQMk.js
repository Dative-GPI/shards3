import m from"./FSBaseDashboardsList-CCXOoQ6-.js";import{F as s}from"./FSDataTable-BYdhD1mt.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSIcon-DKHuRfPI.js";import"./css-D18ueKtB.js";import"./useColors-CVdO3CcM.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./tag-ByYBjpGI.js";import"./FSDashboardShallowTileUI-Drs9JOJS.js";import"./FSSimpleTileUI-BZOVb8LR.js";import"./FSIconCard-pZaZs4Fj.js";import"./FSCard-uGx4g-q0.js";import"./FSCol-Co9r7Klj.js";import"./FSRow-D546kqFt.js";import"./FSImage-C9ySLapv.js";import"./FSImageUI-S1V1r0uW.js";import"./FSLoader-BMQDJgx0.js";import"./dimensions-DBaG2oVF.js";import"./elevation-8SXivnh1.js";import"./locale-DgxPCyxi.js";import"./VImg-616TDJo4.js";import"./rounded-Cd5tqTfa.js";import"./transition-DZ-8zzo1.js";import"./index-CQjBi2ms.js";import"./useImages-DkNM0cBn.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-935AgDKu.js";import"./useAppAuthToken-JHUrxSke.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSTile-C18qmuVB.js";import"./FSClickable-xECbCdT3.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./FSCheckbox-BJ0zq37S.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./index-Dx6GtDlm.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./index-D0m5TbR6.js";import"./form-lyoENh9E.js";import"./FSDashboardOrganisationTileUI-tKYEsJ8a.js";import"./FSDashboardOrganisationTypeTileUI-BCwshhon.js";import"./useDashboardOrganisationTypes-Da9ItV1J.js";import"./dashboardTranslation-DyCT8EWT.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./useDashboardOrganisations-BV1i54IJ.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-aq0ZV6fV.js";import"./useUserOrganisations-B2htUMRF.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-Cb6tGdqk.js";import"./dashboards-JSNI7pIu.js";import"./VSpacer-DaRxrr8q.js";import"./FSDataTableUI-B_zQtXm0.js";import"./vue-router-DwCyYn3Y.js";import"./uuid-DTaye2KM.js";import"./FSText-CETLcZv7.js";import"./FSSearchField-jGkYIgq2.js";import"./FSTextField-DxJVxYys.js";import"./FSBaseField-lEL5efap.js";import"./FSButton-D4qgd2ja.js";import"./VField-Cs2kmeSz.js";import"./loader-BoG0AaGl.js";import"./anchor-CfU9RSql.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-ZMyFjr19.js";import"./FSSelectField-DujFH32C.js";import"./FSDialogMenu-1exdynOQ.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-Cseplt4t.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./FSFadeOut-D40FnrcD.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./FSDivider-BkjjDvS3.js";import"./FSChip-Dvm8S3l9.js";import"./FSOptionGroup-CjLzmro8.js";import"./filter-C1K_d8Vd.js";import"./VBtn-Cg1UOEjx.js";import"./filter-_ePnXriG.js";const ir={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
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
