import e from"./FSBaseDeviceOrganisationsList-CHZRRdri.js";import{F as p}from"./FSDataTable-O_GlW_LU.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-BJK91xXV.js";import"./useAppTimeZone-ghwi0HtC.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-BVkehq5_.js";import"./FSIcon-CNrZYw3j.js";import"./css-CbCR1nbl.js";import"./useColors-ClGgFu9Q.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Dc5M3VhK.js";import"./color-Dk23S21P.js";import"./tag-BDy8Psij.js";import"./FSText-CWxdqVl0.js";import"./useSlots-DXmhvOIb.js";import"./useDateFormat-DZcIDWp6.js";import"./datesTools-RiUw1NMp.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./FSImage-C2ooQW7b.js";import"./FSImageUI-CbS1ss7O.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./VImg-iJp2dxPS.js";import"./dimensions-CBrtQk_X.js";import"./elevation-DH7kyzD7.js";import"./locale-CMOn_BOp.js";import"./rounded-B-50KYhN.js";import"./transition-Cs7QtK7U.js";import"./index-DQeMThUY.js";import"./FSTagGroup-CNLP1Bmg.js";import"./FSWrapGroup-B5xxx5Ka.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-DyM4bozv.js";import"./FSButton-BxokHo9i.js";import"./FSClickable-DTGM1ZCA.js";import"./FSCard-BxEZp4pO.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VProgressCircular-BALYDMME.js";import"./FSSpan-etgUZXmX.js";import"./index-7QBgy7JM.js";import"./display-B4Z--0w1.js";import"./group-CT1H1YXM.js";import"./proxiedModel-CZPY81Tp.js";import"./FSTag-CddFq-0w.js";import"./VBtn-8V3HVfv8.js";import"./border-BD8WTLKh.js";import"./density-BWgXlOb-.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./router-DPbzaFf1.js";import"./index-BN7Lbnw3.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./FSDeviceOrganisationTileUI-B2_p5INW.js";import"./FSStatusesCarousel-C3IbK9DZ.js";import"./FSWindow-BXqAPvoy.js";import"./lazy-Ceu0wY4v.js";import"./ssrBoot-D42UTWSS.js";import"./FSChip-c4zDvu8x.js";import"./FSColor-BlfEQt2L.js";import"./VMenu-BOpQjLNS.js";import"./VOverlay-Dml741yE.js";import"./forwardRefs-DWGaNmQL.js";import"./FSDivider-CJ8R3g7K.js";import"./FSTile-CUzgRWtd.js";import"./FSCheckbox-BNEUzkt_.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./form-BN2rR47-.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./useDeviceOrganisations-Dek27rk2.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-1ltF53kS.js";import"./vue-router-Cn9ishJ4.js";import"./FSSearchField-DNPdQSon.js";import"./FSTextField-BHgcmBCX.js";import"./FSBaseField-Uq_chVlu.js";import"./VSpacer-BJ2TWwuy.js";import"./VField-C1LOclAH.js";import"./FSSelectField-5Wdfuhiq.js";import"./FSDialogMenu-Ok4sLSuM.js";import"./VDialog-skjiTtId.js";import"./FSToggleSet-CD-Kwtma.js";import"./FSFadeOut-CORcN4YC.js";import"./FSRadio-CMU-kDTj.js";import"./VList-6ZTQMrmw.js";import"./VSelect-C_mDfp4q.js";import"./FSOptionGroup-Cy-Li8SV.js";import"./filter-KqM1uUBX.js";const Zt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
