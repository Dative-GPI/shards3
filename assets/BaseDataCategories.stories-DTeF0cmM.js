import{d as w,b as g,w as E,A as n,B as q,D as r,I as P,P as o,j as F,C as N,Q as O,M as T,N as I,O as R,J as U,K as j}from"./vue.esm-bundler-0BaZj8Cy.js";import{_ as A}from"./lodash-BrWYvtk2.js";import{F as V}from"./FSDataTable-BPIdXJER.js";import{F as D}from"./FSCol-D35grUmj.js";import{_ as c}from"./FSRow-CAJM3FZ0.js";import{F as y}from"./FSIcon-BwW5Hq8i.js";import{_ as k}from"./FSSpan-BhEzkP-a.js";import{_ as B}from"./FSFadeOut-BkUNDWQN.js";import{F as H}from"./FSClickable-CbOr5F2S.js";import{F as M}from"./FSSearchField-Co9Aacuk.js";import{F as z}from"./FSButtonCheckbox-BRfH8Hxi.js";import{u as J}from"./useDataCategories-CyTtSK-c.js";import{C as K}from"./useColors-SBQj5l4a.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as G}from"./VSpacer-BgyNXXzF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CljC1u5C.js";import"./useBreakpoints-2HHUcVIh.js";import"./css-Bhvr2onI.js";import"./color-v9Utm2wX.js";import"./theme-DvDKaioG.js";import"./dimensions-BEVfeJxO.js";import"./elevation-C2OyWM5g.js";import"./locale-CUGdfosF.js";import"./FSDataTableUI-B9BhrFQq.js";import"./vue-router-Rifkco1p.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BCFluEqr.js";import"./useRules-B-2YsFdr.js";import"./VSelectionControl-DanrcpVZ.js";import"./density-P84-FGcF.js";import"./VIcon-_OtdNVUv.js";import"./proxiedModel-gKZvE0id.js";import"./index-C_NEyI9V.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./index-A-BnjIhl.js";import"./transition-CCJeTa-A.js";import"./form-BxXGwYee.js";import"./FSCard-Dlw97Dqr.js";import"./FSText-BhZd10FY.js";import"./useSlots-16D6Zf08.js";import"./FSSelectField-ZzMijkL1.js";import"./VList-CxEWDEvR.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-B7sx4vRv.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./rounded-BByw44D4.js";import"./VImg-CiDZbmGb.js";import"./index-BSIzjytc.js";import"./FSSlideGroup-BR84Lg3c.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./FSButton-BDSx2V0J.js";import"./FSRouterLink-T7XwQQbH.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./FSBaseField-BF3lF9xX.js";import"./FSTextField-B8oyUUoT.js";import"./VField-fH-IYcLo.js";import"./loader-BfrQsM5c.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./FSDivider-CkPjt_Do.js";import"./FSChip-D6DhAgXx.js";import"./useTranslations-DJOHKWsD.js";import"./FSOptionGroup-9bNEOupd.js";import"./filter-C1K_d8Vd.js";import"./VBtn-C1BhuyNn.js";import"./filter-BsWs0jz4.js";import"./base-KmQLDroH.js";import"./useAppOrganisationId-C2_s9Mh4.js";import"./serviceFactory-qtdw0UKd.js";import"./composableFactory-K8W9GIHH.js";import"./index-DfSX31J9.js";const $=w({name:"FSBaseDataCategoriesList",components:{FSDataTable:V,FSCol:D,FSFadeOut:B,FSClickable:H,FSRow:c,FSSpan:k,FSSearchField:M,FSButtonCheckbox:z,FSIcon:y},props:{tableCode:{type:String,required:!1,default:null},dataCategoryFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:a,fetching:f,entities:C}=J(),s=g(),l=g(!1),d=i=>e.modelValue.includes(i);return E(()=>[e.dataCategoryFilters,s.value,l.value],(i,m)=>{(!i&&!m||!A.isEqual(i,m))&&a({...e.dataCategoryFilters,search:s.value,correlated:l.value?!0:void 0})},{immediate:!0}),{fetchingDataCategories:f,dataCategories:C,ColorEnum:K,search:s,correlated:l,isSelected:d}}});function W(e,a,f,C,s,l){const d=n("FSSearchField"),i=n("FSButtonCheckbox"),m=n("FSClickable"),L=n("FSDataTable");return P(),q(D,null,{default:r(()=>[o(c,{align:"bottom-center",width:"50%"},{default:r(()=>[o(d,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=t=>e.search=t)},null,8,["modelValue"]),o(i,{label:e.$tr("ui.common.data-correlated","Correlated only"),color:e.ColorEnum.Success,prependIcon:"mdi-link",modelValue:e.correlated,"onUpdate:modelValue":a[1]||(a[1]=t=>e.correlated=t)},null,8,["label","color","modelValue"])]),_:1}),o(B,{maxHeight:"150px",maskHeight:"0px"},{default:r(()=>[o(L,F({loading:e.fetchingDataCategories,items:e.dataCategories,modelValue:e.$props.modelValue,showSearch:!1,tableCode:e.$props.tableCode,search:e.search,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},e.$attrs),N({"item.tile":r(({item:t})=>[o(m,F({padding:"12px",height:"60px",width:"233px",color:e.isSelected(t.id)?e.ColorEnum.Primary:e.ColorEnum.Dark,onClick:u=>e.$emit("update:modelValue",[t.id])},e.$attrs),{default:r(()=>[o(c,{align:"center-center",wrap:!1},{default:r(()=>[o(k,{lineClamp:1},{default:r(()=>[U(j(t.label),1)]),_:2},1024),o(G),o(y,{color:t.correlated?e.ColorEnum.Primary:e.ColorEnum.Light,icon:t.correlated?"mdi-link":"mdi-link-off",variant:"dark"},null,8,["color","icon"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[O(e.$slots,(t,u)=>({name:u,fn:r(_=>[T(e.$slots,u,I(R(_)))])}))]),1040,["loading","items","modelValue","tableCode","search"])]),_:3})]),_:3})}const v=Q($,[["render",W]]);$.__docgenInfo={displayName:"FSBaseDataCategoriesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dataCategoryFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataCategories/FSBaseDataCategoriesList.vue"]};const Lt={title:"Foundation/Core/Lists/Base Lists/BaseDataCategoriesList",component:v,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataCategories1"]}}},p={render:e=>({components:{FSBaseDataCategoriesList:v},setup(){return{args:e}},template:`
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
}`,...(h=(b=p.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const _t=["Default"];export{p as Default,_t as __namedExportsOrder,Lt as default};
