import{F as r}from"./FSSimpleTileUI-XDkbJlOw.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSCard-DJrzS8t_.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DoCXWKDP.js";import"./useColors-ATxZ3nb1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DMal9AfS.js";import"./FSIcon-2B0NN_at.js";import"./VIcon-C6jgSf5f.js";import"./color-C5d3UYhE.js";import"./FSImage-DiYdPqxi.js";import"./FSLoader-B1rWpyEr.js";import"./dimensions-Dx7VlQQe.js";import"./elevation-xgrzvMGW.js";import"./locale-BC9z6YbT.js";import"./base-BNnJ_ndD.js";import"./composableFactory-J8cSLWf9.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-D_T7DUU3.js";import"./rounded-jRyYRXzo.js";import"./transition-DSqAHFz2.js";import"./index-DI8u9ozT.js";import"./FSText-ykiRuhwH.js";import"./useSlots-V2mVelz6.js";import"./FSTile-CWpbyh1I.js";import"./FSClickable-Bk5I2JN4.js";import"./VProgressCircular-BvwZAexL.js";import"./FSCheckbox-C9nNPPnZ.js";import"./FSSpan-CwfDYIua.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-BD03jE0y.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./index-DUaylBew.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./index-Drj2M_tW.js";const W={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
