import{F as r}from"./FSSimpleIconTileUI-1e360da0.js";import"./vue.esm-bundler-41eda46b.js";import"./FSCard-8067a4d4.js";import"./FSCol-282cc158.js";import"./css-35e8563f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-1508d56d.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./FSIcon-713345eb.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./tag-64b4b0e7.js";import"./FSText-f60941a6.js";import"./useSlots-e8ea556e.js";import"./FSTile-d711885d.js";import"./FSClickable-416c7a7e.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./FSCheckbox-90b24572.js";import"./FSSpan-8af5ddcc.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-42a6862f.js";import"./density-b42ba92f.js";import"./proxiedModel-03601969.js";import"./index-4ba2035c.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./locale-84078765.js";import"./index-dc0570e5.js";import"./transition-695cd20f.js";import"./dimensions-5b54e342.js";const K={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:l})=>({components:{FSSimpleIconTileUI:r},props:Object.keys(l),setup(){return{...n}},template:`
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
