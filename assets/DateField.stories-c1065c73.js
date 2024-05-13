import{F as i}from"./FSDateField-30360bdf.js";import{F as u}from"./FSForm-bc36c845.js";import{_ as p}from"./FSCol-282cc158.js";import{_ as g}from"./FSRow-1508d56d.js";import{D as F}from"./rules-4c5e7e68.js";import"./vue.esm-bundler-41eda46b.js";import"./FSDialogMenu-848f1e87.js";import"./FSCard-5c9795f4.js";import"./useColors-c7c61044.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-720d9fd7.js";import"./css-35e8563f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDialog-84dcd607.js";import"./VOverlay-d8fd5084.js";import"./forwardRefs-e658ad70.js";import"./useRender-55bb8ab6.js";import"./proxiedModel-a34e17b7.js";import"./loader-0baaac91.js";import"./color-92f22fcc.js";import"./VProgressCircular-9cdac648.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./locale-850d67a0.js";import"./rounded-e85715e4.js";import"./dimensions-9ac12c80.js";import"./display-a55575e0.js";import"./lazy-5500c0d6.js";import"./router-4498b821.js";import"./scopeId-862e559a.js";import"./transition-a4f3f1b4.js";import"./VDefaultsProvider-b40931ed.js";import"./FSTextField-037d24b6.js";import"./VField-095c5517.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./VSpacer-19440644.js";import"./index-3d73431e.js";import"./VLabel-484dc627.js";import"./VInput-8f2c12b1.js";import"./density-a7a72377.js";import"./FSButton-6f4c5e31.js";import"./FSClickable-25f814f4.js";import"./FSIcon-33b1b769.js";import"./useRules-d33c1ab7.js";import"./VTextField-459f9fbf.js";import"./index-8f606737.js";import"./FSCalendar-6729df63.js";import"./useAppTimeZone-fd64682f.js";import"./useTranslations-3bd97805.js";import"./VLocaleProvider-9c4fc8c6.js";import"./date-9683da89.js";import"./VBtn-3461afbb.js";import"./border-ac5393da.js";import"./elevation-c799c3f5.js";import"./group-4938f20b.js";import"./index-1668950c.js";import"./VMenu-9445716e.js";const we={title:"Foundation/Shared/Input fields/DateField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const fe=["Variations","Rules"];export{r as Rules,e as Variations,fe as __namedExportsOrder,we as default};
