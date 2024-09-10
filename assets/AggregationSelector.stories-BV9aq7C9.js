import{d as g,c as u,y as c,z as d,A as S,m as F}from"./vue.esm-bundler-Vj2X7okO.js";import{F as f}from"./FSAutocompleteField-8hM35Zws.js";import{g as y,b as A}from"./charts-D9fdwpXl.js";import{A as t}from"./charts-BPLoyxCB.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as b}from"./FSCol-Bk577joi.js";import"./FSSearchField-C-Ns7NpV.js";import"./FSTextField-xplhuXw_.js";import"./FSBaseField-Bip4KV2X.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./FSButton-9Jyc5oF6.js";import"./FSClickable-B4ZW0Yow.js";import"./FSCard-U7GdUEkx.js";import"./VProgressCircular-DnrgPZB3.js";import"./tag-DxanhlL3.js";import"./FSIcon-uPx7S--r.js";import"./VIcon-DptP6m9n.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./useTranslations-DyPMaPr_.js";import"./FSDialogMenu-7NQLw-fe.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-BrsH_RdA.js";import"./uuid-DTaye2KM.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-DeUMSMgz.js";import"./FSWrapGroup-Bqec5oyw.js";import"./FSCheckbox-Bsnpn4tO.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-BAo4zk1P.js";import"./VImg-BUrdc1ij.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-B1FN7cQo.js";import"./VList-DzB42uLT.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-Dca9hLjt.js";import"./VMenu-DOKVMVxb.js";import"./filter-CkY1Z-lm.js";const n=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>y(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:A(o.value)})))}}});function C(e,o,V,_,T,k){const s=c("FSAutocompleteField");return d(),S(s,F({label:e.label??e.$tr("ui.common.aggregation-type","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const a=v(n,[["render",C]]);n.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSAggregationSelector.vue"]};const De={title:"Foundation/Core/Selects/AggregationSelector",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:a,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Ge=["Variations"];export{r as Variations,Ge as __namedExportsOrder,De as default};
