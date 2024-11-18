import{F as i}from"./FSColorField-BJ4UUBdV.js";import{F as p}from"./FSCol-CVj0zcU5.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CYD73_tT.js";import"./css-BOQ-6X_w.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./FSCard-BZyb3dNk.js";import"./FSIcon-C0akNC9K.js";import"./VIcon-DBlUULm8.js";import"./color-D4nM6Ihv.js";import"./FSText-CcQBLJU9.js";import"./resizeObserver-D4qCRTFx.js";import"./VBtn-DIpB4JrY.js";import"./border-DWowyKy3.js";import"./density-CRkSANTr.js";import"./elevation-C84Wb_jC.js";import"./rounded-CG6jOZvY.js";import"./group-BJiCY4dd.js";import"./proxiedModel-BmbZrdih.js";import"./dimensions-D-jSeqs8.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./locale-R8GaLlvb.js";import"./anchor-BMg_Hu1U.js";import"./router-BPv_tYld.js";import"./index-CZbNBjVV.js";import"./VDefaultsProvider-EJiha1S2.js";import"./VSlider-CilBQKZ9.js";import"./index-D1hHR51g.js";import"./VInput-11LmaO3P.js";import"./transition-DtcXiLpW.js";import"./form-thVqu4eJ.js";import"./VLabel-D_hiLcnP.js";import"./VMenu-DPuNMseR.js";import"./VOverlay-CsDtmGQB.js";import"./forwardRefs-DWGaNmQL.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";const oo={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(l,{argTypes:a})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(a),setup(){return{...l}},template:`
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
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const eo=["Variations"];export{o as Variations,eo as __namedExportsOrder,oo as default};
