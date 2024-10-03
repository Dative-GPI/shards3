import{_ as s}from"./FSBreadcrumbs-8bBdkOvq.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-BHUJU4iP.js";import"./css-D18ueKtB.js";import"./useColors-BoRVwO74.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BEfrBPRQ.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./tag-ByYBjpGI.js";import"./router-C4cLtMAM.js";import"./density-CY0EC5jE.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";const h={title:"Foundation/Shared/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(i,{argTypes:n})=>({components:{Breadcrumbs:s},props:Object.keys(n),setup(){return{...i}},template:`
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
