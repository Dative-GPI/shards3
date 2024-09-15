import e from"./FSBaseDeviceOrganisationsList-DX6modJt.js";import{F as p}from"./FSDataTable-C0j6v1qU.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-C1O7Yn4U.js";import"./useAppTimeZone-D_npl1cn.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-CYPJ_L0b.js";import"./FSIcon-DHDofKUo.js";import"./css-DLfrm0pR.js";import"./useColors-B5ivMAr9.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSText-8i4Fp1Ld.js";import"./useSlots-P12pG1X5.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./FSImage-tGqiFQbn.js";import"./FSImageUI-BoeaD2iX.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSLoader-DIRgKG_M.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./FSTagGroup-B3TE_H7_.js";import"./FSWrapGroup-DnBpx7nY.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-DCqEyw4i.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./FSCard-DAS46KTX.js";import"./FSCol-YmDykHL-.js";import"./FSRow-CVY2l52N.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSSpan-CCGpb4KF.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./FSTag-HNvfszlX.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSDeviceOrganisationTileUI-CfF-jpsa.js";import"./FSStatusesCarousel-S5jmd0p7.js";import"./FSWindow-BMzav7Sc.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./FSChip-vR1IHQ3P.js";import"./FSColor-CQ-EnRa2.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-CpPmq5Yu.js";import"./FSTile-BxIJyXna.js";import"./FSCheckbox-YoHHo_JV.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-CVMKV-c_.js";import"./vue-router-BhvpcqFa.js";import"./FSSearchField-DFF89qPo.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./FSSelectField-D8_kFGVg.js";import"./FSDialogMenu-CjU7jTTU.js";import"./VDialog-BkP6MFQ7.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./VSelect-VfM2CROL.js";import"./FSOptionGroup-wuNvwQjf.js";import"./filter-CTnmeGG4.js";import"./filter-DuGNEgHB.js";const ro={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
      <FSBaseDeviceOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
        :connectedOnly="args.connectedOnly"
        :singleSelect="args.singleSelect"
      />
    `}),args:{modelValue:[],tableCode:"devices1",connectedOnly:!1,singleSelect:!1}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDeviceOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
        :connectedOnly="args.connectedOnly"
        :singleSelect="args.singleSelect"
      />
    \`
  }),
  args: {
    modelValue: [],
    tableCode: 'devices1',
    connectedOnly: false,
    singleSelect: false
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const io=["Default"];export{t as Default,io as __namedExportsOrder,ro as default};
