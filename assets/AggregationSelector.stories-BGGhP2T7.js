import{d as g,c as u,y as d,z as c,A as S,m as F}from"./vue.esm-bundler-CWdIlc2r.js";import{F as f}from"./FSAutocompleteField-DbBWI7VU.js";import{g as y,b as A}from"./charts-BAACkrKo.js";import{A as t}from"./charts-Clnpfu9C.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-CvoATp5Q.js";import"./FSSearchField-_SEFeUDc.js";import"./FSTextField-BLVYx7ij.js";import"./FSBaseField-BlQcLyVQ.js";import"./FSSpan-Bnbdrku6.js";import"./useBreakpoints-INFVV7da.js";import"./useSlots-zwOl0abH.js";import"./FSRow-BnsweOMX.js";import"./css-BWDYXGFo.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./FSButton-Bc8wnoJs.js";import"./FSClickable-JTcIAbNo.js";import"./FSCard-BxmDRzjE.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSIcon-CyS8zLbP.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDialogMenu-D9HgWnX3.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-qOOOxz_-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DhMVExMM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-7WnTN5nE.js";import"./FSWrapGroup-BTCmZHSW.js";import"./FSCheckbox-bKRtBqVc.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-BhgieYVE.js";import"./FSLoader-h4slsrT9.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-n9JXvfPW.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-D5P4hFmo.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";const a=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>y(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:A(o.value)})))}}});function V(e,o,C,T,k,_){const s=d("FSAutocompleteField");return c(),S(s,F({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Ke={title:"Foundation/Core/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
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