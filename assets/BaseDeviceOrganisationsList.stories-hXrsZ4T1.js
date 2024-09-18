import m from"./FSBaseDeviceOrganisationsList-CyVdobDI.js";import{F as p}from"./FSDataTable-CnLYfQb-.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-BVtgX5oR.js";import"./useAppTimeZone-D_npl1cn.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-DNbumYhM.js";import"./FSIcon-lOMM3dv0.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSText-BN3VvfV9.js";import"./useSlots-P12pG1X5.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./FSImage-DFpAkaKA.js";import"./FSImageUI-D0IdOlS8.js";import"./FSLoader-7EueGG7H.js";import"./css-BRRCqIav.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTagGroup-DwKcNwrc.js";import"./FSWrapGroup-Co4n_fYq.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-60uSUxLJ.js";import"./FSButton-nYXrUxor.js";import"./FSClickable-BDGPWcsb.js";import"./FSCard-VI0SCCBU.js";import"./FSCol-CtQDyyQv.js";import"./FSRow-B3SJi8FA.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSSpan-CCGpb4KF.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./FSTag-DHDcqttn.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSDeviceOrganisationTileUI-9pM-9zSZ.js";import"./FSStatusesCarousel-ZAOBr_nM.js";import"./FSWindow-C_IuudQ-.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./FSStatus-CQxqTxU9.js";import"./FSChip-BJGyRW3u.js";import"./FSColor-DJALVf1r.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-TaDedv2I.js";import"./FSTile-DgvD4gki.js";import"./FSCheckbox-DjQsgBzR.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-DMOSpZOv.js";import"./vue-router-BhvpcqFa.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./FSSelectField-CwdkTkty.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./VDialog-BkP6MFQ7.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSFadeOut-DGMvjjet.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./VSelect-DW3MG8oy.js";import"./FSOptionGroup-4rULTFhS.js";import"./filter-DC84psoM.js";import"./filter-DuGNEgHB.js";const eo={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:m,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:e=>({components:{FSBaseDeviceOrganisationsList:m},setup(){return{args:e}},template:`
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const po=["Default"];export{t as Default,po as __namedExportsOrder,eo as default};
