import{d as c,c as u,y as d,z as S,A as y,B as F,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as T}from"./FSSelectField-CFMrI5u1.js";import{g as _,a as A,A as C}from"./charts-BXpAzyfY.js";import{u as v}from"./useTranslations-DV-taHAL.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as i}from"./FSCol-B7HQy3FB.js";import"./FSDialogMenu-cbMj6UFV.js";import"./FSCard-BzleLmPd.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-DEq6MuQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DvJT0EEa.js";import"./proxiedModel-slW9zgh3.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./locale-BC9z6YbT.js";import"./router-DFGAHh1d.js";import"./transition-yl3lVN6J.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSRadioGroup-Cku24mDz.js";import"./FSRadio-CkPi_Tsj.js";import"./FSIcon-uD_MRFdb.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./density-CFGlRMM_.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./FSBaseField-CKMO1RzZ.js";import"./VSpacer-BjECYW1K.js";import"./FSTextField-B92xKcv7.js";import"./FSButton-B8CL4IYQ.js";import"./FSClickable-CNOWN-hR.js";import"./VProgressCircular-C-U4HXtE.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./VInput-ClkK-yNd.js";import"./loader-DENHXnzB.js";import"./rounded-YB6K8mOp.js";import"./index-DN-QUi1L.js";import"./FSCheckbox-CFeLLHEx.js";import"./FSFadeOut-_RgLKyTO.js";import"./uuid-DTaye2KM.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./VImg-DgHq50DD.js";import"./VSelect-DsYsgoZM.js";import"./VMenu-Cn6sY4-s.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";const m=c({components:{FSSelectField:T},props:{aggregationType:{type:Number,required:!1}},emits:["update:aggregationType"],setup(){const{$tr:e}=v();return{aggregationTypeItems:u(()=>_(C).map(r=>({id:r.value,label:A(r.value)}))),tr:e}}});function k(e,o,r,V,$,I){const g=d("FSSelectField");return S(),y(i,null,{default:F(()=>[f(g,{label:e.tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.aggregationType,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:aggregationType",l))},null,8,["label","items","modelValue"])]),_:1})}const s=b(m,[["render",k]]);m.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"aggregationType",type:{name:"AggregationType"},required:!1}],events:[{name:"update:aggregationType"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const xe={title:"Foundation/Core/Selects/AggregationSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:0}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:s,FSCol:i},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model:aggregationType="args.value"
      />
    </FSCol>`})};var p,a,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        v-model:aggregationType="args.value"
      />
    </FSCol>\`
  })
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const ze=["Variations"];export{t as Variations,ze as __namedExportsOrder,xe as default};
