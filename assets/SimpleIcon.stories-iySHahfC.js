import{F as r}from"./FSSimpleTileUI-Bf5MtoBq.js";import"./vue.esm-bundler-B8zP9crO.js";import"./FSIconCard-C6POwSPf.js";import"./FSCard-DS7Ofz0M.js";import"./FSCol-DXkP6ARl.js";import"./css-B1GBcH8c.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D-NDNvrc.js";import"./useColors-AJGcQHF_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DtZVHDBt.js";import"./FSIcon-DZCYhBaF.js";import"./VIcon-FsSVL6vQ.js";import"./color-DErt19fL.js";import"./FSImage-C2P2bTx-.js";import"./FSImageUI-CRv7hclD.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Bs2ItKgK.js";import"./VImg-DbvVxLaQ.js";import"./dimensions-DJJFaY_J.js";import"./elevation-B_HXnKlm.js";import"./locale-FYv4GhYY.js";import"./rounded-Bso5Gdmg.js";import"./transition-CsS1sKoI.js";import"./index-vockUB0G.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSTile-CV9ZyYbd.js";import"./FSClickable-BCaYx5AP.js";import"./VProgressCircular-DxDQ8azE.js";import"./FSCheckbox-C5Shh_eW.js";import"./useRules-8tDFqsxq.js";import"./VSelectionControl-DQecCZ24.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./index-D-9FNlZD.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./index-C_7y45B_.js";const W={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
