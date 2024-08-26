import o from"./FSTimeStepField-BzujHlJO.js";import{_ as n}from"./FSCol-CeBQ3oDD.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSNumberField-Bf-yHLLb.js";import"./FSTextField-Cu62_PPc.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Dfo2nEmE.js";import"./css-DYbKqpMF.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./FSButton-Bvd0naOX.js";import"./FSClickable-Bx8zcCZW.js";import"./FSCard-CU93xE1v.js";import"./VProgressCircular-CQOkkHxu.js";import"./VIcon-CB8o8wL4.js";import"./FSIcon-CYA01Pg8.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./index-CtF1TxK6.js";import"./transition-DYmm1B3d.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./locale-x-KasAKq.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./loader-C4nPQ1_b.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./FSSelectField-1WlkYPfu.js";import"./FSDialogMenu-BsX2O1U3.js";import"./VDialog-CuBQDUUO.js";import"./VOverlay-DN1mcZZT.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./router-I0roKE-i.js";import"./FSRadioGroup-B2deqS4u.js";import"./FSRadio-4MLyqnfX.js";import"./VSelectionControl-CQKVm7EG.js";import"./index-Bfb9sPge.js";import"./FSCheckbox-DNmwW8YA.js";import"./FSFadeOut-DVFTxjCH.js";import"./uuid-DTaye2KM.js";import"./VList-DeInaXPz.js";import"./ssrBoot-D_SIKPEL.js";import"./border-BytU_KR8.js";import"./elevation-BS7jUP1v.js";import"./VImg-MapJeLY6.js";import"./VSelect-CgtGyyn0.js";import"./VMenu-5z8CiYXe.js";import"./VSlideGroup-xubiTtnp.js";import"./group-C6nVA5p1.js";import"./time-sTrSTvHi.js";import"./useTranslations-yeF_ketc.js";const bt={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
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
    </FSCol>`})};var e,i,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const ht=["Variations"];export{t as Variations,ht as __namedExportsOrder,bt as default};
