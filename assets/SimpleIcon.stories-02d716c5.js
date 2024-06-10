import{F as r}from"./FSSimpleTileUI-bdc67d26.js";import"./vue.esm-bundler-f632b118.js";import"./FSCard-491552ba.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-76f4ad1e.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./FSIcon-8032a9d1.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./useRender-e08116dd.js";import"./tag-f52d5248.js";import"./FSImage-7e26743e.js";import"./FSLoader-6ced331e.js";import"./dimensions-655ad4fc.js";import"./elevation-f0466824.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./VImg-82f9d308.js";import"./rounded-83656db8.js";import"./transition-c0ed457c.js";import"./index-c976eaf6.js";import"./FSText-09696756.js";import"./useSlots-de625f75.js";import"./FSTile-718b43b1.js";import"./FSClickable-4011125f.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./FSCheckbox-bde4293d.js";import"./FSSpan-4ac1bb71.js";import"./useRules-89bf8a4c.js";import"./VSelectionControl-27ff8605.js";import"./density-2a21ba5c.js";import"./index-5c2ea69f.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./index-f6c0e33a.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
