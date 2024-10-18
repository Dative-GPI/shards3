import{F as l}from"./FSButton-DblcRn12.js";import{F as i}from"./FSForm-BUGdnKjM.js";import{F as a}from"./FSText-D77NGEvR.js";import{F as n}from"./FSAutocompleteRole-63GU3ATP.js";import{F as s}from"./FSMagicConfigField-BTBQ_IOT.js";import{F as d}from"./FSTextField-DpQImVLP.js";import{T as u}from"./rules-C-NbTnZJ.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSClickable-CIKlZ0Uy.js";import"./FSCard-GtkwWKOo.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFFgZ74C.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VProgressCircular-cHoQoKlr.js";import"./color-DBJfw4cY.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CJgnsR4e.js";import"./form-D8F-RrsG.js";import"./proxiedModel-z3p0-M-h.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-CaoqKedU.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./useTranslations-BehwFxDb.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./anchor-Cu9IQeug.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./locale-BJQwrXJ7.js";import"./router-DHMAfVHW.js";import"./transition-B83BVatf.js";import"./VDefaultsProvider-S-S54iS4.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./index-CiXeh9xR.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./VInput-BwoMaTW2.js";import"./density-CJqFEH6j.js";import"./FSBaseField-BJvLi7Av.js";import"./VSpacer-y-n940VK.js";import"./FSCheckbox-BlU3VZ1O.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./rounded-DM_o2hWD.js";import"./VImg-I7jXrjsW.js";import"./index-C31q_73Z.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";import"./FSChip-C1Wzm8E1.js";import"./useRoleOrganisationTypes-Dc65a5Q2.js";import"./permissionInfos-BPDgTHQl.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useRoleOrganisations-CtFWj6Te.js";import"./useAutocomplete-C_CEUaC2.js";import"./useMagicFieldProvider-TqcLoP7y.js";import"./iframe--guDoDYi.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-B-SmGfk_.js";import"./FSButtonAddIcon-AomB63t-.js";import"./FSTranslateField-672jOlCK.js";import"./FSDialogSubmit-DCT3zM89.js";import"./FSDialog-CSKP4meT.js";import"./useAppLanguages-D2v8pp4o.js";import"./VField-2PlKy0GK.js";import"./loader-Cs6S2SUJ.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useAppTimeZone-ByDiY2xy.js";import"./time-IoQ6C2aa.js";const pe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
