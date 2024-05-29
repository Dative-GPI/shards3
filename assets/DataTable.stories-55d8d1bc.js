import{F as d}from"./FSStatusesCarousel-792b0458.js";import{F as a}from"./FSDataTableUI-cddf971b.js";import{F as c}from"./FSButton-ecc11eb7.js";import"./vue.esm-bundler-cd768bc3.js";import"./FSWindow-ff92c6fb.js";import"./useSlots-2af30a3d.js";import"./css-c2ea3b68.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useRender-b3fd6f8b.js";import"./theme-33f5ac1a.js";import"./group-9e3f1093.js";import"./proxiedModel-80cf7d0e.js";import"./locale-d1b7e37d.js";import"./tag-bc86e39f.js";import"./VBtn-c02fe116.js";import"./border-d3eb62c5.js";import"./color-4e667524.js";import"./density-80e773e2.js";import"./elevation-7537bf82.js";import"./rounded-c9c22222.js";import"./dimensions-9d1d90d7.js";import"./loader-3bcfb6cd.js";import"./VProgressCircular-f6ca2848.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./anchor-9469ffd7.js";import"./router-12edcf18.js";import"./index-f4fa4c36.js";import"./VDefaultsProvider-22eb0e57.js";import"./lazy-07480c2b.js";import"./ssrBoot-a9e4f1d0.js";import"./transition-2948fa2b.js";import"./FSCard-0de7b634.js";import"./FSCol-ff457bc3.js";import"./FSRow-1d7c2545.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSChip-0b35e4ee.js";import"./FSIcon-203715fb.js";import"./FSSpan-da6dde8e.js";import"./FSText-92e9b97f.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";import"./FSColor-24c53974.js";import"./VMenu-501341cc.js";import"./VOverlay-43a7a638.js";import"./forwardRefs-e658ad70.js";import"./display-23d3bc4a.js";import"./scopeId-7a393669.js";import"./vue-router-66d8d4ca.js";import"./FSCheckbox-0f33b66c.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-e9dab1c2.js";import"./VLabel-a834020c.js";import"./VInput-5fe9e616.js";import"./index-055d6469.js";import"./FSSearchField-8c597939.js";import"./FSTextField-8af1deda.js";import"./VField-d090f013.js";import"./VSpacer-0c52efc7.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./FSSelectField-b7cd016f.js";import"./FSDialogMenu-72c7cda0.js";import"./VDialog-c1d28576.js";import"./FSRadioGroup-55d3a9e5.js";import"./FSFadeOut-ad56c427.js";import"./useDebounce-8f204f15.js";import"./VSelect-9e784020.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";import"./VSlideGroup-cd82e4b3.js";import"./goto-fb9b6e06.js";import"./FSDivider-0f79eca0.js";import"./FSOptionGroup-1872d8bf.js";import"./FSClickable-95c940f4.js";import"./FSSlideGroup-ce06c6c2.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./VSlideGroupItem-249d9261.js";import"./FSWrapGroup-81657079.js";import"./FSToggleSet-a67ca94c.js";import"./filter-7dfa57ec.js";const Ve={title:"Foundation/Shared/Lists/DataTable",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},headers2:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!1},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!1}],disableItemTo:!0,itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTableUI:a,FSButton:c},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})},o={args:{args:{headers1:[{text:"Label",value:"column1",index:0,hidden:!1,sortable:!0,filterable:!0},{text:"Carousel",value:"statuses",index:1,hidden:!1},{text:"Other",value:"column2",index:2,hidden:!1},{text:"Miscellaneous",value:"column3",index:3,hidden:!1},{text:"Stuff",value:"column4",index:4,hidden:!1},{text:"Other stuff",value:"column5",index:5,hidden:!1},{text:"More stuff",value:"column6",index:6,hidden:!1},{text:"Even more stuff",value:"column7",index:7,hidden:!1},{text:"Last stuff",value:"column8",index:8,hidden:!1}],items1:Array.from(Array(20).keys()).map(e=>({id:e.toString(),column1:`Row ${e} - Column 1`,column2:`Row ${e} - Column 2`,column3:`Row ${e} - Column 3`,column4:`Row ${e} - Column 4`,column5:`Row ${e} - Column 5`,column6:`Row ${e} - Column 6`,column7:`Row ${e} - Column 7`,column8:`Row ${e} - Column 8`,modelStatuses:[{id:"1",modelId:"1",dataCategoryId:"1",dataCategoryLabel:"Category 1",dataDefinitionId:"1",dataDefinitionLabel:"Definition 1",label:"Status 1",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",modelId:"1",dataCategoryId:"1",dataCategoryLabel:"Category 1",dataDefinitionId:"2",dataDefinitionLabel:"Definition 2",label:"Status 2",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-thermometer-probe",colorDefault:"#E3E3E3"}],status:{id:"1",statuses:[{modelStatusId:"1",statusGroups:[{sourceTimestamp:new Date().toISOString(),enqueuedTimestamp:new Date().toISOString(),processedTimestamp:new Date().toISOString(),value:"On",label:"",icon:"mdi-power-standby",color:"#33FF33"}]},{modelStatusId:"2",statusGroups:Array.from(Array(5).keys()).map(t=>({sourceTimestamp:new Date().toISOString(),enqueuedTimestamp:new Date().toISOString(),processedTimestamp:new Date().toISOString(),groupByValue:(t+1).toString(),value:(t*100).toString(),label:"",icon:"mdi-thermometer-probe",color:"#33FF33"}))}]}})),value1:[],clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTableUI:a,FSStatusesCarousel:d},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const _e=["Variations","Carousel"];export{o as Carousel,n as Variations,_e as __namedExportsOrder,Ve as default};
