import{F as a}from"./FSTranslateField-CTntUax-.js";import{F as u}from"./FSForm-1pcMIyZi.js";import{_ as p}from"./FSCol-B7HQy3FB.js";import{_ as g}from"./FSRow-DoCXWKDP.js";import{T as F}from"./rules-DlyQ2XjG.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSDialogSubmit-DmA8rBD5.js";import"./FSFadeOut-7Ilw0XG1.js";import"./uuid-DTaye2KM.js";import"./css-DYOPUjjE.js";import"./useColors-ATxZ3nb1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DMal9AfS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-DQTNQ7w6.js";import"./FSClickable-Bk5I2JN4.js";import"./FSCard-DJrzS8t_.js";import"./VProgressCircular-BvwZAexL.js";import"./color-C5d3UYhE.js";import"./VIcon-C6jgSf5f.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-2B0NN_at.js";import"./FSDialog-D1_ivQdh.js";import"./FSText-ykiRuhwH.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BHphZos0.js";import"./anchor-D7FjyLmk.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./locale-BC9z6YbT.js";import"./router-uZykNX6c.js";import"./transition-DSqAHFz2.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./VSpacer-NvTsfghw.js";import"./useTranslations-DV-taHAL.js";import"./FSTextField-CIgddAfu.js";import"./FSBaseField-3fq9JEyD.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./density-oYDdQVKs.js";import"./loader-CIVpWd2w.js";import"./rounded-jRyYRXzo.js";import"./index-DI8u9ozT.js";import"./useAppTimeZone-SgthjzoP.js";import"./time-xMV0WbLU.js";const Fr={title:"Foundation/Shared/Input fields/TranslateField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(t,{argTypes:n})=>({components:{FSTranslateField:a,FSCol:p},props:Object.keys(n),setup(){return{...t}},template:`
    <FSCol>
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:F}},render:(t,{argTypes:n})=>({components:{FSForm:u,FSTranslateField:a,FSCol:p,FSRow:g},props:Object.keys(n),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var o,l,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      translations1: null,
      value2: "Hello there",
      translations2: [{
        languageCode: "fr-FR",
        label: "Bonjour ici"
      }],
      value3: "General Kenobi",
      translations3: []
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateField,
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
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      translations1: null,
      value2: "",
      translations2: null,
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTranslateField,
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
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const vr=["Variations","Rules"];export{e as Rules,r as Variations,vr as __namedExportsOrder,Fr as default};
