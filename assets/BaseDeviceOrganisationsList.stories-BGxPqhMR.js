import e from"./FSBaseDeviceOrganisationsList-wYflI86I.js";import{F as p}from"./FSDataTable-CuZDOHml.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-BHv6RXhm.js";import"./useAppTimeZone-ghwi0HtC.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-B4z6jzzg.js";import"./FSIcon-C5J86pUk.js";import"./css-CbCR1nbl.js";import"./useColors-ClJ5KOuK.js";import"./index-3zl-tJp_.js";import"./theme-DqOMA9k1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Dc5M3VhK.js";import"./color-Dk23S21P.js";import"./tag-BDy8Psij.js";import"./FSText-BFkdlBCz.js";import"./useSlots-DXmhvOIb.js";import"./useDateFormat-DAzSBSGK.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./FSImage-xcHxoARe.js";import"./FSImageUI-oKoqxlvk.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./VImg-BXfgvzNq.js";import"./dimensions-CBrtQk_X.js";import"./elevation-DH7kyzD7.js";import"./locale-CMOn_BOp.js";import"./rounded-B-50KYhN.js";import"./transition-Cs7QtK7U.js";import"./index-DQeMThUY.js";import"./FSTagGroup-D0s5VGtu.js";import"./FSWrapGroup-BVDcXGuK.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BPqsAK8i.js";import"./FSButton-fjod5ujP.js";import"./FSClickable-BcHZK6vu.js";import"./FSCard-CD3PuQHv.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VProgressCircular-BALYDMME.js";import"./FSSpan-etgUZXmX.js";import"./index-7QBgy7JM.js";import"./display-B4Z--0w1.js";import"./group-CT1H1YXM.js";import"./proxiedModel-CZPY81Tp.js";import"./FSTag-Du2B_Py4.js";import"./VBtn-8V3HVfv8.js";import"./border-BD8WTLKh.js";import"./density-BWgXlOb-.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./router-DPbzaFf1.js";import"./index-BN7Lbnw3.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./FSDeviceOrganisationTileUI-CaW18JVu.js";import"./FSStatusesCarousel-B7JDOxiX.js";import"./FSWindow-BXqAPvoy.js";import"./lazy-Ceu0wY4v.js";import"./ssrBoot-D42UTWSS.js";import"./FSChip-Cy1QD-MY.js";import"./FSColor-hFc9rTeQ.js";import"./VMenu-BOpQjLNS.js";import"./VOverlay-Dml741yE.js";import"./forwardRefs-DWGaNmQL.js";import"./FSDivider-D-_vZpJK.js";import"./FSTile-B_dLRwrv.js";import"./FSCheckbox-CEveiKls.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./form-BN2rR47-.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./useDeviceOrganisations-BKJ5AFp-.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-Cn-lTWOJ.js";import"./vue-router-Cn9ishJ4.js";import"./FSSearchField-BMBDCRX-.js";import"./FSTextField-BCxbogTT.js";import"./FSBaseField-Na9zArMU.js";import"./VSpacer-BJ2TWwuy.js";import"./VField-C1LOclAH.js";import"./FSSelectField-BbVbR3u6.js";import"./FSDialogMenu-BLjBa2f5.js";import"./VDialog-skjiTtId.js";import"./FSToggleSet-FeJixf7j.js";import"./FSFadeOut-k2izDgAG.js";import"./FSRadio-DUmD3b7i.js";import"./VList-C3UDUNRO.js";import"./VSelect-DC4H_UxZ.js";import"./FSOptionGroup-CxZdEZY3.js";import"./filter-KqM1uUBX.js";const Zt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
