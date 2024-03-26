import{F as n}from"./FSDataTableUI-98f42b73.js";import"./vue.esm-bundler-a6679ce1.js";import"./vue-router-c202c6d9.js";import"./FSCard-3545869e.js";import"./useColors-7bfbb133.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8c0eb56d.js";import"./css-39e888cb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-c92bf913.js";import"./FSRow-cccb539d.js";import"./FSCheckbox-2651be11.js";import"./FSIcon-1a3e04ae.js";import"./VIcon-8b39f3af.js";import"./color-3a7410fc.js";import"./useRender-af29532b.js";import"./tag-c6e00dba.js";import"./FSSpan-e5b0fe90.js";import"./useSlots-decb0027.js";import"./useRules-581ea3e1.js";import"./VCheckboxBtn-3bbe63a0.js";import"./VSelectionControl-6ae224f7.js";import"./density-5c9f41ad.js";import"./proxiedModel-8c3bd5c0.js";import"./index-9e1e9b7b.js";import"./VLabel-aa33b01a.js";import"./VInput-01377238.js";import"./locale-06782a67.js";import"./index-3965c569.js";import"./transition-8ea299cd.js";import"./FSText-3a5d632d.js";import"./FSSearchField-62d0cf12.js";import"./FSTextField-bcb74959.js";import"./VSpacer-972c619d.js";import"./VTextField-d692f7b9.js";import"./VField-b3e35bb0.js";import"./loader-837c299d.js";import"./intersectionObserver-68b7d7a3.js";import"./rounded-289ab918.js";import"./forwardRefs-e658ad70.js";import"./index-35f785c5.js";import"./FSButton-58d7615b.js";import"./VProgressCircular-f3d28a40.js";import"./resizeObserver-692bfe96.js";import"./useTranslations-a25d50f5.js";import"./FSSelectField-b1a6fc67.js";import"./VSelect-889f5fb3.js";import"./VOverlay-7446e2bd.js";import"./dimensions-90886f46.js";import"./display-4e3f6834.js";import"./lazy-05051c22.js";import"./router-d9b0c695.js";import"./VMenu-b64c5aea.js";import"./VDefaultsProvider-7c4e7670.js";import"./ssrBoot-c8405da8.js";import"./border-c8fc0b9b.js";import"./elevation-643b3bb1.js";import"./VImg-e080b924.js";import"./VDivider-d17a9bc3.js";import"./VSlideGroup-3b5b0f7a.js";import"./group-a71d090a.js";import"./FSFadeOut-072298de.js";import"./FSChip-1ff3e1b9.js";import"./FSOptionGroup-17e1f6be.js";import"./FSSlideGroup-66499013.js";import"./FSButtonNextIcon-38eef036.js";import"./FSWrapGroup-78dfd04f.js";import"./FSToggleSet-0843ac5b.js";import"./VBtn-7c947ff4.js";import"./filter-cc8758ca.js";const fe={title:"Foundation/Shared/Lists/DataTable",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:i})=>({components:{FSDataTableUI:n},props:Object.keys(i),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSDataTableUI
          :showSelect="true"
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
          :showSelect="true"
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
          :showSelect="true"
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Re=["Variations"];export{r as Variations,Re as __namedExportsOrder,fe as default};
