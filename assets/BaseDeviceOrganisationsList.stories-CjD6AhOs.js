import r from"./FSBaseDeviceOrganisationsList-CI97NekM.js";import{F as l}from"./FSDataTable-B2Et5lGC.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-DKDpMJjS.js";import"./useAppTimeZone-oM-olaqI.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-DQPhMVT4.js";import"./FSIcon-BCbpBdVG.js";import"./css-BkQhD285.js";import"./useColors-CdvgF10X.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSText-Der-WemT.js";import"./useDateFormat-B9AxxJcA.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-f9CWAvtI.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./FSDeviceOrganisationTileUI-DaqE9aRd.js";import"./FSStatusesCarousel-DX2_RbZg.js";import"./FSButton-DS0wrBKk.js";import"./FSClickable-DnsFhA6_.js";import"./FSCard-C9IdgJNY.js";import"./FSCol-TPWSQPHs.js";import"./FSRow-CpogXLW8.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./FSWindow-BQgkDhQ2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./locale-Dn84bpGK.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./density-BPFRY_Tg.js";import"./elevation-kEG7tFkj.js";import"./rounded-Cely44IK.js";import"./dimensions-DBrW1AO_.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./router-Cjjv2JN-.js";import"./index-CN4E1Twd.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./lazy-Dq_5BjJr.js";import"./ssrBoot-Ddid0i9S.js";import"./transition-C6adUwH7.js";import"./FSStatus-DqK0JUtJ.js";import"./FSChip-BaGlgeX3.js";import"./FSColor-BvPEcinM.js";import"./VMenu-BkqMtGEU.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./display-CRYv_UDL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-BmaXZ3H9.js";import"./FSImage-Bf-rzOTG.js";import"./FSImageUI-DCipACiG.js";import"./FSLoader-DpMpI5Qw.js";import"./VImg-IVf3xxVd.js";import"./index-Cc8xmT7Y.js";import"./useImages-DPyqwdzZ.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-D0eCIUsD.js";import"./FSTile-CFEc0iwO.js";import"./FSCheckbox-Bu2nWsZZ.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./form-B7NlTRtd.js";import"./FSTagGroup-BUCopmDu.js";import"./FSWrapGroup-D3vzPBUf.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./FSTag-wE9m6Rnh.js";import"./FSSlideGroup-DlNGN2Nb.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./useDeviceOrganisations-BacPyPzr.js";import"./hubFactory-C9xpacOY.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-BxNu3vqV.js";import"./vue-router-C7inxZoN.js";import"./FSSearchField-CGsun2bQ.js";import"./FSTextField-DSbw_bnX.js";import"./FSBaseField-CruMavxg.js";import"./VSpacer-CrqXaTz-.js";import"./VField-BnYbwRuc.js";import"./FSSelectField-BNF0cunm.js";import"./FSDialogMenu-CUwupOm-.js";import"./VDialog-BtZGJwxx.js";import"./FSToggleSet-CzRpQEWO.js";import"./FSFadeOut-CNI_FQpM.js";import"./FSRadio-ChOxIOPt.js";import"./VList-CJJ57CS8.js";import"./VSelect-DlfHU1SC.js";import"./FSOptionGroup-DXtDjFR4.js";import"./filter-C1K_d8Vd.js";import"./filter-BS4_e9hb.js";const ct={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:r,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:e=>({components:{FSBaseDeviceOrganisationsList:r},setup(){return{args:e}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})},t={args:{modelValue:[],tableCode:"devices2",connectedOnly:!1},render:e=>({components:{FSBaseDeviceOrganisationsList:r},setup(){return{args:e}},template:`
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const dt=["Default","CustomProperties"];export{t as CustomProperties,o as Default,dt as __namedExportsOrder,ct as default};
