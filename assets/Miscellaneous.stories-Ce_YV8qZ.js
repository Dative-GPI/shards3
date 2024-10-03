import{F as l}from"./FSButton-D64P3bCo.js";import{F as i}from"./FSForm-BjMwhLbb.js";import{F as a}from"./FSText-BmTpjyov.js";import{F as n}from"./FSAutocompleteRole-YyOKJycA.js";import{F as s}from"./FSMagicConfigField-CAIRLKcj.js";import{F as d}from"./FSTextField-BUbFMs1s.js";import{T as u}from"./rules-CXLZGJsX.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSClickable-CusxsKEA.js";import"./FSCard-BOmUSPlM.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D546kqFt.js";import"./useColors-BoRVwO74.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BEfrBPRQ.js";import"./VProgressCircular-BpEvERgl.js";import"./color-DpQhyQC8.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSIcon-BHUJU4iP.js";import"./VIcon-C65wMs2G.js";import"./form-lyoENh9E.js";import"./proxiedModel-DAUSUEYq.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-D1HRNLN3.js";import"./FSSearchField-CKombBF8.js";import"./useTranslations-ZMyFjr19.js";import"./FSDialogMenu-BQnq2uK3.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./anchor-CfU9RSql.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./locale-DgxPCyxi.js";import"./router-C4cLtMAM.js";import"./transition-DZ-8zzo1.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./FSSlideGroup-C1Kipqmu.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DoEp6YQk.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./index-D0m5TbR6.js";import"./FSToggleSet-BeXfNSJj.js";import"./FSWrapGroup-BLPJiM21.js";import"./VInput-BdNbghoa.js";import"./density-CY0EC5jE.js";import"./FSBaseField-DRP7kP50.js";import"./VSpacer-DaRxrr8q.js";import"./FSCheckbox-CsAnMrj7.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./VLabel-DuhHDssR.js";import"./FSFadeOut-Bx7JPxYi.js";import"./FSLoader-CL1ZyItv.js";import"./elevation-8SXivnh1.js";import"./FSRadio-BWlhMOEh.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./rounded-Cd5tqTfa.js";import"./VImg-616TDJo4.js";import"./index-CQjBi2ms.js";import"./VSelect-C8c1PUzV.js";import"./VMenu-CCWiAq1W.js";import"./filter-_ePnXriG.js";import"./FSChip-DcZdL0rc.js";import"./useRoleOrganisationTypes-CLY-Q4Ge.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";import"./useRoleOrganisations-1-WomYCu.js";import"./useAutocomplete-C2OV6JnY.js";import"./useMagicFieldProvider-Bhzzkh9Q.js";import"./iframe-X1hncfec.js";import"../sb-preview/runtime.js";import"./FSButtonRemoveIcon-DYgqaHUb.js";import"./FSButtonAddIcon-tWBHfDQY.js";import"./FSTranslateField-BSjxzUVd.js";import"./FSDialogSubmit-CbvDelRl.js";import"./FSDialog-CD55YxEw.js";import"./useAppLanguages-CfXI-emq.js";import"./VField-Cs2kmeSz.js";import"./loader-BoG0AaGl.js";import"./useDateFormat-3O5RagjD.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useAppTimeZone-CIW33DGM.js";import"./time-CRGs9nYY.js";const pe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
