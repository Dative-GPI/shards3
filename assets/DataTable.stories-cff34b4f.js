import{F as i}from"./FSDataTableUI-8ef9aca7.js";import"./vue.esm-bundler-72feb788.js";import"./vue-router-c36f9e85.js";import"./FSCard-692a57a9.js";import"./useColors-1fcec14a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-1fe57d71.js";import"./css-a2b3c3ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-df85c70b.js";import"./FSRow-ae483077.js";import"./FSCheckbox-69ba5066.js";import"./FSIcon-f69578a9.js";import"./VIcon-cb64ea3c.js";import"./color-564bd659.js";import"./useRender-c1d2bc01.js";import"./tag-39781742.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./FSText-74aefad9.js";import"./FSSearchField-c4dc2a8e.js";import"./FSTextField-a3e482ba.js";import"./VField-aa8d0612.js";import"./index-71844868.js";import"./transition-b3b454fb.js";import"./VInput-273bf99c.js";import"./locale-8250cc46.js";import"./density-9047996c.js";import"./loader-d80eacaf.js";import"./rounded-1c8889d4.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-9ee9e868.js";import"./VTextField-4b986ab3.js";import"./index-348a046d.js";import"./FSButton-051e4a14.js";import"./useTranslations-3d964ba1.js";import"./FSSelectField-35680440.js";import"./VSelect-19549f44.js";import"./VOverlay-b54f5de0.js";import"./dimensions-e9edc3f7.js";import"./display-23a66237.js";import"./lazy-5ceada29.js";import"./router-9d57a94c.js";import"./VMenu-de5b29f3.js";import"./VDefaultsProvider-979dcd64.js";import"./ssrBoot-76ac3587.js";import"./border-9f8612cb.js";import"./elevation-2e2adb9f.js";import"./index-980d11d4.js";import"./VImg-0c08cfd1.js";import"./VDivider-c862867d.js";import"./resizeObserver-297ec059.js";import"./VSelectionControl-808f9c38.js";import"./VSlideGroup-be21164f.js";import"./group-3c229d66.js";import"./FSFadeOut-3ecced89.js";import"./FSChip-2e6fd25d.js";import"./FSToggleSet-46bf7797.js";import"./FSSlideGroup-2334182c.js";import"./FSButtonNextIcon-6cdd0570.js";import"./FSWrapGroup-8ca5722e.js";import"./VBtn-146a85cd.js";import"./VProgressCircular-1f974666.js";import"./filter-95ebf9d1.js";const he={title:"Foundation/Shared/Lists/DataTable",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{headers1:[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],items1:Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),value1:[],groupBy:{key:"column4",order:"asc"},itemTo:e=>({name:"device",params:{deviceId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:m})=>({components:{FSDataTableUI:i},props:Object.keys(m),setup(){return{...e}},template:`
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const fe=["Variations"];export{o as Variations,fe as __namedExportsOrder,he as default};
