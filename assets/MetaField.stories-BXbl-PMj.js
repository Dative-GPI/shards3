import{F as t}from"./FSMetaField-CsWN2Bev.js";import{_ as p}from"./FSCol-YmDykHL-.js";import{P as e}from"./customProperties-DqkON8hk.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSDateTimeField-DZVfMgyg.js";import"./FSDialogMenu-CjU7jTTU.js";import"./FSCard-DAS46KTX.js";import"./FSRow-CVY2l52N.js";import"./css-DLfrm0pR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B5ivMAr9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BygXFKwQ.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./VSpacer-C4plVoTE.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSIcon-DHDofKUo.js";import"./VIcon-BIpY_noq.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCalendar-BqmxsuDF.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./useAppTimeZone-D_npl1cn.js";import"./VLocaleProvider-DKglj9wp.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./elevation-Ben4zuE4.js";import"./group-CBCTR8u6.js";import"./index-DPxysH4G.js";import"./FSWindow-BMzav7Sc.js";import"./ssrBoot-SGvAq9J5.js";import"./FSClock-DGdNhlfH.js";import"./FSSlider-DPBsIr6-.js";import"./VSlider-BeqB4nnW.js";import"./VMenu-BVgNprPc.js";import"./FSNumberField-DewYRD3s.js";import"./FSSelectField-D8_kFGVg.js";import"./FSSlideGroup-DCqEyw4i.js";import"./uuid-DTaye2KM.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./FSCheckbox-YoHHo_JV.js";import"./VSelectionControl-BRDFiqFl.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSLoader-DIRgKG_M.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-VfM2CROL.js";import"./FSIconField-NTMFMBff.js";import"./FSSwitch-IzKqtUHv.js";import"./FSText-8i4Fp1Ld.js";const Ze={title:"Foundation/Core/CustomProperties/MetaField",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,string:{id:"1",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,date:{id:"4",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,icon:{id:"5",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(o,{argTypes:n})=>({components:{FSMetaField:t,FSCol:p},props:Object.keys(n),setup(){return{...o}},template:`
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
    </FSCol>`})},a={args:{args:{value1:null,string:{id:"1",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{Alpha:"",Beta:"","third.choice":"Charly (tr)"}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{0:"Zero (tr)",100:"",200:""}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{true:"",false:"False (tr)"}},value4:null,date:{id:"4",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{0:"",36e5:"First hour","1704067200000":"1st of January 2024"}},value5:null,icon:{id:"5",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{"ab-testing":"No icon (tr)","mdi-account-outline":"","mdi-check-circle-outline":""}}}},render:(o,{argTypes:n})=>({components:{FSMetaField:t,FSCol:p},props:Object.keys(n),setup(){return{...o}},template:`
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
    </FSCol>`})};var r,d,s;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      date: {
        id: "4",
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
      value5: null,
      icon: {
        id: "5",
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
}`,...(s=(d=l.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var i,u,y;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Ee=["Variations","UseOnlyAllowedValues"];export{a as UseOnlyAllowedValues,l as Variations,Ee as __namedExportsOrder,Ze as default};
