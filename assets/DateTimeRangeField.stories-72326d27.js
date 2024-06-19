import{F as i}from"./FSDateTimeRangeField-8db484ae.js";import{F as u}from"./FSForm-f0ef5762.js";import{_ as p}from"./FSCol-e45ac157.js";import{_ as g}from"./FSRow-821d23a1.js";import{D as F}from"./rules-e7ffbedb.js";import"./vue.esm-bundler-a0893183.js";import"./FSDialogSubmit-f0b9b855.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./css-03aed76d.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./VProgressCircular-94f3850c.js";import"./color-d0fba9db.js";import"./useRender-13ac3742.js";import"./resizeObserver-7a348d53.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./FSIcon-9d61ed62.js";import"./FSDialog-c8c50bef.js";import"./FSText-46c134d7.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./forwardRefs-e658ad70.js";import"./proxiedModel-59232916.js";import"./anchor-155e2782.js";import"./dimensions-b1078284.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./locale-ece9a1bb.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./transition-36d39bce.js";import"./VDefaultsProvider-c4e19f1a.js";import"./VSpacer-b1094f09.js";import"./useTranslations-95b4a686.js";import"./FSCalendarTwin-37ba6f2a.js";import"./useAppTimeZone-d7f3e4a5.js";import"./VLocaleProvider-722b4423.js";import"./date-3a0265c8.js";import"./VBtn-f8320e3a.js";import"./border-ca0badc6.js";import"./density-fc3376dc.js";import"./elevation-7d7e39c3.js";import"./rounded-4c492e72.js";import"./group-0833c323.js";import"./loader-4af36e99.js";import"./index-8d9a280b.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./index-ec7e733e.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./FSClock-a50b14f0.js";import"./FSSlider-ad9cae7f.js";import"./VSlider-dd82cf9d.js";const xe={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Uneditable date & time range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateTimeRangeField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
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
      FSDateTimeRangeField,
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
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Uneditable date & time range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      FSDateTimeRangeField,
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
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["Variations","Rules"];export{r as Rules,e as Variations,Ce as __namedExportsOrder,xe as default};
