import{F as s}from"./FSTile-HyyFIrRk.js";import{F as i}from"./FSLocationTileUI-CKW0fpR9.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSClickable-BQ3H9eJY.js";import"./FSCard-DwYAEOV7.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFFgZ74C.js";import"./useColors-B16sP4OM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BKYtCmay.js";import"./VProgressCircular-cHoQoKlr.js";import"./color-DBJfw4cY.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSCheckbox-aOsAP6ny.js";import"./FSIcon-D2mo_-bk.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./form-D8F-RrsG.js";import"./FSIconCard-Bpip9pSu.js";import"./FSColor-CvP29bEO.js";const H={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:s},tags:["autodocs"],argTypes:{color:{control:"color"},height:{control:"number"},width:{control:"number"}}},e={render:n=>({components:{FSLocationTileUI:i},setup(){return{args:n}},template:`
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const J=["Default"];export{e as Default,J as __namedExportsOrder,H as default};
