import{d as M,y as u,z as r,A as d,C as l,E as y,O as c,N as f,H as x,I as P,G as g}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as _}from"./FSText-CAGI2dEo.js";import{F as v}from"./FSMetaField-CBpGXJ_V.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as p}from"./FSCol-D8gLxM2E.js";import{_ as k}from"./FSRow-CSQtiyAx.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./FSDateTimeField-DVibMFq5.js";import"./VList-BsRjN0ZI.js";import"./FSCard-Bfo4Z0Zf.js";import"./css-CxoeZkpP.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DdAXPAA0.js";import"./proxiedModel-BYnu2EOK.js";import"./anchor-BdD5yCeG.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./locale-CA7yUTVs.js";import"./router-C4YP2PAT.js";import"./transition-BtBp4lzQ.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./index-B-qTxNvr.js";import"./VIcon-zho7mIKV.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./density-B5LNz2JK.js";import"./elevation-BNOJtsSY.js";import"./rounded-BoPqla0T.js";import"./index-BF2Ge4Ib.js";import"./VImg-Bi-pKvLj.js";import"./index-lTYthPHq.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./FSSpan-Bh1X02mE.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./FSIcon-DfjSexyz.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./FSCalendar-DyuR8JTx.js";import"./FSSelectField-WQNi82Nz.js";import"./FSSlideGroup-8udoapu6.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-CjZBl77R.js";import"./FSWrapGroup-DCzWuvHX.js";import"./FSCheckbox-3iIuKfLX.js";import"./VSelectionControl-DbX2q5FD.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSLoader-PksHGtEK.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./useDateFormat-DxxoI3Q6.js";import"./useAppLanguageCode-C2XicOK_.js";import"./useAppTimeZone-Bno6Crzp.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-DgvmBCqU.js";import"./VLocaleProvider-BeLlKx4R.js";import"./VBtn-GP0Uljy4.js";import"./FSWindow-GiLlYucO.js";import"./FSClock-Dkr4hzr5.js";import"./FSSlider-CjZEqTOh.js";import"./VSlider-yf_hyjT_.js";import"./FSNumberField-CZ8TYmdD.js";import"./FSIconField-CVyhcR3o.js";import"./FSSwitch-BwaGJF7n.js";const O=M({name:"FSMetaFormContent",components:{FSMetaField:v,FSText:_},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function z(e,i,t,a,D,N){const h=u("FSText"),F=u("FSMetaField");return r(),d(p,{gap:24},{default:l(()=>[(r(!0),y(g,null,c(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:l(()=>[f(k,null,{default:l(()=>[f(h,{font:"text-h3"},{default:l(()=>[x(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,c(w,(s,T)=>(r(),d(F,{customProperty:s,editable:e.editable,key:T,modelValue:e.modelValue[s.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[s.code]:A})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const S=L(O,[["render",z]]);O.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const bo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:i})=>({components:{FSMetaFormContent:S,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
    <FSCol>
      <FSMetaFormContent
        :customProperties="args.customProperties"
        v-model="args.meta" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
    </FSCol>`})};var V,b,C;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Co=["Variations"];export{n as Variations,Co as __namedExportsOrder,bo as default};
