import{F as p}from"./FSButton-Dt6DpUVX.js";import{F as i}from"./FSForm-A_xyKD4e.js";import{F as a}from"./FSText-BKbsNqc2.js";import{F as n}from"./FSAutocompleteRole-CbLwZrhM.js";import{F as s}from"./FSMagicConfigField-BZuvsrUV.js";import{F as d}from"./FSTextField-BHg2KNCG.js";import{T as u}from"./rules-7irbuYYZ.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSClickable-D1l62sMQ.js";import"./FSCard-CQ3lfryo.js";import"./FSCol-CkM6DP-d.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BPJXOzs-.js";import"./useColors-CXl0hRe0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./VProgressCircular-D8KFt_en.js";import"./color-BhlhQtQT.js";import"./VIcon-uFUcYN4x.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-BZTGzEA5.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-BjVs_BJa.js";import"./FSSearchField-Dm_DgX5J.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-eZGMPoMT.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./anchor-CLTIcUx3.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./FSRadioGroup-ekhc2J0d.js";import"./FSRadio-CscXF7IF.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./VLabel-Cp9LN_v7.js";import"./FSToggleSet-D4frsOr2.js";import"./FSSlideGroup-CgPOoi2Q.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-C6w0lG87.js";import"./VField-C3DtoroY.js";import"./VSpacer-CMZ7Jymr.js";import"./loader-CTRePS7y.js";import"./rounded-TFXDyxjJ.js";import"./FSCheckbox-M8Bs7S24.js";import"./FSFadeOut-DJfcYfqT.js";import"./FSLoader-D_G7mk7-.js";import"./elevation-BoGrGvdU.js";import"./VSelect-DqMGXfw3.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./index-yKNzK_fJ.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./FSChip-MLyYDCOE.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./useAutocomplete-DblNVG4s.js";import"./useMagicFieldProvider-DKOU8cvY.js";import"./iframe-CI6BRGYT.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-I88pn-xf.js";import"./FSTranslateField-ClLb9gsF.js";import"./FSDialogSubmit-34Nto5EV.js";import"./FSDialog-BUB0hUT_.js";import"./useLanguages-CGyTN8dQ.js";import"./base-BNnJ_ndD.js";import"./useAppTimeZone-DYaMfp9l.js";import"./time-xMV0WbLU.js";const Xe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Ye=["TestForm"];export{e as TestForm,Ye as __namedExportsOrder,Xe as default};
