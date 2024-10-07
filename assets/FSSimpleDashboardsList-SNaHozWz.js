import{d as l,c as p,w as u,y as c,z as h,A as f,m as g}from"./vue.esm-bundler-CWdIlc2r.js";import{F as b}from"./FSSimpleList-CYp1LmcZ.js";import{u as O}from"./useDashboardOrganisations-BPwICFB4.js";import{u as F}from"./useDashboardOrganisationTypes-BvzdPd0m.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D9oM1Ufa.js";import"./css-rhgMLwoH.js";import"./useBreakpoints-DVmyWqF2.js";import"./FSCol-DyDZsJ9U.js";import"./FSFadeOut-BkMq8VeO.js";import"./uuid-DTaye2KM.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./FSSlideGroup-gtoPHKCV.js";import"./FSButtonNextIcon-Czmt2YBZ.js";import"./FSButton-BpyUfJIg.js";import"./FSClickable-CWKuMNrW.js";import"./FSCard-CN9NbS7f.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-WKxYfmnu.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-CF3g_zZI.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./index-D2mfwXxT.js";import"./display-4460MzAg.js";import"./locale-BGMMnFfJ.js";import"./FSSearchField-DhTJXKam.js";import"./FSTextField-DiTX7r-c.js";import"./FSBaseField-CVTPeQEI.js";import"./VSpacer-DLFo12A6.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSImage-DYrQmZ2M.js";import"./FSImageUI-DRh0C2Kt.js";import"./FSLoader-BuPx1Vmx.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./VImg-Bj7MyRJQ.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTile-T7YcP5W6.js";import"./FSCheckbox-CaqPs9O0.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSButtonEditIcon-9KVn8_g5.js";import"./FSButtonRemoveIcon-BOqytNtk.js";import"./filter-C1K_d8Vd.js";import"./dashboardTranslation-DrunH9d2.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";const m=l({name:"FSSimpleDashboardsList",components:{FSSimpleList:b},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:()=>({})},dashboardOrganisationTypeFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:o,getMany:i,fetching:a}=O(),{entities:e,getMany:s,fetching:r}=F(),n=p(()=>a.value||r.value),d=p(()=>[...o.value,...e.value]);return u(()=>[t.dashboardOrganisationFilters,t.dashboardOrganisationTypeFilters],()=>{i(t.dashboardOrganisationFilters),s(t.dashboardOrganisationTypeFilters)},{immediate:!0}),{dashboards:d,fetching:n}}});function S(t,o,i,a,e,s){const r=c("FSSimpleList");return h(),f(r,g({items:t.dashboards,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const Ht=y(m,[["render",S]]);m.__docgenInfo={displayName:"FSSimpleDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSSimpleDashboardsList.vue"]};export{Ht as default};
