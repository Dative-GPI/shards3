import{F as i}from"./FSNumberField-3cde434e.js";import{F as p}from"./FSForm-186f0464.js";import{_ as u}from"./FSCol-439c812a.js";import{_ as g}from"./FSRow-e30f1dcc.js";import{N as b}from"./rules-bc7b0528.js";import"./vue.esm-bundler-857e5af7.js";import"./FSTextField-4b6701c3.js";import"./VField-05970d63.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./VSpacer-2ef0dee2.js";import"./useRender-1606c976.js";import"./index-900eb6c5.js";import"./transition-8ae71e6c.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./VIcon-77d6c341.js";import"./color-3025502c.js";import"./tag-41ce785e.js";import"./density-9a54c498.js";import"./dimensions-946cb0c4.js";import"./loader-c881e63b.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./rounded-751db039.js";import"./VDefaultsProvider-e6a6e57a.js";import"./forwardRefs-e658ad70.js";import"./FSButton-0aa1c2d4.js";import"./FSClickable-450f52d6.js";import"./FSCard-e175fef9.js";import"./css-ab2bdb81.js";import"./FSIcon-d0ab000b.js";import"./useRules-b3d475c7.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./useTranslations-4ae50e1a.js";import"./useAppTimeZone-43dfb0bc.js";const le={title:"Foundation/Shared/Input fields/NumberField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:500,value3:1500}},render:(t,{argTypes:o})=>({components:{FSNumberField:i,FSCol:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:0,value2:500,value3:1500,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:p,FSNumberField:i,FSCol:u,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var l,n,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const ne=["Variations","Rules"];export{r as Rules,e as Variations,ne as __namedExportsOrder,le as default};
