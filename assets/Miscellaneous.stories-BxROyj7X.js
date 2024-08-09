import{F as p}from"./FSButton-Gm_V1unh.js";import{F as i}from"./FSForm-3-6JxcXo.js";import{F as a}from"./FSText-BU8c-OMA.js";import{F as n}from"./FSAutocompleteRole-D_-_Bojr.js";import{F as s}from"./FSMagicConfigField-kVkTSrgM.js";import{F as d}from"./FSTextField-zDwJbGV_.js";import{T as u}from"./rules-DNRn5gD7.js";import"./vue.esm-bundler-gWFTcvUr.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./FSCol-DX423FHf.js";import"./css-Bc8dJONt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Bpa2jjpJ.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./VProgressCircular-DqlO5PEF.js";import"./color-CI1OEbFE.js";import"./VIcon-BiBYr0XY.js";import"./FSSpan-DK2fprHX.js";import"./useSlots-qbJuQIJ1.js";import"./FSIcon-C7-l9IT-.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-Bmk1P02G.js";import"./FSSearchField-fV91e-Ut.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./anchor-D8sPv6Az.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./VDefaultsProvider-CYAySfh3.js";import"./FSRadioGroup-BESaAzRE.js";import"./FSRadio-DdlWoAYf.js";import"./useRules-CMc02QlE.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./VLabel-B0q5I27e.js";import"./FSToggleSet-ufoTyP8M.js";import"./FSSlideGroup-DoS2LL0G.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-DNjjqvJY.js";import"./FSBaseField-BCn945wr.js";import"./VSpacer-DqpPKsvm.js";import"./FSCheckbox-FFHve3-B.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-DufGLro4.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CipaTW42.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./rounded-DlJ8CYNz.js";import"./VImg-CHF0S8ll.js";import"./index-BHt-17iJ.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSChip-EDw6-2-m.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";import"./useAutocomplete-C7hDSQ2w.js";import"./useMagicFieldProvider-OLLq9KX0.js";import"./iframe-CSWdvwfL.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-D3454fpX.js";import"./FSTranslateField-C3o5iQyo.js";import"./FSDialogSubmit-Oh3mGGqH.js";import"./FSDialog-DrEKl3ft.js";import"./useAppLanguages-BkP4i7xm.js";import"./VField-0o7ofOT0.js";import"./loader-DNzkAbrM.js";import"./useAppTimeZone-BTXoL9eb.js";import"./time-B7rb1r3-.js";const We={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Xe=["TestForm"];export{e as TestForm,Xe as __namedExportsOrder,We as default};
