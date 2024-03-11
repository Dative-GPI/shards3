import{E as A,d as O,e as U,G as N,H as i,I as n,J as l,O as q,q as d,P as g,K as F,L as T,M as u,n as M,W as G,X as J,Q as K,R as Q}from"./vue.esm-bundler-7e157d2d.js";import{F as W}from"./FSNumberField-417d379d.js";import{F as X}from"./FSSelectField-a97544c4.js";import{_ as m}from"./FSSpan-225601c1.js";import{_ as h}from"./FSCol-7c29272b.js";import{_ as y}from"./FSRow-db172e67.js";import{t as v,g as x,a as Y,F as Z}from"./FSForm-6f7b1a67.js";import{u as ee}from"./VField-483d98e3.js";import{u as le,C as w}from"./useColors-4000b712.js";import{u as re}from"./useSlots-db3342e3.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSpacer-5057dcd1.js";import"./FSTextField-f103263d.js";import"./VTextField-85193af7.js";import"./VInput-1a2cc3a3.js";import"./useRender-91b27a68.js";import"./theme-67ffe9ae.js";import"./locale-c9528b1a.js";import"./VIcon-f6cc7834.js";import"./color-e501cff3.js";import"./tag-831e49a1.js";import"./index-bda29209.js";import"./transition-b4c159ac.js";import"./density-c657e4cb.js";import"./forwardRefs-e658ad70.js";import"./index-37e9655b.js";import"./VSelect-4be08003.js";import"./VOverlay-91bdeda0.js";import"./loader-7867d039.js";import"./rounded-fe596c98.js";import"./dimensions-a1a728d7.js";import"./display-84f7fe10.js";import"./lazy-55c06103.js";import"./router-cc531cb0.js";import"./VMenu-047a272f.js";import"./VDefaultsProvider-dcab85c0.js";import"./ssrBoot-ead68af0.js";import"./border-a826ffcd.js";import"./elevation-7fca9761.js";import"./index-feab7f97.js";import"./VImg-0bee75cb.js";import"./VDivider-4e0b4ac3.js";import"./resizeObserver-8feda973.js";import"./VSelectionControl-cccaa946.js";import"./VSlideGroup-89f382d0.js";import"./group-5cfad0cd.js";import"./css-b03ad87d.js";import"./useTimeZone-3e466d1a.js";import"./useTranslations-cd0b055a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const I=A({name:"FSTimeField",components:{FSNumberField:W,FSSelectField:X,FSSpan:m,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:R,blurred:k,getMessages:$}=ee(),{getColors:p}=le(),{slots:f}=re();delete f.label,delete f.description;const c=p(w.Error),s=p(w.Light),o=p(w.Dark),a=O(e.modelValue),t=O(v[0]);x(e.modelValue)!==0&&(t.value=v[x(e.modelValue)],a.value=e.modelValue/t.value.id);const P=U(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":s.dark,"--fs-time-field-color":o.base,"--fs-time-field-active-border-color":o.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":s.base,"--fs-time-field-color":s.dark,"--fs-time-field-active-border-color":s.base}),L=U(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:a,timeScale:v,messages:L,blurred:k,style:P,onSubmitTimeScale:V=>{t.value=v.find(z=>z.id===V),r("update:modelValue",a.value*t.value.id)},onSubmitValue:V=>{a.value=V,r("update:modelValue",a.value*t.value.id)}}}});function se(e,r,R,k,$,p){const f=N("FSNumberField"),c=N("FSSelectField");return i(),n(h,null,{default:l(()=>[e.$props.hideHeader?u("",!0):q(e.$slots,"label",{key:0},()=>[d(y,{wrap:!1},{default:l(()=>[e.$props.label?(i(),n(m,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.$props.label),1)]),_:1},8,["style"])):u("",!0),e.$props.label&&e.$props.required?(i(),n(m,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[F(" * ")]),_:1},8,["style"])):u("",!0),d(te,{style:{"min-width":"40px"}}),e.messages.length>0?(i(),n(m,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.messages.join(", ")),1)]),_:1},8,["style"])):u("",!0)]),_:1})]),d(y,null,{default:l(()=>[d(f,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),G({_:2},[J(e.slots,(s,o)=>({name:o,fn:l(a=>[q(e.$slots,o,K(Q(a)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),d(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(i(),n(m,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:l(()=>[F(T(e.$props.description),1)]),_:1},8,["style"])):u("",!0)])]),_:3})}const C=ae(I,[["render",se]]);I.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const sl={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:r})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},S={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:Y}},render:(e,{argTypes:r})=>({components:{FSForm:Z,FSTimeField:C,FSCol:h,FSRow:y},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSForm>`})};var H,_,j;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(_=b.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var B,D,E;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(D=S.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ol=["Variations","Rules"];export{S as Rules,b as Variations,ol as __namedExportsOrder,sl as default};
