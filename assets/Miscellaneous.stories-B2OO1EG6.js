import{F as p}from"./FSButton-BeXPz3qD.js";import{F as i}from"./FSForm-C6-7llH_.js";import{F as a}from"./FSText-CWxdqVl0.js";import{F as n}from"./FSAutocompleteRole-B-S7ppcj.js";import{F as s}from"./FSMagicConfigField-C4wg18fn.js";import{F as d}from"./FSTextField-CMP-67X5.js";import{T as u}from"./rules-BlSYZiTY.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSClickable-B6i4bUTy.js";import"./FSCard-IkM7vPXg.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BuYwVvwM.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./VProgressCircular-BALYDMME.js";import"./color-Dk23S21P.js";import"./tag-BDy8Psij.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSIcon-CNrZYw3j.js";import"./VIcon-Dc5M3VhK.js";import"./form-BN2rR47-.js";import"./proxiedModel-CZPY81Tp.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-d_rwBWTR.js";import"./FSSearchField-D_cdyx7b.js";import"./useTranslations-DyPMaPr_.js";import"./FSDialogMenu-DJMBxSqq.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./anchor-J8DF-zwD.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./locale-CMOn_BOp.js";import"./router-DPbzaFf1.js";import"./transition-Cs7QtK7U.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./FSSlideGroup-CaV4GRaB.js";import"./uuid-DTaye2KM.js";import"./index-7QBgy7JM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-BQSY5XEo.js";import"./FSWrapGroup-DNGL2TLb.js";import"./VInput-CifUC8kS.js";import"./density-BWgXlOb-.js";import"./FSBaseField-Uq_chVlu.js";import"./VSpacer-BJ2TWwuy.js";import"./FSCheckbox-BNEUzkt_.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./VLabel-CtKTiIK0.js";import"./FSFadeOut-CORcN4YC.js";import"./VImg-iJp2dxPS.js";import"./elevation-DH7kyzD7.js";import"./rounded-B-50KYhN.js";import"./index-DQeMThUY.js";import"./FSRadio-CMU-kDTj.js";import"./VList-6ZTQMrmw.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-C_IVisdW.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./FSChip-c4zDvu8x.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./useAutocomplete-BIo_snCx.js";import"./useMagicFieldProvider-UGvEP8yo.js";import"./iframe-BFOKVxwf.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-kTuyEvJ0.js";import"./FSButtonAddIcon-C-o3CAZ0.js";import"./FSTranslateField-D37bfMbR.js";import"./FSDialogSubmit-BkNzQeOj.js";import"./FSDialog-DW3zDyOH.js";import"./useAppLanguages-D50JKJ0n.js";import"./VField-C1LOclAH.js";import"./loader-DsDTT_wf.js";import"./useDateFormat-DZcIDWp6.js";import"./datesTools-RiUw1NMp.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./time-BOZ1S5aJ.js";const Ze={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const $e=["TestForm"];export{e as TestForm,$e as __namedExportsOrder,Ze as default};
