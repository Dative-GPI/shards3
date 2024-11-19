import{F as a}from"./FSSearchField-Bx6G4eFd.js";import{F as i}from"./FSCol-D8gLxM2E.js";import{F as n}from"./FSTextField-B9Yl6IUE.js";import"./vue.esm-bundler-Ddr6MgcY.js";import"./useTranslations-DgvmBCqU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./FSBaseField-CPhXHC60.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSRow-CSQtiyAx.js";import"./useColors-C3GOyDHx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D55tBrU4.js";import"./FSButton-44O228oj.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-Dz5j9aqP.js";import"./FSCard-CxH8ejsx.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSIcon-dnXFGGQr.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./transition-BtBp4lzQ.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./locale-CA7yUTVs.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";const Y={title:"Foundation/Shared/Input fields/SearchField",component:a,subcomponents:{FSTextField:n},tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},e={args:{modelValue:"",placeholder:"Type here...",label:"Search",clearable:!0,hideHeader:!1,editable:!0},render:(p,{argTypes:m})=>({components:{FSSearchField:a,FSCol:i},props:Object.keys(m),setup(){return{args:p}},template:`
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const Z=["Variations"];export{e as Variations,Z as __namedExportsOrder,Y as default};
