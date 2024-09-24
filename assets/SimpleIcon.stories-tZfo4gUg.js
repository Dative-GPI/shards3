import{F as r}from"./FSSimpleTileUI-D3l_QBm5.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSIconCard-DEEPGrbI.js";import"./FSCard-CiUY3jF9.js";import"./FSCol-DZA6pxA1.js";import"./css-DLfrm0pR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CA1vgNXx.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./FSIcon-BVNp7pcM.js";import"./VIcon-BQIm0b3J.js";import"./color--o2QfpAv.js";import"./tag-DB5D_XjQ.js";import"./FSImage-VV4rkzPN.js";import"./FSImageUI-NfwyqzmC.js";import"./FSLoader--MJuLA8w.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-BL_hkJAm.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-H1Zoj8aR.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSTile-CfLkyy4l.js";import"./FSClickable-D0EdtzT9.js";import"./VProgressCircular-D09FP1rk.js";import"./FSCheckbox-M73AcfXp.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-DxF8PKcC.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./index-DwLKzfXL.js";import"./form-B61Sg6X-.js";const ee={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple Icon tile with color",bottomColor:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>`})};var i,t,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        code: "code"
      }, {
        id: "2",
        label: "Simple Icon tile 2",
        icon: "mdi-account",
        singleSelect: true
      }, {
        id: "3",
        label: "Simple Icon tile with color",
        bottomColor: ["#0000FF", "#FFFFFF"]
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
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>\`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const ie=["Variations"];export{e as Variations,ie as __namedExportsOrder,ee as default};
