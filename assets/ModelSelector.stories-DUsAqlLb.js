import{d as u,c,o as S,y as g,z as F,A as f,m as y}from"./vue.esm-bundler-gWFTcvUr.js";import{F as M}from"./FSAutocompleteField-mXLZc6AN.js";import{u as C}from"./useModels-Dw7_iTq8.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as v}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./FSSpan-BlywDO8Z.js";import"./useSlots-qbJuQIJ1.js";import"./FSRow-Bpa2jjpJ.js";import"./css-Bc8dJONt.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./FSButton-C0cjY78b.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./FSIcon-C7-l9IT-.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";const l=u({components:{FSAutocompleteField:M},props:{modelValue:{type:String,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){const{getMany:o,entities:e}=C(),m=c(()=>e.value.map(r=>({id:r.id,label:r.label})));return S(()=>{o()}),{modelItems:m}}});function b(o,e,m,r,_,k){const a=g("FSAutocompleteField");return F(),f(a,y({label:o.label??o.$tr("ui.common.model","Model"),items:o.modelItems,toggleSet:o.modelItems.length<5,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=d=>o.$emit("update:modelValue",d))},o.$attrs),null,16,["label","items","toggleSet","modelValue"])}const s=V(l,[["render",b]]);l.__docgenInfo={exportName:"default",displayName:"FSModelSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSModelSelector.vue"]};const Lo={title:"Foundation/Core/Selects/ModelSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:0}},render:(o,{argTypes:e})=>({components:{FSModelSelector:s,FSCol:v},props:Object.keys(e),setup(){return{...o}},template:`
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
