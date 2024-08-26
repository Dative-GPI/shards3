import i from"./FSNumberField-Bf-yHLLb.js";import{F as p}from"./FSForm-COZagF_k.js";import{_ as u}from"./FSCol-CeBQ3oDD.js";import{_ as g}from"./FSRow-Dfo2nEmE.js";import{N as b}from"./rules-D5NnG0xv.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSTextField-Cu62_PPc.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./FSButton-Bvd0naOX.js";import"./FSClickable-Bx8zcCZW.js";import"./FSCard-CU93xE1v.js";import"./css-DYbKqpMF.js";import"./VProgressCircular-CQOkkHxu.js";import"./VIcon-CB8o8wL4.js";import"./FSIcon-CYA01Pg8.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./index-CtF1TxK6.js";import"./transition-DYmm1B3d.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./locale-x-KasAKq.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./loader-C4nPQ1_b.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./useAppTimeZone-DE7FdD8F.js";import"./useAppLanguageCode-B0gM_GlZ.js";import"./useTranslations-yeF_ketc.js";import"./time-sTrSTvHi.js";const ie={title:"Foundation/Shared/Input fields/NumberField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:500,value3:1500}},render:(t,{argTypes:o})=>({components:{FSNumberField:i,FSCol:u},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const le=["Variations","Rules"];export{r as Rules,e as Variations,le as __namedExportsOrder,ie as default};
