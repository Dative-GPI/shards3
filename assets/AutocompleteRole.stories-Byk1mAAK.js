import{F as l}from"./FSAutocompleteRole-D9YN9YCX.js";import{F as m}from"./FSCol-Co9r7Klj.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSAutocompleteField-BVddpNXD.js";import"./FSSearchField-jGkYIgq2.js";import"./FSTextField-DxJVxYys.js";import"./FSBaseField-lEL5efap.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D546kqFt.js";import"./css-D18ueKtB.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./VSpacer-DaRxrr8q.js";import"./color-DpQhyQC8.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./FSCard-uGx4g-q0.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSIcon-DKHuRfPI.js";import"./VIcon-C65wMs2G.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./form-lyoENh9E.js";import"./loader-BoG0AaGl.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./useTranslations-ZMyFjr19.js";import"./FSDialogMenu-1exdynOQ.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-Cseplt4t.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./FSCheckbox-BJ0zq37S.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-D40FnrcD.js";import"./FSLoader-BMQDJgx0.js";import"./elevation-8SXivnh1.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./filter-_ePnXriG.js";import"./FSChip-Dvm8S3l9.js";import"./useRoleOrganisationTypes-CLY-Q4Ge.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";import"./useRoleOrganisations-1-WomYCu.js";import"./useAutocomplete-Crlbd48I.js";const qt={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(p,{argTypes:i})=>({components:{FSAutocompleteRole:l,FSCol:m},props:Object.keys(i),setup(){return{...p}},template:`
    <FSCol>
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with multiple selection"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: null,
      type2: 0,
      value3: null,
      type3: 0,
      value4: null,
      type4: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteRole,
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
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with multiple selection"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const zt=["Variations"];export{t as Variations,zt as __namedExportsOrder,qt as default};
