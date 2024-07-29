import{d as u,c,o as S,y as g,z as F,A as f,m as y}from"./vue.esm-bundler-DC82FEWN.js";import{F as M}from"./FSAutocompleteField-DsopPACR.js";import{u as C}from"./useModels-DQX9sqZv.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as v}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-sblczEUa.js";import"./FSTextField-PC8aXZax.js";import"./FSBaseField-Df_egr4c.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-C2RWUFtR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-DRPhZ-n9.js";import"./FSClickable-aI6guRt-.js";import"./FSCard-EcIwA-Oh.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./FSIcon-ClfMDAJS.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-pfqo0k-B.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-T3X6pXbd.js";import"./FSRadio-BcnddNE-.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-VpCD6ANQ.js";import"./FSSlideGroup-BVjMNCzT.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-CP01kz4v.js";import"./FSCheckbox-BfYUALJm.js";import"./FSFadeOut-CvvHY5il.js";import"./FSLoader-06X_hY2B.js";import"./elevation-BTkUCD39.js";import"./VSelect-CZx4UoO8.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const l=u({components:{FSAutocompleteField:M},props:{modelValue:{type:String,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){const{getMany:o,entities:e}=C(),m=c(()=>e.value.map(r=>({id:r.id,label:r.label})));return S(()=>{o()}),{modelItems:m}}});function b(o,e,m,r,_,k){const a=g("FSAutocompleteField");return F(),f(a,y({label:o.label??o.$tr("ui.common.model","Model"),items:o.modelItems,toggleSet:o.modelItems.length<5,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=d=>o.$emit("update:modelValue",d))},o.$attrs),null,16,["label","items","toggleSet","modelValue"])}const s=V(l,[["render",b]]);l.__docgenInfo={exportName:"default",displayName:"FSModelSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSModelSelector.vue"]};const Lo={title:"Foundation/Core/Selects/ModelSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:0}},render:(o,{argTypes:e})=>({components:{FSModelSelector:s,FSCol:v},props:Object.keys(e),setup(){return{...o}},template:`
    <FSCol>
      <FSModelSelector
        v-model="args.value"
      />
    </FSCol>`})};var p,i,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      value: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSModelSelector,
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
      <FSModelSelector
        v-model="args.value"
      />
    </FSCol>\`
  })
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Qo=["Variations"];export{t as Variations,Qo as __namedExportsOrder,Lo as default};
