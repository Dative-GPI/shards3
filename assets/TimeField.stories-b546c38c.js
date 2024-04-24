import{j as A,d as U,e as N,I as O,J as n,K as d,L as r,R as q,v as u,M as g,U as v,V as T,N as m,x as M,_ as J,Y as K,W,X}from"./vue.esm-bundler-0c8496bd.js";import{F as Y}from"./FSNumberField-afcfbae7.js";import{F as G}from"./FSSelectField-3d61a361.js";import{_ as p}from"./FSSpan-dff588c4.js";import{_ as h}from"./FSCol-0a323bdc.js";import{_ as y}from"./FSRow-547598b4.js";import{t as F,g as x,a as Q}from"./rules-7526a651.js";import{u as Z}from"./useRules-a67d9042.js";import{u as ee,C as w}from"./useColors-b1c35b1c.js";import{u as le}from"./useSlots-d0001844.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ae}from"./VSpacer-989c3452.js";import{F as te}from"./FSForm-81d8e4b7.js";import"./FSTextField-98f706c4.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./css-0fb78066.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./theme-3745e9f1.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSIcon-e8919096.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./density-22f26472.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VSelect-f6dc4f4d.js";import"./VOverlay-471318e4.js";import"./dimensions-13ab2ad3.js";import"./display-237b16bb.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./VMenu-36a8b303.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./elevation-00653c06.js";import"./index-5120e393.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./VSlideGroup-8312a613.js";import"./group-8484219c.js";import"./useTranslations-e7f63e09.js";import"./useAppTimeZone-b6ddcce6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const E=A({name:"FSTimeField",components:{FSNumberField:Y,FSSelectField:G,FSSpan:p,FSCol:h,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:R,blurred:k,getMessages:$}=Z(),{getColors:f}=ee(),{slots:s}=le();delete s.label,delete s.description;const c=f(w.Error),o=f(w.Light),i=f(w.Dark),l=U(0),t=U(F[0]);e.modelValue&&(x(e.modelValue)!==0?(t.value=F[x(e.modelValue)],l.value=e.modelValue/t.value.id):l.value=e.modelValue);const L=N(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":o.dark,"--fs-time-field-color":i.base,"--fs-time-field-active-border-color":i.dark,"--fs-time-field-error-color":c.base,"--fs-time-field-error-border-color":c.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":o.base,"--fs-time-field-color":o.dark,"--fs-time-field-active-border-color":o.base}),P=N(()=>e.messages??$(e.modelValue,e.rules));return{selectedUnit:t,validateOn:R,innerTime:l,timeScale:F,messages:P,blurred:k,slots:s,style:L,onSubmitTimeScale:V=>{t.value=F.find(z=>z.id===V),a("update:modelValue",l.value*t.value.id)},onSubmitValue:V=>{l.value=V,a("update:modelValue",l.value*t.value.id)}}}});function se(e,a,R,k,$,f){const s=O("FSNumberField"),c=O("FSSelectField");return n(),d(h,null,{default:r(()=>[e.$props.hideHeader?m("",!0):q(e.$slots,"label",{key:0},()=>[u(y,{wrap:!1},{default:r(()=>[e.$props.label?(n(),d(p,{key:0,class:"fs-time-field-label",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.$props.label),1)]),_:1},8,["style"])):m("",!0),e.$props.label&&e.$props.required?(n(),d(p,{key:1,class:"fs-time-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:r(()=>[v(" * ")]),_:1},8,["style"])):m("",!0),u(ae,{style:{"min-width":"40px"}}),e.messages.length>0?(n(),d(p,{key:2,class:"fs-time-field-messages",font:"text-overline",style:g(e.style)},{default:r(()=>[v(T(e.messages.join(", ")),1)]),_:1},8,["style"])):m("",!0)]),_:1})]),u(y,null,{default:r(()=>[u(s,M({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),J({_:2},[K(e.slots,(o,i)=>({name:i,fn:r(l=>[q(e.$slots,i,W(X(l)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),u(c,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3}),q(e.$slots,"description",{},()=>[e.$props.description?(n(),d(p,{key:0,class:"fs-time-field-description",font:"text-underline",style:g(e.style)},{default:r(()=>[v(T(e.$props.description),1)]),_:1},8,["style"])):m("",!0)])]),_:3})}const C=re(E,[["render",se]]);E.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const gl={title:"Foundation/Shared/Input fields/TimeField",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:a})=>({components:{FSTimeField:C,FSCol:h},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})},S={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:Q}},render:(e,{argTypes:a})=>({components:{FSForm:te,FSTimeField:C,FSCol:h,FSRow:y},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSForm>`})};var _,j,B;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(B=(j=b.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var H,D,I;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(D=S.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const vl=["Variations","Rules"];export{S as Rules,b as Variations,vl as __namedExportsOrder,gl as default};
