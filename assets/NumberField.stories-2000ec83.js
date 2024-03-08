import{F as l}from"./FSNumberField-dc862499.js";import{N as p,F as g}from"./FSForm-48ceba41.js";import{_ as u}from"./FSCol-07ad80b8.js";import{_ as b}from"./FSRow-e442cab6.js";import"./vue.esm-bundler-588e96c7.js";import"./FSTextField-11217dd5.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VField-98fe1be9.js";import"./index-5292658a.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./transition-28907f24.js";import"./VInput-4a9e0385.js";import"./locale-56b7257e.js";import"./VIcon-56fbcc42.js";import"./density-79e1d57e.js";import"./loader-b5f87c49.js";import"./rounded-ef9fdb42.js";import"./forwardRefs-e658ad70.js";import"./useColors-0a17cef8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-18a01036.js";import"./VTextField-9257e797.js";import"./index-c8d171e2.js";import"./useTimeZone-b2704403.js";import"./useTranslations-d310d0e5.js";import"./css-50f0aa1d.js";const L={title:"Foundation/Shared/Input fields/NumberField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:500,value3:1500}},render:(t,{argTypes:o})=>({components:{FSNumberField:l,FSCol:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:0,value2:500,value3:1500,rules:p}},render:(t,{argTypes:o})=>({components:{FSForm:g,FSNumberField:l,FSCol:u,FSRow:b},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
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
    </FSForm>`})};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: 0,
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,a,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: 0,
      value2: 500,
      value3: 1500,
      rules: NumberRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
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
    <FSForm v-model="args.valid">
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
    </FSForm>\`
  })
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const M=["Variations","Rules"];export{r as Rules,e as Variations,M as __namedExportsOrder,L as default};
