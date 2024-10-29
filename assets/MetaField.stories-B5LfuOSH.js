import{F as r}from"./FSMetaField-DjL1BcV_.js";import{F as p}from"./FSCol-BvqytbKT.js";import{P as e}from"./customProperties-DqkON8hk.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSDateTimeField-2VArgjmv.js";import"./VList-ByZS85Zy.js";import"./FSCard-DL4SLpmS.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./index-B089V-om.js";import"./VIcon-D6ql3n-m.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./index-Cr304eD2.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSButton-DcUuAZqz.js";import"./FSClickable-Up0p3Vk8.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./FSIcon-uIr9VdFq.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./FSCalendar-BiDA0mfc.js";import"./FSSelectField-fg5c3EuB.js";import"./FSSlideGroup-CBieAKh7.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSCheckbox-BlsFOPfN.js";import"./VSelectionControl-Br2dHavx.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSLoader-kY4Od3NB.js";import"./FSRadio-CqjI9hQz.js";import"./VSelect-PvBRpE5x.js";import"./VMenu-DQq2E1HW.js";import"./useDateFormat-CLdrxMO6.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useAppTimeZone-BUrTBgYP.js";import"./useTranslations-CJK8D24x.js";import"./VLocaleProvider-DMII1C8e.js";import"./VBtn-9DyKx9D6.js";import"./FSWindow-tyjsnE42.js";import"./FSClock-Dj8e7hmy.js";import"./FSSlider-CMfVUs3a.js";import"./VSlider-Ku0tr_EN.js";import"./FSNumberField-lpIHkas9.js";import"./FSIconField-B23Hp5LX.js";import"./FSSwitch-BfZ0O9bW.js";const qe={title:"Foundation/Core/CustomProperties/MetaField",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,string:{id:"1",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,date:{id:"4",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,icon:{id:"5",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(o,{argTypes:t})=>({components:{FSMetaField:r,FSCol:p},props:Object.keys(t),setup(){return{...o}},template:`
    <FSCol>
      <FSMetaField
        label="String"
        :customProperty="args.string"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Number"
        :customProperty="args.number"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Bool"
        :customProperty="args.bool"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Date"
        :customProperty="args.date"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Icon"
        :customProperty="args.icon"
        v-model="args.value5"
      />
    </FSCol>`})},a={args:{args:{value1:null,string:{id:"1",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{Alpha:"",Beta:"","third.choice":"Charly (tr)"}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{0:"Zero (tr)",100:"",200:""}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{true:"",false:"False (tr)"}},value4:null,date:{id:"4",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{0:"",36e5:"First hour","1704067200000":"1st of January 2024"}},value5:null,icon:{id:"5",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{"ab-testing":"No icon (tr)","mdi-account-outline":"","mdi-check-circle-outline":""}}}},render:(o,{argTypes:t})=>({components:{FSMetaField:r,FSCol:p},props:Object.keys(t),setup(){return{...o}},template:`
    <FSCol>
      <FSMetaField
        label="String"
        :customProperty="args.string"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Number"
        :customProperty="args.number"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Bool"
        :customProperty="args.bool"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Date"
        :customProperty="args.date"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Icon"
        :customProperty="args.icon"
        v-model="args.value5"
      />
    </FSCol>`})};var n,i,s;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      string: {
        id: "1",
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
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      },
      value2: null,
      number: {
        id: "2",
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
      date: {
        id: "4",
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
      value5: null,
      icon: {
        id: "5",
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
        label="String"
        :customProperty="args.string"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Number"
        :customProperty="args.number"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Bool"
        :customProperty="args.bool"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Date"
        :customProperty="args.date"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Icon"
        :customProperty="args.icon"
        v-model="args.value5"
      />
    </FSCol>\`
  })
}`,...(s=(i=l.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,y,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      string: {
        id: "1",
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
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: true,
        allowedValues: {
          "Alpha": "",
          "Beta": "",
          "third.choice": "Charly (tr)"
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
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: true,
        allowedValues: {
          "0": "Zero (tr)",
          "100": "",
          "200": ""
        }
      },
      value3: null,
      bool: {
        id: "3",
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
        useOnlyAllowedValues: true,
        allowedValues: {
          "true": "",
          "false": "False (tr)"
        }
      },
      value4: null,
      date: {
        id: "4",
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
        useOnlyAllowedValues: true,
        allowedValues: {
          "0": "",
          "3600000": "First hour",
          "1704067200000": "1st of January 2024"
        }
      },
      value5: null,
      icon: {
        id: "5",
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
        useOnlyAllowedValues: true,
        allowedValues: {
          "ab-testing": "No icon (tr)",
          "mdi-account-outline": "",
          "mdi-check-circle-outline": ""
        }
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
        label="String"
        :customProperty="args.string"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Number"
        :customProperty="args.number"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Bool"
        :customProperty="args.bool"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Date"
        :customProperty="args.date"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMetaField
        label="Icon"
        :customProperty="args.icon"
        v-model="args.value5"
      />
    </FSCol>\`
  })
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const Ge=["Variations","UseOnlyAllowedValues"];export{a as UseOnlyAllowedValues,l as Variations,Ge as __namedExportsOrder,qe as default};
