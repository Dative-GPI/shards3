import i from"./FSDateTimeField-CNeJr3Iw.js";import{F as u}from"./FSForm-Bg-mYOth.js";import{_ as p}from"./FSCol-B1LPjIXg.js";import{_ as g}from"./FSRow-B7tdsi71.js";import{D as F}from"./rules-BoPQyOiY.js";import"./vue.esm-bundler-CLWyqtrq.js";import"./FSDialogMenu-DffTLyCO.js";import"./FSCard-Dfczzv61.js";import"./useColors-DMaqBg9s.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-bwyTeVCn.js";import"./css-Ca-HPGcF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-BBsw_RbX.js";import"./proxiedModel-3ec75IAg.js";import"./anchor-D3k-mERr.js";import"./color-CiZ0sQz8.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./locale-DAz5thp-.js";import"./router-Bm0MCij7.js";import"./transition-D0Fyuczc.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./FSTextField-Cpjd0lxC.js";import"./VField-B0dByqhd.js";import"./FSSpan-C4Iz3qX9.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./index-3KSGAm21.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./VIcon-CTYwU69W.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./rounded-BEQ3HMtY.js";import"./FSButton-DbngaExr.js";import"./FSClickable-Dnaq4X0T.js";import"./FSIcon-izOGFbD4.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./FSCalendar-iHXzDZAC.js";import"./useAppTimeZone-CjMaOqrj.js";import"./useTranslations-BiPIEqtB.js";import"./VLocaleProvider-BP1Djfq4.js";import"./date-DzTNZC7Y.js";import"./VBtn-DWhqhpec.js";import"./border-Bs-XyEFQ.js";import"./elevation-CB-eCL4u.js";import"./group-BZx0j_nI.js";import"./index-CgBlQs6Z.js";import"./FSWindow-BNoQJY6A.js";import"./ssrBoot-pwfi9K1z.js";import"./FSClock-Cuo4m-vU.js";import"./FSSlider-SufXKfL6.js";import"./VSlider-ChBxLEny.js";import"./VMenu-CBjAwdlw.js";import"./time-DShBRzYX.js";const qe={title:"Foundation/Shared/Input fields/DateTimeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateTimeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateTimeField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
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
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateTimeField,
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
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
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
      FSDateTimeField,
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
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const xe=["Variations","Rules"];export{r as Rules,e as Variations,xe as __namedExportsOrder,qe as default};
