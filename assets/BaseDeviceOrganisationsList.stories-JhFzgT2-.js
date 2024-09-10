import e from"./FSBaseDeviceOrganisationsList-oITmGzY-.js";import{F as p}from"./FSDataTable-DaSPBtvp.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-Ckz981CG.js";import"./useAppTimeZone-ghwi0HtC.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-xWUY0h17.js";import"./FSIcon-uPx7S--r.js";import"./css-CbCR1nbl.js";import"./useColors-Bw2ZR-m1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DptP6m9n.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSText-aZSl7JAe.js";import"./useSlots-DXmhvOIb.js";import"./useDateFormat-DAzSBSGK.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./FSImage-CBathzkQ.js";import"./FSImageUI-E0mf0Zhc.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./VImg-BUrdc1ij.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./FSTagGroup-CRl4oyjK.js";import"./FSWrapGroup-Bqec5oyw.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BrsH_RdA.js";import"./FSButton-9Jyc5oF6.js";import"./FSClickable-B4ZW0Yow.js";import"./FSCard-U7GdUEkx.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VProgressCircular-DnrgPZB3.js";import"./FSSpan-etgUZXmX.js";import"./index-joExpvzU.js";import"./display-Cx0CWWL8.js";import"./group-DgCbl5w-.js";import"./proxiedModel-BE9FlVMJ.js";import"./FSTag-Cuq-alF0.js";import"./VBtn-CJflX_3O.js";import"./border-CgF0busY.js";import"./density-BM1QLeh4.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./router-CbAEScZe.js";import"./index-DjMs4W1j.js";import"./VDefaultsProvider-CztrVRTm.js";import"./FSDeviceOrganisationTileUI-C3XsYDwm.js";import"./FSStatusesCarousel-C4Xbc4pB.js";import"./FSWindow-Ctz2OUFZ.js";import"./lazy-CqgcpKMK.js";import"./ssrBoot-D42UTWSS.js";import"./FSChip-Bhktj6Ea.js";import"./FSColor-Lyepgel_.js";import"./VMenu-DOKVMVxb.js";import"./VOverlay-BT06S-GU.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-BzbNCf6i.js";import"./FSTile-CkO82QFl.js";import"./FSCheckbox-Bsnpn4tO.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./form-CgybbRT3.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./useDeviceOrganisations-BzcT3TFS.js";import"./hubFactory-BC_RzFMH.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-qySX4F1Y.js";import"./vue-router-Cn9ishJ4.js";import"./FSSearchField-C-Ns7NpV.js";import"./FSTextField-xplhuXw_.js";import"./FSBaseField-Bip4KV2X.js";import"./VSpacer-YT0o3rZT.js";import"./VField-DaMwaaXY.js";import"./FSSelectField-D30uP2ew.js";import"./FSDialogMenu-7NQLw-fe.js";import"./VDialog-1j0g9zHx.js";import"./FSToggleSet-DeUMSMgz.js";import"./FSFadeOut-BAo4zk1P.js";import"./FSRadio-B1FN7cQo.js";import"./VList-DzB42uLT.js";import"./VSelect-Dca9hLjt.js";import"./FSOptionGroup-oFDYiJhW.js";import"./filter-CkY1Z-lm.js";const to={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const oo=["Default"];export{t as Default,oo as __namedExportsOrder,to as default};
