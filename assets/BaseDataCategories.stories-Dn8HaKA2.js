import{d as E,b as g,w as q,y as n,z as I,A as N,B as r,L as o,m as F,M as P,N as T,I as _,J as O,K as U,E as z,G as A}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as H}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-DzuCpuxN.js";import{F as y}from"./FSCol-DZA6pxA1.js";import{F as c}from"./FSRow-CA1vgNXx.js";import{F as D}from"./FSIcon-DwJNOKvG.js";import{_ as k}from"./FSSpan-CCGpb4KF.js";import{F as B}from"./FSFadeOut-D96pvLZm.js";import{F as M}from"./FSClickable-CS9kdIxp.js";import{F as R}from"./FSSearchField-fyCoX-Sm.js";import{F as j}from"./FSButtonCheckbox-Cl6yGu7W.js";import{u as G}from"./useDataCategories-BVTjonVC.js";import{C as J}from"./useColors-DlnF7i6T.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Q}from"./VSpacer-C4plVoTE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CtbqJzfZ.js";import"./css-DLfrm0pR.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSDataTableUI-BeqwcZnN.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DPKcfP0u.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-Dakm4bPu.js";import"./FSText-DyldgdXP.js";import"./useSlots-P12pG1X5.js";import"./FSSelectField-DGC4MS1S.js";import"./FSDialogMenu-D5T4tlYN.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-D9N-895C.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSSlideGroup-CDcZ7it9.js";import"./FSButton-BjjxnBJw.js";import"./VProgressCircular-Dh9H7lZx.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-dT-IKU0T.js";import"./FSWrapGroup-DgP826LK.js";import"./FSBaseField-BkzmckaL.js";import"./FSTextField-DOjRjaWh.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B7wMH5Gc.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-DQ-5tMcN.js";import"./FSChip-Cu5YGhb-.js";import"./useTranslations-CdSqQFV3.js";import"./FSOptionGroup-BgNblDTh.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./index-DfSX31J9.js";const $=E({name:"FSBaseDataCategoriesList",components:{FSDataTable:V,FSCol:y,FSFadeOut:B,FSClickable:M,FSRow:c,FSSpan:k,FSSearchField:R,FSButtonCheckbox:j,FSIcon:D},props:{dataCategoryFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(e){const{getMany:a,fetching:f,entities:C}=G(),s=g(),m=g(!1),d=i=>e.modelValue.includes(i);return q(()=>[e.dataCategoryFilters,s.value,m.value],(i,l)=>{(!i&&!l||!H.isEqual(i,l))&&a({...e.dataCategoryFilters,search:s.value,correlated:m.value?!0:void 0})},{immediate:!0}),{fetchingDataCategories:f,dataCategories:C,ColorEnum:J,search:s,correlated:m,isSelected:d}}});function W(e,a,f,C,s,m){const d=n("FSSearchField"),i=n("FSButtonCheckbox"),l=n("FSClickable"),v=n("FSDataTable");return I(),N(y,null,{default:r(()=>[o(c,{align:"bottom-center",width:"50%"},{default:r(()=>[o(d,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=t=>e.search=t)},null,8,["modelValue"]),o(i,{label:e.$tr("ui.common.data-correlated","Correlated only"),color:e.ColorEnum.Success,prependIcon:"mdi-link",modelValue:e.correlated,"onUpdate:modelValue":a[1]||(a[1]=t=>e.correlated=t)},null,8,["label","color","modelValue"])]),_:1}),o(B,{maxHeight:"150px",maskHeight:"0px"},{default:r(()=>[o(v,F({loading:e.fetchingDataCategories,disableIterator:!0,items:e.dataCategories,modelValue:e.$props.modelValue,showSearch:!1,tableCode:e.$props.tableCode,search:e.search,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},e.$attrs),P({"item.tile":r(({item:t})=>[o(l,F({padding:"12px",height:"60px",width:"233px",color:e.isSelected(t.id)?e.ColorEnum.Primary:e.ColorEnum.Dark,onClick:u=>e.$emit("update:modelValue",[t.id])},e.$attrs),{default:r(()=>[o(c,{align:"center-center",wrap:!1},{default:r(()=>[o(k,{lineClamp:1},{default:r(()=>[z(A(t.label),1)]),_:2},1024),o(Q),o(D,{color:t.correlated?e.ColorEnum.Primary:e.ColorEnum.Light,icon:t.correlated?"mdi-link":"mdi-link-off",variant:"dark"},null,8,["color","icon"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[T(e.$slots,(t,u)=>({name:u,fn:r(w=>[_(e.$slots,u,O(U(w)))])}))]),1040,["loading","items","modelValue","tableCode","search"])]),_:3})]),_:3})}const L=K($,[["render",W]]);$.__docgenInfo={displayName:"FSBaseDataCategoriesList",exportName:"default",description:"",tags:{},props:[{name:"dataCategoryFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataCategories/FSBaseDataCategoriesList.vue"]};const Bt={title:"Foundation/Core/Lists/Base Lists/BaseDataCategoriesList",component:L,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataCategories1"]}}},p={render:e=>({components:{FSBaseDataCategoriesList:L},setup(){return{args:e}},template:`
      <FSBaseDataCategoriesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dataCategories1"}};var S,b,h;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDataCategoriesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDataCategoriesList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dataCategories1'
  }
}`,...(h=(b=p.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const $t=["Default"];export{p as Default,$t as __namedExportsOrder,Bt as default};
