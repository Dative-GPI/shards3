import{F as o}from"./FSTextField-39426dcd.js";import{T as m,F as g}from"./FSForm-f855fd72.js";import{_ as p}from"./FSCol-927ba931.js";import{_ as c}from"./FSRow-632ce14e.js";import"./vue.esm-bundler-37de1696.js";import"./FSSpan-ce1ed5e8.js";import"./useSlots-df9def22.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useRules-724d25b8.js";import"./useColors-ba22af06.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-07d11e72.js";import"./VSpacer-63748a98.js";import"./useRender-ccb83440.js";import"./VTextField-03f06faf.js";import"./VField-83328994.js";import"./index-3a20b1dd.js";import"./transition-4a8f6120.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./VIcon-122293c7.js";import"./color-efc02365.js";import"./tag-9d688242.js";import"./density-ebf3f2c2.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./VDefaultsProvider-062db757.js";import"./forwardRefs-e658ad70.js";import"./index-90c07952.js";import"./useTranslations-eec3878c.js";import"./useAppTimeZone-02cdf7e8.js";import"./css-cb27a64f.js";const Y={title:"Foundation/Shared/Input fields/TextField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(t,{argTypes:l})=>({components:{FSTextField:o,FSCol:p},props:Object.keys(l),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:m}},render:(t,{argTypes:l})=>({components:{FSForm:g,FSTextField:o,FSCol:p,FSRow:c},props:Object.keys(l),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
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
    </FSForm>`})};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,d,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    <FSForm v-model="args.valid">
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
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Z=["Variations","Rules"];export{r as Rules,e as Variations,Z as __namedExportsOrder,Y as default};
