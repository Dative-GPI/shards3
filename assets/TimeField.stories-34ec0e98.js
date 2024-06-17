import{f as B,j as V,g as q,D as c,E as H,F as N,G as F,P as g,A as j,U as D,V as E,Q as P,R as A,S as I}from"./vue.esm-bundler-6f923154.js";import{F as L}from"./FSNumberField-18810a5f.js";import{F as z}from"./FSSelectField-78ee29cc.js";import{F as G}from"./VField-d1f54092.js";import{_ as b}from"./FSRow-64caadb9.js";import{t as d,g as T,b as M}from"./rules-56abbd16.js";import{u as Q}from"./useRules-8e3c4a4a.js";import{u as J,C as v}from"./useColors-9144d90e.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{F as W}from"./FSForm-7d2059d4.js";import{_ as O}from"./FSCol-5ed907ac.js";import"./FSTextField-add61627.js";import"./FSButton-ff673895.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./css-0cf2e273.js";import"./VProgressCircular-78df7425.js";import"./color-a262cadc.js";import"./theme-a8226b2e.js";import"./useRender-1cb09274.js";import"./resizeObserver-e79b2f69.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./FSIcon-93774118.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./forwardRefs-e658ad70.js";import"./index-114ba00f.js";import"./FSDialogMenu-7aaa5a49.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./anchor-52e92869.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./VDefaultsProvider-a08a9a42.js";import"./FSRadioGroup-52f2d9ef.js";import"./VSelectionControl-40c897c6.js";import"./index-55248dcb.js";import"./VLabel-737017e3.js";import"./FSCheckbox-4fa3808a.js";import"./FSFadeOut-1de34239.js";import"./uuid-08309875.js";import"./VSelect-b637e5b8.js";import"./VMenu-31bd6e5f.js";import"./ssrBoot-082b8501.js";import"./VSpacer-54f0d5ce.js";import"./border-f53cef89.js";import"./elevation-2c5be1c3.js";import"./rounded-1f8e51a9.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./loader-1a97481f.js";import"./useAppTimeZone-dc793336.js";import"./useTranslations-59cd146d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const _=B({name:"FSTimeField",components:{FSNumberField:L,FSSelectField:z,FSBaseField:G,FSRow:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:y,getMessages:h}=Q(),{getColors:o}=J(),u=o(v.Error),t=o(v.Light),i=o(v.Dark),r=V(0),a=V(d[0]);e.modelValue&&(T(e.modelValue)!==0?(a.value=d[T(e.modelValue)],r.value=e.modelValue/a.value.id):r.value=e.modelValue);const s=q(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":i.base,"--fs-time-field-active-border-color":i.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),p=q(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:a,validateOn:y,innerTime:r,timeScale:d,messages:p,style:s,onSubmitTimeScale:f=>{a.value=d.find(x=>x.id===f),l("update:modelValue",r.value*a.value.id)},onSubmitValue:f=>{r.value=f,l("update:modelValue",r.value*a.value.id)}}}});function X(e,l,y,h,o,u){const t=c("FSNumberField"),i=c("FSSelectField"),r=c("FSBaseField");return H(),N(r,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:F(()=>[g(b,null,{default:F(()=>[g(t,j({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),D({_:2},[E(e.$slots,(a,s)=>({name:s,fn:F(p=>[P(e.$slots,s,A(I(p)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),g(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const S=K(_,[["render",X]]);_.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const cr={title:"Foundation/Shared/Input fields/TimeField",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:S,FSCol:O},props:Object.keys(l),setup(){return{...e}},template:`
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
