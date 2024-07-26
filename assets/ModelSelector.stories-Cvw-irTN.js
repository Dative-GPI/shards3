import{d as u,c,o as S,y as g,z as F,A as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as y}from"./FSAutocompleteField-PkfpH3Ku.js";import{u as M}from"./useModels-DQX9sqZv.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as V}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-DDD24GHF.js";import"./FSTextField-Rjw2v1TU.js";import"./FSBaseField-3RVGuwl_.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-DQLHFhAZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B5x8xkbY.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-DUJqknbG.js";import"./FSClickable-DJmL8jbB.js";import"./FSCard-2tgenx2C.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./FSIcon-P4x4c-RP.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-DA3fdLra.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-BTSxlQVt.js";import"./FSRadio-C-XiPq3H.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-CiwDGSWI.js";import"./FSSlideGroup-C0tdQ2lN.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-BoEFQU7m.js";import"./FSCheckbox-C1IyYDE7.js";import"./FSFadeOut-I7Jw95bn.js";import"./FSLoader-BZsYDU4n.js";import"./elevation-BTkUCD39.js";import"./VSelect-G3o7-3hG.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const l=u({components:{FSAutocompleteField:y},props:{modelValue:{type:String,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){const{getMany:o,entities:e}=M(),m=c(()=>e.value.map(r=>({id:r.id,label:r.label})));return S(()=>{o()}),{modelItems:m}}});function v(o,e,m,r,_,b){const a=g("FSAutocompleteField");return F(),f(a,{label:o.label??o.$tr("ui.common.model","Model"),items:o.modelItems,toggleSet:o.modelItems.length<5,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=d=>o.$emit("update:modelValue",d))},null,8,["label","items","toggleSet","modelValue"])}const s=C(l,[["render",v]]);l.__docgenInfo={exportName:"default",displayName:"FSModelSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSModelSelector.vue"]};const Lo={title:"Foundation/Core/Selects/ModelSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:0}},render:(o,{argTypes:e})=>({components:{FSModelSelector:s,FSCol:V},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Po=["Variations"];export{t as Variations,Po as __namedExportsOrder,Lo as default};
