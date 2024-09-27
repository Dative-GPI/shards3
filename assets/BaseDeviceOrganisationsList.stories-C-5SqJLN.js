import r from"./FSBaseDeviceOrganisationsList-BSJS4DkQ.js";import{F as l}from"./FSDataTable-B7PhBYll.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-iFcnmUAX.js";import"./useAppTimeZone-oM-olaqI.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-CBn55k2l.js";import"./FSIcon-DCIvejCK.js";import"./css-BkQhD285.js";import"./useColors-C-2usiDI.js";import"./index-3zl-tJp_.js";import"./theme-v7reDO7s.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSText-CV-cArvf.js";import"./useDateFormat-C-ZOz_ut.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useTranslations-f9CWAvtI.js";import"./FSDeviceOrganisationTileUI-DgXrqm44.js";import"./FSStatusesCarousel-DklqeWsk.js";import"./FSButton-B49VW4HX.js";import"./FSClickable-CbCMktDA.js";import"./FSCard-BraeKnTa.js";import"./FSCol-TPWSQPHs.js";import"./FSRow-CmD7j8Pv.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./FSWindow-BQgkDhQ2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./locale-Dn84bpGK.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./density-BPFRY_Tg.js";import"./elevation-kEG7tFkj.js";import"./rounded-Cely44IK.js";import"./dimensions-DBrW1AO_.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./router-Cjjv2JN-.js";import"./index-CN4E1Twd.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./lazy-Dq_5BjJr.js";import"./ssrBoot-Ddid0i9S.js";import"./transition-C6adUwH7.js";import"./FSStatus-CRWWl1YY.js";import"./FSChip-Cf74VseB.js";import"./FSColor-DF21_upv.js";import"./VMenu-BkqMtGEU.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./display-CRYv_UDL.js";import"./alertsTools-CYFbEPrE.js";import"./FSDivider-CWQZdq5p.js";import"./FSImage-B4TBRb6G.js";import"./FSImageUI-DV07oa_w.js";import"./FSLoader-EdeUV0_k.js";import"./VImg-IVf3xxVd.js";import"./index-Cc8xmT7Y.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CNptecSH.js";import"./FSTile-BKHvzTk9.js";import"./FSCheckbox-Dz1GIEd_.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./form-B7NlTRtd.js";import"./FSTagGroup-C3ouuGG9.js";import"./FSWrapGroup-B1tkF8GY.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./FSTag-DDp8z1Sr.js";import"./FSSlideGroup-DpMQsfGo.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./useDeviceOrganisations-B33TMhE_.js";import"./hubFactory-C9xpacOY.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-6Q20GUJW.js";import"./vue-router-C7inxZoN.js";import"./FSSearchField-BOGDN3XM.js";import"./FSTextField-DYD-Iv_E.js";import"./FSBaseField-MQGmXxR2.js";import"./VSpacer-CrqXaTz-.js";import"./VField-BnYbwRuc.js";import"./FSSelectField-BDJbX3Ee.js";import"./FSDialogMenu-B03F1rLC.js";import"./VDialog-BtZGJwxx.js";import"./FSToggleSet-CqR-o65z.js";import"./FSFadeOut-QsEpWU03.js";import"./FSRadio-C3R2p5jP.js";import"./VList-CJJ57CS8.js";import"./VSelect-BK9ljo9C.js";import"./FSOptionGroup-D2qHzHzR.js";import"./filter-C1K_d8Vd.js";import"./filter-BS4_e9hb.js";const ct={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:r,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:e=>({components:{FSBaseDeviceOrganisationsList:r},setup(){return{args:e}},template:`
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
