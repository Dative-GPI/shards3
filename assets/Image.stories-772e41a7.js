import{F as n}from"./FSImage-9b7d9073.js";import{_ as a}from"./FSCol-7dad0d26.js";import{_ as p}from"./FSRow-40eef247.js";import"./vue.esm-bundler-6746129d.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-28636d86.js";import"./theme-dcffbbe6.js";import"./dimensions-b4b52e44.js";import"./elevation-6127bd0f.js";import"./locale-6d7be75c.js";import"./VImg-eeb84175.js";import"./rounded-4ccd8171.js";import"./transition-909f2bdc.js";import"./index-5d004ff4.js";import"./LexicalSelection.prod-bad52e97.js";const z={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
