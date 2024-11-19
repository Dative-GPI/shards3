import{d as l,c as p,w as u,y as c,z as h,A as f,m as g}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as b}from"./FSSimpleList-BAzQM82D.js";import{u as O}from"./useDashboardOrganisations-SYuIiyjn.js";import{u as F}from"./useDashboardOrganisationTypes-DAOOKznG.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CSQtiyAx.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./FSCol-D8gLxM2E.js";import"./FSLoader-PksHGtEK.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./color-DdAXPAA0.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./FSFadeOut-B5r2PNGg.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-8udoapu6.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./FSCard-Bfo4Z0Zf.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSIcon-DfjSexyz.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./proxiedModel-BYnu2EOK.js";import"./index-B-qTxNvr.js";import"./display-BUGvawh3.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./transition-BtBp4lzQ.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./density-B5LNz2JK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./useTranslations-DgvmBCqU.js";import"./FSImage-9J49soYl.js";import"./FSImageUI-CifHzJ5L.js";import"./VImg-Bi-pKvLj.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSTile-BHCSbyjx.js";import"./FSCheckbox-3iIuKfLX.js";import"./VSelectionControl-DbX2q5FD.js";import"./index-BF2Ge4Ib.js";import"./FSButtonEditIcon-CcGAR1oc.js";import"./FSButtonRemoveIcon-0uUI9Zc1.js";import"./filter-C1K_d8Vd.js";import"./dashboardTranslation-C6soLE7g.js";import"./useAppLanguageCode-C2XicOK_.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";const m=l({name:"FSSimpleDashboardsList",components:{FSSimpleList:b},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:()=>({})},dashboardOrganisationTypeFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:o,getMany:i,fetching:a}=O(),{entities:e,getMany:s,fetching:r}=F(),n=p(()=>a.value||r.value),d=p(()=>[...o.value,...e.value]);return u(()=>[t.dashboardOrganisationFilters,t.dashboardOrganisationTypeFilters],()=>{i(t.dashboardOrganisationFilters),s(t.dashboardOrganisationTypeFilters)},{immediate:!0}),{dashboards:d,fetching:n}}});function S(t,o,i,a,e,s){const r=c("FSSimpleList");return h(),f(r,g({items:t.dashboards,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const Jt=y(m,[["render",S]]);m.__docgenInfo={displayName:"FSSimpleDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSSimpleDashboardsList.vue"]};export{Jt as default};
