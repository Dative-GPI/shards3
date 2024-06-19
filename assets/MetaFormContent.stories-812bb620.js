import{f as A,D as u,E as r,F as d,G as n,H as y,V as f,P as c,K as M,L as P,J as g}from"./vue.esm-bundler-6f923154.js";import{F as x}from"./FSText-eacee215.js";import{F as _}from"./FSMetaField-90190a38.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as p}from"./FSCol-5ed907ac.js";import{_ as L}from"./FSRow-64caadb9.js";import{P as o}from"./customPropertyEnums-7823143c.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./useSlots-21493751.js";import"./FSDateTimeField-f72a9af0.js";import"./FSDialogMenu-7aaa5a49.js";import"./FSCard-32925b42.js";import"./css-0cf2e273.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./forwardRefs-e658ad70.js";import"./useRender-1cb09274.js";import"./proxiedModel-c8904091.js";import"./anchor-52e92869.js";import"./color-a262cadc.js";import"./dimensions-dec12c77.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./locale-577543b5.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./transition-e76cd387.js";import"./VDefaultsProvider-a08a9a42.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./FSSpan-7bb94541.js";import"./VSpacer-54f0d5ce.js";import"./index-4caca680.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./rounded-1f8e51a9.js";import"./FSButton-ff673895.js";import"./FSClickable-e71ee20f.js";import"./FSIcon-93774118.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./FSCalendar-32e91b85.js";import"./useAppTimeZone-c6cf3192.js";import"./useTranslations-59cd146d.js";import"./VLocaleProvider-01c79f28.js";import"./date-99b258a4.js";import"./VBtn-b1e611a0.js";import"./border-f53cef89.js";import"./elevation-2c5be1c3.js";import"./group-91945d16.js";import"./index-55248dcb.js";import"./FSWindow-28c33761.js";import"./ssrBoot-082b8501.js";import"./FSClock-91bf5052.js";import"./FSSlider-a3faf322.js";import"./VSlider-0b927851.js";import"./VMenu-31bd6e5f.js";import"./FSNumberField-18810a5f.js";import"./FSSelectField-78ee29cc.js";import"./FSRadioGroup-52f2d9ef.js";import"./VSelectionControl-40c897c6.js";import"./FSCheckbox-4fa3808a.js";import"./FSFadeOut-1de34239.js";import"./uuid-08309875.js";import"./VSelect-b637e5b8.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./FSIconField-f97d7a06.js";import"./FSToggleSet-294c6bb8.js";import"./FSSlideGroup-ddac1e24.js";import"./FSWrapGroup-a40e4a86.js";import"./FSSwitch-e1fb2212.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:x},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,D,z){const F=u("FSText"),h=u("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const yo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const fo=["Variations"];export{l as Variations,fo as __namedExportsOrder,yo as default};
