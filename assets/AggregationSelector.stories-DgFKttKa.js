import{d as g,c as u,y as d,z as c,A as S,m as f}from"./vue.esm-bundler-DTB_q9xr.js";import{F}from"./FSAutocompleteField-CaoqKedU.js";import{A as t,f as y}from"./chartsTools-I26pug4z.js";import{g as A}from"./enumTools-BEsapygt.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./FSCard-GtkwWKOo.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSIcon-CJgnsR4e.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./useTranslations-BehwFxDb.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";const a=g({components:{FSAutocompleteField:F},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>A(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:y(o.value)})))}}});function b(e,o,C,T,k,_){const s=d("FSAutocompleteField");return c(),S(s,f({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",b]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Ke={title:"Foundation/Core/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:V},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Me=["Variations"];export{r as Variations,Me as __namedExportsOrder,Ke as default};
