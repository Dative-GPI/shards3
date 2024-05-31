import{F as r}from"./FSSimpleIconTileUI-e409a76f.js";import"./vue.esm-bundler-838daa40.js";import"./FSCard-b76495e8.js";import"./FSCol-44fe82a9.js";import"./css-67cfec15.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-753b58e5.js";import"./useColors-8c9c4d1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./FSIcon-48205264.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./useRender-f6a4770d.js";import"./tag-d73e64d5.js";import"./FSText-52a8262f.js";import"./useSlots-6ce8c1a9.js";import"./FSTile-ea642074.js";import"./FSClickable-104d21f2.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./FSCheckbox-884ec95b.js";import"./FSSpan-3df08200.js";import"./useRules-cda8e231.js";import"./VSelectionControl-b5e8c167.js";import"./density-e1cdced2.js";import"./proxiedModel-3239cc3c.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./dimensions-be952165.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
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
