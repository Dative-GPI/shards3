import{F as l}from"./FSButton-jJkg4qCi.js";import{F as i}from"./FSForm-Cy2PdXxq.js";import{F as a}from"./FSText-CwwFvnOv.js";import{F as n}from"./FSAutocompleteRole-C1UX1tDb.js";import{F as s}from"./FSMagicConfigField-D80W3SOm.js";import{F as d}from"./FSTextField-C_L-5gHA.js";import{T as u}from"./rules-DMXcKxHO.js";import"./vue.esm-bundler-BwDfg4wG.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./css-DTUiF03J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-k5pgBhR1.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VProgressCircular-CmpAWY4m.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./form-CH3j37ax.js";import"./proxiedModel-okNizC5Y.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BJE5Iw2_.js";import"./FSSearchField-DSDBhq1s.js";import"./useTranslations-CHmpEDXr.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";import"./FSSlideGroup-FmBZXb1C.js";import"./uuid-DTaye2KM.js";import"./index-h4Pvk0JI.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./VInput-Bb_DU4hJ.js";import"./density-CY8ZwxUy.js";import"./FSBaseField-3b1naUZS.js";import"./VSpacer-C5S3LEb3.js";import"./FSCheckbox-Up-USX9A.js";import"./useRules-CJCAsX67.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./VLabel-BAbVzo-k.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./rounded-NuUWeCiM.js";import"./VImg-DFtMr-E9.js";import"./index-O1RQoaVh.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./filter-Cv_nnV1z.js";import"./FSChip-kw9MOYsi.js";import"./useRoleOrganisationTypes-jGkCqLAH.js";import"./permissionInfos-BPDgTHQl.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";import"./useRoleOrganisations-Bn5wX38G.js";import"./useAutocomplete-CQJJiztf.js";import"./useMagicFieldProvider-BpI0T0L6.js";import"./iframe-CVd9AXV8.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-CY9APSqB.js";import"./FSButtonAddIcon-DUtR6SL0.js";import"./FSTranslateField-Blm49Sbr.js";import"./FSDialogSubmit-CvlTCn8G.js";import"./FSDialog-DdBcmhOt.js";import"./useAppLanguages-B-6SoLLG.js";import"./VField-C9nLiyrW.js";import"./loader-ecE02KGk.js";import"./useDateFormat-B3lPS72n.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode--ssgoHQ3.js";import"./useAppTimeZone-8KaETkN8.js";import"./time-DIVI7EoV.js";const rr={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const tr=["TestForm"];export{e as TestForm,tr as __namedExportsOrder,rr as default};
