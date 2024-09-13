import{F as i}from"./FSTermField-Di2EnTJ2.js";import{_ as d}from"./FSCol-YmDykHL-.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-CTZAdwe6.js";import"./FSDialogMenu-BULt7rkH.js";import"./FSCard-D-fFYNec.js";import"./FSRow-CVY2l52N.js";import"./css-DLfrm0pR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BygXFKwQ.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSSlideGroup-CcWB8C_f.js";import"./uuid-DTaye2KM.js";import"./FSButton-BNq-0lOE.js";import"./FSClickable-DdK5daMz.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-D23Cpf0F.js";import"./VIcon-BIpY_noq.js";import"./index-CHbvZ5Sj.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-CI3bzWWf.js";import"./FSWrapGroup-Choo5L6h.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./FSBaseField-_Isn_Ha_.js";import"./VSpacer-C4plVoTE.js";import"./FSTextField-BKDOMXYp.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./VLabel-owjBjdIA.js";import"./loader-pPiux2KM.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCheckbox-VrXx14Lw.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-D96pvLZm.js";import"./FSLoader-CtbqJzfZ.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BDiw7DXd.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B_I0944e.js";import"./VMenu-BVgNprPc.js";import"./dates-Ce7n-5qd.js";import"./useTranslations-CdSqQFV3.js";import"./FSDateTimeRangeField-C76PXLCr.js";import"./FSDialogSubmit-Bwo2dchA.js";import"./FSDialog-GnxW2lpE.js";import"./FSText-DyldgdXP.js";import"./FSCalendarTwin-CA4ya-4T.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./useAppTimeZone-D_npl1cn.js";import"./VLocaleProvider-DKglj9wp.js";import"./VBtn-CC1p3R0h.js";import"./FSClock-hGYlenNk.js";import"./FSSlider-BQ7u4iyC.js";import"./VSlider-BeqB4nnW.js";import"./FSNumberField-J-XofX2K.js";import"./FSForm-CVvlYXog.js";import"./rules-Bn2gOiel.js";import"./time-uorXHrJ8.js";const Bt={title:"Foundation/Shared/Input fields/TermField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(n,{argTypes:m})=>({components:{FSCol:d,FSTermField:i},props:Object.keys(m),setup(){return{...n}},template:`
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
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Gt=["Variations"];export{t as Variations,Gt as __namedExportsOrder,Bt as default};
