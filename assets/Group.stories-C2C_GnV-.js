import{F as a}from"./FSGroupTileUI-PqEAdnJu.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSImage-FnP2DM24.js";import"./FSImageUI-D9dXMF0c.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CS2nLnTC.js";import"./FSLoader-KrLuz6mY.js";import"./css-DYbKqpMF.js";import"./useColors-nvbUnVB9.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DRqqT5iF.js";import"./dimensions-C81rpiLV.js";import"./elevation-BS7jUP1v.js";import"./locale-x-KasAKq.js";import"./VImg-MapJeLY6.js";import"./rounded-DVRtD5BX.js";import"./transition-DYmm1B3d.js";import"./index-VkvlNmfl.js";import"./FSColor-DUg8xh2U.js";import"./FSCard-CU93xE1v.js";import"./FSCol-CeBQ3oDD.js";import"./FSRow-Dfo2nEmE.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSTile-D_lRF0BY.js";import"./FSClickable-Bx8zcCZW.js";import"./VProgressCircular-CQOkkHxu.js";import"./VIcon-CB8o8wL4.js";import"./FSCheckbox-DNmwW8YA.js";import"./FSIcon-CYA01Pg8.js";import"./useRules-Dm3K--o-.js";import"./VSelectionControl-CQKVm7EG.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./index-Bfb9sPge.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./index-CtF1TxK6.js";const rr={title:"Foundation/Shared/Tiles/Group",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Can't hold us",code:"Macklemore & Ryan Lewis",imageId:"1",recursiveGroupsIds:[],recursiveDeviceOrganisationsIds:[]},{id:"2",label:"Paint the town red",code:"Doja Cat",imageId:"1",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(8).keys()).map(r=>r.toString())},{id:"3",label:"Who's ready for tomorrow",code:"Rat Boy",imageId:"1",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(16).keys()).map(r=>r.toString())},{id:"4",label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",imageId:"1",recursiveGroupsIds:Array.from(Array(100).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())}],selected:[!1,!1]}},render:(r,{argTypes:i})=>({components:{FSGroupTileUI:a},props:Object.keys(i),setup(){return{...r}},template:`
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
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const er=["Variations","Imageless"];export{s as Imageless,e as Variations,er as __namedExportsOrder,rr as default};
