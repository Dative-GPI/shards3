import{F as i}from"./FSDataTableUI-ae900ce8.js";import"./vue.esm-bundler-7e157d2d.js";import"./FSCard-38a28c75.js";import"./useColors-4000b712.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-67ffe9ae.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-7c29272b.js";import"./css-b03ad87d.js";import"./FSRow-db172e67.js";import"./FSCheckbox-dbe8bba8.js";import"./FSIcon-0a8a35f6.js";import"./VIcon-f6cc7834.js";import"./color-e501cff3.js";import"./useRender-91b27a68.js";import"./tag-831e49a1.js";import"./FSSpan-225601c1.js";import"./useSlots-db3342e3.js";import"./FSText-de47605c.js";import"./FSSearchField-83b580ef.js";import"./FSTextField-f103263d.js";import"./VField-483d98e3.js";import"./index-bda29209.js";import"./transition-b4c159ac.js";import"./VInput-1a2cc3a3.js";import"./locale-c9528b1a.js";import"./density-c657e4cb.js";import"./loader-7867d039.js";import"./rounded-fe596c98.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-5057dcd1.js";import"./VTextField-85193af7.js";import"./index-37e9655b.js";import"./FSButton-e381f01a.js";import"./useTranslations-cd0b055a.js";import"./FSSelectField-a97544c4.js";import"./VSelect-4be08003.js";import"./VOverlay-91bdeda0.js";import"./dimensions-a1a728d7.js";import"./display-84f7fe10.js";import"./lazy-55c06103.js";import"./router-cc531cb0.js";import"./VMenu-047a272f.js";import"./VDefaultsProvider-dcab85c0.js";import"./ssrBoot-ead68af0.js";import"./border-a826ffcd.js";import"./elevation-7fca9761.js";import"./index-feab7f97.js";import"./VImg-0bee75cb.js";import"./VDivider-4e0b4ac3.js";import"./resizeObserver-8feda973.js";import"./VSelectionControl-cccaa946.js";import"./VSlideGroup-89f382d0.js";import"./group-5cfad0cd.js";import"./FSFadeOut-c0d2154b.js";import"./FSChip-b6ff165a.js";import"./FSToggleSet-a8c51b34.js";import"./FSSlideGroup-d872c853.js";import"./FSButtonNextIcon-aa5b134f.js";import"./FSWrapGroup-040b0764.js";import"./VBtn-ca188bc5.js";import"./VProgressCircular-b2622fdf.js";import"./filter-bafbc75c.js";const ve={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const he=["Variations"];export{o as Variations,he as __namedExportsOrder,ve as default};
