import{F as o}from"./FSImage-NMzdlsY0.js";import{_ as a}from"./FSCol-B7HQy3FB.js";import{_ as g}from"./FSRow-DoCXWKDP.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSLoader-Bx7UBqYr.js";import"./css-DYOPUjjE.js";import"./useColors-WxHDk9aB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-BhlhQtQT.js";import"./dimensions-fR777bfb.js";import"./elevation-BoGrGvdU.js";import"./locale-BC9z6YbT.js";import"./base-BNnJ_ndD.js";import"./composableFactory-J8cSLWf9.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-BLQ7D_3g.js";import"./rounded-TFXDyxjJ.js";import"./transition-CJbyFvkq.js";import"./index-yKNzK_fJ.js";const b={title:"Foundation/Shared/Image",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(n,{argTypes:s})=>({components:{FSImage:o,FSCol:a,FSRow:g},props:Object.keys(s),setup(){return{...n}},template:`
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
