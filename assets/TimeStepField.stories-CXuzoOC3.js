import o from"./FSTimeStepField-QiW5oJ92.js";import{_ as n}from"./FSCol-BA_LQqMv.js";import"./vue.esm-bundler--l9E1zCM.js";import"./FSNumberField-4hCIIUpj.js";import"./FSTextField-DT4mycsE.js";import"./FSBaseField-DyRfpoCH.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-Na5M-jYy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./FSButton-DC-WKUnK.js";import"./FSClickable-CWlCNUE_.js";import"./FSCard-BmtixItE.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./FSIcon-CA5AHnUB.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSSelectField-r9Xvpl1y.js";import"./FSDialogMenu-2Sog7wcL.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-PC9JFQCq.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BtiTla3P.js";import"./FSWrapGroup-CPrCAtj5.js";import"./FSCheckbox-CuaZdV3q.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-DZ611XP-.js";import"./VImg-BDKzFUYZ.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-gVzwmWVQ.js";import"./VList-DEWTNoUD.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-BDwb1eeM.js";import"./VMenu-DGJWui2w.js";import"./time-BdfI25e1.js";import"./useTranslations-ByKtt_-5.js";const Tt={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const yt=["Variations"];export{t as Variations,yt as __namedExportsOrder,Tt as default};
