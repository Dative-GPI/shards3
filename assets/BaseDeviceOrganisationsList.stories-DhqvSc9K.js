import e from"./FSBaseDeviceOrganisationsList-B8iYOyAr.js";import{F as l}from"./FSDataTable-BFXhzFXn.js";import"./vue.esm-bundler-DSwHwgKw.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-w21Z835x.js";import"./useAppTimeZone-jR0R4uqF.js";import"./customProperties-DqkON8hk.js";import"./FSIconCheck-wDAipvEC.js";import"./FSIcon-TpFvudaY.js";import"./useBreakpoints-BjF6TIJH.js";import"./useColors-C4EmrkDp.js";import"./index-DfSX31J9.js";import"./theme-4AjdAhIV.js";import"./css-XXwFKvUE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-CdjjMQ6V.js";import"./color-uBYwhjku.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./FSText-DiZ1SltH.js";import"./useDateFormat-DqGsDyOM.js";import"./useAppLanguageCode-Bj2soIpN.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-BhPzmPwL.js";import"./FSDeviceOrganisationTileUI-CpHri9Ck.js";import"./FSStatusesCarousel-C8XQqk4g.js";import"./FSButton-CN1ZIktz.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-Dg_E4dui.js";import"./FSCard-Dby8iWqU.js";import"./FSCol-DdGVae5t.js";import"./FSRow-BtkEywPN.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./FSWindow-DRuJd0N9.js";import"./group-r_jY4ze7.js";import"./proxiedModel-D4Pgijkw.js";import"./locale-BsRwbRmi.js";import"./VBtn-WSruA80Q.js";import"./border-C-pp2UFW.js";import"./density-BfjPyHiq.js";import"./elevation-DiTecsj1.js";import"./rounded-ZilIy1Oq.js";import"./dimensions-CF0PFV-D.js";import"./loader-kTKV0tNq.js";import"./anchor-7worbrUf.js";import"./router-C4I-dA4c.js";import"./index-BOr5YZLb.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./scopeId-DneNdOj5.js";import"./ssrBoot-DEXW_-kf.js";import"./transition--2cAMn_j.js";import"./FSStatus-CItUP4bv.js";import"./FSChip-CCuCpK86.js";import"./FSColor-C2yw3GDI.js";import"./VMenu-B9SE09pj.js";import"./VOverlay-DfQDvHFU.js";import"./forwardRefs-DWGaNmQL.js";import"./display-CL7KZq5h.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DqjCujeg.js";import"./FSDivider-DHqZtz-q.js";import"./FSImage-Bn2aaMvR.js";import"./FSImageUI-BP1ruBGV.js";import"./FSLoader-CB4bV0N-.js";import"./VImg-DSalXW5F.js";import"./index-D4rR88Q2.js";import"./imageDetails-B1Ivd7HU.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BC5Ev-17.js";import"./useAppAuthToken-BCmX_25A.js";import"./FSTile-BeVjL0yn.js";import"./FSCheckbox-Bv5yvgVA.js";import"./useRules-CaMdh5L0.js";import"./VSelectionControl-CTHKpAmd.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./index-GTe7atjb.js";import"./form-BWUCG2_i.js";import"./FSTagGroup-CRdvgp7J.js";import"./FSWrapGroup-DErk_6Fw.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./FSTag-DyQUQmPg.js";import"./FSSlideGroup-DmKSX9y1.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./useDeviceOrganisations-Ch_eii8A.js";import"./hubFactory-BpRSINJq.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-CKZMTO2G.js";import"./FSSearchField-izSr2Wf8.js";import"./FSTextField-CnPHb7kI.js";import"./FSBaseField-D2ow2gVm.js";import"./VField-YT2KDH-x.js";import"./FSSelectField-eGgC7ePy.js";import"./VList-CvbK1pQh.js";import"./VDialog-BNlMo7ah.js";import"./FSToggleSet-Co6Wb6go.js";import"./FSFadeOut-CQmN3qQC.js";import"./FSRadio-QZf7aiMX.js";import"./VSelect-CLcgsW2i.js";import"./FSOptionGroup-ZBHuZ8qZ.js";import"./filter-C1K_d8Vd.js";import"./filter-CxK7Dp-c.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})},t={args:{modelValue:[],tableCode:"devices2",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices1',
    connectedOnly: false
  },
  render: args => ({
    components: {
      FSBaseDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices2',
    connectedOnly: false
  },
  render: args => ({
    components: {
      FSBaseDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Ct=["Default","CustomProperties"];export{t as CustomProperties,o as Default,Ct as __namedExportsOrder,vt as default};
