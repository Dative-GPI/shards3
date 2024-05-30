import{F as i}from"./FSDateTimeField-7bdd289b.js";import{F as u}from"./FSForm-2d7638c3.js";import{_ as p}from"./FSCol-ff457bc3.js";import{_ as g}from"./FSRow-1d7c2545.js";import{D as F}from"./rules-fd87a465.js";import"./vue.esm-bundler-cd768bc3.js";import"./FSDialogMenu-f482605f.js";import"./FSCard-0de7b634.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./css-c2ea3b68.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDialog-8ace1c67.js";import"./VOverlay-5f00a78b.js";import"./forwardRefs-e658ad70.js";import"./useRender-d216bc3f.js";import"./proxiedModel-80cf7d0e.js";import"./anchor-9469ffd7.js";import"./color-4e667524.js";import"./dimensions-9d1d90d7.js";import"./display-23d3bc4a.js";import"./lazy-07480c2b.js";import"./locale-d1b7e37d.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./transition-2948fa2b.js";import"./VDefaultsProvider-ff78bc14.js";import"./FSTextField-1c3f111c.js";import"./VField-4a160336.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./VSpacer-a30a0a7c.js";import"./index-b97c70d5.js";import"./VLabel-ac265b88.js";import"./VInput-28424714.js";import"./VIcon-95cdbe21.js";import"./tag-f5ad2c5e.js";import"./density-80e773e2.js";import"./loader-e29f326e.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./rounded-c9c22222.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSIcon-5671b33c.js";import"./useRules-bb9e9594.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./FSCalendar-52261eac.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";import"./VLocaleProvider-bb4fb764.js";import"./date-e2599fc4.js";import"./VBtn-df7c9712.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./group-9e3f1093.js";import"./index-f4fa4c36.js";import"./FSWindow-94e062cf.js";import"./ssrBoot-a9e4f1d0.js";import"./FSClock-30da2200.js";import"./FSSlider-f977766e.js";import"./VSlider-d1ff3fb5.js";import"./VMenu-2bc21026.js";const xe={title:"Foundation/Shared/Input fields/DateTimeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateTimeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateTimeField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
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
      FSDateTimeField,
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
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
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
      FSDateTimeField,
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
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["Variations","Rules"];export{r as Rules,e as Variations,Ce as __namedExportsOrder,xe as default};
