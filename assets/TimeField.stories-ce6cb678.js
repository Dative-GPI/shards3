import{j as A,d as U,e as N,J as O,K as n,L as d,M as r,R as q,z as u,V as g,N as v,O as T,P as m,x as M,X as J,Y as K,S as X,U as Y}from"./vue.esm-bundler-37de1696.js";import{F as G}from"./FSNumberField-5e99b7b7.js";import{F as Q}from"./FSSelectField-919ae91b.js";import{_ as p}from"./FSSpan-ce1ed5e8.js";import{_ as h}from"./FSCol-927ba931.js";import{_ as y}from"./FSRow-632ce14e.js";import{t as F,g as x,a as W,F as Z}from"./FSForm-f855fd72.js";import{u as ee}from"./useRules-724d25b8.js";import{u as le,C as w}from"./useColors-ba22af06.js";import{u as re}from"./useSlots-df9def22.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSpacer-63748a98.js";import"./FSTextField-39426dcd.js";import"./VTextField-03f06faf.js";import"./VField-83328994.js";import"./index-3a20b1dd.js";import"./useRender-ccb83440.js";import"./theme-07d11e72.js";import"./transition-4a8f6120.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./VIcon-122293c7.js";import"./color-efc02365.js";import"./tag-9d688242.js";import"./density-ebf3f2c2.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./VDefaultsProvider-062db757.js";import"./forwardRefs-e658ad70.js";import"./index-90c07952.js";import"./VSelect-28b2c344.js";import"./VOverlay-8f6f9ccb.js";import"./dimensions-4b009e60.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-ef1336ae.js";import"./VMenu-ecee0657.js";import"./ssrBoot-9a42e176.js";import"./border-fb870e60.js";import"./elevation-66cfbdec.js";import"./index-737116aa.js";import"./VImg-d6f10770.js";import"./VDivider-c1bb8faa.js";import"./resizeObserver-8d36419f.js";import"./VCheckboxBtn-ebaca132.js";import"./VSelectionControl-19e4ec9f.js";import"./VSlideGroup-62b1ce2b.js";import"./group-bc028d0d.js";import"./css-cb27a64f.js";import"./useTranslations-eec3878c.js";import"./useAppTimeZone-02cdf7e8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const z=A({name:"FSTimeField",components:{FSNumberField:G,FSSelectField:Q,FSSpan:p,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:R,blurred:k,getMessages:$}=ee(),{getColors:f}=le(),{slots:s}=re();delete s.label,delete s.description;const c=f(w.Error),o=f(w.Light),i=f(w.Dark),l=U(0),t=U(F[0]);e.modelValue&&(x(e.modelValue)!==0?(t.value=F[x(e.modelValue)],l.value=e.modelValue/t.value.id):l.value=e.modelValue);const E=N(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":o.dark,"--fs-time-field-color":i.base,"--fs-time-field-active-border-color":i.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":o.base,"--fs-time-field-color":o.dark,"--fs-time-field-active-border-color":o.base}),I=N(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:l,timeScale:F,messages:I,blurred:k,slots:s,style:E,onSubmitTimeScale:V=>{t.value=F.find(L=>L.id===V),a("update:modelValue",l.value*t.value.id)},onSubmitValue:V=>{l.value=V,a("update:modelValue",l.value*t.value.id)}}}});function se(e,a,R,k,$,f){const s=O("FSNumberField"),c=O("FSSelectField");return n(),d(h,null,{default:r(()=>[e.$props.hideHeader?m("",!0):q(e.$slots,"label",{key:0},()=>[u(y,{wrap:!1},{default:r(()=>[e.$props.label?(n(),d(p,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.$props.label),1)]),_:1},8,["style"])):m("",!0),e.$props.label&&e.$props.required?(n(),d(p,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:r(()=>[v(" * ")]),_:1},8,["style"])):m("",!0),u(te,{style:{"min-width":"40px"}}),e.messages.length>0?(n(),d(p,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.messages.join(", ")),1)]),_:1},8,["style"])):m("",!0)]),_:1})]),u(y,null,{default:r(()=>[u(s,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),J({_:2},[K(e.slots,(o,i)=>({name:i,fn:r(l=>[q(e.$slots,i,X(Y(l)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),u(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(n(),d(p,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:r(()=>[v(T(e.$props.description),1)]),_:1},8,["style"])):m("",!0)])]),_:3})}const C=ae(z,[["render",se]]);z.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const ul={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:a})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSTimeField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},S={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:W}},render:(e,{argTypes:a})=>({components:{FSForm:Z,FSTimeField:C,FSCol:h,FSRow:y},props:Object.keys(a),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: max 120 seconds"
          :rules="[args.rules.max(120)]"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required & max 7200 seconds & min 3600 seconds"
          :rules="[args.rules.required(), args.rules.max(7200), args.rules.min(3600)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var j,_,B;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 3600,
      value3: 691200
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeField,
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
      <FSTimeField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(B=(_=b.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var H,D,P;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: 3660,
      value3: null,
      rules: TimeRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTimeField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: max 120 seconds"
          :rules="[args.rules.max(120)]"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required & max 7200 seconds & min 3600 seconds"
          :rules="[args.rules.required(), args.rules.max(7200), args.rules.min(3600)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(P=(D=S.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const ml=["Variations","Rules"];export{S as Rules,b as Variations,ml as __namedExportsOrder,ul as default};
