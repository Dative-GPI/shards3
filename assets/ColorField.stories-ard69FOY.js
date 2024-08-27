import{F as i}from"./FSColorField-C8icI0x1.js";import{_ as p}from"./FSCol-DXkP6ARl.js";import"./vue.esm-bundler-B8zP9crO.js";import"./FSBaseField-NTkLVYiV.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./useColors-CHFZqh9D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./FSCard-BQ4UALgc.js";import"./FSIcon-DoasTXhc.js";import"./VIcon-FsSVL6vQ.js";import"./FSText-C1354nJ4.js";import"./VMenu-B8mF_lnI.js";import"./VOverlay-nTCjDRiQ.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-odqKlXbh.js";import"./anchor-OrAzIpfB.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./locale-FYv4GhYY.js";import"./router-BFpFBb4L.js";import"./transition-CsS1sKoI.js";import"./VDefaultsProvider-NbOoODyK.js";import"./VProgressCircular-DxDQ8azE.js";import"./VBtn-CeVXW7Ts.js";import"./border-BWgmXatz.js";import"./density-DkfqnNyD.js";import"./elevation-B_HXnKlm.js";import"./rounded-Bso5Gdmg.js";import"./group-C3Zad-0v.js";import"./loader-B8FgLuVw.js";import"./index-D-9FNlZD.js";import"./VSlider-5f3iIbpt.js";import"./index-C_7y45B_.js";import"./VInput-D_C8Fpgx.js";import"./VLabel-nohB6Jca.js";const Z={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(l,{argTypes:a})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(a),setup(){return{...l}},template:`
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
