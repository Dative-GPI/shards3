import{F as i}from"./FSDateTimeRangeField-Bz_Du4ir.js";import{F as g}from"./FSButton-D8KNVcat.js";import{F}from"./FSForm-DZIkkCmz.js";import{F as d}from"./FSCol-CVj0zcU5.js";import{_ as u}from"./FSRow-CYD73_tT.js";import{u as c}from"./useAppTimeZone-Cp_499X8.js";import{D as b}from"./rules-bUpokFzK.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSDialogSubmit-BZQUsIWu.js";import"./FSFadeOut-BBhaIaFQ.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DbdoA89o.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-DaqgkkWF.js";import"./FSCard-BZyb3dNk.js";import"./FSText-CcQBLJU9.js";import"./useSlots-BM37IFiq.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D4nM6Ihv.js";import"./proxiedModel-BmbZrdih.js";import"./anchor-BMg_Hu1U.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./locale-R8GaLlvb.js";import"./router-BPv_tYld.js";import"./transition-DtcXiLpW.js";import"./VDefaultsProvider-EJiha1S2.js";import"./useTranslations-Dmqoe3Kp.js";import"./FSCalendarTwin-B9G2iaR7.js";import"./FSSelectField-BKxSDF0S.js";import"./VList-_wRy0k6Y.js";import"./index-D1hHR51g.js";import"./VIcon-DBlUULm8.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./density-CRkSANTr.js";import"./elevation-C84Wb_jC.js";import"./rounded-CG6jOZvY.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./index-BuamrmjQ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./resizeObserver-D4qCRTFx.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./VInput-11LmaO3P.js";import"./form-thVqu4eJ.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./FSTextField-knlUmIuH.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./VLabel-D_hiLcnP.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./FSCheckbox-BdK031Hz.js";import"./FSIcon-C0akNC9K.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./useDateFormat-C9QY5oFQ.js";import"./useAppLanguageCode-CbHleqYG.js";import"./startOfWeek-uXTpkxA4.js";import"./datesTools-jb_azIFs.js";import"./startOfDay-C4pDH4rb.js";import"./VLocaleProvider-Cqoo46MJ.js";import"./VBtn-DIpB4JrY.js";import"./FSClock-Bi5hJniR.js";import"./FSSlider-BKZ-cHFA.js";import"./VSlider-CilBQKZ9.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./time-u-ATiSbz.js";const We={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:c().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSButton:g,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:F,FSDateTimeRangeField:i,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,s,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Xe=["Variations","Rules"];export{r as Rules,e as Variations,Xe as __namedExportsOrder,We as default};