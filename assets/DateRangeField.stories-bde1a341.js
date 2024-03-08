import{G as H,d as S,e as p,_ as y,I as P,R as A,z as i,V as I,W as N,K as g,F as z,M as h,P as L,Q as M}from"./vue.esm-bundler-588e96c7.js";import{F as G}from"./FSSubmitDialog-fd6f1b52.js";import{F as K}from"./FSCalendarTwin-aefd263b.js";import{F as k}from"./FSTextField-11217dd5.js";import{F as $}from"./FSButton-03b2e657.js";import{C as t,u as Q}from"./useColors-0a17cef8.js";import{u as W}from"./VField-98fe1be9.js";import{u as Z}from"./useTimeZone-b2704403.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{D as X,F as Y}from"./FSForm-48ceba41.js";import{_ as B}from"./FSCol-07ad80b8.js";import{_ as x}from"./FSRow-e442cab6.js";import"./FSCard-a59fef92.js";import"./css-50f0aa1d.js";import"./useBreakpoints-952345a0.js";import"./VOverlay-a56e8bf3.js";import"./forwardRefs-e658ad70.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./locale-56b7257e.js";import"./loader-b5f87c49.js";import"./rounded-ef9fdb42.js";import"./VIcon-56fbcc42.js";import"./dimensions-e6c6eed7.js";import"./display-8789070c.js";import"./lazy-8b651e92.js";import"./router-cfd7314c.js";import"./transition-28907f24.js";import"./VDefaultsProvider-3b96cb3b.js";import"./useTranslations-d310d0e5.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./VLocaleProvider-eaa40f75.js";import"./date-92898500.js";import"./VBtn-b4a2fb00.js";import"./variant-5570e4c2.js";import"./density-79e1d57e.js";import"./elevation-1ac0f37f.js";import"./group-6ed4811d.js";import"./index-50a29978.js";import"./VProgressCircular-33868664.js";import"./resizeObserver-54460412.js";import"./VSpacer-18a01036.js";import"./VTextField-9257e797.js";import"./VInput-4a9e0385.js";import"./index-5292658a.js";import"./index-c8d171e2.js";import"./FSIcon-2736b3f2.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const T=H({name:"FSDateRangeField",components:{FSSubmitDialog:G,FSCalendarTwin:K,FSTextField:k,FSButton:$},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:t.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,blurred:F,getMessages:v}=W(),{epochToShortDateFormat:b}=Z(),{getColors:l}=Q(),u=l(t.Error),a=l(t.Light),n=l(t.Dark),o=S(!1),m=S(e.modelValue),O=p(()=>e.editable?{"--fs-date-field-color":n.base,"--fs-date-field-error-color":u.base}:{"--fs-date-field-color":a.dark}),E=p(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(j=>b(j)).join(" - ")),U=p(()=>v(e.modelValue,e.rules,!0));return{ColorEnum:t,validateOn:c,messages:U,blurred:F,style:O,dialog:o,toShortDateFormat:E,innerDateRange:m,onClick:()=>{e.editable&&(o.value=!0)},onClear:()=>{r("update:modelValue",null),m.value=null},onSubmit:()=>{r("update:modelValue",m.value),o.value=!1}}}});function _(e,r,c,F,v,b){const l=y("FSCalendarTwin"),u=y("FSSubmitDialog");return P(),A(z,null,[i(k,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},I({"prepend-inner":g(()=>[h(e.$slots,"prepend-inner",{},()=>[i($,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[N(e.$slots,(a,n)=>({name:n,fn:g(o=>[h(e.$slots,n,L(M(o)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onClick:clear"]),i(u,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[2]||(r[2]=a=>e.dialog=a)},{body:g(()=>[i(l,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"])]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const f=J(T,[["render",_]]);T.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const _e={title:"Foundation/Shared/Input fields/DateRangeField",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:f,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},d={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:X}},render:(e,{argTypes:r})=>({components:{FSForm:Y,FSDateRangeField:f,FSCol:B,FSRow:x},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var R,C,q;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateRangeField,
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
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(q=(C=s.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var D,V,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      FSDateRangeField,
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
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(w=(V=d.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const er=["Variations","Rules"];export{d as Rules,s as Variations,er as __namedExportsOrder,_e as default};
