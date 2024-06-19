import{_ as o}from"./FSTextField-3d775cb5.js";import{F as u}from"./FSForm-f0ef5762.js";import{_ as m}from"./FSCol-e45ac157.js";import{_ as g}from"./FSRow-821d23a1.js";import{T as c}from"./rules-e7ffbedb.js";import"./vue.esm-bundler-a0893183.js";import"./VField-c7486719.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./FSIcon-9d61ed62.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./useAppTimeZone-d7f3e4a5.js";import"./useTranslations-95b4a686.js";const oe={title:"Foundation/Shared/Input fields/TextField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(t,{argTypes:l})=>({components:{FSTextField:o,FSCol:m},props:Object.keys(l),setup(){return{...t}},template:`
    <FSCol>
      <FSTextField
        label="Text"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Required text, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Uneditable text, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:c}},render:(t,{argTypes:l})=>({components:{FSForm:u,FSTextField:o,FSCol:m,FSRow:g},props:Object.keys(l),setup(){return{...t}},template:`
    <FSForm v-model="args.valid" variant="standard">
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
    </FSForm>`})};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi"
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
        label="Text"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Required text, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Uneditable text, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      FSForm,
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
    <FSForm v-model="args.valid" variant="standard">
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
    </FSForm>\`
  })
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const ae=["Variations","Rules"];export{r as Rules,e as Variations,ae as __namedExportsOrder,oe as default};
