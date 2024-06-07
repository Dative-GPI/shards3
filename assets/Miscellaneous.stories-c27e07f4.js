import{F as l}from"./FSButton-1e8cfafa.js";import{F as i}from"./FSForm-17213632.js";import{F as n}from"./FSText-d2336987.js";import{F as a}from"./FSAutocompleteRole-719c4ef9.js";import{F as s}from"./FSTextField-cc4424b2.js";import{T as d}from"./rules-78f81f7e.js";import"./vue.esm-bundler-f632b118.js";import"./FSClickable-af644c0d.js";import"./FSCard-75477b2b.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-76f4ad1e.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./VProgressCircular-aebe9788.js";import"./color-1b8c6bf4.js";import"./useRender-7972ae0c.js";import"./resizeObserver-8d8e6196.js";import"./VIcon-c02af0e0.js";import"./tag-573fddf1.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./FSIcon-110a991e.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./forwardRefs-e658ad70.js";import"./FSAutocompleteField-ff78314e.js";import"./FSSearchField-214f8d7b.js";import"./useTranslations-f6aba3ae.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./VField-77215d36.js";import"./VSpacer-e4feda29.js";import"./VLabel-4204a481.js";import"./loader-b8e78e76.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./useRules-31faed85.js";import"./FSDialogMenu-7826371b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSCheckbox-5ebd306d.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./VSelect-00399f8e.js";import"./VMenu-99bc218e.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./index-cd1f7a70.js";import"./VDivider-268fa528.js";import"./filter-ad9d8f4b.js";import"./FSChip-b2b5f621.js";import"./permissionInfos-da95e15e.js";import"./base-dd7352d9.js";import"./useAppOrganisationId-0d113abb.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./useAutocomplete-a7e2bf25.js";import"./useAppTimeZone-3909e5e4.js";const Gr={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,textRules:d}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:n,FSTextField:s,FSAutocompleteRole:a,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
