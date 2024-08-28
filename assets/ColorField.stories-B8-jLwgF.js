import{F as i}from"./FSColorField-Bed-ZGvp.js";import{_ as p}from"./FSCol-BA_LQqMv.js";import"./vue.esm-bundler--l9E1zCM.js";import"./FSBaseField-vXRxqDM_.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-CcOmb8TW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./FSCard-DXUcd4gZ.js";import"./FSIcon-BHbXv1sW.js";import"./VIcon-CRzxwZ_P.js";import"./FSText-DSeZgb6R.js";import"./VMenu-DGJWui2w.js";import"./VOverlay-CiTOWjN9.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DBJRU-Dx.js";import"./anchor-CJDpEDtq.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./locale-DRqPrS0N.js";import"./router-B0OmHOdA.js";import"./transition-CYrBIr8o.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./VProgressCircular-DiflYTWZ.js";import"./VBtn-Drw7FOOP.js";import"./border-CWknNQjA.js";import"./density-BES7uE0q.js";import"./elevation-Cf1uc8UZ.js";import"./rounded-B2xBfeOT.js";import"./group-DYO-GdsM.js";import"./loader-BeDPJNvc.js";import"./index-mEzhRiE5.js";import"./VSlider-D85pQrEK.js";import"./index-U_F843Id.js";import"./VInput-exXSDqX0.js";import"./form-26vhu4DQ.js";import"./VLabel-CtWliwLG.js";const $={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(l,{argTypes:a})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(a),setup(){return{...l}},template:`
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
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const oo=["Variations"];export{o as Variations,oo as __namedExportsOrder,$ as default};
