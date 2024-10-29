import{d as M,c as D,g as U,w as S,y as d,z as s,A as n,B as k,O as w,C as a,m as C,K as N,L as A,M as P,N as b,H as y,F as V,I as R}from"./vue.esm-bundler-l-siv0w9.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as $}from"./FSDataTable-BIzcbioE.js";import{F as u}from"./FSIcon-CvjHaRpL.js";import{_}from"./FSRow-CbEgVN08.js";import{F as E}from"./FSText-BV49O4zh.js";import{F as j}from"./FSChip-CZIsa9Si.js";import{F as H}from"./FSDashboardOrganisationTypeTileUI-DbOijt3u.js";import{u as K}from"./useUserOrganisations-Ds2BTiaH.js";import{u as G}from"./useOrganisations-LhrUMelk.js";import{u as J}from"./useDashboardOrganisationTypes-CRvSBmAg.js";import{u as Q}from"./useAppOrganisationId-Cv6r7Qq7.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-t85MEsQz.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-r8nvatqt.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSDataTableUI-CzwKteV4.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BuNOyTVK.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-CBOjzTDC.js";import"./FSSearchField-BZ0BuXDA.js";import"./FSTextField-Dz3TuJjO.js";import"./FSBaseField-kRvwdySD.js";import"./FSButton-CL_za1Dz.js";import"./FSClickable-1JFt1tAh.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-CZSeX_R9.js";import"./VList-Cw9EjfMs.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-Cdvxn-7r.js";import"./FSButtonNextIcon-DqV2jRKX.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CtnEZ-QL.js";import"./FSWrapGroup-CDPc2Zen.js";import"./FSFadeOut-qg65ZIq1.js";import"./FSRadio-DYhcD128.js";import"./VSelect-B0802BOF.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BtyXSsGO.js";import"./FSOptionGroup-BjRhv9or.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSSimpleTileUI-DGZhtlcp.js";import"./FSIconCard-BRF-Mlv3.js";import"./FSImage-yMh7QIr7.js";import"./FSImageUI-CFHBCxhz.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTile-DNxKe0Ro.js";import"./permissionInfos-BPDgTHQl.js";import"./dashboardTranslation-CAYhusM0.js";import"./useAppLanguageCode-BzH56rSm.js";const B=M({name:"FSBaseDashboardOrganisationTypesList",components:{FSDataTable:$,FSIcon:u,FSRow:_,FSText:E,FSChip:j,FSDashboardOrganisationTypeTileUI:H},props:{tableCode:{type:String,required:!1,default:null},dashboardOrganisationTypeFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,required:!1,default:()=>[]}},setup(o){const{getMany:p,fetching:T,entities:h}=J(),{fetch:O,entity:g}=K(),{get:c,entity:m}=G(),{organisationId:i}=Q(),f=D(()=>g.value?g.value.mainDashboardId:null),e=D(()=>m.value?m.value.mainDashboardId:null),r=t=>o.modelValue.includes(t);return U(()=>{O()}),S(i,()=>{i.value&&c(i.value)},{immediate:!0}),S(()=>o.dashboardOrganisationTypeFilters,(t,F)=>{(!t&&!F||!z.isEqual(t,F))&&p(o.dashboardOrganisationTypeFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:T,userOrganisationMainDashboardId:f,organisationMainDashboardId:e,dashboardOrganisationTypes:h,isSelected:r}}});function X(o,p,T,h,O,g){const c=d("FSText"),m=d("FSChip"),i=d("FSDashboardOrganisationTypeTileUI"),f=d("FSDataTable");return s(),n(f,C({defaultMode:"iterator",loading:o.fetchingDashboardOrganisationTypes,items:o.dashboardOrganisationTypes,itemTo:o.$props.itemTo,tableCode:o.$props.tableCode,modelValue:o.$props.modelValue,"onUpdate:modelValue":p[0]||(p[0]=e=>o.$emit("update:modelValue",e))},o.$attrs),k({"item.main":a(({item:e})=>[b(_,null,{default:a(()=>[e.id===o.organisationMainDashboardId?(s(),n(u,{key:0},{default:a(()=>[y(" mdi-account-group-outline ")]),_:1})):V("",!0),e.id===o.userOrganisationMainDashboardId?(s(),n(u,{key:1},{default:a(()=>[y(" mdi-home ")]),_:1})):V("",!0)]),_:2},1024)]),"item.icon":a(({item:e})=>[b(u,null,{default:a(()=>[y(R(e.icon),1)]),_:2},1024)]),"item.organisationTypeLabel":a(({item:e})=>[e.organisationTypeId?(s(),n(c,{key:0,label:e.organisationTypeLabel},null,8,["label"])):(s(),n(m,{key:1,variant:"standard",label:o.$tr("ui.common.all","All")},null,8,["label"]))]),"item.tile":a(({item:e,toggleSelect:r})=>[b(i,C({bottomColor:e.colors,to:o.$props.itemTo&&o.$props.itemTo(e),modelValue:o.isSelected(e.id),"onUpdate:modelValue":t=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])]),_:2},[w(o.$slots,(e,r)=>({name:r,fn:a(t=>[N(o.$slots,r,A(P(t)))])}))]),1040,["loading","items","itemTo","tableCode","modelValue"])}const q=W(B,[["render",X]]);B.__docgenInfo={displayName:"FSBaseDashboardOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboardOrganisationTypes/FSBaseDashboardOrganisationTypesList.vue"]};const ze={title:"Foundation/Core/Lists/Base Lists/BaseDashboardOrganisationTypesList",component:q,subcomponents:{FSDataTable:$},tags:["autodocs"],argTypes:{}},l={render:o=>({components:{FSBaseDashboardOrganisationTypesList:q},setup(){return{args:o}},template:`
      <FSBaseDashboardOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dashboardOrganisationTypes1"}};var I,v,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDashboardOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDashboardOrganisationTypesList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dashboardOrganisationTypes1'
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const Ee=["Default"];export{l as Default,Ee as __namedExportsOrder,ze as default};
