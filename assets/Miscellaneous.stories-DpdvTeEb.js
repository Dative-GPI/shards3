import{F as p}from"./FSButton-BsHdwUXb.js";import{F as i}from"./FSForm-B1Z3Qchm.js";import{F as a}from"./FSText-Bql3IFAZ.js";import{F as n}from"./FSAutocompleteRole-BzHFfUA_.js";import{F as s}from"./FSMagicConfigField-B0t35kXZ.js";import{F as d}from"./FSTextField-CBBV8faX.js";import{T as u}from"./rules-DdihKcr3.js";import"./vue.esm-bundler-BSwA4uJo.js";import"./FSClickable-DxIbWXqH.js";import"./FSCard-Dku7tZ0W.js";import"./FSCol-B2fYQH2g.js";import"./css-DuQjrBfn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C55kyKDN.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./VProgressCircular-Dac4kH3U.js";import"./color-D9V7QeIP.js";import"./tag-VYeYJ1FC.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSIcon-BnX9YboA.js";import"./VIcon-5UD9vI9m.js";import"./form-DP5gBA00.js";import"./proxiedModel-DL-L2p1V.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-CzLKCgFf.js";import"./FSSearchField-CPQWVqWj.js";import"./useTranslations-9ULn9k53.js";import"./FSDialogMenu-g6t3pdyN.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./anchor-CkzTvcVP.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./locale-CpxwvVE1.js";import"./router-Cl1v_ijq.js";import"./transition-_APBsTwD.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./FSSlideGroup-wzQo7jGf.js";import"./uuid-DTaye2KM.js";import"./index-C3j_FW12.js";import"./group-CrHjrh7w.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./VInput-QVRW4ijF.js";import"./density-DkgHqMu0.js";import"./FSBaseField-DFSFck2t.js";import"./VSpacer-Bggt-xuP.js";import"./FSCheckbox-Biwr0a4k.js";import"./useRules-BFq3Zlaa.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./VLabel-BifS6p-d.js";import"./FSFadeOut-uPE_tDk4.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./rounded-CO2AQG9_.js";import"./index-BhqZCjBr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VSelect-Fm84tqTh.js";import"./VMenu-B0NqnZmW.js";import"./filter-BvtvTs1b.js";import"./FSChip-QWvQ-7YA.js";import"./permissionInfos-BPDgTHQl.js";import"./base-COZVLn_8.js";import"./useAppOrganisationId-DRTS5QPJ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D4M238ur.js";import"./useAutocomplete-CsDNIjqd.js";import"./useMagicFieldProvider-CJxVRWFg.js";import"./iframe-Drfa7gQE.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-XI7jaCxc.js";import"./FSTranslateField-BZEUoMD0.js";import"./FSDialogSubmit-BiCGTrRF.js";import"./FSDialog-CR4nFGhy.js";import"./useAppLanguages-DEvopncb.js";import"./VField-CfZoudOu.js";import"./loader-DjCr0vPF.js";import"./useDateFormat-9LaNcSHJ.js";import"./useAppLanguageCode-DTo4I1JE.js";import"./useAppTimeZone-DGCoteSQ.js";import"./time-BLpKSpNP.js";const Xe={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
