import{d as g,c as u,y as c,z as d,A as S,m as F}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as f}from"./FSAutocompleteField-Bc6uvIS8.js";import{g as y,A as t,a as A}from"./charts-B3yLqKmc.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-DkCFWPYT.js";import"./FSTextField-CAIJ7Yct.js";import"./FSBaseField-CEaQuxbm.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-9ZzibzMy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./FSButton-C8WCeTIt.js";import"./FSClickable-rknJFO_P.js";import"./FSCard-Czuobvvo.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./FSIcon-CO4wAGng.js";import"./VIcon-DEItKADI.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./useTranslations-DflIUxSJ.js";import"./FSDialogMenu-CwNpi4PZ.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-DdgeZc-s.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-D9zoPLp2.js";import"./FSWrapGroup-CY7TtL3l.js";import"./FSCheckbox-D6cJ9jKZ.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-CPTbsoJn.js";import"./VImg-C2ZZ8L57.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CZcII2-V.js";import"./VList-10owgtsE.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-BJiXcIcO.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";const n=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>y(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:A(o.value)})))}}});function V(e,o,b,_,T,k){const s=c("FSAutocompleteField");return d(),S(s,F({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const a=v(n,[["render",V]]);n.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Ue={title:"Foundation/Core/Selects/AggregationSelector",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:a,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
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