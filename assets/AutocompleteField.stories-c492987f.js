import{F as l}from"./FSAutocompleteField-2c5ab937.js";import{F as p}from"./FSForm-f0aefb0e.js";import{_ as u}from"./FSCol-ff457bc3.js";import{_ as g}from"./FSRow-1d7c2545.js";import{A as v}from"./rules-fd87a465.js";import"./vue.esm-bundler-cd768bc3.js";import"./FSToggleSet-ab7c55f3.js";import"./FSSlideGroup-df6ede8b.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./css-c2ea3b68.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VProgressCircular-f6ca2848.js";import"./color-4e667524.js";import"./useRender-b3fd6f8b.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./FSIcon-203715fb.js";import"./VSlideGroup-61bc8bc9.js";import"./index-055d6469.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./FSWrapGroup-8dc071a4.js";import"./VInput-5fe9e616.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-d090f013.js";import"./VSpacer-0c52efc7.js";import"./VLabel-a834020c.js";import"./loader-3bcfb6cd.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-0f33b66c.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-e9dab1c2.js";import"./index-f4fa4c36.js";import"./FSLoader-c57e8f50.js";import"./elevation-7537bf82.js";import"./VSelect-faa1eb31.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./VOverlay-43a7a638.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./VMenu-501341cc.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";import"./filter-7dfa57ec.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";const b=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Oe={title:"Foundation/Shared/Input fields/AutocompleteField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(30).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteField:l,FSCol:u},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        :disableToggleSet="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        :disableToggleSet="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :disableToggleSet="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :disableToggleSet="true"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enable with treshold at 8"
        :toggleSetTreshold="8"
        :items="args.items"
        v-model="args.value5"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${b[e]}`})),value1:null,value2:null,value3:null,value4:null,rules:v}},render:(e,{argTypes:o})=>({components:{FSForm:p,FSAutocompleteField:l,FSCol:u,FSRow:g},props:Object.keys(o),setup(){return{...e}},template:`
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
          :disableToggleSet="true"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :disableToggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :disableToggleSet="true"
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
    </FSForm>`})};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        :disableToggleSet="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        :disableToggleSet="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :disableToggleSet="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :disableToggleSet="true"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enable with treshold at 8"
        :toggleSetTreshold="8"
        :items="args.items"
        v-model="args.value5"
      />
    </FSCol>\`
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,m,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          :disableToggleSet="true"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :disableToggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :disableToggleSet="true"
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const _e=["Variations","Rules"];export{r as Rules,t as Variations,_e as __namedExportsOrder,Oe as default};
