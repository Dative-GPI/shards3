import{F as n}from"./FSImage-10df5553.js";import{_ as a}from"./FSCol-caf5d8c8.js";import{_ as p}from"./FSRow-120b21e0.js";import"./vue.esm-bundler-85c2ade9.js";import"./css-b4ee648a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-680672dd.js";import"./theme-0475544b.js";import"./dimensions-7d06aea5.js";import"./elevation-e7838e5f.js";import"./locale-cdd955a4.js";import"./useRender-22e01882.js";import"./base-3cbdc314.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./VImg-8c7f30a9.js";import"./rounded-7d023c25.js";import"./transition-0e35e3a5.js";import"./index-160e8c08.js";const v={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
