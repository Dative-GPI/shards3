import{F as r}from"./FSSimpleIconTileUI-de894d07.js";import"./vue.esm-bundler-82a4b45a.js";import"./FSCard-ebbda5de.js";import"./FSCol-8326ac62.js";import"./css-c39c4a6e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-2ccfd21b.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./FSIcon-97799824.js";import"./VIcon-cdae09b0.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./tag-c823df72.js";import"./FSText-4ee7bf26.js";import"./useSlots-f55d2513.js";import"./FSTile-0d1493a0.js";import"./FSClickable-a4cc0438.js";import"./VProgressCircular-86578fb4.js";import"./resizeObserver-bcc9c76e.js";import"./FSCheckbox-4b8da1d3.js";import"./FSSpan-4bf272e8.js";import"./useRules-7b0f86fa.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./density-d6a10252.js";import"./proxiedModel-6f61b602.js";import"./index-0f4b4beb.js";import"./VLabel-db8bd06b.js";import"./VInput-6edbe327.js";import"./locale-c97048b2.js";import"./index-7dc37899.js";import"./transition-0cde2f94.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
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
