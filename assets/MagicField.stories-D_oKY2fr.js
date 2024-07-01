import{d as N,c as S,y as $,z as n,A as d,m as h,k as D,M as q,B as r,I as M,E as i,G as u,D as s}from"./vue.esm-bundler-DC82FEWN.js";import{M as t,u as B}from"./useMagicFieldProvider-C64Jxwu6.js";import{F as j}from"./FSSelectField-C4k_2VGc.js";import{_ as v}from"./FSIcon-CqTsM4Lx.js";import{_ as y}from"./FSSpan-CwfDYIua.js";import{_ as F}from"./FSRow-DoCXWKDP.js";import{u as L}from"./useAppTimeZone-SgthjzoP.js";import{g as U}from"./time-xMV0WbLU.js";import{u as E}from"./useTranslations-DV-taHAL.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_}from"./FSCol-B7HQy3FB.js";import"./iframe-C8UKD5jW.js";import"../sb-preview/runtime.js";import"./FSDialogMenu-L2iVIZdg.js";import"./FSCard-TPuCZi-6.js";import"./useColors-WxHDk9aB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./css-DYOPUjjE.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BhlhQtQT.js";import"./proxiedModel-CYw7-KgF.js";import"./anchor-CLTIcUx3.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./locale-BC9z6YbT.js";import"./router-CRaPYJ7n.js";import"./transition-CJbyFvkq.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./FSRadioGroup-CCDraVhx.js";import"./FSRadio-C2a3p5gK.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-DLPOArCM.js";import"./density-XYshZx8z.js";import"./VIcon-uFUcYN4x.js";import"./index-ySUbTvsm.js";import"./VLabel-Cp9LN_v7.js";import"./VField-CQBU8LtE.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./index-DWl9tX7E.js";import"./VInput-BvcCh06W.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./rounded-TFXDyxjJ.js";import"./FSTextField-BVT64V1F.js";import"./FSButton-cgjePGb6.js";import"./FSClickable-CvEctr0N.js";import"./index-yKNzK_fJ.js";import"./FSCheckbox-Bb9obVvl.js";import"./FSFadeOut-DOYA3BXE.js";import"./uuid-DTaye2KM.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./elevation-BoGrGvdU.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VSelect-BFSoAAL8.js";import"./VMenu-Dhrs_Dg2.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";const I=N({name:"FSMagicField",components:{FSSelectField:j,FSIcon:v,FSSpan:y,FSRow:F},props:{type:{type:Number,required:!1,default:t.TextField},modelValue:{type:String,required:!1,default:null},allowedValues:{type:Array,required:!1,default:()=>[]},useOnlyAllowedValues:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToShortTimeFormat:w}=L(),{$tr:g}=E(),{get:f}=B(),V=S(()=>e.allowedValues.map(a=>({value:a.value,label:a.label||l(a.value)}))),c=S(()=>{switch(e.type){case t.NumberField:case t.DateTimeField:case t.TimeField:return e.modelValue==null||isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case t.Switch:return e.modelValue==null?null:e.modelValue==="true";default:return e.modelValue}}),l=a=>{if(a==null)return null;switch(e.type){case t.NumberField:return a.toString();case t.Switch:return a?g("ui.magic-field.true","True"):g("ui.magic-field.false","False");case t.DateTimeField:return w(a);case t.TimeField:return U(a);default:return a}};return{MagicFieldType:t,valueToInput:c,items:V,inputToValue:a=>{switch(e.type){case t.NumberField:case t.Switch:case t.DateTimeField:case t.TimeField:if(a==null){o("update:modelValue",null);break}o("update:modelValue",a.toString());break;default:o("update:modelValue",a);break}},get:f}}});function P(e,o,w,g,f,V){const c=$("FSSelectField");return e.$props.useOnlyAllowedValues?(n(),d(c,h({key:1,itemValue:"value",items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),q({_:2},[e.$props.type===e.MagicFieldType.IconField?{name:"selection",fn:r(({item:l})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[l.raw.value?(n(),d(v,{key:0},{default:r(()=>[i(u(l.raw.value),1)]),_:2},1024)):s("",!0),l.raw.value!==l.raw.label?(n(),d(y,{key:1},{default:r(()=>[i(u(l.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"0"}:void 0,e.$props.type===e.MagicFieldType.IconField?{name:"item-label",fn:r(({item:l})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[l.raw.value?(n(),d(v,{key:0},{default:r(()=>[i(u(l.raw.value),1)]),_:2},1024)):s("",!0),l.raw.value!==l.raw.label?(n(),d(y,{key:1},{default:r(()=>[i(u(l.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"1"}:void 0]),1040,["items","modelValue"])):(n(),d(D(e.get(e.$props.type)),h({key:0,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},e.$attrs),null,16,["modelValue","onUpdate:modelValue"]))}const b=J(I,[["render",P]]);I.__docgenInfo={displayName:"FSMagicField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"allowedValues",type:{name:"{ value: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"useOnlyAllowedValues",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicField.vue"]};const tl={title:"Foundation/Shared/Input fields/MagicField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:"",value2:"",value3:"",value4:"",value5:"",value6:""}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:_},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})},p={args:{args:{value1:"",allowedValues1:[{value:1,label:"one"},{value:2,label:"two"},{value:3}],value2:"",allowedValues2:[{value:!1,label:"I don't think so"},{value:!0}],value3:"",allowedValues3:[{value:"value a",label:"Label A"},{value:"value b",label:"Label B"},{value:"value c"}],value4:"",allowedValues4:[{value:17040672e5,label:"First of January 2024"},{value:5679936e5,label:"A long time ago"},{value:17356896e5}],value5:"",allowedValues5:[{value:"mdi-account",label:"Account icon"},{value:"mdi-account-circle"}],value6:"",allowedValues6:[{value:900,label:"Quarter hour"},{value:1800},{value:7200}]}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:_},props:Object.keys(o),setup(){return{...e}},template:`
      <FSCol>
        <FSMagicField
          label="Number field"
          :type="0"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Switch"
          :type="1"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues2"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Text field"
          :type="2"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues3"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Date time field"
          :type="3"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues4"
          v-model="args.value4"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Icon field"
          :type="4"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues5"
          v-model="args.value5"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time field"
          :type="5"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues6"
          v-model="args.value6"
        />
      </FSCol>`})};var T,A,k;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: ""
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
    </FSCol>\`
  })
}`,...(k=(A=m.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var O,x,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
          :type="0"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Switch"
          :type="1"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues2"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Text field"
          :type="2"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues3"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Date time field"
          :type="3"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues4"
          v-model="args.value4"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Icon field"
          :type="4"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues5"
          v-model="args.value5"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time field"
          :type="5"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues6"
          v-model="args.value6"
        />
      </FSCol>\`
  })
}`,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ol=["Variations","Selects"];export{p as Selects,m as Variations,ol as __namedExportsOrder,tl as default};
