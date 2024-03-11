import{F as i}from"./FSDataTableUI-8f2acd59.js";import"./vue.esm-bundler-cada065a.js";import"./FSCard-274f3029.js";import"./useColors-d76e62c3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-077d21c3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-630168ee.js";import"./css-50f0aa1d.js";import"./FSRow-4ed4317e.js";import"./FSCheckbox-11da9bd1.js";import"./FSIcon-de67d9ac.js";import"./VIcon-f531f31f.js";import"./color-cac3f8b2.js";import"./useRender-aebc0214.js";import"./tag-84fe69a6.js";import"./FSSpan-898e6277.js";import"./useSlots-e34db436.js";import"./FSText-ac132797.js";import"./FSSearchField-90af9c69.js";import"./FSTextField-530e6f2e.js";import"./VField-8506902a.js";import"./index-127b1a3d.js";import"./transition-96405fc3.js";import"./VInput-0190379f.js";import"./locale-793e4951.js";import"./density-a3d9cfab.js";import"./loader-c6765802.js";import"./rounded-c91c5538.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-417f2da8.js";import"./VTextField-9f779e5f.js";import"./index-1890f982.js";import"./FSButton-184a6980.js";import"./VBtn-1fd3c917.js";import"./variant-c24223ea.js";import"./elevation-a65147a7.js";import"./group-52996811.js";import"./dimensions-bd9ae89e.js";import"./router-44442b4b.js";import"./index-79d9264f.js";import"./VDefaultsProvider-1e56270a.js";import"./VProgressCircular-de76cad3.js";import"./resizeObserver-1a024aa2.js";import"./useTranslations-d1fccfae.js";import"./FSSelectField-ea799dbc.js";import"./VSelect-5d0ed1d8.js";import"./VOverlay-bf937035.js";import"./display-5b38d177.js";import"./lazy-550f418a.js";import"./VMenu-6896ef8b.js";import"./ssrBoot-ac05136b.js";import"./VImg-61808023.js";import"./VDivider-f319f9e8.js";import"./VSelectionControl-59b3617a.js";import"./VSlideGroup-184702f6.js";import"./FSFadeOut-9f41b5df.js";import"./FSChip-587c2e24.js";import"./FSToggleSet-510c5589.js";import"./FSSlideGroup-d7a861e5.js";import"./FSWrapGroup-84508520.js";import"./useBreakpoints-19506ea5.js";import"./filter-98dcfaf1.js";const ve={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const he=["Variations"];export{o as Variations,he as __namedExportsOrder,ve as default};
