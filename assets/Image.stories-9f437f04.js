import{F as n}from"./FSImage-6ab5a147.js";import{_ as a}from"./FSCol-df85c70b.js";import{_ as p}from"./FSRow-ae483077.js";import"./vue.esm-bundler-72feb788.js";import"./css-a2b3c3ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-20078b56.js";import"./theme-dfac1c87.js";import"./dimensions-5bfc9d84.js";import"./elevation-4bc1fa4c.js";import"./locale-6e33b40c.js";import"./useRender-dfda60e7.js";import"./base-3cbdc314.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./VImg-1614ce10.js";import"./rounded-98e7d656.js";import"./transition-2c0bfa39.js";import"./index-2f035a23.js";const v={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const O=["Variations"];export{e as Variations,O as __namedExportsOrder,v as default};
