import{j as A,d as U,e as N,J as O,K as i,L as n,M as l,R as q,z as d,V as g,N as F,O as T,P as u,x as M,X as J,Y as K,S as X,U as Y}from"./vue.esm-bundler-37de1696.js";import{F as G}from"./FSNumberField-bdde82ba.js";import{F as Q}from"./FSSelectField-80a58ccd.js";import{_ as m}from"./FSSpan-9700c9e2.js";import{_ as h}from"./FSCol-4074aa47.js";import{_ as y}from"./FSRow-fc81033b.js";import{t as v,g as x,a as W,F as Z}from"./FSForm-8fdf8109.js";import{u as ee}from"./useRules-724d25b8.js";import{u as le,C as w}from"./useColors-ba22af06.js";import{u as re}from"./useSlots-1bcfd838.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSpacer-63748a98.js";import"./FSTextField-b80386ae.js";import"./VTextField-deb08e50.js";import"./VField-7fc7ddcc.js";import"./index-3a20b1dd.js";import"./useRender-ccb83440.js";import"./theme-07d11e72.js";import"./transition-4a8f6120.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./VIcon-122293c7.js";import"./color-efc02365.js";import"./tag-9d688242.js";import"./density-ebf3f2c2.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./forwardRefs-e658ad70.js";import"./index-90c07952.js";import"./VSelect-a4cfa519.js";import"./VOverlay-328180d5.js";import"./dimensions-4b009e60.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-ddfc31ef.js";import"./VMenu-1842deb2.js";import"./VDefaultsProvider-062db757.js";import"./ssrBoot-9a42e176.js";import"./border-fb870e60.js";import"./elevation-66cfbdec.js";import"./index-737116aa.js";import"./VImg-d6f10770.js";import"./VDivider-c1bb8faa.js";import"./resizeObserver-8d36419f.js";import"./VCheckboxBtn-ebaca132.js";import"./VSelectionControl-19e4ec9f.js";import"./VSlideGroup-62b1ce2b.js";import"./group-bc028d0d.js";import"./css-b545198d.js";import"./useTranslations-eec3878c.js";import"./useAppTimeZone-ef2c4017.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const z=A({name:"FSTimeField",components:{FSNumberField:G,FSSelectField:Q,FSSpan:m,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:R,blurred:k,getMessages:$}=ee(),{getColors:p}=le(),{slots:f}=re();delete f.label,delete f.description;const c=p(w.Error),s=p(w.Light),o=p(w.Dark),a=U(e.modelValue),t=U(v[0]);x(e.modelValue)!==0&&(t.value=v[x(e.modelValue)],a.value=e.modelValue/t.value.id);const E=N(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":s.dark,"--fs-time-field-color":o.base,"--fs-time-field-active-border-color":o.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":s.base,"--fs-time-field-color":s.dark,"--fs-time-field-active-border-color":s.base}),I=N(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:a,timeScale:v,messages:I,blurred:k,style:E,onSubmitTimeScale:V=>{t.value=v.find(L=>L.id===V),r("update:modelValue",a.value*t.value.id)},onSubmitValue:V=>{a.value=V,r("update:modelValue",a.value*t.value.id)}}}});function se(e,r,R,k,$,p){const f=O("FSNumberField"),c=O("FSSelectField");return i(),n(h,null,{default:l(()=>[e.$props.hideHeader?u("",!0):q(e.$slots,"label",{key:0},()=>[d(y,{wrap:!1},{default:l(()=>[e.$props.label?(i(),n(m,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.$props.label),1)]),_:1},8,["style"])):u("",!0),e.$props.label&&e.$props.required?(i(),n(m,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[F(" * ")]),_:1},8,["style"])):u("",!0),d(te,{style:{"min-width":"40px"}}),e.messages.length>0?(i(),n(m,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.messages.join(", ")),1)]),_:1},8,["style"])):u("",!0)]),_:1})]),d(y,null,{default:l(()=>[d(f,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),J({_:2},[K(e.slots,(s,o)=>({name:o,fn:l(a=>[q(e.$slots,o,X(Y(a)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),d(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(i(),n(m,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:l(()=>[F(T(e.$props.description),1)]),_:1},8,["style"])):u("",!0)])]),_:3})}const C=ae(z,[["render",se]]);z.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const ul={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:r})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(r),setup(){return{...e}},template:`
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
