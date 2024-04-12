import{j as A,d as U,e as N,J as O,K as n,L as d,M as r,R as q,z as u,V as g,N as v,O as T,P as m,x as M,Y as J,Z as K,S as Y,U as Z}from"./vue.esm-bundler-a79f6a7e.js";import{F as G}from"./FSNumberField-4ddc8400.js";import{F as Q}from"./FSSelectField-0551c6f1.js";import{_ as p}from"./FSSpan-6870f5d7.js";import{_ as h}from"./FSCol-bf5a0ca3.js";import{_ as y}from"./FSRow-997087e7.js";import{t as F,g as x,a as W,F as X}from"./FSForm-bfee61cd.js";import{u as ee}from"./useRules-f2fe91c3.js";import{u as le,C as w}from"./useColors-060213ee.js";import{u as re}from"./useSlots-6a823081.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSpacer-0bffa310.js";import"./FSTextField-6ab47c6b.js";import"./VTextField-31dab154.js";import"./VField-311790ee.js";import"./index-21b5e00b.js";import"./useRender-b11abf1d.js";import"./theme-1ec486f5.js";import"./transition-5598497b.js";import"./VLabel-e2aed9e2.js";import"./VInput-6b3c87b1.js";import"./locale-9003447c.js";import"./proxiedModel-550eb350.js";import"./VIcon-9404a2c9.js";import"./color-4fa560db.js";import"./tag-f688eb88.js";import"./density-4d7bebe4.js";import"./loader-5621d579.js";import"./intersectionObserver-ca237ead.js";import"./rounded-5d5afca1.js";import"./VDefaultsProvider-151583b9.js";import"./forwardRefs-e658ad70.js";import"./index-3d25a1c3.js";import"./VSelect-a1c81aab.js";import"./VOverlay-d699aad9.js";import"./dimensions-ba559413.js";import"./display-7eefeb5d.js";import"./lazy-1267f9fb.js";import"./router-8d3884f9.js";import"./VMenu-84de242c.js";import"./ssrBoot-4b3aca91.js";import"./border-775a28ed.js";import"./elevation-3507830c.js";import"./index-755a3767.js";import"./VImg-679a1f09.js";import"./VDivider-6955d14a.js";import"./resizeObserver-c5cea584.js";import"./VCheckboxBtn-03eab5ea.js";import"./VSelectionControl-afed9b27.js";import"./VSlideGroup-f0d4a7a0.js";import"./group-49850006.js";import"./css-6f95cab1.js";import"./useTranslations-2ad33056.js";import"./useAppTimeZone-230000f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const z=A({name:"FSTimeField",components:{FSNumberField:G,FSSelectField:Q,FSSpan:p,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:R,blurred:k,getMessages:$}=ee(),{getColors:f}=le(),{slots:s}=re();delete s.label,delete s.description;const c=f(w.Error),o=f(w.Light),i=f(w.Dark),l=U(0),t=U(F[0]);e.modelValue&&(x(e.modelValue)!==0?(t.value=F[x(e.modelValue)],l.value=e.modelValue/t.value.id):l.value=e.modelValue);const E=N(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":o.dark,"--fs-time-field-color":i.base,"--fs-time-field-active-border-color":i.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":o.base,"--fs-time-field-color":o.dark,"--fs-time-field-active-border-color":o.base}),I=N(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:l,timeScale:F,messages:I,blurred:k,slots:s,style:E,onSubmitTimeScale:V=>{t.value=F.find(L=>L.id===V),a("update:modelValue",l.value*t.value.id)},onSubmitValue:V=>{l.value=V,a("update:modelValue",l.value*t.value.id)}}}});function se(e,a,R,k,$,f){const s=O("FSNumberField"),c=O("FSSelectField");return n(),d(h,null,{default:r(()=>[e.$props.hideHeader?m("",!0):q(e.$slots,"label",{key:0},()=>[u(y,{wrap:!1},{default:r(()=>[e.$props.label?(n(),d(p,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.$props.label),1)]),_:1},8,["style"])):m("",!0),e.$props.label&&e.$props.required?(n(),d(p,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:r(()=>[v(" * ")]),_:1},8,["style"])):m("",!0),u(te,{style:{"min-width":"40px"}}),e.messages.length>0?(n(),d(p,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.messages.join(", ")),1)]),_:1},8,["style"])):m("",!0)]),_:1})]),u(y,null,{default:r(()=>[u(s,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),J({_:2},[K(e.slots,(o,i)=>({name:i,fn:r(l=>[q(e.$slots,i,Y(Z(l)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),u(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(n(),d(p,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:r(()=>[v(T(e.$props.description),1)]),_:1},8,["style"])):m("",!0)])]),_:3})}const C=ae(z,[["render",se]]);z.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const ul={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:a})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})},S={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:W}},render:(e,{argTypes:a})=>({components:{FSForm:X,FSTimeField:C,FSCol:h,FSRow:y},props:Object.keys(a),setup(){return{...e}},template:`
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
