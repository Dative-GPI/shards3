import{F as l}from"./FSButton-GcNiTEst.js";import{F as i}from"./FSForm-CUiL74ui.js";import{F as a}from"./FSText-CAG3hIfn.js";import{F as n}from"./FSAutocompleteRole-CJUWtiaO.js";import{F as s}from"./FSMagicConfigField-DniNCqOJ.js";import{F as d}from"./FSTextField-vq59KMNW.js";import{T as u}from"./rules-C-NbTnZJ.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSClickable-BcMPomoE.js";import"./FSCard-BJoqsHyz.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFFgZ74C.js";import"./useColors-DTi99Ybi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CX_N7n5F.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-bZBIO--g.js";import"./form-_oo3cshG.js";import"./proxiedModel-Atn7Z0Ko.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-DIB3Gyel.js";import"./FSSearchField-Ci7y9TgU.js";import"./useTranslations-BehwFxDb.js";import"./FSDialogMenu-SygzX68j.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./anchor-0mwNUa2-.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./locale-BJQwrXJ7.js";import"./router-DxFny788.js";import"./transition-DhTIerNz.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./FSSlideGroup-B4vdbHxq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Ck0BnSuJ.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./index-UH0ZuYvc.js";import"./FSToggleSet-DiyE3dER.js";import"./FSWrapGroup-ContUtLx.js";import"./VInput-DGUvNq3c.js";import"./density-CmGe4Vfq.js";import"./FSBaseField-Dg_2QPSd.js";import"./VSpacer-Di7g3RCw.js";import"./FSCheckbox-OT0jrbQK.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./VLabel-33JaQml4.js";import"./FSFadeOut-ukctYbpt.js";import"./FSLoader-Cs0-Y7mC.js";import"./elevation-JfXKLVfD.js";import"./FSRadio-yKt84OXT.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./rounded-ErtzAGHK.js";import"./VImg-C1aVTsth.js";import"./index-DS9MhfY5.js";import"./VSelect-CiMz2vvk.js";import"./VMenu-CuKNZEBs.js";import"./filter-COIlslko.js";import"./FSChip-ByCr1RER.js";import"./useRoleOrganisationTypes-Dc65a5Q2.js";import"./permissionInfos-BPDgTHQl.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useRoleOrganisations-CtFWj6Te.js";import"./useAutocomplete-D6qGnQ_x.js";import"./useMagicFieldProvider-DtruX49d.js";import"./iframe-BkaWK8tB.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-BnvASbaa.js";import"./FSButtonAddIcon-CPfGTMEd.js";import"./FSTranslateField-164LhJNP.js";import"./FSDialogSubmit-CGudwbPK.js";import"./FSDialog-pWLRuDqx.js";import"./useAppLanguages-D2v8pp4o.js";import"./VField-Do2gtyNA.js";import"./loader-BYp4SDfR.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useAppTimeZone-ByDiY2xy.js";import"./time-IoQ6C2aa.js";const pe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
