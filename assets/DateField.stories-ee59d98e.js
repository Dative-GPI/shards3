import{G as U,d as y,e as h,_ as C,I as E,J as H,K as a,z as o,V as j,W as L,M as q,P as N,Q as I,A as M}from"./vue.esm-bundler-588e96c7.js";import{F as O}from"./FSTextField-11217dd5.js";import{F as z}from"./FSCalendar-67970cc8.js";import{F as c}from"./FSButton-03b2e657.js";import{F as A}from"./FSCard-a59fef92.js";import{_ as m}from"./FSCol-07ad80b8.js";import{C as i,u as W}from"./useColors-0a17cef8.js";import{u as G}from"./VField-98fe1be9.js";import{u as J}from"./useTimeZone-b2704403.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Q}from"./VMenu-d58a1340.js";import{D as Z,F as X}from"./FSForm-48ceba41.js";import{_ as Y}from"./FSRow-e442cab6.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./VSpacer-18a01036.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./VTextField-9257e797.js";import"./VInput-4a9e0385.js";import"./locale-56b7257e.js";import"./VIcon-56fbcc42.js";import"./index-5292658a.js";import"./transition-28907f24.js";import"./density-79e1d57e.js";import"./forwardRefs-e658ad70.js";import"./index-c8d171e2.js";import"./VLocaleProvider-eaa40f75.js";import"./date-92898500.js";import"./VDefaultsProvider-3b96cb3b.js";import"./VBtn-b4a2fb00.js";import"./variant-5570e4c2.js";import"./elevation-1ac0f37f.js";import"./rounded-ef9fdb42.js";import"./group-6ed4811d.js";import"./dimensions-e6c6eed7.js";import"./loader-b5f87c49.js";import"./router-cfd7314c.js";import"./index-50a29978.js";import"./VProgressCircular-33868664.js";import"./resizeObserver-54460412.js";import"./FSIcon-2736b3f2.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-d310d0e5.js";import"./VOverlay-a56e8bf3.js";import"./display-8789070c.js";import"./lazy-8b651e92.js";const T=U({name:"FSDateField",components:{FSTextField:O,FSCalendar:z,FSButton:c,FSCard:A,FSCol:m},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:F,blurred:v,getMessages:b}=G(),{epochToLongDateFormat:S}=J(),{getColors:t}=W(),p=t(i.Error),l=t(i.Light),f=t(i.Dark),n=y(!1),s=y(e.modelValue),B=h(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":p.base}:{"--fs-date-field-color":l.dark}),P=h(()=>b(e.modelValue,e.rules));return{ColorEnum:i,innerDate:s,validateOn:F,messages:P,blurred:v,style:B,menu:n,onClear:()=>{r("update:modelValue",null),s.value=null},onSubmit:()=>{r("update:modelValue",s.value),n.value=!1},epochToLongDateFormat:S}}});function x(e,r,F,v,b,S){const t=C("FSCalendar"),p=C("FSCard");return E(),H(Q,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[2]||(r[2]=l=>e.menu=l)},{activator:a(({props:l})=>[o(O,M({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=f=>e.blurred=!0)},l),j({"prepend-inner":a(()=>[q(e.$slots,"prepend-inner",{},()=>[o(c,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[L(e.$slots,(f,n)=>({name:n,fn:a(s=>[q(e.$slots,n,N(I(s)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick:clear"])]),default:a(()=>[o(p,{width:"346px",elevation:!0,border:!1},{default:a(()=>[o(m,{width:"fill"},{default:a(()=>[o(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=l=>e.innerDate=l)},null,8,["color","modelValue"]),o(c,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"])}const g=K(T,[["render",x]]);T.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const Xe={title:"Foundation/Shared/Input fields/DateField",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateField:g,FSCol:m},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},u={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:Z}},render:(e,{argTypes:r})=>({components:{FSForm:X,FSDateField:g,FSCol:m,FSRow:Y},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var V,D,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateField,
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
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var $,R,k;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateField,
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
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const Ye=["Variations","Rules"];export{u as Rules,d as Variations,Ye as __namedExportsOrder,Xe as default};
