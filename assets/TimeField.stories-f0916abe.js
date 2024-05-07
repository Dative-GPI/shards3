import{j as H,d as q,e as V,I as f,J as N,K as j,L as c,A as F,B as I,Y as A,Z as D,R as E,W as L,X as P}from"./vue.esm-bundler-41eda46b.js";import{F as z}from"./FSNumberField-a2d6b203.js";import{F as J}from"./FSSelectField-884c905f.js";import{F as K}from"./VField-7c3f9689.js";import{_ as v}from"./FSRow-1508d56d.js";import{t as d,g as T,a as M}from"./rules-4c5e7e68.js";import{u as W}from"./useRules-d33c1ab7.js";import{u as X,C as g}from"./useColors-c08b974a.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as Z}from"./FSForm-5bfa6e9d.js";import{_ as B}from"./FSCol-282cc158.js";import"./FSTextField-53a1ad95.js";import"./FSButton-cdb730f5.js";import"./FSClickable-fa1cff73.js";import"./FSCard-dc76bdb2.js";import"./css-35e8563f.js";import"./VProgressCircular-e304a31d.js";import"./color-7b12579a.js";import"./theme-d4a333d5.js";import"./useRender-b120e115.js";import"./resizeObserver-ea3ec7d1.js";import"./VIcon-7bb7bc51.js";import"./tag-585bbcbd.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./FSIcon-6dc797d3.js";import"./VTextField-414d8177.js";import"./VInput-1f6e9963.js";import"./locale-396b54fa.js";import"./proxiedModel-ebe72836.js";import"./index-ad5199eb.js";import"./transition-87ba966b.js";import"./density-23ec5fb8.js";import"./dimensions-dbe989d9.js";import"./forwardRefs-e658ad70.js";import"./index-2b17760e.js";import"./FSDialogMenu-58b27c41.js";import"./VDialog-fd66d168.js";import"./VOverlay-aedbdfa0.js";import"./loader-912691d5.js";import"./rounded-d3e26840.js";import"./display-40264291.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./VDefaultsProvider-9f290faa.js";import"./FSRadioGroup-d55c6657.js";import"./VSelectionControl-6bfa0431.js";import"./index-35b22454.js";import"./VLabel-674db0eb.js";import"./FSCheckbox-9aa0fdbb.js";import"./FSFadeOut-d6aa1547.js";import"./useDebounce-c713d9ff.js";import"./VSelect-994061f1.js";import"./VMenu-40d1577e.js";import"./ssrBoot-5c61be23.js";import"./VSpacer-b889274d.js";import"./border-520a2ee2.js";import"./elevation-74b749d9.js";import"./VImg-d6020fb6.js";import"./VDivider-50e3f59d.js";import"./VSlideGroup-d28ddfe3.js";import"./goto-e7ba55f0.js";import"./group-53103ce4.js";import"./useTranslations-3bd97805.js";import"./useAppTimeZone-fd64682f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const O=H({name:"FSTimeField",components:{FSNumberField:z,FSSelectField:J,FSBaseField:K,FSRow:v},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:S,blurred:y,getMessages:h}=W(),{getColors:o}=X(),i=o(g.Error),t=o(g.Light),s=o(g.Dark),a=q(0),r=q(d[0]);e.modelValue&&(T(e.modelValue)!==0?(r.value=d[T(e.modelValue)],a.value=e.modelValue/r.value.id):a.value=e.modelValue);const u=V(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":t.dark,"--fs-time-field-color":s.base,"--fs-time-field-active-border-color":s.dark,"--fs-time-field-error-color":i.base,"--fs-time-field-error-border-color":i.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":t.base,"--fs-time-field-color":t.dark,"--fs-time-field-active-border-color":t.base}),_=V(()=>e.messages??h(e.modelValue,e.rules));return{selectedUnit:r,validateOn:S,innerTime:a,timeScale:d,messages:_,blurred:y,style:u,onSubmitTimeScale:p=>{r.value=d.find(x=>x.id===p),l("update:modelValue",a.value*r.value.id)},onSubmitValue:p=>{a.value=p,l("update:modelValue",a.value*r.value.id)}}}});function G(e,l,S,y,h,o){const i=f("FSNumberField"),t=f("FSSelectField"),s=f("FSBaseField");return N(),j(s,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:c(()=>[F(v,null,{default:c(()=>[F(i,I({editable:e.$props.editable,hideHeader:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),A({_:2},[D(e.$slots,(a,r)=>({name:r,fn:c(u=>[E(e.$slots,r,L(P(u)))])}))]),1040,["editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),F(t,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},null,8,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const b=Y(O,[["render",G]]);O.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const cr={title:"Foundation/Shared/Input fields/TimeField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:l})=>({components:{FSTimeField:b,FSCol:B},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const Fr=["Variations","Rules"];export{m as Rules,n as Variations,Fr as __namedExportsOrder,cr as default};
