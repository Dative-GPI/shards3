import{F as n}from"./FSImage-59d2453d.js";import{_ as a}from"./FSCol-07ad80b8.js";import{_ as p}from"./FSRow-e442cab6.js";import"./vue.esm-bundler-588e96c7.js";import"./base-5094c3fa.js";import"./serviceFactory-25228cba.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./css-50f0aa1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VImg-3d3560c1.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./dimensions-e6c6eed7.js";import"./rounded-ef9fdb42.js";import"./transition-28907f24.js";import"./index-c8d171e2.js";import"./VSkeletonLoader-2eb0f688.js";import"./elevation-1ac0f37f.js";import"./locale-56b7257e.js";const O={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          style="border: 1px dotted black;"
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>`})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const R=["Variations"];export{e as Variations,R as __namedExportsOrder,O as default};
