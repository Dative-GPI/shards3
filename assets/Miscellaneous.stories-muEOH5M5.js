import{F as l}from"./FSButton-Bn1-9X_j.js";import{F as i}from"./FSForm-BnY1MqqQ.js";import{F as a}from"./FSText-cnz1-zil.js";import{F as n}from"./FSAutocompleteRole-DWqnXAar.js";import{F as s}from"./FSMagicConfigField-CXS_u3bd.js";import{F as d}from"./FSTextField-iR5himse.js";import{T as u}from"./rules-BlSYZiTY.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSClickable-CAMTfGUR.js";import"./FSCard-B6X58T5E.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BuYwVvwM.js";import"./useColors-s1xYWcRF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D8Xq3tpQ.js";import"./VProgressCircular-DnrgPZB3.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSIcon-DhgV6LdF.js";import"./VIcon-DptP6m9n.js";import"./form-CgybbRT3.js";import"./proxiedModel-BE9FlVMJ.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-zbLrJleu.js";import"./FSSearchField-By5tDbEi.js";import"./useTranslations-DyPMaPr_.js";import"./FSDialogMenu-DkG50X2r.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./anchor-DHDhudvL.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./locale-CMOn_BOp.js";import"./router-CbAEScZe.js";import"./transition-CQDsmRPd.js";import"./VDefaultsProvider-CztrVRTm.js";import"./FSSlideGroup-DrFQ8DQG.js";import"./uuid-DTaye2KM.js";import"./index-joExpvzU.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-BcMhDEEs.js";import"./FSWrapGroup-4ZsVQWHG.js";import"./VInput-Dln06fOF.js";import"./density-BM1QLeh4.js";import"./FSBaseField-CGde08E6.js";import"./VSpacer-YT0o3rZT.js";import"./FSCheckbox-2nJSFmbZ.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./VLabel-BPqk0hPA.js";import"./FSFadeOut-DFZnJQQe.js";import"./VImg-BsFS2wEb.js";import"./elevation-BH8AnXAq.js";import"./rounded-BWAMdTmW.js";import"./index-jvVque46.js";import"./FSRadio-DKr_ONVF.js";import"./VList-DonjtRcz.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-BkSDNjss.js";import"./VMenu-DOKVMVxb.js";import"./filter-CkY1Z-lm.js";import"./FSChip-ChzFxN0B.js";import"./useRoleOrganisationTypes-CoPCnWZq.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./useRoleOrganisations-CKugOgbR.js";import"./useAutocomplete-2B7QUvFy.js";import"./useMagicFieldProvider-aBDf8Dbp.js";import"./iframe-D7ms7pcc.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-CQbqvlze.js";import"./FSButtonAddIcon-DYyajRR7.js";import"./FSTranslateField-DWmF0XH6.js";import"./FSDialogSubmit-BhYvS_4x.js";import"./FSDialog-Dvh28lPY.js";import"./useAppLanguages-D50JKJ0n.js";import"./VField-DaMwaaXY.js";import"./loader-CbF0edCX.js";import"./useDateFormat-DZcIDWp6.js";import"./datesTools-RiUw1NMp.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./time-BOZ1S5aJ.js";const er={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const rr=["TestForm"];export{e as TestForm,rr as __namedExportsOrder,er as default};
