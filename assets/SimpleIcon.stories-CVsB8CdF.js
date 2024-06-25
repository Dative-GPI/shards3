import{F as r}from"./FSSimpleTileUI-uD1ka0Hw.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSCard-CQ3lfryo.js";import"./FSCol-CkM6DP-d.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BPJXOzs-.js";import"./useColors-CXl0hRe0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./FSIcon-BZTGzEA5.js";import"./VIcon-uFUcYN4x.js";import"./color-BhlhQtQT.js";import"./FSImage-DWPDm3Fj.js";import"./FSLoader-D_G7mk7-.js";import"./dimensions-fR777bfb.js";import"./elevation-BoGrGvdU.js";import"./locale-BC9z6YbT.js";import"./base-BNnJ_ndD.js";import"./composableFactory-J8cSLWf9.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-BLQ7D_3g.js";import"./rounded-TFXDyxjJ.js";import"./transition-CJbyFvkq.js";import"./index-yKNzK_fJ.js";import"./FSText-BKbsNqc2.js";import"./useSlots-V2mVelz6.js";import"./FSTile-CXw4LisW.js";import"./FSClickable-D1l62sMQ.js";import"./VProgressCircular-D8KFt_en.js";import"./FSCheckbox-M8Bs7S24.js";import"./FSSpan-CwfDYIua.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-DLPOArCM.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./index-ySUbTvsm.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./index-DWl9tX7E.js";const W={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const X=["Variations"];export{e as Variations,X as __namedExportsOrder,W as default};
