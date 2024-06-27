import{F as p}from"./FSButton-F4U-An3c.js";import{F as i}from"./FSForm-CZhuTBbT.js";import{F as a}from"./FSText-MbnVfYw2.js";import{F as n}from"./FSAutocompleteRole-ByjF7kc3.js";import{F as s}from"./FSMagicConfigField-CyQM6l9X.js";import{F as d}from"./FSTextField-BoGA7VT8.js";import{T as u}from"./rules-Dgz8ALDd.js";import"./vue.esm-bundler-DeSao-KJ.js";import"./FSClickable-CtyeoOHr.js";import"./FSCard-Cr3VWqvL.js";import"./FSCol-CA6NzDpV.js";import"./css-BnhLLynS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-JJutUvlP.js";import"./useColors-C3YrZIBy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./VProgressCircular-DA_NN_fl.js";import"./color-XZPyE2lN.js";import"./useRender-CIdmfI-I.js";import"./resizeObserver-euslJwVY.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./FSIcon-DnAZkNNf.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./density-4sjlTnVP.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BK95k7Ah.js";import"./FSSearchField-Bk9E08WQ.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-CtAO0Sgc.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./anchor-LC_hEQAj.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./VDefaultsProvider-DHsFAklf.js";import"./FSRadioGroup-F53nrXFK.js";import"./FSRadio-DlvvITIU.js";import"./useRules-DQ31e--d.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./VLabel-CWiDHCZM.js";import"./FSToggleSet-BmzhnM61.js";import"./FSSlideGroup-BNPQrUcW.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-D1ZJoYu1.js";import"./VField-C-8g7gy8.js";import"./VSpacer-CFNx9InD.js";import"./loader-CnGjHJ-m.js";import"./rounded-BOBir3aK.js";import"./FSCheckbox-Dba0sDeH.js";import"./FSFadeOut-D6QzK9Bb.js";import"./FSLoader-BG9q5Y9c.js";import"./elevation-BBJMtRPf.js";import"./VSelect-Bw07qUGf.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./index-CrTEBV4I.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./FSChip-9XbuP80h.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Db9bJp6t.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-rrf4GM2L.js";import"./useAutocomplete-DIOO3j-W.js";import"./useMagicFieldProvider-BwsYWjts.js";import"./iframe-Cr6oMEKP.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-xZcuJChO.js";import"./FSTranslateField-BUwE_3TS.js";import"./FSDialogSubmit-D_zhLHVG.js";import"./FSDialog-BRO0XGZH.js";import"./useLanguages-de1F7zd5.js";import"./base-BNnJ_ndD.js";import"./useAppTimeZone-B8cBFYr8.js";import"./time-Ba2sHI9J.js";const $e={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
