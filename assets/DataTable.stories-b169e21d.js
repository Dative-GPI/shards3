import{F as i}from"./FSDataTableUI-3232bdda.js";import"./vue.esm-bundler-d8049c85.js";import"./FSCard-c2aada98.js";import"./useColors-5c9cff43.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-540b65c4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-39bd052c.js";import"./css-50f0aa1d.js";import"./FSRow-b5482a77.js";import"./FSCheckbox-5f7311ce.js";import"./FSIcon-4847f868.js";import"./VIcon-76640d9b.js";import"./color-339b05ed.js";import"./useRender-29d234e5.js";import"./tag-fffb6ba6.js";import"./FSSpan-9f00eaf4.js";import"./useSlots-bdda8306.js";import"./FSText-776f12dd.js";import"./FSSearchField-6baa6eb4.js";import"./FSTextField-7a5a6ce0.js";import"./VField-98076a13.js";import"./index-a9977cc4.js";import"./transition-a0827c0d.js";import"./VInput-95d46afc.js";import"./locale-0b822523.js";import"./density-de8a38cb.js";import"./loader-cb170f8e.js";import"./rounded-0d200380.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-e253cf80.js";import"./VTextField-bdebe004.js";import"./index-d961be33.js";import"./FSButton-819b5655.js";import"./VBtn-05fbe885.js";import"./variant-ec540a43.js";import"./elevation-ef665fc6.js";import"./group-9e62ecfa.js";import"./dimensions-c0ade26a.js";import"./router-e2bea4dd.js";import"./index-ea9d807b.js";import"./VDefaultsProvider-2b53b1ea.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";import"./useTranslations-503566cb.js";import"./FSSelectField-c0bef37d.js";import"./VSelect-4008bbf6.js";import"./VOverlay-0482e356.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";import"./VMenu-878df07f.js";import"./ssrBoot-93e7847f.js";import"./VImg-9cec152f.js";import"./VDivider-3e2a8435.js";import"./VSelectionControl-06ba5d17.js";import"./VSlideGroup-28438428.js";import"./FSFadeOut-1925c606.js";import"./FSChip-d5847dfd.js";import"./FSToggleSet-578c8507.js";import"./FSSlideGroup-c565556d.js";import"./FSWrapGroup-ef3a792c.js";import"./useBreakpoints-7d02383c.js";import"./filter-5c2b177b.js";const ve={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
