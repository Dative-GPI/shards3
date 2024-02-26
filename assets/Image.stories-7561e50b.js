import{F as n}from"./FSImage-66056b8b.js";import{_ as a}from"./FSCol-03fc1f3a.js";import{_ as p}from"./FSRow-9ce6aace.js";import"./vue.esm-bundler-17cb12ce.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-d421c344.js";import"./theme-c4ac2200.js";import"./dimensions-10b1de84.js";import"./elevation-cb67bcb5.js";import"./locale-2e51016c.js";import"./VImg-9bf8748f.js";import"./rounded-d330abbe.js";import"./transition-4d995a4a.js";import"./index-c7efe106.js";import"./LexicalSelection.prod-b0bd0f79.js";const z={title:"Foundation/Shared/Image",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{size1:{width:80,height:80}}},render:(i,{argTypes:s})=>({components:{FSImage:n,FSCol:a,FSRow:p},props:Object.keys(s),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          style="border: 1px dotted black;"
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>`})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const v=["Variations"];export{e as Variations,v as __namedExportsOrder,z as default};
