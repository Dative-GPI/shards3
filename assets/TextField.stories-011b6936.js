import{F as o}from"./FSTextField-77636cac.js";import{F as u}from"./FSForm-d4cbb727.js";import{_ as m}from"./FSCol-282cc158.js";import{_ as g}from"./FSRow-1508d56d.js";import{T as c}from"./rules-4c5e7e68.js";import"./vue.esm-bundler-41eda46b.js";import"./VField-c52f5557.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./VSpacer-63a59a9e.js";import"./useRender-dd35ddd1.js";import"./index-dc0570e5.js";import"./transition-695cd20f.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./tag-64b4b0e7.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./loader-e17cf3b4.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./css-35e8563f.js";import"./FSIcon-713345eb.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./useTranslations-3bd97805.js";import"./useAppTimeZone-fd64682f.js";const oe={title:"Foundation/Shared/Input fields/TextField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(t,{argTypes:l})=>({components:{FSTextField:o,FSCol:m},props:Object.keys(l),setup(){return{...t}},template:`
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
    </FSForm>`})};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
