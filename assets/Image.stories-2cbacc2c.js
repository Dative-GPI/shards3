import{F as n}from"./FSImage-80f154cc.js";import{_ as a}from"./FSCol-5b91b447.js";import{_ as p}from"./FSRow-852c6353.js";import"./vue.esm-bundler-0a1af505.js";import"./css-415780ec.js";import"./useColors-128f3c4d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2d24b19c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-68d45c69.js";import"./dimensions-21b90dfd.js";import"./elevation-eb45930f.js";import"./locale-767f04a5.js";import"./proxiedModel-7a45f3f8.js";import"./useRender-cc726afb.js";import"./base-7f65d26c.js";import"./lodash-569b8a6d.js";import"./VImg-ef539901.js";import"./rounded-94c7156f.js";import"./transition-c9646b8b.js";import"./index-80f01c5b.js";const T={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
