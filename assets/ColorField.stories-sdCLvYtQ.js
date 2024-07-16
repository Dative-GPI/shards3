import{F as i}from"./FSColorField-xwqla7ak.js";import{_ as p}from"./FSCol-B7HQy3FB.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSBaseField-3fq9JEyD.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-ATxZ3nb1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DMal9AfS.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./FSCard-DJrzS8t_.js";import"./FSIcon-2B0NN_at.js";import"./VIcon-C6jgSf5f.js";import"./FSText-ykiRuhwH.js";import"./VMenu-CMf8AoPJ.js";import"./VOverlay-CQGRW5Hg.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BHphZos0.js";import"./anchor-D7FjyLmk.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./locale-BC9z6YbT.js";import"./router-uZykNX6c.js";import"./transition-DSqAHFz2.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./VProgressCircular-BvwZAexL.js";import"./VBtn-u1aQHI0Z.js";import"./border-Bvz87W_3.js";import"./density-oYDdQVKs.js";import"./elevation-xgrzvMGW.js";import"./rounded-jRyYRXzo.js";import"./group-dnu-odUE.js";import"./loader-CIVpWd2w.js";import"./index-DUaylBew.js";import"./VSlider-Vh0ZGQPU.js";import"./index-Drj2M_tW.js";import"./VInput-CgdIt2Sd.js";import"./VLabel-C0PlncZV.js";const Z={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"#FF0000",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:.7}},render:(l,{argTypes:a})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(a),setup(){return{...l}},template:`
    <FSCol>
      <FSColorField
        width="220px"
        label="Color"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
        :allowOpacity="false"
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
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
    </FSCol>`})};var e,r,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "#FF0000",
      opacity1: 1,
      value2: "#00FF12",
      opacity2: 0.2,
      value3: "primary",
      opacity3: 0.7
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
        width="220px"
        label="Color"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
        :allowOpacity="false"
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
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
    </FSCol>\`
  })
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const $=["Variations"];export{o as Variations,$ as __namedExportsOrder,Z as default};
