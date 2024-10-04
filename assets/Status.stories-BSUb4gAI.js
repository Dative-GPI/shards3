import{F as m}from"./FSButton-CVLEcQTp.js";import{F as e}from"./FSStatus-B8b62UoX.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSClickable-DB2xZ1ce.js";import"./FSCard-CPhdbHks.js";import"./FSCol-Bj1WIVag.js";import"./css-DVhR3h-A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D4JfwQlG.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-DUHP8dRZ.js";import"./FSChip-DY3DJn_Y.js";import"./FSText-CNEZo4Pd.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useAppTimeZone-DLNqwrXb.js";import"./useTranslations-CEnu7PZQ.js";import"./FSColor-BAntcGmp.js";import"./VMenu-OPxqXTkz.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BN8GSVE7.js";import"./anchor-CiFPvmMB.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./locale-BGMMnFfJ.js";import"./router-lEm-a6ws.js";import"./transition-BvKGRC-_.js";import"./VDefaultsProvider-DPT0EuQR.js";const Z={title:"Foundation/Shared/Status",component:e,tags:["autodocs"],argTypes:{}},i={id:"testId",label:"testLabel",index:1,showDefault:!1},n={label:"testLabelValue",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},t={args:{modelStatus:i,statusGroup:n,size:"32",padding:"8px"},render:(p,{argTypes:a})=>({components:{FSStatus:e,FSButton:m},props:Object.keys(a),setup(){return{args:p}},template:`
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,Z as default};
