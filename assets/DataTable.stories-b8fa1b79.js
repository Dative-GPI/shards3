import{F as n}from"./FSDataTableUI-8f95f2b8.js";import"./vue.esm-bundler-96d0a5cc.js";import"./vue-router-acda3705.js";import"./FSCheckbox-b67eda6e.js";import"./FSIcon-1f958509.js";import"./css-187645c7.js";import"./useColors-a5c6eb1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c90fedb5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-356fc7cc.js";import"./color-0e7f3458.js";import"./useRender-864589a6.js";import"./tag-2ee5b375.js";import"./FSSpan-572d1125.js";import"./useSlots-8f090340.js";import"./FSCol-71088900.js";import"./FSRow-959288e5.js";import"./useRules-d4bb430c.js";import"./VCheckboxBtn-080209f7.js";import"./VSelectionControl-70f0f0e9.js";import"./density-9320d724.js";import"./proxiedModel-80fa8b72.js";import"./index-b26b5e2a.js";import"./VLabel-6f956079.js";import"./VInput-b0770754.js";import"./locale-ebcc9fd1.js";import"./index-09e6aad2.js";import"./transition-2009bd3b.js";import"./FSCard-907ca4bc.js";import"./FSText-8c2dec91.js";import"./FSSearchField-fcbd240e.js";import"./FSTextField-d99708c0.js";import"./FSButton-892461f4.js";import"./FSClickable-3046c0b6.js";import"./VProgressCircular-b96acd02.js";import"./resizeObserver-608b050a.js";import"./VSpacer-f03e5178.js";import"./VTextField-10bbe6c7.js";import"./VField-12172b20.js";import"./loader-f509b4a4.js";import"./rounded-7d5adaf8.js";import"./VDefaultsProvider-638492ec.js";import"./forwardRefs-e658ad70.js";import"./index-ab6a3e98.js";import"./useTranslations-fea8acd8.js";import"./FSSelectField-1ad49228.js";import"./VSelect-a10f1a69.js";import"./VOverlay-511e4751.js";import"./border-66fb56b2.js";import"./dimensions-f2761880.js";import"./display-382afec5.js";import"./lazy-e9f80e5f.js";import"./router-b0143796.js";import"./VMenu-564fd94d.js";import"./ssrBoot-67be078c.js";import"./elevation-23c434a7.js";import"./VImg-7ef13259.js";import"./VDivider-5b8aa1c7.js";import"./VSlideGroup-56c5a05a.js";import"./group-f931bb93.js";import"./FSFadeOut-bfd58420.js";import"./FSChip-207be7cf.js";import"./FSOptionGroup-3cedd5e0.js";import"./FSSlideGroup-ee02b27e.js";import"./FSButtonNextIcon-9bb04157.js";import"./FSWrapGroup-33fbf5d1.js";import"./FSToggleSet-89d4360e.js";import"./VBtn-502c193f.js";import"./filter-14ef3d92.js";const De={title:"Foundation/Shared/Lists/DataTable",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:i})=>({components:{FSDataTableUI:n},props:Object.keys(i),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSDataTableUI
          :showSelect="true"
          :showSearch="false"
          :disableIterator="true"
          :items="args.items1"
          :groupBy="args.groupBy"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
          :sortDraggable="true"
          gap="20px"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="false"
          :showSearch="false"
          :items="args.items1"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
          :includeDraggable="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
          :includeDraggable="true"
          :sortDraggable="true"
        />
    </div>`})};var t,o,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        <FSDataTableUI
          :showSelect="true"
          :showSearch="false"
          :disableIterator="true"
          :items="args.items1"
          :groupBy="args.groupBy"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
          :sortDraggable="true"
          gap="20px"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="false"
          :showSearch="false"
          :items="args.items1"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
          :includeDraggable="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :sneakyHeaders="['column1']"
          @click:row="args.clickRow"
          v-model:headers="args.headers1"
          v-model="args.value1"
          :includeDraggable="true"
          :sortDraggable="true"
        />
    </div>\`
  })
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Re=["Variations"];export{r as Variations,Re as __namedExportsOrder,De as default};
