import{j as A,d as U,e as N,H as O,I as n,J as d,K as r,S as q,z as u,L as g,P as v,Q as T,M as m,x as M,Y as J,Z as K,U as Q,V as Y}from"./vue.esm-bundler-43a473fd.js";import{F as Z}from"./FSNumberField-73d0b400.js";import{F as G}from"./FSSelectField-84394bb7.js";import{_ as p}from"./FSSpan-f049a07d.js";import{_ as h}from"./FSCol-3eed52f7.js";import{_ as y}from"./FSRow-ba466629.js";import{t as F,g as x,a as W,F as X}from"./FSForm-6447b7eb.js";import{u as ee}from"./useRules-b8c9f7a6.js";import{u as le,C as w}from"./useColors-a0d41f52.js";import{u as re}from"./useSlots-e98bc591.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSpacer-051f3349.js";import"./FSTextField-c919a6ef.js";import"./VTextField-3e42e74d.js";import"./VField-13e4da9c.js";import"./index-112138db.js";import"./useRender-d2bddd17.js";import"./theme-b11eeaee.js";import"./transition-83682335.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./proxiedModel-7eeaa9ef.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./tag-2aee60b4.js";import"./density-c9a73c91.js";import"./loader-e3f3ed5e.js";import"./intersectionObserver-6db224c5.js";import"./rounded-c06207e9.js";import"./VDefaultsProvider-6b919627.js";import"./forwardRefs-e658ad70.js";import"./index-52cd98ce.js";import"./VSelect-2a3f4796.js";import"./VOverlay-5d77bca3.js";import"./dimensions-42b1c23f.js";import"./display-20e87f67.js";import"./lazy-7d7adcb2.js";import"./router-1edc30ca.js";import"./VMenu-7b829308.js";import"./ssrBoot-a35ae173.js";import"./border-fe1feda5.js";import"./elevation-494cacfb.js";import"./index-33b2c13d.js";import"./VImg-ded4a17b.js";import"./VDivider-d035c0db.js";import"./resizeObserver-059c00b3.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./VSlideGroup-d5f10b34.js";import"./group-b2be58db.js";import"./css-18b0cf8e.js";import"./useTranslations-e519a668.js";import"./useAppTimeZone-6d05c94e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const P=A({name:"FSTimeField",components:{FSNumberField:Z,FSSelectField:G,FSSpan:p,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:R,blurred:k,getMessages:$}=ee(),{getColors:f}=le(),{slots:s}=re();delete s.label,delete s.description;const c=f(w.Error),o=f(w.Light),i=f(w.Dark),l=U(0),t=U(F[0]);e.modelValue&&(x(e.modelValue)!==0?(t.value=F[x(e.modelValue)],l.value=e.modelValue/t.value.id):l.value=e.modelValue);const z=N(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":o.dark,"--fs-time-field-color":i.base,"--fs-time-field-active-border-color":i.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":o.base,"--fs-time-field-color":o.dark,"--fs-time-field-active-border-color":o.base}),E=N(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:l,timeScale:F,messages:E,blurred:k,slots:s,style:z,onSubmitTimeScale:V=>{t.value=F.find(L=>L.id===V),a("update:modelValue",l.value*t.value.id)},onSubmitValue:V=>{l.value=V,a("update:modelValue",l.value*t.value.id)}}}});function se(e,a,R,k,$,f){const s=O("FSNumberField"),c=O("FSSelectField");return n(),d(h,null,{default:r(()=>[e.$props.hideHeader?m("",!0):q(e.$slots,"label",{key:0},()=>[u(y,{wrap:!1},{default:r(()=>[e.$props.label?(n(),d(p,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.$props.label),1)]),_:1},8,["style"])):m("",!0),e.$props.label&&e.$props.required?(n(),d(p,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:r(()=>[v(" * ")]),_:1},8,["style"])):m("",!0),u(te,{style:{"min-width":"40px"}}),e.messages.length>0?(n(),d(p,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.messages.join(", ")),1)]),_:1},8,["style"])):m("",!0)]),_:1})]),u(y,null,{default:r(()=>[u(s,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),J({_:2},[K(e.slots,(o,i)=>({name:i,fn:r(l=>[q(e.$slots,i,Q(Y(l)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),u(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(n(),d(p,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:r(()=>[v(T(e.$props.description),1)]),_:1},8,["style"])):m("",!0)])]),_:3})}const C=ae(P,[["render",se]]);P.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const ul={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:a})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSForm>`})};var j,H,_;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(H=b.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var B,D,I;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(D=S.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ml=["Variations","Rules"];export{S as Rules,b as Variations,ml as __namedExportsOrder,ul as default};
