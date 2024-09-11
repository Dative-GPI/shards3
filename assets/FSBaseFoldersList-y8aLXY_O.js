import{d as A,b as z,c as O,o as R,w as f,y as c,z as n,A as m,M as G,N as J,B as d,m as F,I as K,J as _,K as H,E as v,D as h,L as Q,G as W}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as y}from"./lodash-BiW_TGGX.js";import{F as X}from"./FSDataTable-B6hZuxqM.js";import{_ as D}from"./FSIcon-DHDofKUo.js";import{F as Y}from"./FSFolderTileUI-CS5jPdo-.js";import{F as Z}from"./FSDashboardOrganisationTileUI-BtdCeqAm.js";import{F as x}from"./FSDashboardShallowTileUI-DYCefPbS.js";import{u as ee}from"./useFolders-C2Y4eB4b.js";import{F as g}from"./dashboards-BoeXcGJx.js";import{u as oe}from"./useUserOrganisations-CrfAsfeZ.js";import{u as ae}from"./useOrganisations-BZ8t9e4-.js";import{u as te}from"./useAppOrganisationId-BfPsGMlN.js";import{u as re}from"./useDashboardOrganisations-QK1n8jHf.js";import{u as ie}from"./useDashboardShallows-DeHwXP_Z.js";import{D as S}from"./dashboards-JSNI7pIu.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DIRgKG_M.js";import"./css-DLfrm0pR.js";import"./useColors-B5ivMAr9.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-YmDykHL-.js";import"./FSRow-CVY2l52N.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-CekjR0Nk.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-YoHHo_JV.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-DAS46KTX.js";import"./FSText-8i4Fp1Ld.js";import"./FSSearchField-CnDYBu_t.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-D8_kFGVg.js";import"./FSDialogMenu-CjU7jTTU.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-DCqEyw4i.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-VfM2CROL.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-CpPmq5Yu.js";import"./FSChip-vR1IHQ3P.js";import"./FSOptionGroup-wuNvwQjf.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSSimpleTileUI-Bfs1Zoux.js";import"./FSIconCard-Cc-LF2zh.js";import"./FSImage-CyPZfe-0.js";import"./FSImageUI-DhMjHi0K.js";import"./base-CmdGny12.js";import"./FSTile-BxIJyXna.js";import"./pathCrumb-Db-cq5HI.js";import"./permissionInfos-BPDgTHQl.js";import"./dashboardTranslation-C8Wdb1gl.js";import"./useAppLanguageCode-CwkNj4O3.js";const L=A({name:"FSBaseFoldersList",components:{FSDataTable:X,FSIcon:D,FSFolderTileUI:Y,FSDashboardOrganisationTileUI:Z,FSDashboardShallowTileUI:x},props:{foldersFilters:{type:Object,default:void 0,required:!1},dashboardOrganisationsFilters:{type:Object,default:void 0,required:!1},dashboardShallowsFilters:{type:Object,default:void 0,required:!1},modelValue:{type:Array,required:!1,default:()=>[]},itemTo:{type:Function,required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue","update:type","update:dashboard-type"],setup(e,{emit:b}){const{fetch:U,entity:w}=oe(),{entity:$,get:C}=ae(),{organisationId:p}=te(),{entities:T,fetching:I,getMany:V}=re(),{entities:o,fetching:i,getMany:l}=ie(),{entities:k,fetching:B,getMany:M}=ee(),u=z([]),N=O(()=>{var a;return(a=w.value)==null?void 0:a.mainDashboardId}),E=O(()=>{var a;return(a=$.value)==null?void 0:a.mainDashboardId}),q=O(()=>[...k.value.map(a=>({...a,type:g.Folder,dashboardType:S.None})),...y.sortBy([...T.value.map(a=>({...a,type:g.Dashboard,dashboardType:S.Organisation})),...o.value.map(a=>({...a,type:g.Dashboard,dashboardType:S.Shallow}))],a=>a.label)]),P=a=>{u.value=a;const t=q.value.filter(r=>u.value.includes(r.id));b("update:dashboard-type",t.map(r=>r.dashboardType)),b("update:modelValue",t.map(r=>r.id)),b("update:type",t.map(r=>r.type))},j=a=>{var t;return(t=u.value)==null?void 0:t.includes(a)};return R(()=>{U()}),f(()=>p.value,()=>{p.value&&C(p.value)},{immediate:!0}),f(()=>e.foldersFilters,(a,t)=>{(!a&&!t||!y.isEqual(a,t))&&M(e.foldersFilters,r=>{var s;return r.parentId==((s=e.foldersFilters)==null?void 0:s.parentId)})},{immediate:!0}),f(()=>e.dashboardOrganisationsFilters,(a,t)=>{(!a&&!t||!y.isEqual(a,t))&&V(e.dashboardOrganisationsFilters,r=>{var s;return r.folderId==((s=e.foldersFilters)==null?void 0:s.parentId)})},{immediate:!0}),f(()=>e.dashboardShallowsFilters,(a,t)=>{(!a&&!t||!y.isEqual(a,t))&&l(e.dashboardShallowsFilters,r=>{var s;return r.folderId==((s=e.foldersFilters)==null?void 0:s.parentId)})},{immediate:!0}),f(()=>e.modelValue,a=>{u.value=a},{immediate:!0}),{fetchingDashboardOrganisations:I,fetchingDashboardShallows:i,fetchingFolders:B,mainOrganisationDashboardId:E,mainUserDashboardId:N,selecteds:u,items:q,onSelect:P,isSelected:j,FoldersListType:g,DashboardType:S}}});function de(e,b,U,w,$,C){const p=c("FSFolderTileUI"),T=c("FSDashboardOrganisationTileUI"),I=c("FSDashboardShallowTileUI"),V=c("FSDataTable");return n(),m(V,F({items:e.items,"item-to":e.$props.itemTo,loading:e.fetchingFolders||e.fetchingDashboardOrganisations||e.fetchingDashboardShallows,tableCode:e.$props.tableCode,modelValue:e.selecteds,"onUpdate:modelValue":e.onSelect},e.$attrs),G({"item.main":d(({item:o})=>[o.id===e.mainOrganisationDashboardId?(n(),m(D,{key:0},{default:d(()=>[v(" mdi-account-group-outline ")]),_:1})):h("",!0),o.id===e.mainUserDashboardId?(n(),m(D,{key:1},{default:d(()=>[v(" mdi-home ")]),_:1})):h("",!0)]),"item.icon":d(({item:o})=>[Q(D,null,{default:d(()=>[v(W(o.icon),1)]),_:2},1024)]),"item.tile":d(({item:o,toggleSelect:i})=>[o.type==e.FoldersListType.Folder?(n(),m(p,F({key:0,bottomColor:o.colors},o,{modelValue:e.isSelected(o.id),"onUpdate:modelValue":l=>i(o),to:e.$props.itemTo&&e.$props.itemTo(o)}),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):h("",!0),o.type==e.FoldersListType.Dashboard&&o.dashboardType==e.DashboardType.Organisation?(n(),m(T,F({key:1,bottomColor:o.colors,modelValue:e.isSelected(o.id),"onUpdate:modelValue":l=>i(o),to:e.$props.itemTo&&e.$props.itemTo(o)},o),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):h("",!0),o.type==e.FoldersListType.Dashboard&&o.dashboardType==e.DashboardType.Shallow?(n(),m(I,F({key:2,bottomColor:o.colors,modelValue:e.isSelected(o.id),"onUpdate:modelValue":l=>i(o),to:e.$props.itemTo&&e.$props.itemTo(o)},o),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):h("",!0)]),_:2},[J(e.$slots,(o,i)=>({name:i,fn:d(l=>[K(e.$slots,i,_(H(l)))])}))]),1040,["items","item-to","loading","tableCode","modelValue","onUpdate:modelValue"])}const oa=se(L,[["render",de]]);L.__docgenInfo={displayName:"FSBaseFoldersList",exportName:"default",description:"",tags:{},props:[{name:"foldersFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardOrganisationsFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardShallowsFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"},{name:"update:type"},{name:"update:dashboard-type"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/folders/FSBaseFoldersList.vue"]};export{oa as default};
