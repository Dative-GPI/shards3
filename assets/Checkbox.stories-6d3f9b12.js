import{F as t}from"./FSCheckbox-2107f3ac.js";import{F as c}from"./FSText-c8879522.js";import"./vue.esm-bundler-7c237656.js";import"./FSIcon-84236a8c.js";import"./css-aa928277.js";import"./useColors-8171fc39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6b978bcd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-ea625dc1.js";import"./color-8b3e8a76.js";import"./useRender-e696dd75.js";import"./tag-d0e3859f.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./FSCol-76ddd6d9.js";import"./FSRow-0e15f868.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-4d654956.js";import"./density-ba2627df.js";import"./proxiedModel-255ed77f.js";import"./index-b834f342.js";import"./VLabel-25f2a1ef.js";import"./VInput-cb53917c.js";import"./locale-842c83ae.js";import"./index-bed3da0c.js";import"./transition-99224378.js";import"./dimensions-506d0d5f.js";const B={title:"Foundation/Shared/Toggles/Checkbox",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(i,{argTypes:a})=>({components:{FSCheckbox:t,FSText:c},props:Object.keys(a),setup(){return{...i}},template:`
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
