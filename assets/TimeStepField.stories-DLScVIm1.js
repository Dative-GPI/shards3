import o from"./FSTimeStepField-Bq6DAEkb.js";import{_ as n}from"./FSCol-Bk577joi.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSNumberField-BS8mx6lC.js";import"./FSTextField-BrYnbjAt.js";import"./FSBaseField-CGde08E6.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-s1xYWcRF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D8Xq3tpQ.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./FSButton-6xwgcgkA.js";import"./FSClickable-Bf0xM50-.js";import"./FSCard-CsyvoMST.js";import"./VProgressCircular-DnrgPZB3.js";import"./tag-DxanhlL3.js";import"./FSIcon-DhgV6LdF.js";import"./VIcon-DptP6m9n.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./FSSelectField-CEKk7j9f.js";import"./FSDialogMenu-CgBlLVIv.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-SgKZc0Dn.js";import"./uuid-DTaye2KM.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-CUrOC1IX.js";import"./FSWrapGroup-AYmlnqiR.js";import"./FSCheckbox-2nJSFmbZ.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-DFZnJQQe.js";import"./VImg-BsFS2wEb.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-DKr_ONVF.js";import"./VList-DonjtRcz.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-BzPZwDdx.js";import"./VMenu-DOKVMVxb.js";import"./time-BOZ1S5aJ.js";import"./useTranslations-DyPMaPr_.js";const yt={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
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
