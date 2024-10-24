import i from"./FSDateTimeField-2_3WCkoB.js";import{F as c}from"./FSButton-BJI5MpMt.js";import{F}from"./FSForm-4A05UEAw.js";import{F as p}from"./FSCol-DD5MeAoT.js";import{_ as u}from"./FSRow-BjeBkMPV.js";import{u as g}from"./useAppTimeZone-gpO-zv_9.js";import{D as b}from"./rules-BafDybJE.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSDialogMenu-DNAKgtJ7.js";import"./FSCard-DID5L9tx.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSTextField-DvwDf1ul.js";import"./FSBaseField-lAwl7qG_.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./FSCalendar-D_n3in6I.js";import"./useDateFormat-BNPZ7oj9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useTranslations-CJK8D24x.js";import"./VLocaleProvider-DMII1C8e.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./group-Dk9dfj8w.js";import"./index-Cr304eD2.js";import"./FSWindow-RglzuROT.js";import"./ssrBoot-DD96sY1N.js";import"./FSClock-D1VXDfo3.js";import"./FSSlider-ByodQgbj.js";import"./VSlider-Ku0tr_EN.js";import"./VMenu-DQq2E1HW.js";import"./FSClickable-V0Na2XEk.js";import"./FSIcon-sBizf6C-.js";import"./time-CxERy6W9.js";const Be={title:"Foundation/Shared/Input fields/DateTimeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:g().setAppTimeZone,value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateTimeField:i,FSButton:c,FSCol:p,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:F,FSDateTimeField:i,FSCol:p,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var a,l,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
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
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const je=["Variations","Rules"];export{r as Rules,e as Variations,je as __namedExportsOrder,Be as default};
