import{F as i}from"./FSTermField-NVgCTEKB.js";import{F as d}from"./FSCol-CYWCfIBP.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-l1EjbmSi.js";import"./FSDialogMenu-BA4IKkHH.js";import"./FSCard-C6D9gNrD.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-BWKJNLz8.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Du5JXqac.js";import"./proxiedModel-Atn7Z0Ko.js";import"./anchor-0mwNUa2-.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./locale-BJQwrXJ7.js";import"./router-DxFny788.js";import"./transition-DhTIerNz.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./FSSlideGroup-q5vQbkmI.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DkRtY_o-.js";import"./FSButton-tjzQSrUn.js";import"./FSClickable-BWJokye8.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CaaGuK6D.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./index-UH0ZuYvc.js";import"./FSToggleSet-DdGuNy3E.js";import"./FSWrapGroup-Dplk4rjv.js";import"./VInput-DGUvNq3c.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./FSBaseField-D2wwYX9r.js";import"./VSpacer-Di7g3RCw.js";import"./FSTextField-COQ4CiKa.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./VLabel-33JaQml4.js";import"./loader-BYp4SDfR.js";import"./rounded-ErtzAGHK.js";import"./index-DS9MhfY5.js";import"./FSCheckbox-Bdwx0Alv.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./FSFadeOut-DevRILST.js";import"./FSLoader-BFHjXl9p.js";import"./elevation-JfXKLVfD.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-j9cBSzLL.js";import"./VMenu-CuKNZEBs.js";import"./dates-DFP4a3ym.js";import"./useTranslations-BehwFxDb.js";import"./FSDateTimeRangeField-9YWwdwGq.js";import"./FSDialogSubmit-cRy49OK4.js";import"./FSDialog-KaMMNoX7.js";import"./FSText-7jyalPrS.js";import"./FSCalendarTwin-CpshRqTz.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useAppTimeZone-ByDiY2xy.js";import"./VLocaleProvider-DR0IaCBg.js";import"./VBtn-BUwP05fv.js";import"./FSClock-DZxeGKBP.js";import"./FSSlider-COcqcW8-.js";import"./VSlider-CGSYcLks.js";import"./FSNumberField-BJokFWxE.js";import"./FSForm-CUiL74ui.js";import"./rules-C-NbTnZJ.js";import"./time-IoQ6C2aa.js";const Lt={title:"Foundation/Shared/Input fields/TermField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(m,{argTypes:n})=>({components:{FSCol:d,FSTermField:i},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Mt=["Variations"];export{t as Variations,Mt as __namedExportsOrder,Lt as default};
