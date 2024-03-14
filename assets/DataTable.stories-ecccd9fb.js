import{F as i}from"./FSDataTableUI-81657a66.js";import"./vue.esm-bundler-0a1af505.js";import"./vue-router-f60daad6.js";import"./FSCard-2d7fb699.js";import"./useColors-1745df70.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8d83670f.js";import"./css-403c87e6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-0a1a151b.js";import"./FSRow-f7e9ea33.js";import"./FSCheckbox-d8f415f8.js";import"./FSIcon-61d2f8ac.js";import"./VIcon-4501998f.js";import"./color-84472fbe.js";import"./useRender-76465e3d.js";import"./tag-6ffe4ba6.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./FSText-fa675dd3.js";import"./FSSearchField-d6ce7f94.js";import"./FSTextField-579f05ad.js";import"./VField-96becc41.js";import"./index-9b6ba610.js";import"./transition-afc70ddd.js";import"./VInput-4e45c526.js";import"./locale-d3181d48.js";import"./proxiedModel-350eff8d.js";import"./density-cfa18558.js";import"./loader-780645af.js";import"./rounded-caec20b0.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-638ccd4e.js";import"./VTextField-4fd69d43.js";import"./index-411e5c5c.js";import"./FSButton-2b68b6f0.js";import"./useTranslations-c047d5be.js";import"./FSSelectField-09a9aa59.js";import"./VSelect-52b15ff5.js";import"./VOverlay-5bb0ade1.js";import"./dimensions-41d36b25.js";import"./display-58dfd5ea.js";import"./lazy-2c8cbded.js";import"./router-1b110d23.js";import"./VMenu-35d64e8e.js";import"./VDefaultsProvider-76561179.js";import"./ssrBoot-e032939a.js";import"./border-70ae5555.js";import"./elevation-68e8c545.js";import"./index-ee92f8e8.js";import"./VImg-1b868636.js";import"./VDivider-f90b9c24.js";import"./resizeObserver-366ccb2e.js";import"./VSelectionControl-5a22cf17.js";import"./VSlideGroup-c413928b.js";import"./group-197554d7.js";import"./FSFadeOut-e098a2fd.js";import"./FSChip-da66bf2a.js";import"./FSToggleSet-5325189f.js";import"./FSSlideGroup-dc3b1cad.js";import"./FSButtonNextIcon-857763e2.js";import"./FSWrapGroup-c4c96fbe.js";import"./VBtn-bc3cd0df.js";import"./VProgressCircular-67340a4b.js";import"./filter-9db9d00a.js";const fe={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const we=["Variations"];export{o as Variations,we as __namedExportsOrder,fe as default};
