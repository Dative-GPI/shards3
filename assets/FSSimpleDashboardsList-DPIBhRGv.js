import{d as l,c as n,w as u,y as c,z as h,A as f,m as g}from"./vue.esm-bundler-Vj2X7okO.js";import{F as b}from"./FSSimpleList-V6oWBVc2.js";import{u as O}from"./useDashboardOrganisations-Co-sJ814.js";import{u as F}from"./useDashboardOrganisationTypes-GYZdSptP.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./FSCol-Bk577joi.js";import"./FSImage-xcHxoARe.js";import"./FSImageUI-oKoqxlvk.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./VImg-BXfgvzNq.js";import"./useColors-ClJ5KOuK.js";import"./index-3zl-tJp_.js";import"./theme-DqOMA9k1.js";import"./color-Dk23S21P.js";import"./dimensions-CBrtQk_X.js";import"./elevation-DH7kyzD7.js";import"./locale-CMOn_BOp.js";import"./rounded-B-50KYhN.js";import"./transition-Cs7QtK7U.js";import"./index-DQeMThUY.js";import"./FSIcon-C5J86pUk.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSTile-DHr5L1WJ.js";import"./FSClickable-HpeyF8B8.js";import"./FSCard-CD3PuQHv.js";import"./VProgressCircular-BALYDMME.js";import"./FSCheckbox-CEveiKls.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./index-BN7Lbnw3.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./index-7QBgy7JM.js";import"./form-BN2rR47-.js";import"./FSButtonRemoveIcon-BUEPwPpi.js";import"./FSButton-DypSO1L1.js";import"./FSButtonEditIcon-CUVEdQBy.js";import"./dashboardTranslation-Cr4rElwF.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";const p=l({name:"FSSimpleDashboardsList",components:{FSSimpleList:b},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:()=>({})},dashboardOrganisationTypeFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:o,getMany:i,fetching:a}=O(),{entities:e,getMany:s,fetching:r}=F(),m=n(()=>a.value||r.value),d=n(()=>[...o.value,...e.value]);return u(()=>[t.dashboardOrganisationFilters,t.dashboardOrganisationTypeFilters],()=>{i(t.dashboardOrganisationFilters),s(t.dashboardOrganisationTypeFilters)},{immediate:!0}),{dashboards:d,fetching:m}}});function S(t,o,i,a,e,s){const r=c("FSSimpleList");return h(),f(r,g({items:t.dashboards,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const Dt=y(p,[["render",S]]);p.__docgenInfo={displayName:"FSSimpleDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSSimpleDashboardsList.vue"]};export{Dt as default};
