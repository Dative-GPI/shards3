import{F as i}from"./FSDateField-27088ecc.js";import{F as u}from"./FSForm-186f0464.js";import{_ as p}from"./FSCol-439c812a.js";import{_ as g}from"./FSRow-e30f1dcc.js";import{D as F}from"./rules-bc7b0528.js";import"./vue.esm-bundler-857e5af7.js";import"./FSDialogMenu-b044c7fa.js";import"./FSCard-e175fef9.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./css-ab2bdb81.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDialog-443e0499.js";import"./VOverlay-e7c006b1.js";import"./forwardRefs-e658ad70.js";import"./useRender-1606c976.js";import"./proxiedModel-c6c1514f.js";import"./loader-c881e63b.js";import"./color-3025502c.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./VIcon-77d6c341.js";import"./tag-41ce785e.js";import"./locale-54c2c8ba.js";import"./rounded-751db039.js";import"./dimensions-946cb0c4.js";import"./display-cdda29b9.js";import"./lazy-414691fc.js";import"./router-8ce361c1.js";import"./scopeId-f802239b.js";import"./transition-8ae71e6c.js";import"./VDefaultsProvider-e6a6e57a.js";import"./FSTextField-4b6701c3.js";import"./VField-05970d63.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./VSpacer-2ef0dee2.js";import"./index-900eb6c5.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./density-9a54c498.js";import"./FSButton-0aa1c2d4.js";import"./FSClickable-450f52d6.js";import"./FSIcon-d0ab000b.js";import"./useRules-b3d475c7.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./FSCalendar-bab45e68.js";import"./useAppTimeZone-43dfb0bc.js";import"./useTranslations-4ae50e1a.js";import"./VLocaleProvider-822f6a17.js";import"./date-4b754d6d.js";import"./VBtn-cc1ad22a.js";import"./border-adb63d5e.js";import"./elevation-c9d86896.js";import"./group-db11312a.js";import"./index-1a539509.js";import"./VMenu-1d4626f8.js";const we={title:"Foundation/Shared/Input fields/DateField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
