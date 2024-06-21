import{F as r}from"./FSSimpleTileUI-C4BdqrmY.js";import"./vue.esm-bundler-DUki7rNA.js";import"./FSCard-CqpJmiEC.js";import"./FSCol-BBaW1DrL.js";import"./css-BPLLlL3Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CHgEOZQb.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./FSIcon-CSwom3lG.js";import"./VIcon-BfI5ony8.js";import"./color-B6JLWHIR.js";import"./useRender-pAH_6Aah.js";import"./tag-BAqPjmMA.js";import"./FSImage-B5i4zCjK.js";import"./FSLoader-DSIWG3YN.js";import"./dimensions-BRqNSfbQ.js";import"./elevation-B5zwTzN8.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./base-BNnJ_ndD.js";import"./composableFactory-cXrrETVr.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./VImg-C0UHAW7L.js";import"./rounded-CuOTz_ni.js";import"./transition-CAmaHrck.js";import"./index-CeJtk2ua.js";import"./FSText-CE19e0tM.js";import"./useSlots-BZu_lZyn.js";import"./FSTile-Ci-2C5M0.js";import"./FSClickable-FCUZtikK.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./FSCheckbox-CisQZrrP.js";import"./FSSpan-DUTdSgpN.js";import"./useRules-ChvLepw4.js";import"./VSelectionControl-D7t-g0gO.js";import"./density-CE9JT2ZV.js";import"./index-IoB6lNSN.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./index-zNldQLkd.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        :label="entity.label"
        :code="entity.code"
        :color="entity.colors"
        v-model="args.selected[index]"
      />
    </div>`})};var i,o,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        code: "code"
      }, {
        id: "2",
        label: "Simple Icon tile 2"
      }, {
        id: "3",
        label: "Simple Icon tile with color",
        colors: ["#0000FF", "#FFFFFF"]
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
        :label="entity.label"
        :code="entity.code"
        :color="entity.colors"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const $=["Variations"];export{e as Variations,$ as __namedExportsOrder,Z as default};
