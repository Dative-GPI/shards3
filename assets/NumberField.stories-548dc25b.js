import{F as i}from"./FSNumberField-7f175d50.js";import{F as p}from"./FSForm-6f3485fc.js";import{_ as u}from"./FSCol-044a4f0a.js";import{_ as g}from"./FSRow-0f15051e.js";import{N as b}from"./rules-de67e007.js";import"./vue.esm-bundler-1de4ab84.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./FSSpan-c5b5f93b.js";import"./useSlots-78ee3d45.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-6201f155.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-fee57059.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./FSButton-6b0685b3.js";import"./FSClickable-00bc2ab2.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./FSIcon-08483052.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./useAppTimeZone-7082f171.js";import"./useTranslations-df2010ef.js";const le={title:"Foundation/Shared/Input fields/NumberField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:500,value3:1500}},render:(t,{argTypes:o})=>({components:{FSNumberField:i,FSCol:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSNumberField
        label="Number"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Required number, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Uneditable number, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:0,value2:500,value3:1500,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:p,FSNumberField:i,FSCol:u,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: max 10"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10 & integer"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.integer()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,n,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      value1: 0,
      value2: 500,
      value3: 1500
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSNumberField,
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
      <FSNumberField
        label="Number"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Required number, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Uneditable number, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,a,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: 0,
      value2: 500,
      value3: 1500,
      rules: NumberRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSNumberField,
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
        <FSNumberField
          label="Rules: required & min 10"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: max 10"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10 & integer"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.integer()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const ne=["Variations","Rules"];export{r as Rules,e as Variations,ne as __namedExportsOrder,le as default};
