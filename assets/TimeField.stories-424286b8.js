import{j as H,d as q,e as V,I as f,J as N,K as j,L as c,A as F,B as I,Y as A,Z as D,R as E,W as L,X as P}from"./vue.esm-bundler-857e5af7.js";import{F as z}from"./FSNumberField-773a3394.js";import{F as J}from"./FSSelectField-86243dfb.js";import{F as K}from"./VField-9dc825df.js";import{_ as v}from"./FSRow-e30f1dcc.js";import{t as d,g as T,a as M}from"./rules-bc7b0528.js";import{u as W}from"./useRules-b3d475c7.js";import{u as X,C as g}from"./useColors-d77b9fa0.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as Z}from"./FSForm-ffdc6f62.js";import{_ as B}from"./FSCol-439c812a.js";import"./FSTextField-16a79c60.js";import"./FSButton-821f7325.js";import"./FSClickable-d206c837.js";import"./FSCard-c144a688.js";import"./css-ab2bdb81.js";import"./VProgressCircular-593755b1.js";import"./color-5d3cc229.js";import"./theme-83a4d379.js";import"./useRender-d5beceb3.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./tag-7bd029e5.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./FSIcon-faf0e444.js";import"./VTextField-9b5f1e4d.js";import"./VInput-6c2a4fd3.js";import"./locale-9a98f700.js";import"./proxiedModel-1e29c8a1.js";import"./index-d6be2044.js";import"./transition-2a27d0f7.js";import"./density-69cd8efb.js";import"./dimensions-d7f5c5ad.js";import"./forwardRefs-e658ad70.js";import"./index-098e590d.js";import"./FSDialogMenu-717b3ccf.js";import"./VDialog-c4db32be.js";import"./VOverlay-dc792521.js";import"./loader-b99105cf.js";import"./rounded-67c03651.js";import"./display-56858c3a.js";import"./lazy-f71c8f0f.js";import"./router-bca8c92a.js";import"./scopeId-49b20494.js";import"./VDefaultsProvider-51a3a301.js";import"./FSRadioGroup-aac97f6c.js";import"./VSelectionControl-11aadb82.js";import"./index-f95cc40a.js";import"./VLabel-820f7887.js";import"./FSCheckbox-d1b08f47.js";import"./FSFadeOut-e66877f2.js";import"./useDebounce-3221123d.js";import"./VSelect-2f600942.js";import"./VMenu-ddfad70d.js";import"./ssrBoot-4aec2e0b.js";import"./VSpacer-37a4cd9a.js";import"./border-43a3c780.js";import"./elevation-d5a2e352.js";import"./VImg-f3ba6161.js";import"./VDivider-6ea2ea72.js";import"./VSlideGroup-23212639.js";import"./goto-975c1e2c.js";import"./group-501836f7.js";import"./useTranslations-4ae50e1a.js";import"./useAppTimeZone-43dfb0bc.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const O=H({name:"FSTimeField",components:{FSNumberField:z,FSSelectField:J,FSBaseField:K,FSRow:v},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:S,blurred:y,getMessages:h}=W(),{getColors:o}=X(),i=o(g.Error),t=o(g.Light),s=o(g.Dark),a=q(0),r=q(d[0]);e.modelValue&&(T(e.modelValue)!==0?(r.value=d[T(e.modelValue)],a.value=e.modelValue/r.value.id):a.value=e.modelValue);const u=V(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":s.base,"--fs-time-field-active-border-color":s.dark,"--fs-time-field-error-color":i.base,"--fs-time-field-error-border-color":i.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),_=V(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:r,validateOn:S,innerTime:a,timeScale:d,messages:_,blurred:y,style:u,onSubmitTimeScale:p=>{r.value=d.find(x=>x.id===p),l("update:modelValue",a.value*r.value.id)},onSubmitValue:p=>{a.value=p,l("update:modelValue",a.value*r.value.id)}}}});function G(e,l,S,y,h,o){const i=f("FSNumberField"),t=f("FSSelectField"),s=f("FSBaseField");return N(),j(s,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:c(()=>[F(v,null,{default:c(()=>[F(i,I({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),A({_:2},[D(e.$slots,(a,r)=>({name:r,fn:c(u=>[E(e.$slots,r,L(P(u)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),F(t,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const b=Y(O,[["render",G]]);O.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/TimeField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:b,FSCol:B},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const gr=["Variations","Rules"];export{m as Rules,n as Variations,gr as __namedExportsOrder,Fr as default};
