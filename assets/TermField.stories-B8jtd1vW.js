import{F as i}from"./FSTermField-sg9fb5xR.js";import{F as d}from"./FSCol-Bj1WIVag.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-DzKPXup4.js";import"./FSDialogMenu-CzbYQerh.js";import"./FSCard-D8qRc7rc.js";import"./FSRow-D4JfwQlG.js";import"./css-DVhR3h-A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./color-B0htL_ZM.js";import"./proxiedModel-BN8GSVE7.js";import"./anchor-CiFPvmMB.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./locale-BGMMnFfJ.js";import"./router-lEm-a6ws.js";import"./transition-BvKGRC-_.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-CcLnrzQE.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-vAlkpflo.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./index-D2mfwXxT.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSWrapGroup-CRmVPaPn.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./FSBaseField-CMqv-0AW.js";import"./VSpacer-DLFo12A6.js";import"./FSTextField-D5y-h9FL.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./VLabel-hsX9xD9s.js";import"./loader-DuCiGAVb.js";import"./rounded-C73YOAN4.js";import"./index-BPQCAcxH.js";import"./FSCheckbox-18K-cCtB.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSLoader-DxfJongP.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-Q7PPqJI7.js";import"./VMenu-OPxqXTkz.js";import"./dates-Ce7n-5qd.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDateTimeRangeField-YXHwbu_W.js";import"./FSDialogSubmit-DjjbhTSJ.js";import"./FSDialog-CncBWQNh.js";import"./FSText-BxoWgsr8.js";import"./FSCalendarTwin-D7sv6A4O.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useAppTimeZone-DLNqwrXb.js";import"./VLocaleProvider-DsgXQQ9Y.js";import"./VBtn-B6If6-we.js";import"./FSClock-BPv61ije.js";import"./FSSlider-CezzgvWi.js";import"./VSlider-BUDqPHPw.js";import"./FSNumberField-DTdqnH80.js";import"./FSForm-DDxQSyQW.js";import"./rules-CvtjsqoL.js";import"./time-COVV56Hd.js";const Kt={title:"Foundation/Shared/Input fields/TermField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(m,{argTypes:n})=>({components:{FSCol:d,FSTermField:i},props:Object.keys(n),setup(){return{...m}},template:`
    <FSCol>
      <FSTermField
        label="Term"
        v-model:startDate="args.start1"
        v-model:endDate="args.end1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required default term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start2"
        v-model:endDate="args.end2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required before-after term, with description"
        description="Description for this field"
        variant="before-after"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start3"
        v-model:endDate="args.end3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Uneditable term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :editable="false"
        :required="true"
        v-model:startDate="args.start4"
        v-model:endDate="args.end4"
      />
    </FSCol>`})};var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      start1: "now/h",
      end1: "now",
      start2: "now - 3d",
      end2: "now",
      start3: "alertstart - 1h",
      end3: "alertend + 1h",
      start4: "2023-01-01T00:00:00",
      end4: "2024-01-01T00:00:00"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCol,
      FSTermField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTermField
        label="Term"
        v-model:startDate="args.start1"
        v-model:endDate="args.end1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required default term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start2"
        v-model:endDate="args.end2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required before-after term, with description"
        description="Description for this field"
        variant="before-after"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start3"
        v-model:endDate="args.end3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Uneditable term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :editable="false"
        :required="true"
        v-model:startDate="args.start4"
        v-model:endDate="args.end4"
      />
    </FSCol>\`
  })
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Lt=["Variations"];export{t as Variations,Lt as __namedExportsOrder,Kt as default};
