import{F as r}from"./FSImage-BP-XnLOC.js";import{F as o}from"./FSCol-DLyNVOXQ.js";import{_ as s}from"./FSRow-4Qz6Bbpg.js";import"./vue.esm-bundler-Zcuj-zyO.js";import"./FSImageUI-DoJ4g_Bl.js";import"./FSLoader-_xEserk_.js";import"./useBreakpoints-IB1lZo1P.js";import"./useColors-ix1ChreS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DppimMvq.js";import"./css-YWErTUWV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-mm3JSYKM.js";import"./dimensions-BWgpWc0X.js";import"./elevation-BrHPj82J.js";import"./locale-Beavd5eP.js";import"./VImg-DaKoZ_qJ.js";import"./rounded-3VvIKpNW.js";import"./transition-shOmLEJh.js";import"./index-DnJxNQYu.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";const Y={title:"Foundation/Shared/Image",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{},render:(e,{argTypes:a})=>({components:{FSImage:r,FSCol:o,FSRow:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="80px"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="100%"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>`})},t={args:{},render:(e,{argTypes:a})=>({components:{FSImage:r,FSCol:o,FSRow:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          imageId="1"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="80px"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="100%"
        />
        <FSImage
          imageId="1"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>`})},i={args:{args:{imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:a})=>({components:{FSImage:r,FSCol:o,FSRow:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          :imageB64="args.imgBase64"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="80px"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="100%"
        />
        <FSImage
          :imageB64="args.imgBase64"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>`})};var p,g,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
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
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="80px"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="100%"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>\`
  })
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,c,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
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
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="80px"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="100%"
        />
        <FSImage
          imageId="1"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>\`
  })
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var l,S,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
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
          :imageB64="args.imgBase64"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="80px"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="100%"
        />
        <FSImage
          :imageB64="args.imgBase64"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>\`
  })
}`,...(u=(S=i.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const L=["Source","ImageId","ImageB64"];export{i as ImageB64,t as ImageId,n as Source,L as __namedExportsOrder,Y as default};
