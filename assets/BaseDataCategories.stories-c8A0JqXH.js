import{d as B,c as L,w as _,y as f,z as $,A as k,B as q,O as w,C as a,m as g,K as E,L as O,M as N,N as r,H as P,I as T}from"./vue.esm-bundler-l-siv0w9.js";import{_ as I}from"./lodash-BiW_TGGX.js";import{_ as p}from"./FSRow-CbEgVN08.js";import{F as b}from"./FSIcon-uIr9VdFq.js";import{_ as y}from"./FSSpan-Di50moR2.js";import{F as R}from"./FSClickable-Up0p3Vk8.js";import{F as V}from"./FSDataTable-N4bpqwvP.js";import{u as z}from"./useDataCategories-vf3dV5aw.js";import{C as A}from"./useColors-Bs2u1_6J.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./useSlots-C_N_WAus.js";import"./FSCard-DL4SLpmS.js";import"./FSCol-BvqytbKT.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./FSLoader-kY4Od3NB.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSDataTableUI-DIwPRmvm.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSText-BwKgSTLP.js";import"./FSSearchField-C1NE5kA-.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-DcUuAZqz.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-DVM2ddcd.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-CBieAKh7.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Cicg58Bq.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-d_NLzp9y.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-fC8L6A7v.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./index-DfSX31J9.js";const D=B({name:"FSBaseDataCategoriesList",components:{FSDataTable:V,FSClickable:R,FSRow:p,FSSpan:y,FSIcon:b},props:{tableCode:{type:String,required:!1,default:null},dataCategoryFilters:{type:Object,required:!1,default:null},correlatedOnly:{type:Boolean,required:!1,default:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:i,fetching:d,entities:m}=z(),u=L(()=>e.correlatedOnly?m.value.filter(t=>t.correlated):m.value),c=t=>e.modelValue.includes(t);return _(()=>e.dataCategoryFilters,(t,s)=>{(!t&&!s||!I.isEqual(t,s))&&i({...e.dataCategoryFilters})},{immediate:!0}),{fetchingDataCategories:d,dataCategories:u,ColorEnum:A,isSelected:c}}});function j(e,i,d,m,u,c){const t=f("FSClickable"),s=f("FSDataTable");return $(),k(s,g({loading:e.fetchingDataCategories,items:e.dataCategories,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),q({"item.tile":a(({item:o})=>[r(t,g({padding:"12px",height:"60px",width:"233px",color:e.isSelected(o.id)?e.ColorEnum.Primary:e.ColorEnum.Dark,onClick:n=>e.$emit("update:modelValue",[o.id])},e.$attrs),{default:a(()=>[r(p,{align:"center-center",wrap:!1},{default:a(()=>[r(y,null,{default:a(()=>[P(T(o.label),1)]),_:2},1024),r(p,{align:"center-right"},{default:a(()=>[r(b,{color:o.correlated?e.ColorEnum.Primary:e.ColorEnum.Light,icon:o.correlated?"mdi-link":"mdi-link-off",variant:"dark"},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[w(e.$slots,(o,n)=>({name:n,fn:a(v=>[E(e.$slots,n,O(N(v)))])}))]),1040,["loading","items","tableCode","modelValue"])}const h=M(D,[["render",j]]);D.__docgenInfo={displayName:"FSBaseDataCategoriesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dataCategoryFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"correlatedOnly",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataCategories/FSBaseDataCategoriesList.vue"]};const bt={title:"Foundation/Core/Lists/Base Lists/BaseDataCategoriesList",component:h,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataCategories1"]}}},l={render:e=>({components:{FSBaseDataCategoriesList:h},setup(){return{args:e}},template:`
      <FSBaseDataCategoriesList
        :tableCode="args.tableCode"
        v-model="args.modelValue"
      />
    `}),args:{tableCode:"dataCategories1",modelValue:[]}};var C,F,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        v-model="args.modelValue"
      />
    \`
  }),
  args: {
    tableCode: 'dataCategories1',
    modelValue: []
  }
}`,...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const yt=["Default"];export{l as Default,yt as __namedExportsOrder,bt as default};
