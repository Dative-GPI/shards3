import{d as l,c as g,y as u,z as c,A as d,m as S}from"./vue.esm-bundler-gWFTcvUr.js";import{F}from"./FSSelectField-DK2yvB1s.js";import{g as f,a as y,A}from"./charts-CP4VO6tQ.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSCol-DX423FHf.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./FSRow-Bpa2jjpJ.js";import"./css-Bc8dJONt.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CI1OEbFE.js";import"./proxiedModel-ClxH85aG.js";import"./anchor-D8sPv6Az.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./locale-C1ZNn_CS.js";import"./router-B2tkk-4w.js";import"./transition-14-CCvbq.js";import"./VDefaultsProvider-CYAySfh3.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./FSIcon-C7-l9IT-.js";import"./VIcon-BiBYr0XY.js";import"./FSSpan-BlywDO8Z.js";import"./useSlots-qbJuQIJ1.js";import"./useRules-CMc02QlE.js";import"./VSelectionControl-CyZYkafj.js";import"./density-cGginCT8.js";import"./index-BTMLtsqI.js";import"./VLabel-B0q5I27e.js";import"./FSBaseField-C6NDZpLW.js";import"./VSpacer-DqpPKsvm.js";import"./FSTextField-DmPsFJH8.js";import"./FSButton-C0cjY78b.js";import"./FSClickable-aki8YuqU.js";import"./VProgressCircular-DqlO5PEF.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./VInput-ClhP4L1h.js";import"./loader-DNzkAbrM.js";import"./rounded-DlJ8CYNz.js";import"./index-BHt-17iJ.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./uuid-DTaye2KM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./elevation-B3TY2UXi.js";import"./VImg-CHF0S8ll.js";import"./VSelect-BmHh8iYM.js";import"./VMenu-lXYF3tO5.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./useTranslations-DebMVrXy.js";const a=l({components:{FSSelectField:F},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:g(()=>f(A).map(o=>({id:o.value,label:y(o.value)})))}}});function V(e,o,b,_,T,k){const n=u("FSSelectField");return c(),d(n,S({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),null,16,["label","items","modelValue"])}const i=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Be={title:"Foundation/Core/Selects/AggregationSelector",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:0}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:i,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
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
