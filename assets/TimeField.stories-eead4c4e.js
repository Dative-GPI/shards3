import{f as B,j as V,g as q,D as c,E as H,F as N,G as F,P as g,x as j,U as D,V as E,Q as P,R as I,S as A}from"./vue.esm-bundler-a0893183.js";import{F as L}from"./FSNumberField-2b490b10.js";import{F as z}from"./FSSelectField-6fb3d8a3.js";import{F as G}from"./VField-c7486719.js";import{_ as b}from"./FSRow-821d23a1.js";import{t as d,g as T,c as M}from"./rules-e7ffbedb.js";import{u as Q}from"./useRules-8ba0ecf4.js";import{u as J,C as v}from"./useColors-6c375bb5.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{F as W}from"./FSForm-f0ef5762.js";import{_ as x}from"./FSCol-e45ac157.js";import"./FSTextField-3d775cb5.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VProgressCircular-94f3850c.js";import"./color-d0fba9db.js";import"./theme-41eca2c8.js";import"./useRender-13ac3742.js";import"./resizeObserver-7a348d53.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./FSIcon-9d61ed62.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./forwardRefs-e658ad70.js";import"./index-01bbf789.js";import"./FSDialogMenu-2fb2114e.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./anchor-155e2782.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./VDefaultsProvider-c4e19f1a.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./VSpacer-b1094f09.js";import"./border-ca0badc6.js";import"./elevation-7d7e39c3.js";import"./rounded-4c492e72.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VSelect-9102db02.js";import"./VMenu-02096e7e.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./loader-4af36e99.js";import"./useAppTimeZone-d7f3e4a5.js";import"./useTranslations-95b4a686.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const O=B({name:"FSTimeField",components:{FSNumberField:L,FSSelectField:z,FSBaseField:G,FSRow:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:y,getMessages:h}=Q(),{getColors:o}=J(),u=o(v.Error),t=o(v.Light),i=o(v.Dark),r=V(0),a=V(d[0]);e.modelValue&&(T(e.modelValue)!==0?(a.value=d[T(e.modelValue)],r.value=e.modelValue/a.value.id):r.value=e.modelValue);const s=q(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":i.base,"--fs-time-field-active-border-color":i.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),p=q(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:a,validateOn:y,innerTime:r,timeScale:d,messages:p,style:s,onSubmitTimeScale:f=>{a.value=d.find(_=>_.id===f),l("update:modelValue",r.value*a.value.id)},onSubmitValue:f=>{r.value=f,l("update:modelValue",r.value*a.value.id)}}}});function X(e,l,y,h,o,u){const t=c("FSNumberField"),i=c("FSSelectField"),r=c("FSBaseField");return H(),N(r,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:F(()=>[g(b,null,{default:F(()=>[g(t,j({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),D({_:2},[E(e.$slots,(a,s)=>({name:s,fn:F(p=>[P(e.$slots,s,I(A(p)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),g(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const S=K(O,[["render",X]]);O.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const gr={title:"Foundation/Shared/Input fields/TimeField",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:S,FSCol:x},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:M}},render:(e,{argTypes:l})=>({components:{FSForm:W,FSTimeField:S,FSCol:x,FSRow:b},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSForm>`})};var w,R,C;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(R=n.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var $,k,U;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const vr=["Variations","Rules"];export{m as Rules,n as Variations,vr as __namedExportsOrder,gr as default};
