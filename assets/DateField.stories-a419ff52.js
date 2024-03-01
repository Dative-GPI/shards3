import{E as M,d as R,e as T,Z as B,H as d,I as u,J as l,z as o,U as Z,L as g,R as v,M as b,N as H,K as F,V as J,O as K,P as W,A as G}from"./vue.esm-bundler-a27e881e.js";import{F as L}from"./FSTextField-50214623.js";import{F as Q}from"./FSCalendar-86c08fa0.js";import{F as S}from"./FSButton-80bad2c6.js";import{F as X}from"./FSCard-3036db54.js";import{_ as f}from"./FSCol-2e092d2e.js";import{C as t,u as Y}from"./useColors-64c3c523.js";import{u as _}from"./useTimeZone-035f95ae.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as z}from"./FSRow-68eabf56.js";import{_ as y}from"./FSSpan-23926a6a.js";import{V as ee}from"./VMenu-7f762766.js";import{V as re}from"./VSpacer-0b076bec.js";import{D as le,V as ae}from"./VForm-b9b36940.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./VIcon-05012a67.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./VLocaleProvider-cf46a668.js";import"./date-b85a0fab.js";import"./VDefaultsProvider-34413012.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./FSIcon-98d9a930.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-0799e799.js";import"./VOverlay-1baa69a1.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";const I=M({name:"FSDateField",components:{FSTextField:L,FSCalendar:Q,FSButton:S,FSCard:X,FSCol:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:t.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:C}=_(),{getColors:n}=Y(),q=n(t.Error),V=n(t.Light),c=n(t.Dark),s=R(!1),a=R(e.modelValue),D=T(()=>e.editable?{"--fs-date-field-color":c.base,"--fs-date-field-error-color":q.base}:{"--fs-date-field-color":V.dark}),i=T(()=>{const $=[];for(const A of e.rules){const k=A(e.modelValue??null);typeof k=="string"&&$.push(k)}return $});return{ColorEnum:t,innerDate:a,messages:i,style:D,menu:s,onClear:()=>{r("update:modelValue",null),a.value=null},onSubmit:()=>{r("update:modelValue",a.value),s.value=!1},epochToLongDateFormat:C}}});function oe(e,r,C,n,q,V){const c=B("FSCalendar"),s=B("FSCard");return d(),u(ee,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[1]||(r[1]=a=>e.menu=a)},{activator:l(({props:a})=>[o(L,G({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onClick:clear":e.onClear},a),Z({"prepend-inner":l(()=>[g(e.$slots,"prepend-inner",{},()=>[o(S,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[g(e.$slots,"label",{},()=>[o(z,{wrap:!1},{default:l(()=>[e.$props.label?(d(),u(y,{key:0,class:"fs-date-field-label",font:"text-overline",style:v(e.style)},{default:l(()=>[b(H(e.$props.label),1)]),_:1},8,["style"])):F("",!0),e.$props.label&&e.$props.required?(d(),u(y,{key:1,class:"fs-date-field-label",style:v([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[b(" * ")]),_:1},8,["style"])):F("",!0),o(re,{style:{"min-width":"40px"}}),e.messages.length>0?(d(),u(y,{key:2,class:"fs-date-field-messages",font:"text-overline",style:v(e.style)},{default:l(()=>[b(H(e.messages.join(", ")),1)]),_:1},8,["style"])):F("",!0)]),_:1})])]),key:"0"},J(e.$slots,(D,i)=>({name:i,fn:l(w=>[g(e.$slots,i,K(W(w)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:l(()=>[o(s,{width:"394",elevation:!0,border:!1},{default:l(()=>[o(f,{width:"fill"},{default:l(()=>[o(c,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),o(S,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"])}const h=x(I,[["render",oe]]);I.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateField.vue"]};const rr={title:"Foundation/Shared/Input fields/DateField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateField:h,FSCol:f},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},p={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:le}},render:(e,{argTypes:r})=>({components:{VForm:ae,FSDateField:h,FSCol:f,FSRow:z},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`})};var N,O,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateField,
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
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var E,P,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      FSDateField,
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
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(j=(P=p.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const lr=["Variations","Rules"];export{p as Rules,m as Variations,lr as __namedExportsOrder,rr as default};
