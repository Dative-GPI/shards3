import{F as n}from"./FSImage-01457e3f.js";import{_ as a}from"./FSCol-fcea4dc1.js";import{_ as p}from"./FSRow-50904d6e.js";import"./vue.esm-bundler-e580dd1f.js";import"./css-ca36ed75.js";import"./useColors-b2cb658b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a3bb880e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-0af6d6f5.js";import"./dimensions-10c7935e.js";import"./elevation-02492a14.js";import"./locale-405fbfb1.js";import"./proxiedModel-3aca154f.js";import"./useRender-16acb9c4.js";import"./base-7f65d26c.js";import"./lodash-569b8a6d.js";import"./VImg-07ac5889.js";import"./rounded-2552fce2.js";import"./transition-7d6b8783.js";import"./index-e90df875.js";const T={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          style="border: 1px dotted black;"
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      size1: {
        width: 80,
        height: 80
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSImage,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          style="border: 1px dotted black;"
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const j=["Variations"];export{t as Variations,j as __namedExportsOrder,T as default};
