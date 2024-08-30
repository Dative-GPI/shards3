import{F as r}from"./FSSimpleTileUI-alnTuZFE.js";import"./vue.esm-bundler-BSwA4uJo.js";import"./FSIconCard-B7UZMAaz.js";import"./FSCard-Dku7tZ0W.js";import"./FSCol-B2fYQH2g.js";import"./css-DuQjrBfn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C55kyKDN.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./FSIcon-BnX9YboA.js";import"./VIcon-5UD9vI9m.js";import"./color-D9V7QeIP.js";import"./tag-VYeYJ1FC.js";import"./FSImage-D1H9jzFA.js";import"./FSImageUI-FC5mP69p.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D4M238ur.js";import"./VImg-DoSXtjfN.js";import"./dimensions-BjZLW5mo.js";import"./elevation-CjdYMzTr.js";import"./locale-CpxwvVE1.js";import"./rounded-CO2AQG9_.js";import"./transition-_APBsTwD.js";import"./index-BhqZCjBr.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSTile-BsfkjASy.js";import"./FSClickable-DxIbWXqH.js";import"./VProgressCircular-Dac4kH3U.js";import"./FSCheckbox-Biwr0a4k.js";import"./useRules-BFq3Zlaa.js";import"./VSelectionControl-CoQs29sw.js";import"./density-DkgHqMu0.js";import"./proxiedModel-DL-L2p1V.js";import"./index-YRxtzmsB.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./index-C3j_FW12.js";import"./form-DP5gBA00.js";const Y={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const Z=["Variations"];export{e as Variations,Z as __namedExportsOrder,Y as default};
