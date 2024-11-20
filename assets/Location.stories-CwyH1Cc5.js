import{F as s}from"./FSTile-Doy-G9OU.js";import{F as i}from"./FSLocationTileUI-DzOTQ3C_.js";import"./vue.esm-bundler-Zcuj-zyO.js";import"./FSClickable-BAZBeMCh.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-Bzfi7uVq.js";import"./FSCol-DLyNVOXQ.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./FSRow-4Qz6Bbpg.js";import"./useColors-ix1ChreS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DppimMvq.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSCheckbox-CjWE83-y.js";import"./FSIcon-CgyPNi2H.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./density-DMrbDfgW.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-CMMTOWvF.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./dimensions-BWgpWc0X.js";import"./form-ChxmsGl9.js";import"./FSIconCard-DXVTs4mo.js";import"./FSColor-D9-ntwRh.js";const M={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:s},tags:["autodocs"],argTypes:{color:{control:"color"},height:{control:"number"},width:{control:"number"}}},e={render:n=>({components:{FSLocationTileUI:i},setup(){return{args:n}},template:`
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :address="args.address"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        :width="args.width"
        :height="args.height"
        :singleSelect="args.singleSelect"
        :selected="args.selected"
        :modelValue="args.modelValue"
      />
    `}),args:{label:"Location test 2",code:"location-test-code-long-format-with-description",color:"#9F2424",icon:"mdi-cog",deviceCount:1,address:"50 rue des Vignes, 75000 Paris",width:418,height:140,singleSelect:!1,modelValue:!1}};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSLocationTileUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :address="args.address"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        :width="args.width"
        :height="args.height"
        :singleSelect="args.singleSelect"
        :selected="args.selected"
        :modelValue="args.modelValue"
      />
    \`
  }),
  args: {
    label: 'Location test 2',
    code: 'location-test-code-long-format-with-description',
    color: '#9F2424',
    icon: 'mdi-cog',
    deviceCount: 1,
    address: '50 rue des Vignes, 75000 Paris',
    width: 418,
    height: 140,
    singleSelect: false,
    modelValue: false
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,M as default};
