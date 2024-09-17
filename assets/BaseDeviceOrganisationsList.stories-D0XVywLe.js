import m from"./FSBaseDeviceOrganisationsList-DwHigVOp.js";import{F as p}from"./FSDataTable-polZZLaD.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-CXj4573D.js";import"./useAppTimeZone-D_npl1cn.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-CSAIFnAh.js";import"./FSIcon-rAhoF0bo.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSText-BN3VvfV9.js";import"./useSlots-P12pG1X5.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./FSImage-B4BG5Dfm.js";import"./FSImageUI-BJK7Y-HI.js";import"./FSLoader-DuEJL8Ft.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTagGroup-CHBbAJXY.js";import"./FSWrapGroup-BrSPku3K.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-D8p4gDD2.js";import"./FSButton-DrXuY6Y3.js";import"./FSClickable-BfYZKNeL.js";import"./FSCard-CiUY3jF9.js";import"./FSCol-DZA6pxA1.js";import"./FSRow-CA1vgNXx.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSSpan-CCGpb4KF.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./FSTag-C2eH4Bqh.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSDeviceOrganisationTileUI-DQNEwNtw.js";import"./FSStatusesCarousel-Yl2Hyymq.js";import"./FSWindow-BMzav7Sc.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./FSStatus-quy50hn6.js";import"./FSChip-CtfQSu86.js";import"./FSColor-C7pBGL-O.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-CW2X6WDB.js";import"./FSTile-D-5PKG1-.js";import"./FSCheckbox-4wBZQYNd.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-DxSRpIwT.js";import"./vue-router-BhvpcqFa.js";import"./FSSearchField-DPg5OwBc.js";import"./FSTextField-BEw-xMN9.js";import"./FSBaseField-gW2RxCAK.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./FSSelectField-DezFuhph.js";import"./FSDialogMenu-EkZski4P.js";import"./VDialog-BkP6MFQ7.js";import"./FSToggleSet-HZXJOFK9.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSRadio-9XeVwuGU.js";import"./VList-BSxk2mkg.js";import"./VSelect-DUosO76x.js";import"./FSOptionGroup-ClEEG5FU.js";import"./filter-CTnmeGG4.js";import"./filter-DuGNEgHB.js";const mo={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:m,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:e=>({components:{FSBaseDeviceOrganisationsList:m},setup(){return{args:e}},template:`
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const eo=["Default"];export{t as Default,eo as __namedExportsOrder,mo as default};
