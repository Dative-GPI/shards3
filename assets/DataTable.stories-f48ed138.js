import{F as n}from"./FSDataTableUI-9424afcf.js";import"./vue.esm-bundler-37de1696.js";import"./vue-router-f501b7d2.js";import"./FSCheckbox-80166ed2.js";import"./FSIcon-486fd767.js";import"./useColors-ba22af06.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-07d11e72.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-122293c7.js";import"./color-efc02365.js";import"./useRender-ccb83440.js";import"./tag-9d688242.js";import"./FSSpan-ce1ed5e8.js";import"./useSlots-df9def22.js";import"./FSCol-927ba931.js";import"./css-cb27a64f.js";import"./FSRow-632ce14e.js";import"./useRules-724d25b8.js";import"./VCheckboxBtn-ebaca132.js";import"./VSelectionControl-19e4ec9f.js";import"./density-ebf3f2c2.js";import"./proxiedModel-e8e26ca7.js";import"./index-737116aa.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./locale-ee313da6.js";import"./index-3a20b1dd.js";import"./transition-4a8f6120.js";import"./FSCard-61ed401b.js";import"./FSText-13835655.js";import"./FSSearchField-d44ff07f.js";import"./FSTextField-39426dcd.js";import"./VSpacer-63748a98.js";import"./VTextField-03f06faf.js";import"./VField-83328994.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./VDefaultsProvider-062db757.js";import"./forwardRefs-e658ad70.js";import"./index-90c07952.js";import"./FSButton-d020b8fa.js";import"./VProgressCircular-aa80f032.js";import"./resizeObserver-8d36419f.js";import"./useTranslations-eec3878c.js";import"./FSSelectField-919ae91b.js";import"./VSelect-28b2c344.js";import"./VOverlay-8f6f9ccb.js";import"./dimensions-4b009e60.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-ef1336ae.js";import"./VMenu-ecee0657.js";import"./ssrBoot-9a42e176.js";import"./border-fb870e60.js";import"./elevation-66cfbdec.js";import"./VImg-d6f10770.js";import"./VDivider-c1bb8faa.js";import"./VSlideGroup-62b1ce2b.js";import"./group-bc028d0d.js";import"./FSFadeOut-8633fd47.js";import"./FSChip-a0f93d15.js";import"./FSOptionGroup-3b9ee1f3.js";import"./FSSlideGroup-d397c1c0.js";import"./FSButtonNextIcon-a2de1883.js";import"./FSWrapGroup-603b7e9b.js";import"./FSToggleSet-57e3f73a.js";import"./VBtn-359968d9.js";import"./filter-fc138fb7.js";const De={title:"Foundation/Shared/Lists/DataTable",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:i})=>({components:{FSDataTableUI:n},props:Object.keys(i),setup(){return{...e}},template:`
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Re=["Variations"];export{r as Variations,Re as __namedExportsOrder,De as default};
