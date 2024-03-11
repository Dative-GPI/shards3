import{F as n}from"./FSImage-26b18107.js";import{_ as a}from"./FSCol-630168ee.js";import{_ as p}from"./FSRow-4ed4317e.js";import"./vue.esm-bundler-cada065a.js";import"./useBreakpoints-19506ea5.js";import"./css-50f0aa1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-cac3f8b2.js";import"./theme-077d21c3.js";import"./dimensions-bd9ae89e.js";import"./elevation-a65147a7.js";import"./locale-793e4951.js";import"./useRender-aebc0214.js";import"./base-3cbdc314.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./VImg-61808023.js";import"./rounded-c91c5538.js";import"./transition-96405fc3.js";import"./index-1890f982.js";const O={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
