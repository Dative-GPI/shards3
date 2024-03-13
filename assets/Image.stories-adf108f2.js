import{F as n}from"./FSImage-cea37f0b.js";import{_ as a}from"./FSCol-df85c70b.js";import{_ as p}from"./FSRow-ae483077.js";import"./vue.esm-bundler-72feb788.js";import"./css-a2b3c3ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-564bd659.js";import"./theme-1fe57d71.js";import"./dimensions-e9edc3f7.js";import"./elevation-2e2adb9f.js";import"./locale-8250cc46.js";import"./useRender-c1d2bc01.js";import"./base-3cbdc314.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./VImg-0c08cfd1.js";import"./rounded-1c8889d4.js";import"./transition-b3b454fb.js";import"./index-348a046d.js";const v={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
