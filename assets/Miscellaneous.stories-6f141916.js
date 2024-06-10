import{F as l}from"./FSButton-08a91e21.js";import{F as i}from"./FSForm-483c0cbb.js";import{F as n}from"./FSText-09696756.js";import{F as a}from"./FSAutocompleteRole-d7afcab3.js";import{F as s}from"./FSTextField-ae12b6dc.js";import{T as d}from"./rules-78f81f7e.js";import"./vue.esm-bundler-f632b118.js";import"./FSClickable-4011125f.js";import"./FSCard-491552ba.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-76f4ad1e.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./VProgressCircular-5f2acd26.js";import"./color-8a5e0dbc.js";import"./useRender-e08116dd.js";import"./resizeObserver-e215d892.js";import"./VIcon-31ae1cc1.js";import"./tag-f52d5248.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./FSIcon-8032a9d1.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./forwardRefs-e658ad70.js";import"./FSAutocompleteField-f1eebd00.js";import"./FSSearchField-89392c22.js";import"./useTranslations-f6aba3ae.js";import"./FSDialogMenu-5b31adc4.js";import"./VDialog-46b8b074.js";import"./VOverlay-f45091df.js";import"./anchor-559036f7.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./VDefaultsProvider-e2787342.js";import"./FSRadioGroup-43b41305.js";import"./useRules-89bf8a4c.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./VLabel-19a0ad6a.js";import"./FSToggleSet-16fd0de7.js";import"./FSSlideGroup-70c8805c.js";import"./uuid-08309875.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./FSWrapGroup-3b709029.js";import"./VField-d1df4052.js";import"./VSpacer-f52c9222.js";import"./loader-288cfa26.js";import"./rounded-83656db8.js";import"./FSCheckbox-bde4293d.js";import"./FSFadeOut-391a4266.js";import"./FSLoader-6ced331e.js";import"./elevation-f0466824.js";import"./VSelect-ee781f63.js";import"./VMenu-8734b394.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./VImg-82f9d308.js";import"./index-c976eaf6.js";import"./VDivider-a5e624de.js";import"./filter-dd5b3c74.js";import"./FSChip-ff59a050.js";import"./permissionInfos-da95e15e.js";import"./base-dd7352d9.js";import"./useAppOrganisationId-0d113abb.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./useAutocomplete-5bae40b5.js";import"./useAppTimeZone-3909e5e4.js";const Gr={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,textRules:d}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:n,FSTextField:s,FSAutocompleteRole:a,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
          <div style="display: flex; gap: 10px;">
            <FSButton
              type="submit"
              label="Submit form"
            />
          </div>
        </div>
      </FSForm>
    </div>`})};var t,e,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      name: "",
      roleId: null,
      roleType: 0,
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
}`,...(o=(e=r.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Hr=["InviteUserOrganisationForm"];export{r as InviteUserOrganisationForm,Hr as __namedExportsOrder,Gr as default};
