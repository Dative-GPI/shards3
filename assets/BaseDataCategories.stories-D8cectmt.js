import{d as w,b as g,w as E,y as n,z as q,A as N,C as r,N as t,m as F,B as O,O as P,K as T,L as I,M as H,H as R,I as U}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-D-Vw4zo7.js";import{F as y}from"./FSCol-DyDZsJ9U.js";import{_ as c}from"./FSRow-D9oM1Ufa.js";import{F as D}from"./FSIcon-CF3g_zZI.js";import{_ as k}from"./FSSpan-WKxYfmnu.js";import{_ as B}from"./FSFadeOut-BkMq8VeO.js";import{F as A}from"./FSClickable-CWKuMNrW.js";import{F as M}from"./FSSearchField-DhTJXKam.js";import{F as j}from"./FSButtonCheckbox-Co5fUDLI.js";import{u as K}from"./useDataCategories-CFbAcJoA.js";import{C as G}from"./useColors-CrLBSafx.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Q}from"./VSpacer-DLFo12A6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-BuPx1Vmx.js";import"./useBreakpoints-DVmyWqF2.js";import"./css-rhgMLwoH.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSDataTableUI-vuXcrYWK.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-CaqPs9O0.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./VIcon-Bo7R9vIQ.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-CN9NbS7f.js";import"./FSText-BvtpuDSr.js";import"./useSlots-zwOl0abH.js";import"./FSSelectField-BxqOi3HU.js";import"./FSDialogMenu-B5BSmELO.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-CiFPvmMB.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-gtoPHKCV.js";import"./FSButtonNextIcon-Czmt2YBZ.js";import"./FSButton-BpyUfJIg.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-C0KkFsPn.js";import"./FSWrapGroup-L0hGNovc.js";import"./FSBaseField-CVTPeQEI.js";import"./FSTextField-DiTX7r-c.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./rounded-C73YOAN4.js";import"./index-BPQCAcxH.js";import"./FSRadio-vBBbKX-y.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-7B3TLkE6.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-Dkj5LzZl.js";import"./FSChip-lauGnn4d.js";import"./useTranslations-CEnu7PZQ.js";import"./FSOptionGroup-BMa6Hpmw.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./index-DfSX31J9.js";const $=w({name:"FSBaseDataCategoriesList",components:{FSDataTable:V,FSCol:y,FSFadeOut:B,FSClickable:A,FSRow:c,FSSpan:k,FSSearchField:M,FSButtonCheckbox:j,FSIcon:D},props:{tableCode:{type:String,required:!1,default:null},dataCategoryFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:a,fetching:f,entities:C}=K(),s=g(),l=g(!1),d=i=>e.modelValue.includes(i);return E(()=>[e.dataCategoryFilters,s.value,l.value],(i,m)=>{(!i&&!m||!z.isEqual(i,m))&&a({...e.dataCategoryFilters,search:s.value,correlated:l.value?!0:void 0})},{immediate:!0}),{fetchingDataCategories:f,dataCategories:C,ColorEnum:G,search:s,correlated:l,isSelected:d}}});function W(e,a,f,C,s,l){const d=n("FSSearchField"),i=n("FSButtonCheckbox"),m=n("FSClickable"),L=n("FSDataTable");return q(),N(y,null,{default:r(()=>[t(c,{align:"bottom-center",width:"50%"},{default:r(()=>[t(d,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=o=>e.search=o)},null,8,["modelValue"]),t(i,{label:e.$tr("ui.common.data-correlated","Correlated only"),color:e.ColorEnum.Success,prependIcon:"mdi-link",modelValue:e.correlated,"onUpdate:modelValue":a[1]||(a[1]=o=>e.correlated=o)},null,8,["label","color","modelValue"])]),_:1}),t(B,{maxHeight:"150px",maskHeight:"0px"},{default:r(()=>[t(L,F({loading:e.fetchingDataCategories,items:e.dataCategories,modelValue:e.$props.modelValue,showSearch:!1,tableCode:e.$props.tableCode,search:e.search,"onUpdate:modelValue":a[2]||(a[2]=o=>e.$emit("update:modelValue",o))},e.$attrs),O({"item.tile":r(({item:o})=>[t(m,F({padding:"12px",height:"60px",width:"233px",color:e.isSelected(o.id)?e.ColorEnum.Primary:e.ColorEnum.Dark,onClick:u=>e.$emit("update:modelValue",[o.id])},e.$attrs),{default:r(()=>[t(c,{align:"center-center",wrap:!1},{default:r(()=>[t(k,{lineClamp:1},{default:r(()=>[R(U(o.label),1)]),_:2},1024),t(Q),t(D,{color:o.correlated?e.ColorEnum.Primary:e.ColorEnum.Light,icon:o.correlated?"mdi-link":"mdi-link-off",variant:"dark"},null,8,["color","icon"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[P(e.$slots,(o,u)=>({name:u,fn:r(_=>[T(e.$slots,u,I(H(_)))])}))]),1040,["loading","items","modelValue","tableCode","search"])]),_:3})]),_:3})}const v=J($,[["render",W]]);$.__docgenInfo={displayName:"FSBaseDataCategoriesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dataCategoryFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataCategories/FSBaseDataCategoriesList.vue"]};const _o={title:"Foundation/Core/Lists/Base Lists/BaseDataCategoriesList",component:v,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataCategories1"]}}},p={render:e=>({components:{FSBaseDataCategoriesList:v},setup(){return{args:e}},template:`
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
}`,...(h=(b=p.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const wo=["Default"];export{p as Default,wo as __namedExportsOrder,_o as default};