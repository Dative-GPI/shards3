import{F as o}from"./FSImage-bcb6e763.js";import{_ as a}from"./FSCol-c97fad61.js";import{_ as g}from"./FSRow-83e75060.js";import"./vue.esm-bundler-01006032.js";import"./FSLoader-639650a7.js";import"./css-279a0029.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-8c62b342.js";import"./dimensions-4232d0fa.js";import"./elevation-28c6fd5f.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./useRender-4bcbb6ac.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-25aa3ef9.js";import"./VImg-f5b3db66.js";import"./rounded-9001edc0.js";import"./transition-9c7eb302.js";import"./index-4a977ff0.js";const H={title:"Foundation/Shared/Image",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(n,{argTypes:s})=>({components:{FSImage:o,FSCol:a,FSRow:g},props:Object.keys(s),setup(){return{...n}},template:`
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
