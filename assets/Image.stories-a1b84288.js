import{F as n}from"./FSImage-2c543ce5.js";import{_ as a}from"./FSCol-00f12d9b.js";import{_ as p}from"./FSRow-89f60060.js";import"./vue.esm-bundler-47273a21.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-38d974b0.js";import"./theme-7e191b90.js";import"./dimensions-699818e3.js";import"./elevation-522a2612.js";import"./locale-5c4d4b03.js";import"./VImg-659d7685.js";import"./rounded-8d3cef66.js";import"./transition-6c7cc79f.js";import"./index-1e6cce54.js";import"./LexicalSelection.prod-b0bd0f79.js";const z={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const v=["Variations"];export{e as Variations,v as __namedExportsOrder,z as default};
