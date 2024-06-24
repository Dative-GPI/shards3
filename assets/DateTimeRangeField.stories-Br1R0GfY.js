import{F as i}from"./FSDateTimeRangeField-BBctCdWA.js";import{F as u}from"./FSForm-BlMLGh3p.js";import{_ as p}from"./FSCol-OnQTHx6W.js";import{_ as g}from"./FSRow-BZVvIgLd.js";import{D as F}from"./rules-vaMZSOmg.js";import"./vue.esm-bundler-BLBBrD1D.js";import"./FSDialogSubmit-w1aiABul.js";import"./FSFadeOut-NO6SWErB.js";import"./uuid-DTaye2KM.js";import"./css-DU1X_fj1.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-Ctk-czeT.js";import"./FSClickable-BcsUSOO8.js";import"./FSCard-fA5aX9kp.js";import"./VProgressCircular-CvGEkpD-.js";import"./color-T1BTTgdX.js";import"./useRender-CTGr_J4i.js";import"./resizeObserver-DkufbBgm.js";import"./VIcon-Cq9uvnQL.js";import"./tag-kXOxSspb.js";import"./FSSpan-DNHXfhpi.js";import"./useSlots-CKjiHxqT.js";import"./FSIcon-CgTCRlvx.js";import"./FSDialog-DlwbzWL0.js";import"./FSText-DOaWXjiL.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BG8nj0M_.js";import"./anchor-3JQV6orx.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./locale-Cf2S8s-Z.js";import"./router-Ce0kmIVt.js";import"./transition-DqSOegbJ.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./VSpacer-C8vjG_Ri.js";import"./useTranslations-CT7kkIpn.js";import"./FSCalendarTwin-D6rMQv_R.js";import"./useAppTimeZone-DSwl_BhO.js";import"./VLocaleProvider-DXSYNxQl.js";import"./date-CWnEAiay.js";import"./VBtn-KXFWn89r.js";import"./border-ChMgRsg0.js";import"./density-Dp1dzyfT.js";import"./elevation-0FWsrb7Y.js";import"./rounded-Ax8hVtG-.js";import"./group-BPLcoGlv.js";import"./loader-FLWPcWRx.js";import"./index-BeqDwarK.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./index-Co1LeIbZ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./FSClock-rhTWAgIg.js";import"./FSSlider-D6nTlmOi.js";import"./VSlider-DM89fFqS.js";import"./time-BxNv1uVL.js";const xe={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Uneditable date & time range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateTimeRangeField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      FSDateTimeRangeField,
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
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Uneditable date & time range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      FSDateTimeRangeField,
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
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["Variations","Rules"];export{r as Rules,e as Variations,Ce as __namedExportsOrder,xe as default};
