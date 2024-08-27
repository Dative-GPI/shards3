import{d as g,c as u,y as c,z as d,A as S,m as F}from"./vue.esm-bundler-B8zP9crO.js";import{F as f}from"./FSAutocompleteField-Ckk4Z3qH.js";import{g as y,A as t,a as A}from"./charts-wASHiXxC.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSCol-DXkP6ARl.js";import"./FSSearchField-BJ0VhAlh.js";import"./FSTextField-D4e0l-Dp.js";import"./FSBaseField-BirSoEzM.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./useColors-AJGcQHF_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DtZVHDBt.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./FSButton-DOwRPA7_.js";import"./FSClickable-BCaYx5AP.js";import"./FSCard-DS7Ofz0M.js";import"./VProgressCircular-DxDQ8azE.js";import"./VIcon-FsSVL6vQ.js";import"./FSIcon-DZCYhBaF.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./useTranslations-Dy1kwog1.js";import"./FSDialogMenu-DDSjHlKl.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./FSSlideGroup-BzAT5HFF.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-C0IvZ0dM.js";import"./FSWrapGroup-BtLWKn4p.js";import"./FSCheckbox-C5Shh_eW.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CzH7IW0v.js";import"./VImg-DbvVxLaQ.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-DCbGHBzU.js";import"./VList-D6tbl9Ec.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-YnmM8BsR.js";import"./VMenu-B8mF_lnI.js";import"./filter-B31C1cQo.js";const n=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>y(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:A(o.value)})))}}});function V(e,o,b,_,T,k){const s=c("FSAutocompleteField");return d(),S(s,F({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const a=v(n,[["render",V]]);n.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Le={title:"Foundation/Core/Selects/AggregationSelector",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:a,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const Pe=["Variations"];export{r as Variations,Pe as __namedExportsOrder,Le as default};
