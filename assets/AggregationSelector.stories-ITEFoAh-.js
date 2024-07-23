import{d as g,c as u,y as c,z as d,A as S,B as F,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as y}from"./FSSelectField-CIoIag_g.js";import{g as A,a as C,A as V}from"./charts-n6f-9Q_c.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as i}from"./FSCol-B7HQy3FB.js";import"./FSDialogMenu-pfqo0k-B.js";import"./FSCard-EcIwA-Oh.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-C2RWUFtR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DvJT0EEa.js";import"./proxiedModel-slW9zgh3.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./locale-BC9z6YbT.js";import"./router-DFGAHh1d.js";import"./transition-yl3lVN6J.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSRadioGroup-T3X6pXbd.js";import"./FSRadio-BcnddNE-.js";import"./FSIcon-ClfMDAJS.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./density-CFGlRMM_.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./FSBaseField-Df_egr4c.js";import"./VSpacer-BjECYW1K.js";import"./FSTextField-PC8aXZax.js";import"./FSButton-DRPhZ-n9.js";import"./FSClickable-aI6guRt-.js";import"./VProgressCircular-C-U4HXtE.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./VInput-ClkK-yNd.js";import"./loader-DENHXnzB.js";import"./rounded-YB6K8mOp.js";import"./index-DN-QUi1L.js";import"./FSCheckbox-BfYUALJm.js";import"./FSFadeOut-CvvHY5il.js";import"./uuid-DTaye2KM.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./VImg-DgHq50DD.js";import"./VSelect-CZx4UoO8.js";import"./VMenu-Cn6sY4-s.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./useTranslations-DV-taHAL.js";const m=g({components:{FSSelectField:y},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>A(V).map(o=>({id:o.value,label:C(o.value)})))}}});function v(e,o,b,T,k,$){const s=c("FSSelectField");return d(),S(i,null,{default:F(()=>[f(s,{label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},null,8,["label","items","modelValue"])]),_:1})}const n=_(m,[["render",v]]);m.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const we={title:"Foundation/Core/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:0}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:i},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var r,p,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(p=t.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const xe=["Variations"];export{t as Variations,xe as __namedExportsOrder,we as default};
