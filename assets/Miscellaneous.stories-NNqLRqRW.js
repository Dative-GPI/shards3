import{F as p}from"./FSButton-CDk00Rln.js";import{F as i}from"./FSForm-3-6JxcXo.js";import{F as a}from"./FSText-D8HncvP7.js";import{F as n}from"./FSAutocompleteRole-DL5iiFEd.js";import{F as s}from"./FSMagicConfigField-C6Zh7FI0.js";import{F as d}from"./FSTextField-DZxUijBd.js";import{T as u}from"./rules-BH_IHeol.js";import"./vue.esm-bundler-gWFTcvUr.js";import"./FSClickable-BVFP8bZP.js";import"./FSCard-Dkx-Z7Pt.js";import"./FSCol-DX423FHf.js";import"./css-Bc8dJONt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Bpa2jjpJ.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./VProgressCircular-DqlO5PEF.js";import"./color-CI1OEbFE.js";import"./VIcon-BiBYr0XY.js";import"./FSSpan-BlywDO8Z.js";import"./useSlots-qbJuQIJ1.js";import"./FSIcon-C5ELG8c1.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-b3Xz2NwJ.js";import"./FSSearchField-xtHQygQf.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./anchor-D8sPv6Az.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./VDefaultsProvider-CYAySfh3.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./useRules-CMc02QlE.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./VLabel-B0q5I27e.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSBaseField-DM1DfhdE.js";import"./VSpacer-DqpPKsvm.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-D0BMvcHm.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./rounded-DlJ8CYNz.js";import"./VImg-CHF0S8ll.js";import"./index-BHt-17iJ.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSChip-C4GLzprG.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";import"./useAutocomplete-DqlTmpvX.js";import"./useMagicFieldProvider-BhnmNB0s.js";import"./iframe-BWyDjenL.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-CV6I_JIJ.js";import"./FSTranslateField-Dr5FaT9N.js";import"./FSDialogSubmit-as5O4LuC.js";import"./FSDialog-oZKAE6lE.js";import"./useAppLanguages-DOMXQ19i.js";import"./VField-0o7ofOT0.js";import"./loader-DNzkAbrM.js";import"./useAppTimeZone-De3FTl5J.js";import"./useAppLanguageCode-CiYDnnfJ.js";import"./time-CXtw-DLM.js";const Xe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Ye=["TestForm"];export{e as TestForm,Ye as __namedExportsOrder,Xe as default};
