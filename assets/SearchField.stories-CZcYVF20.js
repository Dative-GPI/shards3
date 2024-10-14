import{F as a}from"./FSSearchField-N7Q5f50N.js";import{F as i}from"./FSCol-CYWCfIBP.js";import{F as n}from"./FSTextField-C5__iWNH.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./useTranslations-BehwFxDb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSBaseField-CMNvz_3q.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./useColors-CeHYzu6a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CX_N7n5F.js";import"./VSpacer-Di7g3RCw.js";import"./color-Du5JXqac.js";import"./FSButton-BpVntGX1.js";import"./FSClickable-B6-SRbsx.js";import"./FSCard-B1dz5tzT.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSIcon-8KdV556C.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./locale-BJQwrXJ7.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";const X={title:"Foundation/Shared/Input fields/SearchField",component:a,subcomponents:{FSTextField:n},tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},e={args:{modelValue:"",placeholder:"Type here...",label:"Search",clearable:!0,hideHeader:!1,editable:!0},render:(p,{argTypes:m})=>({components:{FSSearchField:a,FSCol:i},props:Object.keys(m),setup(){return{args:p}},template:`
    <FSCol>
      <FSSearchField
        v-model="args.modelValue"
        v-bind="args"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Type here...',
    label: 'Search',
    clearable: true,
    hideHeader: false,
    editable: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSearchField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSSearchField
        v-model="args.modelValue"
        v-bind="args"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const Y=["Variations"];export{e as Variations,Y as __namedExportsOrder,X as default};
