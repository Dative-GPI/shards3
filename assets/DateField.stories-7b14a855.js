import{F as i}from"./FSDateField-862532bb.js";import{F as u}from"./FSForm-836a750d.js";import{_ as p}from"./FSCol-c97fad61.js";import{_ as g}from"./FSRow-83e75060.js";import{D as F}from"./rules-3f73eb92.js";import"./vue.esm-bundler-01006032.js";import"./FSDialogMenu-aa70b58d.js";import"./FSCard-8fcd8e1e.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./css-279a0029.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDialog-7227fab4.js";import"./VOverlay-d4d3a71f.js";import"./forwardRefs-e658ad70.js";import"./useRender-4bcbb6ac.js";import"./proxiedModel-69023448.js";import"./anchor-1cd9d9ab.js";import"./color-8c62b342.js";import"./dimensions-4232d0fa.js";import"./display-77f43728.js";import"./lazy-d0bac168.js";import"./locale-903ef8d8.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./transition-9c7eb302.js";import"./VDefaultsProvider-d99c6ff5.js";import"./FSTextField-4ac67195.js";import"./VField-f1a9daf9.js";import"./FSSpan-6e79caf3.js";import"./useSlots-e0d7ab7c.js";import"./VSpacer-78b81ef3.js";import"./index-491d6eb9.js";import"./VLabel-f27c70ae.js";import"./VInput-50bb839f.js";import"./VIcon-17be8ae5.js";import"./tag-1f5f74bd.js";import"./density-d09a1492.js";import"./loader-878147ed.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./rounded-9001edc0.js";import"./FSButton-be94d44f.js";import"./FSClickable-a0c1e9ef.js";import"./FSIcon-15b738c8.js";import"./useRules-54978858.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./FSCalendar-ba8e4611.js";import"./useAppTimeZone-14b58e87.js";import"./useTranslations-e38f43a5.js";import"./VLocaleProvider-8d2dae90.js";import"./date-065dc41c.js";import"./VBtn-dbaccc27.js";import"./border-10554549.js";import"./elevation-28c6fd5f.js";import"./group-e9c3615d.js";import"./index-89394051.js";import"./VMenu-4c05ddd6.js";const fe={title:"Foundation/Shared/Input fields/DateField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const De=["Variations","Rules"];export{r as Rules,e as Variations,De as __namedExportsOrder,fe as default};
