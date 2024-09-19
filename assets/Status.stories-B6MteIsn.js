import{F as m}from"./FSButton-jJkg4qCi.js";import{F as e}from"./FSStatus-CKwBWIbe.js";import"./vue.esm-bundler-BwDfg4wG.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./css-DTUiF03J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-k5pgBhR1.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VProgressCircular-CmpAWY4m.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./FSChip-kw9MOYsi.js";import"./FSText-CwwFvnOv.js";import"./useDateFormat-B3lPS72n.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CHmpEDXr.js";import"./useAppLanguageCode--ssgoHQ3.js";import"./useAppTimeZone-8KaETkN8.js";import"./FSColor-CZ6aXURW.js";import"./VMenu-CbEP2O2_.js";import"./VOverlay-DP3B0xk9.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-okNizC5Y.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";const X={title:"Foundation/Shared/Status",component:e,tags:["autodocs"],argTypes:{}},i={id:"testId",label:"testLabel",index:1,showDefault:!1},n={label:"testLabelValue",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},t={args:{modelStatus:i,statusGroup:n,size:"32",padding:"8px"},render:(p,{argTypes:a})=>({components:{FSStatus:e,FSButton:m},props:Object.keys(a),setup(){return{args:p}},template:`
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const Y=["Default"];export{t as Default,Y as __namedExportsOrder,X as default};
