import{F as r}from"./FSImage-B2oKYvYJ.js";import{_ as n}from"./FSCol-D9tDKebi.js";import{_ as g}from"./FSRow-Gvoj2sTW.js";import"./vue.esm-bundler-BATn8cDU.js";import"./FSImageUI-BbV4RD2I.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CvKYYcO3.js";import"./FSLoader-Ccd0M2qp.js";import"./css-C5boehQC.js";import"./useColors-BHn59yMM.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-jM82jTdX.js";import"./dimensions-viHtPIHZ.js";import"./elevation-oWdkHiXv.js";import"./locale-Cm_eUAdw.js";import"./VImg-euCAhqKz.js";import"./rounded-BwvX6bZn.js";import"./transition-O2x8Myu8.js";import"./index-Bv2UUMCu.js";const R={title:"Foundation/Shared/Image",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(o,{argTypes:s})=>({components:{FSImage:r,FSCol:n,FSRow:g},props:Object.keys(s),setup(){return{...o}},template:`
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
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :height="args.size1.height"
          :cover="false"
        />
      </FSCol>
    </div>`})};var i,t,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :height="args.size1.height"
          :cover="false"
        />
      </FSCol>
    </div>\`
  })
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const k=["Variations"];export{e as Variations,k as __namedExportsOrder,R as default};
