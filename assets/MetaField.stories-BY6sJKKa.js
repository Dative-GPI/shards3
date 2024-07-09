import{F as t}from"./FSMetaField-BxCk_xSI.js";import{_ as p}from"./FSCol-B7HQy3FB.js";import{P as e}from"./customPropertyEnums-jIhOaYfs.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSDateTimeField-BbzGp4ow.js";import"./FSDialogMenu-u1Rr1MXd.js";import"./FSCard-dcNQ4DyO.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CErFNXJM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DMal9AfS.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-C5d3UYhE.js";import"./proxiedModel-BHphZos0.js";import"./anchor-D7FjyLmk.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./locale-BC9z6YbT.js";import"./router-uZykNX6c.js";import"./transition-DSqAHFz2.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./FSTextField-bXs3PVLb.js";import"./FSBaseField-DtfOMQi_.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./FSButton-Qg63Bn8h.js";import"./FSClickable-DvDb5RUi.js";import"./VProgressCircular-BvwZAexL.js";import"./VIcon-C6jgSf5f.js";import"./FSIcon-B9OmXzeb.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./density-oYDdQVKs.js";import"./loader-CIVpWd2w.js";import"./rounded-jRyYRXzo.js";import"./index-DI8u9ozT.js";import"./FSCalendar-PWCMQcy4.js";import"./useAppTimeZone-SgthjzoP.js";import"./useTranslations-DV-taHAL.js";import"./VLocaleProvider-BxVT41hp.js";import"./VBtn-u1aQHI0Z.js";import"./border-Bvz87W_3.js";import"./elevation-xgrzvMGW.js";import"./group-dnu-odUE.js";import"./index-DUaylBew.js";import"./FSWindow-Bo6wAotL.js";import"./ssrBoot-D90vJCps.js";import"./FSClock-B3AGLNof.js";import"./FSSlider-CtAAtUMW.js";import"./VSlider-Vh0ZGQPU.js";import"./VMenu-CMf8AoPJ.js";import"./FSNumberField-BsMcjjnl.js";import"./FSSelectField-BWx877d7.js";import"./FSRadioGroup-ClSQfpFl.js";import"./FSRadio-DcIxeyub.js";import"./VSelectionControl-BD03jE0y.js";import"./FSCheckbox-CtyYVD5k.js";import"./FSFadeOut-XCSRvsBX.js";import"./uuid-DTaye2KM.js";import"./VList-BGDxsWdj.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VSelect-BFD7teB3.js";import"./VSlideGroup-Ch4AqzX6.js";import"./FSIconField-CW-jICmY.js";import"./FSToggleSet-XQ9ofx8J.js";import"./FSSlideGroup-C2ZnN_TW.js";import"./FSWrapGroup-DnF3o7c5.js";import"./FSSwitch-Dc3N5D6Q.js";import"./FSText-BUnAe0F7.js";const je={title:"Foundation/Core/CustomProperties/MetaField",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,string:{id:"1",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:e.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:e.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:e.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,date:{id:"4",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:e.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,icon:{id:"5",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:e.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(o,{argTypes:n})=>({components:{FSMetaField:t,FSCol:p},props:Object.keys(n),setup(){return{...o}},template:`
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Je=["Variations","UseOnlyAllowedValues"];export{a as UseOnlyAllowedValues,l as Variations,Je as __namedExportsOrder,je as default};
