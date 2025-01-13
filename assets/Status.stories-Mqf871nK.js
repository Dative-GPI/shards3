import{F as m}from"./FSButton-BDSx2V0J.js";import{F as p}from"./FSStatus-BIuIeEL3.js";import"./vue.esm-bundler-0BaZj8Cy.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-CbOr5F2S.js";import"./FSCard-Dlw97Dqr.js";import"./FSCol-D35grUmj.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./FSRow-CAJM3FZ0.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./VProgressCircular-NnNXhC5D.js";import"./color-v9Utm2wX.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSSpan-BhEzkP-a.js";import"./useSlots-16D6Zf08.js";import"./FSIcon-BwW5Hq8i.js";import"./FSChip-D6DhAgXx.js";import"./FSText-BhZd10FY.js";import"./useDateFormat-BXgZLhEq.js";import"./useAppTimeZone-DM0cmP8g.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DX4nWmzx.js";import"./useTranslations-DJOHKWsD.js";import"./FSColor-BdwdbfvH.js";import"./VMenu-664v_26-.js";import"./VOverlay-CTri8YxJ.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-gKZvE0id.js";import"./anchor-B7sx4vRv.js";import"./dimensions-BEVfeJxO.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./locale-CUGdfosF.js";import"./router-DTj21Dkp.js";import"./transition-CCJeTa-A.js";import"./VDefaultsProvider-DlfGiSFQ.js";const rt={title:"Foundation/Shared/Status",component:p,tags:["autodocs"],argTypes:{}},i={id:"testId",label:"testLabel",index:1,showDefault:!1},n={label:"testLabelValue",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},t={args:{modelStatus:i,statusGroup:n,size:"32",padding:"8px"},render:(e,{argTypes:a})=>({components:{FSStatus:p,FSButton:m},props:Object.keys(a),setup(){return{args:e}},template:`
      <FSStatus 
        :modelStatus="args.modelStatus" 
        :statusGroup="args.statusGroup" 
        :size="args.size",
        :padding="args.padding"
      />`})};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    modelStatus: modelStatus,
    statusGroup: statusGroup,
    size: '32',
    padding: '8px'
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSStatus,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSStatus 
        :modelStatus="args.modelStatus" 
        :statusGroup="args.statusGroup" 
        :size="args.size",
        :padding="args.padding"
      />\`
  })
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const ot=["Default"];export{t as Default,ot as __namedExportsOrder,rt as default};
