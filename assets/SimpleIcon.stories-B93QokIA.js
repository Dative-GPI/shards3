import{F as r}from"./FSSimpleTileUI-2tFc1uxR.js";import"./vue.esm-bundler-BATn8cDU.js";import"./FSIconCard-CKk7MGgY.js";import"./FSCard-CAgq3XuJ.js";import"./FSCol-D9tDKebi.js";import"./css-C5boehQC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Gvoj2sTW.js";import"./useColors-D4RQatlL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C-7Kj0lB.js";import"./FSIcon-Kk713u84.js";import"./VIcon-BgP_kyAH.js";import"./color-jM82jTdX.js";import"./FSImage-Dh9Rydn3.js";import"./FSImageUI-D3FEWhqz.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CvKYYcO3.js";import"./FSLoader-BBhuF9xD.js";import"./dimensions-viHtPIHZ.js";import"./elevation-oWdkHiXv.js";import"./locale-Cm_eUAdw.js";import"./VImg-euCAhqKz.js";import"./rounded-BwvX6bZn.js";import"./transition-O2x8Myu8.js";import"./index-Bv2UUMCu.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./FSTile-Bsv_1yrY.js";import"./FSClickable-DYDREYld.js";import"./VProgressCircular-Bi_qA2kG.js";import"./FSCheckbox-Di-LctwI.js";import"./useRules-C6ry6kys.js";import"./VSelectionControl-OgAVLyH5.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./index-RhlTNW4L.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./index-BJgqyIck.js";const X={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const Y=["Variations"];export{e as Variations,Y as __namedExportsOrder,X as default};
