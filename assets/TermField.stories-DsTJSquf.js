import{F as o}from"./FSTermField-BdL-Fxcl.js";import{F as a}from"./FSCol-DD5MeAoT.js";import"./vue.esm-bundler-l-siv0w9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-DqO1gPa4.js";import"./FSDialogMenu-vSYpuZ_d.js";import"./FSCard-Cocsqd0c.js";import"./FSRow-BjeBkMPV.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-CntZC7f2.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-F5m9he5w.js";import"./FSButton-cXGosxtu.js";import"./FSClickable-B8_y_vmt.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-DfqW6nqQ.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./index-B089V-om.js";import"./FSToggleSet-92mUnG-8.js";import"./FSWrapGroup-CgUIplkM.js";import"./VInput-BkciVi2d.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./FSBaseField-CfZ7AiUY.js";import"./FSTextField-CIXfVN3n.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./VLabel-Dswg7Ov5.js";import"./loader-avZiZGL_.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./FSCheckbox-BKUwhDef.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-CszUv8uk.js";import"./FSLoader-DoOybHH0.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CfSjScM8.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-R5W67bQu.js";import"./VMenu-DQq2E1HW.js";import"./dates-DFP4a3ym.js";import"./useTranslations-CJK8D24x.js";import"./FSDateTimeRangeField-DtjxTJI7.js";import"./FSDialogSubmit-Bu35Uw01.js";import"./FSDialog-Ii8B5xOm.js";import"./FSText-4yVUx1mI.js";import"./FSCalendarTwin-D883XYgJ.js";import"./useDateFormat-BNPZ7oj9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useAppTimeZone-gpO-zv_9.js";import"./VLocaleProvider-DMII1C8e.js";import"./VBtn-9DyKx9D6.js";import"./FSClock-DM9fOfrQ.js";import"./FSSlider-CShmnSbe.js";import"./VSlider-Ku0tr_EN.js";import"./FSNumberField-hZ8lT6yP.js";import"./FSForm-4A05UEAw.js";import"./rules-BafDybJE.js";import"./time-CxERy6W9.js";const Jt={title:"Foundation/Shared/Input fields/TermField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00",meta:{}}},render:(d,{argTypes:n})=>({components:{FSCol:a,FSTermField:o},props:Object.keys(n),setup(){return{...d}},template:`
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
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const Kt=["Variations"];export{t as Variations,Kt as __namedExportsOrder,Jt as default};
