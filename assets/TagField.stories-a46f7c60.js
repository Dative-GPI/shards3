import{F as o}from"./FSTagField-3edc0921.js";import{F as g}from"./FSForm-2d7638c3.js";import{_ as p}from"./FSCol-ff457bc3.js";import{_ as u}from"./FSRow-1d7c2545.js";import{T as v}from"./rules-fd87a465.js";import"./vue.esm-bundler-cd768bc3.js";import"./FSTextField-1c3f111c.js";import"./VField-4a160336.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./VSpacer-a30a0a7c.js";import"./useRender-d216bc3f.js";import"./index-b97c70d5.js";import"./transition-2948fa2b.js";import"./VLabel-ac265b88.js";import"./VInput-28424714.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./VIcon-95cdbe21.js";import"./color-4e667524.js";import"./tag-f5ad2c5e.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./loader-e29f326e.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-ff78bc14.js";import"./forwardRefs-e658ad70.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./css-c2ea3b68.js";import"./FSIcon-5671b33c.js";import"./useRules-bb9e9594.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./FSWrapGroup-20447d85.js";import"./uuid-08309875.js";import"./VSlideGroup-22f87886.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./VSlideGroupItem-27057095.js";import"./FSTag-9cd35941.js";import"./VBtn-df7c9712.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./router-12edcf18.js";import"./index-f4fa4c36.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";const yr={title:"Foundation/Shared/Input fields/TagField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(t,{argTypes:a})=>({components:{FSTagField:o,FSCol:p},props:Object.keys(a),setup(){return{...t}},template:`
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
