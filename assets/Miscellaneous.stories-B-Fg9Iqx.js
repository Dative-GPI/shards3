import{F as p}from"./FSButton-CsvAshDj.js";import{F as i}from"./FSForm-BkHmbWHZ.js";import{F as a}from"./FSText-DO8RG5fr.js";import{F as n}from"./FSAutocompleteRole-eE1AL2gA.js";import{F as s}from"./FSMagicConfigField-BqCtf42B.js";import{F as d}from"./FSTextField-CPBF15FZ.js";import{T as u}from"./rules-HN4q1f8P.js";import"./vue.esm-bundler-Cq4W5tyU.js";import"./FSClickable-CT4CAD0O.js";import"./FSCard-B0a7crHg.js";import"./FSCol-DLJAvXXo.js";import"./css-DEg_ftav.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-unE_3RO6.js";import"./useColors-BeCeu6HX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C1riLSun.js";import"./VProgressCircular-D_7DfGyD.js";import"./color-DRHDjI8D.js";import"./tag-CMGfbRyB.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSIcon-BhYLJFwS.js";import"./VIcon-DEItKADI.js";import"./form-BLrazfEI.js";import"./proxiedModel-GwPoz8hG.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BwlPjJ12.js";import"./FSSearchField-DVRwmgT8.js";import"./useTranslations-DflIUxSJ.js";import"./FSDialogMenu-DWuJ-Ztv.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./anchor-BydgbQy2.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./locale-HbAtAWzw.js";import"./router-DTnNLfUf.js";import"./transition-BzbLScdo.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./FSSlideGroup-Cw0TLTWz.js";import"./uuid-DTaye2KM.js";import"./index-CS87Qvuo.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-DUUGlQED.js";import"./FSWrapGroup-B_OxD2yR.js";import"./VInput-B4B8eXxy.js";import"./density-qG_glApz.js";import"./FSBaseField-95ZFXhTZ.js";import"./VSpacer-CeIMSlXt.js";import"./FSCheckbox-BaTn-nVp.js";import"./useRules-Dr6aWKP3.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./VLabel-m2J9LCHM.js";import"./FSFadeOut-PkHtV3O5.js";import"./VImg-tyiJMUIK.js";import"./elevation-D7qOrqBH.js";import"./rounded-CT5UQ7DA.js";import"./index-BFUNLZ7G.js";import"./FSRadio-CbP3Hhtz.js";import"./VList-BwEJryXz.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-Ch4v6qVK.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./FSChip-BcutA27z.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BbuH2dYw.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DYaDCbjS.js";import"./useAutocomplete-Cyb_fxEn.js";import"./useMagicFieldProvider-CIAYokhM.js";import"./iframe-BhQVecXz.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-uXm6S_io.js";import"./FSTranslateField-C46U9fBA.js";import"./FSDialogSubmit-B8q_WbOu.js";import"./FSDialog-COpwoYdv.js";import"./useAppLanguages-B8Fn9jii.js";import"./VField-CN2Sm-Zz.js";import"./loader-BrBoJqhy.js";import"./useDateFormat-D3cC9HZx.js";import"./useAppLanguageCode-DB-OA7iE.js";import"./useAppTimeZone-Cq6pDyb8.js";import"./time-IHZgj_lS.js";const Xe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
