import{d as l,c as g,y as u,z as c,A as d,m as S}from"./vue.esm-bundler-DC82FEWN.js";import{F}from"./FSSelectField-C8lniwa-.js";import{g as f,a as y,A}from"./charts-BCkZr1RZ.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSCol-B7HQy3FB.js";import"./FSDialogMenu-cbMj6UFV.js";import"./FSCard-BzleLmPd.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-DEq6MuQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DvJT0EEa.js";import"./proxiedModel-slW9zgh3.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./locale-BC9z6YbT.js";import"./router-DFGAHh1d.js";import"./transition-yl3lVN6J.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSRadioGroup-D0Wn69O7.js";import"./FSRadio-CyKpkhxe.js";import"./FSIcon-uD_MRFdb.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CDy62Qe5.js";import"./useSlots-Du4GeqS9.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./density-CFGlRMM_.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./FSBaseField-B1gnPZLv.js";import"./VSpacer-BjECYW1K.js";import"./FSTextField-Dm4APjxX.js";import"./FSButton-DeBt3QVu.js";import"./FSClickable-CNOWN-hR.js";import"./VProgressCircular-C-U4HXtE.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./VInput-ClkK-yNd.js";import"./loader-DENHXnzB.js";import"./rounded-YB6K8mOp.js";import"./index-DN-QUi1L.js";import"./FSCheckbox-BHSinzY0.js";import"./FSFadeOut-_RgLKyTO.js";import"./uuid-DTaye2KM.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./VImg-DgHq50DD.js";import"./VSelect-H_DfbEXX.js";import"./VMenu-Cn6sY4-s.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./useTranslations-DV-taHAL.js";const a=l({components:{FSSelectField:F},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:g(()=>f(A).map(o=>({id:o.value,label:y(o.value)})))}}});function V(e,o,b,_,T,k){const n=u("FSSelectField");return c(),d(n,S({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),null,16,["label","items","modelValue"])}const i=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Be={title:"Foundation/Core/Selects/AggregationSelector",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:0}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:i,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var t,p,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      value: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAggregationSelector,
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
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>\`
  })
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const we=["Variations"];export{r as Variations,we as __namedExportsOrder,Be as default};