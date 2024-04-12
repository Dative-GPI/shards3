import{F as n}from"./FSDataTableUI-a71f74a6.js";import"./vue.esm-bundler-43a473fd.js";import"./vue-router-c18e9f37.js";import"./FSCheckbox-eda3e056.js";import"./FSIcon-b00305b5.js";import"./css-18b0cf8e.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./useRender-d2bddd17.js";import"./tag-2aee60b4.js";import"./FSSpan-f049a07d.js";import"./useSlots-e98bc591.js";import"./FSCol-3eed52f7.js";import"./FSRow-ba466629.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./proxiedModel-7eeaa9ef.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSCard-bab2eafe.js";import"./FSText-146d16e4.js";import"./FSSearchField-5cca30cc.js";import"./FSTextField-c919a6ef.js";import"./VSpacer-051f3349.js";import"./VTextField-3e42e74d.js";import"./VField-13e4da9c.js";import"./loader-e3f3ed5e.js";import"./intersectionObserver-6db224c5.js";import"./rounded-c06207e9.js";import"./VDefaultsProvider-6b919627.js";import"./forwardRefs-e658ad70.js";import"./index-52cd98ce.js";import"./FSButton-7c569e4d.js";import"./FSClickable-83a8d600.js";import"./VProgressCircular-108a63fb.js";import"./resizeObserver-059c00b3.js";import"./useTranslations-e519a668.js";import"./FSSelectField-84394bb7.js";import"./VSelect-2a3f4796.js";import"./VOverlay-5d77bca3.js";import"./dimensions-42b1c23f.js";import"./display-20e87f67.js";import"./lazy-7d7adcb2.js";import"./router-1edc30ca.js";import"./VMenu-7b829308.js";import"./ssrBoot-a35ae173.js";import"./border-fe1feda5.js";import"./elevation-494cacfb.js";import"./VImg-ded4a17b.js";import"./VDivider-d035c0db.js";import"./VSlideGroup-d5f10b34.js";import"./group-b2be58db.js";import"./FSFadeOut-55a08a3b.js";import"./FSChip-0f94faf2.js";import"./FSOptionGroup-786f041c.js";import"./FSSlideGroup-4408c29d.js";import"./FSButtonNextIcon-1a38d932.js";import"./FSWrapGroup-2cb62ab2.js";import"./FSToggleSet-359d728a.js";import"./VBtn-f3ae59be.js";import"./filter-d21d4ed2.js";const Re={title:"Foundation/Shared/Lists/DataTable",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:i})=>({components:{FSDataTableUI:n},props:Object.keys(i),setup(){return{...e}},template:`
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
