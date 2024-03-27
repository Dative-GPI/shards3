import{F as n}from"./FSDataTableUI-0b8df38e.js";import"./vue.esm-bundler-e580dd1f.js";import"./vue-router-092e674d.js";import"./FSCheckbox-29a29c7b.js";import"./FSIcon-4fed0819.js";import"./useColors-b2cb658b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a3bb880e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-bb9e7f8a.js";import"./color-0af6d6f5.js";import"./useRender-16acb9c4.js";import"./tag-fa7badbe.js";import"./FSSpan-73185be3.js";import"./useSlots-a039f59b.js";import"./FSCol-fcea4dc1.js";import"./css-ca36ed75.js";import"./FSRow-50904d6e.js";import"./useRules-a8018b0f.js";import"./VCheckboxBtn-5f6dc991.js";import"./VSelectionControl-682aab8c.js";import"./density-be1d42ad.js";import"./proxiedModel-3aca154f.js";import"./index-a22223d0.js";import"./VLabel-a546dd45.js";import"./VInput-1e999169.js";import"./locale-405fbfb1.js";import"./index-96d842ab.js";import"./transition-7d6b8783.js";import"./FSCard-c77c66af.js";import"./FSText-62d9f6c8.js";import"./FSSearchField-bbb398a7.js";import"./FSTextField-8126a87a.js";import"./VSpacer-9103d4e2.js";import"./VTextField-ce85aec3.js";import"./VField-1fbd78f2.js";import"./loader-8bc08e66.js";import"./intersectionObserver-4acce169.js";import"./rounded-2552fce2.js";import"./forwardRefs-e658ad70.js";import"./index-e90df875.js";import"./FSButton-9fb570ca.js";import"./VProgressCircular-88630010.js";import"./resizeObserver-88f5705d.js";import"./useTranslations-873b030c.js";import"./FSSelectField-ae46c32c.js";import"./VSelect-a9f4ba15.js";import"./VOverlay-1db7e4ae.js";import"./dimensions-10c7935e.js";import"./display-0f118c60.js";import"./lazy-075f19a9.js";import"./router-1d334446.js";import"./VMenu-f3c71475.js";import"./VDefaultsProvider-5c112428.js";import"./ssrBoot-d5661322.js";import"./border-6c565bcc.js";import"./elevation-02492a14.js";import"./VImg-07ac5889.js";import"./VDivider-c7fbbe49.js";import"./VSlideGroup-3258cc7a.js";import"./group-1e6e82bd.js";import"./FSFadeOut-091b3ab3.js";import"./FSChip-1784ba7e.js";import"./FSOptionGroup-572e7076.js";import"./FSSlideGroup-67eb4f42.js";import"./FSButtonNextIcon-55cd08df.js";import"./FSWrapGroup-02d939f2.js";import"./FSToggleSet-245ad5f1.js";import"./VBtn-40f45ac1.js";import"./filter-a3b8f5ca.js";const fe={title:"Foundation/Shared/Lists/DataTable",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:i})=>({components:{FSDataTableUI:n},props:Object.keys(i),setup(){return{...e}},template:`
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
