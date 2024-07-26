import{F as p}from"./FSButton-DUJqknbG.js";import{F as i}from"./FSForm-COOci7Wc.js";import{F as a}from"./FSText-xgcCPmKK.js";import{F as n}from"./FSAutocompleteRole-CHlaCajP.js";import{F as s}from"./FSMagicConfigField-6R_CtIyB.js";import{F as d}from"./FSTextField-Rjw2v1TU.js";import{T as u}from"./rules-DlyQ2XjG.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSClickable-DJmL8jbB.js";import"./FSCard-2tgenx2C.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DoCXWKDP.js";import"./useColors-DQLHFhAZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B5x8xkbY.js";import"./VProgressCircular-C-U4HXtE.js";import"./color-DvJT0EEa.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-P4x4c-RP.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-PkfpH3Ku.js";import"./FSSearchField-DDD24GHF.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-DA3fdLra.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSRadioGroup-BTSxlQVt.js";import"./FSRadio-C-XiPq3H.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./FSToggleSet-CiwDGSWI.js";import"./FSSlideGroup-C0tdQ2lN.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-BoEFQU7m.js";import"./FSBaseField-3RVGuwl_.js";import"./VSpacer-BjECYW1K.js";import"./FSCheckbox-C1IyYDE7.js";import"./FSFadeOut-I7Jw95bn.js";import"./FSLoader-BZsYDU4n.js";import"./elevation-BTkUCD39.js";import"./VSelect-G3o7-3hG.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./rounded-YB6K8mOp.js";import"./VImg-DgHq50DD.js";import"./index-DN-QUi1L.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSChip-3jNhqJPe.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./useAutocomplete-Cn2DHGe-.js";import"./useMagicFieldProvider-CRI51NYo.js";import"./iframe-CpFTZsUW.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-AevPSK7v.js";import"./FSTranslateField-Bvavgfb1.js";import"./FSDialogSubmit-B_7MkSE4.js";import"./FSDialog-DAApKvfh.js";import"./useAppLanguages-BKzJTchM.js";import"./VField-CAe7-ioi.js";import"./loader-DENHXnzB.js";import"./useAppTimeZone-SgthjzoP.js";import"./time-xMV0WbLU.js";const We={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Xe=["TestForm"];export{e as TestForm,Xe as __namedExportsOrder,We as default};
