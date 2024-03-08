import{F as i}from"./FSDataTableUI-01ee57a3.js";import"./vue.esm-bundler-588e96c7.js";import"./FSCard-a59fef92.js";import"./useColors-0a17cef8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6917f69d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-07ad80b8.js";import"./css-50f0aa1d.js";import"./FSRow-e442cab6.js";import"./FSCheckbox-7ce6018a.js";import"./FSIcon-2736b3f2.js";import"./VIcon-56fbcc42.js";import"./color-56e2ae46.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./FSText-12fda099.js";import"./FSSearchField-7b4b90a3.js";import"./FSTextField-11217dd5.js";import"./VField-98fe1be9.js";import"./index-5292658a.js";import"./transition-28907f24.js";import"./VInput-4a9e0385.js";import"./locale-56b7257e.js";import"./density-79e1d57e.js";import"./loader-b5f87c49.js";import"./rounded-ef9fdb42.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-18a01036.js";import"./VTextField-9257e797.js";import"./index-c8d171e2.js";import"./FSButton-03b2e657.js";import"./VBtn-b4a2fb00.js";import"./variant-5570e4c2.js";import"./elevation-1ac0f37f.js";import"./group-6ed4811d.js";import"./dimensions-e6c6eed7.js";import"./router-cfd7314c.js";import"./index-50a29978.js";import"./VDefaultsProvider-3b96cb3b.js";import"./VProgressCircular-33868664.js";import"./resizeObserver-54460412.js";import"./useTranslations-d310d0e5.js";import"./FSSelectField-36ddcd34.js";import"./VSelect-de3bdfba.js";import"./VOverlay-a56e8bf3.js";import"./display-8789070c.js";import"./lazy-8b651e92.js";import"./VMenu-d58a1340.js";import"./ssrBoot-f3867732.js";import"./VImg-3d3560c1.js";import"./VDivider-73ddadbd.js";import"./VSelectionControl-dca1f3ca.js";import"./VSlideGroup-7473545f.js";import"./FSFadeOut-36856569.js";import"./FSChip-21576c6e.js";import"./FSToggleSet-cf7ddd1e.js";import"./FSSlideGroup-35be04ff.js";import"./FSWrapGroup-6292d494.js";import"./useBreakpoints-952345a0.js";import"./filter-45910563.js";const xe={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :groupBy="args.groupBy"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
        />
      </div>
    </div>`})};var r,t,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      headers1: [{
        text: "Column 1 - sortable",
        value: "column1",
        index: 0,
        hidden: false,
        width: "100px",
        sortable: true,
        filterable: true
      }, {
        text: "Column 2",
        value: "column2",
        index: 1,
        hidden: false,
        width: "80px"
      }, {
        text: "Column 3",
        value: "column3",
        index: 2,
        hidden: false,
        width: "120px",
        sortable: true,
        filterable: true
      }],
      items1: Array.from(Array(80).keys()).map(i => ({
        id: i.toString(),
        column1: \`Row \${i % 3} - Column 1\`,
        column2: \`Row \${i + 1} - Column 2\`,
        column3: {
          text: \`Row \${i + 1} - Column 3\`,
          value: i + 1
        },
        column4: i < 9 ? 1704067200000 : i < 13 ? 1704153600000 : i < 27 ? 1704240000000 : i < 36 ? 1704326400000 : i < 45 ? 1704412800000 : i < 54 ? 1704499200000 : i < 63 ? 1704585600000 : 1704672000000
      })),
      value1: [],
      groupBy: {
        key: "column4",
        order: "asc"
      },
      itemTo: (item: any) => ({
        name: 'device',
        params: {
          deviceId: item.id
        }
      }),
      clickRow: () => {
        console.log("clicked");
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataTableUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :groupBy="args.groupBy"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
        />
      </div>
    </div>\`
  })
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const ye=["Variations"];export{o as Variations,ye as __namedExportsOrder,xe as default};
