import{D as c,G as y,H as S,W as h,U as q,y as N,I as w,L as R,O as V,P as C}from"./vue.esm-bundler-17cb12ce.js";import{F as g}from"./FSTextField-867bbd59.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as f}from"./FSCol-03fc1f3a.js";import{_ as x}from"./FSRow-9ce6aace.js";import{N as k}from"./rules-8f4289e2.js";import{V as _}from"./VForm-59ed5e27.js";import"./useColors-04b7b26f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c4ac2200.js";import"./FSSpan-2051def6.js";import"./VSpacer-bacd1ff2.js";import"./color-d421c344.js";import"./VTextField-99deef4a.js";import"./VField-d3cacb6a.js";import"./index-c6c13bcc.js";import"./transition-4d995a4a.js";import"./VInput-9e5eb041.js";import"./locale-2e51016c.js";import"./VIcon-343130ca.js";import"./density-cdecea01.js";import"./loader-8675b45d.js";import"./rounded-d330abbe.js";import"./forwardRefs-e658ad70.js";import"./index-c7efe106.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";const v=c({name:"FSNumberField",components:{FSTextField:g},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"]});function H(e,r,O,T,U,B){var n;return y(),S(g,N({type:"number",label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,modelValue:(n=e.$props.modelValue)==null?void 0:n.toString(),"onUpdate:modelValue":r[0]||(r[0]=t=>e.$emit("update:modelValue",isNaN(parseFloat(t))?0:parseFloat(t)))},e.$attrs),h({_:2},[q(e.$slots,(t,s)=>({name:s,fn:w(F=>[R(e.$slots,s,V(C(F)))])}))]),1040,["label","description","hideHeader","required","editable","modelValue"])}const o=$(v,[["render",H]]);v.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSNumberField.vue"]};const pe={title:"Foundation/Shared/Input fields/NumberField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:500,value3:1500}},render:(e,{argTypes:r})=>({components:{FSNumberField:o,FSCol:f},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSNumberField
        label="Number"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Required number, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Uneditable number, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},a={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:k}},render:(e,{argTypes:r})=>({components:{VForm:_,FSNumberField:o,FSCol:f,FSRow:x},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
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
    </v-form>`})};var i,d,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 500,
      value3: 1500
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
        label="Number"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Required number, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Uneditable number, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    <v-form v-model="args.valid">
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
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const be=["Variations","Rules"];export{a as Rules,l as Variations,be as __namedExportsOrder,pe as default};
