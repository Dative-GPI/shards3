import{F as e}from"./FSChartTileUI-9OQvzDbH.js";import"./vue.esm-bundler-DSwHwgKw.js";import"./FSImage-D6DTyiE6.js";import"./FSImageUI-CEC0YZq4.js";import"./FSLoader-BCTnX9Pa.js";import"./useBreakpoints-BjF6TIJH.js";import"./useColors-BO83iJ4k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-4AjdAhIV.js";import"./css-XXwFKvUE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-uBYwhjku.js";import"./dimensions-CF0PFV-D.js";import"./elevation-DiTecsj1.js";import"./locale-BsRwbRmi.js";import"./VImg-DSalXW5F.js";import"./rounded-ZilIy1Oq.js";import"./transition--2cAMn_j.js";import"./index-D4rR88Q2.js";import"./imageDetails-B1Ivd7HU.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BC5Ev-17.js";import"./useAppAuthToken-BCmX_25A.js";import"./FSTile-C3y8cd6W.js";import"./FSClickable-DngCBs65.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSCard-BWyLcCxk.js";import"./FSCol-DdGVae5t.js";import"./FSRow-BtkEywPN.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./VIcon-CdjjMQ6V.js";import"./FSCheckbox-B7I9yKzI.js";import"./FSIcon-DbV5muRp.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./useRules-CaMdh5L0.js";import"./VSelectionControl-CTHKpAmd.js";import"./density-BfjPyHiq.js";import"./proxiedModel-D4Pgijkw.js";import"./index-BOr5YZLb.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./index-GTe7atjb.js";import"./form-BWUCG2_i.js";import"./chartsTools-BeGS8mRP.js";import"./useTranslations-BhPzmPwL.js";const nt={title:"Foundation/Shared/Tiles/Chart",component:e,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:[{id:"1",label:"Tile 1",icon:"mdi-wifi",type:2},{id:"2",label:"Chart Icon tile 2",icon:"mdi-account",type:4},{id:"3",label:"Chart Icon tile with color",icon:"mdi-chart-line",type:3}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSChartTileUI:e},props:Object.keys(p),setup(){return{...n}},template:`
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
