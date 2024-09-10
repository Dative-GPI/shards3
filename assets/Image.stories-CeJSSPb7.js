import{F as r}from"./FSImage-CBathzkQ.js";import{_ as n}from"./FSCol-Bk577joi.js";import{_ as g}from"./FSRow-BuYwVvwM.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSImageUI-E0mf0Zhc.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./VImg-BUrdc1ij.js";import"./css-CbCR1nbl.js";import"./useColors-Bw2ZR-m1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-CxiNukW_.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";const _={title:"Foundation/Shared/Image",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(o,{argTypes:s})=>({components:{FSImage:r,FSCol:n,FSRow:g},props:Object.keys(s),setup(){return{...o}},template:`
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
    </div>`})};var i,a,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const R=["Variations"];export{e as Variations,R as __namedExportsOrder,_ as default};
