import{F as n}from"./FSImage-ec032b8f.js";import{_ as a}from"./FSCol-5b91b447.js";import{_ as p}from"./FSRow-852c6353.js";import"./vue.esm-bundler-0a1af505.js";import"./css-415780ec.js";import"./useColors-90958e24.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8d83670f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-84472fbe.js";import"./dimensions-41d36b25.js";import"./elevation-68e8c545.js";import"./locale-d3181d48.js";import"./proxiedModel-350eff8d.js";import"./useRender-76465e3d.js";import"./base-3cbdc314.js";import"./lodash-569b8a6d.js";import"./VImg-1b868636.js";import"./rounded-caec20b0.js";import"./transition-afc70ddd.js";import"./index-411e5c5c.js";const T={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          style="border: 1px dotted black;"
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const j=["Variations"];export{t as Variations,j as __namedExportsOrder,T as default};
