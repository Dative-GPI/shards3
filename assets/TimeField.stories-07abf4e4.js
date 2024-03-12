import{g as A,d as N,j as U,H as O,I as i,J as n,K as l,P as q,z as d,Q as g,L as F,M as T,N as u,x as M,W as J,X as K,R as Q,S as W}from"./vue.esm-bundler-85c2ade9.js";import{F as X}from"./FSNumberField-5a92885d.js";import{F as G}from"./FSSelectField-543cd2d8.js";import{_ as m}from"./FSSpan-abd71399.js";import{_ as h}from"./FSCol-caf5d8c8.js";import{_ as y}from"./FSRow-120b21e0.js";import{t as v,g as x,a as Y,F as Z}from"./FSForm-11d0938b.js";import{u as ee}from"./VField-3df13f61.js";import{u as le,C as w}from"./useColors-4bd4e66b.js";import{u as re}from"./useSlots-58887162.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSpacer-fb9707dd.js";import"./FSTextField-5649ea31.js";import"./VTextField-b1504f7b.js";import"./VInput-9ba9caf6.js";import"./useRender-22e01882.js";import"./theme-0475544b.js";import"./locale-cdd955a4.js";import"./VIcon-96eed797.js";import"./color-680672dd.js";import"./tag-fd98b684.js";import"./index-0b62f442.js";import"./transition-0e35e3a5.js";import"./density-1bef1032.js";import"./forwardRefs-e658ad70.js";import"./index-160e8c08.js";import"./VSelect-fce534af.js";import"./VOverlay-e74fafd8.js";import"./loader-c17713e4.js";import"./rounded-7d023c25.js";import"./dimensions-7d06aea5.js";import"./display-d8c4b624.js";import"./lazy-4beaa7f3.js";import"./router-dfa38ec1.js";import"./VMenu-21a34864.js";import"./VDefaultsProvider-5f610042.js";import"./ssrBoot-fbecfb2e.js";import"./border-dbc038b8.js";import"./elevation-e7838e5f.js";import"./index-91896434.js";import"./VImg-8c7f30a9.js";import"./VDivider-b26e5897.js";import"./resizeObserver-cbbc033b.js";import"./VSelectionControl-79492061.js";import"./VSlideGroup-88bc554d.js";import"./group-627b1a66.js";import"./css-b4ee648a.js";import"./useTimeZone-d58059fa.js";import"./useTranslations-93c8b8c9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const P=A({name:"FSTimeField",components:{FSNumberField:X,FSSelectField:G,FSSpan:m,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:R,blurred:k,getMessages:$}=ee(),{getColors:p}=le(),{slots:f}=re();delete f.label,delete f.description;const c=p(w.Error),s=p(w.Light),o=p(w.Dark),a=N(e.modelValue),t=N(v[0]);x(e.modelValue)!==0&&(t.value=v[x(e.modelValue)],a.value=e.modelValue/t.value.id);const z=U(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":s.dark,"--fs-time-field-color":o.base,"--fs-time-field-active-border-color":o.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":s.base,"--fs-time-field-color":s.dark,"--fs-time-field-active-border-color":s.base}),E=U(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:a,timeScale:v,messages:E,blurred:k,style:z,onSubmitTimeScale:V=>{t.value=v.find(L=>L.id===V),r("update:modelValue",a.value*t.value.id)},onSubmitValue:V=>{a.value=V,r("update:modelValue",a.value*t.value.id)}}}});function se(e,r,R,k,$,p){const f=O("FSNumberField"),c=O("FSSelectField");return i(),n(h,null,{default:l(()=>[e.$props.hideHeader?u("",!0):q(e.$slots,"label",{key:0},()=>[d(y,{wrap:!1},{default:l(()=>[e.$props.label?(i(),n(m,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.$props.label),1)]),_:1},8,["style"])):u("",!0),e.$props.label&&e.$props.required?(i(),n(m,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[F(" * ")]),_:1},8,["style"])):u("",!0),d(te,{style:{"min-width":"40px"}}),e.messages.length>0?(i(),n(m,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:l(()=>[F(T(e.messages.join(", ")),1)]),_:1},8,["style"])):u("",!0)]),_:1})]),d(y,null,{default:l(()=>[d(f,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),J({_:2},[K(e.slots,(s,o)=>({name:o,fn:l(a=>[q(e.$slots,o,Q(W(a)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),d(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(i(),n(m,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:l(()=>[F(T(e.$props.description),1)]),_:1},8,["style"])):u("",!0)])]),_:3})}const C=ae(P,[["render",se]]);P.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const sl={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:r})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(I=(D=S.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ol=["Variations","Rules"];export{S as Rules,b as Variations,ol as __namedExportsOrder,sl as default};
