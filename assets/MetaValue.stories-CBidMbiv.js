import{F as o,a as l}from"./FSMetaValue-XcziFhx_.js";import{F as g}from"./FSCol-BvqytbKT.js";import{P as e}from"./customProperties-DqkON8hk.js";import"./vue.esm-bundler-l-siv0w9.js";import"./useAppTimeZone-BUrTBgYP.js";import"./FSIconCheck-Cr5lcwf4.js";import"./FSIcon-uIr9VdFq.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSText-BwKgSTLP.js";import"./useDateFormat-BlT1gBMR.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useTranslations-CJK8D24x.js";const k={title:"Foundation/Core/CustomProperties/MetaValue",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,selector:{id:"1",code:"selector",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",code:"number",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",code:"bool",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",code:"string",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",code:"date",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",code:"icon",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value7:null,null:{id:"7",code:"null",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},meta:{selector:"selectorMeta",number:"677",string:"stringMeta",bool:"true",date:"1715699283",icon:"mdi-ab-testing"}}},render:(r,{argTypes:n})=>({components:{FSMetaValue:o,FSCol:g},props:Object.keys(n),setup(){return{...r}},template:`
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
    </FSCol>`})},t={args:{args:{value1:null,selector:{id:"1",code:"selector",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",code:"number",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",code:"bool",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",code:"string",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",code:"date",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",code:"icon",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:0,filterValues:[],color:"#FF00FF"}],useOnlyAllowedValues:!1,allowedValues:{}},valuen2:null,number2:{id:"2",code:"number2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:l.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:l.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},valuen3:null,number3:{id:"3",code:"number3",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:l.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:l.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},values2:null,string2:{id:"2",code:"string2",label:"String2",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:l.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:l.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},values3:null,string3:{id:"3",code:"string3",label:"String3",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:l.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:l.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},meta:{selector:"selectoerMeta",number:"677",number2:"10",number3:"80",string:"stringMeta",string2:"Bingo",string3:"Not bingo",bool:"true",date:"1715699283",icon:"mdi-ab-testing"}}},render:(r,{argTypes:n})=>({components:{FSMetaValue:o,FSCol:g},props:Object.keys(n),setup(){return{...r}},template:`
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
      </FSCol>`})};var s,i,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,y,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(y=t.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const j=["Variations","Colors"];export{t as Colors,a as Variations,j as __namedExportsOrder,k as default};
