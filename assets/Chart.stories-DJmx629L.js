import{F as e}from"./FSChartTileUI-MC2yvJr4.js";import"./vue.esm-bundler-0BaZj8Cy.js";import"./FSImage-CRET8ZWw.js";import"./FSImageUI-C9-ibhOt.js";import"./FSLoader-CljC1u5C.js";import"./useBreakpoints-2HHUcVIh.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./css-Bhvr2onI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-v9Utm2wX.js";import"./dimensions-BEVfeJxO.js";import"./elevation-C2OyWM5g.js";import"./locale-CUGdfosF.js";import"./VImg-CiDZbmGb.js";import"./rounded-BByw44D4.js";import"./transition-CCJeTa-A.js";import"./index-BSIzjytc.js";import"./useImages-M2XVSUqr.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-K8W9GIHH.js";import"./useAppAuthToken-CJrsyj37.js";import"./FSTile-CwWk_iVU.js";import"./FSClickable-CbOr5F2S.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSCard-Dlw97Dqr.js";import"./FSCol-D35grUmj.js";import"./FSRow-CAJM3FZ0.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSCheckbox-BCFluEqr.js";import"./FSIcon-BwW5Hq8i.js";import"./FSSpan-BhEzkP-a.js";import"./useSlots-16D6Zf08.js";import"./useRules-B-2YsFdr.js";import"./VSelectionControl-DanrcpVZ.js";import"./density-P84-FGcF.js";import"./proxiedModel-gKZvE0id.js";import"./index-C_NEyI9V.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./index-A-BnjIhl.js";import"./form-BxXGwYee.js";import"./chartsTools-BXrINYUk.js";import"./useTranslations-DJOHKWsD.js";const nt={title:"Foundation/Shared/Tiles/Chart",component:e,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:[{id:"1",label:"Tile 1",icon:"mdi-wifi",type:2},{id:"2",label:"Chart Icon tile 2",icon:"mdi-account",type:4},{id:"3",label:"Chart Icon tile with color",icon:"mdi-chart-line",type:3}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSChartTileUI:e},props:Object.keys(p),setup(){return{...n}},template:`
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
