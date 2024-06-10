import{F as t}from"./FSCheckbox-bde4293d.js";import{F as c}from"./FSText-09696756.js";import"./vue.esm-bundler-f632b118.js";import"./FSIcon-8032a9d1.js";import"./css-185b4786.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./useRender-e08116dd.js";import"./tag-f52d5248.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./FSCol-606e8271.js";import"./FSRow-76f4ad1e.js";import"./useRules-89bf8a4c.js";import"./VSelectionControl-27ff8605.js";import"./density-2a21ba5c.js";import"./proxiedModel-4a0e4d22.js";import"./index-5c2ea69f.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./dimensions-655ad4fc.js";const B={title:"Foundation/Shared/Toggles/Checkbox",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(i,{argTypes:a})=>({components:{FSCheckbox:t,FSText:c},props:Object.keys(a),setup(){return{...i}},template:`
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
