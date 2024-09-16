import{d as l,c as p,w as u,y as c,z as h,A as f,m as g}from"./vue.esm-bundler-BSyvBTC9.js";import{F as b}from"./FSSimpleList-OSO6s-7o.js";import{u as O}from"./useDashboardOrganisations-QK1n8jHf.js";import{u as F}from"./useDashboardOrganisationTypes-BwvTnTaA.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./FSCol-DZA6pxA1.js";import"./FSIcon-DwJNOKvG.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSImage-BxDhaxzU.js";import"./FSImageUI-C0XOuHIu.js";import"./FSLoader-CtbqJzfZ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./FSTile-ClEhpyRn.js";import"./FSClickable-CS9kdIxp.js";import"./FSCard-Dakm4bPu.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSCheckbox-DPKcfP0u.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./form-B61Sg6X-.js";import"./FSFadeOut-D96pvLZm.js";import"./uuid-DTaye2KM.js";import"./FSSearchField-Cjbg81V-.js";import"./FSTextField-DIyIIzs_.js";import"./FSBaseField-BkzmckaL.js";import"./VSpacer-C4plVoTE.js";import"./FSButton-CyN0itWL.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CdSqQFV3.js";import"./FSButtonEditIcon-Bj5j-S1b.js";import"./FSButtonRemoveIcon-zbowsA9L.js";import"./filter-CTnmeGG4.js";import"./dashboardTranslation-C8Wdb1gl.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./pathCrumb-Db-cq5HI.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";const m=l({name:"FSSimpleDashboardsList",components:{FSSimpleList:b},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:()=>({})},dashboardOrganisationTypeFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:o,getMany:i,fetching:a}=O(),{entities:e,getMany:s,fetching:r}=F(),n=p(()=>a.value||r.value),d=p(()=>[...o.value,...e.value]);return u(()=>[t.dashboardOrganisationFilters,t.dashboardOrganisationTypeFilters],()=>{i(t.dashboardOrganisationFilters),s(t.dashboardOrganisationTypeFilters)},{immediate:!0}),{dashboards:d,fetching:n}}});function S(t,o,i,a,e,s){const r=c("FSSimpleList");return h(),f(r,g({items:t.dashboards,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const xt=y(m,[["render",S]]);m.__docgenInfo={displayName:"FSSimpleDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSSimpleDashboardsList.vue"]};export{xt as default};
