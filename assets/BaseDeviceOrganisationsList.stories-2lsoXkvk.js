import e from"./FSBaseDeviceOrganisationsList-CTiiSXhu.js";import{F as p}from"./FSDataTable-B4dNNcDu.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-BHJ2zKN-.js";import"./useAppTimeZone-D_npl1cn.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-B2VRD8XO.js";import"./FSIcon-DN2q1qW9.js";import"./css-DLfrm0pR.js";import"./useColors-B5ivMAr9.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSText-8i4Fp1Ld.js";import"./useSlots-P12pG1X5.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./FSImage-CXk_DSZN.js";import"./FSImageUI-SiE7BFgu.js";import"./FSLoader-DIRgKG_M.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTagGroup-CwZXGTbx.js";import"./FSWrapGroup-D7Za8UKL.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-URsD2tNd.js";import"./FSButton-BqSSh9cv.js";import"./FSClickable-DeIa7ovm.js";import"./FSCard-DB172Zwc.js";import"./FSCol-DZA6pxA1.js";import"./FSRow-CA1vgNXx.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSSpan-CCGpb4KF.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./FSTag-BPPDdi_x.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSDeviceOrganisationTileUI-C80cC4Ge.js";import"./FSStatusesCarousel-tv0-5EeT.js";import"./FSWindow-BMzav7Sc.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./FSChip-DpmLZ_pT.js";import"./FSColor-BxfZ_68J.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-CMkepefc.js";import"./FSTile-DzFugWZd.js";import"./FSCheckbox-CrklXd1G.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-Bamoodg0.js";import"./vue-router-BhvpcqFa.js";import"./FSSearchField-_zl41PRC.js";import"./FSTextField-QG7VRB0m.js";import"./FSBaseField-B0GQeRaQ.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./FSSelectField-DcAZHyt9.js";import"./FSDialogMenu-BL4fn6S5.js";import"./VDialog-BkP6MFQ7.js";import"./FSToggleSet-CM2vnj8q.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSRadio-O6Rc-mt_.js";import"./VList-BSxk2mkg.js";import"./VSelect-D2bTgrFu.js";import"./FSOptionGroup-BMViswAg.js";import"./filter-CTnmeGG4.js";import"./filter-DuGNEgHB.js";const io={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const eo=["Default"];export{t as Default,eo as __namedExportsOrder,io as default};
