import{F as n}from"./FSImage-a5e376c1.js";import{_ as a}from"./FSCol-8dc0322a.js";import{_ as p}from"./FSRow-ae4caba9.js";import"./vue.esm-bundler-7bc65811.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-3023c34d.js";import"./theme-0a9d2dbd.js";import"./dimensions-d0734457.js";import"./elevation-8ccaa6df.js";import"./locale-6f1bd0c0.js";import"./VImg-4e39b73e.js";import"./rounded-2bba334c.js";import"./transition-188ceb13.js";import"./index-77a5f257.js";import"./LexicalSelection.prod-b0bd0f79.js";const z={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
