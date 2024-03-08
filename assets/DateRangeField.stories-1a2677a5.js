import{G as j,d as S,e as p,_ as y,H as A,I as P,z as i,V as I,W as N,M as g,F as z,J as h,Q as L,R as M}from"./vue.esm-bundler-d8049c85.js";import{F as G}from"./FSSubmitDialog-5dba0ff8.js";import{F as J}from"./FSCalendarTwin-6f812e23.js";import{F as k}from"./FSTextField-7a5a6ce0.js";import{_ as $}from"./FSButton-819b5655.js";import{C as t,u as Q}from"./useColors-5c9cff43.js";import{u as W}from"./VField-98076a13.js";import{u as Z}from"./useTimeZone-01b1e25e.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{D as X,F as Y}from"./FSForm-57dbe236.js";import{_ as B}from"./FSCol-39bd052c.js";import{_}from"./FSRow-b5482a77.js";import"./FSCard-c2aada98.js";import"./css-50f0aa1d.js";import"./useBreakpoints-7d02383c.js";import"./VOverlay-0482e356.js";import"./forwardRefs-e658ad70.js";import"./useRender-29d234e5.js";import"./theme-540b65c4.js";import"./locale-0b822523.js";import"./loader-cb170f8e.js";import"./color-339b05ed.js";import"./rounded-0d200380.js";import"./tag-fffb6ba6.js";import"./dimensions-c0ade26a.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";import"./router-e2bea4dd.js";import"./transition-a0827c0d.js";import"./VDefaultsProvider-2b53b1ea.js";import"./useTranslations-503566cb.js";import"./FSSpan-9f00eaf4.js";import"./useSlots-bdda8306.js";import"./VLocaleProvider-2ed70586.js";import"./date-7f94e111.js";import"./VBtn-05fbe885.js";import"./variant-ec540a43.js";import"./density-de8a38cb.js";import"./elevation-ef665fc6.js";import"./group-9e62ecfa.js";import"./VIcon-76640d9b.js";import"./index-ea9d807b.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";import"./VSpacer-e253cf80.js";import"./VTextField-bdebe004.js";import"./VInput-95d46afc.js";import"./index-a9977cc4.js";import"./index-d961be33.js";import"./FSIcon-4847f868.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const T=j({name:"FSDateRangeField",components:{FSSubmitDialog:G,FSCalendarTwin:J,FSTextField:k,FSButton:$},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:t.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,blurred:F,getMessages:v}=W(),{epochToShortDateFormat:b}=Z(),{getColors:l}=Q(),u=l(t.Error),a=l(t.Light),n=l(t.Dark),o=S(!1),m=S(e.modelValue),O=p(()=>e.editable?{"--fs-date-field-color":n.base,"--fs-date-field-error-color":u.base}:{"--fs-date-field-color":a.dark}),E=p(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(U=>b(U)).join(" - ")),H=p(()=>v(e.modelValue,e.rules,!0));return{ColorEnum:t,validateOn:c,messages:H,blurred:F,style:O,dialog:o,toShortDateFormat:E,innerDateRange:m,onClick:()=>{e.editable&&(o.value=!0)},onClear:()=>{r("update:modelValue",null),m.value=null},onSubmit:()=>{r("update:modelValue",m.value),o.value=!1}}}});function x(e,r,c,F,v,b){const l=y("FSCalendarTwin"),u=y("FSSubmitDialog");return A(),P(z,null,[i(k,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},I({"prepend-inner":g(()=>[h(e.$slots,"prepend-inner",{},()=>[i($,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[N(e.$slots,(a,n)=>({name:n,fn:g(o=>[h(e.$slots,n,L(M(o)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onClick:clear"]),i(u,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[2]||(r[2]=a=>e.dialog=a)},{body:g(()=>[i(l,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"])]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const f=K(T,[["render",x]]);T.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const rr={title:"Foundation/Shared/Input fields/DateRangeField",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:f,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},d={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:X}},render:(e,{argTypes:r})=>({components:{FSForm:Y,FSDateRangeField:f,FSCol:B,FSRow:_},props:Object.keys(r),setup(){return{...e}},template:`
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
