import{F as d}from"./FSStatusesCarousel-DmicKiNE.js";import{F as a}from"./FSDataTableUI-DpOzUalo.js";import{F as c}from"./FSButton-DvVRr-Q9.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSWindow-C_IuudQ-.js";import"./useSlots-P12pG1X5.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./locale-C-s_GJlL.js";import"./tag-DB5D_XjQ.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./elevation-Ben4zuE4.js";import"./rounded-Dg8mz8II.js";import"./dimensions-DyYT4L19.js";import"./VIcon-BIpY_noq.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";import"./transition-CNA6wh-m.js";import"./FSStatus-Drrt0AYM.js";import"./FSCard-CjHnVBHV.js";import"./FSCol-CtQDyyQv.js";import"./FSRow-B3SJi8FA.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSChip-Ca_W5DEH.js";import"./FSIcon-DuyQgQFI.js";import"./FSSpan-CCGpb4KF.js";import"./FSText-DyldgdXP.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./useAppTimeZone-D_npl1cn.js";import"./FSColor-5VS7xXKD.js";import"./VMenu-BVgNprPc.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BMkR1-zV.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-Dn5SdBcD.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./form-B61Sg6X-.js";import"./FSSearchField-DNmC1QFE.js";import"./FSTextField-D-F2DIF_.js";import"./FSBaseField-D2YBKhIh.js";import"./VSpacer-C4plVoTE.js";import"./VField-DndYz9t7.js";import"./index-D_lBla-s.js";import"./FSSelectField-QL3fIsyv.js";import"./FSDialogMenu-DZZe1S1I.js";import"./VDialog-BkP6MFQ7.js";import"./FSSlideGroup-BysYk75t.js";import"./FSToggleSet-CES2Gcvq.js";import"./FSWrapGroup-WxGi_YEL.js";import"./FSFadeOut-Cf3XjCz3.js";import"./FSLoader-fdbCjZEQ.js";import"./FSRadio-BSuFa48d.js";import"./VList-BSxk2mkg.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-D1irgDfU.js";import"./FSDivider-CXnH-7Mj.js";import"./FSOptionGroup-CvdtvA93.js";import"./FSClickable-D9Ppoc0d.js";import"./filter-DC84psoM.js";import"./filter-DuGNEgHB.js";const _e={title:"Foundation/Shared/Lists/DataTable",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),items2:Array.from(Array(25).keys()).map(e=>({id:e.toString(),column1:`${e}`,column2:`${e}${String.fromCharCode(65+e)}`,column3:`${String.fromCharCode(65+e)}`,column4:e%5!==0?`${e}${String.fromCharCode(65+e)}`:null})),value1:[],groupBy:{key:"column4",order:"asc"},headers2:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!1},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px",sortable:!0,filterable:!1},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!1},{text:"Column 4",value:"column4",index:3,hidden:!1,width:"120px",sortable:!0,filterable:!1}],disableItemTo:!0,itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTableUI:a,FSButton:c},props:Object.keys(t),setup(){return{...e}},template:`
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
          :items="args.items2"
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
        :items="args.items2"
        @click:row="args.clickRow"
        v-model:headers="args.headers2"
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
      items2: Array.from(Array(25).keys()).map(i => ({
        id: i.toString(),
        column1: \`\${i}\`,
        column2: \`\${i}\${String.fromCharCode(65 + i)}\`,
        column3: \`\${String.fromCharCode(65 + i)}\`,
        column4: i % 5 !== 0 ? \`\${i}\${String.fromCharCode(65 + i)}\` : null
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
        width: "80px",
        sortable: true,
        filterable: false
      }, {
        text: "Column 3",
        value: "column3",
        index: 2,
        hidden: false,
        width: "120px",
        sortable: true,
        filterable: false
      }, {
        text: "Column 4",
        value: "column4",
        index: 3,
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
          :items="args.items2"
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
        :items="args.items2"
        @click:row="args.clickRow"
        v-model:headers="args.headers2"
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ze=["Variations","Carousel"];export{o as Carousel,n as Variations,ze as __namedExportsOrder,_e as default};
