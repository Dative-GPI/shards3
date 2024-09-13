import e from"./FSBaseDeviceOrganisationsList-Duk9I-Uk.js";import{F as p}from"./FSDataTable-C_DkU05v.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-Bb11MX0g.js";import"./useAppTimeZone-D_npl1cn.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-Ch-sDJVq.js";import"./FSIcon-CYJlZG8j.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSText-BN3VvfV9.js";import"./useSlots-P12pG1X5.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./FSImage-BoTzzVmc.js";import"./FSImageUI-bFp2ltzX.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSLoader-DuEJL8Ft.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./FSTagGroup-akOK3g3Q.js";import"./FSWrapGroup-BZdyHaze.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-iez-IKK6.js";import"./FSButton-DCb8Rtcs.js";import"./FSClickable-Cih2yMcy.js";import"./FSCard-uUCmIZ5a.js";import"./FSCol-YmDykHL-.js";import"./FSRow-CVY2l52N.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSSpan-CCGpb4KF.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./FSTag-D9t7GtfO.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSDeviceOrganisationTileUI-C-E59pOZ.js";import"./FSStatusesCarousel-D8-u-1Dd.js";import"./FSWindow-BMzav7Sc.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./FSChip-BywVLV3F.js";import"./FSColor-DayflJKn.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-CDNPNYfK.js";import"./FSTile-CNTa6F5G.js";import"./FSCheckbox-D9jDFQ0_.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-CK_oSG2y.js";import"./vue-router-BhvpcqFa.js";import"./FSSearchField-BE-JbS9c.js";import"./FSTextField-njv1PMZC.js";import"./FSBaseField-D0H6MTaD.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./FSSelectField-SZYrzr0B.js";import"./FSDialogMenu-PIT4Re7T.js";import"./VDialog-BkP6MFQ7.js";import"./FSToggleSet-DkbvJUl_.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSRadio-DrxX1eSV.js";import"./VList-BSxk2mkg.js";import"./VSelect-CcomL_sg.js";import"./FSOptionGroup-S8MnBxsm.js";import"./filter-CTnmeGG4.js";import"./filter-DuGNEgHB.js";const ro={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
