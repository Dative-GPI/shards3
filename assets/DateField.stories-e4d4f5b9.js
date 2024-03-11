import{F as l}from"./FSDateField-a3275048.js";import{D as u,F as g}from"./FSForm-6f7b1a67.js";import{_ as p}from"./FSCol-7c29272b.js";import{_ as F}from"./FSRow-db172e67.js";import"./vue.esm-bundler-7e157d2d.js";import"./FSTextField-f103263d.js";import"./FSSpan-225601c1.js";import"./useSlots-db3342e3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VField-483d98e3.js";import"./index-bda29209.js";import"./useRender-91b27a68.js";import"./theme-67ffe9ae.js";import"./transition-b4c159ac.js";import"./VInput-1a2cc3a3.js";import"./locale-c9528b1a.js";import"./VIcon-f6cc7834.js";import"./color-e501cff3.js";import"./tag-831e49a1.js";import"./density-c657e4cb.js";import"./loader-7867d039.js";import"./rounded-fe596c98.js";import"./forwardRefs-e658ad70.js";import"./useColors-4000b712.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VSpacer-5057dcd1.js";import"./VTextField-85193af7.js";import"./index-37e9655b.js";import"./FSCalendar-5a91b3ed.js";import"./FSButton-e381f01a.js";import"./FSCard-38a28c75.js";import"./css-b03ad87d.js";import"./FSIcon-0a8a35f6.js";import"./useTimeZone-3e466d1a.js";import"./useTranslations-cd0b055a.js";import"./VLocaleProvider-451a5b07.js";import"./date-c5308bd2.js";import"./VDefaultsProvider-dcab85c0.js";import"./VBtn-ca188bc5.js";import"./border-a826ffcd.js";import"./elevation-7fca9761.js";import"./group-5cfad0cd.js";import"./dimensions-a1a728d7.js";import"./router-cc531cb0.js";import"./index-feab7f97.js";import"./VProgressCircular-b2622fdf.js";import"./resizeObserver-8feda973.js";import"./VMenu-047a272f.js";import"./VOverlay-91bdeda0.js";import"./display-84f7fe10.js";import"./lazy-55c06103.js";const ge={title:"Foundation/Shared/Input fields/DateField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Fe=["Variations","Rules"];export{r as Rules,e as Variations,Fe as __namedExportsOrder,ge as default};
