import{f as H,j as V,g as q,I as f,J as N,K as j,L as c,A as F,B as I,X as A,Y as D,V as E,Q as L,R as P}from"./vue.esm-bundler-cd768bc3.js";import{F as z}from"./FSNumberField-13a31ab5.js";import{F as J}from"./FSSelectField-b7cd016f.js";import{F as K}from"./VField-d090f013.js";import{_ as b}from"./FSRow-1d7c2545.js";import{t as d,g as T,b as M}from"./rules-fd87a465.js";import{u as Q}from"./useRules-bb9e9594.js";import{u as X,C as g}from"./useColors-91ab292c.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as G}from"./FSForm-25bb07d2.js";import{_ as B}from"./FSCol-ff457bc3.js";import"./FSTextField-8af1deda.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./css-c2ea3b68.js";import"./VProgressCircular-f6ca2848.js";import"./color-4e667524.js";import"./theme-33f5ac1a.js";import"./useRender-b3fd6f8b.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./FSIcon-203715fb.js";import"./VTextField-d2eba149.js";import"./VInput-5fe9e616.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./index-055d6469.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./forwardRefs-e658ad70.js";import"./index-cc35ebf5.js";import"./FSDialogMenu-72c7cda0.js";import"./VDialog-c1d28576.js";import"./VOverlay-43a7a638.js";import"./anchor-9469ffd7.js";import"./display-23d3bc4a.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./VDefaultsProvider-22eb0e57.js";import"./FSRadioGroup-55d3a9e5.js";import"./VSelectionControl-e9dab1c2.js";import"./index-f4fa4c36.js";import"./VLabel-a834020c.js";import"./FSCheckbox-0f33b66c.js";import"./FSFadeOut-ad56c427.js";import"./useDebounce-8f204f15.js";import"./VSelect-9e784020.js";import"./VMenu-501341cc.js";import"./ssrBoot-a9e4f1d0.js";import"./VSpacer-0c52efc7.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./rounded-c9c22222.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";import"./VSlideGroup-cd82e4b3.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./loader-3bcfb6cd.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const O=H({name:"FSTimeField",components:{FSNumberField:z,FSSelectField:J,FSBaseField:K,FSRow:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:S,blurred:y,getMessages:h}=Q(),{getColors:o}=X(),i=o(g.Error),t=o(g.Light),s=o(g.Dark),a=V(0),r=V(d[0]);e.modelValue&&(T(e.modelValue)!==0?(r.value=d[T(e.modelValue)],a.value=e.modelValue/r.value.id):a.value=e.modelValue);const u=q(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":s.base,"--fs-time-field-active-border-color":s.dark,"--fs-time-field-error-color":i.base,"--fs-time-field-error-border-color":i.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),_=q(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:r,validateOn:S,innerTime:a,timeScale:d,messages:_,blurred:y,style:u,onSubmitTimeScale:p=>{r.value=d.find(x=>x.id===p),l("update:modelValue",a.value*r.value.id)},onSubmitValue:p=>{a.value=p,l("update:modelValue",a.value*r.value.id)}}}});function W(e,l,S,y,h,o){const i=f("FSNumberField"),t=f("FSSelectField"),s=f("FSBaseField");return N(),j(s,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:c(()=>[F(b,null,{default:c(()=>[F(i,I({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),A({_:2},[D(e.$slots,(a,r)=>({name:r,fn:c(u=>[E(e.$slots,r,L(P(u)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),F(t,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const v=Y(O,[["render",W]]);O.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const gr={title:"Foundation/Shared/Input fields/TimeField",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:v,FSCol:B},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:M}},render:(e,{argTypes:l})=>({components:{FSForm:G,FSTimeField:v,FSCol:B,FSRow:b},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const br=["Variations","Rules"];export{m as Rules,n as Variations,br as __namedExportsOrder,gr as default};
