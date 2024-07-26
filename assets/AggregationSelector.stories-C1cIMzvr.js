import{d as l,c as g,y as u,z as c,A as d}from"./vue.esm-bundler-DC82FEWN.js";import{F as S}from"./FSSelectField-CnSdoFi_.js";import{g as F,a as f,A as y}from"./charts-BxV-G8q5.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as v}from"./FSCol-B7HQy3FB.js";import"./FSDialogMenu-DA3fdLra.js";import"./FSCard-2tgenx2C.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-DQLHFhAZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B5x8xkbY.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DvJT0EEa.js";import"./proxiedModel-slW9zgh3.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./locale-BC9z6YbT.js";import"./router-DFGAHh1d.js";import"./transition-yl3lVN6J.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSRadioGroup-BTSxlQVt.js";import"./FSRadio-C-XiPq3H.js";import"./FSIcon-P4x4c-RP.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./density-CFGlRMM_.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./FSBaseField-3RVGuwl_.js";import"./VSpacer-BjECYW1K.js";import"./FSTextField-Rjw2v1TU.js";import"./FSButton-DUJqknbG.js";import"./FSClickable-DJmL8jbB.js";import"./VProgressCircular-C-U4HXtE.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./VInput-ClkK-yNd.js";import"./loader-DENHXnzB.js";import"./rounded-YB6K8mOp.js";import"./index-DN-QUi1L.js";import"./FSCheckbox-C1IyYDE7.js";import"./FSFadeOut-I7Jw95bn.js";import"./uuid-DTaye2KM.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./VImg-DgHq50DD.js";import"./VSelect-G3o7-3hG.js";import"./VMenu-Cn6sY4-s.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./useTranslations-DV-taHAL.js";const i=l({components:{FSSelectField:S},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:g(()=>F(y).map(o=>({id:o.value,label:f(o.value)})))}}});function C(e,o,V,_,b,T){const a=u("FSSelectField");return c(),d(a,{label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=s=>e.$emit("update:modelValue",s))},null,8,["label","items","modelValue"])}const n=A(i,[["render",C]]);i.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const je={title:"Foundation/Core/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:0}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:v},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Be=["Variations"];export{r as Variations,Be as __namedExportsOrder,je as default};
