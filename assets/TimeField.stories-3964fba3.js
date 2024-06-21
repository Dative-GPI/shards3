import{f as A,j as T,g as p,D as F,E as L,F as W,G as f,P as v,x as z,U as w,V as R,Q as C,R as $,S as k}from"./vue.esm-bundler-a0893183.js";import{F as G}from"./FSNumberField-4d698fc8.js";import{F as M}from"./FSSelectField-6fb3d8a3.js";import{F as Q}from"./VField-c7486719.js";import{_ as y}from"./FSRow-821d23a1.js";import{t as c,g as O,c as J}from"./rules-46cd7bcd.js";import{u as K}from"./useRules-8ba0ecf4.js";import{u as X,C as S}from"./useColors-6c375bb5.js";import{u as Y}from"./useSlots-d5b57407.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{F as ee}from"./FSForm-f0ef5762.js";import{_ as N}from"./FSCol-e45ac157.js";import"./FSTextField-3d775cb5.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VProgressCircular-94f3850c.js";import"./color-d0fba9db.js";import"./theme-41eca2c8.js";import"./useRender-13ac3742.js";import"./resizeObserver-7a348d53.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./FSSpan-4daadeb4.js";import"./FSIcon-9d61ed62.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./forwardRefs-e658ad70.js";import"./index-01bbf789.js";import"./FSDialogMenu-2fb2114e.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./anchor-155e2782.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./VDefaultsProvider-c4e19f1a.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./VSpacer-b1094f09.js";import"./border-ca0badc6.js";import"./elevation-7d7e39c3.js";import"./rounded-4c492e72.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VSelect-9102db02.js";import"./VMenu-02096e7e.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./loader-4af36e99.js";import"./useAppTimeZone-d7f3e4a5.js";import"./useTranslations-95b4a686.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const D=A({name:"FSTimeField",components:{FSNumberField:G,FSSelectField:M,FSBaseField:Q,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:V,getMessages:q}=K(),{getColors:d}=X(),{slots:o}=Y();delete o.label,delete o.description;const u=d(S.Error),s=d(S.Light),m=d(S.Dark),t=T(0),l=T(c[0]);e.modelValue&&(O(e.modelValue)!==0?(l.value=c[O(e.modelValue)],t.value=e.modelValue/l.value.id):t.value=e.modelValue);const n=p(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":s.dark,"--fs-time-field-color":m.base,"--fs-time-field-active-border-color":m.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":s.base,"--fs-time-field-color":s.dark,"--fs-time-field-active-border-color":s.base}),E=p(()=>Object.keys(o).filter(r=>r.startsWith("number-")).reduce((r,i)=>(r[i.substring(7)]=o[i],r),{})),P=p(()=>Object.keys(o).filter(r=>r.startsWith("select-")).reduce((r,i)=>(r[i.substring(7)]=o[i],r),{})),I=p(()=>e.messages??q(e.modelValue,e.rules));return{selectedUnit:l,numberSlots:E,selectSlots:P,validateOn:V,innerTime:t,timeScale:c,messages:I,style:n,onSubmitTimeScale:r=>{l.value=c.find(i=>i.id===r),a("update:modelValue",t.value*l.value.id)},onSubmitValue:r=>{t.value=r,a("update:modelValue",t.value*l.value.id)}}}});function re(e,a,V,q,d,o){const u=F("FSNumberField"),s=F("FSSelectField"),m=F("FSBaseField");return L(),W(m,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:f(()=>[v(y,null,{default:f(()=>[v(u,z({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),w({_:2},[R(e.numberSlots,(t,l)=>({name:l,fn:f(n=>[C(e.$slots,l,$(k(n)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),v(s,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},w({_:2},[R(e.selectSlots,(t,l)=>({name:l,fn:f(n=>[C(e.$slots,l,$(k(n)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const h=Z(D,[["render",re]]);D.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const yr={title:"Foundation/Shared/Input fields/TimeField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:a})=>({components:{FSTimeField:h,FSCol:N},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})},b={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:J}},render:(e,{argTypes:a})=>({components:{FSForm:ee,FSTimeField:h,FSCol:N,FSRow:y},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSForm>`})};var U,_,B;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(_=g.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var j,x,H;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(x=b.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};const hr=["Variations","Rules"];export{b as Rules,g as Variations,hr as __namedExportsOrder,yr as default};
