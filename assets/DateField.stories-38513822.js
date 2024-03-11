import{G as P,d as y,e as h,H as C,I as U,J as E,K as o,B as a,X as j,Y as L,P as q,R as N,S as I,p as M}from"./vue.esm-bundler-cada065a.js";import{F as B}from"./FSTextField-530e6f2e.js";import{F as z}from"./FSCalendar-0191f513.js";import{_ as c}from"./FSButton-184a6980.js";import{F as A}from"./FSCard-274f3029.js";import{_ as m}from"./FSCol-630168ee.js";import{C as i,u as G}from"./useColors-d76e62c3.js";import{u as J}from"./VField-8506902a.js";import{u as K}from"./useTimeZone-7828b9b2.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{V as X}from"./VMenu-6896ef8b.js";import{D as Y,F as Z}from"./FSForm-690f55e3.js";import{_ as Q}from"./FSRow-4ed4317e.js";import"./FSSpan-898e6277.js";import"./useSlots-e34db436.js";import"./VSpacer-417f2da8.js";import"./useRender-aebc0214.js";import"./theme-077d21c3.js";import"./VTextField-9f779e5f.js";import"./VInput-0190379f.js";import"./locale-793e4951.js";import"./VIcon-f531f31f.js";import"./color-cac3f8b2.js";import"./tag-84fe69a6.js";import"./index-127b1a3d.js";import"./transition-96405fc3.js";import"./density-a3d9cfab.js";import"./forwardRefs-e658ad70.js";import"./index-1890f982.js";import"./VLocaleProvider-c5fe2840.js";import"./date-76316e65.js";import"./VDefaultsProvider-1e56270a.js";import"./VBtn-1fd3c917.js";import"./variant-c24223ea.js";import"./elevation-a65147a7.js";import"./rounded-c91c5538.js";import"./group-52996811.js";import"./dimensions-bd9ae89e.js";import"./loader-c6765802.js";import"./router-44442b4b.js";import"./index-79d9264f.js";import"./VProgressCircular-de76cad3.js";import"./resizeObserver-1a024aa2.js";import"./FSIcon-de67d9ac.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-d1fccfae.js";import"./VOverlay-bf937035.js";import"./display-5b38d177.js";import"./lazy-550f418a.js";const O=P({name:"FSDateField",components:{FSTextField:B,FSCalendar:z,FSButton:c,FSCard:A,FSCol:m},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:F,blurred:v,getMessages:b}=J(),{epochToLongDateFormat:S}=K(),{getColors:t}=G(),p=t(i.Error),l=t(i.Light),f=t(i.Dark),n=y(!1),s=y(e.modelValue),T=h(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":p.base}:{"--fs-date-field-color":l.dark}),H=h(()=>b(e.modelValue,e.rules));return{ColorEnum:i,innerDate:s,validateOn:F,messages:H,blurred:v,style:T,menu:n,onClear:()=>{r("update:modelValue",null),s.value=null},onSubmit:()=>{r("update:modelValue",s.value),n.value=!1},epochToLongDateFormat:S}}});function _(e,r,F,v,b,S){const t=C("FSCalendar"),p=C("FSCard");return U(),E(X,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[2]||(r[2]=l=>e.menu=l)},{activator:o(({props:l})=>[a(B,M({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=f=>e.blurred=!0)},l),j({"prepend-inner":o(()=>[q(e.$slots,"prepend-inner",{},()=>[a(c,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[L(e.$slots,(f,n)=>({name:n,fn:o(s=>[q(e.$slots,n,N(I(s)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick:clear"])]),default:o(()=>[a(p,{width:"346px",elevation:!0,border:!1},{default:o(()=>[a(m,{width:"fill"},{default:o(()=>[a(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(c,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"])}const g=W(O,[["render",_]]);O.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const _e={title:"Foundation/Shared/Input fields/DateField",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateField:g,FSCol:m},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},u={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:Y}},render:(e,{argTypes:r})=>({components:{FSForm:Z,FSDateField:g,FSCol:m,FSRow:Q},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
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
    </FSForm>`})};var V,D,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var R,$,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    <FSForm v-model="args.valid">
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
    </FSForm>\`
  })
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const xe=["Variations","Rules"];export{u as Rules,d as Variations,xe as __namedExportsOrder,_e as default};
