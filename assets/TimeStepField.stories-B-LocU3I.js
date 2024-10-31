import o from"./FSTimeStepField-kQgbbH1y.js";import{F as n}from"./FSCol-BvqytbKT.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSNumberField-M1Feu5NU.js";import"./FSTextField-DavtGNe9.js";import"./FSBaseField-kRvwdySD.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-r8nvatqt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./FSButton-DSUuKlnr.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-Dv9jZ2SG.js";import"./FSCard-CBOjzTDC.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSIcon-CvjHaRpL.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSSelectField-S8Rrt-Eq.js";import"./FSDialogMenu-UKP76pyV.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-SUHx-DYG.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CWkFzDlU.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-BsSRvUgm.js";import"./FSWrapGroup-CDPc2Zen.js";import"./FSCheckbox-BuNOyTVK.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-qg65ZIq1.js";import"./FSLoader-t85MEsQz.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-DYhcD128.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-DpktbJ_S.js";import"./VMenu-DQq2E1HW.js";import"./time-CxERy6W9.js";import"./useTranslations-CJK8D24x.js";const qt={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const Ut=["Variations"];export{t as Variations,Ut as __namedExportsOrder,qt as default};
