import{F as s}from"./FSTile-5__V1e0r.js";import{F as i}from"./FSLocationTileUI-BIKR3dHZ.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSClickable-B6-SRbsx.js";import"./FSCard-B1dz5tzT.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFFgZ74C.js";import"./useColors-CeHYzu6a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CX_N7n5F.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSCheckbox-D8gZetLs.js";import"./FSIcon-8KdV556C.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-DMxVfgfA.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./locale-BJQwrXJ7.js";import"./index-UH0ZuYvc.js";import"./transition-DhTIerNz.js";import"./form-_oo3cshG.js";import"./FSIconCard-0iP8e_wx.js";import"./FSColor-CgZZAfyB.js";const H={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:s},tags:["autodocs"],argTypes:{color:{control:"color"},height:{control:"number"},width:{control:"number"}}},e={render:n=>({components:{FSLocationTileUI:i},setup(){return{args:n}},template:`
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
