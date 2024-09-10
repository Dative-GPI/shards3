import{_ as s}from"./FSBreadcrumbs-B3lH3ee8.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-DYxpTLuT.js";import"./css-CbCR1nbl.js";import"./useColors-C8ZtkfWa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./VIcon-DptP6m9n.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./router-CbAEScZe.js";import"./density-BM1QLeh4.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";const h={title:"Foundation/Shared/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(i,{argTypes:n})=>({components:{Breadcrumbs:s},props:Object.keys(n),setup(){return{...i}},template:`
        <Breadcrumbs v-bind="args" />
    `})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        title: "First (clickable)",
        disabled: false,
        active: false
      }, {
        title: "Second (disabled)",
        disabled: true,
        active: false
      }, {
        title: "Third (clickable)",
        disabled: false,
        active: false
      }, {
        title: "Last (active)",
        disabled: true,
        active: true
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Breadcrumbs
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <Breadcrumbs v-bind="args" />
    \`
  })
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const O=["Standard"];export{e as Standard,O as __namedExportsOrder,h as default};
