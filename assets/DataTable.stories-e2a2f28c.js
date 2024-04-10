import{F as n}from"./FSDataTableUI-7ce706f0.js";import"./vue.esm-bundler-8d1b7c9b.js";import"./vue-router-2671d6ed.js";import"./FSCheckbox-b3ab5f5c.js";import"./FSIcon-f1833eba.js";import"./useColors-fe8562a0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-82ddebf2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-af7bd965.js";import"./color-b802304c.js";import"./useRender-7d329101.js";import"./tag-c9f6eb57.js";import"./FSSpan-54104d2b.js";import"./useSlots-36159ddf.js";import"./FSCol-53c64bd8.js";import"./css-19c8f0ab.js";import"./FSRow-a391dd26.js";import"./useRules-c9867f7f.js";import"./VCheckboxBtn-7de51bc9.js";import"./VSelectionControl-b7fc0cbe.js";import"./density-f72a6349.js";import"./proxiedModel-5e90dbf3.js";import"./index-9b4e1373.js";import"./VLabel-339e0c63.js";import"./VInput-e3eb2fdb.js";import"./locale-4596da4c.js";import"./index-03703da7.js";import"./transition-ec42203e.js";import"./FSCard-067bcc3b.js";import"./FSText-5d7b6cbb.js";import"./FSSearchField-2592564c.js";import"./FSTextField-869ddcdc.js";import"./VSpacer-089ee4d2.js";import"./VTextField-6f523597.js";import"./VField-0fe66054.js";import"./loader-883a5b9e.js";import"./intersectionObserver-872db127.js";import"./rounded-dfbce428.js";import"./VDefaultsProvider-ec24aebb.js";import"./forwardRefs-e658ad70.js";import"./index-78515ab6.js";import"./FSButton-24ac64b4.js";import"./FSClickable-40575f4d.js";import"./VProgressCircular-51b4f5f8.js";import"./resizeObserver-170e8e39.js";import"./useTranslations-f3c405d6.js";import"./FSSelectField-657910f0.js";import"./VSelect-51db2014.js";import"./VOverlay-3a319082.js";import"./dimensions-db4341a9.js";import"./display-599b850b.js";import"./lazy-f4975b14.js";import"./router-80533699.js";import"./VMenu-8a1eabd1.js";import"./ssrBoot-3bb665ae.js";import"./border-7e6623e1.js";import"./elevation-7b9c5add.js";import"./VImg-82b274b6.js";import"./VDivider-dddb5e29.js";import"./VSlideGroup-b35e7181.js";import"./group-9a48651f.js";import"./FSFadeOut-1158067e.js";import"./FSChip-249b9d62.js";import"./FSOptionGroup-2d347a21.js";import"./FSSlideGroup-30ba9159.js";import"./FSButtonNextIcon-b889adf5.js";import"./FSWrapGroup-4d4c94ab.js";import"./FSToggleSet-d6bf238b.js";import"./VBtn-310a17a1.js";import"./filter-e5a473c5.js";const Re={title:"Foundation/Shared/Lists/DataTable",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:i})=>({components:{FSDataTableUI:n},props:Object.keys(i),setup(){return{...e}},template:`
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Te=["Variations"];export{r as Variations,Te as __namedExportsOrder,Re as default};
