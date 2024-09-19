import{_ as s}from"./FSBreadcrumbs-CQt9HN5r.js";import"./vue.esm-bundler-BwDfg4wG.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-ChaYv6Le.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VIcon-D-JUvW-a.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./router-CeBnHAqN.js";import"./density-CY8ZwxUy.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";const h={title:"Foundation/Shared/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{title:"First (clickable)",disabled:!1,active:!1},{title:"Second (disabled)",disabled:!0,active:!1},{title:"Third (clickable)",disabled:!1,active:!1},{title:"Last (active)",disabled:!0,active:!0}]}},render:(i,{argTypes:n})=>({components:{Breadcrumbs:s},props:Object.keys(n),setup(){return{...i}},template:`
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
