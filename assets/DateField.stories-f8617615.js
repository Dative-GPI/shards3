import{F as l}from"./FSDateField-7327540d.js";import{D as u,F as g}from"./FSForm-dad81425.js";import{_ as p}from"./FSCol-df85c70b.js";import{_ as F}from"./FSRow-ae483077.js";import"./vue.esm-bundler-72feb788.js";import"./FSTextField-a3210dbc.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VField-127bd01f.js";import"./index-1ae89502.js";import"./useRender-dfda60e7.js";import"./theme-dfac1c87.js";import"./transition-2c0bfa39.js";import"./VInput-d8a8ef30.js";import"./locale-6e33b40c.js";import"./VIcon-7b60b4e1.js";import"./color-20078b56.js";import"./tag-4c4a02ef.js";import"./density-849fb56f.js";import"./loader-dcf07c4a.js";import"./rounded-98e7d656.js";import"./forwardRefs-e658ad70.js";import"./useColors-6caee65d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-3481543d.js";import"./VTextField-6c3de945.js";import"./index-2f035a23.js";import"./FSCalendar-2b4bbae6.js";import"./FSButton-ead951eb.js";import"./vue-router-c36f9e85.js";import"./FSCard-619e60a0.js";import"./css-a2b3c3ca.js";import"./FSIcon-072b4761.js";import"./useTimeZone-809ffb6f.js";import"./useTranslations-3d964ba1.js";import"./VLocaleProvider-4afc5824.js";import"./date-8fe42f40.js";import"./VDefaultsProvider-45b29f9e.js";import"./VBtn-226d1c53.js";import"./border-0ea674af.js";import"./elevation-4bc1fa4c.js";import"./group-6fcd4563.js";import"./dimensions-5bfc9d84.js";import"./router-cb1ba247.js";import"./index-4726a84c.js";import"./VProgressCircular-aa529168.js";import"./resizeObserver-a19810f7.js";import"./VMenu-b3b1ac01.js";import"./VOverlay-d9e6b90e.js";import"./display-b99e0d28.js";import"./lazy-b3876034.js";const Fe={title:"Foundation/Shared/Input fields/DateField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const ve=["Variations","Rules"];export{r as Rules,e as Variations,ve as __namedExportsOrder,Fe as default};
