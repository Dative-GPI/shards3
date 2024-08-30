import{d as g,c as u,y as c,z as d,A as S,m as F}from"./vue.esm-bundler-BSwA4uJo.js";import{F as f}from"./FSAutocompleteField-CzLKCgFf.js";import{g as y,A as t,a as A}from"./charts-BA5I8mWX.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSCol-B2fYQH2g.js";import"./FSSearchField-CPQWVqWj.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSRow-C55kyKDN.js";import"./css-DuQjrBfn.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./VSpacer-Bggt-xuP.js";import"./color-D9V7QeIP.js";import"./FSButton-BsHdwUXb.js";import"./FSClickable-DxIbWXqH.js";import"./FSCard-Dku7tZ0W.js";import"./VProgressCircular-Dac4kH3U.js";import"./tag-VYeYJ1FC.js";import"./FSIcon-BnX9YboA.js";import"./VIcon-5UD9vI9m.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./transition-_APBsTwD.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./locale-CpxwvVE1.js";import"./density-DkgHqMu0.js";import"./proxiedModel-DL-L2p1V.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./anchor-CkzTvcVP.js";import"./rounded-CO2AQG9_.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BhqZCjBr.js";import"./useTranslations-9ULn9k53.js";import"./FSDialogMenu-g6t3pdyN.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./router-Cl1v_ijq.js";import"./FSSlideGroup-wzQo7jGf.js";import"./uuid-DTaye2KM.js";import"./group-CrHjrh7w.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./FSCheckbox-Biwr0a4k.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./FSFadeOut-uPE_tDk4.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VSelect-Fm84tqTh.js";import"./VMenu-B0NqnZmW.js";import"./filter-BvtvTs1b.js";const n=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>y(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:A(o.value)})))}}});function V(e,o,b,_,T,k){const s=c("FSAutocompleteField");return d(),S(s,F({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const a=v(n,[["render",V]]);n.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Ue={title:"Foundation/Core/Selects/AggregationSelector",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:a,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const De=["Variations"];export{r as Variations,De as __namedExportsOrder,Ue as default};
