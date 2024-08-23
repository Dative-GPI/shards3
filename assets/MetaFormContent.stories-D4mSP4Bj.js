import{d as A,y as m,z as r,A as d,B as n,C as y,N as f,L as c,E as M,G as x,F as g}from"./vue.esm-bundler-BATn8cDU.js";import{F as P}from"./FSText-CnDPSmPj.js";import{F as _}from"./FSMetaField-BlZS6VLC.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as p}from"./FSCol-D9tDKebi.js";import{_ as L}from"./FSRow-Gvoj2sTW.js";import{P as o}from"./customPropertyEnums-jIhOaYfs.js";import"./useColors-BHn59yMM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./FSDateTimeField-CxM1DvaM.js";import"./FSDialogMenu-DtOsVGjc.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./forwardRefs-DWGaNmQL.js";import"./color-jM82jTdX.js";import"./proxiedModel-D0bPfire.js";import"./anchor-CBLqXyZM.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./locale-Cm_eUAdw.js";import"./router-BSq-7NWC.js";import"./transition-O2x8Myu8.js";import"./VDefaultsProvider-DeTRucHm.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./FSSpan-C8YxV3Vj.js";import"./VSpacer-Bp_e_Kvt.js";import"./FSButton-CvqXFT9l.js";import"./FSClickable-B9o4BEyu.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./FSIcon-CM3DCfji.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./density-BzC6UB2b.js";import"./loader-YJ_823dI.js";import"./rounded-BwvX6bZn.js";import"./index-Bv2UUMCu.js";import"./FSCalendar-BrLxUssG.js";import"./useAppTimeZone-DiegiNYY.js";import"./useAppLanguageCode-B8bYxE1s.js";import"./useTranslations-C_i4rqaX.js";import"./VLocaleProvider-Cl-d-cu3.js";import"./VBtn-DCaqYD99.js";import"./border-BU-G8uSh.js";import"./elevation-oWdkHiXv.js";import"./group-CBtViAyU.js";import"./index-RhlTNW4L.js";import"./FSWindow-DzZfyLfc.js";import"./ssrBoot-DsRDMYEb.js";import"./FSClock-C5ovYVtR.js";import"./FSSlider-CvS_FhE5.js";import"./VSlider-BaLtJ_FD.js";import"./VMenu-BAsGaafY.js";import"./FSNumberField-D_k-D4D4.js";import"./FSSelectField-DODp_3rV.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./VSelectionControl-OgAVLyH5.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./uuid-DTaye2KM.js";import"./VList-B1ruI7IS.js";import"./VImg-euCAhqKz.js";import"./VSelect-Du7HAR1V.js";import"./VSlideGroup-CFGEqcRJ.js";import"./FSIconField-DY3-WFU4.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSSwitch-Dmfzsa0c.js";const S=A({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:P},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,s,t,a,z,D){const F=m("FSText"),h=m("FSMetaField");return r(),d(p,{gap:24},{default:n(()=>[(r(!0),y(g,null,f(e.categories,(w,u)=>(r(),d(p,{key:u,gap:16},{default:n(()=>[c(L,null,{default:n(()=>[c(F,{font:"text-h3"},{default:n(()=>[M(x(u),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,f(w,(i,I)=>(r(),d(h,{customProperty:i,editable:e.editable,key:I,modelValue:e.modelValue[i.code],"onUpdate:modelValue":T=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:T})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=v(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const po={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:s})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const uo=["Variations"];export{l as Variations,uo as __namedExportsOrder,po as default};
