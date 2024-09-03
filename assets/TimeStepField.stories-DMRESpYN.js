import o from"./FSTimeStepField-CEZ9HLW3.js";import{_ as n}from"./FSCol-Bk577joi.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSNumberField-BRrHZTKi.js";import"./FSTextField-nbXKtPgl.js";import"./FSBaseField-DIHRCDOI.js";import"./FSSpan-C4TWI1ol.js";import"./useSlots-DXmhvOIb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./FSButton-Dxr_k2yH.js";import"./FSClickable-B6i4bUTy.js";import"./FSCard-IkM7vPXg.js";import"./VProgressCircular-BALYDMME.js";import"./tag-BDy8Psij.js";import"./FSIcon-CNrZYw3j.js";import"./VIcon-Dc5M3VhK.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSSelectField-CabfYM-e.js";import"./FSDialogMenu-DJMBxSqq.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DwZDosIV.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-D0rXU8K8.js";import"./FSWrapGroup-tsnhcXEt.js";import"./FSCheckbox-oizSWMk6.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-CORcN4YC.js";import"./VImg-tlatQCTU.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-DBjzeRFm.js";import"./VList-CE84Ungi.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-DDOJpQXv.js";import"./VMenu-BOpQjLNS.js";import"./time-BOZ1S5aJ.js";import"./useTranslations-DyPMaPr_.js";const yt={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const ft=["Variations"];export{t as Variations,ft as __namedExportsOrder,yt as default};
