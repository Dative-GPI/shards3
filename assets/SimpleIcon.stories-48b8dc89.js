import{F as r}from"./FSSimpleIconTileUI-c62126c6.js";import"./vue.esm-bundler-3386cb71.js";import"./FSCard-a2619b8a.js";import"./FSCol-30a69fbd.js";import"./css-bcfd232c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-9733beba.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./FSIcon-d790d92f.js";import"./VIcon-abe9af82.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./tag-3fcf7e02.js";import"./FSText-81a21680.js";import"./useSlots-347b7354.js";import"./FSTile-d4670fc1.js";import"./FSClickable-9ac660a4.js";import"./VProgressCircular-14287b05.js";import"./resizeObserver-d0e0f324.js";import"./FSCheckbox-8b71851a.js";import"./FSSpan-ecd93ab1.js";import"./useRules-e6c68f0f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./density-e280830a.js";import"./proxiedModel-e633c715.js";import"./index-dcfb76a3.js";import"./VLabel-92708ef4.js";import"./VInput-567a126f.js";import"./locale-cd7ecdad.js";import"./index-8c130ea8.js";import"./transition-53ccad39.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
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
