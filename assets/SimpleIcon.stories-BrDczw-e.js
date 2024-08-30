import{F as r}from"./FSSimpleTileUI-DdTTN6WG.js";import"./vue.esm-bundler-Cq4W5tyU.js";import"./FSIconCard-Cn8h43-2.js";import"./FSCard-Czuobvvo.js";import"./FSCol-DLJAvXXo.js";import"./css-DEg_ftav.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-unE_3RO6.js";import"./useColors-9ZzibzMy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C1riLSun.js";import"./FSIcon-CO4wAGng.js";import"./VIcon-DEItKADI.js";import"./color-DRHDjI8D.js";import"./tag-CMGfbRyB.js";import"./FSImage-BnHy2gIB.js";import"./FSImageUI-Cri7PIHl.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DYaDCbjS.js";import"./VImg-C2ZZ8L57.js";import"./dimensions-DmQ2LvlH.js";import"./elevation-D7qOrqBH.js";import"./locale-HbAtAWzw.js";import"./rounded-CT5UQ7DA.js";import"./transition-BzbLScdo.js";import"./index-BFUNLZ7G.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSTile-BWzdGs5O.js";import"./FSClickable-rknJFO_P.js";import"./VProgressCircular-D_7DfGyD.js";import"./FSCheckbox-D6cJ9jKZ.js";import"./useRules-Dr6aWKP3.js";import"./VSelectionControl-Cv0xTIuO.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./index-CrjNNQA3.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./index-CS87Qvuo.js";import"./form-BLrazfEI.js";const Y={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
