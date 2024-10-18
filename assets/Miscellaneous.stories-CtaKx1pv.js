import{F as l}from"./FSButton-AXdFIlyU.js";import{F as i}from"./FSForm-4A05UEAw.js";import{F as a}from"./FSText-gXvogAPJ.js";import{F as n}from"./FSAutocompleteRole-BhApfRGg.js";import{F as s}from"./FSMagicConfigField-Dmu_lXhg.js";import{F as d}from"./FSTextField-BBUnQO0k.js";import{T as u}from"./rules-BafDybJE.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSClickable-DPklQL2R.js";import"./FSCard-z3C03PoX.js";import"./FSCol-1_uutz8i.js";import"./css-QbtOnfd3.js";import"./useBreakpoints-DVKeO9mp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DbyavHsS.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-rLxUbVg1.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-CkszfNjV.js";import"./form-CLJq5y5w.js";import"./proxiedModel-KpugNjnZ.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-Clp5VsZs.js";import"./FSSearchField-BpmR-KE2.js";import"./useTranslations-CJK8D24x.js";import"./FSDialogMenu-BqCEDJgf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-B3vDJ_oZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DI73aZb3.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./index-B089V-om.js";import"./FSToggleSet-CYkL-DWy.js";import"./FSWrapGroup-CTP9J3mU.js";import"./VInput-BkciVi2d.js";import"./density-Dt_pQxP_.js";import"./FSBaseField-CvtGL7os.js";import"./FSCheckbox-DDwz0Q3r.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./FSFadeOut-BWI7EPuD.js";import"./FSLoader-zrFkhDTM.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CLULa7rH.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./rounded-uHrmshEX.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./VSelect-DyWO8MYr.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSChip-Ds3LgEau.js";import"./useRoleOrganisationTypes-ayjwzfDW.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./useRoleOrganisations-BCNNabxX.js";import"./useAutocomplete-CGXaBgzT.js";import"./useMagicFieldProvider-DOPz_gBc.js";import"./iframe-BjHE3RDJ.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-JQOqodiI.js";import"./FSButtonAddIcon-CV_0S4cz.js";import"./FSTranslateField-D8Let5st.js";import"./FSDialogSubmit-BOsNk9tc.js";import"./FSDialog-BMtCjeik.js";import"./useAppLanguages-BVRbUzML.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./useDateFormat-BNPZ7oj9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useAppTimeZone-gpO-zv_9.js";import"./time-CxERy6W9.js";const me={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const pe=["TestForm"];export{r as TestForm,pe as __namedExportsOrder,me as default};
