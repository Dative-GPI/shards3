import{F as p}from"./FSButton-D0V1nthY.js";import{F as i}from"./FSForm-DmQ-ofLg.js";import{F as a}from"./FSText-oSl_EFxG.js";import{F as n}from"./FSAutocompleteRole-UNTCiHdo.js";import{F as s}from"./FSMagicConfigField-C0HDFnZs.js";import{F as d}from"./FSTextField-KD4CRsHh.js";import{T as u}from"./rules-CFwU2wVR.js";import"./vue.esm-bundler-BATn8cDU.js";import"./FSClickable-DYDREYld.js";import"./FSCard-CAgq3XuJ.js";import"./FSCol-D9tDKebi.js";import"./css-C5boehQC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Gvoj2sTW.js";import"./useColors-D4RQatlL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C-7Kj0lB.js";import"./VProgressCircular-Bi_qA2kG.js";import"./color-jM82jTdX.js";import"./VIcon-BgP_kyAH.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./FSIcon-Kk713u84.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-kUwtQTfK.js";import"./FSSearchField-T0sLpl1S.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-aCLCOYe1.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./anchor-CBLqXyZM.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./VDefaultsProvider-DeTRucHm.js";import"./FSRadioGroup-Dx8IK8Wf.js";import"./FSRadio-CXuTMsbF.js";import"./useRules-C6ry6kys.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./VLabel-Bh2Q5uKK.js";import"./FSToggleSet-Cm_kcpK6.js";import"./FSSlideGroup-BrYapIVT.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-CZbFj3Ra.js";import"./FSBaseField-axT9dPIw.js";import"./VSpacer-Bp_e_Kvt.js";import"./FSCheckbox-Di-LctwI.js";import"./FSFadeOut-8zEGCDGr.js";import"./FSLoader-BBhuF9xD.js";import"./elevation-oWdkHiXv.js";import"./VSelect-BU_B2xFx.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./rounded-BwvX6bZn.js";import"./VImg-euCAhqKz.js";import"./index-Bv2UUMCu.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSChip-CYf0knBJ.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DxU3iujb.js";import"./useAppOrganisationId-9tSyFyAD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CvKYYcO3.js";import"./useAutocomplete-BnddAth7.js";import"./useMagicFieldProvider-B2vvv93d.js";import"./iframe-BYsShWN7.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-0MT808XE.js";import"./FSTranslateField-C6BYVKPY.js";import"./FSDialogSubmit-B7d9JDQ1.js";import"./FSDialog-DM-K97kC.js";import"./useAppLanguages-j8CTq3mK.js";import"./VField-36dIboNy.js";import"./loader-YJ_823dI.js";import"./useAppTimeZone-DiegiNYY.js";import"./useAppLanguageCode-B8bYxE1s.js";import"./time-DZLPB9rY.js";const Xe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
    </div>`})};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Ye=["TestForm"];export{e as TestForm,Ye as __namedExportsOrder,Xe as default};
