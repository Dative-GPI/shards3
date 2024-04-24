import{F as l}from"./FSSelectField-3d61a361.js";import{F as u}from"./FSForm-81d8e4b7.js";import{_ as p}from"./FSCol-0a323bdc.js";import{_ as g}from"./FSRow-547598b4.js";import{S as c}from"./rules-7526a651.js";import"./vue.esm-bundler-0c8496bd.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./css-0fb78066.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./FSIcon-e8919096.js";import"./useRules-a67d9042.js";import"./VSpacer-989c3452.js";import"./VSelect-f6dc4f4d.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./density-22f26472.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VOverlay-471318e4.js";import"./dimensions-13ab2ad3.js";import"./display-237b16bb.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./VMenu-36a8b303.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./elevation-00653c06.js";import"./index-5120e393.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./VSlideGroup-8312a613.js";import"./group-8484219c.js";import"./useTranslations-e7f63e09.js";import"./useAppTimeZone-b6ddcce6.js";const he={title:"Foundation/Shared/Input fields/SelectField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:i})=>({components:{FSSelectField:l,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
    <FSCol>
      <FSSelectField
        label="Select"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:null,rules:c}},render:(e,{argTypes:i})=>({components:{FSForm:u,FSSelectField:l,FSCol:p,FSRow:g},props:Object.keys(i),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: ["0", "1", "2"],
      value3: "2",
      value4: "2"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSelectField,
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
      <FSSelectField
        label="Select"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,m,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      rules: SelectRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSSelectField,
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
        <FSSelectField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["Variations","Rules"];export{r as Rules,t as Variations,we as __namedExportsOrder,he as default};
