import{F as l}from"./FSButton-C5MQI7ea.js";import{F as i}from"./FSForm-DDxQSyQW.js";import{F as a}from"./FSText-BxoWgsr8.js";import{F as n}from"./FSAutocompleteRole-OKaqO707.js";import{F as s}from"./FSMagicConfigField-DuiYqSC1.js";import{F as d}from"./FSTextField-D5y-h9FL.js";import{T as u}from"./rules-CvtjsqoL.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./FSCol-Bj1WIVag.js";import"./css-DVhR3h-A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D4JfwQlG.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-vAlkpflo.js";import"./form-D-VMHmUh.js";import"./proxiedModel-BN8GSVE7.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BIP7XLeM.js";import"./FSSearchField-C0n2-EIx.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDialogMenu-CzbYQerh.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./anchor-CiFPvmMB.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./locale-BGMMnFfJ.js";import"./router-lEm-a6ws.js";import"./transition-BvKGRC-_.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-CcLnrzQE.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./index-D2mfwXxT.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSWrapGroup-CRmVPaPn.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./FSBaseField-CMqv-0AW.js";import"./VSpacer-DLFo12A6.js";import"./FSCheckbox-18K-cCtB.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSLoader-DxfJongP.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./rounded-C73YOAN4.js";import"./VImg-Bj7MyRJQ.js";import"./index-BPQCAcxH.js";import"./VSelect-Q7PPqJI7.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";import"./FSChip-D308mzkb.js";import"./useRoleOrganisationTypes-CdIboQdt.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useRoleOrganisations-BrAbcrm6.js";import"./useAutocomplete-Cg3DBVgY.js";import"./useMagicFieldProvider-BJDfsnTl.js";import"./iframe-CXjfdGuo.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-g_1rl0y2.js";import"./FSButtonAddIcon-BKuh5puS.js";import"./FSTranslateField-ClsWqmBM.js";import"./FSDialogSubmit-DjjbhTSJ.js";import"./FSDialog-CncBWQNh.js";import"./useAppLanguages-DQ8w8vvs.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useAppTimeZone-DLNqwrXb.js";import"./time-COVV56Hd.js";const me={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
