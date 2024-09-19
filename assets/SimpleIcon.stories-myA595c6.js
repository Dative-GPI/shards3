import{F as r}from"./FSSimpleTileUI-QSU21UGp.js";import"./vue.esm-bundler-BwDfg4wG.js";import"./FSIconCard-B4Sv3DnZ.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./css-DTUiF03J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-k5pgBhR1.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSImage-CtdLuckH.js";import"./FSImageUI-BAdgvYuR.js";import"./FSLoader-CBedVZCM.js";import"./dimensions-yOZi2HlQ.js";import"./elevation-Ba-uT6Vw.js";import"./locale-DTc71_bq.js";import"./VImg-DFtMr-E9.js";import"./rounded-NuUWeCiM.js";import"./transition-DbaVUv7M.js";import"./index-O1RQoaVh.js";import"./useImages-hJ8kAqsC.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSTile-_9-fb_kX.js";import"./FSClickable-Y_T-Cq-9.js";import"./VProgressCircular-CmpAWY4m.js";import"./FSCheckbox-Up-USX9A.js";import"./useRules-CJCAsX67.js";import"./VSelectionControl-gUfFxYp8.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./index-BBm8PRb1.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./index-h4Pvk0JI.js";import"./form-CH3j37ax.js";const $={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(p,{argTypes:n})=>({components:{FSSimpleTileUI:r},props:Object.keys(n),setup(){return{...p}},template:`
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const ee=["Variations"];export{e as Variations,ee as __namedExportsOrder,$ as default};
