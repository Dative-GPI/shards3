import{F as r}from"./FSSimpleIconTileUI-b8228c50.js";import"./vue.esm-bundler-3416a090.js";import"./FSCard-92f27951.js";import"./FSCol-5731c3c4.js";import"./css-69ed11d9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-5edf997c.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./FSIcon-f518d728.js";import"./VIcon-c583a5e4.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./tag-a6c90b0c.js";import"./FSText-4221a42d.js";import"./useSlots-7472d1e2.js";import"./FSTile-3c962ef7.js";import"./FSClickable-d5c04d60.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./FSCheckbox-422b3b91.js";import"./FSSpan-b519c994.js";import"./useRules-5e1988ee.js";import"./VSelectionControl-0b3e2526.js";import"./density-174ddef7.js";import"./proxiedModel-868611da.js";import"./index-a9118fe7.js";import"./VLabel-793ed17d.js";import"./VInput-77c4eaa4.js";import"./locale-be130c16.js";import"./index-46378e0b.js";import"./transition-6086c96b.js";import"./dimensions-97f2f62c.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
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
