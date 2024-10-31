import{d as w,b as g,w as E,y as n,z as q,A as N,C as r,N as t,m as F,B as O,O as P,K as T,L as I,M as H,H as R,I as U}from"./vue.esm-bundler-l-siv0w9.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-DlhWpqTH.js";import{F as y}from"./FSCol-BvqytbKT.js";import{_ as c}from"./FSRow-CbEgVN08.js";import{F as D}from"./FSIcon-uIr9VdFq.js";import{_ as k}from"./FSSpan-Di50moR2.js";import{_ as B}from"./FSFadeOut-K3Ty9hFX.js";import{F as A}from"./FSClickable-DbvAho3u.js";import{F as M}from"./FSSearchField-BjPE2X1g.js";import{F as j}from"./FSButtonCheckbox-63Sn0rib.js";import{u as K}from"./useDataCategories-vf3dV5aw.js";import{C as G}from"./useColors-Bs2u1_6J.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Q}from"./VSpacer-CTJA7Qkx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSDataTableUI-ClNajw9g.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./useSlots-C_N_WAus.js";import"./FSSelectField-D65DWRuU.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-C2Y5FAYh.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./FSButton-v1WOpc1k.js";import"./FSRouterLink-BeSr6Wr-.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSBaseField-CpNJbDpF.js";import"./FSTextField-CUJPYjwS.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-BKJXoopL.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./useTranslations-CJK8D24x.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./index-DfSX31J9.js";const $=w({name:"FSBaseDataCategoriesList",components:{FSDataTable:V,FSCol:y,FSFadeOut:B,FSClickable:A,FSRow:c,FSSpan:k,FSSearchField:M,FSButtonCheckbox:j,FSIcon:D},props:{tableCode:{type:String,required:!1,default:null},dataCategoryFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:a,fetching:f,entities:C}=K(),s=g(),l=g(!1),d=i=>e.modelValue.includes(i);return E(()=>[e.dataCategoryFilters,s.value,l.value],(i,m)=>{(!i&&!m||!z.isEqual(i,m))&&a({...e.dataCategoryFilters,search:s.value,correlated:l.value?!0:void 0})},{immediate:!0}),{fetchingDataCategories:f,dataCategories:C,ColorEnum:G,search:s,correlated:l,isSelected:d}}});function W(e,a,f,C,s,l){const d=n("FSSearchField"),i=n("FSButtonCheckbox"),m=n("FSClickable"),L=n("FSDataTable");return q(),N(y,null,{default:r(()=>[t(c,{align:"bottom-center",width:"50%"},{default:r(()=>[t(d,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=o=>e.search=o)},null,8,["modelValue"]),t(i,{label:e.$tr("ui.common.data-correlated","Correlated only"),color:e.ColorEnum.Success,prependIcon:"mdi-link",modelValue:e.correlated,"onUpdate:modelValue":a[1]||(a[1]=o=>e.correlated=o)},null,8,["label","color","modelValue"])]),_:1}),t(B,{maxHeight:"150px",maskHeight:"0px"},{default:r(()=>[t(L,F({loading:e.fetchingDataCategories,items:e.dataCategories,modelValue:e.$props.modelValue,showSearch:!1,tableCode:e.$props.tableCode,search:e.search,"onUpdate:modelValue":a[2]||(a[2]=o=>e.$emit("update:modelValue",o))},e.$attrs),O({"item.tile":r(({item:o})=>[t(m,F({padding:"12px",height:"60px",width:"233px",color:e.isSelected(o.id)?e.ColorEnum.Primary:e.ColorEnum.Dark,onClick:u=>e.$emit("update:modelValue",[o.id])},e.$attrs),{default:r(()=>[t(c,{align:"center-center",wrap:!1},{default:r(()=>[t(k,{lineClamp:1},{default:r(()=>[R(U(o.label),1)]),_:2},1024),t(Q),t(D,{color:o.correlated?e.ColorEnum.Primary:e.ColorEnum.Light,icon:o.correlated?"mdi-link":"mdi-link-off",variant:"dark"},null,8,["color","icon"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[P(e.$slots,(o,u)=>({name:u,fn:r(_=>[T(e.$slots,u,I(H(_)))])}))]),1040,["loading","items","modelValue","tableCode","search"])]),_:3})]),_:3})}const v=J($,[["render",W]]);$.__docgenInfo={displayName:"FSBaseDataCategoriesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dataCategoryFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataCategories/FSBaseDataCategoriesList.vue"]};const wo={title:"Foundation/Core/Lists/Base Lists/BaseDataCategoriesList",component:v,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataCategories1"]}}},p={render:e=>({components:{FSBaseDataCategoriesList:v},setup(){return{args:e}},template:`
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
}`,...(h=(b=p.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Eo=["Default"];export{p as Default,Eo as __namedExportsOrder,wo as default};
