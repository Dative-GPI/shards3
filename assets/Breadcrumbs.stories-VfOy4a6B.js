import{_ as s}from"./FSBreadcrumbs-DUDt6yDb.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-C0akNC9K.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./VIcon-DBlUULm8.js";import"./color-D4nM6Ihv.js";import"./router-BPv_tYld.js";import"./density-CRkSANTr.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";const h={title:"Foundation/Shared/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(i,{argTypes:n})=>({components:{Breadcrumbs:s},props:Object.keys(n),setup(){return{...i}},template:`
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