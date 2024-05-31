import{F as r}from"./FSMetaField-4e604e3c.js";import{_ as d}from"./FSCol-44fe82a9.js";import{P as e}from"./customPropertyEnums-7823143c.js";import"./vue.esm-bundler-838daa40.js";import"./FSSwitch-222a4324.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-753b58e5.js";import"./css-67cfec15.js";import"./useColors-6f28a40a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./useRules-cda8e231.js";import"./index-6fa9bdc1.js";import"./useRender-f6a4770d.js";import"./VDefaultsProvider-a165414e.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./transition-ee4dd36d.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./FSIconField-880235f9.js";import"./FSToggleSet-43ac0eb1.js";import"./FSSlideGroup-e1a28e9b.js";import"./uuid-08309875.js";import"./FSButton-29693b64.js";import"./FSClickable-b4fb547a.js";import"./FSCard-5c5f61ca.js";import"./FSIcon-59cd3a04.js";import"./VSlideGroup-41b1c0c0.js";import"./display-ba09a035.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-12ff5894.js";import"./FSTextField-c9a78e5b.js";import"./VField-84908382.js";import"./VSpacer-7ad9c022.js";import"./forwardRefs-e658ad70.js";import"./index-e75f540f.js";import"./FSSelectField-2d0173b0.js";import"./FSDialogMenu-93a8ff3b.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-4710ea6d.js";import"./FSCheckbox-64ce212b.js";import"./FSFadeOut-60bb92c6.js";import"./VSelect-9d95899e.js";import"./VMenu-ec057191.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./elevation-c2192325.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";import"./FSNumberField-b1f0cf36.js";import"./FSDateTimeField-6dc02121.js";import"./FSCalendar-1f1ad682.js";import"./useAppTimeZone-a305acc7.js";import"./useTranslations-419c1021.js";import"./VLocaleProvider-31d8514e.js";import"./date-513bc6d0.js";import"./VBtn-a5dad0d3.js";import"./FSWindow-6f1357d0.js";import"./FSClock-8c839444.js";import"./FSSlider-39b8ede9.js";import"./VSlider-0790ba2e.js";const Ne={title:"Foundation/Core/CustomProperties/MetaField",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,selector:{id:"1",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(n,{argTypes:i})=>({components:{FSMetaField:r,FSCol:d},props:Object.keys(i),setup(){return{...n}},template:`
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
}`,...(a=(t=l.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const _e=["Variations"];export{l as Variations,_e as __namedExportsOrder,Ne as default};
