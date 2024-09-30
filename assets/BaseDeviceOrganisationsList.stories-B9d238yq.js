import e from"./FSBaseDeviceOrganisationsList-DiJeDFU_.js";import{F as l}from"./FSDataTable-b-lY0_CV.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-Bv4AVRD9.js";import"./useAppTimeZone-CIW33DGM.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-B4_aPJzQ.js";import"./FSIcon-C8jESFXA.js";import"./css-D18ueKtB.js";import"./useColors-CaDWSZLL.js";import"./index-_Z9wfsFC.js";import"./theme-BEfrBPRQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSText-CnF0GPuv.js";import"./useDateFormat-3O5RagjD.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useTranslations-ZMyFjr19.js";import"./FSDeviceOrganisationTileUI-BieXhwn3.js";import"./FSStatusesCarousel-DpADVgxd.js";import"./FSButton-DAhZ0Raz.js";import"./FSClickable-DxBn6HxC.js";import"./FSCard-BjvZ5YiQ.js";import"./FSCol-Co9r7Klj.js";import"./FSRow-D546kqFt.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./FSWindow-CI0pCdxo.js";import"./group-Bl9vmDol.js";import"./proxiedModel-DAUSUEYq.js";import"./locale-DgxPCyxi.js";import"./VBtn-Cg1UOEjx.js";import"./border-yULewhCr.js";import"./density-CY0EC5jE.js";import"./elevation-8SXivnh1.js";import"./rounded-Cd5tqTfa.js";import"./dimensions-DBaG2oVF.js";import"./loader-BoG0AaGl.js";import"./anchor-CfU9RSql.js";import"./router-C4cLtMAM.js";import"./index-Dx6GtDlm.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./lazy-DlJBGmKZ.js";import"./ssrBoot-hTBI6W7o.js";import"./transition-DZ-8zzo1.js";import"./FSStatus-Dvcfga1m.js";import"./FSChip-cbDRAwPU.js";import"./FSColor-BAyKe6f_.js";import"./VMenu-CCWiAq1W.js";import"./VOverlay-D-6__nW6.js";import"./forwardRefs-DWGaNmQL.js";import"./display-B-O23xq9.js";import"./alertsTools-DMPB_7TG.js";import"./FSDivider-C12Ul68G.js";import"./FSImage-ByfHz7ir.js";import"./FSImageUI-D07GmYkD.js";import"./FSLoader-DEfCEKzp.js";import"./VImg-616TDJo4.js";import"./index-CQjBi2ms.js";import"./useImages-DkNM0cBn.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-935AgDKu.js";import"./FSTile-GEazNfEP.js";import"./FSCheckbox-BYVnhWyO.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./index-D0m5TbR6.js";import"./form-lyoENh9E.js";import"./FSTagGroup-CQNkoGu4.js";import"./FSWrapGroup-DO-xnPll.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./FSTag-DMEfo3FI.js";import"./FSSlideGroup-DhNsnnDZ.js";import"./FSButtonNextIcon-3a_bTLDz.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./useDeviceOrganisations-BYKr8QWC.js";import"./hubFactory-CORDCgPG.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-B7KDbx4x.js";import"./vue-router-DwCyYn3Y.js";import"./FSSearchField-BGiFLl4O.js";import"./FSTextField-CiQ29Gk9.js";import"./FSBaseField-ytGCUAbx.js";import"./VSpacer-DaRxrr8q.js";import"./VField-Cs2kmeSz.js";import"./FSSelectField-3pHLE14Z.js";import"./FSDialogMenu-Dnvhdcsp.js";import"./VDialog-QbyZWgXc.js";import"./FSToggleSet-CxkDSH6T.js";import"./FSFadeOut-BRxcyuMB.js";import"./FSRadio-ClRwJSfH.js";import"./VList-CCKQMsMr.js";import"./VSelect-B2uffud2.js";import"./FSOptionGroup-BkPiuB-l.js";import"./filter-C1K_d8Vd.js";import"./filter-_ePnXriG.js";const gt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Ot=["Default","CustomProperties"];export{t as CustomProperties,o as Default,Ot as __namedExportsOrder,gt as default};
