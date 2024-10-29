import{F as l}from"./FSButton-CL_za1Dz.js";import{F as i}from"./FSForm-4A05UEAw.js";import{F as a}from"./FSText-BV49O4zh.js";import{F as n}from"./FSAutocompleteRole-CyRAmzdX.js";import{F as s}from"./FSMagicConfigField-DfJqePfI.js";import{F as d}from"./FSTextField-Dz3TuJjO.js";import{T as u}from"./rules-CyBAb4Hh.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSClickable-1JFt1tAh.js";import"./FSCard-CBOjzTDC.js";import"./FSCol-BvqytbKT.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CbEgVN08.js";import"./useColors-r8nvatqt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-CvjHaRpL.js";import"./form-CLJq5y5w.js";import"./proxiedModel-KpugNjnZ.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-Bi9yjR-_.js";import"./FSSearchField-BZ0BuXDA.js";import"./useTranslations-CJK8D24x.js";import"./VList-Cw9EjfMs.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./index-B089V-om.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./index-Cr304eD2.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./FSSlideGroup-Cdvxn-7r.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DqV2jRKX.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CtnEZ-QL.js";import"./FSWrapGroup-CDPc2Zen.js";import"./VInput-BkciVi2d.js";import"./FSBaseField-kRvwdySD.js";import"./FSCheckbox-BuNOyTVK.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./FSFadeOut-qg65ZIq1.js";import"./FSLoader-t85MEsQz.js";import"./FSRadio-DYhcD128.js";import"./VSelect-B0802BOF.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSChip-CZIsa9Si.js";import"./useRoleOrganisationTypes-ayjwzfDW.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./useRoleOrganisations-BCNNabxX.js";import"./useAutocomplete-iIeMkOIa.js";import"./useMagicFieldProvider-D-WX47nj.js";import"./iframe-BreNUsHm.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-C2K7yOdA.js";import"./FSButtonAddIcon-DVxyeCDp.js";import"./FSTranslateField-D2f3kE2a.js";import"./FSDialogSubmit-BJPa-KgE.js";import"./FSDialog-C_R-VXPG.js";import"./useAppLanguages-BVRbUzML.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./useDateFormat-CLdrxMO6.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useAppTimeZone-BUrTBgYP.js";import"./time-CxERy6W9.js";const ie={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSForm v-model="args.valid" variant="submit">
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <FSText>
            Form validity: {{ args.valid }}
          </FSText>
          <FSTextField
            label="Name"
            :rules="[args.textRules.required()]"
            :required="true"
            v-model="args.name"
          />
          <FSAutocompleteRole
            label="Role"
            :rules="[args.textRules.required(), args.textRules.phone()]"
            :required="true"
            v-model="args.roleId"
            v-model:type="args.roleType"
          />
          <FSMagicConfigField
            :type="args.fieldType"
            v-model:labelDefault="args.fieldLabel"
            v-model:translations="args.fieldTranslations"
            v-model="args.fieldValue"
          />
          <div style="display: flex; gap: 10px;">
            <FSButton
              type="submit"
              label="Submit form"
            />
          </div>
        </div>
      </FSForm>
    </div>`})};var e,t,o;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      name: "",
      roleId: null,
      roleType: 0,
      fieldLabel: "",
      fieldTranslations: [],
      fieldValue: "",
      fieldType: 3,
      textRules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSText,
      FSTextField,
      FSAutocompleteRole,
      FSMagicConfigField,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSForm v-model="args.valid" variant="submit">
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <FSText>
            Form validity: {{ args.valid }}
          </FSText>
          <FSTextField
            label="Name"
            :rules="[args.textRules.required()]"
            :required="true"
            v-model="args.name"
          />
          <FSAutocompleteRole
            label="Role"
            :rules="[args.textRules.required(), args.textRules.phone()]"
            :required="true"
            v-model="args.roleId"
            v-model:type="args.roleType"
          />
          <FSMagicConfigField
            :type="args.fieldType"
            v-model:labelDefault="args.fieldLabel"
            v-model:translations="args.fieldTranslations"
            v-model="args.fieldValue"
          />
          <div style="display: flex; gap: 10px;">
            <FSButton
              type="submit"
              label="Submit form"
            />
          </div>
        </div>
      </FSForm>
    </div>\`
  })
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const me=["TestForm"];export{r as TestForm,me as __namedExportsOrder,ie as default};
