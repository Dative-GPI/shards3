import{F as i}from"./FSDateRangeField-04ed7cff.js";import{F as u}from"./FSForm-25bb07d2.js";import{_ as p}from"./FSCol-ff457bc3.js";import{_ as g}from"./FSRow-1d7c2545.js";import{D as F}from"./rules-fd87a465.js";import"./vue.esm-bundler-cd768bc3.js";import"./FSCalendarTwin-ccddfc62.js";import"./FSFadeOut-ad56c427.js";import"./useDebounce-8f204f15.js";import"./css-c2ea3b68.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./VProgressCircular-f6ca2848.js";import"./color-4e667524.js";import"./useRender-b3fd6f8b.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./FSIcon-203715fb.js";import"./FSDialog-7dca5217.js";import"./FSText-92e9b97f.js";import"./VDialog-c1d28576.js";import"./VOverlay-43a7a638.js";import"./forwardRefs-e658ad70.js";import"./proxiedModel-80cf7d0e.js";import"./anchor-9469ffd7.js";import"./dimensions-9d1d90d7.js";import"./display-23d3bc4a.js";import"./lazy-07480c2b.js";import"./locale-d1b7e37d.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./transition-2948fa2b.js";import"./VDefaultsProvider-22eb0e57.js";import"./VSpacer-0c52efc7.js";import"./useTranslations-3c37761e.js";import"./useAppTimeZone-d6a8f46f.js";import"./VLocaleProvider-d5cd746f.js";import"./date-e2599fc4.js";import"./VBtn-c02fe116.js";import"./border-d3eb62c5.js";import"./density-80e773e2.js";import"./elevation-7537bf82.js";import"./rounded-c9c22222.js";import"./group-9e3f1093.js";import"./loader-3bcfb6cd.js";import"./index-f4fa4c36.js";import"./FSTextField-8af1deda.js";import"./VField-d090f013.js";import"./index-055d6469.js";import"./VLabel-a834020c.js";import"./VInput-5fe9e616.js";import"./useRules-bb9e9594.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";const De={title:"Foundation/Shared/Input fields/DateRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateRangeField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const qe=["Variations","Rules"];export{r as Rules,e as Variations,qe as __namedExportsOrder,De as default};
