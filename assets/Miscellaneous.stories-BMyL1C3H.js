import{F as l}from"./FSButton-D8KNVcat.js";import{F as i}from"./FSForm-DZIkkCmz.js";import{F as a}from"./FSText-CcQBLJU9.js";import{F as n}from"./FSAutocompleteRole-CqpdCeB-.js";import{F as s}from"./FSMagicConfigField-Cn2CcyeB.js";import{F as d}from"./FSTextField-knlUmIuH.js";import{T as u}from"./rules-bUpokFzK.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSCard-BZyb3dNk.js";import"./FSCol-CVj0zcU5.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./FSRow-CYD73_tT.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./VProgressCircular-DfVaP_TZ.js";import"./color-D4nM6Ihv.js";import"./resizeObserver-D4qCRTFx.js";import"./VIcon-DBlUULm8.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSIcon-C0akNC9K.js";import"./form-thVqu4eJ.js";import"./proxiedModel-BmbZrdih.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-B1f-d-lL.js";import"./FSSearchField-BNFmKU-7.js";import"./useTranslations-Dmqoe3Kp.js";import"./VList-_wRy0k6Y.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./anchor-BMg_Hu1U.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./locale-R8GaLlvb.js";import"./router-BPv_tYld.js";import"./transition-DtcXiLpW.js";import"./VDefaultsProvider-EJiha1S2.js";import"./index-D1hHR51g.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./density-CRkSANTr.js";import"./elevation-C84Wb_jC.js";import"./rounded-CG6jOZvY.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./index-BuamrmjQ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./VInput-11LmaO3P.js";import"./FSBaseField-cmky_v29.js";import"./FSCheckbox-BdK031Hz.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./VLabel-D_hiLcnP.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";import"./FSChip-CyfHnFR3.js";import"./useRoleOrganisationTypes-BFSXS3EN.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";import"./useRoleOrganisations-DDFC6ugK.js";import"./useAutocomplete-BepmEoya.js";import"./useMagicFieldProvider-D2rP_o9t.js";import"./iframe-BQ5N5mAi.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-DKWM6rNx.js";import"./FSButtonAddIcon-vJg-C_BE.js";import"./FSTranslateField-Da1eVv-Q.js";import"./FSDialogSubmit-BZQUsIWu.js";import"./FSDialog-DaqgkkWF.js";import"./useAppLanguages-siB11whh.js";import"./VField-Ddzu1ph-.js";import"./loader-BvdvxiyE.js";import"./time-u-ATiSbz.js";import"./datesTools-jb_azIFs.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-C9QY5oFQ.js";import"./useAppLanguageCode-CbHleqYG.js";import"./useAppTimeZone-Cp_499X8.js";import"./startOfDay-C4pDH4rb.js";const pe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const le=["TestForm"];export{r as TestForm,le as __namedExportsOrder,pe as default};
