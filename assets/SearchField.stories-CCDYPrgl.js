import{F as a}from"./FSSearchField-DJ1HQDjY.js";import{F as i}from"./FSCol-B-Vfvg0L.js";import{F as n}from"./FSTextField-DPsTjA6v.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./useTranslations-BehwFxDb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-i8JhJBs1.js";import"./useBreakpoints-BGn0bPYv.js";import"./FSBaseField-DL008ZG5.js";import"./FSSpan-CHspDDbd.js";import"./useSlots-BnylMYIF.js";import"./FSRow-BkWeXIi_.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./FSButton-BQje8JZk.js";import"./FSClickable-Dnlrfn2W.js";import"./FSCard-DrQswI-1.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSIcon-CtLYuQJX.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";const X={title:"Foundation/Shared/Input fields/SearchField",component:a,subcomponents:{FSTextField:n},tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},e={args:{modelValue:"",placeholder:"Type here...",label:"Search",clearable:!0,hideHeader:!1,editable:!0},render:(p,{argTypes:m})=>({components:{FSSearchField:a,FSCol:i},props:Object.keys(m),setup(){return{args:p}},template:`
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
