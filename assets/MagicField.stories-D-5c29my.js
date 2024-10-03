import{d as $,c as S,y as _,z as n,A as d,m as h,q as D,M as q,B as r,L as T,E as i,G as u,D as s}from"./vue.esm-bundler-CxS4_7kK.js";import{M as l,u as B}from"./useMagicFieldProvider-BkruMtGt.js";import{F as J}from"./FSSelectField-DujFH32C.js";import{F as c}from"./FSIcon-DKHuRfPI.js";import{_ as y}from"./FSSpan-3STIP-79.js";import{_ as F}from"./FSRow-D546kqFt.js";import{c as L,g as j}from"./time-CRGs9nYY.js";import{u as Q}from"./useDateFormat-3O5RagjD.js";import{u as U}from"./useTranslations-ZMyFjr19.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as C}from"./FSCol-Co9r7Klj.js";import"./iframe-BJSQr_3S.js";import"../sb-preview/runtime.js";import"./FSDialogMenu-1exdynOQ.js";import"./FSCard-uGx4g-q0.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./css-D18ueKtB.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DpQhyQC8.js";import"./proxiedModel-DAUSUEYq.js";import"./anchor-CfU9RSql.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./locale-DgxPCyxi.js";import"./router-C4cLtMAM.js";import"./transition-DZ-8zzo1.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./FSSlideGroup-Cseplt4t.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./useSlots-BHms3Yb6.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./index-D0m5TbR6.js";import"./VIcon-C65wMs2G.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./VInput-BdNbghoa.js";import"./density-CY0EC5jE.js";import"./form-lyoENh9E.js";import"./FSBaseField-lEL5efap.js";import"./VSpacer-DaRxrr8q.js";import"./FSTextField-DxJVxYys.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./VLabel-DuhHDssR.js";import"./loader-BoG0AaGl.js";import"./rounded-Cd5tqTfa.js";import"./index-CQjBi2ms.js";import"./FSCheckbox-BJ0zq37S.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-D40FnrcD.js";import"./FSLoader-BMQDJgx0.js";import"./elevation-8SXivnh1.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useAppTimeZone-CIW33DGM.js";const I=$({name:"FSMagicField",components:{FSSelectField:J,FSIcon:c,FSSpan:y,FSRow:F},props:{type:{type:Number,required:!1,default:l.TextField},modelValue:{type:String,required:!1,default:null},allowedValues:{type:Array,required:!1,default:()=>[]},useOnlyAllowedValues:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToShortTimeFormat:w}=Q(),{$tr:g}=U(),{get:f}=B(),V=S(()=>e.allowedValues.map(a=>({value:a.value,label:a.label||t(a.value)}))),v=S(()=>{if(e.modelValue==null)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);default:return e.modelValue}}),t=a=>{if(a==null)return"";switch(e.type){case l.NumberField:return a.toString();case l.Switch:return a?g("ui.magic-field.true","True"):g("ui.magic-field.false","False");case l.DateTimeField:return w(parseFloat(a));case l.TimeField:return j(parseFloat(a));case l.TimeStepField:return L(JSON.parse(a));default:return a}};return{MagicFieldType:l,valueToInput:v,items:V,inputToValue:a=>{switch(a==null&&o("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:o("update:modelValue",a.toString());break;case l.TimeStepField:o("update:modelValue",JSON.stringify(a));break;default:o("update:modelValue",a);break}},get:f}}});function P(e,o,w,g,f,V){const v=_("FSSelectField");return e.$props.useOnlyAllowedValues?(n(),d(v,h({key:1,itemValue:"value",items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),q({_:2},[e.$props.type===e.MagicFieldType.IconField?{name:"selection",fn:r(({item:t})=>[T(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(n(),d(c,{key:0},{default:r(()=>[i(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(n(),d(y,{key:1},{default:r(()=>[i(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"0"}:void 0,e.$props.type===e.MagicFieldType.IconField?{name:"item-label",fn:r(({item:t})=>[T(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(n(),d(c,{key:0},{default:r(()=>[i(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(n(),d(y,{key:1},{default:r(()=>[i(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"1"}:void 0]),1040,["items","modelValue"])):(n(),d(D(e.get(e.$props.type)),h({key:0,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},e.$attrs),null,16,["modelValue","onUpdate:modelValue"]))}const b=E(I,[["render",P]]);I.__docgenInfo={displayName:"FSMagicField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"allowedValues",type:{name:"{ value: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"useOnlyAllowedValues",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicField.vue"]};const yl={title:"Foundation/Shared/Input fields/MagicField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:null}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSMagicField
        label="Number field"
        :type="1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Switch"
        :type="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Text field"
        :type="3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Date time field"
        :type="4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Icon field"
        :type="5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time field"
        :type="6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time step field"
        :type="7"
        v-model="args.value7"
      />
    </FSCol>`})},p={args:{args:{value1:"",allowedValues1:[{value:1,label:"one"},{value:2,label:"two"},{value:3}],value2:"",allowedValues2:[{value:!1,label:"I don't think so"},{value:!0}],value3:"",allowedValues3:[{value:"value a",label:"Label A"},{value:"value b",label:"Label B"},{value:"value c"}],value4:"",allowedValues4:[{value:17040672e5,label:"First of January 2024"},{value:5679936e5,label:"A long time ago"},{value:17356896e5}],value5:"",allowedValues5:[{value:"mdi-account",label:"Account icon"},{value:"mdi-account-circle"}],value6:"",allowedValues6:[{value:900,label:"Quarter hour"},{value:1800},{value:7200}],value7:"",allowedValues7:[{value:{value:15,unit:3},label:"Quarter hour"},{value:{value:30,unit:3}},{value:{value:3,unit:4}},{value:{value:1,unit:5}}]}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
      <FSCol>
        <FSMagicField
          label="Number field"
          :type="1"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Switch"
          :type="2"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues2"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Text field"
          :type="3"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues3"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Date time field"
          :type="4"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues4"
          v-model="args.value4"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Icon field"
          :type="5"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues5"
          v-model="args.value5"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time field"
          :type="6"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues6"
          v-model="args.value6"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time step field"
          :type="7"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues7"
          v-model="args.value7"
        />
      </FSCol>`})};var M,A,O;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMagicField,
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
      <FSMagicField
        label="Number field"
        :type="1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Switch"
        :type="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Text field"
        :type="3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Date time field"
        :type="4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Icon field"
        :type="5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time field"
        :type="6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time step field"
        :type="7"
        v-model="args.value7"
      />
    </FSCol>\`
  })
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var x,k,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "",
      allowedValues1: [{
        value: 1,
        label: "one"
      }, {
        value: 2,
        label: "two"
      }, {
        value: 3
      }],
      value2: "",
      allowedValues2: [{
        value: false,
        label: "I don't think so"
      }, {
        value: true
      }],
      value3: "",
      allowedValues3: [{
        value: "value a",
        label: "Label A"
      }, {
        value: "value b",
        label: "Label B"
      }, {
        value: "value c"
      }],
      value4: "",
      allowedValues4: [{
        value: 1704067200000,
        label: "First of January 2024"
      }, {
        value: 567993600000,
        label: "A long time ago"
      }, {
        value: 1735689600000
      }],
      value5: "",
      allowedValues5: [{
        value: "mdi-account",
        label: "Account icon"
      }, {
        value: "mdi-account-circle"
      }],
      value6: "",
      allowedValues6: [{
        value: 900,
        label: "Quarter hour"
      }, {
        value: 1800
      }, {
        value: 7200
      }],
      value7: "",
      allowedValues7: [{
        value: {
          value: 15,
          unit: 3
        },
        label: "Quarter hour"
      }, {
        value: {
          value: 30,
          unit: 3
        }
      }, {
        value: {
          value: 3,
          unit: 4
        }
      }, {
        value: {
          value: 1,
          unit: 5
        }
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMagicField,
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
        <FSMagicField
          label="Number field"
          :type="1"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Switch"
          :type="2"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues2"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Text field"
          :type="3"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues3"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Date time field"
          :type="4"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues4"
          v-model="args.value4"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Icon field"
          :type="5"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues5"
          v-model="args.value5"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time field"
          :type="6"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues6"
          v-model="args.value6"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time step field"
          :type="7"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues7"
          v-model="args.value7"
        />
      </FSCol>\`
  })
}`,...(N=(k=p.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const Fl=["Variations","Selects"];export{p as Selects,m as Variations,Fl as __namedExportsOrder,yl as default};
