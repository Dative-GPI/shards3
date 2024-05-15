import{F as r}from"./FSSimpleIconTileUI-bb384922.js";import"./vue.esm-bundler-857e5af7.js";import"./FSCard-e175fef9.js";import"./FSCol-439c812a.js";import"./css-ab2bdb81.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-e30f1dcc.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./FSIcon-d0ab000b.js";import"./VIcon-77d6c341.js";import"./color-3025502c.js";import"./useRender-1606c976.js";import"./tag-41ce785e.js";import"./FSText-0e9e862b.js";import"./useSlots-8bee1a74.js";import"./FSTile-75725fa5.js";import"./FSClickable-450f52d6.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./FSCheckbox-54879197.js";import"./FSSpan-9f7a3096.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-ac658b6e.js";import"./density-9a54c498.js";import"./proxiedModel-c6c1514f.js";import"./index-1a539509.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./locale-54c2c8ba.js";import"./index-900eb6c5.js";import"./transition-8ae71e6c.js";import"./dimensions-946cb0c4.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleIconTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        :label="entity.label"
        :code="entity.code"
        :color="entity.colors"
        v-model="args.selected[index]"
      />
    </div>`})};var o,i,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      FSSimpleIconTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleIconTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        :label="entity.label"
        :code="entity.code"
        :color="entity.colors"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const L=["Variations"];export{e as Variations,L as __namedExportsOrder,K as default};
