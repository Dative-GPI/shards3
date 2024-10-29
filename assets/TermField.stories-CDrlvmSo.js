import{F as o}from"./FSTermField-Dswtnncz.js";import{F as a}from"./FSCol-BvqytbKT.js";import"./vue.esm-bundler-l-siv0w9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-B9PZ-DdC.js";import"./FSDialogMenu-qumNHV3X.js";import"./FSCard-CZcF3hjs.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-_VkINegi.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-BRgBWhUt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPsBNcj3.js";import"./FSButton-Dn0noJqp.js";import"./FSRouterLink-CI0Nh6ce.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-BjbKlxCy.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-CxSeYbPm.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./index-B089V-om.js";import"./FSToggleSet-DPw_M8Xy.js";import"./FSWrapGroup-D1OyNKn_.js";import"./VInput-BkciVi2d.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./FSBaseField-Bt-M24lA.js";import"./FSTextField-BRcQP7Wb.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./VLabel-Dswg7Ov5.js";import"./loader-avZiZGL_.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./FSCheckbox--v2KMIeD.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-9Mm6vijG.js";import"./FSLoader-ylzW_XnC.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CqpA7Dwr.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-Bp-uoP8x.js";import"./VMenu-DQq2E1HW.js";import"./dates-DFP4a3ym.js";import"./useTranslations-CJK8D24x.js";import"./FSDateTimeRangeField-DofcS69v.js";import"./FSDialogSubmit-EB0fOvMw.js";import"./FSDialog-BZlf1gJU.js";import"./FSText-DZ8qsh3h.js";import"./FSCalendarTwin-DxE14stB.js";import"./useDateFormat-BlT1gBMR.js";import"./useAppTimeZone-BUrTBgYP.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./VLocaleProvider-DMII1C8e.js";import"./VBtn-9DyKx9D6.js";import"./FSClock-B-cYNgTu.js";import"./FSSlider-C4hT4Yz2.js";import"./VSlider-Ku0tr_EN.js";import"./FSNumberField-_M7sfnG3.js";import"./FSForm-4A05UEAw.js";import"./rules-DieTgxQR.js";import"./time-CxERy6W9.js";const Lt={title:"Foundation/Shared/Input fields/TermField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00",meta:{}}},render:(d,{argTypes:n})=>({components:{FSCol:a,FSTermField:o},props:Object.keys(n),setup(){return{...d}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Using global update"
        description="Description for this field"
        :startDate="args.meta?.startDate"
        :endDate="args.meta?.endDate"
        :required="true"
        @update="args.meta = { ...$event }"
      />
    </FSCol>`})};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      start1: "now/h",
      end1: "now",
      start2: "now - 3d",
      end2: "now",
      start3: "alertstart - 1h",
      end3: "alertend + 1h",
      start4: "2023-01-01T00:00:00",
      end4: "2024-01-01T00:00:00",
      meta: {}
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Using global update"
        description="Description for this field"
        :startDate="args.meta?.startDate"
        :endDate="args.meta?.endDate"
        :required="true"
        @update="args.meta = { ...$event }"
      />
    </FSCol>\`
  })
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const Mt=["Variations"];export{t as Variations,Mt as __namedExportsOrder,Lt as default};
