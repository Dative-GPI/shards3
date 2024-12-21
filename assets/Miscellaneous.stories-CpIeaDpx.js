import{F as l}from"./FSButton-CZktm7s_.js";import{F as i}from"./FSForm-BjBd-4df.js";import{F as a}from"./FSText-C4aHVg38.js";import{F as n}from"./FSAutocompleteRole-aEXyweSf.js";import{F as s}from"./FSMagicConfigField-Csts_uML.js";import{F as d}from"./FSTextField-C1PHWLgt.js";import{T as u}from"./rules-DEDGy5Zg.js";import"./vue.esm-bundler-DSwHwgKw.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-DelSIl2e.js";import"./FSCard-CWjVUhn7.js";import"./FSCol-DdGVae5t.js";import"./css-XXwFKvUE.js";import"./useBreakpoints-BjF6TIJH.js";import"./FSRow-BtkEywPN.js";import"./useColors-DygOvNHW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-4AjdAhIV.js";import"./VProgressCircular-Cd-wheNV.js";import"./color-uBYwhjku.js";import"./resizeObserver-A1vWEG-J.js";import"./VIcon-CdjjMQ6V.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./FSIcon-CEKLJFZW.js";import"./form-BWUCG2_i.js";import"./proxiedModel-D4Pgijkw.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-C9pn3i_8.js";import"./FSSearchField-B_6XJqS8.js";import"./useTranslations-BhPzmPwL.js";import"./VList-OaBQE2Q_.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./anchor-7worbrUf.js";import"./dimensions-CF0PFV-D.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./locale-BsRwbRmi.js";import"./router-C4I-dA4c.js";import"./transition--2cAMn_j.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./index-GTe7atjb.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./density-BfjPyHiq.js";import"./elevation-DiTecsj1.js";import"./rounded-ZilIy1Oq.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./index-D4rR88Q2.js";import"./FSSlideGroup-Bs9ckHJg.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BK3kBHXZ.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-D1BkkvzH.js";import"./FSWrapGroup-ZJy-fiiN.js";import"./VInput-21AfxGIO.js";import"./FSBaseField-Cv6zgx5K.js";import"./FSCheckbox-DB01UzhL.js";import"./useRules-CaMdh5L0.js";import"./VSelectionControl-CTHKpAmd.js";import"./VLabel-DSPSNe0W.js";import"./FSFadeOut-CBhxmVD0.js";import"./FSLoader-BtzNF95D.js";import"./FSRadio-CYoU36u8.js";import"./VSelect-BULgYbJ_.js";import"./VMenu-B9SE09pj.js";import"./filter-CxK7Dp-c.js";import"./FSChip-kaf-JFgX.js";import"./useRoleOrganisationTypes-DVo1Ws2z.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BC5Ev-17.js";import"./useRoleOrganisations-CUEy6Sws.js";import"./useAutocomplete-DuSTAPXk.js";import"./useMagicFieldProvider-Dsa_zCwZ.js";import"./iframe-DJeSPKCB.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-CanZEODN.js";import"./FSButtonAddIcon-CUGJESe7.js";import"./FSTranslateField-DSJNCFNN.js";import"./FSDialogSubmit-BHmOSYJZ.js";import"./FSDialog-D9XfBwUf.js";import"./useAppLanguages-BmtD6fPm.js";import"./VField-YT2KDH-x.js";import"./loader-kTKV0tNq.js";import"./useDateFormat-DqGsDyOM.js";import"./useAppLanguageCode-Bj2soIpN.js";import"./useAppTimeZone-jR0R4uqF.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-kNhr6ndE.js";const pe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
