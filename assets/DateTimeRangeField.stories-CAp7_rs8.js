import{F as i}from"./FSDateTimeRangeField-ByjaIjm2.js";import{F as g}from"./FSButton-9Jyc5oF6.js";import{F}from"./FSForm-BnY1MqqQ.js";import{_ as p}from"./FSCol-Bk577joi.js";import{_ as u}from"./FSRow-BuYwVvwM.js";import{u as c}from"./useAppTimeZone-ghwi0HtC.js";import{D as b}from"./rules-D_3Pl2Ia.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSDialogSubmit-BTjxO8fa.js";import"./FSFadeOut-BAo4zk1P.js";import"./uuid-DTaye2KM.js";import"./css-CbCR1nbl.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-BGsa9M-b.js";import"./FSCard-U7GdUEkx.js";import"./FSText-aZSl7JAe.js";import"./useSlots-DXmhvOIb.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BE9FlVMJ.js";import"./anchor-DHDhudvL.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./locale-CMOn_BOp.js";import"./router-CbAEScZe.js";import"./transition-CQDsmRPd.js";import"./VDefaultsProvider-CztrVRTm.js";import"./useTranslations-DyPMaPr_.js";import"./FSCalendarTwin-C3Lt9Q33.js";import"./FSSpan-etgUZXmX.js";import"./useDateFormat-DAzSBSGK.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./VLocaleProvider-BKOxinwy.js";import"./VBtn-CJflX_3O.js";import"./border-CgF0busY.js";import"./density-BM1QLeh4.js";import"./elevation-BH8AnXAq.js";import"./rounded-BWAMdTmW.js";import"./tag-DxanhlL3.js";import"./group-DgCbl5w-.js";import"./VIcon-DptP6m9n.js";import"./loader-CbF0edCX.js";import"./VProgressCircular-DnrgPZB3.js";import"./index-DjMs4W1j.js";import"./FSTextField-xplhuXw_.js";import"./FSBaseField-Bip4KV2X.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./form-CgybbRT3.js";import"./index-jvVque46.js";import"./FSClock-CHaqbc_3.js";import"./FSSlider-7eUq_8vx.js";import"./VSlider-CaZ0_zbk.js";import"./FSClickable-B4ZW0Yow.js";import"./FSIcon-uPx7S--r.js";import"./time-BOZ1S5aJ.js";const Ze={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:c().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSButton:g,FSCol:p,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Be=["Variations","Rules"];export{r as Rules,e as Variations,Be as __namedExportsOrder,Ze as default};
