import{j as M,I as m,J as o,K as t,L as r,Q as $,N as f,F as k,U as d,V as i,A as v,W as A,X as N}from"./vue.esm-bundler-7c237656.js";import{F as h}from"./FSSwitch-28fd68a6.js";import{F as B}from"./FSIconField-5f485d9d.js";import{F as L}from"./FSSelectField-96856ed9.js";import{F as z}from"./FSNumberField-0dec0d81.js";import{F as U}from"./FSDateTimeField-39a88a14.js";import{P as s}from"./customPropertyEnums-7823143c.js";import{u as q}from"./useAppTimeZone-62c4f11c.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSIcon-5ad13b7e.js";import{_ as E}from"./FSRow-0e15f868.js";import{_ as p}from"./FSSpan-661158f8.js";import{F as R}from"./FSTextField-413ac9ce.js";import{V as J}from"./VSelect-735dad66.js";import{_ as K}from"./FSCol-76ddd6d9.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./useRules-30f7bcaa.js";import"./index-09a2de27.js";import"./useRender-e0e7d9de.js";import"./VDefaultsProvider-82c11bd7.js";import"./VInput-eed42ecd.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./VIcon-0c1eaee2.js";import"./color-8a2bce37.js";import"./tag-7dab75b7.js";import"./transition-e42cd317.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./VLabel-236d5849.js";import"./loader-a7579223.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./rounded-a3086a85.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./FSButton-2de03eb9.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./css-aa928277.js";import"./useSlots-338ea3fb.js";import"./VSlideGroup-5e88f18e.js";import"./display-e291008d.js";import"./goto-527c7407.js";import"./group-3855ab92.js";import"./FSWrapGroup-37c801a8.js";import"./FSDialogMenu-b6d68568.js";import"./VDialog-618a6f28.js";import"./VOverlay-a23169e8.js";import"./forwardRefs-e658ad70.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./FSRadioGroup-3ba4b727.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./FSCheckbox-da06ce33.js";import"./FSFadeOut-e9437c53.js";import"./useDebounce-3b8c8385.js";import"./FSCalendar-06af2df8.js";import"./VLocaleProvider-ebab5d08.js";import"./date-b97c4eea.js";import"./VBtn-fdffead2.js";import"./border-e24af5bf.js";import"./elevation-785d47fb.js";import"./FSWindow-15ce3fe2.js";import"./ssrBoot-ce89aa70.js";import"./FSClock-57ca32dd.js";import"./FSSlider-6aed59a1.js";import"./VSlider-a354f8be.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./VMenu-2484e62c.js";import"./useTranslations-5148abf7.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";const I=M({name:"FSMetaField",components:{FSSwitch:h,FSIconField:B,FSSelectField:L,FSNumberField:z,FSDateTimeField:U},props:{customProperty:{type:Object,required:!0},modelValue:{type:String,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{epochToLongTimeFormat:a,epochToPicker:b,getUserOffsetMillis:c,getMachineOffsetMillis:g}=q();return{PropertyDataType:s,getMachineOffsetMillis:g,getUserOffsetMillis:c,asSelector:n=>{switch(e.customProperty.dataType){case s.Boolean:return(n==null?void 0:n.toLowerCase())==="true"?"mdi-check-circle-outline":"mdi-close-circle-outline";case s.DateTime:return a(parseInt(n));default:return n}},asDateTime:()=>{let n;return e.modelValue!=null&&isFinite(parseInt(e.modelValue))&&(n=parseInt(e.modelValue)),b(n)??void 0},asBoolean:()=>e.modelValue==="true",asNumber:()=>{if(!isNaN(parseFloat(e.modelValue)))return parseFloat(e.modelValue)}}}});function Q(e,a,b,c,g,D){const V=m("FSSelectField"),F=m("FSNumberField"),S=m("FSDateTimeField"),n=m("FSIconField");return e.$props.customProperty.useOnlyAllowedValues?(o(),t(V,{key:0,label:e.$props.customProperty.label,items:Object.keys(e.$props.customProperty.allowedValues),disabled:!e.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:modelValue",l))},{selection:r(({item:l})=>[e.customProperty.allowedValues[l.value]!=null?(o(),t(p,{key:0,class:"text-body-1"},{default:r(()=>[d(i(e.customProperty.allowedValues[l.value]),1)]),_:2},1024)):[e.PropertyDataType.Number,e.PropertyDataType.String,e.PropertyDataType.DateTime].includes(e.customProperty.dataType)?(o(),t(p,{key:1,class:"text-body-1"},{default:r(()=>[d(i(e.asSelector(l.value)),1)]),_:2},1024)):[e.PropertyDataType.Boolean,e.PropertyDataType.Icon].includes(e.customProperty.dataType)?(o(),t(P,{key:2},{default:r(()=>[d(i(e.asSelector(l.value)),1)]),_:2},1024)):f("",!0)]),item:r(({props:l,item:u})=>[v(J,A(N({...l,title:""})),{default:r(()=>[v(E,{align:"center-left"},{default:r(()=>[e.customProperty.allowedValues[u.value]!=null?(o(),t(p,{key:0,class:"text-body-1"},{default:r(()=>[d(i(e.customProperty.allowedValues[u.value]),1)]),_:2},1024)):[e.PropertyDataType.Number,e.PropertyDataType.String].includes(e.$props.customProperty.dataType)?(o(),t(p,{key:1,class:"text-body-1"},{default:r(()=>[d(i(e.asSelector(u.value)),1)]),_:2},1024)):[e.PropertyDataType.DateTime].includes(e.$props.customProperty.dataType)?(o(),t(p,{key:2,class:"text-body-1"},{default:r(()=>[d(i(e.asSelector(u.value)),1)]),_:2},1024)):[e.PropertyDataType.Boolean,e.PropertyDataType.Icon].includes(e.$props.customProperty.dataType)?(o(),t(P,{key:3},{default:r(()=>[d(i(e.asSelector(u.value)),1)]),_:2},1024)):f("",!0)]),_:2},1024)]),_:2},1040)]),_:1},8,["label","items","disabled","modelValue"])):(o(),$(k,{key:1},[e.$props.customProperty.dataType===e.PropertyDataType.Number?(o(),t(F,{key:0,label:e.$props.customProperty.label,disabled:!e.editable,modelValue:e.asNumber(),"onUpdate:modelValue":a[1]||(a[1]=l=>e.$emit("update:modelValue",l.toString()))},null,8,["label","disabled","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Boolean?(o(),t(h,{key:1,label:e.$props.customProperty.label,editable:e.editable,modelValue:e.asBoolean(),"onUpdate:modelValue":a[2]||(a[2]=l=>e.$emit("update:modelValue",l.toString()))},null,8,["label","editable","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.String?(o(),t(R,{key:2,label:e.$props.customProperty.label,disabled:!e.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[3]||(a[3]=l=>e.$emit("update:modelValue",l))},null,8,["label","disabled","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.DateTime?(o(),t(S,{key:3,label:e.$props.customProperty.label,editable:e.editable,modelValue:e.asNumber(),"onUpdate:modelValue":a[4]||(a[4]=l=>e.$emit("update:modelValue",(l+e.getMachineOffsetMillis-e.getUserOffsetMillis).toString()))},null,8,["label","editable","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Icon?(o(),t(n,{key:4,label:e.$props.customProperty.label,editable:e.editable,modelValue:e.modelValue,"onUpdate:modelValue":a[5]||(a[5]=l=>e.$emit("update:modelValue",l.toString()))},null,8,["label","editable","modelValue"])):f("",!0)],64))}const C=j(I,[["render",Q]]);I.__docgenInfo={displayName:"FSMetaField",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"modelValue",type:{name:"string"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaField.vue"]};const Sl={title:"Foundation/Core/CustomProperties/MetaField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{value1:null,selector:{id:"1",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:s.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:s.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:s.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:s.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:s.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:s.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:a})=>({components:{FSMetaField:C,FSCol:K},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})};var T,w,O;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(w=y.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const vl=["Variations"];export{y as Variations,vl as __namedExportsOrder,Sl as default};
