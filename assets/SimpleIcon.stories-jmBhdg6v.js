import{F as r}from"./FSSimpleTileUI-C50-uYQj.js";import"./vue.esm-bundler-CLWyqtrq.js";import"./FSCard-CtrctGW7.js";import"./FSCol-B1LPjIXg.js";import"./css-Ca-HPGcF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-B7tdsi71.js";import"./useColors-D61Fe1_L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-bwyTeVCn.js";import"./FSIcon-nvjMvWEC.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./useRender-BBsw_RbX.js";import"./tag-CMDXkDN7.js";import"./FSImage-D4YySTrV.js";import"./FSLoader-DpxcFPRZ.js";import"./dimensions-CApMEhqN.js";import"./elevation-CB-eCL4u.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./base-BNnJ_ndD.js";import"./composableFactory-BGJVwV03.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./VImg-CU4XwkhE.js";import"./rounded-BEQ3HMtY.js";import"./transition-D0Fyuczc.js";import"./index-C8D2gGUS.js";import"./FSText-B9kmC_JD.js";import"./useSlots-YtBg7QOA.js";import"./FSTile-CTYdnlSf.js";import"./FSClickable-CX-mXFfM.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSSpan-C4Iz3qX9.js";import"./useRules-D8GiojYJ.js";import"./VSelectionControl-CFm2WUhz.js";import"./density-BAQxqMxc.js";import"./index-CgBlQs6Z.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./index-3KSGAm21.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
