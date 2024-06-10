import{F as p}from"./FSAutocompleteRole-d7afcab3.js";import{_ as l}from"./FSCol-606e8271.js";import"./vue.esm-bundler-f632b118.js";import"./FSAutocompleteField-f1eebd00.js";import"./FSSearchField-89392c22.js";import"./FSTextField-ae12b6dc.js";import"./VField-d1df4052.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-76f4ad1e.js";import"./css-185b4786.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./VSpacer-f52c9222.js";import"./useRender-e08116dd.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./tag-f52d5248.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./anchor-559036f7.js";import"./rounded-83656db8.js";import"./VDefaultsProvider-e2787342.js";import"./forwardRefs-e658ad70.js";import"./FSButton-08a91e21.js";import"./FSClickable-4011125f.js";import"./FSCard-491552ba.js";import"./FSIcon-8032a9d1.js";import"./useRules-89bf8a4c.js";import"./index-c976eaf6.js";import"./useTranslations-f6aba3ae.js";import"./FSDialogMenu-5b31adc4.js";import"./VDialog-46b8b074.js";import"./VOverlay-f45091df.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./FSRadioGroup-43b41305.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./FSToggleSet-16fd0de7.js";import"./FSSlideGroup-70c8805c.js";import"./uuid-08309875.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./FSWrapGroup-3b709029.js";import"./FSCheckbox-bde4293d.js";import"./FSFadeOut-391a4266.js";import"./FSLoader-6ced331e.js";import"./elevation-f0466824.js";import"./VSelect-ee781f63.js";import"./VMenu-8734b394.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";import"./filter-dd5b3c74.js";import"./FSChip-ff59a050.js";import"./permissionInfos-da95e15e.js";import"./base-dd7352d9.js";import"./useAppOrganisationId-0d113abb.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./useAutocomplete-5bae40b5.js";const Eo={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(m,{argTypes:i})=>({components:{FSAutocompleteRole:p,FSCol:l},props:Object.keys(i),setup(){return{...m}},template:`
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
