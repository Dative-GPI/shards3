import{F as l}from"./FSButton-29e96b8a.js";import{F as i}from"./FSForm-f0ef5762.js";import{F as n}from"./FSText-46c134d7.js";import{F as a}from"./FSAutocompleteRole-488eee9e.js";import{_ as s}from"./FSTextField-3d775cb5.js";import{T as d}from"./rules-46cd7bcd.js";import"./vue.esm-bundler-a0893183.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./FSCol-e45ac157.js";import"./css-03aed76d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-821d23a1.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./VProgressCircular-94f3850c.js";import"./color-d0fba9db.js";import"./useRender-13ac3742.js";import"./resizeObserver-7a348d53.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./FSIcon-9d61ed62.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./forwardRefs-e658ad70.js";import"./FSAutocompleteField-82ab0202.js";import"./FSSearchField-fb041cb4.js";import"./useTranslations-95b4a686.js";import"./FSDialogMenu-2fb2114e.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./anchor-155e2782.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./VDefaultsProvider-c4e19f1a.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./useRules-8ba0ecf4.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./VField-c7486719.js";import"./VSpacer-b1094f09.js";import"./loader-4af36e99.js";import"./rounded-4c492e72.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./index-01bbf789.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./FSChip-db263eca.js";import"./permissionInfos-da95e15e.js";import"./base-168b8f74.js";import"./useAppOrganisationId-a0837ade.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-2d4a69cc.js";import"./useAutocomplete-cc546bbe.js";import"./useAppTimeZone-d7f3e4a5.js";const Jr={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,textRules:d}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:n,FSTextField:s,FSAutocompleteRole:a,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(o=(e=r.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Kr=["InviteUserOrganisationForm"];export{r as InviteUserOrganisationForm,Kr as __namedExportsOrder,Jr as default};
