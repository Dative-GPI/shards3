import o from"./FSSwitch-B8ZgzXlf.js";import{F as s}from"./FSText-BhZd10FY.js";import"./vue.esm-bundler-0BaZj8Cy.js";import"./FSSpan-BhEzkP-a.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-D35grUmj.js";import"./css-Bhvr2onI.js";import"./FSRow-CAJM3FZ0.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./useRules-B-2YsFdr.js";import"./index-A-BnjIhl.js";import"./color-v9Utm2wX.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./VIcon-_OtdNVUv.js";import"./transition-CCJeTa-A.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./VSelectionControl-DanrcpVZ.js";import"./index-C_NEyI9V.js";import"./VLabel-B8m3kRrJ.js";import"./loader-BfrQsM5c.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";const K={title:"Foundation/Shared/Toggles/Switch",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(r,{argTypes:a})=>({components:{FSSwitch:o,FSText:s},props:Object.keys(a),setup(){return{...r}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText font="text-h3"> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <FSText font="text-h3"> Variant right </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch variant="right" v-model="args.value2" label="Second switch" />
        <FSSwitch variant="right" v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :modelValue="false" :editable="false" />
        <FSSwitch :modelValue="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :modelValue="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>`})};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
      FSSwitch,
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
      <FSText font="text-h3"> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <FSText font="text-h3"> Variant right </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch variant="right" v-model="args.value2" label="Second switch" />
        <FSSwitch variant="right" v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :modelValue="false" :editable="false" />
        <FSSwitch :modelValue="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :modelValue="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>\`
  })
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const L=["Variations"];export{e as Variations,L as __namedExportsOrder,K as default};
