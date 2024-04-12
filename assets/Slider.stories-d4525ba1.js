import{F as i}from"./FSSlider-76ab1efa.js";import{_ as a}from"./FSCol-3eed52f7.js";import"./vue.esm-bundler-43a473fd.js";import"./FSSpan-f049a07d.js";import"./useSlots-e98bc591.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-ba466629.js";import"./css-18b0cf8e.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./VSlider-9e2424ca.js";import"./elevation-494cacfb.js";import"./locale-d44d9622.js";import"./proxiedModel-7eeaa9ef.js";import"./rounded-c06207e9.js";import"./index-112138db.js";import"./useRender-d2bddd17.js";import"./color-8bc818ac.js";import"./index-33b2c13d.js";import"./VInput-a94a37bb.js";import"./VIcon-b50c364f.js";import"./tag-2aee60b4.js";import"./transition-83682335.js";import"./density-c9a73c91.js";import"./VLabel-96df6c46.js";const E={title:"Foundation/Shared/Slider",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(n,{argTypes:l})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
    <FSCol>
      <FSSlider
        label="Slider - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="primary"
        label="Slider - min: 0 - max: 10 - step: 1 - primary color"
        :min="0"
        :max="10"
        :step="1"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="warning"
        label="Required slider - min: 0 - max: 10 - step: 1 - ticks - warning color"
        description="Description for this field"
        :required="true"
        :showTicks="'always'"
        :min="0"
        :max="25"
        :step="1"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      value1: 0,
      value2: 5,
      value3: 15,
      value4: 50
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSlider,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSSlider
        label="Slider - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="primary"
        label="Slider - min: 0 - max: 10 - step: 1 - primary color"
        :min="0"
        :max="10"
        :step="1"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="warning"
        label="Required slider - min: 0 - max: 10 - step: 1 - ticks - warning color"
        description="Description for this field"
        :required="true"
        :showTicks="'always'"
        :min="0"
        :max="25"
        :step="1"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const z=["Variations"];export{e as Variations,z as __namedExportsOrder,E as default};
