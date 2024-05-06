import{F as l}from"./FSDateRangeField-3d854a52.js";import{F as u}from"./FSForm-45d9cda9.js";import{_ as p}from"./FSCol-5731c3c4.js";import{_ as g}from"./FSRow-5edf997c.js";import{D as F}from"./rules-72533546.js";import"./vue.esm-bundler-3416a090.js";import"./FSCalendarTwin-309ed1f4.js";import"./FSFadeOut-8955926a.js";import"./useDebounce-736cfd0a.js";import"./css-69ed11d9.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./VProgressCircular-22b061ae.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./FSIcon-f518d728.js";import"./VDialog-601b035f.js";import"./VOverlay-61ba3ae0.js";import"./forwardRefs-e658ad70.js";import"./proxiedModel-868611da.js";import"./loader-b2c56b78.js";import"./locale-be130c16.js";import"./rounded-e101edac.js";import"./dimensions-97f2f62c.js";import"./display-00a40b50.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./transition-6086c96b.js";import"./VDefaultsProvider-ef2fd514.js";import"./useTranslations-ff263049.js";import"./useAppTimeZone-045fd735.js";import"./VLocaleProvider-3cd90636.js";import"./date-29e3b2ba.js";import"./VBtn-f59107e2.js";import"./border-1657a325.js";import"./density-174ddef7.js";import"./elevation-9288a0e5.js";import"./group-f3cba4ff.js";import"./index-a9118fe7.js";import"./FSTextField-bb895cdf.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./index-46378e0b.js";import"./VLabel-793ed17d.js";import"./VInput-77c4eaa4.js";import"./useRules-5e1988ee.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";const Re={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateRangeField:l,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const he=["Variations","Rules"];export{r as Rules,e as Variations,he as __namedExportsOrder,Re as default};
