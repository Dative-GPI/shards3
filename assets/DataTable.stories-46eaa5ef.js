import{F as i}from"./FSDataTableUI-144d3e65.js";import"./vue.esm-bundler-a27e881e.js";import"./FSCard-ba8b99ab.js";import"./useColors-64c3c523.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-40a9efa2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-5941d279.js";import"./css-fb381997.js";import"./FSRow-e0b07355.js";import"./FSCheckbox-8bdea17c.js";import"./FSIcon-695f5195.js";import"./VIcon-2e68f29b.js";import"./color-2740292e.js";import"./FSSpan-23926a6a.js";import"./useSlots-f8c8bb5a.js";import"./FSText-8dc1b884.js";import"./FSSearchField-2251f6e2.js";import"./FSTextField-a84650e0.js";import"./VSpacer-a8d4114f.js";import"./VTextField-4d7d73e0.js";import"./VField-1b55a660.js";import"./index-a4e785fb.js";import"./transition-91aa1796.js";import"./VInput-97b04c8f.js";import"./locale-d8beded1.js";import"./density-9e64face.js";import"./loader-d45e9b6f.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./FSButton-32c11b56.js";import"./VBtn-36b0c9e9.js";import"./variant-cf13121d.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-6b0a994a.js";import"./VProgressCircular-21a2049c.js";import"./resizeObserver-f6ddbc93.js";import"./FSFadeOut-6302921e.js";import"./FSChip-b5963d32.js";import"./useTranslations-0799e799.js";import"./VMenu-4a24dddc.js";import"./VOverlay-e127e971.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./VDivider-74140868.js";import"./FSSelectField-da6d063c.js";import"./VSelect-22c292b3.js";import"./ssrBoot-3aa6a9b0.js";import"./VImg-06cc8851.js";import"./VSelectionControl-1d98a60e.js";import"./VSlideGroup-3b18b0c4.js";import"./FSToggleSet-e33928c9.js";import"./FSSlideGroup-45f6cdfb.js";import"./FSWrapGroup-ee4670bd.js";import"./useBreakpoints-ce1b45c7.js";import"./filter-0b9201b4.js";const xe={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
