import{F as n}from"./FSImage-89cac3bb.js";import{_ as a}from"./FSCol-39bd052c.js";import{_ as p}from"./FSRow-b5482a77.js";import"./vue.esm-bundler-d8049c85.js";import"./base-5094c3fa.js";import"./serviceFactory-25228cba.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./css-50f0aa1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VImg-9cec152f.js";import"./useRender-29d234e5.js";import"./theme-540b65c4.js";import"./dimensions-c0ade26a.js";import"./color-339b05ed.js";import"./rounded-0d200380.js";import"./transition-a0827c0d.js";import"./index-d961be33.js";import"./VSkeletonLoader-d10ceb25.js";import"./elevation-ef665fc6.js";import"./locale-0b822523.js";const R={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Variations"];export{t as Variations,T as __namedExportsOrder,R as default};
