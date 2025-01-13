import{d as g,c as u,A as d,B as c,j as S,I as f}from"./vue.esm-bundler-0BaZj8Cy.js";import{F}from"./FSAutocompleteField-DJKWDuqJ.js";import{A as t,f as y}from"./chartsTools-BXrINYUk.js";import{g as A}from"./enumTools-BEsapygt.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-D35grUmj.js";import"./FSSearchField-Co9Aacuk.js";import"./FSTextField-B8oyUUoT.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./FSRow-CAJM3FZ0.js";import"./css-Bhvr2onI.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./FSButton-BDSx2V0J.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSCard-Dlw97Dqr.js";import"./VProgressCircular-NnNXhC5D.js";import"./color-v9Utm2wX.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSIcon-BwW5Hq8i.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./useTranslations-DJOHKWsD.js";import"./VList-CxEWDEvR.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./FSSlideGroup-BR84Lg3c.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./FSCheckbox-BCFluEqr.js";import"./VSelectionControl-DanrcpVZ.js";import"./FSFadeOut-BkUNDWQN.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./filter-BsWs0jz4.js";const a=g({components:{FSAutocompleteField:F},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>A(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:y(o.value)})))}}});function V(e,o,C,T,k,_){const s=d("FSAutocompleteField");return f(),c(s,S({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const Ke={title:"Foundation/Shared/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const Me=["Variations"];export{r as Variations,Me as __namedExportsOrder,Ke as default};
