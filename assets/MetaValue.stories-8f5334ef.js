import{F as o,a as l}from"./FSMetaValue-c5cc21f3.js";import{_ as p}from"./FSCol-5ed907ac.js";import{P as e}from"./customPropertyEnums-7823143c.js";import"./vue.esm-bundler-6f923154.js";import"./useAppTimeZone-dc793336.js";import"./useTranslations-59cd146d.js";import"./FSIcon-93774118.js";import"./css-0cf2e273.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./useRender-1cb09274.js";import"./tag-a7b67944.js";import"./FSText-eacee215.js";import"./useSlots-21493751.js";const L={title:"Foundation/Core/CustomProperties/MetaValue",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,selector:{id:"1",code:"selector",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",code:"number",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",code:"bool",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",code:"string",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",code:"date",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",code:"icon",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value7:null,null:{id:"7",code:"null",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},meta:{selector:"selectorMeta",number:"677",string:"stringMeta",bool:"true",date:"1715699283",icon:"mdi-ab-testing"}}},render:(t,{argTypes:r})=>({components:{FSMetaValue:o,FSCol:p},props:Object.keys(r),setup(){return{...t}},template:`
    <FSCol>
      <FSMetaValue
        label="Only allowed values"
        :customProperty="args.selector"
        :meta="args.meta"
        v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Number type"
        :customProperty="args.number"
        :meta="args.meta"
        v-model="args.value2" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="String type"
        :customProperty="args.string"
        :meta="args.meta"
        v-model="args.value3" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Boolean type"
        :customProperty="args.bool"
        :meta="args.meta"
        v-model="args.value4" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Date type"
        :customProperty="args.date"
        :meta="args.meta"
        v-model="args.value5" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Icon type"
        :customProperty="args.icon"
        :meta="args.meta"
        v-model="args.value6" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="null meta code"
        :customProperty="args.null"
        :meta="args.meta"
        v-model="args.value7" />
    </FSCol>`})},n={args:{args:{value1:null,selector:{id:"1",code:"selector",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",code:"number",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",code:"bool",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",code:"string",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",code:"date",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",code:"icon",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},valuen2:null,number2:{id:"2",code:"number2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:l.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:l.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},valuen3:null,number3:{id:"3",code:"number3",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:l.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:l.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},values2:null,string2:{id:"2",code:"string2",label:"String2",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:l.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:l.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},values3:null,string3:{id:"3",code:"string3",label:"String3",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:l.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:l.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},meta:{selector:"selectoerMeta",number:"677",number2:"10",number3:"80",string:"stringMeta",string2:"Bingo",string3:"Not bingo",bool:"true",date:"1715699283",icon:"mdi-ab-testing"}}},render:(t,{argTypes:r})=>({components:{FSMetaValue:o,FSCol:p},props:Object.keys(r),setup(){return{...t}},template:`
      <FSCol>
        <FSMetaValue
          label="Only allowed values"
          :customProperty="args.selector"
          :meta="args.meta"
          v-model="args.value1" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Number type"
          :customProperty="args.number"
          :meta="args.meta"
          v-model="args.value2" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="String type"
          :customProperty="args.string"
          :meta="args.meta"
          v-model="args.value3" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Boolean type"
          :customProperty="args.bool"
          :meta="args.meta"
          v-model="args.value4" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Date type"
          :customProperty="args.date"
          :meta="args.meta"
          v-model="args.value5" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Icon type"
          :customProperty="args.icon"
          :meta="args.meta"
          v-model="args.value6" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Icon type"
          :customProperty="args.number2"
          :meta="args.meta"
          v-model="args.valuen2" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Icon type"
          :customProperty="args.number3"
          :meta="args.meta"
          v-model="args.valuen3" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="String type"
          :customProperty="args.string2"
          :meta="args.meta"
          v-model="args.value3" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="String type"
          :customProperty="args.string3"
          :meta="args.meta"
          v-model="args.value3" />
      </FSCol>`})};var s,d,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      selector: {
        id: "1",
        code: "selector",
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
        code: "number",
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
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value3: null,
      bool: {
        id: "3",
        code: "bool",
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
        code: "string",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value5: null,
      date: {
        id: "5",
        code: "date",
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
        code: "icon",
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
      },
      value7: null,
      null: {
        id: "7",
        code: "null",
        label: "Icon",
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
      meta: {
        selector: "selectorMeta",
        number: "677",
        string: "stringMeta",
        bool: "true",
        date: "1715699283",
        icon: "mdi-ab-testing"
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaValue,
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
      <FSMetaValue
        label="Only allowed values"
        :customProperty="args.selector"
        :meta="args.meta"
        v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Number type"
        :customProperty="args.number"
        :meta="args.meta"
        v-model="args.value2" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="String type"
        :customProperty="args.string"
        :meta="args.meta"
        v-model="args.value3" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Boolean type"
        :customProperty="args.bool"
        :meta="args.meta"
        v-model="args.value4" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Date type"
        :customProperty="args.date"
        :meta="args.meta"
        v-model="args.value5" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="Icon type"
        :customProperty="args.icon"
        :meta="args.meta"
        v-model="args.value6" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaValue
        label="null meta code"
        :customProperty="args.null"
        :meta="args.meta"
        v-model="args.value7" />
    </FSCol>\`
  })
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,y,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      selector: {
        id: "1",
        code: "selector",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
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
        code: "number",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value3: null,
      bool: {
        id: "3",
        code: "bool",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value4: null,
      string: {
        id: "4",
        code: "string",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value5: null,
      date: {
        id: "5",
        code: "date",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value6: null,
      icon: {
        id: "6",
        code: "icon",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: 0,
          filterValues: [],
          color: "#FF00FF"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      valuen2: null,
      number2: {
        id: "2",
        code: "number2",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: FilterType.MoreOrEqual,
          filterValues: [5],
          color: "#0000FF"
        }, {
          priority: 2,
          filterType: FilterType.MoreOrEqual,
          filterValues: [50],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      valuen3: null,
      number3: {
        id: "3",
        code: "number3",
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
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: FilterType.MoreOrEqual,
          filterValues: [5],
          color: "#0000FF"
        }, {
          priority: 2,
          filterType: FilterType.MoreOrEqual,
          filterValues: [50],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      values2: null,
      string2: {
        id: "2",
        code: "string2",
        label: "String2",
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
        colorful: true,
        colorMap: [{
          priority: 2,
          filterType: FilterType.Equal,
          filterValues: ["Bingo"],
          color: "#00FF00"
        }, {
          priority: 1,
          filterType: FilterType.None,
          filterValues: [],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      values3: null,
      string3: {
        id: "3",
        code: "string3",
        label: "String3",
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
        colorful: true,
        colorMap: [{
          priority: 2,
          filterType: FilterType.Equal,
          filterValues: ["Bingo"],
          color: "#00FF00"
        }, {
          priority: 1,
          filterType: FilterType.None,
          filterValues: [],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      meta: {
        selector: "selectoerMeta",
        number: "677",
        number2: "10",
        number3: "80",
        string: "stringMeta",
        string2: "Bingo",
        string3: "Not bingo",
        bool: "true",
        date: "1715699283",
        icon: "mdi-ab-testing"
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaValue,
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
        <FSMetaValue
          label="Only allowed values"
          :customProperty="args.selector"
          :meta="args.meta"
          v-model="args.value1" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Number type"
          :customProperty="args.number"
          :meta="args.meta"
          v-model="args.value2" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="String type"
          :customProperty="args.string"
          :meta="args.meta"
          v-model="args.value3" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Boolean type"
          :customProperty="args.bool"
          :meta="args.meta"
          v-model="args.value4" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Date type"
          :customProperty="args.date"
          :meta="args.meta"
          v-model="args.value5" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Icon type"
          :customProperty="args.icon"
          :meta="args.meta"
          v-model="args.value6" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Icon type"
          :customProperty="args.number2"
          :meta="args.meta"
          v-model="args.valuen2" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="Icon type"
          :customProperty="args.number3"
          :meta="args.meta"
          v-model="args.valuen3" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="String type"
          :customProperty="args.string2"
          :meta="args.meta"
          v-model="args.value3" />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMetaValue
          label="String type"
          :customProperty="args.string3"
          :meta="args.meta"
          v-model="args.value3" />
      </FSCol>\`
  })
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const D=["Variations","Colors"];export{n as Colors,a as Variations,D as __namedExportsOrder,L as default};
