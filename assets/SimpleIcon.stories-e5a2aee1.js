import{F as r}from"./FSSimpleTileUI-7bb4aa95.js";import"./vue.esm-bundler-6f923154.js";import"./FSCard-32925b42.js";import"./FSCol-5ed907ac.js";import"./css-0cf2e273.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-64caadb9.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./FSIcon-93774118.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./useRender-1cb09274.js";import"./tag-a7b67944.js";import"./FSImage-1529358f.js";import"./FSLoader-6b86cc0d.js";import"./dimensions-dec12c77.js";import"./elevation-2c5be1c3.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./VImg-8e65ad17.js";import"./rounded-1f8e51a9.js";import"./transition-e76cd387.js";import"./index-114ba00f.js";import"./FSText-eacee215.js";import"./useSlots-21493751.js";import"./FSTile-29567eff.js";import"./FSClickable-e71ee20f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./FSCheckbox-4fa3808a.js";import"./FSSpan-7bb94541.js";import"./useRules-8e3c4a4a.js";import"./VSelectionControl-40c897c6.js";import"./density-03404b67.js";import"./index-55248dcb.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./index-4caca680.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
