import{F as m}from"./FSButton-CzHpksPi.js";import{F as e}from"./FSStatus-BSyYZp6-.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSClickable-Cug_zuK9.js";import"./FSCard-C5xnaBLp.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CpogXLW8.js";import"./useColors-DQIAXgK6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-v7reDO7s.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSIcon-8gYhOFD7.js";import"./VIcon-CzaRZDPI.js";import"./FSChip-BA2dIUZg.js";import"./FSText-BrySk5Rp.js";import"./useDateFormat-B9AxxJcA.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-f9CWAvtI.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useAppTimeZone-oM-olaqI.js";import"./FSColor-CHL-ipzr.js";import"./VMenu-BkqMtGEU.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-G1bil5DU.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";const Y={title:"Foundation/Shared/Status",component:e,tags:["autodocs"],argTypes:{}},i={id:"testId",label:"testLabel",index:1,showDefault:!1},n={label:"testLabelValue",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},t={args:{modelStatus:i,statusGroup:n,size:"32",padding:"8px"},render:(p,{argTypes:a})=>({components:{FSStatus:e,FSButton:m},props:Object.keys(a),setup(){return{args:p}},template:`
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const Z=["Default"];export{t as Default,Z as __namedExportsOrder,Y as default};
