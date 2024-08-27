import{F as p}from"./FSButton-CSLtAyqZ.js";import{F as i}from"./FSForm-DFJwQOr3.js";import{F as a}from"./FSText-C1354nJ4.js";import{F as n}from"./FSAutocompleteRole-BeGkBtkr.js";import{F as s}from"./FSMagicConfigField-D6fetHsI.js";import{F as d}from"./FSTextField-RqWidZvM.js";import{T as u}from"./rules-e4Aalau5.js";import"./vue.esm-bundler-B8zP9crO.js";import"./FSClickable-CRLy4U08.js";import"./FSCard-BQ4UALgc.js";import"./FSCol-DXkP6ARl.js";import"./css-B1GBcH8c.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D-NDNvrc.js";import"./useColors-CHFZqh9D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./VProgressCircular-DxDQ8azE.js";import"./color-DErt19fL.js";import"./VIcon-FsSVL6vQ.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSIcon-DoasTXhc.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BUW9KFV5.js";import"./FSSearchField-LBpB0oyV.js";import"./useTranslations-Dy1kwog1.js";import"./FSDialogMenu-DKdGQhSx.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./anchor-OrAzIpfB.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./VDefaultsProvider-NbOoODyK.js";import"./FSSlideGroup-B6I8kdKO.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-BlitZcd6.js";import"./FSWrapGroup-iC8XkZDM.js";import"./FSBaseField-NTkLVYiV.js";import"./VSpacer-qnIi_Uu8.js";import"./FSCheckbox-CeNyMIyO.js";import"./useRules-8tDFqsxq.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./VLabel-nohB6Jca.js";import"./FSFadeOut-CJxs5U7i.js";import"./VImg-nkm3QF3p.js";import"./elevation-B_HXnKlm.js";import"./rounded-Bso5Gdmg.js";import"./index-vockUB0G.js";import"./FSRadio-BildyJ8g.js";import"./VList-DrakP2K3.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-BmtbTONd.js";import"./VMenu-B8mF_lnI.js";import"./filter-B31C1cQo.js";import"./FSChip-umEPBVBN.js";import"./permissionInfos-BPDgTHQl.js";import"./base-TJZSgE4h.js";import"./useAppOrganisationId-wxL44o-M.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Bs2ItKgK.js";import"./useAutocomplete-52r75jCK.js";import"./useMagicFieldProvider-DvFWfpN0.js";import"./iframe-DRpz41fl.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-Sy6V4qcu.js";import"./FSTranslateField-CAliY1Ol.js";import"./FSDialogSubmit-CQuNrXOt.js";import"./FSDialog-BepVDFoX.js";import"./useAppLanguages-1oPGWyfC.js";import"./VField-DIx0x5Km.js";import"./loader-B8FgLuVw.js";import"./useAppTimeZone-YFQ3g-8z.js";import"./useAppLanguageCode-DDLio0r9.js";import"./time-CFdfjaGn.js";const Qe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Ue=["TestForm"];export{e as TestForm,Ue as __namedExportsOrder,Qe as default};
