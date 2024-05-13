import{F as l}from"./FSDateRangeField-c2269ac2.js";import{F as u}from"./FSForm-d4cbb727.js";import{_ as p}from"./FSCol-282cc158.js";import{_ as g}from"./FSRow-1508d56d.js";import{D as F}from"./rules-4c5e7e68.js";import"./vue.esm-bundler-41eda46b.js";import"./FSCalendarTwin-80e1914b.js";import"./FSFadeOut-77aed403.js";import"./useDebounce-c713d9ff.js";import"./css-35e8563f.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./VProgressCircular-58a86136.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./FSIcon-713345eb.js";import"./FSText-f60941a6.js";import"./VDialog-ecb58b76.js";import"./VOverlay-ac667fed.js";import"./forwardRefs-e658ad70.js";import"./proxiedModel-03601969.js";import"./loader-e17cf3b4.js";import"./locale-84078765.js";import"./rounded-3de0fd3d.js";import"./dimensions-5b54e342.js";import"./display-4adc39d9.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./transition-695cd20f.js";import"./VDefaultsProvider-7d12961d.js";import"./VSpacer-63a59a9e.js";import"./useTranslations-3bd97805.js";import"./useAppTimeZone-fd64682f.js";import"./VLocaleProvider-19ebddf0.js";import"./date-7367f25a.js";import"./VBtn-66b397c8.js";import"./border-eea26164.js";import"./density-b42ba92f.js";import"./elevation-878f110a.js";import"./group-2589989a.js";import"./index-4ba2035c.js";import"./FSTextField-77636cac.js";import"./VField-c52f5557.js";import"./index-dc0570e5.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";const we={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const fe=["Variations","Rules"];export{r as Rules,e as Variations,fe as __namedExportsOrder,we as default};
