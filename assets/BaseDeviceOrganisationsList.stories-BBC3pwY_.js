import e from"./FSBaseDeviceOrganisationsList-DGqUlhvX.js";import{F as l}from"./FSDataTable-DWFfQd3P.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-DCf07YjN.js";import"./useAppTimeZone-CIW33DGM.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-CZF-rlTG.js";import"./FSIcon-DKHuRfPI.js";import"./css-D18ueKtB.js";import"./useColors-CVdO3CcM.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSText-CETLcZv7.js";import"./useDateFormat-3O5RagjD.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useTranslations-ZMyFjr19.js";import"./FSDeviceOrganisationTileUI-Cjvgxw-T.js";import"./FSStatusesCarousel-_Xh8fsZP.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./FSCard-uGx4g-q0.js";import"./FSCol-Co9r7Klj.js";import"./FSRow-D546kqFt.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./FSWindow-CI0pCdxo.js";import"./group-Bl9vmDol.js";import"./proxiedModel-DAUSUEYq.js";import"./locale-DgxPCyxi.js";import"./VBtn-Cg1UOEjx.js";import"./border-yULewhCr.js";import"./density-CY0EC5jE.js";import"./elevation-8SXivnh1.js";import"./rounded-Cd5tqTfa.js";import"./dimensions-DBaG2oVF.js";import"./loader-BoG0AaGl.js";import"./anchor-CfU9RSql.js";import"./router-C4cLtMAM.js";import"./index-Dx6GtDlm.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./lazy-DlJBGmKZ.js";import"./ssrBoot-hTBI6W7o.js";import"./transition-DZ-8zzo1.js";import"./FSStatus-GtDsACE4.js";import"./FSChip-Dvm8S3l9.js";import"./FSColor-v9frFHZv.js";import"./VMenu-CCWiAq1W.js";import"./VOverlay-D-6__nW6.js";import"./forwardRefs-DWGaNmQL.js";import"./display-B-O23xq9.js";import"./alertsTools-Ea17MnXY.js";import"./FSDivider-BkjjDvS3.js";import"./FSImage-C9ySLapv.js";import"./FSImageUI-S1V1r0uW.js";import"./FSLoader-BMQDJgx0.js";import"./VImg-616TDJo4.js";import"./index-CQjBi2ms.js";import"./useImages-DkNM0cBn.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-935AgDKu.js";import"./useAppAuthToken-JHUrxSke.js";import"./FSTile-C18qmuVB.js";import"./FSCheckbox-BJ0zq37S.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./index-D0m5TbR6.js";import"./form-lyoENh9E.js";import"./FSTagGroup-DYAMWRIR.js";import"./FSWrapGroup-BvLmYzz8.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./FSTag-Bxp_o6Zi.js";import"./FSSlideGroup-Cseplt4t.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./useDeviceOrganisations-BYKr8QWC.js";import"./hubFactory-CORDCgPG.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-BYXPe-oz.js";import"./vue-router-DwCyYn3Y.js";import"./FSSearchField-jGkYIgq2.js";import"./FSTextField-DxJVxYys.js";import"./FSBaseField-lEL5efap.js";import"./VSpacer-DaRxrr8q.js";import"./VField-Cs2kmeSz.js";import"./FSSelectField-DujFH32C.js";import"./FSDialogMenu-1exdynOQ.js";import"./VDialog-QbyZWgXc.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSFadeOut-D40FnrcD.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./VSelect-CEzGyfN4.js";import"./FSOptionGroup-CjLzmro8.js";import"./filter-C1K_d8Vd.js";import"./filter-_ePnXriG.js";const Ot={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})},t={args:{modelValue:[],tableCode:"devices2",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices1',
    connectedOnly: false
  },
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
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices2',
    connectedOnly: false
  },
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
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const vt=["Default","CustomProperties"];export{t as CustomProperties,o as Default,vt as __namedExportsOrder,Ot as default};
