import{F as s}from"./FSTile-C7XX9_aa.js";import{F as i}from"./FSLocationTileUI-DlfeAqUr.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSClickable-B8_y_vmt.js";import"./FSCard-Cocsqd0c.js";import"./FSCol-DD5MeAoT.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BjeBkMPV.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSCheckbox-BKUwhDef.js";import"./FSIcon-DfqW6nqQ.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSIconCard-DM6qnjqu.js";import"./FSColor-mfq-MyF2.js";const H={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:s},tags:["autodocs"],argTypes:{color:{control:"color"},height:{control:"number"},width:{control:"number"}}},e={render:n=>({components:{FSLocationTileUI:i},setup(){return{args:n}},template:`
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
