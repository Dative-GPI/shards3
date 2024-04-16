import{F as l}from"./FSDateRangeField-da979836.js";import{D as u,F as g}from"./FSForm-d14890ed.js";import{_ as p}from"./FSCol-417d1c42.js";import{_ as F}from"./FSRow-efd9bf42.js";import"./vue.esm-bundler-9b0e8103.js";import"./FSCalendarTwin-88c41f6c.js";import"./FSButton-c932337d.js";import"./FSClickable-5ad64f7c.js";import"./FSCard-30518430.js";import"./useColors-c8cdc69f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./css-a20776b9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VProgressCircular-a5b71e87.js";import"./color-8a9bca19.js";import"./useRender-7c6c7a38.js";import"./intersectionObserver-569479cd.js";import"./resizeObserver-d1864ccd.js";import"./VIcon-dbd6f8e0.js";import"./tag-6bef4934.js";import"./FSSpan-66c77817.js";import"./useSlots-bfff66e3.js";import"./FSIcon-42763d21.js";import"./VOverlay-b685a01d.js";import"./forwardRefs-e658ad70.js";import"./proxiedModel-bfd89816.js";import"./border-e6ad3d9a.js";import"./dimensions-a3779498.js";import"./display-cd82cc66.js";import"./lazy-9297b748.js";import"./locale-e5242025.js";import"./router-cb82541f.js";import"./transition-6fc66ff9.js";import"./VDefaultsProvider-b110751b.js";import"./useTranslations-8945c1d2.js";import"./useAppTimeZone-7e26f50a.js";import"./VLocaleProvider-d1053338.js";import"./date-2780c143.js";import"./VBtn-6366fd39.js";import"./density-104762f9.js";import"./elevation-9129e0f4.js";import"./rounded-f08b035c.js";import"./group-76451b20.js";import"./loader-ce3d0f3e.js";import"./index-5b7905d8.js";import"./FSTextField-458b2a19.js";import"./useRules-1f7652b9.js";import"./VSpacer-fd2fc595.js";import"./VTextField-abdb6d44.js";import"./VField-0cfa6d9e.js";import"./index-f5f914d5.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./index-d737aecc.js";const be={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:u}},render:(t,{argTypes:o})=>({components:{FSForm:g,FSDateRangeField:l,FSCol:p,FSRow:F},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateRangeField,
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
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      FSDateRangeField,
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
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Se=["Variations","Rules"];export{r as Rules,e as Variations,Se as __namedExportsOrder,be as default};
