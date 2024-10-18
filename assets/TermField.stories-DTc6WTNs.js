import{F as o}from"./FSTermField-CHn_F-lc.js";import{F as a}from"./FSCol-B-Vfvg0L.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-Ud0rMTyQ.js";import"./FSDialogMenu-DQd6lGHm.js";import"./FSCard-DrQswI-1.js";import"./FSRow-BkWeXIi_.js";import"./css-i8JhJBs1.js";import"./useBreakpoints-BGn0bPYv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Du1QHlOW.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DBJfw4cY.js";import"./proxiedModel-z3p0-M-h.js";import"./anchor-Cu9IQeug.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./locale-BJQwrXJ7.js";import"./router-DHMAfVHW.js";import"./transition-B83BVatf.js";import"./VDefaultsProvider-S-S54iS4.js";import"./FSSlideGroup-CuNxa7LX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Df26-_J5.js";import"./FSButton-BQje8JZk.js";import"./FSClickable-Dnlrfn2W.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSSpan-CHspDDbd.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CtLYuQJX.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./index-CiXeh9xR.js";import"./FSToggleSet-Bu237MSN.js";import"./FSWrapGroup-B9QcRiHf.js";import"./VInput-BwoMaTW2.js";import"./density-CJqFEH6j.js";import"./form-D8F-RrsG.js";import"./FSBaseField-DL008ZG5.js";import"./VSpacer-y-n940VK.js";import"./FSTextField-DPsTjA6v.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./VLabel-DFQa5Qos.js";import"./loader-Cs6S2SUJ.js";import"./rounded-DM_o2hWD.js";import"./index-C31q_73Z.js";import"./FSCheckbox-BLdBQVgd.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CRwwg4VQ.js";import"./FSLoader-DQSvmWsx.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-CN98aZYT.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-DXUxnIIu.js";import"./VMenu-9eL7kyJm.js";import"./dates-DFP4a3ym.js";import"./useTranslations-BehwFxDb.js";import"./FSDateTimeRangeField-DFz3p2UN.js";import"./FSDialogSubmit-DbxZJkpx.js";import"./FSDialog-BE45Emn0.js";import"./FSText-tLTPrprs.js";import"./FSCalendarTwin-DGDg4kb6.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useAppTimeZone-ByDiY2xy.js";import"./VLocaleProvider-DVewpGTh.js";import"./VBtn-CCHUxMdD.js";import"./FSClock-DTJ5ZY30.js";import"./FSSlider-hnsYHKKU.js";import"./VSlider-ePTQkUXn.js";import"./FSNumberField-DXsZgcGR.js";import"./FSForm-BUGdnKjM.js";import"./rules-C-NbTnZJ.js";import"./time-IoQ6C2aa.js";const Kt={title:"Foundation/Shared/Input fields/TermField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00",meta:{}}},render:(d,{argTypes:n})=>({components:{FSCol:a,FSTermField:o},props:Object.keys(n),setup(){return{...d}},template:`
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
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const Lt=["Variations"];export{t as Variations,Lt as __namedExportsOrder,Kt as default};
