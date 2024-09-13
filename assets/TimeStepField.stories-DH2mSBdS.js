import o from"./FSTimeStepField-O2l-nPsk.js";import{_ as n}from"./FSCol-YmDykHL-.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSNumberField-CziegNlS.js";import"./FSTextField-njv1PMZC.js";import"./FSBaseField-D0H6MTaD.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CVY2l52N.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./FSButton-DCb8Rtcs.js";import"./FSClickable-Cih2yMcy.js";import"./FSCard-uUCmIZ5a.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSIcon-CYJlZG8j.js";import"./VIcon-BIpY_noq.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSSelectField-SZYrzr0B.js";import"./FSDialogMenu-PIT4Re7T.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-iez-IKK6.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DkbvJUl_.js";import"./FSWrapGroup-BZdyHaze.js";import"./FSCheckbox-D9jDFQ0_.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSLoader-DuEJL8Ft.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-DrxX1eSV.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-CcomL_sg.js";import"./VMenu-BVgNprPc.js";import"./time-uorXHrJ8.js";import"./useTranslations-CdSqQFV3.js";const ft={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})};var i,e,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: {
        unit: 2,
        value: 0
      },
      value2: {
        unit: 4,
        value: 1
      },
      value3: {
        unit: 5,
        value: 1
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeStepField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const wt=["Variations"];export{t as Variations,wt as __namedExportsOrder,ft as default};
