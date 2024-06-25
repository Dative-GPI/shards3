import{F as r}from"./FSSimpleTileUI-i9n697OO.js";import"./vue.esm-bundler-DeSao-KJ.js";import"./FSCard-DS_imcN3.js";import"./FSCol-CA6NzDpV.js";import"./css-BnhLLynS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-JJutUvlP.js";import"./useColors-CSspNZdS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./FSIcon-29MaMkU3.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./useRender-CIdmfI-I.js";import"./tag-BL1d6r1f.js";import"./FSImage-CVVrP6Jo.js";import"./FSLoader-Yk4pw6tR.js";import"./dimensions-aXABR5Zz.js";import"./elevation-BBJMtRPf.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./base-BNnJ_ndD.js";import"./composableFactory-rrf4GM2L.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-BljrNAqA.js";import"./rounded-BOBir3aK.js";import"./transition-CTQG5_JK.js";import"./index-CrTEBV4I.js";import"./FSText-BmH3S0bz.js";import"./useSlots-DPxV8yUU.js";import"./FSTile-CwEfvYOJ.js";import"./FSClickable-D0rN91iS.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./FSCheckbox-BFjs92EI.js";import"./FSSpan-t6bMdSRn.js";import"./useRules-DQ31e--d.js";import"./VSelectionControl-DWVZmIhS.js";import"./density-4sjlTnVP.js";import"./index-BWi4ltEp.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./index-BIb3aONP.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
