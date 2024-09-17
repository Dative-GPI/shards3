import m from"./FSBaseDeviceOrganisationsList-ZnHqfZ5R.js";import{F as p}from"./FSDataTable-KET507r2.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-D-dv4Z-_.js";import"./useAppTimeZone-D_npl1cn.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-aABSSIWm.js";import"./FSIcon-DuyQgQFI.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSText-DyldgdXP.js";import"./useSlots-P12pG1X5.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./FSImage-BLcTojE4.js";import"./FSImageUI-Sqm5OVdg.js";import"./FSLoader-fdbCjZEQ.js";import"./css-BRRCqIav.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTagGroup-CdWO4b3-.js";import"./FSWrapGroup-WxGi_YEL.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BysYk75t.js";import"./FSButton-DvVRr-Q9.js";import"./FSClickable-D9Ppoc0d.js";import"./FSCard-CjHnVBHV.js";import"./FSCol-CtQDyyQv.js";import"./FSRow-B3SJi8FA.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSSpan-CCGpb4KF.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./FSTag-8Yr8Z49e.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSDeviceOrganisationTileUI-CSmRjYQh.js";import"./FSStatusesCarousel-DmicKiNE.js";import"./FSWindow-C_IuudQ-.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./FSStatus-Drrt0AYM.js";import"./FSChip-Ca_W5DEH.js";import"./FSColor-5VS7xXKD.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-CXnH-7Mj.js";import"./FSTile-wWvYx8Tp.js";import"./FSCheckbox-Dn5SdBcD.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-DpOzUalo.js";import"./vue-router-BhvpcqFa.js";import"./FSSearchField-DNmC1QFE.js";import"./FSTextField-D-F2DIF_.js";import"./FSBaseField-D2YBKhIh.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./FSSelectField-QL3fIsyv.js";import"./FSDialogMenu-DZZe1S1I.js";import"./VDialog-BkP6MFQ7.js";import"./FSToggleSet-CES2Gcvq.js";import"./FSFadeOut-Cf3XjCz3.js";import"./FSRadio-BSuFa48d.js";import"./VList-BSxk2mkg.js";import"./VSelect-D1irgDfU.js";import"./FSOptionGroup-CvdtvA93.js";import"./filter-DC84psoM.js";import"./filter-DuGNEgHB.js";const eo={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:m,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:e=>({components:{FSBaseDeviceOrganisationsList:m},setup(){return{args:e}},template:`
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
