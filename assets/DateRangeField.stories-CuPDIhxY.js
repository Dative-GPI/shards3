import{F as l}from"./FSDateRangeField-TYF-Nw4i.js";import{F as u}from"./FSForm-A_xyKD4e.js";import{_ as p}from"./FSCol-B7HQy3FB.js";import{_ as g}from"./FSRow-DoCXWKDP.js";import{D as F}from"./rules-DlyQ2XjG.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSDialogSubmit-Chfd6Al3.js";import"./FSFadeOut-DU52ZiYP.js";import"./uuid-DTaye2KM.js";import"./css-DYOPUjjE.js";import"./useColors-vjSCjmKB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CDGAP9oX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-uZjHfaK3.js";import"./FSClickable-fH0IP9Gi.js";import"./FSCard-C7Q5zpHU.js";import"./VProgressCircular-D8KFt_en.js";import"./color-BhlhQtQT.js";import"./VIcon-uFUcYN4x.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-CH1L3cXE.js";import"./FSDialog-CkwT6Gx6.js";import"./FSText-CRWIpNZ3.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-CYw7-KgF.js";import"./anchor-CLTIcUx3.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./locale-BC9z6YbT.js";import"./router-CRaPYJ7n.js";import"./transition-CJbyFvkq.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./VSpacer-CMZ7Jymr.js";import"./useTranslations-DV-taHAL.js";import"./FSCalendarTwin-DcEDk3bu.js";import"./useAppTimeZone-SgthjzoP.js";import"./VLocaleProvider-CCst0Z0f.js";import"./VBtn-BeQ1BOJB.js";import"./border-Csacwza1.js";import"./density-XYshZx8z.js";import"./elevation-BoGrGvdU.js";import"./rounded-TFXDyxjJ.js";import"./group-DaluXt-5.js";import"./loader-CTRePS7y.js";import"./index-ySUbTvsm.js";import"./FSTextField-Bzrs8V-b.js";import"./VField-Tu0u6Fec.js";import"./index-DWl9tX7E.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./time-xMV0WbLU.js";const Re={title:"Foundation/Shared/Input fields/DateRangeField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateRangeField:l,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const he=["Variations","Rules"];export{r as Rules,e as Variations,he as __namedExportsOrder,Re as default};
