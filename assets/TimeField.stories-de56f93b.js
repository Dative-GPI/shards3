import{G as A,d as N,e as U,H as O,I as i,J as n,K as l,P as q,B as d,Q as g,L as F,M as T,N as u,p as M,X as G,Y as J,R as K,S as Q}from"./vue.esm-bundler-cada065a.js";import{F as X}from"./FSNumberField-288e0a36.js";import{F as Y}from"./FSSelectField-ea799dbc.js";import{_ as m}from"./FSSpan-898e6277.js";import{_ as h}from"./FSCol-630168ee.js";import{_ as y}from"./FSRow-4ed4317e.js";import{t as v,g as x,a as W,F as Z}from"./FSForm-690f55e3.js";import{u as ee}from"./VField-8506902a.js";import{u as le,C as w}from"./useColors-d76e62c3.js";import{u as re}from"./useSlots-e34db436.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSpacer-417f2da8.js";import"./FSTextField-530e6f2e.js";import"./VTextField-9f779e5f.js";import"./VInput-0190379f.js";import"./useRender-aebc0214.js";import"./theme-077d21c3.js";import"./locale-793e4951.js";import"./VIcon-f531f31f.js";import"./color-cac3f8b2.js";import"./tag-84fe69a6.js";import"./index-127b1a3d.js";import"./transition-96405fc3.js";import"./density-a3d9cfab.js";import"./forwardRefs-e658ad70.js";import"./index-1890f982.js";import"./VSelect-5d0ed1d8.js";import"./VOverlay-bf937035.js";import"./loader-c6765802.js";import"./rounded-c91c5538.js";import"./dimensions-bd9ae89e.js";import"./display-5b38d177.js";import"./lazy-550f418a.js";import"./router-44442b4b.js";import"./VMenu-6896ef8b.js";import"./VDefaultsProvider-1e56270a.js";import"./ssrBoot-ac05136b.js";import"./variant-c24223ea.js";import"./elevation-a65147a7.js";import"./index-79d9264f.js";import"./VImg-61808023.js";import"./VDivider-f319f9e8.js";import"./resizeObserver-1a024aa2.js";import"./VSelectionControl-59b3617a.js";import"./VSlideGroup-184702f6.js";import"./group-52996811.js";import"./css-50f0aa1d.js";import"./useTimeZone-7828b9b2.js";import"./useTranslations-d1fccfae.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const P=A({name:"FSTimeField",components:{FSNumberField:X,FSSelectField:Y,FSSpan:m,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:R,blurred:k,getMessages:$}=ee(),{getColors:p}=le(),{slots:f}=re();delete f.label,delete f.description;const c=p(w.Error),s=p(w.Light),o=p(w.Dark),a=N(e.modelValue),t=N(v[0]);x(e.modelValue)!==0&&(t.value=v[x(e.modelValue)],a.value=e.modelValue/t.value.id);const E=U(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":s.dark,"--fs-time-field-color":o.base,"--fs-time-field-active-border-color":o.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":s.base,"--fs-time-field-color":s.dark,"--fs-time-field-active-border-color":s.base}),L=U(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:a,timeScale:v,messages:L,blurred:k,style:E,onSubmitTimeScale:V=>{t.value=v.find(z=>z.id===V),r("update:modelValue",a.value*t.value.id)},onSubmitValue:V=>{a.value=V,r("update:modelValue",a.value*t.value.id)}}}});function se(e,r,R,k,$,p){const f=O("FSNumberField"),c=O("FSSelectField");return i(),n(h,null,{default:l(()=>[e.$props.hideHeader?u("",!0):q(e.$slots,"label",{key:0},()=>[d(y,{wrap:!1},{default:l(()=>[e.$props.label?(i(),n(m,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.$props.label),1)]),_:1},8,["style"])):u("",!0),e.$props.label&&e.$props.required?(i(),n(m,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[F(" * ")]),_:1},8,["style"])):u("",!0),d(te,{style:{"min-width":"40px"}}),e.messages.length>0?(i(),n(m,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.messages.join(", ")),1)]),_:1},8,["style"])):u("",!0)]),_:1})]),d(y,null,{default:l(()=>[d(f,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),G({_:2},[J(e.slots,(s,o)=>({name:o,fn:l(a=>[q(e.$slots,o,K(Q(a)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),d(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(i(),n(m,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:l(()=>[F(T(e.$props.description),1)]),_:1},8,["style"])):u("",!0)])]),_:3})}const C=ae(P,[["render",se]]);P.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const sl={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:r})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},S={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:W}},render:(e,{argTypes:r})=>({components:{FSForm:Z,FSTimeField:C,FSCol:h,FSRow:y},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSForm>`})};var B,H,_;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(H=b.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var j,D,I;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(D=S.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ol=["Variations","Rules"];export{S as Rules,b as Variations,ol as __namedExportsOrder,sl as default};
