import{E as J,d as B,e as b,Z as T,H as m,Q as K,z as o,U as M,J as a,V as Q,F as G,L as v,I as F,M as y,N as E,R as S,K as h,O as W,P as X}from"./vue.esm-bundler-a27e881e.js";import{F as Y}from"./FSSubmitDialog-857a15dd.js";import{F as x}from"./FSCalendarTwin-590adbc0.js";import{F as P}from"./FSTextField-50214623.js";import{F as z}from"./FSButton-80bad2c6.js";import{F as _}from"./FSCard-3036db54.js";import{_ as R}from"./FSCol-2e092d2e.js";import{C as s,u as ee}from"./useColors-64c3c523.js";import{u as re}from"./useTimeZone-035f95ae.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSRow-68eabf56.js";import{_ as C}from"./FSSpan-23926a6a.js";import{V as ae}from"./VSpacer-0b076bec.js";import{D as oe,V as te}from"./VForm-b9b36940.js";import"./useBreakpoints-ce1b45c7.js";import"./VOverlay-1baa69a1.js";import"./forwardRefs-e658ad70.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./locale-d8beded1.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./VIcon-05012a67.js";import"./dimensions-59e3b80b.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./router-952fd40f.js";import"./transition-91aa1796.js";import"./VDefaultsProvider-34413012.js";import"./useTranslations-0799e799.js";import"./VLocaleProvider-cf46a668.js";import"./date-b85a0fab.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./index-d3298e01.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./VInput-932b5afe.js";import"./index-e8bb7e10.js";import"./FSIcon-98d9a930.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const L=J({name:"FSDateRangeField",components:{FSSubmitDialog:Y,FSCalendarTwin:x,FSTextField:P,FSButton:z,FSCard:_,FSCol:R},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToShortDateFormat:q}=re(),{getColors:i}=ee(),D=i(s.Error),w=i(s.Light),g=i(s.Dark),t=B(!1),l=B(e.modelValue),d=b(()=>e.editable?{"--fs-date-field-color":g.base,"--fs-date-field-error-color":D.base}:{"--fs-date-field-color":w.dark}),c=b(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(n=>q(n)).join(" - ")),Z=b(()=>{const n=[];for(const k of e.rules)if(e.modelValue&&Array.isArray(e.modelValue))for(const u of e.modelValue){const $=k(u);if(typeof $=="string"){n.push($);break}}else{const u=k(null);typeof u=="string"&&n.push(u)}return n});return{ColorEnum:s,messages:Z,style:d,dialog:t,placeholder:c,innerDateRange:l,onClick:()=>{e.editable&&(t.value=!0)},onClear:()=>{r("update:modelValue",null),l.value=null},onSubmit:()=>{r("update:modelValue",l.value),t.value=!1}}}});function ne(e,r,q,i,D,w){const g=T("FSCalendarTwin"),t=T("FSSubmitDialog");return m(),K(G,null,[o(P,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.placeholder,onClick:e.onClick,"onClick:clear":e.onClear},M({"prepend-inner":a(()=>[v(e.$slots,"prepend-inner",{},()=>[o(z,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:a(()=>[v(e.$slots,"label",{},()=>[o(I,{wrap:!1},{default:a(()=>[e.$props.label?(m(),F(C,{key:0,class:"fs-date-field-label",font:"text-overline",style:S(e.style)},{default:a(()=>[y(E(e.$props.label),1)]),_:1},8,["style"])):h("",!0),e.$props.label&&e.$props.required?(m(),F(C,{key:1,class:"fs-date-field-label",style:S([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[y(" * ")]),_:1},8,["style"])):h("",!0),o(ae,{style:{"min-width":"40px"}}),e.messages.length>0?(m(),F(C,{key:2,class:"fs-date-field-messages",font:"text-overline",style:S(e.style)},{default:a(()=>[y(E(e.messages.join(", ")),1)]),_:1},8,["style"])):h("",!0)]),_:1})])]),key:"0"},Q(e.$slots,(l,d)=>({name:d,fn:a(c=>[v(e.$slots,d,W(X(c)))])}))]),1032,["label","description","color","hideHeader","required","editable","error","modelValue","onClick","onClick:clear"]),o(t,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=l=>e.dialog=l)},{body:a(()=>[o(g,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=l=>e.innerDateRange=l)},null,8,["color","modelValue"])]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const V=le(L,[["render",ne]]);L.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateRangeField.vue"]};const nr={title:"Foundation/Shared/Input fields/DateRangeField",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:V,FSCol:R},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},f={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:oe}},render:(e,{argTypes:r})=>({components:{VForm:te,FSDateRangeField:V,FSCol:R,FSRow:I},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
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
    </v-form>`})};var H,U,j;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(U=p.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var A,N,O;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      VForm,
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
    <v-form v-model="args.valid">
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
    </v-form>\`
  })
}`,...(O=(N=f.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const sr=["Variations","Rules"];export{f as Rules,p as Variations,sr as __namedExportsOrder,nr as default};
