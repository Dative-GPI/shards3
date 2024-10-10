import{F as a}from"./FSTextArea-0zqzcGgP.js";import{F as u}from"./FSForm-CUiL74ui.js";import{F as p}from"./FSCol-CYWCfIBP.js";import{_ as g}from"./FSRow-CFFgZ74C.js";import{T as c}from"./rules-C-NbTnZJ.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSBaseField-Dg_2QPSd.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-DTi99Ybi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CX_N7n5F.js";import"./VSpacer-Di7g3RCw.js";import"./color-Du5JXqac.js";import"./useRules-D0gcbU57.js";import"./FSButton-QMwUyqLg.js";import"./FSClickable-BE7nqA8Z.js";import"./FSCard-BJoqsHyz.js";import"./css-B7hQ34V-.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSIcon-bZBIO--g.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./locale-BJQwrXJ7.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useAppTimeZone-ByDiY2xy.js";import"./useTranslations-BehwFxDb.js";import"./time-IoQ6C2aa.js";const me={title:"Foundation/Shared/Input fields/TextArea",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:`General Kenobi\r
You are a bold one!`}},render:(t,{argTypes:o})=>({components:{FSTextArea:a,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:c}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSTextArea:a,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const pe=["Variations","Rules"];export{r as Rules,e as Variations,pe as __namedExportsOrder,me as default};
