import{_ as u}from"./lodash-BiW_TGGX.js";import{d as j,b as A,c as V,g as E,w as h,y as b,z as n,A as d,B as z,O as R,C as i,m as f,K as H,L as K,M as G,N as J,H as v,I as Q,F as m}from"./vue.esm-bundler-CWdIlc2r.js";import{F as W}from"./FSDataTable-BIgFSJSE.js";import{F as g}from"./FSIcon-CyS8zLbP.js";import{F as X}from"./FSDashboardShallowTileUI-BkL5doOM.js";import{F as Y}from"./FSDashboardOrganisationTileUI-CbNgdRDL.js";import{F as Z}from"./FSDashboardOrganisationTypeTileUI-C55k5vRh.js";import{u as _}from"./useDashboardOrganisationTypes-BvzdPd0m.js";import{u as x}from"./useDashboardOrganisations-BPwICFB4.js";import{u as aa}from"./useDashboardShallows-CDfWwfZ-.js";import{u as oa}from"./useUserOrganisations-t1LTn7L9.js";import{u as ea}from"./useOrganisations-DicskG1O.js";import{u as ta}from"./useAppOrganisationId-BmirlPAl.js";import{D as c}from"./dashboards-JSNI7pIu.js";import{_ as ra}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-h4slsrT9.js";import"./useBreakpoints-INFVV7da.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./css-BWDYXGFo.js";import"./color-B0htL_ZM.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-CvoATp5Q.js";import"./FSRow-BnsweOMX.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-C4myWXVd.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-bKRtBqVc.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./VIcon-Bo7R9vIQ.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-BxmDRzjE.js";import"./FSText-BIOb5fBT.js";import"./FSSearchField-_SEFeUDc.js";import"./FSTextField-BLVYx7ij.js";import"./FSBaseField-BlQcLyVQ.js";import"./FSButton-Bc8wnoJs.js";import"./FSClickable-JTcIAbNo.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-CvyvsNwI.js";import"./FSDialogMenu-D9HgWnX3.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-qOOOxz_-.js";import"./FSButtonNextIcon-DhMVExMM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-7WnTN5nE.js";import"./FSWrapGroup-BTCmZHSW.js";import"./FSFadeOut-BhgieYVE.js";import"./FSRadio-n9JXvfPW.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-D5P4hFmo.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-LluqAkon.js";import"./FSChip-BRgg5HGZ.js";import"./FSOptionGroup-DEt-ejts.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./FSSimpleTileUI-Cs_X2E_V.js";import"./FSIconCard-CIp_Eg3h.js";import"./FSImage-DuNoUtXF.js";import"./FSImageUI-BT_U1auP.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTile-BlV1I_VU.js";import"./dashboardTranslation-DrunH9d2.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./pathCrumb-Db-cq5HI.js";import"./permissionInfos-BPDgTHQl.js";const q=j({name:"FSBaseDashboardsList",components:{FSDataTable:W,FSIcon:g,FSDashboardOrganisationTileUI:Y,FSDashboardOrganisationTypeTileUI:Z,FSDashboardShallowTileUI:X},props:{tableCode:{type:String,required:!1,default:null},dashboardOrganisationTypeFetchFilter:{type:Object,default:void 0,required:!1},dashboardOrganisationsFilters:{type:Object,default:void 0,required:!1},dashboardShallowsFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue","update:type"],setup(a,{emit:y}){const{entities:I,fetching:U,getMany:w}=_(),{entities:$,fetching:T,getMany:D}=x(),{entities:F,fetching:O,getMany:o}=aa(),{fetch:r,entity:s}=oa(),{entity:M,get:k}=ea(),{organisationId:S}=ta(),p=A(a.modelValue),C=V(()=>u.sortBy([...I.value.map(e=>({...e,dashboardType:c.OrganisationType})),...$.value.map(e=>({...e,dashboardType:c.Organisation})),...F.value.map(e=>({...e,dashboardType:c.Shallow}))],e=>e.label)),B=V(()=>{var e;return(e=s.value)==null?void 0:e.mainDashboardId}),L=V(()=>{var e;return(e=M.value)==null?void 0:e.mainDashboardId}),N=e=>{p.value=e;const t=C.value.filter(l=>p.value.includes(l.id));y("update:modelValue",t.map(l=>l.id)),y("update:type",t.map(l=>l.dashboardType))},P=e=>{var t;return(t=p.value)==null?void 0:t.includes(e)};return E(()=>{r()}),h(()=>S.value,()=>{S.value&&k(S.value)},{immediate:!0}),h(()=>a.dashboardOrganisationTypeFetchFilter,(e,t)=>{(!e&&!t||!u.isEqual(e,t))&&w(a.dashboardOrganisationTypeFetchFilter)},{immediate:!0}),h(()=>a.dashboardOrganisationsFilters,(e,t)=>{(!e&&!t||!u.isEqual(e,t))&&D(a.dashboardOrganisationsFilters)},{immediate:!0}),h(()=>a.dashboardShallowsFilters,(e,t)=>{(!e&&!t||!u.isEqual(e,t))&&o(a.dashboardShallowsFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:U,fetchingDashboardOrganisations:T,fetchingDashboardShallows:O,selecteds:p,items:C,mainUserDashboardId:B,mainOrganisationDashboardId:L,onSelect:N,isSelected:P,DashboardType:c}}});function ia(a,y,I,U,w,$){const T=b("FSDashboardOrganisationTypeTileUI"),D=b("FSDashboardOrganisationTileUI"),F=b("FSDashboardShallowTileUI"),O=b("FSDataTable");return n(),d(O,f({defaultMode:"iterator",items:a.items,itemTo:a.$props.itemTo,loading:a.fetchingDashboardOrganisationTypes||a.fetchingDashboardOrganisations||a.fetchingDashboardShallows,tableCode:a.$props.tableCode,modelValue:a.selecteds,"onUpdate:modelValue":a.onSelect},a.$attrs),z({"item.icon":i(({item:o})=>[J(g,null,{default:i(()=>[v(Q(o.icon),1)]),_:2},1024)]),"item.main":i(({item:o})=>[o.id===a.mainOrganisationDashboardId?(n(),d(g,{key:0},{default:i(()=>[v(" mdi-account-group-outline ")]),_:1})):m("",!0),o.id===a.mainUserDashboardId?(n(),d(g,{key:1},{default:i(()=>[v(" mdi-home ")]),_:1})):m("",!0)]),"item.tile":i(({item:o,toggleSelect:r})=>[o.dashboardType==a.DashboardType.OrganisationType?(n(),d(T,f({key:0,bottomColor:o.colors,to:a.$props.itemTo&&a.$props.itemTo(o),modelValue:a.isSelected(o.id),"onUpdate:modelValue":s=>r(o)},o),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),o.dashboardType==a.DashboardType.Organisation?(n(),d(D,f({key:1,bottomColor:o.colors,to:a.$props.itemTo&&a.$props.itemTo(o),modelValue:a.isSelected(o.id),"onUpdate:modelValue":s=>r(o)},o),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),o.dashboardType==a.DashboardType.Shallow?(n(),d(F,f({key:2,bottomColor:o.colors,modelValue:a.isSelected(o.id),"onUpdate:modelValue":s=>r(o),to:a.$props.itemTo&&a.$props.itemTo(o)},o),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):m("",!0)]),_:2},[R(a.$slots,(o,r)=>({name:r,fn:i(s=>[H(a.$slots,r,K(G(s)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue","onUpdate:modelValue"])}const re=ra(q,[["render",ia]]);q.__docgenInfo={displayName:"FSBaseDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationTypeFetchFilter",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardOrganisationsFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardShallowsFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"},{name:"update:type"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue"]};export{re as default};