import{F as i}from"./FSDateTimeField-e70f3e76.js";import{F as u}from"./FSForm-1e605dfa.js";import{_ as p}from"./FSCol-44fe82a9.js";import{_ as g}from"./FSRow-753b58e5.js";import{D as F}from"./rules-6b720936.js";import"./vue.esm-bundler-838daa40.js";import"./FSDialogMenu-0e4010b4.js";import"./FSCard-1b892764.js";import"./useColors-4ac7c452.js";import"./_commonjsHelpers-de833af9.js";import"./index-2f699bdb.js";import"./theme-f9f3e2d4.js";import"./css-67cfec15.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./forwardRefs-e658ad70.js";import"./useRender-f6a4770d.js";import"./proxiedModel-3239cc3c.js";import"./anchor-dbd6e54f.js";import"./color-3e53cf3d.js";import"./dimensions-be952165.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./locale-5633e5ee.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./transition-ee4dd36d.js";import"./VDefaultsProvider-a165414e.js";import"./FSTextField-55dfca8e.js";import"./VField-b386f766.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./index-6fa9bdc1.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./rounded-94d04543.js";import"./FSButton-255c9a8d.js";import"./FSClickable-5b3f625e.js";import"./FSIcon-f74a02b4.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./FSCalendar-706fa62d.js";import"./useAppTimeZone-a305acc7.js";import"./useTranslations-419c1021.js";import"./VLocaleProvider-31d8514e.js";import"./date-513bc6d0.js";import"./VBtn-a5dad0d3.js";import"./border-749eb26c.js";import"./elevation-c2192325.js";import"./group-d31dd239.js";import"./index-a755b9d6.js";import"./FSWindow-6f1357d0.js";import"./ssrBoot-00bf1891.js";import"./FSClock-dfba5858.js";import"./FSSlider-948483a4.js";import"./VSlider-0790ba2e.js";import"./VMenu-ec057191.js";const qe={title:"Foundation/Shared/Input fields/DateTimeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateTimeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const xe=["Variations","Rules"];export{r as Rules,e as Variations,xe as __namedExportsOrder,qe as default};
