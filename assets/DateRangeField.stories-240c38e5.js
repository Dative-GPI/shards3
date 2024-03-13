import{F as l}from"./FSDateRangeField-31016505.js";import{D as u,F as g}from"./FSForm-dad81425.js";import{_ as p}from"./FSCol-df85c70b.js";import{_ as F}from"./FSRow-ae483077.js";import"./vue.esm-bundler-72feb788.js";import"./FSCalendarTwin-851a3d06.js";import"./FSButton-ead951eb.js";import"./vue-router-c36f9e85.js";import"./FSCard-619e60a0.js";import"./useColors-6caee65d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-dfac1c87.js";import"./css-a2b3c3ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./FSIcon-072b4761.js";import"./VIcon-7b60b4e1.js";import"./color-20078b56.js";import"./useRender-dfda60e7.js";import"./tag-4c4a02ef.js";import"./VOverlay-d9e6b90e.js";import"./forwardRefs-e658ad70.js";import"./locale-6e33b40c.js";import"./loader-dcf07c4a.js";import"./rounded-98e7d656.js";import"./dimensions-5bfc9d84.js";import"./display-b99e0d28.js";import"./lazy-b3876034.js";import"./router-cb1ba247.js";import"./transition-2c0bfa39.js";import"./VDefaultsProvider-45b29f9e.js";import"./useTranslations-3d964ba1.js";import"./useTimeZone-809ffb6f.js";import"./VLocaleProvider-4afc5824.js";import"./date-8fe42f40.js";import"./VBtn-226d1c53.js";import"./border-0ea674af.js";import"./density-849fb56f.js";import"./elevation-4bc1fa4c.js";import"./group-6fcd4563.js";import"./index-4726a84c.js";import"./VProgressCircular-aa529168.js";import"./resizeObserver-a19810f7.js";import"./FSTextField-a3210dbc.js";import"./VField-127bd01f.js";import"./index-1ae89502.js";import"./VInput-d8a8ef30.js";import"./VSpacer-3481543d.js";import"./VTextField-6c3de945.js";import"./index-2f035a23.js";const ge={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
