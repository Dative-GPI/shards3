import{F as o}from"./FSTagField-3c155ac6.js";import{F as g}from"./FSForm-1e605dfa.js";import{_ as p}from"./FSCol-44fe82a9.js";import{_ as u}from"./FSRow-753b58e5.js";import{T as v}from"./rules-6b720936.js";import"./vue.esm-bundler-838daa40.js";import"./FSTextField-8a8a58fd.js";import"./VField-47939064.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-9d29fce3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-8a94f710.js";import"./FSClickable-80b82e76.js";import"./FSCard-e5e470ea.js";import"./css-67cfec15.js";import"./FSIcon-212b990d.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./FSTagGroup-dd842bac.js";import"./FSWrapGroup-8fd0c06f.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./display-ba09a035.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSSlideGroup-0181fe8e.js";import"./FSTag-d96d667c.js";import"./VBtn-a5dad0d3.js";import"./border-749eb26c.js";import"./elevation-c2192325.js";import"./router-d69bdbea.js";import"./index-a755b9d6.js";import"./useAppTimeZone-a305acc7.js";import"./useTranslations-419c1021.js";const yr={title:"Foundation/Shared/Input fields/TagField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(t,{argTypes:a})=>({components:{FSTagField:o,FSCol:p},props:Object.keys(a),setup(){return{...t}},template:`
    <FSCol>
      <FSTagField
        label="Tag, full, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, primary color"
        tagVariant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Uneditable tag, full, error color, width description"
        description="Uneditable description"
        tagColor="error"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:v}},render:(t,{argTypes:a})=>({components:{FSForm:g,FSTagField:o,FSCol:p,FSRow:u},props:Object.keys(a),setup(){return{...t}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: ["full", "tag", "variant"],
      value2: ["standard", "tag", "variant"],
      value3: [],
      value4: ["thou", "shalt", "not", "edit"]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTagField,
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
      <FSTagField
        label="Tag, full, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, primary color"
        tagVariant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Uneditable tag, full, error color, width description"
        description="Uneditable description"
        tagColor="error"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,s,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: [],
      value2: ["a", "b", "c"],
      value3: [],
      rules: TagRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTagField,
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
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const hr=["Variations","Rules"];export{e as Rules,r as Variations,hr as __namedExportsOrder,yr as default};
