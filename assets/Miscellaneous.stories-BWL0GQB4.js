import{F as l}from"./FSButton-DMlgbucp.js";import{F as i}from"./FSForm-DJBvIX_e.js";import{F as a}from"./FSText-Der-WemT.js";import{F as n}from"./FSAutocompleteRole-2xfwF4Mr.js";import{F as s}from"./FSMagicConfigField-Rb8TpQJn.js";import{F as d}from"./FSTextField-3oztY1wc.js";import{T as u}from"./rules-Cdr44ew1.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSClickable-DB3UYOUU.js";import"./FSCard-CXVJHnbm.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CmD7j8Pv.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./form-B7NlTRtd.js";import"./proxiedModel-G1bil5DU.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BCyb-gsx.js";import"./FSSearchField-Dk_6lGWY.js";import"./useTranslations-f9CWAvtI.js";import"./FSDialogMenu-BWN6ZGUx.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-DWVYRyaA.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./index-DOC0sH28.js";import"./FSToggleSet-BrIzYH8T.js";import"./FSWrapGroup-D3vzPBUf.js";import"./VInput-CYsTqNhA.js";import"./density-BPFRY_Tg.js";import"./FSBaseField-DjLbenuy.js";import"./VSpacer-CrqXaTz-.js";import"./FSCheckbox-UZa98yAo.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./FSFadeOut-DtBOlAO7.js";import"./FSLoader-DpMpI5Qw.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-BjrxbHLV.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./rounded-Cely44IK.js";import"./VImg-IVf3xxVd.js";import"./index-Cc8xmT7Y.js";import"./VSelect-COKlA5Ws.js";import"./VMenu-BkqMtGEU.js";import"./filter-BS4_e9hb.js";import"./FSChip-Csg6-bUx.js";import"./useRoleOrganisationTypes-Da7CUSXo.js";import"./permissionInfos-BPDgTHQl.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CNptecSH.js";import"./useRoleOrganisations-D2xuri2b.js";import"./useAutocomplete-C_X4zrzN.js";import"./useMagicFieldProvider-cxqHn0tC.js";import"./iframe-CVAtwxjD.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-CZioY5qI.js";import"./FSButtonAddIcon-BCsk05Zk.js";import"./FSTranslateField-BPGd5HJy.js";import"./FSDialogSubmit-LfX3WJdt.js";import"./FSDialog-DYDVbEcQ.js";import"./useAppLanguages-PAtWayVh.js";import"./VField-BnYbwRuc.js";import"./loader-CiSVFYJ7.js";import"./useDateFormat-C-ZOz_ut.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useAppTimeZone-oM-olaqI.js";import"./time-ELt5M3Ql.js";const or={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const ir=["TestForm"];export{e as TestForm,ir as __namedExportsOrder,or as default};
