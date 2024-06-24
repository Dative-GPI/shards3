import{F as i}from"./FSDateTimeRangeField-CgbB8K8J.js";import{F as u}from"./FSForm-Bg-mYOth.js";import{_ as p}from"./FSCol-B1LPjIXg.js";import{_ as g}from"./FSRow-B7tdsi71.js";import{D as F}from"./rules-BoPQyOiY.js";import"./vue.esm-bundler-CLWyqtrq.js";import"./FSDialogSubmit-CAO7B00K.js";import"./FSFadeOut-Cm2RoYLR.js";import"./uuid-DTaye2KM.js";import"./css-Ca-HPGcF.js";import"./useColors-D61Fe1_L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-bwyTeVCn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-xawrBwn0.js";import"./FSClickable-CX-mXFfM.js";import"./FSCard-CtrctGW7.js";import"./VProgressCircular-D5Exu0y-.js";import"./color-CiZ0sQz8.js";import"./useRender-BBsw_RbX.js";import"./resizeObserver-pTuJHNwh.js";import"./VIcon-CTYwU69W.js";import"./tag-CMDXkDN7.js";import"./FSSpan-C4Iz3qX9.js";import"./useSlots-YtBg7QOA.js";import"./FSIcon-nvjMvWEC.js";import"./FSDialog-BR2gz5PN.js";import"./FSText-B9kmC_JD.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-3ec75IAg.js";import"./anchor-D3k-mERr.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./locale-DAz5thp-.js";import"./router-Bm0MCij7.js";import"./transition-D0Fyuczc.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./VSpacer-gQABP9En.js";import"./useTranslations-BiPIEqtB.js";import"./FSCalendarTwin-Bn4TK4Ft.js";import"./useAppTimeZone-CjMaOqrj.js";import"./VLocaleProvider-BP1Djfq4.js";import"./date-DzTNZC7Y.js";import"./VBtn-DWhqhpec.js";import"./border-Bs-XyEFQ.js";import"./density-BAQxqMxc.js";import"./elevation-CB-eCL4u.js";import"./rounded-BEQ3HMtY.js";import"./group-BZx0j_nI.js";import"./loader-BsCFilcr.js";import"./index-CgBlQs6Z.js";import"./FSTextField-BJ0CYXhH.js";import"./VField-BXxuzAJZ.js";import"./index-3KSGAm21.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./FSClock-DvaB_4RY.js";import"./FSSlider-DqPqVVC0.js";import"./VSlider-ChBxLEny.js";import"./time-DShBRzYX.js";const xe={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
