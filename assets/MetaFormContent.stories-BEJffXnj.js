import{d as A,y as u,z as r,A as d,B as n,C as y,N as f,L as c,E as M,G as x,F as g}from"./vue.esm-bundler-BSwA4uJo.js";import{F as P}from"./FSText-Bql3IFAZ.js";import{F as _}from"./FSMetaField-Ct139PgG.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as p}from"./FSCol-B2fYQH2g.js";import{_ as L}from"./FSRow-C55kyKDN.js";import{P as o}from"./customPropertyEnums-jIhOaYfs.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./useSlots-BFQFTsAj.js";import"./FSDateTimeField-BO6v0fL_.js";import"./FSDialogMenu-g6t3pdyN.js";import"./FSCard-Dku7tZ0W.js";import"./css-DuQjrBfn.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D9V7QeIP.js";import"./proxiedModel-DL-L2p1V.js";import"./anchor-CkzTvcVP.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./locale-CpxwvVE1.js";import"./router-Cl1v_ijq.js";import"./transition-_APBsTwD.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./VSpacer-Bggt-xuP.js";import"./FSButton-BsHdwUXb.js";import"./FSClickable-DxIbWXqH.js";import"./VProgressCircular-Dac4kH3U.js";import"./tag-VYeYJ1FC.js";import"./FSIcon-BnX9YboA.js";import"./VIcon-5UD9vI9m.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./density-DkgHqMu0.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./rounded-CO2AQG9_.js";import"./index-BhqZCjBr.js";import"./FSCalendar-DjlLfAhK.js";import"./useDateFormat-9LaNcSHJ.js";import"./useTranslations-9ULn9k53.js";import"./useAppLanguageCode-DTo4I1JE.js";import"./useAppTimeZone-DGCoteSQ.js";import"./VLocaleProvider-BEJ-F8Bx.js";import"./VBtn-CIMHOL7K.js";import"./border-D-bqjaHb.js";import"./elevation-CjdYMzTr.js";import"./group-CrHjrh7w.js";import"./index-YRxtzmsB.js";import"./FSWindow-C__ADisX.js";import"./ssrBoot-rqOOPvOG.js";import"./FSClock-hVVEQrvm.js";import"./FSSlider-CFppYuVd.js";import"./VSlider-BhZ9nZTI.js";import"./VMenu-B0NqnZmW.js";import"./FSNumberField-BEGDK7BI.js";import"./FSSelectField-Cg6Rj-c-.js";import"./FSSlideGroup-wzQo7jGf.js";import"./uuid-DTaye2KM.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./FSCheckbox-Biwr0a4k.js";import"./VSelectionControl-CoQs29sw.js";import"./FSFadeOut-uPE_tDk4.js";import"./VImg-DoSXtjfN.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./VSelect-Fm84tqTh.js";import"./FSIconField-D5CVe4dZ.js";import"./FSSwitch-BmeoYAua.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:P},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,z,D){const F=u("FSText"),h=u("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(x(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const mo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const uo=["Variations"];export{l as Variations,uo as __namedExportsOrder,mo as default};
