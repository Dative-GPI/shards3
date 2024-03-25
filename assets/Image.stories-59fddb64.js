import{F as n}from"./FSImage-c53509b0.js";import{_ as a}from"./FSCol-c92bf913.js";import{_ as p}from"./FSRow-cccb539d.js";import"./vue.esm-bundler-a6679ce1.js";import"./css-39e888cb.js";import"./useColors-7bfbb133.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8c0eb56d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-3a7410fc.js";import"./dimensions-90886f46.js";import"./elevation-643b3bb1.js";import"./locale-06782a67.js";import"./proxiedModel-8c3bd5c0.js";import"./useRender-af29532b.js";import"./base-7f65d26c.js";import"./lodash-569b8a6d.js";import"./VImg-e080b924.js";import"./rounded-289ab918.js";import"./transition-8ea299cd.js";import"./index-35f785c5.js";const T={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
