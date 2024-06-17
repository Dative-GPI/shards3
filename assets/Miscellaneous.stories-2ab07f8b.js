import{F as l}from"./FSButton-ff673895.js";import{F as i}from"./FSForm-7d2059d4.js";import{F as n}from"./FSText-eacee215.js";import{F as a}from"./FSAutocompleteRole-93ad4e2c.js";import{_ as s}from"./FSTextField-add61627.js";import{T as d}from"./rules-56abbd16.js";import"./vue.esm-bundler-6f923154.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./FSCol-5ed907ac.js";import"./css-0cf2e273.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-64caadb9.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./VProgressCircular-78df7425.js";import"./color-a262cadc.js";import"./useRender-1cb09274.js";import"./resizeObserver-e79b2f69.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./FSIcon-93774118.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./forwardRefs-e658ad70.js";import"./FSAutocompleteField-1f0e4128.js";import"./FSSearchField-ec495859.js";import"./useTranslations-59cd146d.js";import"./FSDialogMenu-7aaa5a49.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./anchor-52e92869.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./VDefaultsProvider-a08a9a42.js";import"./FSRadioGroup-52f2d9ef.js";import"./useRules-8e3c4a4a.js";import"./VSelectionControl-40c897c6.js";import"./index-55248dcb.js";import"./VLabel-737017e3.js";import"./FSToggleSet-294c6bb8.js";import"./FSSlideGroup-ddac1e24.js";import"./uuid-08309875.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./FSWrapGroup-a40e4a86.js";import"./VField-d1f54092.js";import"./VSpacer-54f0d5ce.js";import"./loader-1a97481f.js";import"./rounded-1f8e51a9.js";import"./FSCheckbox-4fa3808a.js";import"./FSFadeOut-1de34239.js";import"./FSLoader-6b86cc0d.js";import"./elevation-2c5be1c3.js";import"./VSelect-b637e5b8.js";import"./VMenu-31bd6e5f.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./VImg-8e65ad17.js";import"./index-114ba00f.js";import"./VDivider-dfa46b18.js";import"./filter-e9cedeb6.js";import"./FSChip-3525f285.js";import"./permissionInfos-da95e15e.js";import"./base-1b059240.js";import"./useAppOrganisationId-8a611d3f.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./useAutocomplete-bac56a24.js";import"./useAppTimeZone-dc793336.js";const Gr={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,textRules:d}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:n,FSTextField:s,FSAutocompleteRole:a,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
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
