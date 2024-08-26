import{F as i}from"./FSColorField-CuohvFvP.js";import{_ as p}from"./FSCol-CeBQ3oDD.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Dfo2nEmE.js";import"./css-DYbKqpMF.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./FSCard-CU93xE1v.js";import"./FSIcon-CYA01Pg8.js";import"./VIcon-CB8o8wL4.js";import"./FSText-ZRfoDIrD.js";import"./VMenu-5z8CiYXe.js";import"./VOverlay-DN1mcZZT.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-CfqC31JC.js";import"./anchor-C7LpDu09.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./locale-x-KasAKq.js";import"./router-I0roKE-i.js";import"./transition-DYmm1B3d.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./VProgressCircular-CQOkkHxu.js";import"./VBtn-BDhRXVNU.js";import"./border-BytU_KR8.js";import"./density-DXTGgNtk.js";import"./elevation-BS7jUP1v.js";import"./rounded-DVRtD5BX.js";import"./group-C6nVA5p1.js";import"./loader-C4nPQ1_b.js";import"./index-Bfb9sPge.js";import"./VSlider-BZMz99Oo.js";import"./index-CtF1TxK6.js";import"./VInput-CHHLrGTr.js";import"./VLabel-DZOpgwqd.js";const Z={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(l,{argTypes:a})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(a),setup(){return{...l}},template:`
    <FSCol>
      <FSColorField
        label="Color"
        :allowOpacity="false"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Required color, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:opacityValue="args.opacity2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        :hideHeader="true"
        :onlyBaseColors="false"      
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Base color picker"
        :editable="false"
        :onlyBaseColors="false"     
        description="Description for this field"
        v-model="args.value4"
        v-model:opacityValue="args.opacity4"
      />
    </FSCol>`})};var e,r,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "something",
      opacity1: 1,
      value2: "#00FF12",
      opacity2: 0.2,
      value3: "primary",
      opacity3: 1,
      value4: "primary",
      opacity4: 0.5
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSColorField,
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
      <FSColorField
        label="Color"
        :allowOpacity="false"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Required color, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:opacityValue="args.opacity2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        :hideHeader="true"
        :onlyBaseColors="false"      
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Base color picker"
        :editable="false"
        :onlyBaseColors="false"     
        description="Description for this field"
        v-model="args.value4"
        v-model:opacityValue="args.opacity4"
      />
    </FSCol>\`
  })
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const $=["Variations"];export{o as Variations,$ as __namedExportsOrder,Z as default};
