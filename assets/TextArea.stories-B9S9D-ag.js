import{F as o}from"./FSTextArea-D7Dygvph.js";import{F as u}from"./FSForm-DDxQSyQW.js";import{F as p}from"./FSCol-Bj1WIVag.js";import{_ as g}from"./FSRow-D4JfwQlG.js";import{T as c}from"./rules-CvtjsqoL.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSBaseField-CMqv-0AW.js";import"./FSSpan-DpOLTsx1.js";import"./css-DVhR3h-A.js";import"./useSlots-zwOl0abH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./useRules-CY0rKEBQ.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSIcon-vAlkpflo.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useAppTimeZone-DLNqwrXb.js";import"./useTranslations-CEnu7PZQ.js";import"./time-COVV56Hd.js";const de={title:"Foundation/Shared/Input fields/TextArea",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:`General Kenobi\r
You are a bold one!`}},render:(t,{argTypes:a})=>({components:{FSTextArea:o,FSCol:p},props:Object.keys(a),setup(){return{...t}},template:`
    <FSCol>
      <FSTextArea
        label="Text, auto grow"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :rows="1"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:c}},render:(t,{argTypes:a})=>({components:{FSForm:u,FSTextArea:o,FSCol:p,FSRow:g},props:Object.keys(a),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var s,l,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi\\r\\nYou are a bold one!"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextArea,
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
      <FSTextArea
        label="Text, auto grow"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :rows="1"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTextArea,
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
        <FSTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const me=["Variations","Rules"];export{r as Rules,e as Variations,me as __namedExportsOrder,de as default};
