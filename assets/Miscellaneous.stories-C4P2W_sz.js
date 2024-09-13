import{F as l}from"./FSButton-BNq-0lOE.js";import{F as i}from"./FSForm-CVvlYXog.js";import{F as a}from"./FSText-DyldgdXP.js";import{F as n}from"./FSAutocompleteRole-Czw4SETu.js";import{F as s}from"./FSMagicConfigField-DIBVnPWt.js";import{F as d}from"./FSTextField-BKDOMXYp.js";import{T as u}from"./rules-Bn2gOiel.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSClickable-DdK5daMz.js";import"./FSCard-D-fFYNec.js";import"./FSCol-YmDykHL-.js";import"./css-DLfrm0pR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CVY2l52N.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-D23Cpf0F.js";import"./VIcon-BIpY_noq.js";import"./form-B61Sg6X-.js";import"./proxiedModel-Bq4wip6p.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-CeTwhSwh.js";import"./FSSearchField-lTJRdxcj.js";import"./useTranslations-CdSqQFV3.js";import"./FSDialogMenu-BULt7rkH.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSSlideGroup-CcWB8C_f.js";import"./uuid-DTaye2KM.js";import"./index-CHbvZ5Sj.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-CI3bzWWf.js";import"./FSWrapGroup-Choo5L6h.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./FSBaseField-_Isn_Ha_.js";import"./VSpacer-C4plVoTE.js";import"./FSCheckbox-VrXx14Lw.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./FSFadeOut-D96pvLZm.js";import"./FSLoader-CtbqJzfZ.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BDiw7DXd.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./rounded-Dg8mz8II.js";import"./VImg-DW7Ik4XH.js";import"./index-D_lBla-s.js";import"./VSelect-B_I0944e.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./FSChip-BrwvSycq.js";import"./useRoleOrganisationTypes-goQHLrrx.js";import"./permissionInfos-BPDgTHQl.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./useRoleOrganisations-kSA9kDUh.js";import"./useAutocomplete-DJoKtg4o.js";import"./useMagicFieldProvider-CqDT_cuH.js";import"./iframe-CWKOOL8T.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-BMT2eMXp.js";import"./FSButtonAddIcon-CSIyWWpk.js";import"./FSTranslateField-qzuf-caA.js";import"./FSDialogSubmit-Bwo2dchA.js";import"./FSDialog-GnxW2lpE.js";import"./useAppLanguages-Bzp43IKD.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./useAppTimeZone-D_npl1cn.js";import"./time-uorXHrJ8.js";const rr={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
