import{F as m}from"./FSButton-Cj1rvnYn.js";import{F as p}from"./FSStatus-4gqGICf2.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSRouterLink-2qKFAEm5.js";import"./vue-router-C4bv40Tb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-DfRcT5kA.js";import"./FSCard-DL4SLpmS.js";import"./FSCol-BvqytbKT.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./FSRow-CbEgVN08.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-uIr9VdFq.js";import"./FSChip-CH8gQQD0.js";import"./FSText-BwKgSTLP.js";import"./useDateFormat-CLdrxMO6.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useAppTimeZone-BUrTBgYP.js";import"./useTranslations-CJK8D24x.js";import"./FSColor-DXUGLDNs.js";import"./VMenu-DQq2E1HW.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";const rt={title:"Foundation/Shared/Status",component:p,tags:["autodocs"],argTypes:{}},i={id:"testId",label:"testLabel",index:1,showDefault:!1},n={label:"testLabelValue",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},t={args:{modelStatus:i,statusGroup:n,size:"32",padding:"8px"},render:(e,{argTypes:a})=>({components:{FSStatus:p,FSButton:m},props:Object.keys(a),setup(){return{args:e}},template:`
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
