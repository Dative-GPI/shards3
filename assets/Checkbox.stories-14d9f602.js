import{F as t}from"./FSCheckbox-b029a3a5.js";import{F as c}from"./FSText-fc4c74c1.js";import"./vue.esm-bundler-85c2ade9.js";import"./FSIcon-d4b06799.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-96eed797.js";import"./color-680672dd.js";import"./theme-0475544b.js";import"./useRender-22e01882.js";import"./tag-fd98b684.js";import"./FSSpan-abd71399.js";import"./useSlots-58887162.js";import"./FSCol-caf5d8c8.js";import"./css-b4ee648a.js";import"./FSRow-120b21e0.js";import"./useColors-4bd4e66b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const V={title:"Foundation/Shared/Toggles/Checkbox",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(a,{argTypes:i})=>({components:{FSCheckbox:t,FSText:c},props:Object.keys(i),setup(){return{...a}},template:`
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
    </div>`})};var o,l,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const D=["Variations"];export{e as Variations,D as __namedExportsOrder,V as default};
