import{F as p}from"./FSButton-DC-WKUnK.js";import{F as i}from"./FSForm-RyJxgkZj.js";import{F as a}from"./FSText-DQYBciAj.js";import{F as n}from"./FSAutocompleteRole-rBfeFa2G.js";import{F as s}from"./FSMagicConfigField-RSJTm0ot.js";import{F as d}from"./FSTextField-DT4mycsE.js";import{T as u}from"./rules-CL86x7CD.js";import"./vue.esm-bundler--l9E1zCM.js";import"./FSClickable-CWlCNUE_.js";import"./FSCard-BmtixItE.js";import"./FSCol-BA_LQqMv.js";import"./css-CqyMbT8T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DW_Nd3uI.js";import"./useColors-Na5M-jYy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-uJWLcFzd.js";import"./VProgressCircular-DiflYTWZ.js";import"./color-DkN3uAGq.js";import"./VIcon-CRzxwZ_P.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSIcon-CA5AHnUB.js";import"./form-26vhu4DQ.js";import"./proxiedModel-DBJRU-Dx.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-xyQweoxe.js";import"./FSSearchField-BzreH9pe.js";import"./useTranslations-ByKtt_-5.js";import"./FSDialogMenu-2Sog7wcL.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./anchor-CJDpEDtq.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./locale-DRqPrS0N.js";import"./router-B0OmHOdA.js";import"./transition-CYrBIr8o.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./FSSlideGroup-PC9JFQCq.js";import"./uuid-DTaye2KM.js";import"./index-U_F843Id.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BtiTla3P.js";import"./FSWrapGroup-CPrCAtj5.js";import"./VInput-exXSDqX0.js";import"./density-BES7uE0q.js";import"./FSBaseField-DyRfpoCH.js";import"./VSpacer-CY3ZXRlU.js";import"./FSCheckbox-CuaZdV3q.js";import"./useRules-eaGGgTH2.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./VLabel-CtWliwLG.js";import"./FSFadeOut-DZ611XP-.js";import"./VImg-BDKzFUYZ.js";import"./elevation-Cf1uc8UZ.js";import"./rounded-B2xBfeOT.js";import"./index-CDY7nOpr.js";import"./FSRadio-gVzwmWVQ.js";import"./VList-DEWTNoUD.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-BDwb1eeM.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";import"./FSChip-Jt6fKE9B.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BcjN1n8z.js";import"./useAppOrganisationId-CtPU_OX2.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BJn24iiy.js";import"./useAutocomplete-BK0ibAFa.js";import"./useMagicFieldProvider-B1iXmbsF.js";import"./iframe-CsXseLOA.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-BvFExiK-.js";import"./FSTranslateField-CiRzOXU9.js";import"./FSDialogSubmit-C9zBvcP_.js";import"./FSDialog-B6ymRF8X.js";import"./useAppLanguages-DUX7cET8.js";import"./VField-4heSQh6E.js";import"./loader-BeDPJNvc.js";import"./useDateFormat-BeXuLiFb.js";import"./useAppLanguageCode-0juUkaeD.js";import"./useAppTimeZone-D5nI5Dd_.js";import"./time-BdfI25e1.js";const We={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Xe=["TestForm"];export{e as TestForm,Xe as __namedExportsOrder,We as default};
