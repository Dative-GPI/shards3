import{F as r}from"./FSSimpleIconTileUI-457c6291.js";import"./vue.esm-bundler-857e5af7.js";import"./FSCard-c144a688.js";import"./FSCol-439c812a.js";import"./css-ab2bdb81.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-e30f1dcc.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./FSIcon-faf0e444.js";import"./VIcon-2d4ba55d.js";import"./color-5d3cc229.js";import"./useRender-d5beceb3.js";import"./tag-7bd029e5.js";import"./FSText-e633ddca.js";import"./useSlots-8bee1a74.js";import"./FSTile-93fa380f.js";import"./FSClickable-d206c837.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./FSCheckbox-d1b08f47.js";import"./FSSpan-9f7a3096.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-11aadb82.js";import"./density-69cd8efb.js";import"./proxiedModel-1e29c8a1.js";import"./index-f95cc40a.js";import"./VLabel-820f7887.js";import"./VInput-6c2a4fd3.js";import"./locale-9a98f700.js";import"./index-d6be2044.js";import"./transition-2a27d0f7.js";import"./dimensions-d7f5c5ad.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
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
