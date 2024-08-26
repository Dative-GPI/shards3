import{F as p}from"./FSButton-dygcJigB.js";import{F as i}from"./FSForm-COZagF_k.js";import{F as a}from"./FSText-BG5TFIna.js";import{F as n}from"./FSAutocompleteRole-DiCkRCvZ.js";import{F as s}from"./FSMagicConfigField-CwelBq-b.js";import{F as d}from"./FSTextField-D1knM6ZC.js";import{T as u}from"./rules-D5NnG0xv.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSClickable-CP6bLZUE.js";import"./FSCard-Kv363PpN.js";import"./FSCol-CeBQ3oDD.js";import"./css-DYbKqpMF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Dfo2nEmE.js";import"./useColors-4gNoc1f6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DvfleoEk.js";import"./VProgressCircular-CQOkkHxu.js";import"./color-DRqqT5iF.js";import"./VIcon-CB8o8wL4.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSIcon-Cgoa9X6m.js";import"./VInput-CHHLrGTr.js";import"./locale-x-KasAKq.js";import"./index-CtF1TxK6.js";import"./transition-DYmm1B3d.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-CgJLV7vS.js";import"./FSSearchField-Bq06o8e_.js";import"./useTranslations-yeF_ketc.js";import"./FSDialogMenu-S1YJQnc4.js";import"./VDialog-CuBQDUUO.js";import"./VOverlay-DN1mcZZT.js";import"./anchor-C7LpDu09.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./router-I0roKE-i.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./FSSlideGroup-DzQLe6nE.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-xubiTtnp.js";import"./group-C6nVA5p1.js";import"./FSToggleSet-Cq5k0B3E.js";import"./FSWrapGroup-DcKuNYil.js";import"./FSBaseField-DHYm3Nnq.js";import"./VSpacer-BxLG4kFi.js";import"./FSCheckbox-CM8et16Q.js";import"./useRules-Dm3K--o-.js";import"./VSelectionControl-CQKVm7EG.js";import"./index-Bfb9sPge.js";import"./VLabel-DZOpgwqd.js";import"./FSFadeOut-DfM6QCr8.js";import"./FSLoader-1uGemamf.js";import"./elevation-BS7jUP1v.js";import"./FSRadio-BvL3MFCL.js";import"./VList-DeInaXPz.js";import"./ssrBoot-D_SIKPEL.js";import"./border-BytU_KR8.js";import"./rounded-DVRtD5BX.js";import"./VImg-MapJeLY6.js";import"./index-VkvlNmfl.js";import"./VSelect-BEai7CeO.js";import"./VMenu-5z8CiYXe.js";import"./filter-Ct2lxthn.js";import"./FSChip-DYPv7yAU.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BZ9BoqOK.js";import"./useAppOrganisationId-D_AG8bST.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CS2nLnTC.js";import"./useAutocomplete-ByAJaOya.js";import"./useMagicFieldProvider-DJz9s5Qr.js";import"./iframe-CjIWJEaJ.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-tIegJbmJ.js";import"./FSTranslateField-DmlMh1pt.js";import"./FSDialogSubmit-5jat7loj.js";import"./FSDialog-BqerGdMJ.js";import"./useAppLanguages-B3FO65X8.js";import"./VField-CVKE5aGR.js";import"./loader-C4nPQ1_b.js";import"./useAppTimeZone-DE7FdD8F.js";import"./useAppLanguageCode-B0gM_GlZ.js";import"./time-sTrSTvHi.js";const We={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Xe=["TestForm"];export{e as TestForm,Xe as __namedExportsOrder,We as default};
