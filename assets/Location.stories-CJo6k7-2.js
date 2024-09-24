import{F as p}from"./FSTile-DFTwexnY.js";import{F as i}from"./FSLocationTileUI-CMFm4r2C.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSClickable-MDWPSUzP.js";import"./FSCard-Dakm4bPu.js";import"./FSCol-DZA6pxA1.js";import"./css-DLfrm0pR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CA1vgNXx.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VProgressCircular-D09FP1rk.js";import"./color--o2QfpAv.js";import"./tag-DB5D_XjQ.js";import"./FSCheckbox-BqHXdD4S.js";import"./FSIcon-C66wKzEa.js";import"./VIcon-BQIm0b3J.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-DxF8PKcC.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./locale-C-s_GJlL.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSIconCard-myhl7XBZ.js";import"./FSColor-CSobaj7A.js";const P={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:p},tags:["autodocs"],argTypes:{}},o={args:{args:{values:[{id:"1",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",deviceCount:5},{id:"2",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",singleSelect:!0},{id:"3",label:"Location test",color:"primary",icon:"mdi-home",deviceCount:5}],selected:[!1,!1,!1]}},render:(n,{argTypes:d})=>({components:{FSLocationTileUI:i},props:Object.keys(d),setup(){return{...n}},template:`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSLocationTileUI
      v-for="(entity, index) in args.values"
      :key="index"
      v-model="args.selected[index]"
      v-bind="entity"
    />
  </div>`})},e={render:n=>({components:{FSLocationTileUI:i},setup(){return{args:n}},template:`
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        width="320px"
        height="220px"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        width="520px"
        height="220px"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        width="100%"
        :deviceCount="args.deviceCount"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
      />
    `}),args:{label:"Location test 2",code:"location-test-code-long-format-with-description",color:"#9F2424",icon:"mdi-cog",deviceCount:1}};var t,r,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: 'Location test',
        code: 'location-test',
        color: 'primary',
        icon: 'mdi-home',
        deviceCount: 5
      }, {
        id: "2",
        label: 'Location test',
        code: 'location-test',
        color: 'primary',
        icon: 'mdi-home',
        singleSelect: true
      }, {
        id: "3",
        label: 'Location test',
        color: 'primary',
        icon: 'mdi-home',
        deviceCount: 5
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSLocationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSLocationTileUI
      v-for="(entity, index) in args.values"
      :key="index"
      v-model="args.selected[index]"
      v-bind="entity"
    />
  </div>\`
  })
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var c,s,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        width="320px"
        height="220px"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        width="520px"
        height="220px"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        width="100%"
        :deviceCount="args.deviceCount"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
      />
    \`
  }),
  args: {
    label: 'Location test 2',
    code: 'location-test-code-long-format-with-description',
    color: '#9F2424',
    icon: 'mdi-cog',
    deviceCount: 1
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const Q=["Default","Variation1"];export{o as Default,e as Variation1,Q as __namedExportsOrder,P as default};
