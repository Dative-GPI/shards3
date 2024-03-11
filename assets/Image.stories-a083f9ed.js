import{F as n}from"./FSImage-e59bbb4d.js";import{_ as a}from"./FSCol-7c29272b.js";import{_ as p}from"./FSRow-db172e67.js";import"./vue.esm-bundler-7e157d2d.js";import"./css-b03ad87d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-e501cff3.js";import"./theme-67ffe9ae.js";import"./dimensions-a1a728d7.js";import"./elevation-7fca9761.js";import"./locale-c9528b1a.js";import"./useRender-91b27a68.js";import"./base-3cbdc314.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./VImg-0bee75cb.js";import"./rounded-fe596c98.js";import"./transition-b4c159ac.js";import"./index-37e9655b.js";const v={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
