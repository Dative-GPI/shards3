import{F as i}from"./FSDataTableUI-d27cb1e2.js";import"./vue.esm-bundler-72feb788.js";import"./vue-router-c36f9e85.js";import"./FSCard-619e60a0.js";import"./useColors-6caee65d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-dfac1c87.js";import"./css-a2b3c3ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-df85c70b.js";import"./FSRow-ae483077.js";import"./FSCheckbox-939ceb75.js";import"./FSIcon-072b4761.js";import"./VIcon-7b60b4e1.js";import"./color-20078b56.js";import"./useRender-dfda60e7.js";import"./tag-4c4a02ef.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./FSText-c27aeba2.js";import"./FSSearchField-d86ece0a.js";import"./FSTextField-a3210dbc.js";import"./VField-127bd01f.js";import"./index-1ae89502.js";import"./transition-2c0bfa39.js";import"./VInput-d8a8ef30.js";import"./locale-6e33b40c.js";import"./density-849fb56f.js";import"./loader-dcf07c4a.js";import"./rounded-98e7d656.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-3481543d.js";import"./VTextField-6c3de945.js";import"./index-2f035a23.js";import"./FSButton-ead951eb.js";import"./useTranslations-3d964ba1.js";import"./FSSelectField-e977292e.js";import"./VSelect-a873d51b.js";import"./VOverlay-d9e6b90e.js";import"./dimensions-5bfc9d84.js";import"./display-b99e0d28.js";import"./lazy-b3876034.js";import"./router-cb1ba247.js";import"./VMenu-b3b1ac01.js";import"./VDefaultsProvider-45b29f9e.js";import"./ssrBoot-76ac3587.js";import"./border-0ea674af.js";import"./elevation-4bc1fa4c.js";import"./index-4726a84c.js";import"./VImg-1614ce10.js";import"./VDivider-6bf45fec.js";import"./resizeObserver-a19810f7.js";import"./VSelectionControl-00322409.js";import"./VSlideGroup-57d46989.js";import"./group-6fcd4563.js";import"./FSFadeOut-2276ef77.js";import"./FSChip-59964093.js";import"./FSToggleSet-6484fcae.js";import"./FSSlideGroup-9a7a32a7.js";import"./FSButtonNextIcon-2ebbb10e.js";import"./FSWrapGroup-51cf1a7c.js";import"./VBtn-226d1c53.js";import"./VProgressCircular-aa529168.js";import"./filter-19562aa6.js";const he={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
