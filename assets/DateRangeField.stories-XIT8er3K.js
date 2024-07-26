import{F as l}from"./FSDateRangeField-B-x5rx02.js";import{F as u}from"./FSForm-COOci7Wc.js";import{_ as p}from"./FSCol-B7HQy3FB.js";import{_ as g}from"./FSRow-DoCXWKDP.js";import{D as F}from"./rules-DlyQ2XjG.js";import"./vue.esm-bundler-DC82FEWN.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSDialogSubmit-B_7MkSE4.js";import"./FSFadeOut-I7Jw95bn.js";import"./uuid-DTaye2KM.js";import"./css-DYOPUjjE.js";import"./useColors-DQLHFhAZ.js";import"./index-DfSX31J9.js";import"./theme-B5x8xkbY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-DUJqknbG.js";import"./FSClickable-DJmL8jbB.js";import"./FSCard-2tgenx2C.js";import"./VProgressCircular-C-U4HXtE.js";import"./color-DvJT0EEa.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-P4x4c-RP.js";import"./FSDialog-DAApKvfh.js";import"./FSText-xgcCPmKK.js";import"./VSpacer-BjECYW1K.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-slW9zgh3.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./locale-BC9z6YbT.js";import"./router-DFGAHh1d.js";import"./transition-yl3lVN6J.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./useTranslations-DV-taHAL.js";import"./FSCalendarTwin-BmlNVPRo.js";import"./useAppTimeZone-SgthjzoP.js";import"./VLocaleProvider-D38ocs10.js";import"./VBtn-x8pr1gDk.js";import"./border-Be_f35HL.js";import"./density-CFGlRMM_.js";import"./elevation-BTkUCD39.js";import"./rounded-YB6K8mOp.js";import"./group-szJg_hPo.js";import"./loader-DENHXnzB.js";import"./index-9jSorrJj.js";import"./FSTextField-Rjw2v1TU.js";import"./FSBaseField-3RVGuwl_.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./index-DN-QUi1L.js";import"./time-xMV0WbLU.js";const we={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateRangeField:l,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateRangeField,
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
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateRangeField,
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
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const fe=["Variations","Rules"];export{r as Rules,e as Variations,fe as __namedExportsOrder,we as default};
