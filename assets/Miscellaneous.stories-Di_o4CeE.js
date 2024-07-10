import{F as p}from"./FSButton-Do7vvvNJ.js";import{F as i}from"./FSForm-1pcMIyZi.js";import{F as a}from"./FSText-CvQJXkay.js";import{F as n}from"./FSAutocompleteRole-VCOMudKp.js";import{F as s}from"./FSMagicConfigField-Bxd8jxDM.js";import{F as d}from"./FSTextField-BJOz_lKI.js";import{T as u}from"./rules-DlyQ2XjG.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSClickable-BbRY9BmN.js";import"./FSCard-PwHP1R85.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DoCXWKDP.js";import"./useColors-BCLFEGbK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DMal9AfS.js";import"./VProgressCircular-BvwZAexL.js";import"./color-C5d3UYhE.js";import"./VIcon-C6jgSf5f.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-CBfle4ZR.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-CjNLkCyT.js";import"./FSSearchField-B6goAqn0.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-HS8EKdqs.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./anchor-D7FjyLmk.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./FSRadioGroup-CZQzAP6z.js";import"./FSRadio-DgEWe4FI.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./VLabel-C0PlncZV.js";import"./FSToggleSet-BbIEkiIE.js";import"./FSSlideGroup-CtkZI_Rf.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-Cfxg56QW.js";import"./FSBaseField-Capz3MEE.js";import"./VSpacer-NvTsfghw.js";import"./FSCheckbox-BxKP35TB.js";import"./FSFadeOut-BxczCLJY.js";import"./FSLoader-8B7k5XDA.js";import"./elevation-xgrzvMGW.js";import"./VSelect-DPrB_5mV.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./rounded-jRyYRXzo.js";import"./VImg-D_T7DUU3.js";import"./index-DI8u9ozT.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./FSChip-CE5AW-2Q.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./useAutocomplete-CPLeARdk.js";import"./useMagicFieldProvider-2vuZPO19.js";import"./iframe-B3V3nI9q.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-D1j-eePA.js";import"./FSTranslateField-4ZUl6wwo.js";import"./FSDialogSubmit-CtbfDWaK.js";import"./FSDialog-CJd-M_ZL.js";import"./useLanguages-CGyTN8dQ.js";import"./base-BNnJ_ndD.js";import"./VField-Blu283UA.js";import"./loader-CIVpWd2w.js";import"./useAppTimeZone-SgthjzoP.js";import"./time-xMV0WbLU.js";const Ye={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
            v-model:value="args.fieldValue"
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
            v-model:value="args.fieldValue"
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Ze=["TestForm"];export{e as TestForm,Ze as __namedExportsOrder,Ye as default};
