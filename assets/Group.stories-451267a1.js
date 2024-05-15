import{F as a}from"./FSGroupTileUI-5fe3c9f4.js";import"./vue.esm-bundler-857e5af7.js";import"./FSImage-0a0b90ec.js";import"./FSLoader-da23fb58.js";import"./css-ab2bdb81.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-3025502c.js";import"./dimensions-946cb0c4.js";import"./elevation-c9d86896.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./useRender-1606c976.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-64294cb0.js";import"./VImg-617a4396.js";import"./rounded-751db039.js";import"./transition-8ae71e6c.js";import"./index-60cd2499.js";import"./FSColor-14106fad.js";import"./FSCard-e175fef9.js";import"./FSCol-439c812a.js";import"./FSRow-e30f1dcc.js";import"./FSText-0e9e862b.js";import"./useSlots-8bee1a74.js";import"./FSTile-75725fa5.js";import"./FSClickable-450f52d6.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./VIcon-77d6c341.js";import"./tag-41ce785e.js";import"./FSCheckbox-54879197.js";import"./FSIcon-d0ab000b.js";import"./FSSpan-9f7a3096.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-ac658b6e.js";import"./density-9a54c498.js";import"./index-1a539509.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./index-900eb6c5.js";const ir={title:"Foundation/Shared/Tiles/Group",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Can't hold us",code:"Macklemore & Ryan Lewis",imageId:"1",recursiveGroupsIds:[],recursiveDeviceOrganisationsIds:[]},{id:"2",label:"Paint the town red",code:"Doja Cat",imageId:"1",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(8).keys()).map(r=>r.toString())},{id:"3",label:"Who's ready for tomorrow",code:"Rat Boy",imageId:"1",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(16).keys()).map(r=>r.toString())},{id:"4",label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",imageId:"1",recursiveGroupsIds:Array.from(Array(100).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())}],selected:[!1,!1]}},render:(r,{argTypes:i})=>({components:{FSGroupTileUI:a},props:Object.keys(i),setup(){return{...r}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTileUI
        v-for="(group, index) in args.values"
        :key="index"
        :imageId="group.imageId"
        :label="group.label"
        :code="group.code"
        :recursiveGroupsIds="group.recursiveGroupsIds"
        :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
        v-model="args.selected[index]"
      />
    </div>`})},s={args:{args:{values:[{id:"1",label:"Can't hold us",code:"Macklemore & Ryan Lewis",recursiveGroupsIds:[],recursiveDeviceOrganisationsIds:[]},{id:"2",label:"Paint the town red",code:"Doja Cat",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(8).keys()).map(r=>r.toString())},{id:"3",label:"Who's ready for tomorrow",code:"Rat Boy",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(16).keys()).map(r=>r.toString())},{id:"4",label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",recursiveGroupsIds:Array.from(Array(100).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())}],selected:[!1,!1]}},render:(r,{argTypes:i})=>({components:{FSGroupTileUI:a},props:Object.keys(i),setup(){return{...r}},template:`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSGroupTileUI
      v-for="(group, index) in args.values"
      :key="index"
      :label="group.label"
      :code="group.code"
      :recursiveGroupsIds="group.recursiveGroupsIds"
      :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
      v-model="args.selected[index]"
    />
  </div>`})};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Can't hold us",
        code: "Macklemore & Ryan Lewis",
        imageId: "1",
        recursiveGroupsIds: [],
        recursiveDeviceOrganisationsIds: []
      }, {
        id: "2",
        label: "Paint the town red",
        code: "Doja Cat",
        imageId: "1",
        recursiveGroupsIds: Array.from(Array(4).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(8).keys()).map(i => i.toString())
      }, {
        id: "3",
        label: "Who's ready for tomorrow",
        code: "Rat Boy",
        imageId: "1",
        recursiveGroupsIds: Array.from(Array(4).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(16).keys()).map(i => i.toString())
      }, {
        id: "4",
        label: "Dynasties & Dystopia",
        code: "Denzel Curry featuring Gizzle and Bren Joy",
        imageId: "1",
        recursiveGroupsIds: Array.from(Array(100).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(100).keys()).map(i => i.toString())
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTileUI
        v-for="(group, index) in args.values"
        :key="index"
        :imageId="group.imageId"
        :label="group.label"
        :code="group.code"
        :recursiveGroupsIds="group.recursiveGroupsIds"
        :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Can't hold us",
        code: "Macklemore & Ryan Lewis",
        recursiveGroupsIds: [],
        recursiveDeviceOrganisationsIds: []
      }, {
        id: "2",
        label: "Paint the town red",
        code: "Doja Cat",
        recursiveGroupsIds: Array.from(Array(4).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(8).keys()).map(i => i.toString())
      }, {
        id: "3",
        label: "Who's ready for tomorrow",
        code: "Rat Boy",
        recursiveGroupsIds: Array.from(Array(4).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(16).keys()).map(i => i.toString())
      }, {
        id: "4",
        label: "Dynasties & Dystopia",
        code: "Denzel Curry featuring Gizzle and Bren Joy",
        recursiveGroupsIds: Array.from(Array(100).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(100).keys()).map(i => i.toString())
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSGroupTileUI
      v-for="(group, index) in args.values"
      :key="index"
      :label="group.label"
      :code="group.code"
      :recursiveGroupsIds="group.recursiveGroupsIds"
      :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
      v-model="args.selected[index]"
    />
  </div>\`
  })
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const ar=["Variations","Imageless"];export{s as Imageless,e as Variations,ar as __namedExportsOrder,ir as default};
