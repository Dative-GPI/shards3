import{F as p}from"./FSTile-wo1DXWl-.js";import{F as i}from"./FSLocationTileUI-B9BuD97m.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSClickable-CusxsKEA.js";import"./FSCard-BOmUSPlM.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D546kqFt.js";import"./useColors-BoRVwO74.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BEfrBPRQ.js";import"./VProgressCircular-BpEvERgl.js";import"./color-DpQhyQC8.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSCheckbox-CsAnMrj7.js";import"./FSIcon-BHUJU4iP.js";import"./VIcon-C65wMs2G.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./index-Dx6GtDlm.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./form-lyoENh9E.js";import"./FSIconCard-CHPC8RgA.js";import"./FSColor-Jme4zaNe.js";const Q={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:p},tags:["autodocs"],argTypes:{}},o={args:{args:{values:[{id:"1",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",deviceCount:5},{id:"2",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",singleSelect:!0},{id:"3",label:"Location test",color:"primary",icon:"mdi-home",deviceCount:5}],selected:[!1,!1,!1]}},render:(n,{argTypes:d})=>({components:{FSLocationTileUI:i},props:Object.keys(d),setup(){return{...n}},template:`
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const R=["Default","Variation1"];export{o as Default,e as Variation1,R as __namedExportsOrder,Q as default};
