import{F as l}from"./FSAutocompleteRole-BxmEsR_V.js";import{F as m}from"./FSCol-D8gLxM2E.js";import"./vue.esm-bundler-Ddr6MgcY.js";import"./FSAutocompleteField-C1xJdMRs.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./FSSpan-Bh1X02mE.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CSQtiyAx.js";import"./css-CxoeZkpP.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./FSCard-Bfo4Z0Zf.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSIcon-DfjSexyz.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./transition-BtBp4lzQ.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./locale-CA7yUTVs.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./useTranslations-DgvmBCqU.js";import"./VList-BsRjN0ZI.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./elevation-BNOJtsSY.js";import"./index-BF2Ge4Ib.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-8udoapu6.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-CjZBl77R.js";import"./FSWrapGroup-DCzWuvHX.js";import"./FSCheckbox-3iIuKfLX.js";import"./VSelectionControl-DbX2q5FD.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSLoader-PksHGtEK.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./filter-MqAtiUjL.js";import"./FSChip-B-qI2KQy.js";import"./useRoleOrganisationTypes-CDbLqBfa.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-H3XPfy7N.js";import"./useRoleOrganisations-Bsk8GzU0.js";import"./useAutocomplete-CpO4R9E4.js";const qt={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(p,{argTypes:i})=>({components:{FSAutocompleteRole:l,FSCol:m},props:Object.keys(i),setup(){return{...p}},template:`
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
