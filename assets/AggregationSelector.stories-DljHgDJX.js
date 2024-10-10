import{d as g,c as u,y as d,z as c,A as S,m as F}from"./vue.esm-bundler-DTB_q9xr.js";import{F as f}from"./FSAutocompleteField-Bcf9kTmo.js";import{g as y,b as A}from"./charts-9ARlJEnU.js";import{A as t}from"./charts-Clnpfu9C.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-ONB_Kbwq.js";import"./FSTextField-DxizsfKE.js";import"./FSBaseField-Dg_2QPSd.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-DTi99Ybi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CX_N7n5F.js";import"./VSpacer-Di7g3RCw.js";import"./color-Du5JXqac.js";import"./FSButton-QMwUyqLg.js";import"./FSClickable-BE7nqA8Z.js";import"./FSCard-BJoqsHyz.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSIcon-bZBIO--g.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./locale-BJQwrXJ7.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./useTranslations-BehwFxDb.js";import"./FSDialogMenu-SygzX68j.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./router-DxFny788.js";import"./FSSlideGroup-DB-VrkfJ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CTPOL1ok.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./FSToggleSet-sqS_0m-l.js";import"./FSWrapGroup-ContUtLx.js";import"./FSCheckbox-OT0jrbQK.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./FSFadeOut-ukctYbpt.js";import"./FSLoader-Cs0-Y7mC.js";import"./elevation-JfXKLVfD.js";import"./FSRadio-yKt84OXT.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-CA89ksEG.js";import"./VMenu-CuKNZEBs.js";import"./filter-COIlslko.js";const a=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>y(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:A(o.value)})))}}});function V(e,o,C,T,k,_){const s=d("FSAutocompleteField");return c(),S(s,F({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const Ke={title:"Foundation/Core/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
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
