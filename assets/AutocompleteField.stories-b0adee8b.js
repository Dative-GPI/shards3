import{F as i}from"./FSAutocompleteField-ff78314e.js";import{F as u}from"./FSForm-17213632.js";import{_ as p}from"./FSCol-606e8271.js";import{_ as g}from"./FSRow-76f4ad1e.js";import{A as v}from"./rules-78f81f7e.js";import"./vue.esm-bundler-f632b118.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./VSpacer-e4feda29.js";import"./useRender-7972ae0c.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./FSButton-1e8cfafa.js";import"./FSClickable-af644c0d.js";import"./FSCard-75477b2b.js";import"./css-185b4786.js";import"./FSIcon-110a991e.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./useTranslations-f6aba3ae.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSDialogMenu-7826371b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSCheckbox-5ebd306d.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./VSelect-00399f8e.js";import"./VMenu-99bc218e.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./VDivider-268fa528.js";import"./filter-ad9d8f4b.js";import"./useAppTimeZone-3909e5e4.js";const c=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],De={title:"Foundation/Shared/Input fields/AutocompleteField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(30).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteField:i,FSCol:p},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value5"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${c[e]}`})),value1:null,value2:null,value3:null,value4:null,rules:v}},render:(e,{argTypes:o})=>({components:{FSForm:u,FSAutocompleteField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...e}},template:`
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>`})};var l,s,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(30).keys()).map(i => ({
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
      FSAutocompleteField,
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
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value5"
      />
    </FSCol>\`
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,a,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${international[i]}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      rules: AutocompleteRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSAutocompleteField,
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
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Me=["Variations","Rules"];export{r as Rules,t as Variations,Me as __namedExportsOrder,De as default};
