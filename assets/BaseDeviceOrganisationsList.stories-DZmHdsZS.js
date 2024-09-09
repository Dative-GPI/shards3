import e from"./FSBaseDeviceOrganisationsList-DulyCnwa.js";import{F as p}from"./FSDataTable-B7lOWiBV.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-C1-kDuzP.js";import"./useAppTimeZone-ghwi0HtC.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-CHsJ_NYS.js";import"./FSIcon-DYxpTLuT.js";import"./css-CbCR1nbl.js";import"./useColors-C8ZtkfWa.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DptP6m9n.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSText-DhsiUbil.js";import"./useSlots-DXmhvOIb.js";import"./useDateFormat-DZcIDWp6.js";import"./datesTools-RiUw1NMp.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./FSImage-GlEhSKTp.js";import"./FSImageUI-IzO1fAdz.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./VImg-Da3f9R37.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./FSTagGroup-DpmakQzf.js";import"./FSWrapGroup-CSqxXTzY.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-COYtI-Nu.js";import"./FSButton-D9OonqCF.js";import"./FSClickable-CfNRAgb8.js";import"./FSCard-D5wiJKub.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VProgressCircular-DnrgPZB3.js";import"./FSSpan-etgUZXmX.js";import"./index-joExpvzU.js";import"./display-Cx0CWWL8.js";import"./group-DgCbl5w-.js";import"./proxiedModel-BE9FlVMJ.js";import"./FSTag--B310hl1.js";import"./VBtn-CJflX_3O.js";import"./border-CgF0busY.js";import"./density-BM1QLeh4.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./router-CbAEScZe.js";import"./index-DjMs4W1j.js";import"./VDefaultsProvider-CztrVRTm.js";import"./FSDeviceOrganisationTileUI-BvyOQVX_.js";import"./FSStatusesCarousel-B0-5A2Nc.js";import"./FSWindow-Ctz2OUFZ.js";import"./lazy-CqgcpKMK.js";import"./ssrBoot-D42UTWSS.js";import"./FSChip-BzumMGJt.js";import"./FSColor-B2EzjdVF.js";import"./VMenu-DOKVMVxb.js";import"./VOverlay-BT06S-GU.js";import"./forwardRefs-DWGaNmQL.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-BJmJfrRD.js";import"./FSTile-d1l9KX5c.js";import"./FSCheckbox-B0fh_Rt7.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./form-CgybbRT3.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./useDeviceOrganisations-ChUOcl9p.js";import"./hubFactory-BC_RzFMH.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-BHj-0v-F.js";import"./vue-router-Cn9ishJ4.js";import"./FSSearchField-Br299av8.js";import"./FSTextField-BQbZuAPn.js";import"./FSBaseField-DEWTBdWD.js";import"./VSpacer-YT0o3rZT.js";import"./VField-DaMwaaXY.js";import"./FSSelectField-C0lWTIfj.js";import"./FSDialogMenu-BPvC2ERZ.js";import"./VDialog-1j0g9zHx.js";import"./FSToggleSet-BMnFEOfS.js";import"./FSFadeOut-CB131b1X.js";import"./FSRadio-B3ak8RSo.js";import"./VList-DgcfM2IV.js";import"./VSelect-iR212XTF.js";import"./FSOptionGroup-CE9M3vJW.js";import"./filter-CkY1Z-lm.js";const to={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:p},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},t={render:m=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:m}},template:`
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
