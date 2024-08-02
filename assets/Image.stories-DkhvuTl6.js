import{F as o}from"./FSImage-CakGGjIP.js";import{_ as a}from"./FSCol-B7HQy3FB.js";import{_ as g}from"./FSRow-DoCXWKDP.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSLoader-BCzmDe0l.js";import"./css-DYOPUjjE.js";import"./useColors-Hqqi3yfr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DvJT0EEa.js";import"./dimensions-Dnxg3zhh.js";import"./elevation-BTkUCD39.js";import"./locale-BC9z6YbT.js";import"./base-CmdGny12.js";import"./composableFactory-J8cSLWf9.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-DgHq50DD.js";import"./rounded-YB6K8mOp.js";import"./transition-yl3lVN6J.js";import"./index-DN-QUi1L.js";const b={title:"Foundation/Shared/Image",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(n,{argTypes:s})=>({components:{FSImage:o,FSCol:a,FSRow:g},props:Object.keys(s),setup(){return{...n}},template:`
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const k=["Variations"];export{e as Variations,k as __namedExportsOrder,b as default};
