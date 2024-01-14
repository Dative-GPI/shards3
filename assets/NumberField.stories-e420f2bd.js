import{n as F,q as y,u as S,L as q,M as N,G as h,v as w,x as C,y as R,z as V}from"./vue.esm-bundler-722d5586.js";import{C as x}from"./useTimeZone-e2d91037.js";import{F as g}from"./FSTextField-525dcab2.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as v}from"./FSCol-73c0912e.js";import{_ as k}from"./FSRow-adbe3642.js";import{N as _,V as B}from"./FSTextFields-01d4cdfb.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-25dfede3.js";import"./VSpacer-14789593.js";import"./VIcon-3294e246.js";import"./VField-ef78f264.js";import"./index-debb29c6.js";import"./VInput-157b0d5f.js";import"./locale-4b40caf6.js";import"./rounded-0d60e9e4.js";import"./loader-40ab58f6.js";const c=F({name:"FSNumberField",components:{FSTextField:g},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:x.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"]});function T(e,r,O,U,j,z){var t;return y(),S(g,h({type:"number",label:e.$props.label,description:e.$props.description,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,modelValue:(t=e.$props.modelValue)==null?void 0:t.toString(),"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",isNaN(parseFloat(o))?0:parseFloat(o)))},e.$attrs),q({_:2},[N(e.$slots,(o,s)=>({name:s,fn:w(f=>[C(e.$slots,s,R(V(f)))])}))]),1040,["label","description","color","required","editable","modelValue"])}const n=$(c,[["render",T]]);c.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSNumberField.vue"]};const le={title:"Foundation/Shared/Input fields/NumberField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:500,value3:null,value4:1500}},render:(e,{argTypes:r})=>({components:{FSNumberField:n,FSCol:v},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSNumberField
        label="Number - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        color="primary"
        label="Number - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        color="warning"
        label="Required number - warning color"
        description="Description for this field"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},a={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:_}},render:(e,{argTypes:r})=>({components:{VForm:B,FSNumberField:n,FSCol:v,FSRow:k},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid" v-lazy>
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: max 10"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10 & integer"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.integer()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`})};var d,i,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 500,
      value3: null,
      value4: 1500
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSNumberField,
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
      <FSNumberField
        label="Number - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        color="primary"
        label="Number - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        color="warning"
        label="Required number - warning color"
        description="Description for this field"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(u=(i=l.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,p,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: NumberRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VForm,
      FSNumberField,
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
    <v-form v-model="args.valid" v-lazy>
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: max 10"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10 & integer"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.integer()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const ae=["Variations","Rules"];export{a as Rules,l as Variations,ae as __namedExportsOrder,le as default};
