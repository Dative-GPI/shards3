import{F as r}from"./FSSimpleTileUI-BZOVb8LR.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSIconCard-pZaZs4Fj.js";import"./FSCard-uGx4g-q0.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D546kqFt.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./FSIcon-DKHuRfPI.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./tag-ByYBjpGI.js";import"./FSImage-C9ySLapv.js";import"./FSImageUI-S1V1r0uW.js";import"./FSLoader-BMQDJgx0.js";import"./dimensions-DBaG2oVF.js";import"./elevation-8SXivnh1.js";import"./locale-DgxPCyxi.js";import"./VImg-616TDJo4.js";import"./rounded-Cd5tqTfa.js";import"./transition-DZ-8zzo1.js";import"./index-CQjBi2ms.js";import"./useImages-DkNM0cBn.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";import"./useAppAuthToken-JHUrxSke.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSTile-C18qmuVB.js";import"./FSClickable-xECbCdT3.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./FSCheckbox-BJ0zq37S.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./index-Dx6GtDlm.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./index-D0m5TbR6.js";import"./form-lyoENh9E.js";const te={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple Icon tile with color",bottomColor:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>`})};var i,t,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        code: "code"
      }, {
        id: "2",
        label: "Simple Icon tile 2",
        icon: "mdi-account",
        singleSelect: true
      }, {
        id: "3",
        label: "Simple Icon tile with color",
        bottomColor: ["#0000FF", "#FFFFFF"]
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSimpleTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>\`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const oe=["Variations"];export{e as Variations,oe as __namedExportsOrder,te as default};
