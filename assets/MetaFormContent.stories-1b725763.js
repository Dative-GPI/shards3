import{f as A,D as u,E as r,F as d,G as n,H as y,V as f,P as c,K as M,L as P,J as g}from"./vue.esm-bundler-a0893183.js";import{F as x}from"./FSText-46c134d7.js";import{F as _}from"./FSMetaField-1df73290.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as p}from"./FSCol-e45ac157.js";import{_ as L}from"./FSRow-821d23a1.js";import{P as o}from"./customPropertyEnums-7823143c.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./useSlots-d5b57407.js";import"./FSDateTimeField-5e29e115.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./forwardRefs-e658ad70.js";import"./useRender-13ac3742.js";import"./proxiedModel-59232916.js";import"./anchor-155e2782.js";import"./color-d0fba9db.js";import"./dimensions-b1078284.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./locale-ece9a1bb.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./transition-36d39bce.js";import"./VDefaultsProvider-c4e19f1a.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./FSSpan-4daadeb4.js";import"./VSpacer-b1094f09.js";import"./index-ec7e733e.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./rounded-4c492e72.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./FSIcon-9d61ed62.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./FSCalendar-69bc34ae.js";import"./useAppTimeZone-d7f3e4a5.js";import"./useTranslations-95b4a686.js";import"./VLocaleProvider-722b4423.js";import"./date-3a0265c8.js";import"./VBtn-f8320e3a.js";import"./border-ca0badc6.js";import"./elevation-7d7e39c3.js";import"./group-0833c323.js";import"./index-8d9a280b.js";import"./FSWindow-495cf922.js";import"./ssrBoot-0ed128b5.js";import"./FSClock-a50b14f0.js";import"./FSSlider-ad9cae7f.js";import"./VSlider-dd82cf9d.js";import"./VMenu-02096e7e.js";import"./FSNumberField-2b490b10.js";import"./FSSelectField-6fb3d8a3.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VSelectionControl-df8a6f90.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./VList-f2210020.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VSelect-9102db02.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./FSIconField-c7dd4041.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./FSWrapGroup-24d8166e.js";import"./FSSwitch-b3c56698.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:x},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,D,z){const F=u("FSText"),h=u("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const co={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
    <FSCol>
      <FSMetaFormContent
        :customProperties="args.customProperties"
        v-model="args.meta" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
    </FSCol>`})};var V,b,C;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    args: {
      customProperties: [{
        id: "1",
        label: "Selector",
        code: "selector",
        categoryLabel: "Category1",
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
      }, {
        id: "2",
        label: "Number",
        code: "number",
        categoryLabel: "Category1",
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
      }, {
        id: "3",
        label: "Boolean",
        code: "bool",
        categoryLabel: "Category1",
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
      }, {
        id: "4",
        label: "String",
        code: "string",
        categoryLabel: "Category2",
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
      }, {
        id: "5",
        label: "Date",
        code: "date",
        categoryLabel: "Category2",
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
      }, {
        id: "6",
        label: "Icon",
        code: "icon",
        categoryLabel: "Category3",
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
      }],
      meta: {
        existing: "test"
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaFormContent,
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
      <FSMetaFormContent
        :customProperties="args.customProperties"
        v-model="args.meta" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
    </FSCol>\`
  })
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const go=["Variations"];export{l as Variations,go as __namedExportsOrder,co as default};
