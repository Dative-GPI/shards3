import e from"./FSBaseDeviceOrganisationsList-C64CZLhx.js";import{F as p}from"./FSDataTable-VuekbAPM.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-C_854isR.js";import"./useAppTimeZone-ghwi0HtC.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-BPs0k5Hm.js";import"./FSIcon-DhgV6LdF.js";import"./css-CbCR1nbl.js";import"./useColors-s1xYWcRF.js";import"./index-3zl-tJp_.js";import"./theme-D8Xq3tpQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DptP6m9n.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSText-cnz1-zil.js";import"./useSlots-DXmhvOIb.js";import"./useDateFormat-DAzSBSGK.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./FSImage-v1W0r2Z0.js";import"./FSImageUI-D5o6wXUy.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./VImg-BsFS2wEb.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./FSTagGroup-CG9OJRbv.js";import"./FSWrapGroup-AYmlnqiR.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-SgKZc0Dn.js";import"./FSButton-6xwgcgkA.js";import"./FSClickable-Bf0xM50-.js";import"./FSCard-CsyvoMST.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VProgressCircular-DnrgPZB3.js";import"./FSSpan-etgUZXmX.js";import"./index-joExpvzU.js";import"./display-Cx0CWWL8.js";import"./group-DgCbl5w-.js";import"./proxiedModel-BE9FlVMJ.js";import"./FSTag-DaXt_p_u.js";import"./VBtn-CJflX_3O.js";import"./border-CgF0busY.js";import"./density-BM1QLeh4.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./router-CbAEScZe.js";import"./index-DjMs4W1j.js";import"./VDefaultsProvider-CztrVRTm.js";import"./FSDeviceOrganisationTileUI-D_W_qK8c.js";import"./FSStatusesCarousel-DB-Zr-7r.js";import"./FSWindow-Ctz2OUFZ.js";import"./lazy-CqgcpKMK.js";import"./ssrBoot-D42UTWSS.js";import"./FSChip-ChzFxN0B.js";import"./FSColor-BR0iRdqO.js";import"./VMenu-DOKVMVxb.js";import"./VOverlay-BT06S-GU.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-Du57hNwg.js";import"./FSTile-DkpZ8epA.js";import"./FSCheckbox-2nJSFmbZ.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./form-CgybbRT3.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./useDeviceOrganisations-BzcT3TFS.js";import"./hubFactory-BC_RzFMH.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-BWsRBQLm.js";import"./vue-router-Cn9ishJ4.js";import"./FSSearchField-3iUGjyT4.js";import"./FSTextField-BrYnbjAt.js";import"./FSBaseField-CGde08E6.js";import"./VSpacer-YT0o3rZT.js";import"./VField-DaMwaaXY.js";import"./FSSelectField-CEKk7j9f.js";import"./FSDialogMenu-CgBlLVIv.js";import"./VDialog-1j0g9zHx.js";import"./FSToggleSet-CUrOC1IX.js";import"./FSFadeOut-DFZnJQQe.js";import"./FSRadio-DKr_ONVF.js";import"./VList-DonjtRcz.js";import"./VSelect-BzPZwDdx.js";import"./FSOptionGroup-Badmlel8.js";import"./filter-CkY1Z-lm.js";const to={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
