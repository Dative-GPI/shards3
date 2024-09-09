import{F as i}from"./FSTermField-CLz7puGM.js";import{_ as d}from"./FSCol-Bk577joi.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-C0lWTIfj.js";import"./FSDialogMenu-BPvC2ERZ.js";import"./FSCard-D5wiJKub.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-C8ZtkfWa.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CxiNukW_.js";import"./proxiedModel-BE9FlVMJ.js";import"./anchor-DHDhudvL.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./locale-CMOn_BOp.js";import"./router-CbAEScZe.js";import"./transition-CQDsmRPd.js";import"./VDefaultsProvider-CztrVRTm.js";import"./FSSlideGroup-COYtI-Nu.js";import"./uuid-DTaye2KM.js";import"./FSButton-D9OonqCF.js";import"./FSClickable-CfNRAgb8.js";import"./VProgressCircular-DnrgPZB3.js";import"./tag-DxanhlL3.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSIcon-DYxpTLuT.js";import"./VIcon-DptP6m9n.js";import"./index-joExpvzU.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-BMnFEOfS.js";import"./FSWrapGroup-CSqxXTzY.js";import"./VInput-Dln06fOF.js";import"./density-BM1QLeh4.js";import"./form-CgybbRT3.js";import"./FSBaseField-DEWTBdWD.js";import"./VSpacer-YT0o3rZT.js";import"./FSTextField-BQbZuAPn.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./VLabel-BPqk0hPA.js";import"./loader-CbF0edCX.js";import"./rounded-BWAMdTmW.js";import"./index-jvVque46.js";import"./FSCheckbox-B0fh_Rt7.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-CB131b1X.js";import"./VImg-Da3f9R37.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-B3ak8RSo.js";import"./VList-DgcfM2IV.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-iR212XTF.js";import"./VMenu-DOKVMVxb.js";import"./dates-Ce7n-5qd.js";import"./useTranslations-DyPMaPr_.js";import"./FSDateTimeRangeField-B8ZNoe9n.js";import"./FSDialogSubmit-DxQsxGk4.js";import"./FSDialog-DNJJ7a7v.js";import"./FSText-DhsiUbil.js";import"./FSCalendarTwin-C080wQWB.js";import"./useDateFormat-DZcIDWp6.js";import"./datesTools-RiUw1NMp.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./VLocaleProvider-BKOxinwy.js";import"./VBtn-CJflX_3O.js";import"./FSClock-C5c4-tUJ.js";import"./FSSlider-DHANE1Eq.js";import"./VSlider-CaZ0_zbk.js";import"./FSNumberField-CPThLMwt.js";import"./FSForm-BnY1MqqQ.js";import"./rules-BlSYZiTY.js";import"./time-BOZ1S5aJ.js";const At={title:"Foundation/Shared/Input fields/TermField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(n,{argTypes:m})=>({components:{FSCol:d,FSTermField:i},props:Object.keys(m),setup(){return{...n}},template:`
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
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Bt=["Variations"];export{t as Variations,Bt as __namedExportsOrder,At as default};
