import{d as A,y as u,z as r,A as d,B as n,C as y,P as f,K as c,E as M,G as P,F as g}from"./vue.esm-bundler-DUki7rNA.js";import{F as x}from"./FSText-CE19e0tM.js";import{F as _}from"./FSMetaField-BSEGoGrm.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as p}from"./FSCol-BBaW1DrL.js";import{_ as L}from"./FSRow-CHgEOZQb.js";import{P as o}from"./customPropertyEnums-jIhOaYfs.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./useSlots-BZu_lZyn.js";import"./FSDateTimeField-CEfNPHNk.js";import"./FSDialogMenu-5l5lej0t.js";import"./FSCard-CqpJmiEC.js";import"./css-BPLLlL3Y.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-pAH_6Aah.js";import"./proxiedModel-C4hUsKQ6.js";import"./anchor-32zVg6UX.js";import"./color-B6JLWHIR.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./locale-BngQMCjE.js";import"./router-C5N3y4B3.js";import"./transition-CAmaHrck.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./FSSpan-DUTdSgpN.js";import"./VSpacer-CujVv6t6.js";import"./index-zNldQLkd.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./VIcon-BfI5ony8.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./rounded-CuOTz_ni.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./FSIcon-CSwom3lG.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./FSCalendar-CggV1rWB.js";import"./useAppTimeZone-BvKhOiUD.js";import"./useTranslations-LhdkJQ98.js";import"./VLocaleProvider--t6nfiaG.js";import"./date-BpAaCbfG.js";import"./VBtn-CI38s1mD.js";import"./border-BeL02A28.js";import"./elevation-B5zwTzN8.js";import"./group-BFGJGSPe.js";import"./index-IoB6lNSN.js";import"./FSWindow-DURRrqL5.js";import"./ssrBoot-DA_Fjfes.js";import"./FSClock-BiFozEmz.js";import"./FSSlider-DG-uOadu.js";import"./VSlider-CUmkIQzK.js";import"./VMenu-BMkRa5on.js";import"./FSNumberField-CwGfGYoO.js";import"./FSSelectField-DFFcH9GM.js";import"./FSRadioGroup-VeAtntDL.js";import"./FSRadio-BTSSlUFf.js";import"./VSelectionControl-D7t-g0gO.js";import"./FSCheckbox-CisQZrrP.js";import"./FSFadeOut-BOJZDV1R.js";import"./uuid-DTaye2KM.js";import"./VList-DhBFmKbf.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VSelect-Doh8ERno.js";import"./VSlideGroup-DDhhsjhI.js";import"./FSIconField-DtXNEflK.js";import"./FSToggleSet-Drtcc7mS.js";import"./FSSlideGroup-DhG_7ZhN.js";import"./FSWrapGroup-CVJTSX_U.js";import"./FSSwitch-C-D5SLFi.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:x},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,z,D){const F=u("FSText"),h=u("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const yo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
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
