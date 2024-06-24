import{F as p}from"./FSButton-Cqu01o0F.js";import{F as i}from"./FSForm-BHxqH6nY.js";import{F as a}from"./FSText-BSNRUZzw.js";import{F as n}from"./FSAutocompleteRole-D-vK59tW.js";import{F as s}from"./FSMagicConfigField-B6x9QM5F.js";import{F as d}from"./FSTextField-B74kF1w3.js";import{T as u}from"./rules-DKZYNaes.js";import"./vue.esm-bundler-ClF7U4Dq.js";import"./FSClickable-heovQq91.js";import"./FSCard-BkPZ_hGw.js";import"./FSCol-BeN4b608.js";import"./css-CBTOQ7jk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-a7Q-CB2x.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./VProgressCircular-BkN7ESng.js";import"./color-BdD0bzys.js";import"./useRender-BYKEQvkC.js";import"./resizeObserver-CVlMOAbf.js";import"./VIcon-MLStchlj.js";import"./tag--UF77zYE.js";import"./FSSpan-CFY7ptgg.js";import"./useSlots-CFCV5ffn.js";import"./FSIcon-CcDweDXn.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./density-BwHuOjo6.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-CkC_2HwE.js";import"./FSSearchField-jeRoICNJ.js";import"./useTranslations-iL6K_UJW.js";import"./FSDialogMenu-C5PUkJvI.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./anchor-BesKSPix.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./useRules-CPnS0hXd.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./VLabel-CjStEiK-.js";import"./FSToggleSet-DtdQx61u.js";import"./FSSlideGroup-DrFraIy6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./FSWrapGroup-CSe3EME5.js";import"./VField-u0S89Dh4.js";import"./VSpacer-DYfuYgng.js";import"./loader-CSM5nYN_.js";import"./rounded-DApWaG-P.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./VSelect-CKfqyMYk.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./index-CiTrH3XV.js";import"./VDivider-BoOtslZm.js";import"./VMenu-D3bJ2B8V.js";import"./filter-NOSp4cax.js";import"./FSChip-Cd603C2e.js";import"./permissionInfos-D2e06JXk.js";import"./base-DT4A-z-k.js";import"./useAppOrganisationId-BMb45lkt.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C-hWj-Am.js";import"./useAutocomplete-B1zA08Rk.js";import"./useMagicFieldProvider-aXHqhYk2.js";import"./iframe-BRFX5ZZa.js";import"../sb-preview/runtime.js";import"./FSButtonAddIcon-CgQpLNEF.js";import"./FSTranslateField-BE1pYesR.js";import"./FSDialogSubmit-CsGufHwC.js";import"./FSDialog-CHTAgYMh.js";import"./useLanguages-BD-VwSKk.js";import"./base-BNnJ_ndD.js";import"./useAppTimeZone-UYdwQzNi.js";import"./time-BrgXc39x.js";const $e={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{valid:!1,name:"",roleId:null,roleType:0,fieldLabel:"",fieldTranslations:[],fieldValue:"",fieldType:3,textRules:u}},render:(m,{argTypes:l})=>({components:{FSForm:i,FSText:a,FSTextField:d,FSAutocompleteRole:n,FSMagicConfigField:s,FSButton:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const er=["TestForm"];export{e as TestForm,er as __namedExportsOrder,$e as default};
