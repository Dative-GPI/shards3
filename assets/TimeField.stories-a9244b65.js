import{f as H,j as V,g as q,D as f,E as N,F as j,G as c,Q as F,A as D,U as E,V as A,O as I,R as P,S as L}from"./vue.esm-bundler-1de4ab84.js";import{F as z}from"./FSNumberField-7f175d50.js";import{F as G}from"./FSSelectField-72f459f2.js";import{F as M}from"./VField-c7605df9.js";import{_ as b}from"./FSRow-0f15051e.js";import{t as d,g as T,b as Q}from"./rules-de67e007.js";import{u as J}from"./useRules-14fb7f63.js";import{u as K,C as g}from"./useColors-6201f155.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{F as X}from"./FSForm-6f3485fc.js";import{_ as O}from"./FSCol-044a4f0a.js";import"./FSTextField-5eb8ba7e.js";import"./FSButton-6b0685b3.js";import"./FSClickable-00bc2ab2.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./VProgressCircular-a8c57eaa.js";import"./color-69562b87.js";import"./theme-fee57059.js";import"./useRender-b44b777b.js";import"./resizeObserver-5af66ffc.js";import"./VIcon-9f1a137c.js";import"./tag-58633b3a.js";import"./FSSpan-c5b5f93b.js";import"./useSlots-78ee3d45.js";import"./FSIcon-08483052.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./forwardRefs-e658ad70.js";import"./index-bd033a0f.js";import"./FSDialogMenu-a98f6da7.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./anchor-3e311b48.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./VDefaultsProvider-4480b636.js";import"./FSRadioGroup-39907278.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./FSCheckbox-7bc44d7a.js";import"./FSFadeOut-649e8ed5.js";import"./uuid-08309875.js";import"./VSelect-46cfbf6f.js";import"./VMenu-75bfc7ff.js";import"./ssrBoot-a25f980b.js";import"./VSpacer-8f10d0b5.js";import"./border-5994344b.js";import"./elevation-e7de2c09.js";import"./rounded-aeb398ab.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./loader-16a3b845.js";import"./useAppTimeZone-7082f171.js";import"./useTranslations-df2010ef.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const _=H({name:"FSTimeField",components:{FSNumberField:z,FSSelectField:G,FSBaseField:M,FSRow:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:S,blurred:y,getMessages:h}=J(),{getColors:o}=K(),i=o(g.Error),t=o(g.Light),s=o(g.Dark),a=V(0),r=V(d[0]);e.modelValue&&(T(e.modelValue)!==0?(r.value=d[T(e.modelValue)],a.value=e.modelValue/r.value.id):a.value=e.modelValue);const u=q(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":s.base,"--fs-time-field-active-border-color":s.dark,"--fs-time-field-error-color":i.base,"--fs-time-field-error-border-color":i.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),x=q(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:r,validateOn:S,innerTime:a,timeScale:d,messages:x,blurred:y,style:u,onSubmitTimeScale:p=>{r.value=d.find(B=>B.id===p),l("update:modelValue",a.value*r.value.id)},onSubmitValue:p=>{a.value=p,l("update:modelValue",a.value*r.value.id)}}}});function Y(e,l,S,y,h,o){const i=f("FSNumberField"),t=f("FSSelectField"),s=f("FSBaseField");return N(),j(s,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:c(()=>[F(b,null,{default:c(()=>[F(i,D({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),E({_:2},[A(e.$slots,(a,r)=>({name:r,fn:c(u=>[I(e.$slots,r,P(L(u)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),F(t,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const v=W(_,[["render",Y]]);_.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/TimeField",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:v,FSCol:O},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:Q}},render:(e,{argTypes:l})=>({components:{FSForm:X,FSTimeField:v,FSCol:O,FSRow:b},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const gr=["Variations","Rules"];export{m as Rules,n as Variations,gr as __namedExportsOrder,Fr as default};
