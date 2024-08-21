import{d as $,c as b,w as D,y as l,z as s,A as d,B as o,m as I,L as t,E as u,G as c}from"./vue.esm-bundler-gWFTcvUr.js";import{F as q}from"./FSAutocompleteField-mXLZc6AN.js";import{F as T}from"./FSChip-3bZvXIoL.js";import{_ as i}from"./FSRow-Bpa2jjpJ.js";import{_ as f}from"./FSCol-DX423FHf.js";import{F as E}from"./FSText-CvFl9H1C.js";import{_ as g}from"./FSIcon-C7-l9IT-.js";import{_ as w}from"./FSSpan-BlywDO8Z.js";import{u as N}from"./useDataCategories-DW0hWq56.js";import{C as A}from"./useColors-4hVwr1YC.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./theme-DA9ermhM.js";import"./FSButton-C0cjY78b.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";import"./index-3zl-tJp_.js";const h=$({components:{FSAutocompleteField:q,FSChip:T,FSRow:i,FSCol:f,FSText:E,FSIcon:g,FSSpan:w},props:{modelValue:{type:String,required:!1},modelId:{type:String,required:!1},label:{type:String,required:!1},width:{type:String,required:!1}},emits:["update:modelValue"],setup(e){const{getMany:r,entities:p}=N(),S=b(()=>p.value.map(n=>({id:n.id,label:n.label,correlated:n.correlated})));return D(()=>e.modelId,()=>{r({modelId:e.modelId})},{immediate:!0}),{ColorEnum:A,toggleDataCategories:S,dataCategories:p}}});function B(e,r,p,S,n,O){const F=l("FSText"),v=l("FSChip"),V=l("FSAutocompleteField");return s(),d(V,I({width:e.$props.width?e.$props.width:"100%",label:e.label??e.$tr("ui.common.data-category","Data category"),items:e.toggleDataCategories,modelValue:e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=a=>e.$emit("update:modelValue",a))},e.$attrs),{"autocomplete-selection":o(({item:a})=>[t(i,{wrap:!1,align:"center-center",width:e.$props.width?e.$props.width:"100vh"},{default:o(()=>[t(f,null,{default:o(()=>[t(F,null,{default:o(()=>[u(c(a.raw.label),1)]),_:2},1024)]),_:2},1024),t(i,null,{default:o(()=>[t(i,{align:"center-right"},{default:o(()=>[t(v,{label:a.raw.unit,color:a.raw.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:o(()=>[a.raw.correlated?(s(),d(i,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t(g,{icon:"mdi-link",size:"16px"}),t(F,{font:"text-overline"},{default:o(()=>[u(c(e.$tr("ui.common.linked","Linked")),1)]),_:1})]),_:1})):(s(),d(i,{key:1,align:"center-center",wrap:!1},{default:o(()=>[t(g,{icon:"mdi-link-off",size:"16px"}),t(w,{font:"text-overline"},{default:o(()=>[u(c(e.$tr("ui.common.not-linked","Not linked")),1)]),_:1})]),_:1}))]),_:2},1032,["label","color"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["width"])]),_:1},16,["width","label","items","modelValue"])}const k=z(h,[["render",B]]);h.__docgenInfo={exportName:"default",displayName:"FSDataCategorySelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1},{name:"modelId",type:{name:"string"},required:!1},{name:"label",type:{name:"string"},required:!1},{name:"width",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSDataCategorySelector.vue"]};const io={title:"Foundation/Core/Selects/DataCategorySelector",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value:null}},render:(e,{argTypes:r})=>({components:{FSDataCategorySelector:k,FSCol:f},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol width="600px">
      <FSDataCategorySelector
      modelId="1"
      v-model="args.value"
      />
    </FSCol>`})};var C,y,_;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    args: {
      value: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataCategorySelector,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol width="600px">
      <FSDataCategorySelector
      modelId="1"
      v-model="args.value"
      />
    </FSCol>\`
  })
}`,...(_=(y=m.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const no=["Variations"];export{m as Variations,no as __namedExportsOrder,io as default};
