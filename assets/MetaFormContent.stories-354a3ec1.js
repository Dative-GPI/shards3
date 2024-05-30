import{f as A,I as u,J as r,K as d,L as n,M as y,Y as f,A as c,O as M,P,F as g}from"./vue.esm-bundler-cd768bc3.js";import{F as x}from"./FSText-92e9b97f.js";import{F as _}from"./FSMetaField-8df59c7c.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as p}from"./FSCol-ff457bc3.js";import{_ as L}from"./FSRow-1d7c2545.js";import{P as o}from"./customPropertyEnums-7823143c.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./useSlots-2af30a3d.js";import"./FSSwitch-832456c3.js";import"./FSSpan-da6dde8e.js";import"./useRules-bb9e9594.js";import"./index-b97c70d5.js";import"./useRender-d216bc3f.js";import"./VDefaultsProvider-ff78bc14.js";import"./VInput-28424714.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./VIcon-95cdbe21.js";import"./color-4e667524.js";import"./tag-f5ad2c5e.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VSelectionControl-650165ff.js";import"./index-f4fa4c36.js";import"./VLabel-ac265b88.js";import"./loader-e29f326e.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./FSIconField-9eb7447b.js";import"./FSToggleSet-011993a0.js";import"./FSSlideGroup-05dda1f3.js";import"./uuid-08309875.js";import"./FSButtonNextIcon-e4aac952.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./css-c2ea3b68.js";import"./FSIcon-5671b33c.js";import"./VSlideGroup-22f87886.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./VSlideGroupItem-27057095.js";import"./FSWrapGroup-20447d85.js";import"./FSTextField-1c3f111c.js";import"./VField-4a160336.js";import"./VSpacer-a30a0a7c.js";import"./forwardRefs-e658ad70.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./FSSelectField-fdfba50d.js";import"./FSDialogMenu-f482605f.js";import"./VDialog-8ace1c67.js";import"./VOverlay-5f00a78b.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./FSRadioGroup-fe2f8bfd.js";import"./FSCheckbox-c69cb5d8.js";import"./FSFadeOut-01c8a3dd.js";import"./useDebounce-8f204f15.js";import"./VSelect-1b324382.js";import"./VMenu-2bc21026.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./VImg-7e8420c7.js";import"./VDivider-8ddbafa9.js";import"./FSNumberField-e09096ae.js";import"./FSDateTimeField-7bdd289b.js";import"./FSCalendar-52261eac.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";import"./VLocaleProvider-bb4fb764.js";import"./date-e2599fc4.js";import"./VBtn-df7c9712.js";import"./FSWindow-94e062cf.js";import"./FSClock-30da2200.js";import"./FSSlider-f977766e.js";import"./VSlider-d1ff3fb5.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:x},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,z,D){const F=u("FSText"),h=u("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const Vo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const bo=["Variations"];export{l as Variations,bo as __namedExportsOrder,Vo as default};
