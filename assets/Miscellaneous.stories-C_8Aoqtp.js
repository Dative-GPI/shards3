import{F as p}from"./FSButton-C3_cXTyP.js";import{F as i}from"./FSForm-COOci7Wc.js";import{F as a}from"./FSText-DpKmNKuw.js";import{F as n}from"./FSAutocompleteRole-C55RFv7-.js";import{F as s}from"./FSMagicConfigField-DJmy-Qgf.js";import{F as d}from"./FSTextField-gM3nC9eH.js";import{T as u}from"./rules-mp7LO49V.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSClickable-BkkVgM6_.js";import"./FSCard-BCfQmBmZ.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Dx6kiy_m.js";import"./useColors-MENgOxRI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B5x8xkbY.js";import"./VProgressCircular-C-U4HXtE.js";import"./color-DvJT0EEa.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-Bs4x_ELf.js";import"./useSlots-DN9F4SV8.js";import"./FSIcon-AG2DcsLT.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BLtdU6sI.js";import"./FSSearchField-3ZMTHU6Y.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-nN-BJNkf.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSRadioGroup-BAMuTB0w.js";import"./FSRadio-B76XLedM.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./FSToggleSet-CXDVkQ4i.js";import"./FSSlideGroup-CrLGagTQ.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-Bjkgqp7E.js";import"./FSBaseField-BG_FLsaI.js";import"./VSpacer-BjECYW1K.js";import"./FSCheckbox-DDwpdXPM.js";import"./FSFadeOut-FJvv8Xox.js";import"./FSLoader-BMnbB1Fe.js";import"./elevation-BTkUCD39.js";import"./VSelect-D_s5MDvC.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./rounded-YB6K8mOp.js";import"./VImg-DgHq50DD.js";import"./index-DN-QUi1L.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSChip-B7kBtaBB.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./useAutocomplete-DfYPH4wo.js";import"./useMagicFieldProvider-zFDdShVL.js";import"./iframe-DtliQJ5z.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-Df7z07Qc.js";import"./FSTranslateField-kQF46S03.js";import"./FSDialogSubmit-aX4zz7fo.js";import"./FSDialog-CWdtIzUo.js";import"./useAppLanguages-BKzJTchM.js";import"./VField-CAe7-ioi.js";import"./loader-DENHXnzB.js";import"./useAppTimeZone-YYzPOO4y.js";import"./time-xMV0WbLU.js";const We={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
