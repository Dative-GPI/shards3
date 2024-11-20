import{F as e}from"./FSChartTileUI-mhf45mex.js";import"./vue.esm-bundler-Ddr6MgcY.js";import"./FSImage-9J49soYl.js";import"./FSImageUI-CifHzJ5L.js";import"./FSLoader-PksHGtEK.js";import"./useBreakpoints-BMg9gIvD.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DdAXPAA0.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./VImg-Bi-pKvLj.js";import"./rounded-BoPqla0T.js";import"./transition-BtBp4lzQ.js";import"./index-lTYthPHq.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSTile-BHCSbyjx.js";import"./FSClickable-D7sul-uP.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSCol-D8gLxM2E.js";import"./FSRow-CSQtiyAx.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSCheckbox-3iIuKfLX.js";import"./FSIcon-DfjSexyz.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./index-BF2Ge4Ib.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./index-B-qTxNvr.js";import"./form-vji0TmoR.js";import"./chartsTools-BXyv05r8.js";import"./useTranslations-DgvmBCqU.js";const nt={title:"Foundation/Shared/Tiles/Chart",component:e,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:[{id:"1",label:"Tile 1",icon:"mdi-wifi",type:2},{id:"2",label:"Chart Icon tile 2",icon:"mdi-account",type:4},{id:"3",label:"Chart Icon tile with color",icon:"mdi-chart-line",type:3}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSChartTileUI:e},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSChartTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>`})};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        icon: "mdi-wifi",
        type: 2
      }, {
        id: "2",
        label: "Chart Icon tile 2",
        icon: "mdi-account",
        type: 4
      }, {
        id: "3",
        label: "Chart Icon tile with color",
        icon: "mdi-chart-line",
        type: 3
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSChartTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSChartTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>\`
  })
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const pt=["Variations"];export{t as Variations,pt as __namedExportsOrder,nt as default};
