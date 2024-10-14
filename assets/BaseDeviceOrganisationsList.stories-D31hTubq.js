import e from"./FSBaseDeviceOrganisationsList-CSdoP-Ny.js";import{F as l}from"./FSDataTable-FPP5HfB9.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-54ka7U5s.js";import"./useAppTimeZone-ByDiY2xy.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-bOZIxm0n.js";import"./FSIcon-8KdV556C.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-CeHYzu6a.js";import"./index-3zl-tJp_.js";import"./theme-CX_N7n5F.js";import"./css-B7hQ34V-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DzZvThha.js";import"./color-Du5JXqac.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSText-GEqj0Yf_.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useTranslations-BehwFxDb.js";import"./FSDeviceOrganisationTileUI-B193APKT.js";import"./FSStatusesCarousel-PMEnsY8m.js";import"./FSButton-BpVntGX1.js";import"./FSClickable-B6-SRbsx.js";import"./FSCard-B1dz5tzT.js";import"./FSCol-CYWCfIBP.js";import"./FSRow-CFFgZ74C.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./FSWindow-Brcf5j8v.js";import"./group-CBQYGNTq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./locale-BJQwrXJ7.js";import"./VBtn-BUwP05fv.js";import"./border-Va--AsO6.js";import"./density-CmGe4Vfq.js";import"./elevation-JfXKLVfD.js";import"./rounded-ErtzAGHK.js";import"./dimensions-CqoZOW6j.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./router-DxFny788.js";import"./index-DMxVfgfA.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./lazy-CgkI0iJG.js";import"./ssrBoot-BTOmRKcz.js";import"./transition-DhTIerNz.js";import"./FSStatus-CX1qPSQH.js";import"./FSChip-B9LiwYIc.js";import"./FSColor-CgZZAfyB.js";import"./VMenu-CuKNZEBs.js";import"./VOverlay-Coy41zxg.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BhWGQDVt.js";import"./alertsTools-m5cNzKhy.js";import"./FSDivider-D0i7_MA_.js";import"./FSImage-CQBut9Qm.js";import"./FSImageUI-BSBOp46R.js";import"./FSLoader-DZRtMKjr.js";import"./VImg-C1aVTsth.js";import"./index-DS9MhfY5.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSTile-5__V1e0r.js";import"./FSCheckbox-D8gZetLs.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./index-UH0ZuYvc.js";import"./form-_oo3cshG.js";import"./FSTagGroup-CT8e6jqU.js";import"./FSWrapGroup-DVMuqcCh.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./FSTag-B-5O6Uat.js";import"./FSSlideGroup-DmKFw8LF.js";import"./FSButtonNextIcon-C52WoPTh.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./useDeviceOrganisations-DYYfdIWi.js";import"./hubFactory-BG4vFkeF.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-EBMna3Zs.js";import"./vue-router-Bp8FxDoy.js";import"./FSSearchField-N7Q5f50N.js";import"./FSTextField-C5__iWNH.js";import"./FSBaseField-CMNvz_3q.js";import"./VSpacer-Di7g3RCw.js";import"./VField-Do2gtyNA.js";import"./FSSelectField-xDwiqDkA.js";import"./FSDialogMenu-YRnMwSLB.js";import"./VDialog-5T0GPOZ7.js";import"./FSToggleSet-SCoTAs1I.js";import"./FSFadeOut-BcBUJmEE.js";import"./FSRadio-Cnla-8h4.js";import"./VList-CgmTLoPW.js";import"./VSelect-CqV6SyPb.js";import"./FSOptionGroup-CMcO6yHM.js";import"./filter-C1K_d8Vd.js";import"./filter-COIlslko.js";const Ot={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
