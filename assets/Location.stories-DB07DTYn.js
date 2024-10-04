import{F as p}from"./FSTile-CBWW7c3A.js";import{F as i}from"./FSLocationTileUI-nUmyzZMu.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./FSCol-Bj1WIVag.js";import"./css-DVhR3h-A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D4JfwQlG.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSCheckbox-18K-cCtB.js";import"./FSIcon-vAlkpflo.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSIconCard-TnxQlSY2.js";import"./FSColor-b-_lfIO5.js";const P={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:p},tags:["autodocs"],argTypes:{}},o={args:{args:{values:[{id:"1",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",deviceCount:5},{id:"2",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",singleSelect:!0},{id:"3",label:"Location test",color:"primary",icon:"mdi-home",deviceCount:5}],selected:[!1,!1,!1]}},render:(n,{argTypes:d})=>({components:{FSLocationTileUI:i},props:Object.keys(d),setup(){return{...n}},template:`
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
