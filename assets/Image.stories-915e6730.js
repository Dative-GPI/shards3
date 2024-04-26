import{F as o}from"./FSImage-e31cb187.js";import{_ as a}from"./FSCol-30a69fbd.js";import{_ as g}from"./FSRow-9733beba.js";import"./vue.esm-bundler-3386cb71.js";import"./FSLoader-dfd50c8b.js";import"./css-bcfd232c.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-2c4e2e53.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./useRender-09edae02.js";import"./base-0de1729e.js";import"./serviceFactory-3393b4e4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0f23559b.js";import"./VImg-cbb35f88.js";import"./rounded-1ab8dee0.js";import"./transition-53ccad39.js";import"./index-3382552b.js";const H={title:"Foundation/Shared/Image",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(n,{argTypes:s})=>({components:{FSImage:o,FSCol:a,FSRow:g},props:Object.keys(s),setup(){return{...n}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
        <FSImage
          :imageB64="args.imgBase64"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>`})};var i,t,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      size1: {
        width: 80,
        height: 80
      },
      imgBase64: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
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
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
        <FSImage
          :imageB64="args.imgBase64"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>\`
  })
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const N=["Variations"];export{e as Variations,N as __namedExportsOrder,H as default};
