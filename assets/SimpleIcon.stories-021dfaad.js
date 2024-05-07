import{F as r}from"./FSSimpleIconTileUI-eddf084a.js";import"./vue.esm-bundler-41eda46b.js";import"./FSCard-dc76bdb2.js";import"./FSCol-282cc158.js";import"./css-35e8563f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-1508d56d.js";import"./useColors-c08b974a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./FSIcon-6dc797d3.js";import"./VIcon-7bb7bc51.js";import"./color-7b12579a.js";import"./useRender-b120e115.js";import"./tag-585bbcbd.js";import"./FSText-e9a7e0f6.js";import"./useSlots-e8ea556e.js";import"./FSTile-d893437a.js";import"./FSClickable-fa1cff73.js";import"./VProgressCircular-e304a31d.js";import"./resizeObserver-ea3ec7d1.js";import"./FSCheckbox-9aa0fdbb.js";import"./FSSpan-8af5ddcc.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-6bfa0431.js";import"./density-23ec5fb8.js";import"./proxiedModel-ebe72836.js";import"./index-35b22454.js";import"./VLabel-674db0eb.js";import"./VInput-1f6e9963.js";import"./locale-396b54fa.js";import"./index-ad5199eb.js";import"./transition-87ba966b.js";import"./dimensions-dbe989d9.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
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
