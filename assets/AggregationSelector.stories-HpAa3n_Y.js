import{d as g,c as u,y as d,z as c,A as S,m as F}from"./vue.esm-bundler-BSyvBTC9.js";import{F as f}from"./FSAutocompleteField-BkNqhYFQ.js";import{g as y,b as A}from"./charts-DhYpqYUl.js";import{A as t}from"./charts-BPLoyxCB.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-BU2q2sTe.js";import"./FSSearchField-jIW8dpQv.js";import"./FSTextField-BRxSBTNG.js";import"./FSBaseField-D7aNDTnY.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-DzlUM3r6.js";import"./css-0IiqzUPc.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./FSButton-77cfmuX3.js";import"./FSClickable-DytVXb9R.js";import"./FSCard-BinAVVx_.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSIcon-D0oLoXA8.js";import"./VIcon-BIpY_noq.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSDialogMenu-DSPGm4fK.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-HxrzZDKP.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-BDkTog43.js";import"./FSWrapGroup-DUGqUei2.js";import"./FSCheckbox-ILpIKg_O.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-BJ1ngUIg.js";import"./FSLoader-hEATKEG-.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-ByoRox_c.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-C2EXjQHz.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";const a=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>y(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:A(o.value)})))}}});function V(e,o,C,T,k,_){const s=d("FSAutocompleteField");return c(),S(s,F({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Ge={title:"Foundation/Core/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      value: null
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const He=["Variations"];export{r as Variations,He as __namedExportsOrder,Ge as default};
