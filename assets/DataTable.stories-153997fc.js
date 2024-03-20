import{F as i}from"./FSDataTableUI-b0fc9f98.js";import"./vue.esm-bundler-0a1af505.js";import"./vue-router-f60daad6.js";import"./FSCard-933df147.js";import"./useColors-b80ccbdd.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2d24b19c.js";import"./css-415780ec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-5b91b447.js";import"./FSRow-852c6353.js";import"./FSCheckbox-e6854458.js";import"./FSIcon-4f828578.js";import"./VIcon-a19d44fc.js";import"./color-68d45c69.js";import"./useRender-cc726afb.js";import"./tag-e48f136a.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./FSText-6d5e8797.js";import"./FSSearchField-16232bac.js";import"./FSTextField-8b30e120.js";import"./VField-66cf1d8d.js";import"./index-d90e6acb.js";import"./transition-c9646b8b.js";import"./VInput-32e7bd1c.js";import"./locale-767f04a5.js";import"./proxiedModel-7a45f3f8.js";import"./density-99d9a31c.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./rounded-94c7156f.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-a7d8920b.js";import"./VTextField-bc89db2e.js";import"./index-80f01c5b.js";import"./FSButton-3fa4cd12.js";import"./VProgressCircular-1c311cd8.js";import"./resizeObserver-86c9045a.js";import"./useTranslations-c047d5be.js";import"./FSSelectField-0d59d4a5.js";import"./VSelect-bb0c6f0e.js";import"./VOverlay-30c9fe4b.js";import"./dimensions-21b90dfd.js";import"./display-b22dea51.js";import"./lazy-298c1133.js";import"./router-817fd49a.js";import"./VMenu-b8c93ac3.js";import"./VDefaultsProvider-0c713390.js";import"./ssrBoot-e032939a.js";import"./border-dd08b1f1.js";import"./elevation-eb45930f.js";import"./index-0339a920.js";import"./VImg-ef539901.js";import"./VDivider-6d67e416.js";import"./VSelectionControl-ad73d0a2.js";import"./VSlideGroup-6393fefa.js";import"./group-439abacb.js";import"./FSFadeOut-8dff6b7d.js";import"./FSChip-740deb4f.js";import"./FSToggleSet-dc316653.js";import"./FSSlideGroup-147a1ace.js";import"./FSButtonNextIcon-e5f9473b.js";import"./FSWrapGroup-59db5edd.js";import"./VBtn-bd41b5e0.js";import"./filter-ce0454cd.js";const we={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const ke=["Variations"];export{o as Variations,ke as __namedExportsOrder,we as default};
