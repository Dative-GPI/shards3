import{j as M,I as m,J as o,K as t,L as r,Q as $,N as f,F as k,U as d,V as i,A as v,W as A,X as N}from"./vue.esm-bundler-7c237656.js";import{F as h}from"./FSSwitch-ea8cda21.js";import{F as B}from"./FSIconField-1e56e8a8.js";import{F as L}from"./FSSelectField-87d9471e.js";import{F as z}from"./FSNumberField-89d10915.js";import{F as U}from"./FSDateTimeField-c494848e.js";import{P as s}from"./customPropertyEnums-7823143c.js";import{u as q}from"./useAppTimeZone-62c4f11c.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSIcon-84236a8c.js";import{_ as E}from"./FSRow-0e15f868.js";import{_ as p}from"./FSSpan-661158f8.js";import{F as R}from"./FSTextField-1126ba2f.js";import{V as J}from"./VSelect-6f1247c6.js";import{_ as K}from"./FSCol-76ddd6d9.js";import"./useColors-8171fc39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6b978bcd.js";import"./useRules-30f7bcaa.js";import"./index-bed3da0c.js";import"./useRender-e696dd75.js";import"./VDefaultsProvider-8ad05cd7.js";import"./VInput-cb53917c.js";import"./locale-842c83ae.js";import"./proxiedModel-255ed77f.js";import"./VIcon-ea625dc1.js";import"./color-8b3e8a76.js";import"./tag-d0e3859f.js";import"./transition-99224378.js";import"./density-ba2627df.js";import"./dimensions-506d0d5f.js";import"./VSelectionControl-4d654956.js";import"./index-b834f342.js";import"./VLabel-25f2a1ef.js";import"./loader-1ca0c22d.js";import"./VProgressCircular-84d930cf.js";import"./resizeObserver-78a25be2.js";import"./anchor-4da81316.js";import"./rounded-5c48e6dc.js";import"./FSToggleSet-60e07ad2.js";import"./FSSlideGroup-3826bb87.js";import"./FSButtonNextIcon-c829e5dd.js";import"./FSButton-f0f5de23.js";import"./FSClickable-b2b2bac7.js";import"./FSCard-be090350.js";import"./css-aa928277.js";import"./useSlots-338ea3fb.js";import"./VSlideGroup-688ca79d.js";import"./display-f7c4d7d9.js";import"./goto-5a330938.js";import"./group-114c8e76.js";import"./FSWrapGroup-1451daa8.js";import"./FSDialogMenu-de087113.js";import"./VDialog-ed113aaf.js";import"./VOverlay-215d3759.js";import"./forwardRefs-e658ad70.js";import"./lazy-ba583f92.js";import"./router-0c914c7c.js";import"./scopeId-01507e41.js";import"./FSRadioGroup-89330635.js";import"./VField-1b5a23ea.js";import"./VSpacer-5d7851f1.js";import"./FSCheckbox-2107f3ac.js";import"./FSFadeOut-0e321526.js";import"./useDebounce-3b8c8385.js";import"./FSCalendar-e4abf393.js";import"./VLocaleProvider-10bde4df.js";import"./date-d0d9451f.js";import"./VBtn-0c5a0e13.js";import"./border-07f356f9.js";import"./elevation-322d7ef7.js";import"./FSWindow-81381dad.js";import"./ssrBoot-ce89aa70.js";import"./FSClock-2e6460a2.js";import"./FSSlider-0388f8d1.js";import"./VSlider-26942df5.js";import"./VTextField-4e99c7f1.js";import"./index-8f8aa2a2.js";import"./VMenu-ecd47b95.js";import"./useTranslations-5148abf7.js";import"./VImg-b5b2f547.js";import"./VDivider-01b0de30.js";const I=M({name:"FSMetaField",components:{FSSwitch:h,FSIconField:B,FSSelectField:L,FSNumberField:z,FSDateTimeField:U},props:{customProperty:{type:Object,required:!0},modelValue:{type:String,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{epochToLongTimeFormat:a,epochToPicker:b,getUserOffsetMillis:c,getMachineOffsetMillis:g}=q();return{PropertyDataType:s,getMachineOffsetMillis:g,getUserOffsetMillis:c,asSelector:n=>{switch(e.customProperty.dataType){case s.Boolean:return(n==null?void 0:n.toLowerCase())==="true"?"mdi-check-circle-outline":"mdi-close-circle-outline";case s.DateTime:return a(parseInt(n));default:return n}},asDateTime:()=>{let n;return e.modelValue!=null&&isFinite(parseInt(e.modelValue))&&(n=parseInt(e.modelValue)),b(n)??void 0},asBoolean:()=>e.modelValue==="true",asNumber:()=>{if(!isNaN(parseFloat(e.modelValue)))return parseFloat(e.modelValue)}}}});function Q(e,a,b,c,g,D){const V=m("FSSelectField"),F=m("FSNumberField"),S=m("FSDateTimeField"),n=m("FSIconField");return e.$props.customProperty.useOnlyAllowedValues?(o(),t(V,{key:0,label:e.$props.customProperty.label,items:Object.keys(e.$props.customProperty.allowedValues),disabled:!e.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:modelValue",l))},{selection:r(({item:l})=>[e.customProperty.allowedValues[l.value]!=null?(o(),t(p,{key:0,class:"text-body-1"},{default:r(()=>[d(i(e.customProperty.allowedValues[l.value]),1)]),_:2},1024)):[e.PropertyDataType.Number,e.PropertyDataType.String,e.PropertyDataType.DateTime].includes(e.customProperty.dataType)?(o(),t(p,{key:1,class:"text-body-1"},{default:r(()=>[d(i(e.asSelector(l.value)),1)]),_:2},1024)):[e.PropertyDataType.Boolean,e.PropertyDataType.Icon].includes(e.customProperty.dataType)?(o(),t(P,{key:2},{default:r(()=>[d(i(e.asSelector(l.value)),1)]),_:2},1024)):f("",!0)]),item:r(({props:l,item:u})=>[v(J,A(N({...l,title:""})),{default:r(()=>[v(E,{align:"center-left"},{default:r(()=>[e.customProperty.allowedValues[u.value]!=null?(o(),t(p,{key:0,class:"text-body-1"},{default:r(()=>[d(i(e.customProperty.allowedValues[u.value]),1)]),_:2},1024)):[e.PropertyDataType.Number,e.PropertyDataType.String].includes(e.$props.customProperty.dataType)?(o(),t(p,{key:1,class:"text-body-1"},{default:r(()=>[d(i(e.asSelector(u.value)),1)]),_:2},1024)):[e.PropertyDataType.DateTime].includes(e.$props.customProperty.dataType)?(o(),t(p,{key:2,class:"text-body-1"},{default:r(()=>[d(i(e.asSelector(u.value)),1)]),_:2},1024)):[e.PropertyDataType.Boolean,e.PropertyDataType.Icon].includes(e.$props.customProperty.dataType)?(o(),t(P,{key:3},{default:r(()=>[d(i(e.asSelector(u.value)),1)]),_:2},1024)):f("",!0)]),_:2},1024)]),_:2},1040)]),_:1},8,["label","items","disabled","modelValue"])):(o(),$(k,{key:1},[e.$props.customProperty.dataType===e.PropertyDataType.Number?(o(),t(F,{key:0,label:e.$props.customProperty.label,disabled:!e.editable,modelValue:e.asNumber(),"onUpdate:modelValue":a[1]||(a[1]=l=>e.$emit("update:modelValue",l.toString()))},null,8,["label","disabled","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Boolean?(o(),t(h,{key:1,label:e.$props.customProperty.label,editable:e.editable,modelValue:e.asBoolean(),"onUpdate:modelValue":a[2]||(a[2]=l=>e.$emit("update:modelValue",l.toString()))},null,8,["label","editable","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.String?(o(),t(R,{key:2,label:e.$props.customProperty.label,disabled:!e.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[3]||(a[3]=l=>e.$emit("update:modelValue",l))},null,8,["label","disabled","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.DateTime?(o(),t(S,{key:3,label:e.$props.customProperty.label,editable:e.editable,modelValue:e.asNumber(),"onUpdate:modelValue":a[4]||(a[4]=l=>e.$emit("update:modelValue",(l+e.getMachineOffsetMillis-e.getUserOffsetMillis).toString()))},null,8,["label","editable","modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Icon?(o(),t(n,{key:4,label:e.$props.customProperty.label,editable:e.editable,modelValue:e.modelValue,"onUpdate:modelValue":a[5]||(a[5]=l=>e.$emit("update:modelValue",l.toString()))},null,8,["label","editable","modelValue"])):f("",!0)],64))}const C=j(I,[["render",Q]]);I.__docgenInfo={displayName:"FSMetaField",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"modelValue",type:{name:"string"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaField.vue"]};const vl={title:"Foundation/Core/CustomProperties/MetaField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{value1:null,selector:{id:"1",label:"Selector",categoryLabel:"Category",index:0,entity:1,dataType:s.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},value2:null,number:{id:"2",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:s.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value3:null,bool:{id:"3",label:"Boolean",categoryLabel:"Category",index:0,entity:1,dataType:s.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value4:null,string:{id:"4",label:"String",categoryLabel:"Category",index:0,entity:1,dataType:s.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value5:null,date:{id:"5",label:"Date",categoryLabel:"Category",index:0,entity:1,dataType:s.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},value6:null,icon:{id:"6",label:"Icon",categoryLabel:"Category",index:0,entity:1,dataType:s.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:a})=>({components:{FSMetaField:C,FSCol:K},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(O=(w=y.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const Pl=["Variations"];export{y as Variations,Pl as __namedExportsOrder,vl as default};
