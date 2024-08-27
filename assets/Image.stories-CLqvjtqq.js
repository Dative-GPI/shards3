import{F as r}from"./FSImage-C2P2bTx-.js";import{_ as n}from"./FSCol-DXkP6ARl.js";import{_ as g}from"./FSRow-D-NDNvrc.js";import"./vue.esm-bundler-B8zP9crO.js";import"./FSImageUI-CRv7hclD.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Bs2ItKgK.js";import"./VImg-DbvVxLaQ.js";import"./css-B1GBcH8c.js";import"./useColors-AJGcQHF_.js";import"./index-_Z9wfsFC.js";import"./theme-DtZVHDBt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DErt19fL.js";import"./dimensions-DJJFaY_J.js";import"./elevation-B_HXnKlm.js";import"./locale-FYv4GhYY.js";import"./rounded-Bso5Gdmg.js";import"./transition-CsS1sKoI.js";import"./index-vockUB0G.js";const _={title:"Foundation/Shared/Image",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80},imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(o,{argTypes:s})=>({components:{FSImage:r,FSCol:n,FSRow:g},props:Object.keys(s),setup(){return{...o}},template:`
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
