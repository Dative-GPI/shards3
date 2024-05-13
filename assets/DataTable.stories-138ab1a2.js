import{F as d}from"./FSStatusesCarousel-429b6c8a.js";import{F as a}from"./FSDataTableUI-b1200acc.js";import{F as c}from"./FSButton-821f7325.js";import"./vue.esm-bundler-857e5af7.js";import"./FSWindow-9105a153.js";import"./useSlots-8bee1a74.js";import"./css-ab2bdb81.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useRender-d5beceb3.js";import"./theme-83a4d379.js";import"./group-501836f7.js";import"./proxiedModel-1e29c8a1.js";import"./locale-9a98f700.js";import"./tag-7bd029e5.js";import"./VBtn-d4123122.js";import"./border-43a3c780.js";import"./color-5d3cc229.js";import"./density-69cd8efb.js";import"./elevation-d5a2e352.js";import"./rounded-67c03651.js";import"./dimensions-d7f5c5ad.js";import"./loader-b99105cf.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./router-bca8c92a.js";import"./index-f95cc40a.js";import"./VDefaultsProvider-51a3a301.js";import"./lazy-f71c8f0f.js";import"./ssrBoot-4aec2e0b.js";import"./transition-2a27d0f7.js";import"./FSCard-c144a688.js";import"./FSCol-439c812a.js";import"./FSRow-e30f1dcc.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSChip-4843d6f3.js";import"./FSIcon-faf0e444.js";import"./FSSpan-9f7a3096.js";import"./FSText-e633ddca.js";import"./useAppTimeZone-43dfb0bc.js";import"./useTranslations-4ae50e1a.js";import"./FSColor-9ea47e4e.js";import"./VMenu-ddfad70d.js";import"./VOverlay-dc792521.js";import"./forwardRefs-e658ad70.js";import"./display-56858c3a.js";import"./scopeId-49b20494.js";import"./vue-router-ed53a856.js";import"./FSCheckbox-d1b08f47.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-11aadb82.js";import"./VLabel-820f7887.js";import"./VInput-6c2a4fd3.js";import"./index-d6be2044.js";import"./FSSearchField-056f8feb.js";import"./FSTextField-16a79c60.js";import"./VField-9dc825df.js";import"./VSpacer-37a4cd9a.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./FSSelectField-86243dfb.js";import"./FSDialogMenu-717b3ccf.js";import"./VDialog-c4db32be.js";import"./FSRadioGroup-aac97f6c.js";import"./FSFadeOut-e66877f2.js";import"./useDebounce-3221123d.js";import"./VSelect-2f600942.js";import"./VImg-f3ba6161.js";import"./VDivider-6ea2ea72.js";import"./VSlideGroup-23212639.js";import"./goto-975c1e2c.js";import"./FSDivider-fa8ca016.js";import"./FSOptionGroup-43343967.js";import"./FSClickable-d206c837.js";import"./FSSlideGroup-0f6a80f8.js";import"./FSButtonNextIcon-cf7184c0.js";import"./FSWrapGroup-47fc2c20.js";import"./FSToggleSet-32c663bb.js";import"./filter-24b96659.js";const Ge={title:"Foundation/Shared/Lists/DataTable",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},headers2:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!1},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!1}],disableItemTo:!0,itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTableUI:a,FSButton:c},props:Object.keys(t),setup(){return{...e}},template:`
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
          :disableIterator="true"
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
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :singleSelect="true"
          :sneakyHeaders="['column1']"
          :itemTo="args.disableItemTo ? null : args.itemTo"
          v-model:headers="args.headers2"
          v-model="args.value1"
          :includeDraggable="true"
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
        :sortDraggable="true"
        >
          <template #toolbar>
            <FSButton>Toolbar 1</FSButton>
            <FSButton>Toolbar button 2</FSButton>
            <FSButton>Toolbar button 3</FSButton>
            <FSButton>Toolbar button 4</FSButton>
            <FSButton>Toolbar button 5</FSButton>
            <FSButton>Toolbar button 6</FSButton>
          </template> 
        </FSDataTableUI>
    </div>`})},o={args:{args:{headers1:[{text:"Label",value:"column1",index:0,hidden:!1,sortable:!0,filterable:!0},{text:"Carousel",value:"statuses",index:1,hidden:!1},{text:"Other",value:"column2",index:2,hidden:!1},{text:"Miscellaneous",value:"column3",index:3,hidden:!1},{text:"Stuff",value:"column4",index:4,hidden:!1},{text:"Other stuff",value:"column5",index:5,hidden:!1},{text:"More stuff",value:"column6",index:6,hidden:!1},{text:"Even more stuff",value:"column7",index:7,hidden:!1},{text:"Last stuff",value:"column8",index:8,hidden:!1}],items1:Array.from(Array(20).keys()).map(e=>({id:e.toString(),column1:`Row ${e} - Column 1`,column2:`Row ${e} - Column 2`,column3:`Row ${e} - Column 3`,column4:`Row ${e} - Column 4`,column5:`Row ${e} - Column 5`,column6:`Row ${e} - Column 6`,column7:`Row ${e} - Column 7`,column8:`Row ${e} - Column 8`,modelStatuses:[{id:"1",modelId:"1",dataCategoryId:"1",dataCategoryLabel:"Category 1",dataDefinitionId:"1",dataDefinitionLabel:"Definition 1",label:"Status 1",inline:!0,index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",modelId:"1",dataCategoryId:"1",dataCategoryLabel:"Category 1",dataDefinitionId:"2",dataDefinitionLabel:"Definition 2",label:"Status 2",inline:!1,index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-thermometer-probe",colorDefault:"#E3E3E3"}],status:{id:"1",statuses:[{modelStatusId:"1",statusGroups:[{sourceTimestamp:new Date().toISOString(),enqueuedTimestamp:new Date().toISOString(),processedTimestamp:new Date().toISOString(),value:"On",label:"",icon:"mdi-power-standby",color:"#33FF33"}]},{modelStatusId:"2",statusGroups:Array.from(Array(5).keys()).map(t=>({sourceTimestamp:new Date().toISOString(),enqueuedTimestamp:new Date().toISOString(),processedTimestamp:new Date().toISOString(),groupByValue:(t+1).toString(),value:(t*100).toString(),label:"",icon:"mdi-thermometer-probe",color:"#33FF33"}))}]}})),value1:[],clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTableUI:a,FSStatusesCarousel:d},props:Object.keys(t),setup(){return{...e}},template:`
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
      >
        <template #item.statuses="{ item }">
          <FSStatusesCarousel
            :modelStatuses="item.modelStatuses"
            :deviceStatuses="item.status.statuses"
          />
        </template>
      </FSDataTableUI>
    </div>`})};var r,l,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      headers2: [{
        text: "Column 1 - sortable",
        value: "column1",
        index: 0,
        hidden: false,
        width: "100px",
        sortable: true,
        filterable: false
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
        filterable: false
      }],
      disableItemTo: true,
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
      FSDataTableUI,
      FSButton
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
          :disableIterator="true"
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
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDataTableUI
          :showSelect="true"
          :items="args.items1"
          :singleSelect="true"
          :sneakyHeaders="['column1']"
          :itemTo="args.disableItemTo ? null : args.itemTo"
          v-model:headers="args.headers2"
          v-model="args.value1"
          :includeDraggable="true"
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
        :sortDraggable="true"
        >
          <template #toolbar>
            <FSButton>Toolbar 1</FSButton>
            <FSButton>Toolbar button 2</FSButton>
            <FSButton>Toolbar button 3</FSButton>
            <FSButton>Toolbar button 4</FSButton>
            <FSButton>Toolbar button 5</FSButton>
            <FSButton>Toolbar button 6</FSButton>
          </template> 
        </FSDataTableUI>
    </div>\`
  })
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,m,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      headers1: [{
        text: "Label",
        value: "column1",
        index: 0,
        hidden: false,
        sortable: true,
        filterable: true
      }, {
        text: "Carousel",
        value: "statuses",
        index: 1,
        hidden: false
      }, {
        text: "Other",
        value: "column2",
        index: 2,
        hidden: false
      }, {
        text: "Miscellaneous",
        value: "column3",
        index: 3,
        hidden: false
      }, {
        text: "Stuff",
        value: "column4",
        index: 4,
        hidden: false
      }, {
        text: "Other stuff",
        value: "column5",
        index: 5,
        hidden: false
      }, {
        text: "More stuff",
        value: "column6",
        index: 6,
        hidden: false
      }, {
        text: "Even more stuff",
        value: "column7",
        index: 7,
        hidden: false
      }, {
        text: "Last stuff",
        value: "column8",
        index: 8,
        hidden: false
      }],
      items1: Array.from(Array(20).keys()).map(i => ({
        id: i.toString(),
        column1: \`Row \${i} - Column 1\`,
        column2: \`Row \${i} - Column 2\`,
        column3: \`Row \${i} - Column 3\`,
        column4: \`Row \${i} - Column 4\`,
        column5: \`Row \${i} - Column 5\`,
        column6: \`Row \${i} - Column 6\`,
        column7: \`Row \${i} - Column 7\`,
        column8: \`Row \${i} - Column 8\`,
        modelStatuses: [{
          id: "1",
          modelId: "1",
          dataCategoryId: "1",
          dataCategoryLabel: "Category 1",
          dataDefinitionId: "1",
          dataDefinitionLabel: "Definition 1",
          label: "Status 1",
          inline: true,
          index: 0,
          lifetime: 24 * 3600,
          timeToLive: 7 * 24 * 3600,
          showDefault: true,
          iconDefault: "mdi-power-standby",
          colorDefault: "#E3E3E3"
        }, {
          id: "2",
          modelId: "1",
          dataCategoryId: "1",
          dataCategoryLabel: "Category 1",
          dataDefinitionId: "2",
          dataDefinitionLabel: "Definition 2",
          label: "Status 2",
          inline: false,
          index: 0,
          lifetime: 24 * 3600,
          timeToLive: 7 * 24 * 3600,
          showDefault: true,
          iconDefault: "mdi-thermometer-probe",
          colorDefault: "#E3E3E3"
        }],
        status: {
          id: "1",
          statuses: [{
            modelStatusId: "1",
            statusGroups: [{
              sourceTimestamp: new Date().toISOString(),
              enqueuedTimestamp: new Date().toISOString(),
              processedTimestamp: new Date().toISOString(),
              value: "On",
              label: "",
              icon: "mdi-power-standby",
              color: "#33FF33"
            }]
          }, {
            modelStatusId: "2",
            statusGroups: Array.from(Array(5).keys()).map(i => ({
              sourceTimestamp: new Date().toISOString(),
              enqueuedTimestamp: new Date().toISOString(),
              processedTimestamp: new Date().toISOString(),
              groupByValue: (i + 1).toString(),
              value: (i * 100).toString(),
              label: "",
              icon: "mdi-thermometer-probe",
              color: "#33FF33"
            }))
          }]
        }
      })),
      value1: [],
      clickRow: () => {
        console.log("clicked");
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataTableUI,
      FSStatusesCarousel
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
      >
        <template #item.statuses="{ item }">
          <FSStatusesCarousel
            :modelStatuses="item.modelStatuses"
            :deviceStatuses="item.status.statuses"
          />
        </template>
      </FSDataTableUI>
    </div>\`
  })
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Me=["Variations","Carousel"];export{o as Carousel,n as Variations,Me as __namedExportsOrder,Ge as default};
