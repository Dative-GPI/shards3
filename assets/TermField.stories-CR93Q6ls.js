import{F as i}from"./FSTermField-YZj0eN7m.js";import{F as d}from"./FSCol-TPWSQPHs.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-JuFplq5n.js";import"./FSDialogMenu-Cy3SMoNl.js";import"./FSCard-_NwrZC8j.js";import"./FSRow-CmD7j8Pv.js";import"./css-BkQhD285.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CdvgF10X.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BKGJvBEr.js";import"./proxiedModel-G1bil5DU.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-CN6cFKLz.js";import"./uuid-DTaye2KM.js";import"./FSButton-DD-NIQC1.js";import"./FSClickable-6DicpEF8.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./index-DOC0sH28.js";import"./FSToggleSet-B7XCH0ev.js";import"./FSWrapGroup-D3vzPBUf.js";import"./VInput-CYsTqNhA.js";import"./density-BPFRY_Tg.js";import"./form-B7NlTRtd.js";import"./FSBaseField-DjLbenuy.js";import"./VSpacer-CrqXaTz-.js";import"./FSTextField-Ciu-sNKi.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./VLabel-jMK3Bs2x.js";import"./loader-CiSVFYJ7.js";import"./rounded-Cely44IK.js";import"./index-Cc8xmT7Y.js";import"./FSCheckbox-UZa98yAo.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-DtBOlAO7.js";import"./FSLoader-DpMpI5Qw.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-BjrxbHLV.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-DRjgQ4TJ.js";import"./VMenu-BkqMtGEU.js";import"./dates-Ce7n-5qd.js";import"./useTranslations-f9CWAvtI.js";import"./FSDateTimeRangeField-pVQaKMAU.js";import"./FSDialogSubmit-Canxo7DQ.js";import"./FSDialog-CQj5vH4e.js";import"./FSText-Der-WemT.js";import"./FSCalendarTwin-BGOhFcO_.js";import"./useDateFormat-B9AxxJcA.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useAppTimeZone-oM-olaqI.js";import"./VLocaleProvider-BT2X4OIj.js";import"./VBtn-el1a73sG.js";import"./FSClock-CQT57jDl.js";import"./FSSlider-BV4lx6ij.js";import"./VSlider-HRDOL57F.js";import"./FSNumberField-B_NdCiWw.js";import"./FSForm-DJBvIX_e.js";import"./rules-DaaaxQ7y.js";import"./time-ELt5M3Ql.js";const Ht={title:"Foundation/Shared/Input fields/TermField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(m,{argTypes:n})=>({components:{FSCol:d,FSTermField:i},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Jt=["Variations"];export{t as Variations,Jt as __namedExportsOrder,Ht as default};
