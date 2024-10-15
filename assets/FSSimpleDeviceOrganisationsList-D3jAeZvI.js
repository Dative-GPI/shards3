import{d as s,w as n,y as a,z as c,A as l,m as d}from"./vue.esm-bundler-DTB_q9xr.js";import{F as u}from"./FSSimpleList-Cu1_-nFZ.js";import{u as f}from"./useDeviceOrganisations-LAHjjwf3.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSCol-CYWCfIBP.js";import"./FSFadeOut-CXlPGNaB.js";import"./uuid-DTaye2KM.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./FSSlideGroup-BvayNA85.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./FSCard-GtkwWKOo.js";import"./VProgressCircular-cHoQoKlr.js";import"./color-DBJfw4cY.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CJgnsR4e.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CiXeh9xR.js";import"./display-CKqU0R6P.js";import"./locale-BJQwrXJ7.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./VSpacer-y-n940VK.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./density-CJqFEH6j.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./useTranslations-BehwFxDb.js";import"./FSImage-Eyb6nJ-g.js";import"./FSImageUI-CN7Xmnjm.js";import"./FSLoader-y57uLHf2.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./VImg-I7jXrjsW.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSTile-BI_kc6PW.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSButtonEditIcon-DVc_cObM.js";import"./FSButtonRemoveIcon-B-SmGfk_.js";import"./filter-C1K_d8Vd.js";import"./hubFactory-BG4vFkeF.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./pathCrumb-Db-cq5HI.js";const e=s({name:"FSSimpleDeviceOrganisationsList",components:{FSSimpleList:u},props:{deviceOrganisationFilters:{type:Object,required:!1,default:()=>({})}},setup(i){const{entities:t,getMany:o,fetching:r}=f();return n(()=>i.deviceOrganisationFilters,()=>{o(i.deviceOrganisationFilters)},{immediate:!0}),{deviceOrganisations:t,fetching:r}}});function v(i,t,o,r,m,F){const p=a("FSSimpleList");return c(),l(p,d({items:i.deviceOrganisations,loading:i.fetching},i.$attrs),null,16,["items","loading"])}const Vi=g(e,[["render",v]]);e.__docgenInfo={displayName:"FSSimpleDeviceOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationFilters",type:{name:"DeviceOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/deviceOrganisations/FSSimpleDeviceOrganisationsList.vue"]};export{Vi as default};