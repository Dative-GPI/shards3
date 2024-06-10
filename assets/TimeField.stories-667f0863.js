import{f as B,j as V,g as q,D as c,E as H,F as N,G as F,P as g,A as j,U as D,V as E,Q as P,R as A,S as I}from"./vue.esm-bundler-f632b118.js";import{F as L}from"./FSNumberField-778a6896.js";import{F as z}from"./FSSelectField-594d3765.js";import{F as G}from"./VField-d1df4052.js";import{_ as b}from"./FSRow-76f4ad1e.js";import{t as d,g as T,b as M}from"./rules-78f81f7e.js";import{u as Q}from"./useRules-89bf8a4c.js";import{u as J,C as v}from"./useColors-5866e399.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{F as W}from"./FSForm-483c0cbb.js";import{_ as O}from"./FSCol-606e8271.js";import"./FSTextField-ae12b6dc.js";import"./FSButton-08a91e21.js";import"./FSClickable-4011125f.js";import"./FSCard-491552ba.js";import"./css-185b4786.js";import"./VProgressCircular-5f2acd26.js";import"./color-8a5e0dbc.js";import"./theme-7fcd5c30.js";import"./useRender-e08116dd.js";import"./resizeObserver-e215d892.js";import"./VIcon-31ae1cc1.js";import"./tag-f52d5248.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./FSIcon-8032a9d1.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./forwardRefs-e658ad70.js";import"./index-c976eaf6.js";import"./FSDialogMenu-5b31adc4.js";import"./VDialog-46b8b074.js";import"./VOverlay-f45091df.js";import"./anchor-559036f7.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./VDefaultsProvider-e2787342.js";import"./FSRadioGroup-43b41305.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./VLabel-19a0ad6a.js";import"./FSCheckbox-bde4293d.js";import"./FSFadeOut-391a4266.js";import"./uuid-08309875.js";import"./VSelect-ee781f63.js";import"./VMenu-8734b394.js";import"./ssrBoot-8619e9d9.js";import"./VSpacer-f52c9222.js";import"./border-df752cc4.js";import"./elevation-f0466824.js";import"./rounded-83656db8.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./loader-288cfa26.js";import"./useAppTimeZone-3909e5e4.js";import"./useTranslations-f6aba3ae.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const _=B({name:"FSTimeField",components:{FSNumberField:L,FSSelectField:z,FSBaseField:G,FSRow:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:y,getMessages:h}=Q(),{getColors:o}=J(),u=o(v.Error),t=o(v.Light),i=o(v.Dark),r=V(0),a=V(d[0]);e.modelValue&&(T(e.modelValue)!==0?(a.value=d[T(e.modelValue)],r.value=e.modelValue/a.value.id):r.value=e.modelValue);const s=q(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":i.base,"--fs-time-field-active-border-color":i.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),p=q(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:a,validateOn:y,innerTime:r,timeScale:d,messages:p,style:s,onSubmitTimeScale:f=>{a.value=d.find(x=>x.id===f),l("update:modelValue",r.value*a.value.id)},onSubmitValue:f=>{r.value=f,l("update:modelValue",r.value*a.value.id)}}}});function X(e,l,y,h,o,u){const t=c("FSNumberField"),i=c("FSSelectField"),r=c("FSBaseField");return H(),N(r,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:F(()=>[g(b,null,{default:F(()=>[g(t,j({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),D({_:2},[E(e.$slots,(a,s)=>({name:s,fn:F(p=>[P(e.$slots,s,A(I(p)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),g(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const S=K(_,[["render",X]]);_.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const cr={title:"Foundation/Shared/Input fields/TimeField",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:S,FSCol:O},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:M}},render:(e,{argTypes:l})=>({components:{FSForm:W,FSTimeField:S,FSCol:O,FSRow:b},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const Fr=["Variations","Rules"];export{m as Rules,n as Variations,Fr as __namedExportsOrder,cr as default};
