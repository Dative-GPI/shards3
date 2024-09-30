import{F as l}from"./FSButton-DAhZ0Raz.js";import{F as i}from"./FSForm-BjMwhLbb.js";import{F as a}from"./FSText-CnF0GPuv.js";import{F as n}from"./FSAutocompleteRole-CLNcqmZD.js";import{F as s}from"./FSMagicConfigField-DE5GqHB2.js";import{F as d}from"./FSTextField-CiQ29Gk9.js";import{T as u}from"./rules-CXLZGJsX.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSClickable-DxBn6HxC.js";import"./FSCard-BjvZ5YiQ.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D546kqFt.js";import"./useColors-CaDWSZLL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BEfrBPRQ.js";import"./VProgressCircular-BpEvERgl.js";import"./color-DpQhyQC8.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSIcon-C8jESFXA.js";import"./VIcon-C65wMs2G.js";import"./form-lyoENh9E.js";import"./proxiedModel-DAUSUEYq.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-C5pC2bXV.js";import"./FSSearchField-BGiFLl4O.js";import"./useTranslations-ZMyFjr19.js";import"./FSDialogMenu-Dnvhdcsp.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./anchor-CfU9RSql.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./locale-DgxPCyxi.js";import"./router-C4cLtMAM.js";import"./transition-DZ-8zzo1.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./FSSlideGroup-DhNsnnDZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-3a_bTLDz.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./index-D0m5TbR6.js";import"./FSToggleSet-CxkDSH6T.js";import"./FSWrapGroup-DO-xnPll.js";import"./VInput-BdNbghoa.js";import"./density-CY0EC5jE.js";import"./FSBaseField-ytGCUAbx.js";import"./VSpacer-DaRxrr8q.js";import"./FSCheckbox-BYVnhWyO.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./VLabel-DuhHDssR.js";import"./FSFadeOut-BRxcyuMB.js";import"./FSLoader-DEfCEKzp.js";import"./elevation-8SXivnh1.js";import"./FSRadio-ClRwJSfH.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./rounded-Cd5tqTfa.js";import"./VImg-616TDJo4.js";import"./index-CQjBi2ms.js";import"./VSelect-B2uffud2.js";import"./VMenu-CCWiAq1W.js";import"./filter-_ePnXriG.js";import"./FSChip-cbDRAwPU.js";import"./useRoleOrganisationTypes-CLY-Q4Ge.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";import"./useRoleOrganisations-1-WomYCu.js";import"./useAutocomplete-DbOpgzgj.js";import"./useMagicFieldProvider-D66Yl6c7.js";import"./iframe-zdIk9QmM.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-Cf9WzsLQ.js";import"./FSButtonAddIcon-CDTkqU7U.js";import"./FSTranslateField-DF3hNVT3.js";import"./FSDialogSubmit-Bnv0HtR-.js";import"./FSDialog-Lp2POdRP.js";import"./useAppLanguages-CfXI-emq.js";import"./VField-Cs2kmeSz.js";import"./loader-BoG0AaGl.js";import"./useDateFormat-3O5RagjD.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useAppTimeZone-CIW33DGM.js";import"./time-CRGs9nYY.js";const pe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
