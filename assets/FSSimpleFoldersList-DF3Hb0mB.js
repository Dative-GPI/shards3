import{d as s,w as n,y as l,z as a,A as d,m as f}from"./vue.esm-bundler-DTB_q9xr.js";import{F as c}from"./FSSimpleList-DW49R4ad.js";import{u}from"./useFolders-PK1DE3Vk.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSCol-CYWCfIBP.js";import"./FSFadeOut-BcBUJmEE.js";import"./uuid-DTaye2KM.js";import"./useColors-CeHYzu6a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CX_N7n5F.js";import"./FSSlideGroup-DmKFw8LF.js";import"./FSButtonNextIcon-C52WoPTh.js";import"./FSButton-BpVntGX1.js";import"./FSClickable-B6-SRbsx.js";import"./FSCard-B1dz5tzT.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-8KdV556C.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-UH0ZuYvc.js";import"./display-BhWGQDVt.js";import"./locale-BJQwrXJ7.js";import"./FSSearchField-N7Q5f50N.js";import"./FSTextField-C5__iWNH.js";import"./FSBaseField-CMNvz_3q.js";import"./VSpacer-Di7g3RCw.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./useTranslations-BehwFxDb.js";import"./FSImage-CQBut9Qm.js";import"./FSImageUI-BSBOp46R.js";import"./FSLoader-DZRtMKjr.js";import"./dimensions-CqoZOW6j.js";import"./elevation-JfXKLVfD.js";import"./VImg-C1aVTsth.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSTile-5__V1e0r.js";import"./FSCheckbox-D8gZetLs.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./FSButtonEditIcon-BJseYpt2.js";import"./FSButtonRemoveIcon-BOsRHebV.js";import"./filter-C1K_d8Vd.js";import"./pathCrumb-Db-cq5HI.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";const m=s({name:"FSSimpleFoldersList",components:{FSSimpleList:c},props:{folderFilters:{type:Object,required:!1,default:()=>({})}},setup(o){const{entities:t,getMany:r,fetching:i}=u();return n(()=>o.folderFilters,()=>{r(o.folderFilters)},{immediate:!0}),{folders:t,fetching:i}}});function S(o,t,r,i,p,_){const e=l("FSSimpleList");return a(),d(e,f({items:o.folders,loading:o.fetching},o.$attrs),null,16,["items","loading"])}const Oo=F(m,[["render",S]]);m.__docgenInfo={displayName:"FSSimpleFoldersList",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/folders/FSSimpleFoldersList.vue"]};export{Oo as default};