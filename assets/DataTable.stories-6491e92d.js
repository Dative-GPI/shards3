import{F as i}from"./FSDataTableUI-900ec5e9.js";import"./vue.esm-bundler-85c2ade9.js";import"./vue-router-d81a5c9d.js";import"./FSCard-18b81b74.js";import"./useColors-4bd4e66b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-0475544b.js";import"./css-b4ee648a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-caf5d8c8.js";import"./FSRow-120b21e0.js";import"./FSCheckbox-b029a3a5.js";import"./FSIcon-d4b06799.js";import"./VIcon-96eed797.js";import"./color-680672dd.js";import"./useRender-22e01882.js";import"./tag-fd98b684.js";import"./FSSpan-abd71399.js";import"./useSlots-58887162.js";import"./FSText-fc4c74c1.js";import"./FSSearchField-9c0936db.js";import"./FSTextField-5649ea31.js";import"./VField-3df13f61.js";import"./index-0b62f442.js";import"./transition-0e35e3a5.js";import"./VInput-9ba9caf6.js";import"./locale-cdd955a4.js";import"./density-1bef1032.js";import"./loader-c17713e4.js";import"./rounded-7d023c25.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-fb9707dd.js";import"./VTextField-b1504f7b.js";import"./index-160e8c08.js";import"./FSButton-571eabbd.js";import"./useTranslations-93c8b8c9.js";import"./FSSelectField-543cd2d8.js";import"./VSelect-fce534af.js";import"./VOverlay-e74fafd8.js";import"./dimensions-7d06aea5.js";import"./display-d8c4b624.js";import"./lazy-4beaa7f3.js";import"./router-dfa38ec1.js";import"./VMenu-21a34864.js";import"./VDefaultsProvider-5f610042.js";import"./ssrBoot-fbecfb2e.js";import"./border-dbc038b8.js";import"./elevation-e7838e5f.js";import"./index-91896434.js";import"./VImg-8c7f30a9.js";import"./VDivider-b26e5897.js";import"./resizeObserver-cbbc033b.js";import"./VSelectionControl-79492061.js";import"./VSlideGroup-88bc554d.js";import"./group-627b1a66.js";import"./FSFadeOut-73d4648d.js";import"./FSChip-3fda7fb3.js";import"./FSToggleSet-0840b65e.js";import"./FSSlideGroup-665b1e24.js";import"./FSButtonNextIcon-64172684.js";import"./FSWrapGroup-879528ab.js";import"./VBtn-aa5927a3.js";import"./VProgressCircular-c268a248.js";import"./filter-2aa245c1.js";const he={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const fe=["Variations"];export{o as Variations,fe as __namedExportsOrder,he as default};
