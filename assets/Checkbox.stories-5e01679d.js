import{F as t}from"./FSCheckbox-d1b08f47.js";import{F as c}from"./FSText-e633ddca.js";import"./vue.esm-bundler-857e5af7.js";import"./FSIcon-faf0e444.js";import"./css-ab2bdb81.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-2d4ba55d.js";import"./color-5d3cc229.js";import"./useRender-d5beceb3.js";import"./tag-7bd029e5.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./FSCol-439c812a.js";import"./FSRow-e30f1dcc.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-11aadb82.js";import"./density-69cd8efb.js";import"./proxiedModel-1e29c8a1.js";import"./index-f95cc40a.js";import"./VLabel-820f7887.js";import"./VInput-6c2a4fd3.js";import"./locale-9a98f700.js";import"./index-d6be2044.js";import"./transition-2a27d0f7.js";import"./dimensions-d7f5c5ad.js";const B={title:"Foundation/Shared/Toggles/Checkbox",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(i,{argTypes:a})=>({components:{FSCheckbox:t,FSText:c},props:Object.keys(a),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value1" />
        <FSCheckbox v-model="args.value2" label="Second checkbox" />
        <FSCheckbox v-model="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value4" color="error" />
        <FSCheckbox v-model="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :modelValue="false" :editable="false" />
        <FSCheckbox :modelValue="true"  :editable="false" label="Second checkbox (disabled)" />
        <FSCheckbox :modelValue="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
      </div>
    </div>`})};var o,r,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false,
      value4: true,
      value5: false,
      value6: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCheckbox,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value1" />
        <FSCheckbox v-model="args.value2" label="Second checkbox" />
        <FSCheckbox v-model="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value4" color="error" />
        <FSCheckbox v-model="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :modelValue="false" :editable="false" />
        <FSCheckbox :modelValue="true"  :editable="false" label="Second checkbox (disabled)" />
        <FSCheckbox :modelValue="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
      </div>
    </div>\`
  })
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const G=["Variations"];export{e as Variations,G as __namedExportsOrder,B as default};
