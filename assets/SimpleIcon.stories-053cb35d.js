import{F as r}from"./FSSimpleTileUI-72339bfb.js";import"./vue.esm-bundler-1de4ab84.js";import"./FSCard-23b564db.js";import"./FSCol-044a4f0a.js";import"./css-73f1b6e3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-0f15051e.js";import"./useColors-6201f155.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-fee57059.js";import"./FSIcon-08483052.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./useRender-b44b777b.js";import"./tag-58633b3a.js";import"./FSImage-1712f744.js";import"./FSLoader-404ee90e.js";import"./dimensions-60fb7050.js";import"./elevation-e7de2c09.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-7269e9d8.js";import"./VImg-4aa69f50.js";import"./rounded-aeb398ab.js";import"./transition-41c2ee15.js";import"./index-bd033a0f.js";import"./FSText-3b69d1d8.js";import"./useSlots-78ee3d45.js";import"./FSTile-f9e03527.js";import"./FSClickable-00bc2ab2.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./FSCheckbox-7bc44d7a.js";import"./FSSpan-c5b5f93b.js";import"./useRules-14fb7f63.js";import"./VSelectionControl-8efa9c46.js";import"./density-99305267.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./index-00d0b77b.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
