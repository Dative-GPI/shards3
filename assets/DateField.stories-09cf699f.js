import{F as l}from"./FSDateField-3bbd1085.js";import{D as u,F as g}from"./FSForm-b2785707.js";import{_ as p}from"./FSCol-5b91b447.js";import{_ as F}from"./FSRow-852c6353.js";import"./vue.esm-bundler-0a1af505.js";import"./FSTextField-8b30e120.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VField-66cf1d8d.js";import"./index-d90e6acb.js";import"./useRender-cc726afb.js";import"./theme-2d24b19c.js";import"./transition-c9646b8b.js";import"./VInput-32e7bd1c.js";import"./locale-767f04a5.js";import"./proxiedModel-7a45f3f8.js";import"./VIcon-a19d44fc.js";import"./color-68d45c69.js";import"./tag-e48f136a.js";import"./density-99d9a31c.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./rounded-94c7156f.js";import"./forwardRefs-e658ad70.js";import"./useColors-b80ccbdd.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-a7d8920b.js";import"./VTextField-bc89db2e.js";import"./index-80f01c5b.js";import"./FSCalendar-09e0d84d.js";import"./FSButton-3fa4cd12.js";import"./vue-router-f60daad6.js";import"./FSCard-933df147.js";import"./css-415780ec.js";import"./VProgressCircular-1c311cd8.js";import"./resizeObserver-86c9045a.js";import"./FSIcon-4f828578.js";import"./useTimeZone-9d6731ed.js";import"./useTranslations-c047d5be.js";import"./VLocaleProvider-6903119a.js";import"./date-46cac397.js";import"./VDefaultsProvider-0c713390.js";import"./VBtn-bd41b5e0.js";import"./border-dd08b1f1.js";import"./elevation-eb45930f.js";import"./group-439abacb.js";import"./dimensions-21b90dfd.js";import"./router-817fd49a.js";import"./index-0339a920.js";import"./VMenu-b8c93ac3.js";import"./VOverlay-30c9fe4b.js";import"./display-b22dea51.js";import"./lazy-298c1133.js";const ce={title:"Foundation/Shared/Input fields/DateField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:u}},render:(t,{argTypes:o})=>({components:{FSForm:g,FSDateField:l,FSCol:p,FSRow:F},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const be=["Variations","Rules"];export{r as Rules,e as Variations,be as __namedExportsOrder,ce as default};
