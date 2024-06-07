import{F as r}from"./FSSimpleTileUI-d6d7b452.js";import"./vue.esm-bundler-f632b118.js";import"./FSCard-75477b2b.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-76f4ad1e.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./FSIcon-110a991e.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./useRender-7972ae0c.js";import"./tag-573fddf1.js";import"./FSImage-8cd50a0c.js";import"./FSLoader-af2e647d.js";import"./dimensions-44367821.js";import"./elevation-cd810633.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./VImg-7d50303f.js";import"./rounded-ce7e598f.js";import"./transition-8112e83c.js";import"./index-cd1f7a70.js";import"./FSText-d2336987.js";import"./useSlots-de625f75.js";import"./FSTile-2bc63c46.js";import"./FSClickable-af644c0d.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./FSCheckbox-5ebd306d.js";import"./FSSpan-4ac1bb71.js";import"./useRules-31faed85.js";import"./VSelectionControl-c78f62cb.js";import"./density-78dfa9a7.js";import"./index-131c488a.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./index-6e5ff885.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
