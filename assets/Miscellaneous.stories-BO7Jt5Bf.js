import{F as p}from"./FSButton-Ctk-czeT.js";import{F as i}from"./FSForm-BlMLGh3p.js";import{F as a}from"./FSText-DOaWXjiL.js";import{F as n}from"./FSAutocompleteRole-CMdDvePR.js";import{F as s}from"./FSMagicConfigField-CHIc5Y3V.js";import{F as d}from"./FSTextField-Czy1Uao0.js";import{T as u}from"./rules-vaMZSOmg.js";import"./vue.esm-bundler-BLBBrD1D.js";import"./FSClickable-BcsUSOO8.js";import"./FSCard-fA5aX9kp.js";import"./FSCol-OnQTHx6W.js";import"./css-DU1X_fj1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BZVvIgLd.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./VProgressCircular-CvGEkpD-.js";import"./color-T1BTTgdX.js";import"./useRender-CTGr_J4i.js";import"./resizeObserver-DkufbBgm.js";import"./VIcon-Cq9uvnQL.js";import"./tag-kXOxSspb.js";import"./FSSpan-DNHXfhpi.js";import"./useSlots-CKjiHxqT.js";import"./FSIcon-CgTCRlvx.js";import"./VInput-DwN0FzsD.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./index-Co1LeIbZ.js";import"./transition-DqSOegbJ.js";import"./density-Dp1dzyfT.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-UqibJclk.js";import"./FSSearchField-B6OTU-GY.js";import"./useTranslations-CT7kkIpn.js";import"./FSDialogMenu-DdgKI6bE.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./anchor-3JQV6orx.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./router-Ce0kmIVt.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./FSRadioGroup-DdyptP-D.js";import"./FSRadio-CNInwCt1.js";import"./useRules-CaBH9gl0.js";import"./VSelectionControl-BO5kGMEg.js";import"./index-BeqDwarK.js";import"./VLabel-wbs_UrmL.js";import"./FSToggleSet-CzyrnPJD.js";import"./FSSlideGroup-Cw9KgMxr.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-L33WvfT3.js";import"./group-BPLcoGlv.js";import"./FSWrapGroup-C0fzjWQA.js";import"./VField-B7mGtqRI.js";import"./VSpacer-C8vjG_Ri.js";import"./loader-FLWPcWRx.js";import"./rounded-Ax8hVtG-.js";import"./FSCheckbox-DJm00ahm.js";import"./FSFadeOut-NO6SWErB.js";import"./FSLoader-wJOBxBqI.js";import"./elevation-0FWsrb7Y.js";import"./VSelect-DjiDlqwN.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./index-C6izM9Xn.js";import"./VDivider-BDr2QhjS.js";import"./VMenu-BeRcuKeG.js";import"./filter-CPgh2H3B.js";import"./FSChip-DA7j5rr-.js";import"./permissionInfos-D2e06JXk.js";import"./base-B_HXG24o.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DeG9aq0N.js";import"./useAutocomplete-CXUsAi9P.js";import"./useMagicFieldProvider-g8N9BOz0.js";import"./iframe-CUmLHDpu.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-C_F7UE69.js";import"./FSTranslateField-D641L1QP.js";import"./FSDialogSubmit-w1aiABul.js";import"./FSDialog-DlwbzWL0.js";import"./useLanguages-CLJNVy8P.js";import"./base-BNnJ_ndD.js";import"./useAppTimeZone-DSwl_BhO.js";import"./time-BxNv1uVL.js";const $e={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const er=["TestForm"];export{e as TestForm,er as __namedExportsOrder,$e as default};
