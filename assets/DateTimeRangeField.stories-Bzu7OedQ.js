import{F as i}from"./FSDateTimeRangeField-DHGqgbVg.js";import{F as g}from"./FSButton-DD-NIQC1.js";import{F}from"./FSForm-DJBvIX_e.js";import{F as p}from"./FSCol-TPWSQPHs.js";import{_ as u}from"./FSRow-CmD7j8Pv.js";import{u as c}from"./useAppTimeZone-oM-olaqI.js";import{D as b}from"./rules-Cdr44ew1.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSDialogSubmit-Canxo7DQ.js";import"./FSFadeOut-DtBOlAO7.js";import"./uuid-DTaye2KM.js";import"./css-BkQhD285.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-CQj5vH4e.js";import"./FSCard-_NwrZC8j.js";import"./FSText-Der-WemT.js";import"./useSlots-DzSo5JdB.js";import"./VSpacer-CrqXaTz-.js";import"./color-BKGJvBEr.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-G1bil5DU.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./useTranslations-f9CWAvtI.js";import"./FSCalendarTwin-bQtKliX2.js";import"./FSSpan-D1pceTli.js";import"./useDateFormat-C-ZOz_ut.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./VLocaleProvider-BT2X4OIj.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./density-BPFRY_Tg.js";import"./elevation-kEG7tFkj.js";import"./rounded-Cely44IK.js";import"./tag-DT601Ssr.js";import"./group-CgGrJ6ok.js";import"./VIcon-CzaRZDPI.js";import"./loader-CiSVFYJ7.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./index-CN4E1Twd.js";import"./FSTextField-Ciu-sNKi.js";import"./FSBaseField-DjLbenuy.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./form-B7NlTRtd.js";import"./index-Cc8xmT7Y.js";import"./FSClock-tGvwx3gb.js";import"./FSSlider-BV4lx6ij.js";import"./VSlider-HRDOL57F.js";import"./FSClickable-6DicpEF8.js";import"./FSIcon-BCbpBdVG.js";import"./time-ELt5M3Ql.js";const Be={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:c().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSButton:g,FSCol:p,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:F,FSDateTimeRangeField:i,FSCol:p,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
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
      FSButton,
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
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const je=["Variations","Rules"];export{r as Rules,e as Variations,je as __namedExportsOrder,Be as default};
