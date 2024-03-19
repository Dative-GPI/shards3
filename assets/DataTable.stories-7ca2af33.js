import{F as i}from"./FSDataTableUI-9b30df52.js";import"./vue.esm-bundler-0a1af505.js";import"./vue-router-f60daad6.js";import"./FSCard-ab5d5cfc.js";import"./useColors-90958e24.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8d83670f.js";import"./css-415780ec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-5b91b447.js";import"./FSRow-852c6353.js";import"./FSCheckbox-9ace227e.js";import"./FSIcon-6a7ab6e0.js";import"./VIcon-4501998f.js";import"./color-84472fbe.js";import"./useRender-76465e3d.js";import"./tag-6ffe4ba6.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./FSText-9ed86449.js";import"./FSSearchField-99cd7728.js";import"./FSTextField-8648d5a3.js";import"./VField-7077f3f0.js";import"./index-9b6ba610.js";import"./transition-afc70ddd.js";import"./VInput-4e45c526.js";import"./locale-d3181d48.js";import"./proxiedModel-350eff8d.js";import"./density-cfa18558.js";import"./loader-6b458036.js";import"./intersectionObserver-48733e26.js";import"./rounded-caec20b0.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-638ccd4e.js";import"./VTextField-63b18e78.js";import"./index-411e5c5c.js";import"./FSButton-12d7d38e.js";import"./VProgressCircular-ba338755.js";import"./resizeObserver-366ccb2e.js";import"./useTranslations-c047d5be.js";import"./FSSelectField-d041767b.js";import"./VSelect-c935efe1.js";import"./VOverlay-4c15e273.js";import"./dimensions-41d36b25.js";import"./display-58dfd5ea.js";import"./lazy-2c8cbded.js";import"./router-1b110d23.js";import"./VMenu-1b199fb6.js";import"./VDefaultsProvider-76561179.js";import"./ssrBoot-e032939a.js";import"./border-70ae5555.js";import"./elevation-68e8c545.js";import"./index-ee92f8e8.js";import"./VImg-1b868636.js";import"./VDivider-f90b9c24.js";import"./VSelectionControl-5a22cf17.js";import"./VSlideGroup-c413928b.js";import"./group-197554d7.js";import"./FSFadeOut-a512482b.js";import"./FSChip-5cd658d1.js";import"./FSToggleSet-e7b74266.js";import"./FSSlideGroup-70d3be18.js";import"./FSButtonNextIcon-55dfc85a.js";import"./FSWrapGroup-e04c832b.js";import"./VBtn-ba26c1ad.js";import"./filter-9db9d00a.js";const we={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
