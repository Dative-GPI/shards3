import m from"./FSBaseDeviceOrganisationsList-D98sifZ0.js";import{F as p}from"./FSDataTable-BIGc05lV.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-DnJq1_76.js";import"./useAppTimeZone-D_npl1cn.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-CX-utQD8.js";import"./FSIcon-DwJNOKvG.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSText-DyldgdXP.js";import"./useSlots-P12pG1X5.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./FSImage-BxDhaxzU.js";import"./FSImageUI-C0XOuHIu.js";import"./FSLoader-CtbqJzfZ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTagGroup-Dj83q6UG.js";import"./FSWrapGroup-yFK4C9rw.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BogZOmN_.js";import"./FSButton-CyN0itWL.js";import"./FSClickable-CS9kdIxp.js";import"./FSCard-Dakm4bPu.js";import"./FSCol-DZA6pxA1.js";import"./FSRow-CA1vgNXx.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSSpan-CCGpb4KF.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./FSTag-CiTQmVvb.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSDeviceOrganisationTileUI-DAQQelw_.js";import"./FSStatusesCarousel-aiolA0WX.js";import"./FSWindow-BMzav7Sc.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./FSStatus-ZGfipMpJ.js";import"./FSChip-Cu5YGhb-.js";import"./FSColor-CSobaj7A.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-DQ-5tMcN.js";import"./FSTile-ClEhpyRn.js";import"./FSCheckbox-DPKcfP0u.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-DmL672AK.js";import"./vue-router-BhvpcqFa.js";import"./FSSearchField-Cjbg81V-.js";import"./FSTextField-DIyIIzs_.js";import"./FSBaseField-BkzmckaL.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./FSSelectField-CBLEXrby.js";import"./FSDialogMenu-D5T4tlYN.js";import"./VDialog-BkP6MFQ7.js";import"./FSToggleSet-Cx7T0QZL.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./VSelect-vIgl-vXK.js";import"./FSOptionGroup-BXRAcD1O.js";import"./filter-CTnmeGG4.js";import"./filter-DuGNEgHB.js";const mo={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:m,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:e=>({components:{FSBaseDeviceOrganisationsList:m},setup(){return{args:e}},template:`
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
