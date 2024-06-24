import{F as o}from"./FSImage-DCiPMM8N.js";import{_ as a}from"./FSCol-OnQTHx6W.js";import{_ as g}from"./FSRow-BZVvIgLd.js";import"./vue.esm-bundler-BLBBrD1D.js";import"./FSLoader-wJOBxBqI.js";import"./css-DU1X_fj1.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-T1BTTgdX.js";import"./dimensions-DNYoshM5.js";import"./elevation-0FWsrb7Y.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./useRender-CTGr_J4i.js";import"./base-BNnJ_ndD.js";import"./composableFactory-DeG9aq0N.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-BwDapMIg.js";import"./rounded-Ax8hVtG-.js";import"./transition-DqSOegbJ.js";import"./index-C6izM9Xn.js";const H={title:"Foundation/Shared/Image",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(n,{argTypes:s})=>({components:{FSImage:o,FSCol:a,FSRow:g},props:Object.keys(s),setup(){return{...n}},template:`
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
