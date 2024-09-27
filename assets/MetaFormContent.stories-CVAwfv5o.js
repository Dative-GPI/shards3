import{d as A,y as u,z as r,A as d,B as n,C as y,N as f,L as c,E as M,G as x,F as g}from"./vue.esm-bundler-DjjVIdVI.js";import{F as P}from"./FSText-Der-WemT.js";import{F as _}from"./FSMetaField-DmzMH2il.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as p}from"./FSCol-TPWSQPHs.js";import{_ as L}from"./FSRow-CmD7j8Pv.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./useSlots-DzSo5JdB.js";import"./FSDateTimeField-Vvk14hPC.js";import"./FSDialogMenu-BWN6ZGUx.js";import"./FSCard-CXVJHnbm.js";import"./css-BkQhD285.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BKGJvBEr.js";import"./proxiedModel-G1bil5DU.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSTextField-3oztY1wc.js";import"./FSBaseField-DjLbenuy.js";import"./FSSpan-D1pceTli.js";import"./VSpacer-CrqXaTz-.js";import"./FSButton-DMlgbucp.js";import"./FSClickable-DB3UYOUU.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./density-BPFRY_Tg.js";import"./form-B7NlTRtd.js";import"./loader-CiSVFYJ7.js";import"./rounded-Cely44IK.js";import"./index-Cc8xmT7Y.js";import"./FSCalendar-Cq2LGrNo.js";import"./useDateFormat-C-ZOz_ut.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useAppTimeZone-oM-olaqI.js";import"./useTranslations-f9CWAvtI.js";import"./VLocaleProvider-BT2X4OIj.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./elevation-kEG7tFkj.js";import"./group-CgGrJ6ok.js";import"./index-CN4E1Twd.js";import"./FSWindow-BQgkDhQ2.js";import"./ssrBoot-Ddid0i9S.js";import"./FSClock-C2tYCGkM.js";import"./FSSlider-BV4lx6ij.js";import"./VSlider-HRDOL57F.js";import"./VMenu-BkqMtGEU.js";import"./FSNumberField-CrCRIoi9.js";import"./FSSelectField-BFInQCcN.js";import"./FSSlideGroup-DWVYRyaA.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./FSToggleSet-BrIzYH8T.js";import"./FSWrapGroup-D3vzPBUf.js";import"./FSCheckbox-UZa98yAo.js";import"./VSelectionControl-DgLKJW5n.js";import"./FSFadeOut-DtBOlAO7.js";import"./FSLoader-DpMpI5Qw.js";import"./FSRadio-BjrxbHLV.js";import"./VList-CJJ57CS8.js";import"./VImg-IVf3xxVd.js";import"./VSelect-COKlA5Ws.js";import"./FSIconField-CPkp2m5C.js";import"./FSSwitch-BTZu_0oD.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:P},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,z,D){const F=u("FSText"),h=u("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(x(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const co={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
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
