import{F as a}from"./FSTextField-525dcab2.js";import{_ as m}from"./FSCol-73c0912e.js";import{_ as p}from"./FSRow-adbe3642.js";import{T as g,V as c}from"./FSTextFields-01d4cdfb.js";import"./vue.esm-bundler-722d5586.js";import"./useTimeZone-e2d91037.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-25dfede3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VSpacer-14789593.js";import"./VIcon-3294e246.js";import"./VField-ef78f264.js";import"./index-debb29c6.js";import"./VInput-157b0d5f.js";import"./locale-4b40caf6.js";import"./rounded-0d60e9e4.js";import"./loader-40ab58f6.js";const U={title:"Foundation/Shared/Input fields/TextField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:null,value4:"General Kenobi"}},render:(l,{argTypes:t})=>({components:{FSTextField:a,FSCol:m},props:Object.keys(t),setup(){return{...l}},template:`
    <FSCol>
      <FSTextField
        label="Text - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        color="primary"
        label="Text - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        color="warning" :required="true"
        label="Required text - warning color"
        description="Description for this field"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:g}},render:(l,{argTypes:t})=>({components:{VForm:c,FSTextField:a,FSCol:m,FSRow:p},props:Object.keys(t),setup(){return{...l}},template:`
    <v-form v-model="args.valid" v-lazy>
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: null,
      value4: "General Kenobi"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextField,
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
      <FSTextField
        label="Text - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        color="primary"
        label="Text - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        color="warning" :required="true"
        label="Required text - warning color"
        description="Description for this field"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,d,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VForm,
      FSTextField,
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
        <FSTextField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Variations","Rules"];export{r as Rules,e as Variations,z as __namedExportsOrder,U as default};
