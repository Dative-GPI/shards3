import{F as i}from"./FSDateField-0708031a.js";import{F as u}from"./FSForm-17213632.js";import{_ as p}from"./FSCol-606e8271.js";import{_ as g}from"./FSRow-76f4ad1e.js";import{D as F}from"./rules-78f81f7e.js";import"./vue.esm-bundler-f632b118.js";import"./FSDialogMenu-7826371b.js";import"./FSCard-75477b2b.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./css-185b4786.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./forwardRefs-e658ad70.js";import"./useRender-7972ae0c.js";import"./proxiedModel-f3c71c8a.js";import"./anchor-c0c71d87.js";import"./color-1b8c6bf4.js";import"./dimensions-44367821.js";import"./display-219b55f3.js";import"./lazy-2bcc6dac.js";import"./locale-b2746b51.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./transition-8112e83c.js";import"./VDefaultsProvider-7c3b8e30.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./VSpacer-e4feda29.js";import"./index-6e5ff885.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./VIcon-c02af0e0.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./rounded-ce7e598f.js";import"./FSButton-1e8cfafa.js";import"./FSClickable-af644c0d.js";import"./FSIcon-110a991e.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./FSCalendar-83dee56c.js";import"./useAppTimeZone-3909e5e4.js";import"./useTranslations-f6aba3ae.js";import"./VLocaleProvider-e50c847a.js";import"./date-3c28f8a9.js";import"./VBtn-2954513d.js";import"./border-462a71d7.js";import"./elevation-cd810633.js";import"./group-e84b8205.js";import"./index-131c488a.js";import"./VMenu-99bc218e.js";const we={title:"Foundation/Shared/Input fields/DateField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const fe=["Variations","Rules"];export{r as Rules,e as Variations,fe as __namedExportsOrder,we as default};
