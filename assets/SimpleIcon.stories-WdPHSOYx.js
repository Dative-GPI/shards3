import{F as r}from"./FSSimpleTileUI-Cl06vOAz.js";import"./vue.esm-bundler--l9E1zCM.js";import"./FSIconCard-BOfV0G67.js";import"./FSCard-BmtixItE.js";import"./FSCol-BA_LQqMv.js";import"./css-CqyMbT8T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DW_Nd3uI.js";import"./useColors-Na5M-jYy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-uJWLcFzd.js";import"./FSIcon-CA5AHnUB.js";import"./VIcon-CRzxwZ_P.js";import"./color-DkN3uAGq.js";import"./FSImage-Bxc569qS.js";import"./FSImageUI-BbHPabXL.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BJn24iiy.js";import"./VImg-BDKzFUYZ.js";import"./dimensions-BKNjgbGk.js";import"./elevation-Cf1uc8UZ.js";import"./locale-DRqPrS0N.js";import"./rounded-B2xBfeOT.js";import"./transition-CYrBIr8o.js";import"./index-CDY7nOpr.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSTile-B0TqKX_R.js";import"./FSClickable-CWlCNUE_.js";import"./VProgressCircular-DiflYTWZ.js";import"./FSCheckbox-CuaZdV3q.js";import"./useRules-eaGGgTH2.js";import"./VSelectionControl-CjbL6NQr.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./index-mEzhRiE5.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./index-U_F843Id.js";import"./form-26vhu4DQ.js";const X={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
