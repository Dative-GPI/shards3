import{F as l}from"./FSDateRangeField-9fddc0fc.js";import{F as u}from"./FSForm-3e94e06d.js";import{_ as p}from"./FSCol-71088900.js";import{_ as g}from"./FSRow-959288e5.js";import{D as F}from"./rules-4c6d1b70.js";import"./vue.esm-bundler-96d0a5cc.js";import"./FSCalendarTwin-ab80f4f1.js";import"./FSFadeOut-bfd58420.js";import"./css-187645c7.js";import"./useColors-a5c6eb1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c90fedb5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-892461f4.js";import"./FSClickable-3046c0b6.js";import"./FSCard-907ca4bc.js";import"./VProgressCircular-b96acd02.js";import"./color-0e7f3458.js";import"./useRender-864589a6.js";import"./resizeObserver-608b050a.js";import"./VIcon-356fc7cc.js";import"./tag-2ee5b375.js";import"./FSSpan-572d1125.js";import"./useSlots-8f090340.js";import"./FSIcon-1f958509.js";import"./VOverlay-511e4751.js";import"./forwardRefs-e658ad70.js";import"./proxiedModel-80fa8b72.js";import"./border-66fb56b2.js";import"./dimensions-f2761880.js";import"./display-382afec5.js";import"./lazy-e9f80e5f.js";import"./locale-ebcc9fd1.js";import"./router-b0143796.js";import"./transition-2009bd3b.js";import"./VDefaultsProvider-638492ec.js";import"./useTranslations-fea8acd8.js";import"./useAppTimeZone-85e5695a.js";import"./VLocaleProvider-612d6b33.js";import"./date-02a8aada.js";import"./VBtn-502c193f.js";import"./density-9320d724.js";import"./elevation-23c434a7.js";import"./rounded-7d5adaf8.js";import"./group-f931bb93.js";import"./loader-f509b4a4.js";import"./index-b26b5e2a.js";import"./FSTextField-d99708c0.js";import"./useRules-d4bb430c.js";import"./VSpacer-f03e5178.js";import"./VTextField-10bbe6c7.js";import"./VField-12172b20.js";import"./index-09e6aad2.js";import"./VLabel-6f956079.js";import"./VInput-b0770754.js";import"./index-ab6a3e98.js";const Se={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const ye=["Variations","Rules"];export{r as Rules,e as Variations,ye as __namedExportsOrder,Se as default};
