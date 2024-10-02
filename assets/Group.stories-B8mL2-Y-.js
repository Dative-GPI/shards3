import{F as a}from"./FSGroupTileUI-OQf7Rkk-.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSImage-C9ySLapv.js";import"./FSImageUI-S1V1r0uW.js";import"./FSLoader-BMQDJgx0.js";import"./css-D18ueKtB.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DpQhyQC8.js";import"./dimensions-DBaG2oVF.js";import"./elevation-8SXivnh1.js";import"./locale-DgxPCyxi.js";import"./VImg-616TDJo4.js";import"./rounded-Cd5tqTfa.js";import"./transition-DZ-8zzo1.js";import"./index-CQjBi2ms.js";import"./useImages-DkNM0cBn.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";import"./useAppAuthToken-JHUrxSke.js";import"./FSColor-v9frFHZv.js";import"./FSCard-uGx4g-q0.js";import"./FSCol-Co9r7Klj.js";import"./FSRow-D546kqFt.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSTile-C18qmuVB.js";import"./FSClickable-xECbCdT3.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSCheckbox-BJ0zq37S.js";import"./FSIcon-DKHuRfPI.js";import"./VIcon-C65wMs2G.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./index-Dx6GtDlm.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./index-D0m5TbR6.js";import"./form-lyoENh9E.js";const or={title:"Foundation/Shared/Tiles/Group",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Can't hold us",code:"Macklemore & Ryan Lewis",imageId:"1",recursiveGroupsIds:[],recursiveDeviceOrganisationsIds:[]},{id:"2",label:"Paint the town red",code:"Doja Cat",imageId:"1",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(8).keys()).map(r=>r.toString())},{id:"3",label:"Who's ready for tomorrow",code:"Rat Boy",imageId:"1",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(16).keys()).map(r=>r.toString())},{id:"4",label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",imageId:"1",recursiveGroupsIds:Array.from(Array(100).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())}],selected:[!1,!1]}},render:(r,{argTypes:i})=>({components:{FSGroupTileUI:a},props:Object.keys(i),setup(){return{...r}},template:`
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
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const nr=["Variations","Imageless"];export{s as Imageless,e as Variations,nr as __namedExportsOrder,or as default};
