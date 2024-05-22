import{F as r}from"./FSMetaField-52b9cc9f.js";import{_ as d}from"./FSCol-c97fad61.js";import{P as e}from"./customPropertyEnums-7823143c.js";import"./vue.esm-bundler-01006032.js";import"./FSSwitch-dcb27478.js";import"./FSSpan-6e79caf3.js";import"./useSlots-e0d7ab7c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-83e75060.js";import"./css-279a0029.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./useRules-54978858.js";import"./index-491d6eb9.js";import"./useRender-4bcbb6ac.js";import"./VDefaultsProvider-d99c6ff5.js";import"./VInput-50bb839f.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./VIcon-17be8ae5.js";import"./color-8c62b342.js";import"./tag-1f5f74bd.js";import"./transition-9c7eb302.js";import"./density-d09a1492.js";import"./dimensions-4232d0fa.js";import"./VSelectionControl-3e964160.js";import"./index-89394051.js";import"./VLabel-f27c70ae.js";import"./loader-878147ed.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./anchor-1cd9d9ab.js";import"./rounded-9001edc0.js";import"./FSIconField-83e422bd.js";import"./FSToggleSet-be653781.js";import"./FSSlideGroup-8aec8bc5.js";import"./FSButtonNextIcon-3107391f.js";import"./FSButton-be94d44f.js";import"./FSClickable-a0c1e9ef.js";import"./FSCard-8fcd8e1e.js";import"./FSIcon-15b738c8.js";import"./VSlideGroup-e0f01fc0.js";import"./display-77f43728.js";import"./goto-9bab4060.js";import"./group-e9c3615d.js";import"./FSWrapGroup-83a13764.js";import"./FSTextField-4ac67195.js";import"./VField-f1a9daf9.js";import"./VSpacer-78b81ef3.js";import"./forwardRefs-e658ad70.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./FSSelectField-6c305e90.js";import"./FSDialogMenu-aa70b58d.js";import"./VDialog-7227fab4.js";import"./VOverlay-d4d3a71f.js";import"./lazy-d0bac168.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./FSRadioGroup-bdbad880.js";import"./FSCheckbox-40e0c55f.js";import"./FSFadeOut-f03472dd.js";import"./useDebounce-ff82ad1d.js";import"./VSelect-450b500f.js";import"./VMenu-4c05ddd6.js";import"./ssrBoot-b1480e9f.js";import"./border-10554549.js";import"./elevation-28c6fd5f.js";import"./VImg-f5b3db66.js";import"./VDivider-10bc2e69.js";import"./FSNumberField-c639d51b.js";import"./FSDateTimeField-65b68bec.js";import"./FSCalendar-ba8e4611.js";import"./useAppTimeZone-14b58e87.js";import"./useTranslations-e38f43a5.js";import"./VLocaleProvider-8d2dae90.js";import"./date-065dc41c.js";import"./VBtn-dbaccc27.js";import"./FSWindow-bc3c4e10.js";import"./FSClock-735f12e2.js";import"./FSSlider-03a4c952.js";import"./VSlider-726ee6f3.js";const je={title:"Foundation/Core/CustomProperties/MetaField",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,selector:{id:"1",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(n,{argTypes:i})=>({components:{FSMetaField:r,FSCol:d},props:Object.keys(i),setup(){return{...n}},template:`
    <FSCol>
      <FSMetaField
        label="Only allowed values"
        :customProperty="args.selector"
        v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Number type"
        :customProperty="args.number"
        v-model="args.value2" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="String type"
        :customProperty="args.string"
        v-model="args.value3" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Boolean type"
        :customProperty="args.bool"
        v-model="args.value4" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Date type"
        :customProperty="args.date"
        v-model="args.value5" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Icon type"
        :customProperty="args.icon"
        v-model="args.value6" />
    </FSCol>`})};var o,t,a;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      selector: {
        id: "1",
        label: "Selector",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.String,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: true,
        allowedValues: {
          ["1"]: "value1",
          ["2"]: "value 2",
          ["3"]: "value 3",
          ["key without value"]: null
        }
      },
      value2: null,
      number: {
        id: "2",
        label: "Number",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Number,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value3: null,
      bool: {
        id: "3",
        label: "Boolean",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Boolean,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value4: null,
      string: {
        id: "4",
        label: "String",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.String,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value5: null,
      date: {
        id: "5",
        label: "Date",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.DateTime,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value6: null,
      icon: {
        id: "6",
        label: "Icon",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Icon,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSMetaField
        label="Only allowed values"
        :customProperty="args.selector"
        v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Number type"
        :customProperty="args.number"
        v-model="args.value2" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="String type"
        :customProperty="args.string"
        v-model="args.value3" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Boolean type"
        :customProperty="args.bool"
        v-model="args.value4" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Date type"
        :customProperty="args.date"
        v-model="args.value5" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Icon type"
        :customProperty="args.icon"
        v-model="args.value6" />
    </FSCol>\`
  })
}`,...(a=(t=l.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const Ee=["Variations"];export{l as Variations,Ee as __namedExportsOrder,je as default};
