import{F as p}from"./FSAutocompleteRole-93ad4e2c.js";import{_ as l}from"./FSCol-5ed907ac.js";import"./vue.esm-bundler-6f923154.js";import"./FSAutocompleteField-1f0e4128.js";import"./FSSearchField-ec495859.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-64caadb9.js";import"./css-0cf2e273.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./VSpacer-54f0d5ce.js";import"./useRender-1cb09274.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./forwardRefs-e658ad70.js";import"./FSButton-ff673895.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./FSIcon-93774118.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./useTranslations-59cd146d.js";import"./FSDialogMenu-7aaa5a49.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./FSRadioGroup-52f2d9ef.js";import"./VSelectionControl-40c897c6.js";import"./index-55248dcb.js";import"./FSToggleSet-294c6bb8.js";import"./FSSlideGroup-ddac1e24.js";import"./uuid-08309875.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./FSWrapGroup-a40e4a86.js";import"./FSCheckbox-4fa3808a.js";import"./FSFadeOut-1de34239.js";import"./FSLoader-6b86cc0d.js";import"./elevation-2c5be1c3.js";import"./VSelect-b637e5b8.js";import"./VMenu-31bd6e5f.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";import"./filter-e9cedeb6.js";import"./FSChip-3525f285.js";import"./permissionInfos-da95e15e.js";import"./base-1b059240.js";import"./useAppOrganisationId-8a611d3f.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./useAutocomplete-bac56a24.js";const Eo={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(m,{argTypes:i})=>({components:{FSAutocompleteRole:p,FSCol:l},props:Object.keys(i),setup(){return{...m}},template:`
    <FSCol>
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
    </FSCol>`})};var t,r,e;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: "11",
      type2: 2
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteRole,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
    </FSCol>\`
  })
}`,...(e=(r=o.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const qo=["Variations"];export{o as Variations,qo as __namedExportsOrder,Eo as default};
