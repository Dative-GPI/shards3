import{f as N,j as V,g as q,D as f,E as H,F as j,G as c,M as F,A as D,U as E,V as A,R as I,N as P,O as L}from"./vue.esm-bundler-838daa40.js";import{F as M}from"./FSNumberField-3d5e6b81.js";import{F as z}from"./FSSelectField-aeae1f55.js";import{F as G}from"./VField-b5e232d6.js";import{_ as b}from"./FSRow-753b58e5.js";import{t as d,g as T,b as J}from"./rules-6b720936.js";import{u as K}from"./useRules-cda8e231.js";import{u as Q,C as g}from"./useColors-8c9c4d1e.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{F as X}from"./FSForm-1e605dfa.js";import{_ as O}from"./FSCol-44fe82a9.js";import"./FSTextField-5838a9fc.js";import"./FSButton-b3e7898e.js";import"./FSClickable-104d21f2.js";import"./FSCard-b76495e8.js";import"./css-67cfec15.js";import"./VProgressCircular-95e816d7.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./useRender-f6a4770d.js";import"./resizeObserver-21650322.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./FSIcon-48205264.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./forwardRefs-e658ad70.js";import"./index-e75f540f.js";import"./FSDialogMenu-fb154c77.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./anchor-dbd6e54f.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./VDefaultsProvider-a165414e.js";import"./FSRadioGroup-9a5da185.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./FSCheckbox-884ec95b.js";import"./FSFadeOut-ce6cecc6.js";import"./uuid-08309875.js";import"./VSelect-73f86563.js";import"./VMenu-ec057191.js";import"./ssrBoot-00bf1891.js";import"./VSpacer-7ad9c022.js";import"./border-749eb26c.js";import"./elevation-c2192325.js";import"./rounded-94d04543.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./loader-62f4df25.js";import"./useAppTimeZone-a305acc7.js";import"./useTranslations-419c1021.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const _=N({name:"FSTimeField",components:{FSNumberField:M,FSSelectField:z,FSBaseField:G,FSRow:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:S,blurred:y,getMessages:h}=K(),{getColors:o}=Q(),i=o(g.Error),t=o(g.Light),s=o(g.Dark),a=V(0),r=V(d[0]);e.modelValue&&(T(e.modelValue)!==0?(r.value=d[T(e.modelValue)],a.value=e.modelValue/r.value.id):a.value=e.modelValue);const u=q(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":s.base,"--fs-time-field-active-border-color":s.dark,"--fs-time-field-error-color":i.base,"--fs-time-field-error-border-color":i.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),x=q(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:r,validateOn:S,innerTime:a,timeScale:d,messages:x,blurred:y,style:u,onSubmitTimeScale:p=>{r.value=d.find(B=>B.id===p),l("update:modelValue",a.value*r.value.id)},onSubmitValue:p=>{a.value=p,l("update:modelValue",a.value*r.value.id)}}}});function Y(e,l,S,y,h,o){const i=f("FSNumberField"),t=f("FSSelectField"),s=f("FSBaseField");return H(),j(s,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:c(()=>[F(b,null,{default:c(()=>[F(i,D({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),E({_:2},[A(e.$slots,(a,r)=>({name:r,fn:c(u=>[I(e.$slots,r,P(L(u)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),F(t,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const v=W(_,[["render",Y]]);_.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/TimeField",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:v,FSCol:O},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:J}},render:(e,{argTypes:l})=>({components:{FSForm:X,FSTimeField:v,FSCol:O,FSRow:b},props:Object.keys(l),setup(){return{...e}},template:`
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
