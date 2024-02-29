import{F as i}from"./FSDataTableUI-a75727cb.js";import"./vue.esm-bundler-a27e881e.js";import"./FSCard-05da5310.js";import"./useColors-64c3c523.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-40a9efa2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-5941d279.js";import"./css-fb381997.js";import"./FSRow-e0b07355.js";import"./FSCheckbox-c90e713c.js";import"./FSIcon-98d9a930.js";import"./VIcon-05012a67.js";import"./color-17bc18af.js";import"./FSSpan-23926a6a.js";import"./useSlots-f8c8bb5a.js";import"./FSText-5f7ad050.js";import"./FSSearchField-db26fa0a.js";import"./FSTextField-9e0cc675.js";import"./VSpacer-0b076bec.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./FSButton-d1cb7f94.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./useTranslations-0799e799.js";import"./FSFadeOut-89e5dcca.js";import"./FSChip-ab98b52d.js";import"./VMenu-7f762766.js";import"./VOverlay-1baa69a1.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./VDivider-a406fa8c.js";import"./FSSelectField-d29fd7e8.js";import"./VSelect-5b6a3eb4.js";import"./ssrBoot-3aa6a9b0.js";import"./VImg-52b1b44b.js";import"./VSelectionControl-cdba1a53.js";import"./VSlideGroup-6834ac05.js";import"./FSToggleSet-86e08492.js";import"./FSSlideGroup-e42d8ef2.js";import"./FSWrapGroup-77dd91c4.js";import"./useBreakpoints-ce1b45c7.js";import"./filter-0b9201b4.js";const xe={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
