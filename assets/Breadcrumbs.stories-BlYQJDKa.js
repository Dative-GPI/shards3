import{_ as s}from"./FSBreadcrumbs-Dgx1Vx_l.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-DwJNOKvG.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./router-D2IrSaAD.js";import"./density-CDPzHPmZ.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";const h={title:"Foundation/Shared/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(i,{argTypes:n})=>({components:{Breadcrumbs:s},props:Object.keys(n),setup(){return{...i}},template:`
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
