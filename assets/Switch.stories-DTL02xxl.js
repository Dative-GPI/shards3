import o from"./FSSwitch-8v9Xi1W7.js";import{F as a}from"./FSText-aZSl7JAe.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./FSRow-BuYwVvwM.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./useRules-DpnTqc7T.js";import"./index-joExpvzU.js";import"./color-CxiNukW_.js";import"./VDefaultsProvider-CztrVRTm.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./VIcon-DptP6m9n.js";import"./tag-DxanhlL3.js";import"./transition-CQDsmRPd.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./VLabel-BPqk0hPA.js";import"./loader-CbF0edCX.js";import"./VProgressCircular-DnrgPZB3.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";const I={title:"Foundation/Shared/Toggles/Switch",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(r,{argTypes:s})=>({components:{FSSwitch:o,FSText:a},props:Object.keys(s),setup(){return{...r}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
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
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :modelValue="false" :editable="false" />
        <FSSwitch :modelValue="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :modelValue="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>\`
  })
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const J=["Variations"];export{e as Variations,J as __namedExportsOrder,I as default};
