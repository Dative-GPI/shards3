import{F as l}from"./FSDateRangeField-81798f77.js";import{D as u,F as g}from"./FSForm-11d0938b.js";import{_ as p}from"./FSCol-caf5d8c8.js";import{_ as F}from"./FSRow-120b21e0.js";import"./vue.esm-bundler-85c2ade9.js";import"./FSCalendarTwin-4f7746d8.js";import"./FSButton-571eabbd.js";import"./vue-router-d81a5c9d.js";import"./FSCard-18b81b74.js";import"./useColors-4bd4e66b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-0475544b.js";import"./css-b4ee648a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSSpan-abd71399.js";import"./useSlots-58887162.js";import"./FSIcon-d4b06799.js";import"./VIcon-96eed797.js";import"./color-680672dd.js";import"./useRender-22e01882.js";import"./tag-fd98b684.js";import"./VOverlay-e74fafd8.js";import"./forwardRefs-e658ad70.js";import"./locale-cdd955a4.js";import"./loader-c17713e4.js";import"./rounded-7d023c25.js";import"./dimensions-7d06aea5.js";import"./display-d8c4b624.js";import"./lazy-4beaa7f3.js";import"./router-dfa38ec1.js";import"./transition-0e35e3a5.js";import"./VDefaultsProvider-5f610042.js";import"./useTranslations-93c8b8c9.js";import"./useTimeZone-d58059fa.js";import"./VLocaleProvider-5f2bb9ba.js";import"./date-9290bff4.js";import"./VBtn-aa5927a3.js";import"./border-dbc038b8.js";import"./density-1bef1032.js";import"./elevation-e7838e5f.js";import"./group-627b1a66.js";import"./index-91896434.js";import"./VProgressCircular-c268a248.js";import"./resizeObserver-cbbc033b.js";import"./FSTextField-5649ea31.js";import"./VField-3df13f61.js";import"./index-0b62f442.js";import"./VInput-9ba9caf6.js";import"./VSpacer-fb9707dd.js";import"./VTextField-b1504f7b.js";import"./index-160e8c08.js";const ge={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Fe=["Variations","Rules"];export{r as Rules,e as Variations,Fe as __namedExportsOrder,ge as default};
