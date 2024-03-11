import{G as j,d as S,e as p,H as y,I as P,O as A,B as i,X as I,Y as N,K as g,F as L,P as h,R as z,S as G}from"./vue.esm-bundler-cada065a.js";import{F as K}from"./FSSubmitDialog-76123e61.js";import{F as M}from"./FSCalendarTwin-00639e53.js";import{F as k}from"./FSTextField-530e6f2e.js";import{_ as $}from"./FSButton-184a6980.js";import{C as t,u as X}from"./useColors-d76e62c3.js";import{u as Y}from"./VField-8506902a.js";import{u as Z}from"./useTimeZone-7828b9b2.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Q,F as W}from"./FSForm-690f55e3.js";import{_ as B}from"./FSCol-630168ee.js";import{_ as x}from"./FSRow-4ed4317e.js";import"./FSCard-274f3029.js";import"./css-50f0aa1d.js";import"./useBreakpoints-19506ea5.js";import"./VOverlay-bf937035.js";import"./forwardRefs-e658ad70.js";import"./useRender-aebc0214.js";import"./theme-077d21c3.js";import"./locale-793e4951.js";import"./loader-c6765802.js";import"./color-cac3f8b2.js";import"./rounded-c91c5538.js";import"./tag-84fe69a6.js";import"./dimensions-bd9ae89e.js";import"./display-5b38d177.js";import"./lazy-550f418a.js";import"./router-44442b4b.js";import"./transition-96405fc3.js";import"./VDefaultsProvider-1e56270a.js";import"./useTranslations-d1fccfae.js";import"./FSSpan-898e6277.js";import"./useSlots-e34db436.js";import"./VLocaleProvider-c5fe2840.js";import"./date-76316e65.js";import"./VBtn-1fd3c917.js";import"./variant-c24223ea.js";import"./density-a3d9cfab.js";import"./elevation-a65147a7.js";import"./group-52996811.js";import"./VIcon-f531f31f.js";import"./index-79d9264f.js";import"./VProgressCircular-de76cad3.js";import"./resizeObserver-1a024aa2.js";import"./VSpacer-417f2da8.js";import"./VTextField-9f779e5f.js";import"./VInput-0190379f.js";import"./index-127b1a3d.js";import"./index-1890f982.js";import"./FSIcon-de67d9ac.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const T=j({name:"FSDateRangeField",components:{FSSubmitDialog:K,FSCalendarTwin:M,FSTextField:k,FSButton:$},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:t.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,blurred:F,getMessages:v}=Y(),{epochToShortDateFormat:b}=Z(),{getColors:l}=X(),u=l(t.Error),a=l(t.Light),n=l(t.Dark),o=S(!1),m=S(e.modelValue),O=p(()=>e.editable?{"--fs-date-field-color":n.base,"--fs-date-field-error-color":u.base}:{"--fs-date-field-color":a.dark}),E=p(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(U=>b(U)).join(" - ")),H=p(()=>v(e.modelValue,e.rules,!0));return{ColorEnum:t,validateOn:c,messages:H,blurred:F,style:O,dialog:o,toShortDateFormat:E,innerDateRange:m,onClick:()=>{e.editable&&(o.value=!0)},onClear:()=>{r("update:modelValue",null),m.value=null},onSubmit:()=>{r("update:modelValue",m.value),o.value=!1}}}});function _(e,r,c,F,v,b){const l=y("FSCalendarTwin"),u=y("FSSubmitDialog");return P(),A(L,null,[i(k,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},I({"prepend-inner":g(()=>[h(e.$slots,"prepend-inner",{},()=>[i($,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[N(e.$slots,(a,n)=>({name:n,fn:g(o=>[h(e.$slots,n,z(G(o)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onClick:clear"]),i(u,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[2]||(r[2]=a=>e.dialog=a)},{body:g(()=>[i(l,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"])]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const f=J(T,[["render",_]]);T.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const rr={title:"Foundation/Shared/Input fields/DateRangeField",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:f,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},d={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:Q}},render:(e,{argTypes:r})=>({components:{FSForm:W,FSDateRangeField:f,FSCol:B,FSRow:x},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(w=(V=d.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const ar=["Variations","Rules"];export{d as Rules,s as Variations,ar as __namedExportsOrder,rr as default};
