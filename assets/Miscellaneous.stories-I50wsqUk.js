import{F as p}from"./FSButton-DQTNQ7w6.js";import{F as i}from"./FSForm-1pcMIyZi.js";import{F as a}from"./FSText-ykiRuhwH.js";import{F as n}from"./FSAutocompleteRole-Cndmv2NY.js";import{F as s}from"./FSMagicConfigField-BE9S9oLM.js";import{F as d}from"./FSTextField-CIgddAfu.js";import{T as u}from"./rules-DlyQ2XjG.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSClickable-Bk5I2JN4.js";import"./FSCard-DJrzS8t_.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DoCXWKDP.js";import"./useColors-ATxZ3nb1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DMal9AfS.js";import"./VProgressCircular-BvwZAexL.js";import"./color-C5d3UYhE.js";import"./VIcon-C6jgSf5f.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-2B0NN_at.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-iSfPzHk1.js";import"./FSSearchField-DejeNnVl.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-DmBV7Mf4.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./anchor-D7FjyLmk.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./FSRadioGroup-CgnmC9k2.js";import"./FSRadio-Czfn0-vM.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./VLabel-C0PlncZV.js";import"./FSToggleSet-D76-MhYq.js";import"./FSSlideGroup-Buay-X2i.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-BG-AaJX-.js";import"./FSBaseField-3fq9JEyD.js";import"./VSpacer-NvTsfghw.js";import"./FSCheckbox-C9nNPPnZ.js";import"./FSFadeOut-7Ilw0XG1.js";import"./FSLoader-B1rWpyEr.js";import"./elevation-xgrzvMGW.js";import"./VSelect-D7F3d6A4.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./rounded-jRyYRXzo.js";import"./VImg-D_T7DUU3.js";import"./index-DI8u9ozT.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./FSChip-A49gs7Y6.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./useAutocomplete-BV7te6qQ.js";import"./useMagicFieldProvider-vEOVyuty.js";import"./iframe-CzRPW78s.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-DJp8ihUy.js";import"./FSTranslateField-CTntUax-.js";import"./FSDialogSubmit-DmA8rBD5.js";import"./FSDialog-D1_ivQdh.js";import"./VField-Blu283UA.js";import"./loader-CIVpWd2w.js";import"./useAppTimeZone-SgthjzoP.js";import"./time-xMV0WbLU.js";const We={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
