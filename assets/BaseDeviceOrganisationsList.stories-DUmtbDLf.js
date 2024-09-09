import e from"./FSBaseDeviceOrganisationsList-CPO32dDj.js";import{F as p}from"./FSDataTable-DcLFbhxY.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-DBnU7yhP.js";import"./useAppTimeZone-ghwi0HtC.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-BoHR2adf.js";import"./FSIcon-CKzhvi-C.js";import"./css-CbCR1nbl.js";import"./useColors-DbYs0nlr.js";import"./index-_Z9wfsFC.js";import"./theme-DqOMA9k1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Dc5M3VhK.js";import"./color-Dk23S21P.js";import"./tag-BDy8Psij.js";import"./FSText-Dz9fi4JX.js";import"./useSlots-DXmhvOIb.js";import"./useDateFormat-DZcIDWp6.js";import"./datesTools-RiUw1NMp.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./FSImage-lRa2aZlw.js";import"./FSImageUI-BUvy_Vp9.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./VImg-DxvBH4oU.js";import"./dimensions-CBrtQk_X.js";import"./elevation-DH7kyzD7.js";import"./locale-CMOn_BOp.js";import"./rounded-B-50KYhN.js";import"./transition-Cs7QtK7U.js";import"./index-DQeMThUY.js";import"./FSTagGroup-CM_rHHXT.js";import"./FSWrapGroup-DznP-FT8.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-B7xKK6c-.js";import"./FSButton-Cu-2DGh7.js";import"./FSClickable-C6-rWYfA.js";import"./FSCard-D9e2PZ5O.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VProgressCircular-BALYDMME.js";import"./FSSpan-etgUZXmX.js";import"./index-7QBgy7JM.js";import"./display-B4Z--0w1.js";import"./group-CT1H1YXM.js";import"./proxiedModel-CZPY81Tp.js";import"./FSTag-CLIYAByo.js";import"./VBtn-8V3HVfv8.js";import"./border-BD8WTLKh.js";import"./density-BWgXlOb-.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./router-DPbzaFf1.js";import"./index-BN7Lbnw3.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./FSDeviceOrganisationTileUI-Cj-RcY82.js";import"./FSStatusesCarousel-Bse80Y-f.js";import"./FSWindow-BXqAPvoy.js";import"./lazy-Ceu0wY4v.js";import"./ssrBoot-D42UTWSS.js";import"./FSChip-C6Vg7g0q.js";import"./FSColor-1D4-3ww6.js";import"./VMenu-BOpQjLNS.js";import"./VOverlay-Dml741yE.js";import"./forwardRefs-DWGaNmQL.js";import"./FSDivider-BrVaAu_l.js";import"./FSTile-pbEuIfDd.js";import"./FSCheckbox-C_BP1rxW.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./form-BN2rR47-.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./useDeviceOrganisations-Dek27rk2.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-WteBYhLD.js";import"./vue-router-Cn9ishJ4.js";import"./FSSearchField-CBCgljQJ.js";import"./FSTextField-CdPWSms5.js";import"./FSBaseField-CJsUhopP.js";import"./VSpacer-BJ2TWwuy.js";import"./VField-C1LOclAH.js";import"./FSSelectField-C8o7Khw9.js";import"./FSDialogMenu-CI3XxiK0.js";import"./VDialog-skjiTtId.js";import"./FSToggleSet-ERyA7UBg.js";import"./FSFadeOut-C6v1xdo-.js";import"./FSRadio-D7wcd6J3.js";import"./VList-D7oPpfjd.js";import"./VSelect-Bk6IV5T5.js";import"./FSOptionGroup-z7cpicRc.js";import"./filter-KqM1uUBX.js";const Zt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const $t=["Default"];export{t as Default,$t as __namedExportsOrder,Zt as default};
