import{F as i}from"./FSSlider-Bf3G8h_U.js";import{_ as a}from"./FSCol-CA6NzDpV.js";import"./vue.esm-bundler-DeSao-KJ.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-JJutUvlP.js";import"./css-BnhLLynS.js";import"./useColors-Btze6ZPu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-RQK62Xub.js";import"./VSlider-Vc4kGwRC.js";import"./elevation-BBJMtRPf.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./rounded-BOBir3aK.js";import"./index-BIb3aONP.js";import"./useRender-CIdmfI-I.js";import"./color-XZPyE2lN.js";import"./index-BWi4ltEp.js";import"./VInput-DX4N6NPh.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./transition-CTQG5_JK.js";import"./density-4sjlTnVP.js";import"./VLabel-CWiDHCZM.js";const E={title:"Foundation/Shared/Slider",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(n,{argTypes:l})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
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
