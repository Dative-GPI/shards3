import{d as A,y as u,z as r,A as d,B as n,C as y,P as f,K as c,E as M,G as P,F as g}from"./vue.esm-bundler-CLWyqtrq.js";import{F as x}from"./FSText-B9kmC_JD.js";import{F as _}from"./FSMetaField-Dk3YMLmd.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as p}from"./FSCol-B1LPjIXg.js";import{_ as L}from"./FSRow-B7tdsi71.js";import{P as o}from"./customPropertyEnums-jIhOaYfs.js";import"./useColors-D61Fe1_L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-bwyTeVCn.js";import"./useSlots-YtBg7QOA.js";import"./FSDateTimeField-CxEzo6Ii.js";import"./FSDialogMenu-C9Ewv9NN.js";import"./FSCard-CtrctGW7.js";import"./css-Ca-HPGcF.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-BBsw_RbX.js";import"./proxiedModel-3ec75IAg.js";import"./anchor-D3k-mERr.js";import"./color-CiZ0sQz8.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./locale-DAz5thp-.js";import"./router-Bm0MCij7.js";import"./transition-D0Fyuczc.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./FSTextField-BJ0CYXhH.js";import"./VField-BXxuzAJZ.js";import"./FSSpan-C4Iz3qX9.js";import"./VSpacer-gQABP9En.js";import"./index-3KSGAm21.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./VIcon-CTYwU69W.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./rounded-BEQ3HMtY.js";import"./FSButton-xawrBwn0.js";import"./FSClickable-CX-mXFfM.js";import"./FSIcon-nvjMvWEC.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./FSCalendar-pf-LQHLH.js";import"./useAppTimeZone-CjMaOqrj.js";import"./useTranslations-BiPIEqtB.js";import"./VLocaleProvider-BP1Djfq4.js";import"./date-DzTNZC7Y.js";import"./VBtn-DWhqhpec.js";import"./border-Bs-XyEFQ.js";import"./elevation-CB-eCL4u.js";import"./group-BZx0j_nI.js";import"./index-CgBlQs6Z.js";import"./FSWindow-BNoQJY6A.js";import"./ssrBoot-pwfi9K1z.js";import"./FSClock-DvaB_4RY.js";import"./FSSlider-DqPqVVC0.js";import"./VSlider-ChBxLEny.js";import"./VMenu-CBjAwdlw.js";import"./FSNumberField-Hev8k8Ih.js";import"./FSSelectField-iDoaqi5b.js";import"./FSRadioGroup-DJ8Wh-Vs.js";import"./FSRadio-YkCJJZtr.js";import"./VSelectionControl-CFm2WUhz.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSFadeOut-Cm2RoYLR.js";import"./uuid-DTaye2KM.js";import"./VList-COAYh1Wj.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VSelect-DovITVmj.js";import"./VSlideGroup-Bfe_5BeH.js";import"./FSIconField-CKEfCeMM.js";import"./FSToggleSet-CWkSWZ4R.js";import"./FSSlideGroup-DqfnNVEm.js";import"./FSWrapGroup-BLZ0_EVh.js";import"./FSSwitch-Brv1-FxK.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:x},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,z,D){const F=u("FSText"),h=u("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const yo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
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
