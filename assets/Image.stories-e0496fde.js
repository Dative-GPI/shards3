import{F as n}from"./FSImage-3657dcaa.js";import{_ as a}from"./FSCol-5941d279.js";import{_ as p}from"./FSRow-e0b07355.js";import"./vue.esm-bundler-a27e881e.js";import"./base-5094c3fa.js";import"./serviceFactory-25228cba.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VImg-52b1b44b.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./dimensions-59e3b80b.js";import"./rounded-acf264a5.js";import"./transition-91aa1796.js";import"./index-e8bb7e10.js";import"./VSkeletonLoader-6bc87f83.js";import"./elevation-c3b2bd24.js";import"./locale-d8beded1.js";import"./css-fb381997.js";const O={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
