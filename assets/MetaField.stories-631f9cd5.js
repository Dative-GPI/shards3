import{F as r}from"./FSMetaField-993d13a1.js";import{_ as d}from"./FSCol-ff457bc3.js";import{P as e}from"./customPropertyEnums-7823143c.js";import"./vue.esm-bundler-cd768bc3.js";import"./FSSwitch-832456c3.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-1d7c2545.js";import"./css-c2ea3b68.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./useRules-bb9e9594.js";import"./index-b97c70d5.js";import"./useRender-d216bc3f.js";import"./VDefaultsProvider-ff78bc14.js";import"./VInput-28424714.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./VIcon-95cdbe21.js";import"./color-4e667524.js";import"./tag-f5ad2c5e.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VSelectionControl-650165ff.js";import"./index-f4fa4c36.js";import"./VLabel-ac265b88.js";import"./loader-e29f326e.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./FSIconField-71aef0ae.js";import"./FSToggleSet-faa5cb35.js";import"./FSSlideGroup-1f11aa53.js";import"./FSButtonNextIcon-e4aac952.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./FSIcon-5671b33c.js";import"./uuid-08309875.js";import"./VSlideGroup-22f87886.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./VSlideGroupItem-27057095.js";import"./FSWrapGroup-c7ff7fff.js";import"./FSTextField-1c3f111c.js";import"./VField-4a160336.js";import"./VSpacer-a30a0a7c.js";import"./forwardRefs-e658ad70.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./FSSelectField-a516e84b.js";import"./FSDialogMenu-f482605f.js";import"./VDialog-8ace1c67.js";import"./VOverlay-5f00a78b.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./FSRadioGroup-fe2f8bfd.js";import"./FSCheckbox-c69cb5d8.js";import"./FSFadeOut-4994a7a0.js";import"./useDebounce-8f204f15.js";import"./VSelect-1b324382.js";import"./VMenu-2bc21026.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./VImg-7e8420c7.js";import"./VDivider-8ddbafa9.js";import"./FSNumberField-e09096ae.js";import"./FSDateTimeField-7bdd289b.js";import"./FSCalendar-52261eac.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";import"./VLocaleProvider-bb4fb764.js";import"./date-e2599fc4.js";import"./VBtn-df7c9712.js";import"./FSWindow-94e062cf.js";import"./FSClock-30da2200.js";import"./FSSlider-f977766e.js";import"./VSlider-d1ff3fb5.js";const qe={title:"Foundation/Core/CustomProperties/MetaField",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,selector:{id:"1",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(n,{argTypes:i})=>({components:{FSMetaField:r,FSCol:d},props:Object.keys(i),setup(){return{...n}},template:`
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
}`,...(a=(t=l.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const Ge=["Variations"];export{l as Variations,Ge as __namedExportsOrder,qe as default};
