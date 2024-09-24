import{F as p}from"./FSTile-CFEc0iwO.js";import{F as i}from"./FSLocationTileUI-BaNcNJdI.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSClickable-DnsFhA6_.js";import"./FSCard-C9IdgJNY.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CpogXLW8.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSCheckbox-Bu2nWsZZ.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./form-B7NlTRtd.js";import"./FSIconCard-ge-YrHOD.js";import"./FSColor-BvPEcinM.js";const Q={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:p},tags:["autodocs"],argTypes:{}},o={args:{args:{values:[{id:"1",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",deviceCount:5},{id:"2",label:"Location test",code:"location-test",color:"primary",icon:"mdi-home",singleSelect:!0},{id:"3",label:"Location test",color:"primary",icon:"mdi-home",deviceCount:5}],selected:[!1,!1,!1]}},render:(n,{argTypes:d})=>({components:{FSLocationTileUI:i},props:Object.keys(d),setup(){return{...n}},template:`
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
