import{j as H,d as q,e as V,I as f,J as N,K as j,L as c,A as F,B as I,Y as A,Z as D,W as E,Q as L,R as P}from"./vue.esm-bundler-01006032.js";import{F as z}from"./FSNumberField-c639d51b.js";import{F as J}from"./FSSelectField-6c305e90.js";import{F as K}from"./VField-f1a9daf9.js";import{_ as v}from"./FSRow-83e75060.js";import{t as d,g as T,a as M}from"./rules-324ef0f3.js";import{u as Q}from"./useRules-54978858.js";import{u as W,C as g}from"./useColors-13ed6ee6.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as Z}from"./FSForm-836a750d.js";import{_ as B}from"./FSCol-c97fad61.js";import"./FSTextField-4ac67195.js";import"./FSButton-be94d44f.js";import"./FSClickable-a0c1e9ef.js";import"./FSCard-8fcd8e1e.js";import"./css-279a0029.js";import"./VProgressCircular-f05fef1e.js";import"./color-8c62b342.js";import"./theme-a26d2375.js";import"./useRender-4bcbb6ac.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./tag-1f5f74bd.js";import"./FSSpan-6e79caf3.js";import"./useSlots-e0d7ab7c.js";import"./FSIcon-15b738c8.js";import"./VTextField-f4d9b05c.js";import"./VInput-50bb839f.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./index-491d6eb9.js";import"./transition-9c7eb302.js";import"./density-d09a1492.js";import"./dimensions-4232d0fa.js";import"./forwardRefs-e658ad70.js";import"./index-4a977ff0.js";import"./FSDialogMenu-aa70b58d.js";import"./VDialog-7227fab4.js";import"./VOverlay-d4d3a71f.js";import"./anchor-1cd9d9ab.js";import"./display-77f43728.js";import"./lazy-d0bac168.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./VDefaultsProvider-d99c6ff5.js";import"./FSRadioGroup-bdbad880.js";import"./VSelectionControl-3e964160.js";import"./index-89394051.js";import"./VLabel-f27c70ae.js";import"./FSCheckbox-40e0c55f.js";import"./FSFadeOut-f03472dd.js";import"./useDebounce-ff82ad1d.js";import"./VSelect-450b500f.js";import"./VMenu-4c05ddd6.js";import"./ssrBoot-b1480e9f.js";import"./VSpacer-78b81ef3.js";import"./border-10554549.js";import"./elevation-28c6fd5f.js";import"./rounded-9001edc0.js";import"./VImg-f5b3db66.js";import"./VDivider-10bc2e69.js";import"./VSlideGroup-e0f01fc0.js";import"./goto-9bab4060.js";import"./group-e9c3615d.js";import"./loader-878147ed.js";import"./useTranslations-e38f43a5.js";import"./useAppTimeZone-14b58e87.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const O=H({name:"FSTimeField",components:{FSNumberField:z,FSSelectField:J,FSBaseField:K,FSRow:v},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:S,blurred:y,getMessages:h}=Q(),{getColors:o}=W(),i=o(g.Error),t=o(g.Light),s=o(g.Dark),a=q(0),r=q(d[0]);e.modelValue&&(T(e.modelValue)!==0?(r.value=d[T(e.modelValue)],a.value=e.modelValue/r.value.id):a.value=e.modelValue);const u=V(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":s.base,"--fs-time-field-active-border-color":s.dark,"--fs-time-field-error-color":i.base,"--fs-time-field-error-border-color":i.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),_=V(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:r,validateOn:S,innerTime:a,timeScale:d,messages:_,blurred:y,style:u,onSubmitTimeScale:p=>{r.value=d.find(x=>x.id===p),l("update:modelValue",a.value*r.value.id)},onSubmitValue:p=>{a.value=p,l("update:modelValue",a.value*r.value.id)}}}});function G(e,l,S,y,h,o){const i=f("FSNumberField"),t=f("FSSelectField"),s=f("FSBaseField");return N(),j(s,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:c(()=>[F(v,null,{default:c(()=>[F(i,I({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),A({_:2},[D(e.$slots,(a,r)=>({name:r,fn:c(u=>[E(e.$slots,r,L(P(u)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),F(t,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const b=Y(O,[["render",G]]);O.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const gr={title:"Foundation/Shared/Input fields/TimeField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:b,FSCol:B},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:M}},render:(e,{argTypes:l})=>({components:{FSForm:Z,FSTimeField:b,FSCol:B,FSRow:v},props:Object.keys(l),setup(){return{...e}},template:`
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
